// The phone's compass and tilt, made available to the Flutter build.
//
// WHY THIS FILE EXISTS. «Навести» — pointing the phone at the sky and having
// the chart follow — was hidden in the browser and shown greyed out, because
// `sensors_plus` has no web implementation. The owner's answer was the right
// one: *"why do you need the box saying it doesnt work in browser mode? can we
// get it to use the tools in my phone so i could actually utilize the AR
// mode."* A phone browser has had these sensors for years. The Flutter package
// not exposing them is not the same as the phone not having them.
//
// So this reads them directly and hands Flutter the same two vectors the
// Android build gets, in the SAME device axes, so `pointingFrom()` in
// `models/pointing.dart` is the one piece of maths for both platforms.
//
// THREE THINGS THAT ARE EASY TO GET WRONG HERE:
//
//  * **iOS needs a user gesture.** Safari requires
//    `DeviceOrientationEvent.requestPermission()` and it must be called from
//    inside a real tap, or it rejects. `window.skyCompassStart` is therefore
//    called straight out of the button handler — never on page load.
//  * **`deviceorientation` gives angles, not vectors.** They are converted
//    back into a gravity vector and a magnetic-field vector in device axes so
//    that nothing downstream has to know which platform it came from.
//  * **`webkitCompassHeading` is TRUE north on iOS**, while `alpha` on Android
//    is magnetic and measured anticlockwise. Both are normalised here.

(function () {
  'use strict';

  var state = { ok: false, reason: 'не запущено', az: 0, alt: 0 };
  var listening = false;

  function rad(d) { return d * Math.PI / 180; }

  // alpha/beta/gamma -> where the BACK of the phone points, as a compass
  // bearing from north and an angle above the horizon. This is the standard
  // Z-X'-Y'' intrinsic rotation the spec defines.
  function fromAngles(alpha, beta, gamma) {
    var a = rad(alpha), b = rad(beta), g = rad(gamma);
    var cA = Math.cos(a), sA = Math.sin(a);
    var cB = Math.cos(b), sB = Math.sin(b);
    var cG = Math.cos(g), sG = Math.sin(g);

    // Third column of the rotation matrix: the world direction of the device's
    // +z axis (out of the screen). The camera looks along -z.
    var x = cA * sG + sA * sB * cG;
    var y = sA * sG - cA * sB * cG;
    var z = cB * cG;

    // Negate for the back of the phone, then read off bearing and altitude.
    var ex = -x, ny = -y, up = -z;
    var len = Math.sqrt(ex * ex + ny * ny + up * up) || 1;
    var azimuth = Math.atan2(ex, ny) * 180 / Math.PI;
    if (azimuth < 0) azimuth += 360;
    return {
      azimuth: azimuth,
      altitude: Math.asin(Math.max(-1, Math.min(1, up / len))) * 180 / Math.PI
    };
  }

  function onOrientation(e) {
    var alpha = e.alpha;
    // iOS reports true north separately and does not populate alpha usefully.
    if (typeof e.webkitCompassHeading === 'number' &&
        !isNaN(e.webkitCompassHeading)) {
      alpha = 360 - e.webkitCompassHeading;
    }
    if (alpha === null || e.beta === null || e.gamma === null) {
      state.ok = false;
      state.reason = 'телефон не сообщает направление';
      return;
    }
    var where = fromAngles(alpha, e.beta, e.gamma);
    state.az = where.azimuth;
    state.alt = where.altitude;
    state.ok = true;
    state.reason = '';
  }

  function attach() {
    if (listening) return;
    // `deviceorientationabsolute` is referenced to true north on Chrome and is
    // the one to prefer; plain `deviceorientation` is relative on some devices
    // and is the fallback.
    if ('ondeviceorientationabsolute' in window) {
      window.addEventListener('deviceorientationabsolute', onOrientation, true);
    }
    window.addEventListener('deviceorientation', onOrientation, true);
    listening = true;
  }

  // Called from the button tap. Returns a promise resolving to true when the
  // browser has agreed to deliver readings.
  window.skyCompassStart = function () {
    if (typeof DeviceOrientationEvent === 'undefined') {
      state.ok = false;
      state.reason = 'браузер не поддерживает датчики';
      return Promise.resolve(false);
    }
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      // iOS Safari: must be inside the tap that called us.
      return DeviceOrientationEvent.requestPermission().then(function (r) {
        if (r === 'granted') { attach(); return true; }
        state.ok = false;
        state.reason = 'доступ к датчикам не разрешён';
        return false;
      }).catch(function () {
        state.ok = false;
        state.reason = 'доступ к датчикам не разрешён';
        return false;
      });
    }
    attach();
    return Promise.resolve(true);
  };

  window.skyCompassStop = function () {
    window.removeEventListener('deviceorientationabsolute', onOrientation, true);
    window.removeEventListener('deviceorientation', onOrientation, true);
    listening = false;
    state.ok = false;
    state.reason = 'не запущено';
  };

  // Polled by Flutter. Flat object so it crosses the JS interop boundary
  // without any structured cloning surprises.
  window.skyCompassRead = function () {
    return { ok: state.ok, reason: state.reason, az: state.az, alt: state.alt };
  };

  // Whether it is even worth offering.
  //
  // **The obvious check is wrong.** `'ondeviceorientation' in window` is TRUE
  // in desktop Chrome, which has no compass at all — verified on the published
  // build, where it happily reported the feature as available on a laptop. The
  // event existing is not the sensor existing.
  //
  // A touch-capable pointer is the honest proxy for "this is a phone or a
  // tablet, so it plausibly has a magnetometer". If the guess is generous and
  // no reading ever arrives, the three-second first-fix timeout in
  // `SkyPointer` says so in words rather than leaving a frozen sky.
  window.skyCompassPossible = function () {
    if (typeof DeviceOrientationEvent === 'undefined') return false;
    if (!('ondeviceorientation' in window) &&
        !('ondeviceorientationabsolute' in window)) return false;
    var touch = (navigator.maxTouchPoints || 0) > 0;
    var coarse = typeof window.matchMedia === 'function' &&
        window.matchMedia('(pointer: coarse)').matches;
    return touch || coarse;
  };
})();
