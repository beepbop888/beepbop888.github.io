/*
 * window.vkAds — the JS half of packages/app_core/lib/src/ads/vk_ads/.
 *
 * The Dart side calls vkAds.showRewarded() / showInterstitial() / showBanner()
 * and expects a promise of a boolean that ALWAYS settles. Everything here
 * exists to keep that contract:
 *
 *  - Outside the VK container `bridge.send` promises neither resolve nor
 *    reject, so an unguarded await leaves the user's button spinning forever.
 *    We check isEmbedded() first and race every call against a timeout.
 *  - Any rejection is an ordinary outcome (no fill, user closed it, ads not
 *    permitted for an unapproved app) and resolves false, never throws. The
 *    RewardGate treats false as "grant it anyway", so a failure here costs the
 *    user nothing.
 *
 * VKWebAppInit is not optional: VK's own testing checklist requires it, and an
 * app that never sends it is treated as broken by the client regardless of ads.
 */
(function () {
  'use strict';

  var bridge = window.vkBridge;
  var CALL_TIMEOUT = 30000;   // a rewarded spot runs ~30s; below that we would
                              // time out on people who actually watched it
  var BANNER_TIMEOUT = 8000;

  // isEmbedded() is false when the page is opened directly rather than inside
  // a VK client. Everything below short-circuits on it, which is what makes
  // `flutter run -d chrome` usable without a VK shell.
  function live() {
    try {
      return !!bridge && typeof bridge.send === 'function' && bridge.isEmbedded();
    } catch (e) {
      return false;
    }
  }

  function settleFalseAfter(ms) {
    return new Promise(function (resolve) {
      setTimeout(function () { resolve(false); }, ms);
    });
  }

  function call(method, params, timeout) {
    if (!live()) return Promise.resolve(false);
    var sent;
    try {
      sent = bridge.send(method, params || {}).then(function (data) {
        // VK answers ads calls with {result: true}. Some clients answer a
        // banner with {result: true} too; anything else counts as no ad.
        return !!(data && data.result);
      }, function () {
        return false;
      });
    } catch (e) {
      return Promise.resolve(false);
    }
    return Promise.race([sent, settleFalseAfter(timeout)]);
  }

  if (live()) {
    try { bridge.send('VKWebAppInit', {}); } catch (e) { /* nothing to do */ }
  }

  window.vkAds = {
    // 'reward' resolves true only when the spot was watched to the end, which
    // is exactly the condition RewardGate needs.
    showRewarded: function () {
      return call('VKWebAppShowNativeAds', { ad_format: 'reward' }, CALL_TIMEOUT);
    },
    showInterstitial: function () {
      return call('VKWebAppShowNativeAds', { ad_format: 'interstitial' }, CALL_TIMEOUT);
    },
    // Docked to the bottom and 'resize' rather than 'overlay', so the banner
    // takes its own strip instead of covering the app's own controls — an
    // overlay banner sitting on top of a keyboard row is a rejection risk and
    // a bad experience besides.
    showBanner: function () {
      return call('VKWebAppShowBannerAd', {
        banner_location: 'bottom',
        layout_type: 'resize',
        height_type: 'compact'
      }, BANNER_TIMEOUT);
    },
    hideBanner: function () {
      return call('VKWebAppHideBannerAd', {}, BANNER_TIMEOUT);
    },
    // Lets the UI avoid offering a reward it cannot deliver. Kept separate
    // from showRewarded so a check never consumes an impression.
    checkRewarded: function () {
      return call('VKWebAppCheckNativeAds', { ad_format: 'reward' }, BANNER_TIMEOUT);
    }
  };
})();
