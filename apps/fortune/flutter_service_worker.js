'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ce2a54b05efc856f08fcb7ccbf15f885",
"assets/AssetManifest.bin.json": "c4e8189bfc512b5ebe3c929f2b98511b",
"assets/AssetManifest.json": "b04224b0e60da771e4388fba323e207c",
"assets/assets/tarot/card_00.jpg": "0944df8a16dc256aa933f3973052a0f2",
"assets/assets/tarot/card_01.jpg": "6da2a0842ea7043330de5566c8f295fa",
"assets/assets/tarot/card_02.jpg": "d1fde684586b480d35ef48ebc6c11c1b",
"assets/assets/tarot/card_03.jpg": "e8b984b7ced91c2cedc3135c3036a927",
"assets/assets/tarot/card_04.jpg": "025cfae0b2e1ae75405ba438b5939549",
"assets/assets/tarot/card_05.jpg": "02643863a41099fa74fd79ac6b2a2906",
"assets/assets/tarot/card_06.jpg": "0bf62cdd3e1fef275c5c4e7a92664722",
"assets/assets/tarot/card_07.jpg": "aadcf485715d7aed7d61700c8a012b32",
"assets/assets/tarot/card_08.jpg": "8b4a6865a857a309d66999b68d94a3a1",
"assets/assets/tarot/card_09.jpg": "5ba8d4071caa54a5b2763fa9cc611f14",
"assets/assets/tarot/card_10.jpg": "44c2fea50db1e259ca982b127471db59",
"assets/assets/tarot/card_11.jpg": "9bec0265cfcf1f53eaf61bdaaf0ccd5f",
"assets/assets/tarot/card_12.jpg": "06871e4aa90c3af5949074e051e003bb",
"assets/assets/tarot/card_13.jpg": "b31eb3f0f65d04e33f726f8be07123cc",
"assets/assets/tarot/card_14.jpg": "a463b4d09b2a2fba7a4c5b8a74e4d7ca",
"assets/assets/tarot/card_15.jpg": "5032b059041a425fb0a1c4bee7ec19ad",
"assets/assets/tarot/card_16.jpg": "95578935098d4f63cf98ebf51da25ebf",
"assets/assets/tarot/card_17.jpg": "fe60463d204c6bbb47131045d8245cd5",
"assets/assets/tarot/card_18.jpg": "281ae94e3a3ca823aa0c391b6e9b3b3d",
"assets/assets/tarot/card_19.jpg": "4ed94e52230b995605c4d6fddfa370c8",
"assets/assets/tarot/card_20.jpg": "51a4a0b784adcc5fb293b958c73a1854",
"assets/assets/tarot/card_21.jpg": "e20aa692628889e03ad24ea8c8e81c63",
"assets/assets/tarot/LICENCE.txt": "03dbf17677938b4dc96e406b72211d1a",
"assets/FontManifest.json": "97ce5d2ddd0a5a2edb47cf9dea5764d8",
"assets/fonts/Literata-400.ttf": "3fd3929554502a3fc51c4ad6d68033e0",
"assets/fonts/Literata-600.ttf": "ee7af39a2f69f6a60ecb3807d355c323",
"assets/fonts/MaterialIcons-Regular.otf": "d5f2687100663ad659cdb09473684e52",
"assets/fonts/YesevaOne-400.ttf": "064f3dbffd0b140d89acc17e0f757bc6",
"assets/NOTICES": "03f362e23a4660f43532363e2ea7242f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"flutter_bootstrap.js": "4696d25f613c39b737ab56e43c72f2f5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9cb551f2c059890425d1749478e4f72b",
"/": "9cb551f2c059890425d1749478e4f72b",
"main.dart.js": "e0f6eed697186052745427f1f4e63c99",
"manifest.json": "997ec4864133cfda5f54520d6f8e81f2",
"version.json": "64bab7014fbcc621166e18d19f74359c"};
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
