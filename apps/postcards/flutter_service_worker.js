'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a6e65f7ecb95fb3e27e5d6212973e00e",
"assets/AssetManifest.bin.json": "aaf507b293476a2b5fcb337bbccc3ccf",
"assets/AssetManifest.json": "676ad5948999bd01e7be28f2524b7ddd",
"assets/assets/photos/006ab6a9de08.jpg": "33ef92fc7d2a02cf998faf49ccd731d0",
"assets/assets/photos/01b7ae24f34f.jpg": "e288b7819fc5db54ac673a5d66fe22fd",
"assets/assets/photos/021f773f79c6.jpg": "8fdb11e8fe77f6499adf6edb036b4ec0",
"assets/assets/photos/02575173f0b6.jpg": "cc108395238eabfe3690a1d9b1420a39",
"assets/assets/photos/035379273092.jpg": "b6eb5dccd7e177a6bd539b58553604dc",
"assets/assets/photos/063ffd9c0640.jpg": "779877a44725d8becd68736b5bdbaf25",
"assets/assets/photos/065cca86e466.jpg": "7bca7cab2e3d73c71df1c973b99b21bb",
"assets/assets/photos/0801c01d49b7.jpg": "4e5137ffbc5d6f5842626660598bb7c0",
"assets/assets/photos/08606b9a36a6.jpg": "5027a2e3589f49ea3064d710e6ed3264",
"assets/assets/photos/08780dcc68db.jpg": "2ea0f079a29738c37c15713f28cf08b4",
"assets/assets/photos/0a830df89453.jpg": "600d7b6a03d53f5568f3ff9cef612517",
"assets/assets/photos/0d83f715e9aa.jpg": "e44fd41697b763ec9d4e5fafd02af765",
"assets/assets/photos/0e0fc643b07d.jpg": "530a298762bce2fc54392d13844407e0",
"assets/assets/photos/0fb2b32c09de.jpg": "fca50419d0c1bf19932bacdc338a6d7f",
"assets/assets/photos/110ac0a7e752.jpg": "0794f37c639a9e2ab7e9ad8f37b06336",
"assets/assets/photos/139dc61267ce.jpg": "cc13efe75c9482510ad8f03f0819ad4e",
"assets/assets/photos/17f1d2673319.jpg": "9babb152f40f7f7eea722457423df0e4",
"assets/assets/photos/18b6dab1a410.jpg": "39c2c581c5564b38a6a930b3e1d1067a",
"assets/assets/photos/19c3b9e59af9.jpg": "5082338e1b7767f1c1a29c41a67c9be4",
"assets/assets/photos/1cad381af9f8.jpg": "b8f446b8cc70b4a221a469009db8e285",
"assets/assets/photos/1f6d79b0b18a.jpg": "d48086b122741a85b4a6b7556f36b658",
"assets/assets/photos/210b93f977f0.jpg": "22d2384ca09bb618924f53c971668342",
"assets/assets/photos/211b2eeae685.jpg": "7b705fc91b4fcded5e79f8ce5ead653a",
"assets/assets/photos/22cbff339b7e.jpg": "7bf0cd6de8c17061a3ab31b58f644f40",
"assets/assets/photos/22e7290df224.jpg": "d4f71de3968b750ec53ab768129d007d",
"assets/assets/photos/2359eb93b719.jpg": "5dc7bbc493c1a6b309b2292bbedff30e",
"assets/assets/photos/23f335208142.jpg": "4e871a9facd77992cfc7c0370c3d8060",
"assets/assets/photos/2479b4f04288.jpg": "9e3c97f6930c6c80deb9ff9a5ec30edc",
"assets/assets/photos/25e6a9ecd0d5.jpg": "db5d740ed2025c63cddd3c390493e2db",
"assets/assets/photos/263ce91bdea7.jpg": "f5c4348840a9fd8eb1c96cb9535f9fb3",
"assets/assets/photos/27b176cb4de9.jpg": "2c79ad94e395d743e153c8f73958e22a",
"assets/assets/photos/29559bf0c667.jpg": "4932665ab5bde80147989b01d1482a9d",
"assets/assets/photos/2b35388b1e41.jpg": "a69c3e004a3f0af88c7dda009eb14e87",
"assets/assets/photos/2c6c8b9459c4.jpg": "00e6d73ceb53178e1694a72753701e88",
"assets/assets/photos/2e09c668fbbb.jpg": "787d370057f0be7d49abc724c86507a0",
"assets/assets/photos/2ebc5b8ef8f1.jpg": "51833b869347b410638c3a670259f323",
"assets/assets/photos/2fbf1c8f0262.jpg": "7d31043312c92246bf34061975809917",
"assets/assets/photos/314486cdfd92.jpg": "b2f375b3a15005db1d9f7ffb60610b9b",
"assets/assets/photos/3154dac60123.jpg": "47c6cd1c9a03bc5d0aedc3a93327e198",
"assets/assets/photos/31749546ab65.jpg": "04dce68032ff2f799b4ce268c3b936e2",
"assets/assets/photos/321df32185a5.jpg": "a1fc1b61162d1aeac0f330aba8e4880b",
"assets/assets/photos/3719551c3498.jpg": "53ed083b17cece56449a99202e51656e",
"assets/assets/photos/3a9532d9a7bd.jpg": "58b8bb3370eaea7b638cd4e7efcfcca9",
"assets/assets/photos/3adfacca014d.jpg": "67b23b4347f60ff27bc3400e7cbbf388",
"assets/assets/photos/3bc1b2d0c481.jpg": "3b6c252dae47ae650dfad2136da0f454",
"assets/assets/photos/3ede4be4ceaa.jpg": "b4c81c40913baec0980c4b15693e175a",
"assets/assets/photos/404656ff380e.jpg": "b1fb2c42fd935f59a88e8c308df3f6ff",
"assets/assets/photos/419538c2edb3.jpg": "e7243e111d9e866cb01d3f0a7a67720e",
"assets/assets/photos/42bc59325cf3.jpg": "82935810a893660accdd5317a9570c81",
"assets/assets/photos/4895e46a72e1.jpg": "78dfcdd502911717b1a41285cabc986c",
"assets/assets/photos/4d5ffa210f0b.jpg": "7c66573f1f017342fcef841586bccffa",
"assets/assets/photos/4eb6154648be.jpg": "f1182b0ce059025f4307d7db6ee69202",
"assets/assets/photos/546a27162abd.jpg": "3bab3bba85e03bc2b9fa59e77ea7dbdd",
"assets/assets/photos/55952f7a247e.jpg": "c23880c8826c7f4602d01db81a274d81",
"assets/assets/photos/55d25e2ef984.jpg": "6f7e1ddb1d674915be3c0f244414f197",
"assets/assets/photos/5725a1683033.jpg": "9834a1eca0b33b054dc6da37f2d723da",
"assets/assets/photos/5aa3de618be8.jpg": "b9085b5e33f7d9f28cba811664c0ee2f",
"assets/assets/photos/5add50ff3c28.jpg": "195a33e986bf2eb20aa0c49fac4c30be",
"assets/assets/photos/5af62e5369ef.jpg": "cc299c99f18f33bc6e434fc26ceeb184",
"assets/assets/photos/5af70f88319d.jpg": "3b94ec77ec6cdb630771d76de1013c22",
"assets/assets/photos/5c251243b4f4.jpg": "8e86b1d9279ac3fdac18adf69cbda8fa",
"assets/assets/photos/5d9630b1414c.jpg": "426fd10b4af85e82f764deadfbfd5668",
"assets/assets/photos/5dee40598454.jpg": "f9f11d0923d53e11e2998ab371302ce7",
"assets/assets/photos/5dfae5756490.jpg": "70f5c2a578c2c8d4a0ef7fd9bb5d49af",
"assets/assets/photos/5f34a6ebdb86.jpg": "ab8cc6d6af092a9c847b9259f554dc45",
"assets/assets/photos/61d6d9c412d7.jpg": "f103bf7f2a5d8be751b7f2367bbee1e4",
"assets/assets/photos/6911d6d9cb6e.jpg": "57aff63f94359f3bb3086a5eb0714008",
"assets/assets/photos/6c280ccf5233.jpg": "39da8dc0884ea93287cb3a974658a067",
"assets/assets/photos/6d271bf471a6.jpg": "8c8dce7027324c5a5a339ba5875f7a70",
"assets/assets/photos/6e8efba2dab5.jpg": "f0b7f20c88b608120517d65be1083911",
"assets/assets/photos/6ec4f54ece05.jpg": "c01b42df6c4bee4e3dbf2cffa08137e2",
"assets/assets/photos/6f54af06573a.jpg": "ae08c3cf71f98027e5672762a58cd7ed",
"assets/assets/photos/6fd4c596e1f4.jpg": "af82b4ae00e58105df94d4dba1b78a61",
"assets/assets/photos/71cdadf9e8af.jpg": "8f125a2ee0639faf5c11cf79c174ed94",
"assets/assets/photos/71da74edb246.jpg": "dbfd4c71658882827e2f870e5913715a",
"assets/assets/photos/71f962f433b9.jpg": "8556299e6e6db0c4115c4d4414c33331",
"assets/assets/photos/725b3e0d2eaa.jpg": "ef25679250fa77eb8907a01a17967a9a",
"assets/assets/photos/7445c14c17c4.jpg": "a6f598ce0a0a4dbe65a967614f713f0c",
"assets/assets/photos/74650e79350c.jpg": "351c7554de9d963fade3c13601143934",
"assets/assets/photos/75ecb51b1765.jpg": "e12e2c99d6d201f664dc7e0264042551",
"assets/assets/photos/76b9ac246db0.jpg": "8aff47fde44318825595f0fb1e748b0a",
"assets/assets/photos/79778bad2baa.jpg": "a7419e60155e4ce7861af8481ccc014a",
"assets/assets/photos/7a76c5302d76.jpg": "e2728551223fc0e5fdd761959ff43a80",
"assets/assets/photos/7c9e9de543ec.jpg": "0e1937e2ee86eebb1943e873bc39ee51",
"assets/assets/photos/7ca203c62581.jpg": "aebb2057cd52f82e766303b19ce9ca20",
"assets/assets/photos/7d45e6b7018b.jpg": "390e4674b649e08fb927156269e6b1aa",
"assets/assets/photos/7da42fab0e56.jpg": "aa4170651161ea44c3ec3aeae64c0784",
"assets/assets/photos/7e42f9ab1efe.jpg": "08f6c5d8a73e29d63f3f727459982064",
"assets/assets/photos/7f24ad17c74d.jpg": "97bcf8815c1b9ff63dd8b918d0e0ef93",
"assets/assets/photos/81509db0b320.jpg": "f15f91311aadfbc28b9bed4cc1d48b5d",
"assets/assets/photos/861da3feec2b.jpg": "a6ab57211b3c0906dc37bca778c9293e",
"assets/assets/photos/872acb145bf7.jpg": "654e59bf65c2f4addd5da7ae8ddf1f11",
"assets/assets/photos/8786debf6ccf.jpg": "a4632b5ddc6e99d2f5d0293bfa9482b4",
"assets/assets/photos/8882764bada8.jpg": "835725c3981ff7e4fc9cacd86a421317",
"assets/assets/photos/8cdb055bd872.jpg": "6c26e1572094a7c92e8fc254b18dd4fe",
"assets/assets/photos/8ceb24b0033b.jpg": "368bb370c590472ae35b54cd33499deb",
"assets/assets/photos/8dfae5272f30.jpg": "73c441dbbc088e7c14b1f0fd2f230870",
"assets/assets/photos/8e7dfb1d15a6.jpg": "5c6add830b96f742c74cba22186e97db",
"assets/assets/photos/92823effe031.jpg": "19719ace91d7e3ae9d84f4f70ce47469",
"assets/assets/photos/9cb410d23a6d.jpg": "8fe1b51e08730aba8e81e3e9c6c981e7",
"assets/assets/photos/9e5240efcab2.jpg": "10240532ea4dae2b8962fe454b6a512c",
"assets/assets/photos/9ed3c179c209.jpg": "e7bb548ecc50c88ded4cac96676ce4d1",
"assets/assets/photos/a0e5823c2c81.jpg": "888de93ea9f9e775ea09e6d98aebbb04",
"assets/assets/photos/a4b8754768a4.jpg": "cd3b35cacc8c941746fa7c7aa4a511cb",
"assets/assets/photos/a70e69d9b8ac.jpg": "ab3f14cd930959c662968cd7c707a969",
"assets/assets/photos/a82af5e903b0.jpg": "fc3186d9f54f75284aa889b196fe93ac",
"assets/assets/photos/aaccda97b9cc.jpg": "a7fb975f5ab3b00e1317f9f0a31db106",
"assets/assets/photos/af0720fa15ca.jpg": "30531a7887d36a79d1d9a5d559eaaec4",
"assets/assets/photos/aff480909ba1.jpg": "ac603eb5f5e2d74d94a04725df44734c",
"assets/assets/photos/b0e6128ac16c.jpg": "b5464791e122b9a3ef9e35ba18c6fa7e",
"assets/assets/photos/b15c91d445cf.jpg": "f3ecdfe20dc42f021e3ca4bd3998c84e",
"assets/assets/photos/b278572afec7.jpg": "d32139ac6d6ef76390af07d5bc2d6d07",
"assets/assets/photos/b5e690ab8f3b.jpg": "be74e924c04752bbe6cb97f9a4900913",
"assets/assets/photos/b60ffc1632cb.jpg": "958ec1739ed772771fb89a7c9bd0cdc8",
"assets/assets/photos/b7aa502c93a5.jpg": "6e1c93de1820a175e89d3d17bcbe1ca7",
"assets/assets/photos/b880f87f2811.jpg": "4f50659a00267376a83f5c6dc8380263",
"assets/assets/photos/bbd0813311bb.jpg": "efc6e2d66b2cb44b8b8b614c430d3872",
"assets/assets/photos/bc4027a5b72c.jpg": "59c35465a2e1f9f1807fa7a888a24084",
"assets/assets/photos/bd74b715a8e9.jpg": "03b71fe2a43e68609a53eaddd4803bfc",
"assets/assets/photos/bf5db9fa8fea.jpg": "9f612b420efdd4b8e9c0e41aa94f79fc",
"assets/assets/photos/c001003aba99.jpg": "7c7c1af50511f684e780ee874de7e145",
"assets/assets/photos/c06aa5e42d7c.jpg": "15b229764803ad815e87c6af7bb9916a",
"assets/assets/photos/c13f5494f485.jpg": "94d427644ba5bd7a582a22ce001108a7",
"assets/assets/photos/c18de5776fab.jpg": "4d864bfa8ccff9d240971af8aa8bf9aa",
"assets/assets/photos/c6dca44e7c59.jpg": "511a1eadc20fa3f3048d554b6f23bbd6",
"assets/assets/photos/c8a43c4f92fa.jpg": "dd4b9a46e4eb0ad3775c6bfd1bf0c9e5",
"assets/assets/photos/c8c08b2a8d75.jpg": "f96ddaa7e374f0569791c7372131ceff",
"assets/assets/photos/c9026f1da73f.jpg": "82fea03a20235dc79362abd3625cb247",
"assets/assets/photos/c915de1c7014.jpg": "a547c23173af5a186a8c1d96e31b3475",
"assets/assets/photos/cfb27cf2af4c.jpg": "647a3ba209d61f102302a76f009712a8",
"assets/assets/photos/CREDITS.md": "4fba580312fec20410f272c545194389",
"assets/assets/photos/d082b8b6842d.jpg": "c1416cfed7716d0dafd55ff3474f6f2b",
"assets/assets/photos/d0e9ae2d8aca.jpg": "f8d2b854b593bf8cd351f6faa9f5ada1",
"assets/assets/photos/d364802c417b.jpg": "497809c085ef06ed4c00bd7ba420a5e3",
"assets/assets/photos/d71f61f105a5.jpg": "c4df0368a1ba86b0e5b67b866593d14e",
"assets/assets/photos/da8e8cb804df.jpg": "98b8dc8eebcd22386054ed2c6e9a7a53",
"assets/assets/photos/db7bf9f140a7.jpg": "0ed5a9a876832893fc3c6ef0598772c8",
"assets/assets/photos/dc3a8199c797.jpg": "65a28d596b96c2af7c5a9d9e9a453b2f",
"assets/assets/photos/dd6768223809.jpg": "87d811c31e4b76083741ae3bb879dcf5",
"assets/assets/photos/ddb24784aa5d.jpg": "0dafea5205a085e0cc5544418572cc0f",
"assets/assets/photos/de3709573bd6.jpg": "a31875124a5fa430b0a88c6e35acd44b",
"assets/assets/photos/de6a0ab9cab4.jpg": "c05ba544cba84bc03a6c38c7ff4515d9",
"assets/assets/photos/dfd2194a4e67.jpg": "66a4d61688c901d0f0655e0551bb0199",
"assets/assets/photos/e18ffe3c1684.jpg": "ad91f383e1bbff978f32235d3f7ec3d3",
"assets/assets/photos/e47ae1064e50.jpg": "48c069b45cbc077b5f6c6702af913cc7",
"assets/assets/photos/e4b75e7e95d2.jpg": "898f84fa3542cd3a01375e7296b459c2",
"assets/assets/photos/e4f2df163004.jpg": "c3ad14ea1268ad6a46af4efc709828e0",
"assets/assets/photos/e7f3a8a8840f.jpg": "9fbc84b634210d60cbd6e02de8b509d9",
"assets/assets/photos/e8418c71cc64.jpg": "baa60e6d09e178c7f4781beaaaff4bbf",
"assets/assets/photos/e8881620bbda.jpg": "f47b541f526ffb323a9841796d9a88eb",
"assets/assets/photos/eaade9828b41.jpg": "41fccfdd5c1096104349dc18de15095f",
"assets/assets/photos/ebba5cb4a089.jpg": "768047a17c6ff7dadf0e4cc9cd52b4b1",
"assets/assets/photos/ec7045a07ee6.jpg": "0dca4c1a63033d6af991e7a7a30fc2cc",
"assets/assets/photos/edde75ec4fb1.jpg": "b3664ede83feaaa8259c2d92eb0fd9be",
"assets/assets/photos/ef76c17ec475.jpg": "b2e4dcc04cdf582ca8458514b0a81f01",
"assets/assets/photos/ef90bf667d54.jpg": "44ccc9413757afc0841a5d4dbcd47588",
"assets/assets/photos/f1d8b4f087ae.jpg": "9f3f98213779dd143416adb770deed9c",
"assets/assets/photos/f2cfb3887373.jpg": "079a3de25a8e290b91cf5cecc300722d",
"assets/assets/photos/f3bc3ca6417e.jpg": "8f4d78e422bc72e6bc793867937ddd15",
"assets/assets/photos/f550d2af6679.jpg": "848ea8547157ea2ad5f2f0cbc33fd0e5",
"assets/assets/photos/f68f227615f4.jpg": "b24cf196c646d786dc723842e22b0074",
"assets/assets/photos/f6adf89fc661.jpg": "b3620bfbf87b74dcbe56a9691d77bbca",
"assets/assets/photos/f6f01bd41711.jpg": "cadb8168c6ea13d8e35d9d05446a943c",
"assets/assets/photos/f7179693c9ff.jpg": "2bc39bc15bbed49301e9ab80ef138c61",
"assets/assets/photos/faaba70c64fd.jpg": "184181d1cc51aaaf47b61861260bf8fa",
"assets/assets/photos/fb903396e6e0.jpg": "4a64473db8b253bfccdfae54b6217ad7",
"assets/assets/photos/fc8cf4ebe060.jpg": "d643cac2dd1d3f7f8b8f30fdb8b4f405",
"assets/assets/photos/fca0b9eae8cd.jpg": "91081890cfc555adf3502d734980af6d",
"assets/assets/photos/fd383e2a4c1f.jpg": "7dd92db46ce66160c7e5d4b7c5c63acd",
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
"flutter_bootstrap.js": "3d56d3ef797ab69e42206a2e6f1a6236",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac002d9156cf0ce44fb43be6b3703bc6",
"/": "ac002d9156cf0ce44fb43be6b3703bc6",
"main.dart.js": "af0f73e1d84c7bbd7067dd1671a898ef",
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
