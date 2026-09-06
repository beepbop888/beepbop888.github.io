'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "09d20f711a44c728686dc76ba92945c7",
"assets/AssetManifest.bin.json": "8b5a3f878832791f02406d8462d12981",
"assets/AssetManifest.json": "c46885cebb72c945e65fbdb25e80fb6b",
"assets/assets/fonts/AlegreyaSans.ttf": "10b5e76f0febb864143a772bb530ef00",
"assets/assets/fonts/AlegreyaSansBold.ttf": "e7ad1284878190dd200a549c88594694",
"assets/assets/fonts/MahjongTiles.ttf": "0801d4232fb7aadba93c258e987f2735",
"assets/assets/fonts/OFL.txt": "dc4831ae01aceada1ebe8f4917cdbc1b",
"assets/assets/tiles/Back.svg": "86254938e8b4d8b8b9809df7e3303511",
"assets/assets/tiles/Chun.svg": "b3f40c0d1f76722a0d2aa9879c73d801",
"assets/assets/tiles/Front.svg": "9e72950bc506a410fd536ee275bb05f4",
"assets/assets/tiles/Haku.svg": "7454ce8d01927137674f26336da582f2",
"assets/assets/tiles/Hatsu.svg": "fba30a54ff75df7cc15c2a296976960a",
"assets/assets/tiles/LICENSE.md": "59077250970b2913602b803749503f2f",
"assets/assets/tiles/Man1.svg": "2702b62078eb854045fcb1c142698c57",
"assets/assets/tiles/Man2.svg": "545e4697be29e3b39dab11797fc76adf",
"assets/assets/tiles/Man3.svg": "d1c6fe081dc19b26fa776fcb53b6d522",
"assets/assets/tiles/Man4.svg": "02b304414b516ba54c22c88ddbfe5432",
"assets/assets/tiles/Man5.svg": "758ed14bb7bee7b2615d7055eccc4903",
"assets/assets/tiles/Man6.svg": "aa2b2321878a22009df88ede923a597f",
"assets/assets/tiles/Man7.svg": "d96458000ad9ab20ac044b1f5ae70ee7",
"assets/assets/tiles/Man8.svg": "f8a71cb2b036b6eeb77845dfc407ba8b",
"assets/assets/tiles/Man9.svg": "7e5c0dfb7000486051f5628f61903f09",
"assets/assets/tiles/Nan.svg": "6e890dae04ca552e82d93cf16f23912b",
"assets/assets/tiles/Pei.svg": "3dcdff545517d8fa0e5a0ebd6a911f9b",
"assets/assets/tiles/Pin1.svg": "7be2b2808696fa7a7718a50527cee594",
"assets/assets/tiles/Pin2.svg": "6c6efaac52acdbd40a9b046a9ecc72a8",
"assets/assets/tiles/Pin3.svg": "630851b7739e43cfdfd87e0962d02158",
"assets/assets/tiles/Pin4.svg": "13fe92f6c42c42ed798faa13de1c8e0f",
"assets/assets/tiles/Pin5.svg": "293cfecebbfa08983456348d7e7ece5a",
"assets/assets/tiles/Pin6.svg": "2460ea636425e9d19d737b05528898cb",
"assets/assets/tiles/Pin7.svg": "844976b604cc93b102fe24d45649cff6",
"assets/assets/tiles/Pin8.svg": "da4155986f1e31bc3537290e57106164",
"assets/assets/tiles/Pin9.svg": "03e357455bae817ad7e7eff4393a96cc",
"assets/assets/tiles/Shaa.svg": "a18511257fb3881b44aae0dd58c78211",
"assets/assets/tiles/Sou1.svg": "8e662baaf06dc77030326bebe748ff77",
"assets/assets/tiles/Sou2.svg": "2952c9cbcca948cedaae2aeca0207d5c",
"assets/assets/tiles/Sou3.svg": "4d48498107490f80fafca5d3c2e423db",
"assets/assets/tiles/Sou4.svg": "adf194ddf297218812d162a7042af79f",
"assets/assets/tiles/Sou5.svg": "f24dec7d2d60227576837acf5cb84e84",
"assets/assets/tiles/Sou6.svg": "b130f367c27f57701e2d212934bd23f9",
"assets/assets/tiles/Sou7.svg": "7add3fbaeb760f09319294d2df2c44b7",
"assets/assets/tiles/Sou8.svg": "d84d8fb4aed485a85ab64067ae4fe292",
"assets/assets/tiles/Sou9.svg": "7df8e36574fce11bfaee145e5fcdd09f",
"assets/assets/tiles/Ton.svg": "ae58025eeda553fa47dff6b97a3020ab",
"assets/FontManifest.json": "f90a2f5e9b4946a53f3a2c7a75470a82",
"assets/fonts/MaterialIcons-Regular.otf": "ef9326e2d1e7ec2b5cb5f847b0da532b",
"assets/NOTICES": "70e82e3e1e5f745700cd3c1d48ddbe56",
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
"flutter_bootstrap.js": "836200f91af635bd62035ec24cd4c380",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0d3e63c8e2b1e3f5b15a27a45acce306",
"/": "0d3e63c8e2b1e3f5b15a27a45acce306",
"main.dart.js": "8dbdd06d7521c46e0560570ca2f41b21",
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
