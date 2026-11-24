'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7d2ea38b3970b2274dcbb4290d0d957c",
"assets/AssetManifest.bin.json": "0de029337750da217aa9971d1f89b249",
"assets/AssetManifest.json": "b06a85d5ecebda148b1e17cbc770ec5b",
"assets/assets/cues/blink.wav": "01c84d7c458d291602e2788def332ddc",
"assets/assets/cues/close.wav": "efcc5e38759e64c70c62306de8a6a41e",
"assets/assets/cues/done.wav": "6bc8bbc18cce2229b9a19cc39af6f64f",
"assets/assets/cues/down.wav": "e640b6e5cf7fae9aaeb696bebf5cc087",
"assets/assets/cues/downleft.wav": "368d9ab03887aecbcc2f8da741a5131a",
"assets/assets/cues/downright.wav": "816b44fca52b2d9b678bafbfa429a49b",
"assets/assets/cues/far.wav": "80cb15099844f073ce7e3720b748a480",
"assets/assets/cues/lap.wav": "a73561680417e36c5373d6d72d9decdd",
"assets/assets/cues/left.wav": "fb08e289fdbfc4dd770bf610407d8918",
"assets/assets/cues/near.wav": "3b4c7b40c9752b6c93e8840c3cf8cfc1",
"assets/assets/cues/next.wav": "310e71fedf5887ef92e3d66f730cfd23",
"assets/assets/cues/open.wav": "bd2f20e3275975e81b2d712fa2c67422",
"assets/assets/cues/right.wav": "266f366fbdf8af8144d2e299192f8114",
"assets/assets/cues/up.wav": "ce7ee3be056151de162e8b8edf95a0f9",
"assets/assets/cues/upleft.wav": "d3c1f217169256bb64ab64d6462d604c",
"assets/assets/cues/upright.wav": "d558f4eb961030174a450099c3ebb1ce",
"assets/assets/fonts/GolosText.ttf": "330acf9bc07b0ff8b00ddcfe6e968bad",
"assets/assets/fonts/Rubik.ttf": "1a5dfeda0e4bc086f894e9b25c1c902e",
"assets/assets/textures/dymka.jpg": "b90beb6348649210f2213e431052dcee",
"assets/FontManifest.json": "7b06fb22e4d7e32ec993e2a22f6bbe9e",
"assets/fonts/MaterialIcons-Regular.otf": "3b02cc671c479caab45b3df2d3277ecf",
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
"favicon.png": "418474e65062337fcca48f11724de2aa",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "89dcbbead7d8443fe294eb58f5b60661",
"icons/Icon-192.png": "0828f5b9dabec6c9e399f910c1ca3e63",
"icons/Icon-512.png": "dca40085d6c7565989aaaed64c22cd4f",
"icons/Icon-maskable-192.png": "0828f5b9dabec6c9e399f910c1ca3e63",
"icons/Icon-maskable-512.png": "dca40085d6c7565989aaaed64c22cd4f",
"index.html": "0c23c146d3bfcd50245f60c072947762",
"/": "0c23c146d3bfcd50245f60c072947762",
"main.dart.js": "a8699e2c9dd376344f11df1f1b9ee765",
"manifest.json": "54141c9c5fcb7e2c5e33d68c0a059292",
"version.json": "3ed3f56f84f77fdcd7414c8c54ceba69"};
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
