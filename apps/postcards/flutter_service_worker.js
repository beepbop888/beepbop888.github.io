'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d46cf7883afdb42ae2e673b651577cd",
"assets/AssetManifest.bin.json": "bf7cddf69863030ac65da906e0980d34",
"assets/AssetManifest.json": "7f4c524abb62a21b9453ba7c37fb55d9",
"assets/assets/photos/06876ab9fb23.jpg": "60b6f7b3a01efd0a623a156febfcab76",
"assets/assets/photos/0e0fc643b07d.jpg": "530a298762bce2fc54392d13844407e0",
"assets/assets/photos/1017248e13b7.jpg": "06a363427b6d1bce3590b8da10d72ab9",
"assets/assets/photos/1101cd961bb3.jpg": "a8a047b4582919d9ba12d7e93dbbd562",
"assets/assets/photos/192d2fd65fe9.jpg": "778821ae9adcc1823e40a0ff6206ce27",
"assets/assets/photos/1aa9829dabb7.jpg": "d0e00b2a43056624c412e5411c6c57ec",
"assets/assets/photos/210b93f977f0.jpg": "22d2384ca09bb618924f53c971668342",
"assets/assets/photos/211b2eeae685.jpg": "7b705fc91b4fcded5e79f8ce5ead653a",
"assets/assets/photos/258fa12c0328.jpg": "4386869a298016a0d90204d1ca2de917",
"assets/assets/photos/263ce91bdea7.jpg": "f5c4348840a9fd8eb1c96cb9535f9fb3",
"assets/assets/photos/28d902f3a0ea.jpg": "71129ba64363f0029a08d9d8a5ba0d3c",
"assets/assets/photos/2e09c668fbbb.jpg": "787d370057f0be7d49abc724c86507a0",
"assets/assets/photos/2e3e01ceb882.jpg": "fb5d8b6d72448f97c89a73213dc274a8",
"assets/assets/photos/3154dac60123.jpg": "47c6cd1c9a03bc5d0aedc3a93327e198",
"assets/assets/photos/31749546ab65.jpg": "04dce68032ff2f799b4ce268c3b936e2",
"assets/assets/photos/355ab961538b.jpg": "a5a56a9dd3b6476b282a60d986c92c46",
"assets/assets/photos/375d4fe0e742.jpg": "529eefa64b51a03cfbfbfcd7c67d16d5",
"assets/assets/photos/3f6191c73ce7.jpg": "e3f00a33f913f57c98f8180e949119c9",
"assets/assets/photos/404656ff380e.jpg": "b1fb2c42fd935f59a88e8c308df3f6ff",
"assets/assets/photos/419538c2edb3.jpg": "e7243e111d9e866cb01d3f0a7a67720e",
"assets/assets/photos/451b7fb2000b.jpg": "de6209acfe8a08c52e8bd01c10682ec3",
"assets/assets/photos/481a13aada47.jpg": "8eddc96064c4f40adef7bd7b5bf2d8b2",
"assets/assets/photos/4d5ffa210f0b.jpg": "7c66573f1f017342fcef841586bccffa",
"assets/assets/photos/4e31074207af.jpg": "4da83d715c4e63f678f257ada737870e",
"assets/assets/photos/549c3a6b3836.jpg": "d380a33f781bf37cf502235f1590f1fb",
"assets/assets/photos/5bc16dea6dd0.jpg": "d5f5dae6feb408b886f07532c0ae1db8",
"assets/assets/photos/60b87153b6e4.jpg": "f00ff2aeda98c11391b9c857e6ad24af",
"assets/assets/photos/67ac31d885a2.jpg": "f87a3c9e1a12a74c93d43520bef9ec5f",
"assets/assets/photos/6daff2971839.jpg": "31840b4a80648a3ad74e02a3ad1c2a5c",
"assets/assets/photos/74a26a982d81.jpg": "4de1137e4947f7e8b71ecd75e84dcb3c",
"assets/assets/photos/76b9ac246db0.jpg": "8aff47fde44318825595f0fb1e748b0a",
"assets/assets/photos/78648cd6ab19.jpg": "b541875b9e3362355ca2ff7252cbd3d6",
"assets/assets/photos/79778bad2baa.jpg": "a7419e60155e4ce7861af8481ccc014a",
"assets/assets/photos/7ca203c62581.jpg": "aebb2057cd52f82e766303b19ce9ca20",
"assets/assets/photos/7dc8cc95dc1e.jpg": "c1b0125e13c14706441b3c0581999014",
"assets/assets/photos/7f24ad17c74d.jpg": "97bcf8815c1b9ff63dd8b918d0e0ef93",
"assets/assets/photos/81d203e4af89.jpg": "c534709af73d6ba818cdaf10d715e30f",
"assets/assets/photos/872acb145bf7.jpg": "654e59bf65c2f4addd5da7ae8ddf1f11",
"assets/assets/photos/a0e5823c2c81.jpg": "888de93ea9f9e775ea09e6d98aebbb04",
"assets/assets/photos/a7c82d930240.jpg": "116e02b6701a065b37772b4ffea523a9",
"assets/assets/photos/aaccda97b9cc.jpg": "a7fb975f5ab3b00e1317f9f0a31db106",
"assets/assets/photos/ad283bb777c7.jpg": "3506dd2cc69232106c8d5ec42b9e12c5",
"assets/assets/photos/add846983328.jpg": "f6ef0502a2696bcc27e1d68d5a60e0ae",
"assets/assets/photos/b0e0abd5a8c3.jpg": "fee64f4498048af5c7744338cac39f5e",
"assets/assets/photos/b6a1b2c367e1.jpg": "bb476da81a55233ac9c353194896635c",
"assets/assets/photos/bae975cb2d70.jpg": "c38c86852fd5e9f7c101e576797b6b61",
"assets/assets/photos/c1ff5d7c126b.jpg": "72b6e52191ad99978b140661247d228a",
"assets/assets/photos/CREDITS.md": "1405412effc39d2267faaaba1b783ec1",
"assets/assets/photos/d0e9ae2d8aca.jpg": "f8d2b854b593bf8cd351f6faa9f5ada1",
"assets/assets/photos/d71f61f105a5.jpg": "c4df0368a1ba86b0e5b67b866593d14e",
"assets/assets/photos/d733934ed56d.jpg": "ac163d1342da50f462c8f739eef444f8",
"assets/assets/photos/dfd2194a4e67.jpg": "66a4d61688c901d0f0655e0551bb0199",
"assets/assets/photos/e614be836e33.jpg": "041cf8c85a94939c30c2adba5021abba",
"assets/assets/photos/e7cc7d3dcfa7.jpg": "4d0c554d9a86bd5bc02a9388af497df6",
"assets/assets/photos/e7f3a8a8840f.jpg": "9fbc84b634210d60cbd6e02de8b509d9",
"assets/assets/photos/e91566d16d44.jpg": "08d972547ed245a8510234d7cbbcf43c",
"assets/assets/photos/eaade9828b41.jpg": "41fccfdd5c1096104349dc18de15095f",
"assets/assets/photos/edde75ec4fb1.jpg": "b3664ede83feaaa8259c2d92eb0fd9be",
"assets/assets/photos/f3363291e33d.jpg": "1828bad7c378c3a277e3cea19d1c6bd4",
"assets/assets/photos/f6f01bd41711.jpg": "cadb8168c6ea13d8e35d9d05446a943c",
"assets/assets/photos/fa23615b5a4c.jpg": "4a18716c89abf9321799c45fa1fa7184",
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
"flutter_bootstrap.js": "034d927913109c51bf644b4808e63bf3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac002d9156cf0ce44fb43be6b3703bc6",
"/": "ac002d9156cf0ce44fb43be6b3703bc6",
"main.dart.js": "aa6b154ecf1b5a5039bcf96e9522afb8",
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
