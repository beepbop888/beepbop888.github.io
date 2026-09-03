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

  var state = { ok: false, reason: 'не запущено', az: 0, alt: 0,
                alpha: 0, beta: 0, gamma: 0, absolute: false,
                screenAngle: 0, source: '-' };
  var listening = false;
  var usingAbsolute = false;

  function rad(d) { return d * Math.PI / 180; }

  // Bearing and altitude from the camera axis AND the top of the screen.
  //
  // The same construction as `pointedAt` in `models/pointing.dart`, and the
  // reasoning is written up there in full. In short: a bearing is a direction
  // flattened onto the ground, and flattening a direction that points nearly
  // straight up destroys it — so a small wobble becomes a huge swing, which is
  // exactly what the owner reported. The top of the screen is steady precisely
  // where the camera axis is not, so it carries the bearing near the zenith and
  // is ignored near the horizon.
  //
  // It is duplicated here rather than shared because the browser never runs the
  // Dart path: `web_compass.dart` receives a bearing that is already computed.
  // The Dart copy is the one with the tests; if either changes, change both.
  function bearingFrom(look, screenUp) {
    var len = Math.sqrt(look[0] * look[0] + look[1] * look[1] +
                        look[2] * look[2]) || 1;
    var lx = look[0] / len, ly = look[1] / len, lz = look[2] / len;

    var east = lx, north = ly;
    var flat = Math.sqrt(screenUp[0] * screenUp[0] +
                         screenUp[1] * screenUp[1]);
    if (flat > 1e-6) {
      var steep = Math.abs(lz);
      var sign = lz >= 0 ? -1 : 1;
      east += (screenUp[0] / flat) * steep * sign;
      north += (screenUp[1] / flat) * steep * sign;
    }

    var azimuth = Math.atan2(east, north) * 180 / Math.PI;
    if (azimuth < 0) azimuth += 360;
    return {
      azimuth: azimuth,
      altitude: Math.asin(Math.max(-1, Math.min(1, lz))) * 180 / Math.PI
    };
  }

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

    // The SECOND column is the world direction of the device's +y — the top of
    // the screen — and the bearing needs it as well as the camera axis.
    var ux = -cB * sA;
    var uy = cA * cB;
    var uz = sB;

    // Negated, because the camera looks out of the BACK of the phone.
    return bearingFrom([-x, -y, -z], [ux, uy, uz]);
  }

  function onOrientation(e) {
    // A browser may deliver a non-absolute reading through the absolute
    // channel. Its alpha is measured from an arbitrary start, so using it
    // points the whole sky at the wrong north rather than merely wobbling.
    if (usingAbsolute && e.absolute === false &&
        typeof e.webkitCompassHeading !== 'number') {
      state.ok = false;
      state.reason = 'компас не откалиброван — опишите телефоном восьмёрку';
      return;
    }
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

    // THE RAW READING IS KEPT AND SHOWN, and this is not leftover debugging.
    //
    // The owner reported the sky pointing 90 degrees wrong: *"im facing north
    // and for some reason when changed to AR mode it instantly turned to
    // west."* Three rounds were spent guessing at causes from this end, and
    // the arithmetic here is demonstrably the rotation the specification
    // defines, so the fault is in what the phone reports rather than in what
    // is done with it — and which of the several ways that can happen cannot
    // be told apart from here. His phone is the only instrument that can
    // settle it, so it now shows its own numbers and he can read them off.
    state.alpha = alpha;
    state.beta = e.beta;
    state.gamma = e.gamma;
    state.absolute = e.absolute === true;
    state.source = usingAbsolute ? 'abs' : 'rel';
    state.screenAngle = screenAngle();
  }

  // ---------------------------------------------------------------------
  // THE QUATERNION PATH, tried before the angles.
  //
  // His report after the last round was sharper than "it is wrong": *"itll be
  // correct for a second and with 1 movement its completely off course."*
  // Right at first and wrong after a movement is the signature of a broken
  // ANGLE decomposition rather than a broken compass — the phone's heading is
  // fine, the way the three Euler angles are being turned back into a
  // direction is not.
  //
  // `deviceorientation` hands over alpha, beta and gamma: a Z-X'-Y'' rotation
  // that has to be reassembled here. That decomposition is ambiguous when the
  // phone is held steeply — which is the ONLY way this feature is ever used,
  // because pointing at the sky means pointing the phone up — and browsers
  // differ in which branch they report and when they switch. Once they switch
  // mid-gesture, the reconstructed bearing jumps and stays jumped.
  //
  // `AbsoluteOrientationSensor` reports the same orientation as a QUATERNION,
  // already referenced to true north. There is no decomposition to get wrong
  // and no branch to switch: the rotation is read straight off it. It is the
  // right instrument, and the angles now exist only as the fallback for a
  // browser that does not have it.
  var sensor = null;

  function quaternionDirection(q) {
    // Columns of the rotation matrix the quaternion describes: the third is the
    // world direction of the device's +z, the second of its +y. The camera
    // looks along -z; the top of the screen is +y.
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var zx = 2 * (x * z + w * y);
    var zy = 2 * (y * z - w * x);
    var zz = 1 - 2 * (x * x + y * y);
    var yx = 2 * (x * y - w * z);
    var yy = 1 - 2 * (x * x + z * z);
    var yz = 2 * (y * z + w * x);
    return bearingFrom([-zx, -zy, -zz], [yx, yy, yz]);
  }

  function startSensor() {
    if (typeof AbsoluteOrientationSensor === 'undefined') return false;
    try {
      sensor = new AbsoluteOrientationSensor({ frequency: 60,
                                               referenceFrame: 'device' });
    } catch (e) {
      sensor = null;
      return false;
    }
    sensor.addEventListener('reading', function () {
      if (!sensor || !sensor.quaternion) return;
      var where = quaternionDirection(sensor.quaternion);
      state.az = where.azimuth;
      state.alt = where.altitude;
      state.ok = true;
      state.reason = '';
      state.source = 'sensor';
      state.absolute = true;
      state.alpha = where.azimuth;
      state.beta = where.altitude;
      state.gamma = 0;
      state.screenAngle = screenAngle();
    });
    // A refused permission or an absent magnetometer surfaces here, not at
    // construction, so the angle path has to be able to take over afterwards.
    sensor.addEventListener('error', function () {
      fallBackToAngles();
    });
    try {
      sensor.start();
    } catch (e) {
      sensor = null;
      return false;
    }
    // A SENSOR THAT STARTS AND SAYS NOTHING. Construction succeeding and
    // `start()` not throwing are not the same as readings arriving: a device
    // without a magnetometer, or with the permission policy withheld, stays
    // silent and fires no error either. Without this the mode would wait out
    // its whole first-fix timeout and then report a phone that has no compass,
    // when the angle path would have worked all along.
    setTimeout(function () {
      if (sensor && state.source !== 'sensor') fallBackToAngles();
    }, 2200);
    return true;
  }

  // FALLING BACK HAS TO CLEAR `listening` FIRST.
  //
  // `attachAngles` refuses to run twice by returning early when `listening` is
  // set, and starting the sensor sets it. So a sensor that failed AFTER
  // starting handed over to a fallback that immediately did nothing, and the
  // mode sat there with no source at all until the three-second timeout called
  // the phone sensorless. It is not; the better instrument just gave up.
  function fallBackToAngles() {
    if (sensor) {
      try { sensor.stop(); } catch (e) { /* already gone */ }
    }
    sensor = null;
    state.source = '-';
    listening = false;
    attachAngles();
  }

  function screenAngle() {
    return (window.screen && window.screen.orientation &&
            typeof window.screen.orientation.angle === 'number')
        ? window.screen.orientation.angle
        : (typeof window.orientation === 'number' ? window.orientation : 0);
  }

  function attachAngles() {
    if (listening) return;
    // ONE OF THEM, NEVER BOTH.
    //
    // `deviceorientationabsolute` is referenced to true north.
    // `deviceorientation` on Android Chrome is RELATIVE — its alpha starts
    // from wherever the phone happened to be. Subscribing to both, which the
    // first version did, means the relative event overwrites the absolute one
    // between frames and the sky lurches between two different norths several
    // times a second. That is the "AR mode is very buggy" report.
    if ('ondeviceorientationabsolute' in window) {
      window.addEventListener('deviceorientationabsolute', onOrientation, true);
      usingAbsolute = true;
    } else {
      window.addEventListener('deviceorientation', onOrientation, true);
      usingAbsolute = false;
    }
    listening = true;
  }

  function attach() {
    if (listening) return;
    if (startSensor()) { listening = true; return; }
    attachAngles();
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
    if (sensor) {
      try { sensor.stop(); } catch (e) { /* already gone */ }
      sensor = null;
    }
    window.removeEventListener('deviceorientationabsolute', onOrientation, true);
    window.removeEventListener('deviceorientation', onOrientation, true);
    listening = false;
    state.ok = false;
    state.reason = 'не запущено';
  };

  // Polled by Flutter. Flat object so it crosses the JS interop boundary
  // without any structured cloning surprises.
  window.skyCompassRead = function () {
    return {
      ok: state.ok, reason: state.reason, az: state.az, alt: state.alt,
      alpha: state.alpha, beta: state.beta, gamma: state.gamma,
      absolute: state.absolute, screenAngle: state.screenAngle,
      source: state.source
    };
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
        !('ondeviceorientationabsolute' in window) &&
        typeof AbsoluteOrientationSensor === 'undefined') return false;
    var touch = (navigator.maxTouchPoints || 0) > 0;
    var coarse = typeof window.matchMedia === 'function' &&
        window.matchMedia('(pointer: coarse)').matches;
    return touch || coarse;
  };
})();
