// The microphone level, read through the Web Audio API.
//
// WHY THIS FILE EXISTS. The first build used the `record` package for both
// platforms and, in a browser, pressing «Измерить» did nothing at all — no
// number, no error, the button did not even change to «Стоп». The owner tests
// every build by scanning the QR code, so "works on Android" is not working.
//
// A browser will not hand out raw PCM the way Android does, but it has
// something better for this job: an AnalyserNode, which is exactly a meter.
// `getByteTimeDomainData` gives the waveform of the last frame, and the RMS of
// that IS the level. No decoding, no buffers to reassemble, no format to get
// wrong.
//
// THREE THINGS THAT ARE EASY TO GET WRONG HERE:
//
//  * **The permission needs a real tap.** `getUserMedia` outside a user
//    gesture is refused, and refused silently. `noiseLevelStart` is therefore
//    called straight out of the button handler.
//  * **The browser "helps" by default.** Echo cancellation, noise suppression
//    and automatic gain control all change the level — which is the one thing
//    being measured. They are turned off explicitly.
//  * **A stopped stream must release the microphone**, or the phone keeps its
//    recording indicator lit after the app has finished, which reads as an app
//    that is listening when it says it is not.

(function () {
  'use strict';

  var context = null;
  var analyser = null;
  var stream = null;
  var buffer = null;
  var state = { ok: false, reason: 'не запущено', rms: 0, peak: 0 };

  window.noiseLevelStart = function () {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      state.reason = 'браузер не даёт доступ к микрофону';
      return Promise.resolve(false);
    }
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      }
    }).then(function (got) {
      stream = got;
      var Ctx = window.AudioContext || window.webkitAudioContext;
      context = new Ctx();
      // Safari starts the context suspended until a gesture resumes it.
      if (context.state === 'suspended') context.resume();
      analyser = context.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0;
      context.createMediaStreamSource(stream).connect(analyser);
      buffer = new Uint8Array(analyser.fftSize);
      state.ok = true;
      state.reason = '';
      return true;
    }).catch(function () {
      state.ok = false;
      state.reason = 'доступ к микрофону не разрешён';
      return false;
    });
  };

  // Root-mean-square of the frame, as a fraction of full scale, plus the peak.
  // RMS is what corresponds to loudness; peak is what matters for damage, and
  // the two are reported separately rather than one standing in for the other.
  window.noiseLevelRead = function () {
    if (!state.ok || !analyser) {
      return { ok: false, reason: state.reason, rms: 0, peak: 0 };
    }
    analyser.getByteTimeDomainData(buffer);
    var sum = 0;
    var peak = 0;
    for (var i = 0; i < buffer.length; i++) {
      // Bytes are centred on 128; convert to -1..1.
      var v = (buffer[i] - 128) / 128;
      sum += v * v;
      var size = Math.abs(v);
      if (size > peak) peak = size;
    }
    return {
      ok: true,
      reason: '',
      rms: Math.sqrt(sum / buffer.length),
      peak: peak
    };
  };

  window.noiseLevelStop = function () {
    if (stream) {
      stream.getTracks().forEach(function (track) { track.stop(); });
      stream = null;
    }
    if (context) {
      try { context.close(); } catch (e) { /* already closed */ }
      context = null;
    }
    analyser = null;
    state.ok = false;
    state.reason = 'не запущено';
  };

  window.noiseLevelPossible = function () {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  };
})();
