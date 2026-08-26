'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a1f9655715eefd2eda492229aca1f2ee",
"assets/AssetManifest.bin.json": "6141505b9a72f65121b3945c30c6dda1",
"assets/AssetManifest.json": "d8d96977d295ed07dc33632b8f0c1b59",
"assets/assets/demo_photos/LICENCE.txt": "b76bc9b3bc33c2c3a82ab65d611c26ce",
"assets/assets/demo_photos/photo_00.jpg": "31b0b9a989ad2de9cc254c195fa2e11a",
"assets/assets/demo_photos/photo_01.jpg": "805713065cefbcd4eb2cbd0f5d4e785a",
"assets/assets/demo_photos/photo_02.jpg": "289e1f02d429876a639237ebb228603a",
"assets/assets/demo_photos/photo_03.jpg": "fdafad2f689e04458430b0a907b1c1ba",
"assets/assets/demo_photos/photo_04.jpg": "2ad677967e3a988122c46a1e92b60257",
"assets/assets/demo_photos/photo_05.jpg": "b8be239f32b4bbd470723c97043cbe9a",
"assets/assets/demo_photos/photo_06.jpg": "4e00d707d13c2f603fa0186f3e5509f3",
"assets/assets/demo_photos/photo_07.jpg": "68400771cd542aacd462fefea709c89a",
"assets/assets/demo_photos/photo_08.jpg": "df410b745440cff8c021edb9d35899b8",
"assets/assets/demo_photos/photo_09.jpg": "b9d9718682a230f07ce63c3316443f82",
"assets/assets/demo_photos/photo_10.jpg": "ccbafcab2d59dd489e637b2c71b366fd",
"assets/assets/demo_photos/photo_11.jpg": "ec7e2f4934f17940760856b1cac26c3d",
"assets/assets/demo_photos/photo_12.jpg": "926391603eb7531fcd6494f62fea7315",
"assets/assets/demo_photos/photo_13.jpg": "620c1d66365a41b7fdf526269fca4a71",
"assets/assets/demo_photos/photo_14.jpg": "95f3184af19fed58041bf98bf2e836a5",
"assets/assets/demo_photos/photo_15.jpg": "2ae003efe43e25e5f9376334d140cd59",
"assets/assets/demo_photos/photo_16.jpg": "4b96745aad3af99367ee7e5139640de4",
"assets/assets/demo_photos/photo_17.jpg": "98fe1b92c61e2c82fdad94ed5386d475",
"assets/assets/demo_photos/photo_18.jpg": "5e7729ee4c5db0e8ffb2a03ec028ecc8",
"assets/assets/demo_photos/photo_19.jpg": "8bc0843a49585ce72909199b3d3aaea0",
"assets/assets/demo_photos/photo_20.jpg": "618fb2be784ac36ae71b790189c7defa",
"assets/assets/demo_photos/photo_21.jpg": "510933a074fa835fb39c035992ee9448",
"assets/assets/demo_photos/photo_22.jpg": "1e9e326b218d6e08d678004ac81b657e",
"assets/assets/demo_photos/photo_23.jpg": "594c872bfe9b334b2babf66bd7f42de8",
"assets/assets/demo_photos/photo_24.jpg": "a12302d5d0950871caa12370747a9353",
"assets/assets/demo_photos/photo_25.jpg": "9063ce4cab135bc58d23f76cbdf79f4d",
"assets/assets/demo_photos/photo_26.jpg": "b26a5a19987cf48eb44234060823a260",
"assets/assets/demo_photos/photo_27.jpg": "97c76e344626c49343279616219e3c54",
"assets/assets/demo_photos/photo_28.jpg": "9044f09591d8d52862e3112a49fb1b5f",
"assets/assets/demo_photos/photo_29.jpg": "8e1eef9340434360ab0ad2250e90c87d",
"assets/assets/demo_photos/photo_30.jpg": "a02d5de6ef072212dd12b2d00001c842",
"assets/assets/demo_photos/photo_31.jpg": "adab0c6c51a5805ec682dc9113fa261a",
"assets/assets/demo_photos/photo_32.jpg": "0fea2ca3efd7b4b4bccbfad1127c755f",
"assets/assets/demo_photos/photo_33.jpg": "718157a208538159cfa834423368caed",
"assets/assets/demo_photos/photo_34.jpg": "36b3ca91bac6e4dc339d0b8369c8c12c",
"assets/assets/demo_photos/photo_35.jpg": "66b9fc45c1a74070028ace15e60e58e6",
"assets/assets/demo_photos/photo_36.jpg": "8883e17cc515ff3a578aa48052580bdf",
"assets/assets/demo_photos/photo_37.jpg": "55d6dc325b55cd0b8f69e65be251afbe",
"assets/assets/demo_photos/photo_38.jpg": "4ca36d47420e76110bb1b6cf00e8c358",
"assets/assets/demo_photos/photo_39.jpg": "7d3c8d04e4559cc1b2ff12cafc50e375",
"assets/assets/demo_photos/photo_40.jpg": "2813e3967a32941a3bd9d7cb75aa02cd",
"assets/assets/demo_photos/photo_41.jpg": "b449ae50a828b9d0f1578408e3bc7fce",
"assets/assets/demo_photos/photo_42.jpg": "b3296b87cbd0f1eec241739564686e08",
"assets/assets/demo_photos/photo_43.jpg": "a657482abf0c625b4ce32040de925224",
"assets/assets/demo_photos/photo_44.jpg": "01ac878c777dc6c804d5e90dfeb1c763",
"assets/assets/demo_photos/photo_45.jpg": "5342d39cd4d1e1ae3a4b736cd2f90aa1",
"assets/assets/demo_photos/photo_46.jpg": "d16ce8c85ae462c3eee2ebcb27e49380",
"assets/assets/demo_photos/photo_47.jpg": "2da3e45d2dbb115e118de41c96324d14",
"assets/assets/demo_photos/photo_48.jpg": "2f95ff1c71ce23f58c1a6a13aeacdf04",
"assets/assets/demo_photos/photo_49.jpg": "3327eded15239f17b54e1f57949f4061",
"assets/assets/demo_photos/photo_50.jpg": "b3f2d46404451ca8d7dbea470c85b968",
"assets/assets/demo_photos/photo_51.jpg": "8f909119870dbd874f56470cb3065298",
"assets/assets/demo_photos/photo_52.jpg": "98d3fc3dfa215f764b2b4981b10488af",
"assets/assets/demo_photos/photo_53.jpg": "3307c60cff5654596feb9794c5317a37",
"assets/assets/demo_photos/photo_54.jpg": "ebdb8f7b9998846b0faee230a2b0732e",
"assets/assets/demo_photos/photo_55.jpg": "857eaa88d9e47ab07d5d4f30fb73e9d6",
"assets/assets/demo_photos/photo_56.jpg": "a7098c02867ef5ce11e7a4cf1bf4f487",
"assets/assets/demo_photos/photo_57.jpg": "6e194b21e85099f08460197b7115da7a",
"assets/assets/demo_photos/photo_58.jpg": "f1249dbde8b14d8558293addaa050ed1",
"assets/assets/demo_photos/photo_59.jpg": "afe9cecff86486d738b70a627aec7577",
"assets/FontManifest.json": "368e8bf154262150e14164b34e48eb9a",
"assets/fonts/IBMPlexSans-400.ttf": "55d106b7f983cda1f2967d8e4ff29133",
"assets/fonts/IBMPlexSans-600.ttf": "8641412ae27c4e4f9b6c4301b5d9bd25",
"assets/fonts/MaterialIcons-Regular.otf": "2e9011d1339a36fa7931fb5b1512510a",
"assets/fonts/Rubik-500.ttf": "bf6c4a50281760580992343d9f9e79a3",
"assets/fonts/Rubik-700.ttf": "2f5c3e903e490e66ae2d54ef5e886f13",
"assets/NOTICES": "85bd0b6f36e86f2d3cd4068d37eb77d4",
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
"flutter_bootstrap.js": "d5db2e8897caf014917f6d8001a61519",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ccee2968bb1e0a33857e43b67f38aacb",
"/": "ccee2968bb1e0a33857e43b67f38aacb",
"main.dart.js": "da9817224e2a891d143c97c60fdba700",
"manifest.json": "3ed98b5ba0288ce9bdbc23575f351325",
"version.json": "797677ac4eb5aaea0d19368d3beb4763"};
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
