// The microphone level, read through the Web Audio API.
//
// WHY THIS FILE EXISTS. The first build used the `record` package for both
// platforms and, in a browser, pressing «Измерить» did nothing at all — no
// number, no error, the button did not even change to «Стоп». The owner tests
// every build by scanning the QR code, so "works on Android" is not working.
//
// ==========================================================================
// THE BUG THAT MADE IT REPORT SILENCE WITH MUSIC PLAYING, 2026-09-05
// ==========================================================================
// His words: *"for the noise app, its very innaccurate. its telling me that
// its quiet here but theres actually music playing."* Three separate faults,
// all of which push the reading DOWN, which is why the result was always
// "quiet" and never "wrong in an obvious direction":
//
//  1. **The graph had no path to the destination.** A MediaStreamSource
//     connected only to an AnalyserNode is not guaranteed to be pulled: the
//     Web Audio graph is rendered from the destination backwards, and a
//     branch that reaches nothing may never be processed. The analyser then
//     hands back a buffer that is all 128s — perfect digital silence — and
//     the app faithfully reports 0 dB. It is now connected through a
//     zero-gain node to the destination, so the graph is rendered without
//     anything being played back.
//
//  2. **Eight-bit data cannot see a quiet room.** `getByteTimeDomainData`
//     quantises to 1/128 of full scale, which is -42 dBFS, so everything
//     below about 52 dB SPL collapses into one or two least-significant
//     bits. `getFloatTimeDomainData` gives the real sample values.
//
//  3. **`context.resume()` was not awaited.** Safari and Chrome on Android
//     start the context suspended; reads taken before it resumes are silence.
//
// ==========================================================================
// AND THE HONESTY FIX THAT MATTERS MORE THAN ANY OF THEM
// ==========================================================================
// The app said «тишина» while a microphone was handing it nothing at all.
// That is the house failure — a green reading over a broken thing — and it is
// worse here than elsewhere, because "quiet" is a plausible answer that
// nobody questions. A real microphone ALWAYS has a noise floor: perfectly
// zero samples mean the stream is dead, not that the room is silent. So
// exact digital silence is now reported as a FAULT, with `dead: true`, and
// the screen says the microphone is not sending anything instead of
// inventing a measurement.
//
// THREE THINGS THAT WERE ALREADY RIGHT AND MUST STAY:
//
//  * **The permission needs a real tap.** `getUserMedia` outside a user
//    gesture is refused, and refused silently.
//  * **The browser "helps" by default.** Echo cancellation, noise
//    suppression and automatic gain control all change the level — the one
//    thing being measured. They are turned off explicitly.
//  * **A stopped stream must release the microphone**, or the phone keeps
//    its recording indicator lit after the app says it has finished.

(function () {
  'use strict';

  var context = null;
  var analyser = null;
  var sink = null;
  var stream = null;
  var buffer = null;
  var state = { ok: false, reason: 'не запущено' };

  // How many consecutive frames of EXACT digital silence before we call the
  // stream dead. A few is not proof — a frame can legitimately be all zeros
  // at the very start — but a second of it cannot happen on a live mic.
  var DEAD_AFTER = 12;
  var deadFrames = 0;

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

      analyser = context.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0;

      // THE PATH TO THE DESTINATION. Gain 0, so nothing is heard and there is
      // no feedback loop, but the graph now has a reason to be rendered.
      sink = context.createGain();
      sink.gain.value = 0;

      context.createMediaStreamSource(stream).connect(analyser);
      analyser.connect(sink);
      sink.connect(context.destination);

      buffer = new Float32Array(analyser.fftSize);
      deadFrames = 0;

      // AWAITED, not fired and forgotten. Reads before the context resumes
      // are silence, and silence here is indistinguishable from a quiet room.
      var ready = context.state === 'suspended'
        ? context.resume()
        : Promise.resolve();
      return ready.then(function () {
        state.ok = true;
        state.reason = '';
        return true;
      });
    }).catch(function () {
      state.ok = false;
      state.reason = 'доступ к микрофону не разрешён';
      return false;
    });
  };

  // Root-mean-square of the frame as a fraction of full scale, plus the peak.
  // RMS is what corresponds to loudness; peak is what matters for damage, and
  // the two are reported separately rather than one standing in for the other.
  window.noiseLevelRead = function () {
    if (!state.ok || !analyser) {
      return { ok: false, dead: false, reason: state.reason, rms: 0, peak: 0 };
    }

    analyser.getFloatTimeDomainData(buffer);

    var sum = 0;
    var peak = 0;
    var nonZero = false;
    for (var i = 0; i < buffer.length; i++) {
      var v = buffer[i];
      if (v !== 0) nonZero = true;
      sum += v * v;
      var size = Math.abs(v);
      if (size > peak) peak = size;
    }

    // EXACT ZEROS ARE NOT A QUIET ROOM. See the header.
    if (!nonZero) {
      deadFrames++;
      if (deadFrames >= DEAD_AFTER) {
        return {
          ok: false,
          dead: true,
          reason: 'микрофон не передаёт звук',
          rms: 0,
          peak: 0
        };
      }
    } else {
      deadFrames = 0;
    }

    return {
      ok: true,
      dead: false,
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
    sink = null;
    deadFrames = 0;
    state.ok = false;
    state.reason = 'не запущено';
  };

  window.noiseLevelPossible = function () {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  };
})();
