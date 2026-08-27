'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "81a3e050f8080964c64f995bb2899ecb",
"assets/AssetManifest.bin.json": "1608b86cf1dfa591607edbdee44b7562",
"assets/AssetManifest.json": "6ee0b4ca7fee200e5881623443d3e373",
"assets/assets/photos/004f1ecfe1e4.jpg": "992b23028bd3ce9657b55a0c37b23a0e",
"assets/assets/photos/006ab6a9de08.jpg": "33ef92fc7d2a02cf998faf49ccd731d0",
"assets/assets/photos/065cca86e466.jpg": "7bca7cab2e3d73c71df1c973b99b21bb",
"assets/assets/photos/06a89bb39007.jpg": "c386f797b2ab77d64a7556868dc623a3",
"assets/assets/photos/0801c01d49b7.jpg": "4e5137ffbc5d6f5842626660598bb7c0",
"assets/assets/photos/0bb046e2b94a.jpg": "5c25d49e531cb863cc70826b762a4c3c",
"assets/assets/photos/0c24aefa39c2.jpg": "44357c14d30dcfbe693b8adf38c55363",
"assets/assets/photos/0c9faa1d575a.jpg": "1b67b1abb155bfb0cc8f0fa03a2a2184",
"assets/assets/photos/0cc42a3e950d.jpg": "7c4913858d9dd2f2b0b35cc8fb81be0b",
"assets/assets/photos/0ce5db57a3d4.jpg": "a5e278b1da479f2188664e906840542c",
"assets/assets/photos/0df4ff61a32d.jpg": "4f04e601041678a47f659f482d74651f",
"assets/assets/photos/0e0fc643b07d.jpg": "530a298762bce2fc54392d13844407e0",
"assets/assets/photos/139dc61267ce.jpg": "cc13efe75c9482510ad8f03f0819ad4e",
"assets/assets/photos/1490730e0456.jpg": "22d71aed65c4d1636367d1007cd830d5",
"assets/assets/photos/173829c6ac36.jpg": "c607faf82d7a5e50b6ee4b65943be998",
"assets/assets/photos/19c3b9e59af9.jpg": "5082338e1b7767f1c1a29c41a67c9be4",
"assets/assets/photos/1caf87f30efb.jpg": "e297cdb20a32b4eb19b6a2ff364478a7",
"assets/assets/photos/1de96d737e5a.jpg": "2b6dc80d2c66bd4828c99b0088db0a7c",
"assets/assets/photos/1eeaeb13d012.jpg": "b1e942d3ec294cbaf2b5336ea42b0f08",
"assets/assets/photos/210b93f977f0.jpg": "22d2384ca09bb618924f53c971668342",
"assets/assets/photos/211b2eeae685.jpg": "7b705fc91b4fcded5e79f8ce5ead653a",
"assets/assets/photos/2359eb93b719.jpg": "5dc7bbc493c1a6b309b2292bbedff30e",
"assets/assets/photos/263ce91bdea7.jpg": "f5c4348840a9fd8eb1c96cb9535f9fb3",
"assets/assets/photos/2776b5c867ea.jpg": "a0f1a5966c6dd2b55f2b1d819b258b14",
"assets/assets/photos/29559bf0c667.jpg": "4932665ab5bde80147989b01d1482a9d",
"assets/assets/photos/2c6c8b9459c4.jpg": "00e6d73ceb53178e1694a72753701e88",
"assets/assets/photos/2e09c668fbbb.jpg": "787d370057f0be7d49abc724c86507a0",
"assets/assets/photos/2f280498e9b9.jpg": "df86ab5b4839d565412d24568f29769b",
"assets/assets/photos/2f5aca2bd387.jpg": "5acaea8ab2c663d62b2bcc8d8fa7e24d",
"assets/assets/photos/2fbf1c8f0262.jpg": "7d31043312c92246bf34061975809917",
"assets/assets/photos/314486cdfd92.jpg": "b2f375b3a15005db1d9f7ffb60610b9b",
"assets/assets/photos/34fb3cfa58b5.jpg": "7bb4c3356b4104340633c7947eca32ad",
"assets/assets/photos/38dc51f4326b.jpg": "f9d4148cd7ebb67d93f637cbbe381ed9",
"assets/assets/photos/38eff3dc9cc3.jpg": "7944d9d8f3737b2346c1205a30f882fb",
"assets/assets/photos/3adfacca014d.jpg": "67b23b4347f60ff27bc3400e7cbbf388",
"assets/assets/photos/3bc1b2d0c481.jpg": "3b6c252dae47ae650dfad2136da0f454",
"assets/assets/photos/3de2ee524337.jpg": "3d4928d21f832fed3216a5bd3ec2a01d",
"assets/assets/photos/3dfe13c47cf6.jpg": "667cb2f744d2dd2f13cbaac36b0b0464",
"assets/assets/photos/42bc59325cf3.jpg": "82935810a893660accdd5317a9570c81",
"assets/assets/photos/43927c462a61.jpg": "e2793d85d1e94b4254468e49f84ae136",
"assets/assets/photos/45e426beee48.jpg": "d16a7130a89288f53995d51771e22f2b",
"assets/assets/photos/48bba11c5c80.jpg": "0154bf83d40b51178c6be17b4d17f84d",
"assets/assets/photos/49b70873dbe6.jpg": "33125a5c6d738c97897a425c51322183",
"assets/assets/photos/4b418977e7a5.jpg": "c4b80d5867592de99b5f98b8157f0f45",
"assets/assets/photos/4bbe91bdccdc.jpg": "ce6d780dea03ebbb1860b068ba6d9de9",
"assets/assets/photos/4c20f09b4153.jpg": "d2544cdb8aa0d624986797bbe18e2159",
"assets/assets/photos/4eb6154648be.jpg": "f1182b0ce059025f4307d7db6ee69202",
"assets/assets/photos/4f7fe1542cc3.jpg": "e0173306a4a2cdf49eb4e96810c7ea80",
"assets/assets/photos/4f88c0a4cd73.jpg": "2437cd52e0d8ae91ce0fc7b73c5afc99",
"assets/assets/photos/530cb4bb46f8.jpg": "489b27921db4e761459ce8462db76352",
"assets/assets/photos/5351b2351304.jpg": "c594b416acbd4bf9982d9896cc53ef21",
"assets/assets/photos/5435e2f7c264.jpg": "300af0ad1da3a80ae1330eaf71a93f5c",
"assets/assets/photos/54b2346ecf88.jpg": "3cc86645efe1b3847683a7007da1b2e1",
"assets/assets/photos/55d25e2ef984.jpg": "6f7e1ddb1d674915be3c0f244414f197",
"assets/assets/photos/5a7190cb431a.jpg": "b0d3d6c289b94d6650bf982fb89b8a51",
"assets/assets/photos/5aa3de618be8.jpg": "b9085b5e33f7d9f28cba811664c0ee2f",
"assets/assets/photos/5add50ff3c28.jpg": "195a33e986bf2eb20aa0c49fac4c30be",
"assets/assets/photos/5af62e5369ef.jpg": "cc299c99f18f33bc6e434fc26ceeb184",
"assets/assets/photos/5bc1b09c5005.jpg": "10313eefc4d4d23c1478fe93be7b2e96",
"assets/assets/photos/5bf55e439c61.jpg": "ad4d58fea24328d9c0c68c59dc3a5ad6",
"assets/assets/photos/5c251243b4f4.jpg": "8e86b1d9279ac3fdac18adf69cbda8fa",
"assets/assets/photos/5dee40598454.jpg": "f9f11d0923d53e11e2998ab371302ce7",
"assets/assets/photos/5f34a6ebdb86.jpg": "ab8cc6d6af092a9c847b9259f554dc45",
"assets/assets/photos/61d6d9c412d7.jpg": "f103bf7f2a5d8be751b7f2367bbee1e4",
"assets/assets/photos/634eacacb1b9.jpg": "623d8f83810a399d2b8ef0692ce0eb0c",
"assets/assets/photos/69957374a868.jpg": "9b2eac90b3da61b361378a7eb94753c6",
"assets/assets/photos/6a7a96a077d1.jpg": "d00ac8f6a503a41fd7c291bdf6e7ab81",
"assets/assets/photos/6d271bf471a6.jpg": "8c8dce7027324c5a5a339ba5875f7a70",
"assets/assets/photos/6d5ff607d2d4.jpg": "9547380048e84bdbde7b84eed7b5d534",
"assets/assets/photos/6e8efba2dab5.jpg": "f0b7f20c88b608120517d65be1083911",
"assets/assets/photos/6ec4f54ece05.jpg": "c01b42df6c4bee4e3dbf2cffa08137e2",
"assets/assets/photos/6f54af06573a.jpg": "ae08c3cf71f98027e5672762a58cd7ed",
"assets/assets/photos/6fd4c596e1f4.jpg": "af82b4ae00e58105df94d4dba1b78a61",
"assets/assets/photos/70f7d7950ad2.jpg": "b024b17bf2aa514ee2b3f3838c5a25b2",
"assets/assets/photos/753aa397ca78.jpg": "b62733ea710d750257937677e453cfba",
"assets/assets/photos/75ecb51b1765.jpg": "e12e2c99d6d201f664dc7e0264042551",
"assets/assets/photos/76b9ac246db0.jpg": "8aff47fde44318825595f0fb1e748b0a",
"assets/assets/photos/76eb2f5dae83.jpg": "97cd6dba55a7b59c6e447b45a236dadb",
"assets/assets/photos/77639268c44e.jpg": "079c097ed6e2007a26efbb775c2811b6",
"assets/assets/photos/7777235e7b8f.jpg": "cea0444c3be57f9a30ada27477b9151d",
"assets/assets/photos/78628e330726.jpg": "cb219fd77a3a02a1801bf2c5d0f2cbdd",
"assets/assets/photos/78ce2d596cbd.jpg": "acdaba74fc4b47ef741ade14070b7055",
"assets/assets/photos/79a45787b093.jpg": "6d6f44f90c1369c7d3052160d96b776d",
"assets/assets/photos/7a76c5302d76.jpg": "e2728551223fc0e5fdd761959ff43a80",
"assets/assets/photos/7b77f0bb726c.jpg": "1708f73584d0a8f0f9329e227f027824",
"assets/assets/photos/7c9e9de543ec.jpg": "0e1937e2ee86eebb1943e873bc39ee51",
"assets/assets/photos/7ca203c62581.jpg": "aebb2057cd52f82e766303b19ce9ca20",
"assets/assets/photos/7e42f9ab1efe.jpg": "08f6c5d8a73e29d63f3f727459982064",
"assets/assets/photos/7f13f1bf6ad6.jpg": "53d695e4eb13f884c0e5a12cce1e394c",
"assets/assets/photos/7f24ad17c74d.jpg": "97bcf8815c1b9ff63dd8b918d0e0ef93",
"assets/assets/photos/84c9b176008a.jpg": "d6f64551b8560ff0a5bb50bc43143a15",
"assets/assets/photos/861da3feec2b.jpg": "a6ab57211b3c0906dc37bca778c9293e",
"assets/assets/photos/8786debf6ccf.jpg": "a4632b5ddc6e99d2f5d0293bfa9482b4",
"assets/assets/photos/8882764bada8.jpg": "835725c3981ff7e4fc9cacd86a421317",
"assets/assets/photos/8913b8084017.jpg": "91cd9820dc96e29884011c9e883bb893",
"assets/assets/photos/8de0d2bd6468.jpg": "aed705109af432b42f4eba59adbdf926",
"assets/assets/photos/91fc44bb6c48.jpg": "b0bc301744105ffb2ae646b2a03944af",
"assets/assets/photos/9377a20642ce.jpg": "c75ec904a5b4901fc7babae4c62099d1",
"assets/assets/photos/937c0d7b375c.jpg": "450b9dbb30614141d34e04cf1f0c0151",
"assets/assets/photos/958ccc236184.jpg": "f2ad9eeaece3d6be9d73590f63f74bae",
"assets/assets/photos/99fd360c82e7.jpg": "df68f1ff353ba1a5f6623b31c80e18bf",
"assets/assets/photos/9a3ad2d15539.jpg": "0288e246edd0fcf476474a2e28400777",
"assets/assets/photos/9a409bc44548.jpg": "7a7caef929d49336f99816994119cf04",
"assets/assets/photos/9b7d81ec197c.jpg": "37893845f9ba3a7ee129cf907ce5fa99",
"assets/assets/photos/9c355901cc2b.jpg": "9a710c2d3b30912f0e3f680e019009af",
"assets/assets/photos/9dd3ff180627.jpg": "ea46960a695ea8cb73b1aee60675def1",
"assets/assets/photos/9e99c248fe3a.jpg": "169842960607c5dc1ce1697f73a309db",
"assets/assets/photos/9ed3c179c209.jpg": "e7bb548ecc50c88ded4cac96676ce4d1",
"assets/assets/photos/a478f5cf22be.jpg": "b90051a701aa4b22e1d514891e9e8a2a",
"assets/assets/photos/a4b8754768a4.jpg": "cd3b35cacc8c941746fa7c7aa4a511cb",
"assets/assets/photos/a70e69d9b8ac.jpg": "ab3f14cd930959c662968cd7c707a969",
"assets/assets/photos/a7e18593f87d.jpg": "9443a15869626e64f76387e2c393e3c9",
"assets/assets/photos/a939ee5d26a2.jpg": "5b308f6405716a66cc0b2689e881445a",
"assets/assets/photos/a9922e79a04b.jpg": "c7a2a6505993f6ba55359c73b1c1f98b",
"assets/assets/photos/a9eba119f79d.jpg": "102127295dcb182032b42945ac1784a6",
"assets/assets/photos/aaccda97b9cc.jpg": "a7fb975f5ab3b00e1317f9f0a31db106",
"assets/assets/photos/abfa3a3ea61f.jpg": "038f182200989c470378e71720533f3f",
"assets/assets/photos/ac01d8b6ee7b.jpg": "f81b5013d8d8f17ccc547f57371c1997",
"assets/assets/photos/aff480909ba1.jpg": "ac603eb5f5e2d74d94a04725df44734c",
"assets/assets/photos/b0e6128ac16c.jpg": "b5464791e122b9a3ef9e35ba18c6fa7e",
"assets/assets/photos/b15c91d445cf.jpg": "f3ecdfe20dc42f021e3ca4bd3998c84e",
"assets/assets/photos/b3b5bbb7d7c2.jpg": "7a09933856ceaafc16ed3fb46fc457d5",
"assets/assets/photos/b5b366d8488b.jpg": "be20ecde8359071ddbe43ee629382e0a",
"assets/assets/photos/b82426a00a1b.jpg": "73fd892cb4afef81249e6ab662e6a757",
"assets/assets/photos/ba137a539709.jpg": "21a39df76f404a31cac53ec255242023",
"assets/assets/photos/bbd0813311bb.jpg": "efc6e2d66b2cb44b8b8b614c430d3872",
"assets/assets/photos/c001003aba99.jpg": "7c7c1af50511f684e780ee874de7e145",
"assets/assets/photos/c13f5494f485.jpg": "94d427644ba5bd7a582a22ce001108a7",
"assets/assets/photos/c18de5776fab.jpg": "4d864bfa8ccff9d240971af8aa8bf9aa",
"assets/assets/photos/c75d2b888cca.jpg": "27669c1f949501ba959ecdd4460df1d9",
"assets/assets/photos/c8a43c4f92fa.jpg": "dd4b9a46e4eb0ad3775c6bfd1bf0c9e5",
"assets/assets/photos/c8c08b2a8d75.jpg": "f96ddaa7e374f0569791c7372131ceff",
"assets/assets/photos/ca720e937c68.jpg": "a74c660be244384a4046b590b01c1d5a",
"assets/assets/photos/ca7cf26a803e.jpg": "7d146986f3428da863d5cd0167ffc337",
"assets/assets/photos/ccfa0f57a9f8.jpg": "f45e224e108a52649288790bab76abca",
"assets/assets/photos/cfb27cf2af4c.jpg": "647a3ba209d61f102302a76f009712a8",
"assets/assets/photos/CREDITS.md": "deba6848fd65195ff708858798677426",
"assets/assets/photos/d082b8b6842d.jpg": "c1416cfed7716d0dafd55ff3474f6f2b",
"assets/assets/photos/d08e69bac1eb.jpg": "72df2d85543283cab8bc7d384de63f99",
"assets/assets/photos/d0d369109b7c.jpg": "c5d3958ee54bd940d3801acabb11e38c",
"assets/assets/photos/d0e9ae2d8aca.jpg": "f8d2b854b593bf8cd351f6faa9f5ada1",
"assets/assets/photos/d25522ce960b.jpg": "6085305b48deac8a9448eba4da212535",
"assets/assets/photos/d2a80a408991.jpg": "5ab19e8b28bc23c9145e6f729567eb80",
"assets/assets/photos/d5b8999061e3.jpg": "cffb52fb6f70453b88a87b50a8c4a535",
"assets/assets/photos/d71f61f105a5.jpg": "c4df0368a1ba86b0e5b67b866593d14e",
"assets/assets/photos/d8e0bfb683f2.jpg": "13ab9e61814d64361c2d1a0aef5310b6",
"assets/assets/photos/d94be7631558.jpg": "8dedbc97b9ae2121ef24aebf28c14b19",
"assets/assets/photos/da788bbffb5e.jpg": "dc6aadc6f6419e9263b2d98f5fd0b855",
"assets/assets/photos/daf054838cf0.jpg": "4af244abde517adb9bf05fe4a9a727a0",
"assets/assets/photos/db7bf9f140a7.jpg": "0ed5a9a876832893fc3c6ef0598772c8",
"assets/assets/photos/dc3a8199c797.jpg": "65a28d596b96c2af7c5a9d9e9a453b2f",
"assets/assets/photos/ddb24784aa5d.jpg": "0dafea5205a085e0cc5544418572cc0f",
"assets/assets/photos/dfb3bacd4840.jpg": "9745d337449fca7884f3f26414076ed6",
"assets/assets/photos/e15fa6c02086.jpg": "e82f7b13a1156feb6bf6e9dd77c5cfa9",
"assets/assets/photos/e17097c12016.jpg": "01290c6e5377f49b7ebb688bfa3bb827",
"assets/assets/photos/e18ffe3c1684.jpg": "ad91f383e1bbff978f32235d3f7ec3d3",
"assets/assets/photos/e740dbbdf430.jpg": "fab22014e2413573bd54e55b747b7fb0",
"assets/assets/photos/e80fd8a27537.jpg": "f0216cd3145c72b54d3da1634bf2b612",
"assets/assets/photos/edde75ec4fb1.jpg": "b3664ede83feaaa8259c2d92eb0fd9be",
"assets/assets/photos/ef76c17ec475.jpg": "b2e4dcc04cdf582ca8458514b0a81f01",
"assets/assets/photos/f240ad7d8372.jpg": "94e68432817357eba4b1ae83e6856fa5",
"assets/assets/photos/f302ace256b7.jpg": "348aaf97e3aa153b49eed0f34c765281",
"assets/assets/photos/f550d2af6679.jpg": "848ea8547157ea2ad5f2f0cbc33fd0e5",
"assets/assets/photos/f68f227615f4.jpg": "b24cf196c646d786dc723842e22b0074",
"assets/assets/photos/f79cbf35b55f.jpg": "6e8bc28b3a6455ec8c6291cf6a5b6e3a",
"assets/assets/photos/f88ec4dae83c.jpg": "352441f03f03b36739866fe84f62ee34",
"assets/assets/photos/f90573c6a08e.jpg": "121257aa2056ad0726a5206e70c93eb2",
"assets/assets/photos/fb1339bea97c.jpg": "c6857587c1491afce74db02ee3be519e",
"assets/assets/photos/fe2d3a1653a1.jpg": "2cbfe92acd79de649ce92015f806b94e",
"assets/FontManifest.json": "67fe39d3eb328960667833618a9f25f2",
"assets/fonts/Comfortaa-700.ttf": "8c11e7ac62f7d2b6afed3f60011b0842",
"assets/fonts/Kurale-400.ttf": "3b7f7bdee96ec416e6d2af956d7bf36a",
"assets/fonts/MarckScript-400.ttf": "0d361ed4bda68872057aff032619fe4d",
"assets/fonts/MaterialIcons-Regular.otf": "26ce85402f87fcbae76f4cf430facf14",
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
"flutter_bootstrap.js": "fba7e19d6ac5001d686eed307b74e436",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac002d9156cf0ce44fb43be6b3703bc6",
"/": "ac002d9156cf0ce44fb43be6b3703bc6",
"main.dart.js": "f58b58ee506c9eb4279d785622c651c0",
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
