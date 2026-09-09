'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bc1b4d50202bcb3d691883013a3cc298",
"assets/AssetManifest.bin.json": "d9ded33e263338a5bebf5913093e79ab",
"assets/AssetManifest.json": "935f1cdb1083f11bf417b2ec81871004",
"assets/assets/fonts/AlegreyaSans.ttf": "10b5e76f0febb864143a772bb530ef00",
"assets/assets/fonts/AlegreyaSansBold.ttf": "e7ad1284878190dd200a549c88594694",
"assets/assets/fonts/MahjongTiles.ttf": "0801d4232fb7aadba93c258e987f2735",
"assets/assets/fonts/OFL-AlegreyaSans.txt": "2bcc1d9ef943ab3e55792a6e3d9115b1",
"assets/assets/fonts/OFL.txt": "dc4831ae01aceada1ebe8f4917cdbc1b",
"assets/assets/tiles/LICENSE.md": "59077250970b2913602b803749503f2f",
"assets/assets/tiles/png/Chun.png": "061c9230364234f2f5efdb6364e964f8",
"assets/assets/tiles/png/Haku.png": "879371dbaef31876028fa8b95d2f0c6a",
"assets/assets/tiles/png/Hatsu.png": "5798273fb5dc75362153a68077bfea53",
"assets/assets/tiles/png/Man1.png": "26c60720d0a7eff4be22467ad85a7c87",
"assets/assets/tiles/png/Man2.png": "54fe6e109fbcbad9c13818598b233ef2",
"assets/assets/tiles/png/Man3.png": "baccf45cd79b5b9d9e0714c5476e8712",
"assets/assets/tiles/png/Man4.png": "0c6e0b32546b221bd86fffc806d98424",
"assets/assets/tiles/png/Man5.png": "568cea026a857f5651d44c000cf27d7c",
"assets/assets/tiles/png/Man6.png": "24d017be3d1ab0b5a44ec0d9edc48527",
"assets/assets/tiles/png/Man7.png": "ca533b65b84802e0cbac276b0cc728ec",
"assets/assets/tiles/png/Man8.png": "a880e0638928c8b2ffddd16a3814baf2",
"assets/assets/tiles/png/Man9.png": "ffb67416d252e2229193478ff938a679",
"assets/assets/tiles/png/Nan.png": "09d8133af1678fc5c247fb201d22397c",
"assets/assets/tiles/png/Pei.png": "cc36a508cb97a7481784c44f53b06e72",
"assets/assets/tiles/png/Pin1.png": "9dcd2e545aa0852459ea35515d0998dd",
"assets/assets/tiles/png/Pin2.png": "aff6424387c7deb2874e1d413ed185fd",
"assets/assets/tiles/png/Pin3.png": "b10f5f0e769764e4fe5262cb99715cd3",
"assets/assets/tiles/png/Pin4.png": "fdd309e135745eabd62a51f90b6e2aa0",
"assets/assets/tiles/png/Pin5.png": "8f57b26481c13df9d27c8210ee5d69f2",
"assets/assets/tiles/png/Pin6.png": "c739c6f84e1ba101862fe2132677e011",
"assets/assets/tiles/png/Pin7.png": "475b5b3e38aec6a61888a809eaf9cc8d",
"assets/assets/tiles/png/Pin8.png": "58539382822aede8b5b1ca3b4f6935b0",
"assets/assets/tiles/png/Pin9.png": "eb21b34f0073f79416e6935b87f08292",
"assets/assets/tiles/png/Shaa.png": "c59499dc1b9b609aa9440498a19edcf6",
"assets/assets/tiles/png/Sou1.png": "afdaf10da762a1b97e4db3cfaef40cec",
"assets/assets/tiles/png/Sou2.png": "8e0c4d1c9a0c755693861a0c01acb341",
"assets/assets/tiles/png/Sou3.png": "d9094a13bdbc93c0a060abec6dfad282",
"assets/assets/tiles/png/Sou4.png": "92c259f7ceb9183603a8d9dc994cf6a0",
"assets/assets/tiles/png/Sou5.png": "d06bd8378883feb8606c7dc4ae2ad360",
"assets/assets/tiles/png/Sou6.png": "0c70fe25c3dfc0bbc2afb241acda887c",
"assets/assets/tiles/png/Sou7.png": "f18d92d7900e9fdf89846833191fe996",
"assets/assets/tiles/png/Sou8.png": "4f0bc02a4b22868a21e3fe291335f022",
"assets/assets/tiles/png/Sou9.png": "cb8a6f02355802fc6c9441458c1df650",
"assets/assets/tiles/png/Ton.png": "b02f6a52a5fd9c7df299c47cb1d19582",
"assets/FontManifest.json": "f90a2f5e9b4946a53f3a2c7a75470a82",
"assets/fonts/MaterialIcons-Regular.otf": "a4f09abe7151c347fdeaf4497d808d78",
"assets/NOTICES": "df22f4fba9e628ca8d1161a22642b875",
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
"flutter_bootstrap.js": "7d7704854689cb7ad9b45ec150bdf8d1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0d3e63c8e2b1e3f5b15a27a45acce306",
"/": "0d3e63c8e2b1e3f5b15a27a45acce306",
"main.dart.js": "e255c20223b2aa44408a191af7800003",
"manifest.json": "0e40ac541df0c45ea942283b4d362ab4",
"version.json": "1a03dadffd71beff6651c790f04e24bd"};
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
