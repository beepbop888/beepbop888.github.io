'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "18585b53944738824d898983c3b818b7",
"assets/AssetManifest.bin.json": "9b1065e0150050ff34862f290047356e",
"assets/AssetManifest.json": "82282ca599e3db1b4003df47474f999a",
"assets/assets/photos/004f1ecfe1e4.jpg": "992b23028bd3ce9657b55a0c37b23a0e",
"assets/assets/photos/0220017a54c7.jpg": "9df424a494e2c598ee7aead4519efd2e",
"assets/assets/photos/04b7b2ffda79.jpg": "8ce3519ece06a2c2aa23282919783b79",
"assets/assets/photos/06a89bb39007.jpg": "c386f797b2ab77d64a7556868dc623a3",
"assets/assets/photos/093a920d3a23.jpg": "127c229c3c3261bfb6b2c0ef15c5f464",
"assets/assets/photos/0a68646be390.jpg": "cb984f309303672a699aba3c19af44fb",
"assets/assets/photos/0bb046e2b94a.jpg": "5c25d49e531cb863cc70826b762a4c3c",
"assets/assets/photos/0c24aefa39c2.jpg": "44357c14d30dcfbe693b8adf38c55363",
"assets/assets/photos/0c9faa1d575a.jpg": "1b67b1abb155bfb0cc8f0fa03a2a2184",
"assets/assets/photos/0d076e823bd9.jpg": "dac31322df8b21abf11e51c37ee68e6f",
"assets/assets/photos/10d06912df15.jpg": "ab4e18df8a6d7b930c79b5b13664c06d",
"assets/assets/photos/125d26fc18f8.jpg": "f1d378af4f1873de515c1e376b60b090",
"assets/assets/photos/132106218367.jpg": "89df8ddca8fd80ff08049b31cce1a059",
"assets/assets/photos/17216dce9a38.jpg": "92d7e9c2e6f053ff2fb4a2d91385c794",
"assets/assets/photos/183179690be1.jpg": "8c10d22d562db5eb44ae38dfdfa6decc",
"assets/assets/photos/19c3b9e59af9.jpg": "5082338e1b7767f1c1a29c41a67c9be4",
"assets/assets/photos/1de96d737e5a.jpg": "2b6dc80d2c66bd4828c99b0088db0a7c",
"assets/assets/photos/1eeaeb13d012.jpg": "b1e942d3ec294cbaf2b5336ea42b0f08",
"assets/assets/photos/20c759cf96d1.jpg": "d9cb6f4ee7a408f765008dd07507090a",
"assets/assets/photos/20eacafb72eb.jpg": "f5679f7cae8b919dc2d9daf4763c7966",
"assets/assets/photos/20ecadcc7d63.jpg": "db6731de18e783873ceb409ed8bc93a1",
"assets/assets/photos/210b93f977f0.jpg": "22d2384ca09bb618924f53c971668342",
"assets/assets/photos/211b2eeae685.jpg": "7b705fc91b4fcded5e79f8ce5ead653a",
"assets/assets/photos/21e28bced908.jpg": "59f87b3f8bd4764e062d91202c9e1576",
"assets/assets/photos/22a37d6650c4.jpg": "502ca694b57b51625767f0fa69964bfa",
"assets/assets/photos/23ce42c2b805.jpg": "a92c6a2ca8cdd35214ccfb8d3cf83c12",
"assets/assets/photos/26a49674f87b.jpg": "c38096b108b2ca48592ae92168d465dd",
"assets/assets/photos/295c970cc3b9.jpg": "8ef013d19eee7b97bac67f1b17b638a8",
"assets/assets/photos/2d1635aefd3e.jpg": "4f487e406f93b4d892f0324d9fc61036",
"assets/assets/photos/2f36b27fbf0b.jpg": "d0a6074474e87c2336a410eecfd2bead",
"assets/assets/photos/2f5aca2bd387.jpg": "5acaea8ab2c663d62b2bcc8d8fa7e24d",
"assets/assets/photos/30673f500081.jpg": "507b099f203761e1509e7efe809b1cea",
"assets/assets/photos/3198286dd618.jpg": "47ad7085e947e7efdc4697d6200a39fd",
"assets/assets/photos/33152ca95b31.jpg": "b76a23e863e30396367723a9c0ffb3c4",
"assets/assets/photos/34fb3cfa58b5.jpg": "7bb4c3356b4104340633c7947eca32ad",
"assets/assets/photos/3804eeba145b.jpg": "15312bbe7c083b7a66c0f0ec3f6fd493",
"assets/assets/photos/38dc51f4326b.jpg": "f9d4148cd7ebb67d93f637cbbe381ed9",
"assets/assets/photos/38eff3dc9cc3.jpg": "7944d9d8f3737b2346c1205a30f882fb",
"assets/assets/photos/3b8a35874af8.jpg": "ec639f0576b774e322e610dfa4dff98c",
"assets/assets/photos/3de2ee524337.jpg": "3d4928d21f832fed3216a5bd3ec2a01d",
"assets/assets/photos/3dfe13c47cf6.jpg": "667cb2f744d2dd2f13cbaac36b0b0464",
"assets/assets/photos/3f67bf8ed88b.jpg": "59e79a1f5c6fa8adc83a3a32a3a93267",
"assets/assets/photos/420413936490.jpg": "84eae5e892728829a41f7647fbe7105f",
"assets/assets/photos/427036eadbae.jpg": "4d5595943c46ba618b26779c50242ee5",
"assets/assets/photos/4476666c1a5b.jpg": "c5a7dca20690923d950b88dd73324e20",
"assets/assets/photos/458188dca20d.jpg": "850af1c38487b55f151524f61500b583",
"assets/assets/photos/4811af234546.jpg": "8c5c0876aabadf3c9821d95e51202f85",
"assets/assets/photos/49b70873dbe6.jpg": "33125a5c6d738c97897a425c51322183",
"assets/assets/photos/4b418977e7a5.jpg": "c4b80d5867592de99b5f98b8157f0f45",
"assets/assets/photos/4b88b84d7db5.jpg": "7b35e4ba4e3880cad05154dbbb6667e2",
"assets/assets/photos/4c52eac10082.jpg": "a55edb3f50423025c1476421c9721ef6",
"assets/assets/photos/4cf9c14965b4.jpg": "8f7db79b8e1754c7c7c12612fafdb97e",
"assets/assets/photos/4d22bf747b01.jpg": "f84b7eaa1bb6e51e7a89c571fe190c5f",
"assets/assets/photos/4d5490ed93c0.jpg": "82877a07da7c51894a7795274a18e75e",
"assets/assets/photos/4f79a46c9392.jpg": "d5e1dc358104f438ecc567f94f9e93b2",
"assets/assets/photos/4f7fe1542cc3.jpg": "e0173306a4a2cdf49eb4e96810c7ea80",
"assets/assets/photos/52b9e2acb096.jpg": "6dd24b67bf63e19ce489b7102ae3c4c4",
"assets/assets/photos/5351b2351304.jpg": "c594b416acbd4bf9982d9896cc53ef21",
"assets/assets/photos/54b2346ecf88.jpg": "3cc86645efe1b3847683a7007da1b2e1",
"assets/assets/photos/55a54629cf02.jpg": "7c56025d5fcab5ab42e18949d3b05932",
"assets/assets/photos/57f241db0c2b.jpg": "d374a88d8dc9d63c142ac1f3d12ca4be",
"assets/assets/photos/5a02c8dc8308.jpg": "7cd0219c5194cdc29d29814c289e9b2b",
"assets/assets/photos/5a7190cb431a.jpg": "b0d3d6c289b94d6650bf982fb89b8a51",
"assets/assets/photos/5bc1b09c5005.jpg": "10313eefc4d4d23c1478fe93be7b2e96",
"assets/assets/photos/5bf55e439c61.jpg": "ad4d58fea24328d9c0c68c59dc3a5ad6",
"assets/assets/photos/5c563053d73a.jpg": "c23d6cb5e19418f89e0d4ed7078cce11",
"assets/assets/photos/634eacacb1b9.jpg": "623d8f83810a399d2b8ef0692ce0eb0c",
"assets/assets/photos/63de534d73a6.jpg": "39c43ef5474189813acfa518b0338016",
"assets/assets/photos/663eee6840ff.jpg": "015b77529aa86741de0a62ef5329f1ba",
"assets/assets/photos/692059cccd50.jpg": "c292e2af43f67f1252d11bc1803ffb38",
"assets/assets/photos/69957374a868.jpg": "9b2eac90b3da61b361378a7eb94753c6",
"assets/assets/photos/69ffe861d05a.jpg": "3a9b3dd10e4c9592408bf3219f834ca7",
"assets/assets/photos/6a7a96a077d1.jpg": "d00ac8f6a503a41fd7c291bdf6e7ab81",
"assets/assets/photos/6d5ff607d2d4.jpg": "9547380048e84bdbde7b84eed7b5d534",
"assets/assets/photos/6d797a1bd664.jpg": "e96d27cd6f64882302992e7833907bf4",
"assets/assets/photos/70f7d7950ad2.jpg": "b024b17bf2aa514ee2b3f3838c5a25b2",
"assets/assets/photos/746ef990ff4f.jpg": "f7cdc3454b4281d51223d7d228bc5971",
"assets/assets/photos/7682340a4a7a.jpg": "6b810b3cd1baf1242e8a01993fd5e150",
"assets/assets/photos/76b9ac246db0.jpg": "8aff47fde44318825595f0fb1e748b0a",
"assets/assets/photos/76eb2f5dae83.jpg": "97cd6dba55a7b59c6e447b45a236dadb",
"assets/assets/photos/7777235e7b8f.jpg": "cea0444c3be57f9a30ada27477b9151d",
"assets/assets/photos/78628e330726.jpg": "cb219fd77a3a02a1801bf2c5d0f2cbdd",
"assets/assets/photos/78bf3d085840.jpg": "adfdc020716439ab91e3c73c67fab227",
"assets/assets/photos/78ce2d596cbd.jpg": "acdaba74fc4b47ef741ade14070b7055",
"assets/assets/photos/79a45787b093.jpg": "6d6f44f90c1369c7d3052160d96b776d",
"assets/assets/photos/7b77f0bb726c.jpg": "1708f73584d0a8f0f9329e227f027824",
"assets/assets/photos/7d6f016cef40.jpg": "1597c69fcfb93475ebe4ccfed998f5ca",
"assets/assets/photos/7e3f7019ead5.jpg": "91401911f6e97e5bbc17cfd424397012",
"assets/assets/photos/7f13f1bf6ad6.jpg": "53d695e4eb13f884c0e5a12cce1e394c",
"assets/assets/photos/7f24ad17c74d.jpg": "97bcf8815c1b9ff63dd8b918d0e0ef93",
"assets/assets/photos/824a3a949e71.jpg": "7a0fc7defcd53adc3978b1fa9a9495e7",
"assets/assets/photos/84c9b176008a.jpg": "d6f64551b8560ff0a5bb50bc43143a15",
"assets/assets/photos/8882764bada8.jpg": "835725c3981ff7e4fc9cacd86a421317",
"assets/assets/photos/8ce38627dab6.jpg": "8c9eaf7c2b3874228ca3dda43165dc3a",
"assets/assets/photos/8d90e6dce749.jpg": "9f80f9fd6ecab346f2cb52d7f4400660",
"assets/assets/photos/91fc44bb6c48.jpg": "b0bc301744105ffb2ae646b2a03944af",
"assets/assets/photos/9377a20642ce.jpg": "c75ec904a5b4901fc7babae4c62099d1",
"assets/assets/photos/937c0d7b375c.jpg": "450b9dbb30614141d34e04cf1f0c0151",
"assets/assets/photos/947be8159b4e.jpg": "4741980eb614e073ba94a6ad8a2120a8",
"assets/assets/photos/958ccc236184.jpg": "f2ad9eeaece3d6be9d73590f63f74bae",
"assets/assets/photos/95af4bab05d1.jpg": "d602dd7c6f3f1daafbca3c6d41b674b2",
"assets/assets/photos/962536b70c64.jpg": "94cb682f71e030136e41cbf23a1248ed",
"assets/assets/photos/99fd360c82e7.jpg": "df68f1ff353ba1a5f6623b31c80e18bf",
"assets/assets/photos/9a409bc44548.jpg": "7a7caef929d49336f99816994119cf04",
"assets/assets/photos/9b7d81ec197c.jpg": "37893845f9ba3a7ee129cf907ce5fa99",
"assets/assets/photos/9c355901cc2b.jpg": "9a710c2d3b30912f0e3f680e019009af",
"assets/assets/photos/9dd3ff180627.jpg": "ea46960a695ea8cb73b1aee60675def1",
"assets/assets/photos/9e99c248fe3a.jpg": "169842960607c5dc1ce1697f73a309db",
"assets/assets/photos/a2bb5001d52c.jpg": "f7cf1ece37deac4260bf58e0ea695ce0",
"assets/assets/photos/a3b234e6da57.jpg": "327216d277e18cdc5e1ab303998fd90d",
"assets/assets/photos/a478f5cf22be.jpg": "b90051a701aa4b22e1d514891e9e8a2a",
"assets/assets/photos/a6e7cb2b6641.jpg": "9a662830d0fd2e79b8679699717739f6",
"assets/assets/photos/a8bf257d7351.jpg": "531d44be8034ab0f11f58d54c9ff4c31",
"assets/assets/photos/a939ee5d26a2.jpg": "5b308f6405716a66cc0b2689e881445a",
"assets/assets/photos/a9922e79a04b.jpg": "c7a2a6505993f6ba55359c73b1c1f98b",
"assets/assets/photos/a9eba119f79d.jpg": "102127295dcb182032b42945ac1784a6",
"assets/assets/photos/abfa3a3ea61f.jpg": "038f182200989c470378e71720533f3f",
"assets/assets/photos/afc36d871e07.jpg": "e87b6a89383bb2b86f85e50ea22b6255",
"assets/assets/photos/b0356a41f6d2.jpg": "3b9845379ef8ab2cd148a620f659f014",
"assets/assets/photos/b2107e772658.jpg": "1b6461b872a9cb71921c61e01e396b6c",
"assets/assets/photos/b2dbe92be9b9.jpg": "363f47d1be49a364df1d88e7b3c90837",
"assets/assets/photos/b35b13102800.jpg": "553d75646f2d992d000b1caf3c6c8ce4",
"assets/assets/photos/b372fbf68b3c.jpg": "29b382cf58667d806c140873464fda6b",
"assets/assets/photos/b3b5bbb7d7c2.jpg": "7a09933856ceaafc16ed3fb46fc457d5",
"assets/assets/photos/b5b366d8488b.jpg": "be20ecde8359071ddbe43ee629382e0a",
"assets/assets/photos/b82426a00a1b.jpg": "73fd892cb4afef81249e6ab662e6a757",
"assets/assets/photos/ba137a539709.jpg": "21a39df76f404a31cac53ec255242023",
"assets/assets/photos/be555a6d2637.jpg": "129d983bce6faacf2af3b662685552f8",
"assets/assets/photos/c06a4a97a1e6.jpg": "0b52655d8903fb62dc94ae8f07919a92",
"assets/assets/photos/c3ce5a4aa4e2.jpg": "3bec1b35953ccb1a299f170aa0753ef1",
"assets/assets/photos/c6ede62bafed.jpg": "aeb6dda51cfbbf80df100b0570667420",
"assets/assets/photos/c75d2b888cca.jpg": "27669c1f949501ba959ecdd4460df1d9",
"assets/assets/photos/ca720e937c68.jpg": "a74c660be244384a4046b590b01c1d5a",
"assets/assets/photos/ca7cf26a803e.jpg": "7d146986f3428da863d5cd0167ffc337",
"assets/assets/photos/ca94ebbe57db.jpg": "983d4740372c17a78bcbd7d3de672ff6",
"assets/assets/photos/cc64b2437578.jpg": "6c593f334be0656a8ea20ddd0ac2442e",
"assets/assets/photos/cecdc13e5b31.jpg": "a450c3e07ed3e95e16c0a780708d7e60",
"assets/assets/photos/CREDITS.md": "ad8ea2bf1cdc4d5396778e2f2aee90b2",
"assets/assets/photos/d08e69bac1eb.jpg": "72df2d85543283cab8bc7d384de63f99",
"assets/assets/photos/d0d369109b7c.jpg": "c5d3958ee54bd940d3801acabb11e38c",
"assets/assets/photos/d25522ce960b.jpg": "6085305b48deac8a9448eba4da212535",
"assets/assets/photos/d5b8999061e3.jpg": "cffb52fb6f70453b88a87b50a8c4a535",
"assets/assets/photos/d6f14726faf1.jpg": "1c87c2e117c4fea31a0d0a458fa4e495",
"assets/assets/photos/d89be88ebd8b.jpg": "76afcad908ee9723f4a0593b37ddc038",
"assets/assets/photos/d94be7631558.jpg": "8dedbc97b9ae2121ef24aebf28c14b19",
"assets/assets/photos/da360238e497.jpg": "30fa53ae923bd5571f6c38490f9eb2fd",
"assets/assets/photos/daf054838cf0.jpg": "4af244abde517adb9bf05fe4a9a727a0",
"assets/assets/photos/dc0e8ca5f764.jpg": "1569ce22825b7038138c8ddb5b6c61b2",
"assets/assets/photos/e15fa6c02086.jpg": "e82f7b13a1156feb6bf6e9dd77c5cfa9",
"assets/assets/photos/e1d01d95aa93.jpg": "b9552f04c78cd1b912b6016aec33a3c3",
"assets/assets/photos/e47c70aa878f.jpg": "46fa766845a303e9c78ab0811124ae64",
"assets/assets/photos/e62199fd9156.jpg": "d24b99f9fd45d530856dd302a0b8f70c",
"assets/assets/photos/e740dbbdf430.jpg": "fab22014e2413573bd54e55b747b7fb0",
"assets/assets/photos/e80fd8a27537.jpg": "f0216cd3145c72b54d3da1634bf2b612",
"assets/assets/photos/eb0910e9bc6e.jpg": "1fb0630a069ff73a7f0e5d578b344814",
"assets/assets/photos/ecb94d2b94e2.jpg": "272c6a5cb94f38d26837d64c79a6d26e",
"assets/assets/photos/f23ad22cac72.jpg": "03b262a594897e41a216285adfdb4f53",
"assets/assets/photos/f240ad7d8372.jpg": "94e68432817357eba4b1ae83e6856fa5",
"assets/assets/photos/f302ace256b7.jpg": "348aaf97e3aa153b49eed0f34c765281",
"assets/assets/photos/f3f0c866bd11.jpg": "4ff5ce76f2aa23ae01cae6fe0908922a",
"assets/assets/photos/f550d2af6679.jpg": "848ea8547157ea2ad5f2f0cbc33fd0e5",
"assets/assets/photos/f56cd1ac2b2b.jpg": "767e1732a2c9707b1b7b657f1997bbb6",
"assets/assets/photos/f79cbf35b55f.jpg": "6e8bc28b3a6455ec8c6291cf6a5b6e3a",
"assets/assets/photos/f88ec4dae83c.jpg": "352441f03f03b36739866fe84f62ee34",
"assets/assets/photos/f9c1382818ad.jpg": "66e28b5d52f47d2b573e0b6bb482beaa",
"assets/assets/photos/fb1339bea97c.jpg": "c6857587c1491afce74db02ee3be519e",
"assets/assets/photos/fd5f0eb5a39b.jpg": "9bef6c2f6c3a9cc7ff803bcf6fabaa8a",
"assets/assets/photos/fe2d3a1653a1.jpg": "2cbfe92acd79de649ce92015f806b94e",
"assets/assets/photos/ff019be702af.jpg": "5549c6ce2283e939dcaf61c258f013d4",
"assets/FontManifest.json": "67fe39d3eb328960667833618a9f25f2",
"assets/fonts/Comfortaa-700.ttf": "8c11e7ac62f7d2b6afed3f60011b0842",
"assets/fonts/Kurale-400.ttf": "3b7f7bdee96ec416e6d2af956d7bf36a",
"assets/fonts/MarckScript-400.ttf": "0d361ed4bda68872057aff032619fe4d",
"assets/fonts/MaterialIcons-Regular.otf": "61f5fced23b0b4270eb23b0233f99c20",
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
"flutter_bootstrap.js": "c6fa39f089e351c654d7cbca7da799fe",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b83908b9dd766228c9dfbc2fc5e8800a",
"/": "b83908b9dd766228c9dfbc2fc5e8800a",
"main.dart.js": "26fdafd0c5ed1c904c4738fbc1be48b0",
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
