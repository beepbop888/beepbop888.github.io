'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f67a69c62cf1caf6e148a37d251718da",
"assets/AssetManifest.bin.json": "5a039cfb314c785b267322ef14bf69b8",
"assets/AssetManifest.json": "bdeb014fd58978cee8c480f50602ecd2",
"assets/assets/cues/count.wav": "ac40e57cbab7ac758a26d4aee69d8eb3",
"assets/assets/cues/done.wav": "f223b9405646c55b11e3279e9df78bff",
"assets/assets/cues/rest.wav": "849db21121f2b3165aae3f5ed442971d",
"assets/assets/cues/work.wav": "fffe2a5b1d091b1275955846dd595717",
"assets/assets/exercises/bird-dog-peak.webp": "dc65c9474f552a873cf8806fe92833c3",
"assets/assets/exercises/bodyweight-calf-raise-peak.webp": "2b61b344d54106d848732acd84b05350",
"assets/assets/exercises/bodyweight-calf-raise-start.webp": "fddfca26fe7b2035e7041331c52d6cbc",
"assets/assets/exercises/bodyweight-reverse-lunge-peak.webp": "08a9f0d14016be8d337c3ce5302edc19",
"assets/assets/exercises/bodyweight-reverse-lunge-start.webp": "2ca3fbe78c205746546785dd260289cb",
"assets/assets/exercises/bodyweight-squat-start.webp": "edbc5264b265d1e3d19fa5fcb6912206",
"assets/assets/exercises/butterfly-stretch-main.webp": "f35999abd1be3af3a859f907c4cdd4f4",
"assets/assets/exercises/childs-pose-main.webp": "23e09102a570f0ab008531b9066888f9",
"assets/assets/exercises/cobra-stretch-main.webp": "fc8d75337f6bcddc46ebf499a20d7e48",
"assets/assets/exercises/cross-body-crunch-peak.webp": "38b98a10a82f2d196c0f55ab571ec6fc",
"assets/assets/exercises/cross-body-crunch-start.webp": "e0a72753da483ee9cc2ec49dde2ee12b",
"assets/assets/exercises/cross-body-shoulder-stretch-main.webp": "d62f7fac2d8cbba39fa30e71a3fd8404",
"assets/assets/exercises/crunches-peak.webp": "ed2f8601303509ddb174edbf784d1c9a",
"assets/assets/exercises/crunches-start.webp": "1bc13e081925b0f488ffa21b58b3b83a",
"assets/assets/exercises/dead-bug-peak.webp": "d0daf11388da7ee1db33d8aaab284302",
"assets/assets/exercises/dead-bug-start.webp": "7e454b0e5af3ca1608a9a2b1b7ca7440",
"assets/assets/exercises/diamond-push-ups-peak.webp": "c1acaca3e57b6733a45d49ff9f009885",
"assets/assets/exercises/diamond-push-ups-start.webp": "aa863d4f0791395910122b453fc19d34",
"assets/assets/exercises/downward-dog-main.webp": "3968ea3524409c37a720f078e91d365e",
"assets/assets/exercises/fire-hydrant-peak.webp": "00321e67c3f78afb24e3e2a5f084bdf5",
"assets/assets/exercises/fire-hydrant-start.webp": "8c9561946ad08410ab1ae370ad333002",
"assets/assets/exercises/flutter-kicks-peak.webp": "08dfc36c2f0cc0ea229c0707bb2ee4fa",
"assets/assets/exercises/flutter-kicks-start.webp": "6a8d1f1b7ab8e7c8afaae2ceb94904ab",
"assets/assets/exercises/glute-bridge-peak.webp": "93b1c00b32b23c7bba9d5d887172e455",
"assets/assets/exercises/glute-bridge-start.webp": "a87eff5650f8f7c90f6c3d70b6410954",
"assets/assets/exercises/glute-kickback-peak.webp": "6522f25d2f8255bd8e75480922c15f56",
"assets/assets/exercises/glute-kickback-start.webp": "b994c8b9b699bfb6a338823cb6ba3053",
"assets/assets/exercises/heel-flicks-main.webp": "6c386681951ebe763d4f54f523f6c326",
"assets/assets/exercises/heel-touches-peak.webp": "48a90846584990e841f29327656b7ea0",
"assets/assets/exercises/heel-touches-start.webp": "6c7d2039bf372235feb203704db2c7e4",
"assets/assets/exercises/high-knees-main.webp": "4aeb8a89d70fb6a66f5f135c38ccfa34",
"assets/assets/exercises/high-plank-main.webp": "0a8d4643145f6a78a108b38bc0c8708c",
"assets/assets/exercises/hollow-body-hold-main.webp": "a09ca5a6ea151b5342130085d7fbf06a",
"assets/assets/exercises/inchworm-peak.webp": "7e605da0b78c1b6ef617aec86e01f14e",
"assets/assets/exercises/inchworm-start.webp": "17feafd227f57ce5f74acd414480f454",
"assets/assets/exercises/jump-squat-peak.webp": "c3b813a4399103aab1b26810960860b0",
"assets/assets/exercises/jump-squat-start.webp": "eba91665eef5709ab0f180d2622b102a",
"assets/assets/exercises/jumping-jacks-peak.webp": "e1dc71d7462679542a1d97fb26affe19",
"assets/assets/exercises/jumping-jacks-start.webp": "5b9321ef6210e33760806e40732c1ac8",
"assets/assets/exercises/knee-push-ups-peak.webp": "cf31332d7133b9dff722ef0d96ddad4f",
"assets/assets/exercises/knee-push-ups-start.webp": "582c2ecf4d1d4d83918a0f4c91aeba29",
"assets/assets/exercises/knee-to-chest-stretch-main.webp": "fd54a5a50e5c9c8db879e65c73235bbd",
"assets/assets/exercises/lunge-peak.webp": "4e53a4e04302720a3e39072e7f3479fe",
"assets/assets/exercises/lunge-start.webp": "f9fa122b230e6f085a35760cc0f868ee",
"assets/assets/exercises/lying-leg-raise-peak.webp": "333f27212cd99f6eadacd5cbc0f4403f",
"assets/assets/exercises/lying-leg-raise-start.webp": "f3a80cb3e21a62c10073774422df0147",
"assets/assets/exercises/mountain-climbers-peak.webp": "21bdb69b17dfcb4f9d0dc1e5c60b439c",
"assets/assets/exercises/mountain-climbers-start.webp": "b67702d7ba74df1e027b8c7182cd145c",
"assets/assets/exercises/overhead-triceps-stretch-main.webp": "0348d97883a5ce480fabfba129b189a5",
"assets/assets/exercises/pike-push-ups-peak.webp": "7ae25e32370695f0c0cfdbd950b82cb1",
"assets/assets/exercises/pike-push-ups-start.webp": "a1de8e8fa50b4af2d1dae88bd69ab4fc",
"assets/assets/exercises/plank-knee-tuck-peak.webp": "6b48fa7a72c2fb6a837f0b0f029be945",
"assets/assets/exercises/plank-knee-tuck-start.webp": "5d12f1b1d856b32f7e18a902d252a588",
"assets/assets/exercises/plank-main.webp": "922cd64f8149414e36955c3c01637bf5",
"assets/assets/exercises/plyo-lunge-peak.webp": "e9d4425fdea5ccce394a80f1a124b18b",
"assets/assets/exercises/plyo-lunge-start.webp": "57ca829a8440393cda87379a756aa45f",
"assets/assets/exercises/push-up-peak.webp": "325448eabb0598ddfebc9bf8bc212e85",
"assets/assets/exercises/push-up-start.webp": "06ed84ebd3592e9d044a1d2ec7a7befd",
"assets/assets/exercises/reverse-crunches-peak.webp": "f795515b48f3f85beca23eff3445bd57",
"assets/assets/exercises/russian-twist-peak.webp": "758f4a8ea6000b93f25d6ad0ba059149",
"assets/assets/exercises/russian-twist-start.webp": "42f116456a8b54c92d896f0e80bf0b80",
"assets/assets/exercises/side-lunge-peak.webp": "513c35b63a5837e9af4940a8a4e1a101",
"assets/assets/exercises/side-lunge-start.webp": "30d0cd072eecae084a74e12acca9e339",
"assets/assets/exercises/side-lying-hip-abduction-peak.webp": "e82d4c140f0e1821a0a6b08e805169b1",
"assets/assets/exercises/side-lying-hip-abduction-start.webp": "3afd18fa5c677bac2aabdfa254e82a93",
"assets/assets/exercises/side-plank-main.webp": "93412dbdc203bd10e876a6f27f609497",
"assets/assets/exercises/single-leg-glute-bridge-peak.webp": "da58fc13dd3386e1963c2ddf74f162a1",
"assets/assets/exercises/single-leg-glute-bridge-start.webp": "6cc568f8c56db1912877ffce0a3f2bd8",
"assets/assets/exercises/squat-pulse-peak.webp": "dc6b2613d80bae39b637f03f4eed0f58",
"assets/assets/exercises/squat-pulse-start.webp": "43e4c93cf072ffc38d57ebe0e83cedee",
"assets/assets/exercises/standing-forward-fold-main.webp": "02db6b33cef47bbb8a7b9f46ca88129a",
"assets/assets/exercises/standing-hip-abduction-peak.webp": "486eda712a2f3f5f70784b6fc0982e9e",
"assets/assets/exercises/standing-hip-abduction-start.webp": "f315247a3f9267ba29306ece458e2668",
"assets/assets/exercises/standing-quad-stretch-main.webp": "fc2fbeccf9d3ff787c0eafd6cee3efa0",
"assets/assets/exercises/superman-peak.webp": "a3810defd5fc71b6e7a85ef0b8926a11",
"assets/assets/exercises/superman-start.webp": "9e38c84bfd223c22089144eca43f06f0",
"assets/assets/exercises/supine-spinal-twist-main.webp": "8a2386661d874ab166bfdf5daf804975",
"assets/assets/exercises/torso-twists-main.webp": "b209b2ee7ec56a7d20b2f65f4e431bde",
"assets/assets/exercises/v-ups-peak.webp": "550445dd4742208f8154c88bf27c8bee",
"assets/assets/exercises/v-ups-start.webp": "2ac8cb2bf9aaef0d2bfc22da19f7f661",
"assets/assets/exercises/wall-push-ups-peak.webp": "4515f5fc3f0238527e01e3b8309247be",
"assets/assets/exercises/wall-push-ups-start.webp": "f76420ed3e2b6b6f0e8ed14a4fd5d77c",
"assets/assets/exercises/wall-sit-main.webp": "c577a71e03a318a53b0a780493b34615",
"assets/assets/exercises/wide-grip-push-ups-peak.webp": "0524ef779ad86f9e1805d738aadb03e7",
"assets/assets/exercises/wide-grip-push-ups-start.webp": "7009bd313f26ffd6e60903d681735790",
"assets/FontManifest.json": "5b44a9424ed267fc1c18d3976aa81871",
"assets/fonts/MaterialIcons-Regular.otf": "74cfe0c83bcd27b6cb0a544b37b9cb43",
"assets/fonts/Onest-400.ttf": "56315de5a81bd1d18b82af153456c857",
"assets/fonts/Onest-500.ttf": "9002de053e3f6177dca942bc21750670",
"assets/fonts/Onest-700.ttf": "833a20e836633fa7d0ce0f4cead8cbe2",
"assets/fonts/RussoOne-400.ttf": "6f384b28bb84c81d8c62157fe59fe225",
"assets/NOTICES": "9fdb1207f5ec58413a3656c2b5bcd1a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "545b76763f59d55f04979f9a34427143",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "593a56e749dc80102abad1b901ff52fa",
"/": "593a56e749dc80102abad1b901ff52fa",
"main.dart.js": "79dca87b2f989a9ac5d6738d08d883d7",
"manifest.json": "13f93ed4416f0220b8bc1666f64bf049",
"version.json": "5437ff9306d8f34acc12dfec78eb938c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
