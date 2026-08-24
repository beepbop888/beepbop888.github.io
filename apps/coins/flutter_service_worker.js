'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2e1f618456536323468f6f21c429b516",
"assets/AssetManifest.bin.json": "e4264427e0286864d888159e5ba463fe",
"assets/AssetManifest.json": "d3d7e6349b219945a621667623f60f16",
"assets/assets/coins/5015-0001.jpg": "e63f2af4207f2becda012b676e17ba6c",
"assets/assets/coins/5015-0002.jpg": "d89620fdde40691fbd43c58819e1a56c",
"assets/assets/coins/5015-0003.jpg": "8bf95a5d34f1a5611fe6974c72b71fa6",
"assets/assets/coins/5015-0004.jpg": "e0dab5c1c22f0c2005af40ee759e9a7b",
"assets/assets/coins/5015-0005.jpg": "8739a72e777c58446cc86028b44af45e",
"assets/assets/coins/5015-0006.jpg": "5b955c5385a63c028e4a8b831ba1d0db",
"assets/assets/coins/5015-0007.jpg": "7185357021f5776302a4fee2c3a1413c",
"assets/assets/coins/5015-0008.jpg": "ba5d452b476280d7cd6d4bf879421230",
"assets/assets/coins/5015-0009.jpg": "70e18075a1ea8ad9e4950ba804beb3a7",
"assets/assets/coins/5015-0010.jpg": "23413460796908796033baeb1d29c78a",
"assets/assets/coins/5015-0011.jpg": "bfb656d958fbe4f76652281eb6e5094e",
"assets/assets/coins/5015-0012.jpg": "1e8d22cc9670116599badb70cf7cd39a",
"assets/assets/coins/5015-0013.jpg": "fe77c12c46299d46b716d1b6c783aaeb",
"assets/assets/coins/5015-0014.jpg": "652f9cff71eeb5ffe6e4a311096fcd16",
"assets/assets/coins/5015-0015.jpg": "c5939e4488d9f386fc1e3d89c0615425",
"assets/assets/coins/5015-0016.jpg": "298bd86b06da966536abd6310ba292b3",
"assets/assets/coins/5015-0017.jpg": "29a9af419424d50e3c2ccfe7fe3eb124",
"assets/assets/coins/5015-0018.jpg": "d9ea0fbecaebcc8f98c4508072b6a83b",
"assets/assets/coins/5015-0019.jpg": "1ad5207b21f8f1d65a2e5b1775ad7044",
"assets/assets/coins/5015-0020.jpg": "0f6e52d86de0917f3f8b5cf1cf8f8f7a",
"assets/assets/coins/5015-0021.jpg": "e3e28de391a14c56134f535caf0ca20f",
"assets/assets/coins/5015-0022.jpg": "7199fe9faf7e2d744c42ca18c4dfca13",
"assets/assets/coins/5015-0023.jpg": "1a3f38369c6c3fd6c1fbeb4b9989043a",
"assets/assets/coins/5015-0024.jpg": "24de21673d0b24bbd7a057168f49835e",
"assets/assets/coins/5015-0025.jpg": "02c80b0c2255524d5c220c5eb7be7794",
"assets/assets/coins/5015-0026.jpg": "982b0178b5e6738a1bbf83bf1f99e548",
"assets/assets/coins/5015-0027.jpg": "f0e55f6473812576680ec33e69362766",
"assets/assets/coins/5015-0028.jpg": "93177c89e2ad758c38a6bb537e8dcd45",
"assets/assets/coins/5015-0029.jpg": "ff45385b74fc057dac5b8e3c36bc8129",
"assets/assets/coins/5015-0030.jpg": "f128d7e3f938b344fe4a9fb52e6342f7",
"assets/assets/coins/5015-0031.jpg": "83578017fb2fc277acb491078b6cdf89",
"assets/assets/coins/5015-0032.jpg": "9b3d9db071a5e2f57835eae392798b26",
"assets/assets/coins/5015-0033.jpg": "22975bd3cfdadbb7622d6bab7f71eb9a",
"assets/assets/coins/5015-0034.jpg": "a9cd30d521985ffc17e96df36fdb3a2f",
"assets/assets/coins/5015-0035.jpg": "24c7e7a8bbb8c7a1a2f71701778040a2",
"assets/assets/coins/5015-0036.jpg": "186abc7c1536684edac17707c7458262",
"assets/assets/coins/5015-0037.jpg": "6f4fe6d9470af5152252a0c4707b4d4c",
"assets/assets/coins/5015-0038.jpg": "d1f28dc39f0a454479fe02c32a5ee111",
"assets/assets/coins/5015-0039.jpg": "cbde4a428f1c0e895f8c561f3d19fac1",
"assets/assets/coins/5015-0040.jpg": "ab85caf1e737229b020450d6af6b45a7",
"assets/assets/coins/5015-0041.jpg": "fcf4441f3b922596a8e38db5652aa370",
"assets/assets/coins/5015-0042.jpg": "05c5c3a807857192a9474eb05d13b9c9",
"assets/assets/coins/5015-0043.jpg": "26b0921a605d90cf0d5418559ad81a77",
"assets/assets/coins/5015-0044.jpg": "539260c0bc90e0bdd6c23cea7a062c2c",
"assets/assets/coins/5015-0045.jpg": "fd13622df307f2d13928264b7039bc9a",
"assets/assets/coins/5015-0046.jpg": "913690141001332a9851e64801508c88",
"assets/assets/coins/5015-0047.jpg": "0f77ffc88c0c02d79103907e1db6ecfb",
"assets/assets/coins/5015-0048.jpg": "e2e87a7c33b26b393e7a8ff0475e29e5",
"assets/assets/coins/5015-0049.jpg": "ec4dc507c7ebd175f265d3745e212a8d",
"assets/assets/coins/5015-0050.jpg": "42f27bb99c77f6a4387437bdf860fd42",
"assets/assets/coins/5015-0051.jpg": "da4165ff87995f987aab7c1cce03880f",
"assets/assets/coins/5015-0052.jpg": "aa15ec5410af767f1f17e481847b451d",
"assets/assets/coins/5015-0053.jpg": "f39dc69b44338dad1708bbf46cda29dd",
"assets/assets/coins/5015-0054.jpg": "5d7e90b5d660a157a3fbefdbfa4f1b18",
"assets/assets/coins/5015-0055.jpg": "89859b883f78256022ad24066e0eaf67",
"assets/assets/coins/5015-0056.jpg": "9029de3d71a2bce63638769cbf0e966f",
"assets/assets/coins/5015-0059.jpg": "2e4b7a9250a96862411bc7a9a6e8af25",
"assets/assets/coins/5015-0060.jpg": "8b16331d56d65290e9116a984aad215b",
"assets/assets/coins/5015-0061.jpg": "be1f99e1d58dad44537a0a7a29bd9be6",
"assets/assets/coins/5015-0062.jpg": "2815b0774941cbcb7ab7dadaa5aff915",
"assets/assets/coins/5015-0063.jpg": "3a65e491c82590640df7814f9b0f0212",
"assets/assets/coins/5015-0064.jpg": "e7c9ed3a06cf650c7d95d8948fb69e95",
"assets/assets/coins/5015-0065.jpg": "a796c207a7a75b6427f78bba52272aaf",
"assets/assets/coins/5015-0066.jpg": "4d8cb46ff72f330c35c858bd058e764d",
"assets/assets/coins/5015-0067.jpg": "ba8d039b49af0980820264d8e72ce3d2",
"assets/assets/coins/5015-0068.jpg": "fabdf85572d6e27924ea217c48eee2f9",
"assets/assets/coins/5015-0069.jpg": "5211420deb8811e971727c4b6c7c344a",
"assets/assets/coins/5015-0070.jpg": "e70546d754c39d2aabb10316338a26c3",
"assets/assets/coins/5015-0071.jpg": "2966134719c8272c04c3871301172f10",
"assets/assets/coins/5015-0072.jpg": "539ea829ced2d309b8fae60569b2cdbc",
"assets/assets/coins/5015-0073.jpg": "78b8eec26ae1897e40c19a17e78e97b8",
"assets/assets/coins/5015-0074.jpg": "c69576bcc64fac41232d017f4bf334b1",
"assets/assets/coins/5015-0075.jpg": "89834d36cceb334075878ccdd102b8b8",
"assets/assets/coins/5015-0076.jpg": "746ab1bfc2c0707721638bfa5e44ca63",
"assets/assets/coins/5015-0077.jpg": "5bce33aa1bb7a95c59dbe986fc09772c",
"assets/assets/coins/5015-0078.jpg": "44207b68a7a4d95ababf3427408feb3f",
"assets/assets/coins/5015-0079.jpg": "3d738833175d7d20f04ee645b0694b3a",
"assets/assets/coins/5015-0080.jpg": "4cd6515539acc281fcda450c9bdeaf42",
"assets/assets/coins/5015-0081.jpg": "72c062ab4b62f7fd5e0a24b8acdd7c5b",
"assets/assets/coins/5015-0082.jpg": "d8b13d10cae502b429f227e73d3231ab",
"assets/assets/coins/5015-0083.jpg": "fa617a1e5529375c82d6c5affb4c1dd2",
"assets/assets/coins/5514-0068.jpg": "0bae125dccdef8c1474bd6b59b2864b6",
"assets/assets/coins/5514-0069.jpg": "9f55d515da2e4f0cf483871e7e505e8a",
"assets/assets/coins/5514-0070.jpg": "5fc9405254cd95b7f5556350812c8d1d",
"assets/assets/coins/5514-0071.jpg": "7c9c3f544061468f7482e39ec7a04a83",
"assets/assets/coins/5514-0072.jpg": "fd2f4cda819a916be344fd549a3ca516",
"assets/assets/coins/5514-0073.jpg": "4a8bb4beb2656272b6eb7e374cc0e79e",
"assets/assets/coins/5514-0074.jpg": "265b88262ba25cd8ca701debe904f151",
"assets/assets/coins/5514-0075.jpg": "1241c90772aee9145fe053bef35f0c21",
"assets/assets/coins/5514-0076.jpg": "1bc11e6542e14244be04269d164c3808",
"assets/assets/coins/5514-0077.jpg": "c1a2180ff0f7c4887e3b7ea7061ff02f",
"assets/assets/coins/5514-0078.jpg": "bf00395c447ca66592163cdc13f285ef",
"assets/assets/coins/5514-0079.jpg": "ecaca291bb0d3f5cad5f8f6b380bc0ea",
"assets/assets/coins/5514-0080.jpg": "2ba8b294f8ce4c64b51691fcaddaca3d",
"assets/assets/coins/5514-0081.jpg": "47bb1ce7df5b99255a8e7f57f85fe8e1",
"assets/assets/coins/5514-0082.jpg": "b4e1e8959af05c9be44fd115f0023ae3",
"assets/assets/coins/5514-0083.jpg": "92587adabece3e5811cc54559dd298d9",
"assets/assets/coins/5514-0084.jpg": "527469676703bb84351f22ae6393bb40",
"assets/assets/coins/5514-0085.jpg": "1269ad042f4316113257fbfddee13838",
"assets/assets/coins/5514-0086.jpg": "e73b97fcf13f3dda37e5cef4bb172c7a",
"assets/assets/coins/5514-0087.jpg": "06c737b760c8885ea570b6884162af13",
"assets/assets/coins/5514-0088.jpg": "ce3fd977120c348cc85352a8195342dc",
"assets/assets/coins/5514-0089.jpg": "c3c59847684abc5d461674150b1c71f5",
"assets/assets/coins/5514-0090.jpg": "ddff88a33e70c05fbc2b9a2013772c44",
"assets/assets/coins/5514-0091.jpg": "0bb72f1818717100312061c7d0d1572a",
"assets/assets/coins/5514-0092.jpg": "b8e383aeb061884968d18284d7bf5619",
"assets/assets/coins/5514-0093.jpg": "d10675f4ecc5b218359300b2af18326a",
"assets/assets/coins/5514-0094.jpg": "ba5fffba75496dff82257f72bbcb47b5",
"assets/assets/coins/5514-0095.jpg": "d5ed2722473c8fd7ef006ce5e3f1df8a",
"assets/assets/coins/5514-0096.jpg": "c28f5e27a99e3237f1155d63d426367a",
"assets/assets/coins/5514-0097.jpg": "6b334658f5a17563455872b84b06593d",
"assets/assets/coins/5714-0001.jpg": "7d3a5d25d1a0e082a6e31b3c67de36cb",
"assets/assets/coins/5714-0002.jpg": "7cd2ad94a65660e8b56ad0472a0cf092",
"assets/assets/coins/5714-0003.jpg": "8e6d827fa05a020b914e023eb29445d0",
"assets/assets/coins/5714-0004.jpg": "45105d28fcd0441bd3f13eea2ae2f0a9",
"assets/assets/coins/5714-0005.jpg": "5ac85deda2c4cab2480ccc76e07993a8",
"assets/assets/coins/5714-0006.jpg": "66bdff6cb7f8ee815ace62595f056d38",
"assets/assets/coins/5714-0007.jpg": "f14503ea2b363c02532f675ddbb06e21",
"assets/assets/coins/5714-0008.jpg": "c8dbaa6a6bb4d862d9bb2c11647d62b7",
"assets/assets/coins/5714-0009.jpg": "104a19d44ddd3482f86da77ddb6270ee",
"assets/assets/coins/5714-0010.jpg": "dfdca48e47e67dc8b9f15b32a5d8b978",
"assets/assets/coins/5714-0011.jpg": "6e7f90a2309e93b0b9883fd7463e6a50",
"assets/assets/coins/5714-0012.jpg": "1b5b4874b4f1f4079d6e829cbd992d42",
"assets/assets/coins/5714-0013.jpg": "acba8b11ce3241f0eeaa8b3a4eb17800",
"assets/assets/coins/5714-0014.jpg": "37a96cc4b05cec3d12a86cb97297fc31",
"assets/assets/coins/5714-0015.jpg": "fdf17558b1a02ff9559e3b1864a22d71",
"assets/assets/coins/5714-0016.jpg": "a9e6ff0da5616b00a32e367d075e745d",
"assets/assets/coins/5714-0017.jpg": "eba606cf774263702149ea055db036dc",
"assets/assets/coins/5714-0018.jpg": "c914c0d65400c78f794a087d27b387fe",
"assets/assets/coins/5714-0019.jpg": "60a4491d9579bd621a5d0977a9942694",
"assets/assets/coins/5714-0020.jpg": "6ddc42d6830d133e0eb138c7f99d8856",
"assets/assets/coins/5714-0021.jpg": "69dde9021ba795594ac1db6c125adb74",
"assets/assets/coins/5714-0022.jpg": "8c0119395f6b5e047f8010cd23d69252",
"assets/assets/coins/5714-0023.jpg": "6e1db20d6224d740b2d8c7dd9abf6a58",
"assets/assets/coins/5714-0024.jpg": "c6425ed8e8d6af60f336afdc9e8fa4e3",
"assets/assets/coins/5714-0025.jpg": "5af499057acf2c81ddad019c57e5b2c5",
"assets/assets/coins/5714-0026.jpg": "0fd70453e552efa075d3f1d74bc7acfc",
"assets/assets/coins/5714-0027.jpg": "5bcfc8af1278e180003e25a306b768e9",
"assets/assets/coins/5714-0028.jpg": "742afa6787c5e81e3249a9b13497f823",
"assets/assets/coins/5714-0029.jpg": "37e42bfbd30a7982ca9bd602da3e88be",
"assets/assets/coins/5714-0030.jpg": "7448a60b087f2ffcb04430ab3576338a",
"assets/assets/coins/5714-0031.jpg": "42c7bb387826491bbfcef52dffeabca3",
"assets/assets/coins/5714-0032.jpg": "f3f40fd313e8c50968dd25e915415bec",
"assets/assets/coins/5714-0033.jpg": "02b3742087f9a736354064e53e8a0ae1",
"assets/assets/coins/5714-0034.jpg": "54b9329ade49223a18c3826149ef4cc6",
"assets/assets/coins/5714-0035.jpg": "2379e99e688e2ba79438bf9d3b3cc991",
"assets/assets/coins/5714-0036.jpg": "27a7d4c9ded6ae771682bc99df35fdf8",
"assets/assets/coins/5714-0037.jpg": "5fdc1bc861c23b14118af728d7422760",
"assets/assets/coins/5714-0038.jpg": "30cdee4b65ac4818ff6839d1d3e73900",
"assets/assets/coins/5714-0039.jpg": "c6c1505f58a87b6386a132d803a2f824",
"assets/assets/coins/5714-0040.jpg": "52563db36ec5259848851a3567e0ed0c",
"assets/assets/coins/5714-0041.jpg": "c76b7cbd17205cbfafea5d85407c7fc5",
"assets/assets/coins/5714-0042.jpg": "164714f515a926499af7803f6ccf73f4",
"assets/assets/coins/5714-0043.jpg": "15c6c9ade5da95e7a3e10a6dcf248ce4",
"assets/assets/coins/5714-0044.jpg": "353a8cac1fa6d279176ebfe407b38380",
"assets/assets/coins/5714-0045.jpg": "0675f949e219126fc23658a6e90bc12e",
"assets/assets/coins/5714-0046.jpg": "4357bedaaccb26fa7d19392ed3074724",
"assets/assets/coins/5714-0047.jpg": "903779a54e2a176725d8a6907b7c94f0",
"assets/assets/coins/5714-0048.jpg": "10b35cf914de9397b6dc345b95ae7b42",
"assets/assets/coins/5714-0049.jpg": "d6ab6b8328c7f558f771a43313c1da7c",
"assets/assets/coins/5714-0050.jpg": "ecd6e77b382b30d8b532f06bdcd837d7",
"assets/assets/coins/5714-0051.jpg": "79779f00af33125bfbbdb76f7b18fbcd",
"assets/assets/coins/5714-0052.jpg": "7f82c886c8786ed0ca6de10937d21ef4",
"assets/assets/coins/5714-0053.jpg": "b8f6a5d8d7a428e692449325e7d0739c",
"assets/assets/coins/5714-0054.jpg": "8f999dea2412742e44a5dcd5860d7f5a",
"assets/assets/coins/5714-0055.jpg": "6e185d609552c948226857903c112ba5",
"assets/assets/coins/5714-0056.jpg": "9e64c1c354d268e1b9b119c3cf6168ae",
"assets/assets/coins/5714-0057.jpg": "e815c6b20fd0ff2dd4d86db51854d3b3",
"assets/assets/coins/5714-0058.jpg": "bb1f197a36c74a7b3f90f01dd682b9f9",
"assets/assets/coins/5714-0059.jpg": "e2bd6547ff13b987a087cafc1f51e7f9",
"assets/assets/coins/5714-0060.jpg": "742eacb4084a93c3541a0b6666eebfb8",
"assets/assets/coins/5714-0061.jpg": "3332eb2cfa3baa4b36790ce714872a96",
"assets/assets/coins/5714-0062.jpg": "d6d9f98cf720461e8cb184dd8a90a8bd",
"assets/assets/coins/5714-0063.jpg": "09aab402d71ffd1d624b399ec050d34a",
"assets/assets/coins/5714-0064.jpg": "762d4ae4a370f17929ceaf9b0b5f2c73",
"assets/assets/coins/5714-0065.jpg": "7c1e88a1fef72f679265c82bd5acc809",
"assets/assets/coins/5714-0066.jpg": "e24ba9608200378d83741d1cefba2735",
"assets/assets/coins/5714-0067.jpg": "89653558c8c5cae70810e1066d0e80b2",
"assets/assets/coins/5714-0068.jpg": "9fe916d29b7c3f8ec9d106cb018a373b",
"assets/assets/coins/5714-0069.jpg": "c228c2a232ee4bf184fa7bc6f67bfd5b",
"assets/assets/coins/5714-0070.jpg": "14841066a41aeb73584de93e5e0ff03a",
"assets/assets/coins/5714-0071.jpg": "ebb040a1ecc3a26c29458f452460bd25",
"assets/assets/coins/5714-0072.jpg": "9a7298e8de0d6767847151fb235d3b42",
"assets/assets/coins/5714-0073.jpg": "c76f73377b670f85275484478f6d77b6",
"assets/assets/coins/5714-0074.jpg": "04af58f9bf345ae83a185fccf6672c5e",
"assets/assets/coins/5714-0076.jpg": "108d3cff603bdd3c15286b449adce44d",
"assets/assets/coins/5714-0077.jpg": "f23467df4add6b5ab15d46732625a9f4",
"assets/assets/coins/5714-0078.jpg": "733c4d687d16fc29329f73e50189bc2a",
"assets/assets/coins/5714-0079.jpg": "4b91e2f3c9e2564181174c4d0a4bb8d4",
"assets/assets/coins/5714-0080.jpg": "7ffb704af7eb6d4f151f4ade80f64a95",
"assets/assets/coins/5714-0081.jpg": "bef549b9e7dfe57f9be8fda96688b254",
"assets/assets/coins/5714-0082.jpg": "b66a7216a6c5a6f1a7c139d39ceecb18",
"assets/assets/coins/5714-0083.jpg": "d465ce5bedc4149de6dcddb637105c9b",
"assets/assets/coins/5714-0084.jpg": "579fe971d2943a6ed60f77ae29c55eef",
"assets/assets/coins/5714-0085.jpg": "598a64ff25f3a1eaf79aa0d645e19e18",
"assets/assets/coins/5714-0086.jpg": "e35ca5341cbb711f070eb2ddd83d479b",
"assets/assets/coins/5714-0087.jpg": "b2637235e761a1a6041a31e72971d6e6",
"assets/assets/coins/5714-0088.jpg": "2544ab383b481874501a0eb5a0be3752",
"assets/assets/coins/5714-0089.jpg": "c442793351cfa81df63b06bbdbfbd5ae",
"assets/assets/coins/5714-0090.jpg": "4928ec247df90eccf19ccf364f79d021",
"assets/assets/coins/5714-0091.jpg": "73a53b1ede21f8d2f26f6b16f6788d80",
"assets/assets/coins/5714-0092.jpg": "c1963922e0b840e9450914bad78774c6",
"assets/assets/coins/5714-0093.jpg": "487c6fcb3950a4191acc16b68d1b4bec",
"assets/assets/coins/5714-0094.jpg": "b9effd4dc662f985f04b6f3817f3a91c",
"assets/assets/coins/5714-0095.jpg": "3b89eaf69c955e9d7278b1f12933812c",
"assets/assets/coins/5714-0096.jpg": "8e1b1f39594c596820991c438bba5414",
"assets/assets/coins/5714-0097.jpg": "ef82407f2a075614202333f25892e752",
"assets/assets/coins/5714-0098.jpg": "e0122681a567ec96655efe670a795b62",
"assets/assets/coins/5714-0099.jpg": "da14ce2f6159da72e729c8a487e31b49",
"assets/assets/coins/5714-0100.jpg": "c43434f34888374e7d722014a9067128",
"assets/assets/coins/5714-0101.jpg": "285908839aecb3b3170e91bc35a154bf",
"assets/assets/coins/5714-0102.jpg": "a044abc64378dc388937ef94a92512f2",
"assets/assets/coins/5714-0103.jpg": "d052d9e65c3dbe277cabf56cd1b87e2c",
"assets/assets/coins/5714-0104.jpg": "fcfce7e2d5ae2170d7724ac8c520bd4c",
"assets/assets/coins/5714-0105.jpg": "77da78c378ea9a69a492a98539c55eb3",
"assets/assets/coins/5714-0106.jpg": "65421b8c19267f7ccdeaf18e2b8f1b1a",
"assets/assets/coins/5714-0107.jpg": "87a23956adc50aeb90c54c1a80815f18",
"assets/assets/coins/5714-0108.jpg": "af557eed380f64754bda1620c95fa2e7",
"assets/assets/coins/5714-0109.jpg": "89e49cd7fc3674dcb82329d9cb92773d",
"assets/assets/coins/5714-0110.jpg": "353cd3f7e67ff8d42adda7e29e75f58b",
"assets/assets/coins/5714-0111.jpg": "19e387d214f46dbc03e0668ca2777528",
"assets/assets/coins/5714-0112.jpg": "cdf019c4fc1320cdc113f25ef7e043ee",
"assets/assets/coins/5714-0113.jpg": "135f5242b4983114e1b87ee3c57dd157",
"assets/assets/coins/5714-0114.jpg": "159076b3fbd7099aff36d2b95aa0dfc6",
"assets/assets/coins/5714-0115.jpg": "37337a0da4078b1f8da47b8debb437ec",
"assets/assets/coins/5714-0116.jpg": "20e7e2764f4851142ac80a07eb898078",
"assets/assets/coins/5715-0001.jpg": "819b32e93ef97e8b583042fbc2300f1d",
"assets/assets/coins/5715-0002.jpg": "344ad6d8ac76947ba77f16002df6d8b0",
"assets/assets/coins/5715-0003.jpg": "4d232b01e7bc0fc9167467e0246b1567",
"assets/assets/coins/5715-0004.jpg": "97b53c69fd78ff9f2537d58283c6b4ea",
"assets/assets/coins.json": "cbd0bff0aaf59ac93911ce20363fd54c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "79063d2ce0c1fc1185e348fe7a12c497",
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
"flutter_bootstrap.js": "ce18fec6104280aff88019ffff1a10f4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ccbd252d190fd712d72148b8a8a17b24",
"/": "ccbd252d190fd712d72148b8a8a17b24",
"main.dart.js": "d701723db075719a8808a3a74f3dda14",
"manifest.json": "982fbe7c9cc07aa201421b0820e6e810",
"version.json": "ed111e62e78d68899baad8acff2fe6f3"};
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
