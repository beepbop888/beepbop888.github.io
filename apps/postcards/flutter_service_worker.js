'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "61cb539820b7c9fe7c2b3c91aa51e2cf",
"assets/AssetManifest.bin.json": "528002cac484e92eb3c1e5533c8e1411",
"assets/AssetManifest.json": "63c04368fc978bc590987046e678213f",
"assets/assets/photos/035379273092.jpg": "b6eb5dccd7e177a6bd539b58553604dc",
"assets/assets/photos/0e0fc643b07d.jpg": "530a298762bce2fc54392d13844407e0",
"assets/assets/photos/0fb2b32c09de.jpg": "fca50419d0c1bf19932bacdc338a6d7f",
"assets/assets/photos/139dc61267ce.jpg": "cc13efe75c9482510ad8f03f0819ad4e",
"assets/assets/photos/17f1d2673319.jpg": "9babb152f40f7f7eea722457423df0e4",
"assets/assets/photos/1caf87f30efb.jpg": "e297cdb20a32b4eb19b6a2ff364478a7",
"assets/assets/photos/1e85b4346f78.jpg": "6aa41986bd470ea84cc1d5f229aa44a7",
"assets/assets/photos/210b93f977f0.jpg": "22d2384ca09bb618924f53c971668342",
"assets/assets/photos/211b2eeae685.jpg": "7b705fc91b4fcded5e79f8ce5ead653a",
"assets/assets/photos/2359eb93b719.jpg": "5dc7bbc493c1a6b309b2292bbedff30e",
"assets/assets/photos/23f335208142.jpg": "4e871a9facd77992cfc7c0370c3d8060",
"assets/assets/photos/263ce91bdea7.jpg": "f5c4348840a9fd8eb1c96cb9535f9fb3",
"assets/assets/photos/2731719438d1.jpg": "0fae542df696846bd7a9626e625354d1",
"assets/assets/photos/28d902f3a0ea.jpg": "71129ba64363f0029a08d9d8a5ba0d3c",
"assets/assets/photos/2c6c8b9459c4.jpg": "00e6d73ceb53178e1694a72753701e88",
"assets/assets/photos/2e09c668fbbb.jpg": "787d370057f0be7d49abc724c86507a0",
"assets/assets/photos/3154dac60123.jpg": "47c6cd1c9a03bc5d0aedc3a93327e198",
"assets/assets/photos/31749546ab65.jpg": "04dce68032ff2f799b4ce268c3b936e2",
"assets/assets/photos/355ab961538b.jpg": "a5a56a9dd3b6476b282a60d986c92c46",
"assets/assets/photos/3ce5c81bb5eb.jpg": "c4df0368a1ba86b0e5b67b866593d14e",
"assets/assets/photos/3ede4be4ceaa.jpg": "b4c81c40913baec0980c4b15693e175a",
"assets/assets/photos/419538c2edb3.jpg": "e7243e111d9e866cb01d3f0a7a67720e",
"assets/assets/photos/4895e46a72e1.jpg": "78dfcdd502911717b1a41285cabc986c",
"assets/assets/photos/4cd3768779b1.jpg": "2758cbc96d3352ba1811fdac864a6cc0",
"assets/assets/photos/4fe765e39931.jpg": "9aeb946032b8f181a738f6a88f791a01",
"assets/assets/photos/546a27162abd.jpg": "3bab3bba85e03bc2b9fa59e77ea7dbdd",
"assets/assets/photos/549c3a6b3836.jpg": "d380a33f781bf37cf502235f1590f1fb",
"assets/assets/photos/5bc16dea6dd0.jpg": "d5f5dae6feb408b886f07532c0ae1db8",
"assets/assets/photos/6d271bf471a6.jpg": "8c8dce7027324c5a5a339ba5875f7a70",
"assets/assets/photos/79778bad2baa.jpg": "a7419e60155e4ce7861af8481ccc014a",
"assets/assets/photos/7ca203c62581.jpg": "aebb2057cd52f82e766303b19ce9ca20",
"assets/assets/photos/7f24ad17c74d.jpg": "97bcf8815c1b9ff63dd8b918d0e0ef93",
"assets/assets/photos/872acb145bf7.jpg": "654e59bf65c2f4addd5da7ae8ddf1f11",
"assets/assets/photos/8a9d86f73076.jpg": "9cab7c04e7c0c060ceb1519dd9062502",
"assets/assets/photos/9e532855caa7.jpg": "cffd282c40ac4aff08663e76e899e91e",
"assets/assets/photos/a0e5823c2c81.jpg": "888de93ea9f9e775ea09e6d98aebbb04",
"assets/assets/photos/a70e69d9b8ac.jpg": "ab3f14cd930959c662968cd7c707a969",
"assets/assets/photos/a7c82d930240.jpg": "116e02b6701a065b37772b4ffea523a9",
"assets/assets/photos/a82af5e903b0.jpg": "fc3186d9f54f75284aa889b196fe93ac",
"assets/assets/photos/aaccda97b9cc.jpg": "a7fb975f5ab3b00e1317f9f0a31db106",
"assets/assets/photos/af0720fa15ca.jpg": "30531a7887d36a79d1d9a5d559eaaec4",
"assets/assets/photos/b278572afec7.jpg": "d32139ac6d6ef76390af07d5bc2d6d07",
"assets/assets/photos/b7aa502c93a5.jpg": "6e1c93de1820a175e89d3d17bcbe1ca7",
"assets/assets/photos/c9026f1da73f.jpg": "82fea03a20235dc79362abd3625cb247",
"assets/assets/photos/CREDITS.md": "e7fd89400450e5a1db0719f8845a4e5a",
"assets/assets/photos/d0e9ae2d8aca.jpg": "f8d2b854b593bf8cd351f6faa9f5ada1",
"assets/assets/photos/d733934ed56d.jpg": "ac163d1342da50f462c8f739eef444f8",
"assets/assets/photos/dc3a8199c797.jpg": "65a28d596b96c2af7c5a9d9e9a453b2f",
"assets/assets/photos/dd6768223809.jpg": "87d811c31e4b76083741ae3bb879dcf5",
"assets/assets/photos/e47ae1064e50.jpg": "48c069b45cbc077b5f6c6702af913cc7",
"assets/assets/photos/e4b75e7e95d2.jpg": "898f84fa3542cd3a01375e7296b459c2",
"assets/assets/photos/e614be836e33.jpg": "041cf8c85a94939c30c2adba5021abba",
"assets/assets/photos/e7f3a8a8840f.jpg": "9fbc84b634210d60cbd6e02de8b509d9",
"assets/assets/photos/e8881620bbda.jpg": "f47b541f526ffb323a9841796d9a88eb",
"assets/assets/photos/eaade9828b41.jpg": "41fccfdd5c1096104349dc18de15095f",
"assets/assets/photos/edde75ec4fb1.jpg": "b3664ede83feaaa8259c2d92eb0fd9be",
"assets/assets/photos/f6f01bd41711.jpg": "cadb8168c6ea13d8e35d9d05446a943c",
"assets/assets/photos/f7179693c9ff.jpg": "2bc39bc15bbed49301e9ab80ef138c61",
"assets/assets/photos/fb903396e6e0.jpg": "4a64473db8b253bfccdfae54b6217ad7",
"assets/assets/photos/fc5f79296bac.jpg": "2db4bcaed3be95014a87ebdd41ba04b4",
"assets/assets/photos/fd383e2a4c1f.jpg": "7dd92db46ce66160c7e5d4b7c5c63acd",
"assets/FontManifest.json": "67fe39d3eb328960667833618a9f25f2",
"assets/fonts/Comfortaa-700.ttf": "8c11e7ac62f7d2b6afed3f60011b0842",
"assets/fonts/Kurale-400.ttf": "3b7f7bdee96ec416e6d2af956d7bf36a",
"assets/fonts/MarckScript-400.ttf": "0d361ed4bda68872057aff032619fe4d",
"assets/fonts/MaterialIcons-Regular.otf": "d5af1e85d5f37cfb1341ee4e73ab4375",
"assets/fonts/PTSans-Bold.ttf": "2f319e4d9e37c3356a98c923aed0796c",
"assets/fonts/PTSans-Regular.ttf": "22a3543487ee58d7499aeee49084ddd9",
"assets/fonts/RuslanDisplay-400.ttf": "379fe09d07ee7d5435039ee6eb5b5d9c",
"assets/fonts/YesevaOne-400.ttf": "15e7dc75103db4c42825371050f60a58",
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
"flutter_bootstrap.js": "c0d44431d4b0b4ce68373975131301b3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac002d9156cf0ce44fb43be6b3703bc6",
"/": "ac002d9156cf0ce44fb43be6b3703bc6",
"main.dart.js": "73f997de6882ebc9687fec9fe39b1d48",
"manifest.json": "21aac4f573c37ea388999547c3f750e4",
"version.json": "02ddce5d04e21b73199edbed964c22d2"};
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
