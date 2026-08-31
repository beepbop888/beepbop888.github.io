'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ba048ed3395abf2d5c0d093b7a1226fe",
"assets/AssetManifest.bin.json": "e9166ab62779578ae273c5afd62ff976",
"assets/AssetManifest.json": "d9e5fdd86236e080bb56e146350e5f7a",
"assets/assets/coins/5015-0001.jpg": "5c10859ab3793c442447fcf0cc3a335c",
"assets/assets/coins/5015-0002.jpg": "7dbb10b1316985511f62717fb1964a96",
"assets/assets/coins/5015-0003.jpg": "5a3f91e050ab716ca37be80e877e41c3",
"assets/assets/coins/5015-0004.jpg": "b6c4cce46693270c6704fa45d3918ea9",
"assets/assets/coins/5015-0005.jpg": "cafeb32cd217b0e2b7ad56421d78491b",
"assets/assets/coins/5015-0006.jpg": "8662e193bd912b2f57f8739ebf57dda4",
"assets/assets/coins/5015-0007.jpg": "1d236da8d408c796c98c829022fdb90a",
"assets/assets/coins/5015-0008.jpg": "07fb694494793c4439e23b2af456877d",
"assets/assets/coins/5015-0009.jpg": "7ed03b1c132a0677a35023eb6e0804d9",
"assets/assets/coins/5015-0010.jpg": "74fd66a6107f8e7c8458c01298808246",
"assets/assets/coins/5015-0011.jpg": "4d7ae2f9b53d91786e31df8e8233dc40",
"assets/assets/coins/5015-0012.jpg": "c04c7d5d6965ac0e59db445592e5426f",
"assets/assets/coins/5015-0013.jpg": "00c284a1ff1180b958f491af8c2d1cd0",
"assets/assets/coins/5015-0014.jpg": "01da4f8c9723f2a3055eab7faa93fcb6",
"assets/assets/coins/5015-0015.jpg": "2db50bb921141fedc93f66ddd739180c",
"assets/assets/coins/5015-0016.jpg": "24afa8e8e2ed5077a0c8f1f66615ef60",
"assets/assets/coins/5015-0017.jpg": "2d01d6bdfd7f294104f3daab4af9a0b1",
"assets/assets/coins/5015-0018.jpg": "ecb625de5f2cee3b612ec61109ebd05e",
"assets/assets/coins/5015-0019.jpg": "8359bbba834263b084397710a49aa632",
"assets/assets/coins/5015-0020.jpg": "f36576779e0fe3437fe339fece9d8bfb",
"assets/assets/coins/5015-0021.jpg": "43e1ff3f61f1cc36653512dbc6cea060",
"assets/assets/coins/5015-0022.jpg": "b04462357ab30b5db80edf0b9ed8c3b7",
"assets/assets/coins/5015-0023.jpg": "c82ed3336bb9645fc3479929600ab36f",
"assets/assets/coins/5015-0024.jpg": "05c07e139dc603a47dfba5b9142db0e8",
"assets/assets/coins/5015-0025.jpg": "13aefbce2c4b6b9e56698087ec78ea0c",
"assets/assets/coins/5015-0026.jpg": "44c186c5ba700aaa5182cce0c78c745b",
"assets/assets/coins/5015-0027.jpg": "b8083f4e5189780259b8be9cbcb1f0f4",
"assets/assets/coins/5015-0028.jpg": "86a49dc147e1eb3dcdb2b416b4f8767a",
"assets/assets/coins/5015-0029.jpg": "5c6dc600c13364469f5883f47c645f11",
"assets/assets/coins/5015-0030.jpg": "9be023a0e1b229ab2b93cf50b9a3ae56",
"assets/assets/coins/5015-0031.jpg": "ab14119a15b686f3f547bde50a646abb",
"assets/assets/coins/5015-0032.jpg": "880ee828918453f76e294a2b2e361ba9",
"assets/assets/coins/5015-0033.jpg": "530bd4fc908e48ced7101089385a7ea1",
"assets/assets/coins/5015-0034.jpg": "b656580adc5104ee1868627b86eafc65",
"assets/assets/coins/5015-0035.jpg": "3037932185c471df615677c62256ae3f",
"assets/assets/coins/5015-0036.jpg": "65f323656ae9d98478e4666af52a3b59",
"assets/assets/coins/5015-0037.jpg": "fc556a902bbef30f3a96bc0b664ba155",
"assets/assets/coins/5015-0038.jpg": "a2361571c838bf5b95d5883a9fc1b438",
"assets/assets/coins/5015-0039.jpg": "7ee6c8e1d647cae8d79f637b47b9f078",
"assets/assets/coins/5015-0040.jpg": "a82c63e7069dca18055b81f37217a951",
"assets/assets/coins/5015-0041.jpg": "f5a4f087eadab9ece1952ada1acb0079",
"assets/assets/coins/5015-0042.jpg": "2df5b70fb39714bd42e55814eb4cc7ca",
"assets/assets/coins/5015-0043.jpg": "657be87f856ce30daa00171ac80382d1",
"assets/assets/coins/5015-0044.jpg": "b44ccb5f04e4ddf757439d5e89888b8d",
"assets/assets/coins/5015-0045.jpg": "aa78b98a2ce0a4b2e41d987cffb5c9cc",
"assets/assets/coins/5015-0046.jpg": "1ecd1974261f8ae1b7b9ed91cd339813",
"assets/assets/coins/5015-0047.jpg": "50230f86c80023b25c4c9937b72c9bdc",
"assets/assets/coins/5015-0048.jpg": "4dc520107a4bdd2808876cec4f265556",
"assets/assets/coins/5015-0049.jpg": "6f727362bbf17cdef5c8a5bc24b0901f",
"assets/assets/coins/5015-0050.jpg": "cd8ecc151035cba11a5c52f82fa83acc",
"assets/assets/coins/5015-0051.jpg": "1361d74c28ec3e551ce05ff4415f3a17",
"assets/assets/coins/5015-0052.jpg": "04a8eb2aca3f2437b4475354f918de77",
"assets/assets/coins/5015-0053.jpg": "54cf0ec4c560d60b181edb07f4ee5c35",
"assets/assets/coins/5015-0054.jpg": "09b00af23c4423eb7f1fc13f10813080",
"assets/assets/coins/5015-0055.jpg": "abeee9b1954bba0a7858045cbb3477d0",
"assets/assets/coins/5015-0056.jpg": "7bee5e53069148f900e36aac9f9b2a32",
"assets/assets/coins/5015-0059.jpg": "b9103b594f87688fa3e233814a09adb0",
"assets/assets/coins/5015-0060.jpg": "0388e3c3fa80f29e09fb0976116bba9b",
"assets/assets/coins/5015-0061.jpg": "91b061d83b75f5cc7a9ea0d1b45bd4ce",
"assets/assets/coins/5015-0062.jpg": "cfdf6bb5569f84b9be7671b9bdb07a67",
"assets/assets/coins/5015-0063.jpg": "b6665f068bac8f55b5e6fb4f46a3a0f1",
"assets/assets/coins/5015-0064.jpg": "354d910b9e3fc87a477da0006238fa9d",
"assets/assets/coins/5015-0065.jpg": "2e331360d7b86c5c7662e474ef64386e",
"assets/assets/coins/5015-0066.jpg": "f5b1ca75bd0719075ba91d6c119dd72d",
"assets/assets/coins/5015-0067.jpg": "5bacac0c607b6ad5757ee1cbfe7b6c66",
"assets/assets/coins/5015-0068.jpg": "84b0c165edf1f1ceee1d527c2239a6a2",
"assets/assets/coins/5015-0069.jpg": "a2329e0e6d3590d179504bf2d62d7409",
"assets/assets/coins/5015-0070.jpg": "041db80ab9314217bbfcf59e0e34ac8c",
"assets/assets/coins/5015-0071.jpg": "ed064e93d1087add3a7924926f8deaf7",
"assets/assets/coins/5015-0072.jpg": "e3bd757301b71f29b7b2eab7fd054659",
"assets/assets/coins/5015-0073.jpg": "ef697a3cb7133c8203536728f0d47395",
"assets/assets/coins/5015-0074.jpg": "6b8aa10266b416f65395ad1448455235",
"assets/assets/coins/5015-0075.jpg": "1fe078b92b6b075eafa7c9088b2c1a44",
"assets/assets/coins/5015-0076.jpg": "ea68a3077452a81cf40876f0f1bcb9fa",
"assets/assets/coins/5015-0077.jpg": "07f40232b994da7917b61a06eda9d489",
"assets/assets/coins/5015-0078.jpg": "6c3086f5dd6d9b9ee26ceab6a4e80dbc",
"assets/assets/coins/5015-0079.jpg": "8f445f68fa09cb1419794634582c7825",
"assets/assets/coins/5015-0080.jpg": "07f249064a667743c42099eec9005a5a",
"assets/assets/coins/5015-0081.jpg": "394dd2151624094e24c297128fd7c94f",
"assets/assets/coins/5015-0082.jpg": "514389b43d5d408d78c334eb0d34014a",
"assets/assets/coins/5015-0083.jpg": "d7a8403fef736b76c04476569e71f497",
"assets/assets/coins/5514-0068.jpg": "24cf8f41e258563e3455b165a9852cc9",
"assets/assets/coins/5514-0069.jpg": "1ad5ac22fe75e59d340518ef7d539bdf",
"assets/assets/coins/5514-0070.jpg": "f1b58015f159c69afaa2a71d511f4762",
"assets/assets/coins/5514-0071.jpg": "44382b2e7e31f0b60b9349b1e5581d28",
"assets/assets/coins/5514-0072.jpg": "ad95ccd0ca8efbffd02626f7acffc721",
"assets/assets/coins/5514-0073.jpg": "d471475bac11e82e80e107a60fea92d5",
"assets/assets/coins/5514-0074.jpg": "bb31f15a7e5cd22e4e03bdf7113a9819",
"assets/assets/coins/5514-0075.jpg": "9cbb0bb82d411a4b80f99823f8c069d6",
"assets/assets/coins/5514-0076.jpg": "b3d850330c851d249fc00d229dc8cbab",
"assets/assets/coins/5514-0077.jpg": "158542da9107642ec498b00ac64bd985",
"assets/assets/coins/5514-0078.jpg": "4ba9ae64009ef09e8434446892e2c0d9",
"assets/assets/coins/5514-0079.jpg": "493665e5ea3a2775bee7802e5b4791ba",
"assets/assets/coins/5514-0080.jpg": "1ce49ac099c288651f69b2804dc6c93b",
"assets/assets/coins/5514-0081.jpg": "38ce8c3eadb204117297b8bada937371",
"assets/assets/coins/5514-0082.jpg": "af47289f7d49bb1bf8044e86d8070a4c",
"assets/assets/coins/5514-0083.jpg": "17d72ff5508366d462ebd0267c2786d5",
"assets/assets/coins/5514-0084.jpg": "43f08d2080297d0b5c9d9496aa008e22",
"assets/assets/coins/5514-0085.jpg": "c2d3122797b3ba6917746dbd434ea7f2",
"assets/assets/coins/5514-0086.jpg": "03528cfc06e270fcff4e64460a9fce92",
"assets/assets/coins/5514-0087.jpg": "5a9d34c1b3bf8fca4f37c40d25c3c1dc",
"assets/assets/coins/5514-0088.jpg": "7742efc5c7b37762af916c5ba36f8193",
"assets/assets/coins/5514-0089.jpg": "8ad7be837e131a30691d9c647f7d5e0c",
"assets/assets/coins/5514-0090.jpg": "93267202037c712a710046d92434d861",
"assets/assets/coins/5514-0091.jpg": "b7834ec211b1cf2937ae1b9dca24f604",
"assets/assets/coins/5514-0092.jpg": "cca60e2bf54eb52e77c7ca3cf2380515",
"assets/assets/coins/5514-0093.jpg": "7a4caeb4beaaa8f23dfbce46fade5080",
"assets/assets/coins/5514-0094.jpg": "e392dd7f7ed420f76975baa5fd739148",
"assets/assets/coins/5514-0095.jpg": "b86384663983f420e524b044b666e748",
"assets/assets/coins/5514-0096.jpg": "4b1227dc76f2840a0336d95ce33161f5",
"assets/assets/coins/5514-0097.jpg": "404d60b5cfb3365cf2fbc923aff0eccc",
"assets/assets/coins/5709-0001.jpg": "841d7c5a5ee0d2c2deb496839f606f64",
"assets/assets/coins/5710-0001.jpg": "b3325c55c2af139ef2ba5531b4c616ed",
"assets/assets/coins/5710-0002.jpg": "ed1e7cf3c38c25e928a07d738a8357a8",
"assets/assets/coins/5710-0003.jpg": "6fcd0c163304bfccd6665433f52f3429",
"assets/assets/coins/5710-0004.jpg": "c1f7551c31e8308683921ba3b9b5b9e7",
"assets/assets/coins/5710-0005.jpg": "ee0d60e961fbe08fa1e8005f45d28f10",
"assets/assets/coins/5710-0006.jpg": "a5309fa98a2c119a3fd646b1088a6ccf",
"assets/assets/coins/5710-0007.jpg": "dd13767dbb7dd489339801f6602f96f6",
"assets/assets/coins/5710-0008.jpg": "59cf4c61615ea2be4ad36d8769ebacaa",
"assets/assets/coins/5710-0009.jpg": "91679b3e52778fa8ec8824a15c5ba38c",
"assets/assets/coins/5710-0010.jpg": "ff5a98a4b52d8ca5b19af01fbb58cee1",
"assets/assets/coins/5710-0011.jpg": "44fad0e575765f117155dd79cb4349d6",
"assets/assets/coins/5710-0012.jpg": "9dec2145745f727cf733e4e00f699e5c",
"assets/assets/coins/5710-0013.jpg": "6fa7cd48d73214e33830f2ac5c188552",
"assets/assets/coins/5710-0014.jpg": "d45d93f2dd8cc8366cb6ce8f752d33bd",
"assets/assets/coins/5710-0015.jpg": "7141056b5e3886e7aee24f14dbb4e202",
"assets/assets/coins/5710-0016.jpg": "15767e8823dd4120365aa933ff182502",
"assets/assets/coins/5710-0017.jpg": "998fa787528ad0b978d977ea678c502a",
"assets/assets/coins/5710-0018.jpg": "c34a7b38926b99aeef8f890692ad4a54",
"assets/assets/coins/5710-0019.jpg": "c90368f446ae535eda03cf4a107f7dc0",
"assets/assets/coins/5712-0001.jpg": "6601f10aadfd3597acbb41197e70626d",
"assets/assets/coins/5712-0002.jpg": "06e6803cf2a35bd6097a88faeb4519ec",
"assets/assets/coins/5712-0003.jpg": "47fb25fa706bfa9da104a0aa7cee9822",
"assets/assets/coins/5712-0004.jpg": "195da869c35193bbfb18815346f2bb64",
"assets/assets/coins/5712-0005.jpg": "268bd392d03a64c8a47ade7d49c34988",
"assets/assets/coins/5712-0006.jpg": "fa60ab5095ce185596720af5660ea9e0",
"assets/assets/coins/5712-0007.jpg": "b527e62ba7222181198a7204c598e50f",
"assets/assets/coins/5712-0008.jpg": "5f9d83207bf0d37bc06eea3542c6fb30",
"assets/assets/coins/5712-0009.jpg": "3aceadea515d626fd0a15f085dd0d806",
"assets/assets/coins/5712-0010.jpg": "c24ffe605473b555aeeb54dd8fe22e14",
"assets/assets/coins/5712-0011.jpg": "24b4bce7e3c2de60556e3d22cda3673c",
"assets/assets/coins/5712-0012.jpg": "20857acff1667a6d564f36c9e6dba5b2",
"assets/assets/coins/5712-0013.jpg": "ea8545644111b3a9245218d193f3002e",
"assets/assets/coins/5712-0014.jpg": "0f678400192ba428cf118601509f824f",
"assets/assets/coins/5712-0015.jpg": "06906745cf635fb2c3adccb2d3c6bb5b",
"assets/assets/coins/5712-0016.jpg": "edccd1e8747c31cc1622aba52a75bbd6",
"assets/assets/coins/5712-0017.jpg": "5aa5683791bd2ba3a97e6318c576a51a",
"assets/assets/coins/5712-0018.jpg": "37105a238a6d51f41a29004de2aad561",
"assets/assets/coins/5712-0019.jpg": "a473bf73897864a62bbda646ef14046d",
"assets/assets/coins/5712-0020.jpg": "796d15b06fb708b5c07f3f27d2dd95f0",
"assets/assets/coins/5712-0021.jpg": "f31edd4d2182383185656029be5efc9b",
"assets/assets/coins/5712-0022.jpg": "f9baae68ed4335a3084ab372ebe78a09",
"assets/assets/coins/5712-0023.jpg": "c08a9d0505b91841c10211f5679712a9",
"assets/assets/coins/5712-0024.jpg": "4eebcfe97fb4f830baaed8df21fed28e",
"assets/assets/coins/5712-0025.jpg": "760f97e19a7a6c74963665ad45ef11e3",
"assets/assets/coins/5712-0026.jpg": "35a649c622d9ca8ec707efb7137004d5",
"assets/assets/coins/5712-0027.jpg": "eebd3a83b5f7fcf467e666a09514ce7c",
"assets/assets/coins/5712-0028.jpg": "414380fc0e64a7b0bb3be5488a30d952",
"assets/assets/coins/5712-0029.jpg": "6d5daa7535b7285b399431a57fa150c6",
"assets/assets/coins/5712-0030.jpg": "6817a153f63506b2d5519d0df99737a6",
"assets/assets/coins/5712-0031.jpg": "7f9a08c04069b8b25c194bcfa5ab6cce",
"assets/assets/coins/5712-0032.jpg": "4398cf7b88581692b366bbce95657af3",
"assets/assets/coins/5712-0033.jpg": "0470358f32c1da4d2d4fad573cbf3c37",
"assets/assets/coins/5712-0034.jpg": "ac2695c49d0ac13d66c2e793efb89bf3",
"assets/assets/coins/5712-0035.jpg": "a1d3a844e93b59b78f457f8175ef280a",
"assets/assets/coins/5712-0036.jpg": "5e27ad197f42ea8a3ed279a75f2905d9",
"assets/assets/coins/5712-0037.jpg": "e91e5499b079fc5bb90f50169cb690ff",
"assets/assets/coins/5712-0038.jpg": "ed553c751780d5712ace2c8755d68f50",
"assets/assets/coins/5712-0039.jpg": "b406f9747c87d0768765ad4423e4dd40",
"assets/assets/coins/5712-0040.jpg": "4e083ddb495e4a7bd4eddd50127ec305",
"assets/assets/coins/5712-0041.jpg": "08de7b81b84bb37d40930a70162641ae",
"assets/assets/coins/5712-0042.jpg": "473cc5d10075eaeab7f38fc231520afe",
"assets/assets/coins/5712-0043.jpg": "469dce98db368f31e08ac5ffc4fc9e8e",
"assets/assets/coins/5712-0044.jpg": "8bea7040269947f0162d4fca309630d0",
"assets/assets/coins/5712-0045.jpg": "74cf86499fdca6ee1a86a40fb1f27c55",
"assets/assets/coins/5712-0046.jpg": "35badf6f4e183e6ed67247cc6b82ac48",
"assets/assets/coins/5712-0047.jpg": "f13ff3ea49911a27af2008d6270062a8",
"assets/assets/coins/5712-0048.jpg": "78bee7141fce7f99f5ee4ea53d1b0bf2",
"assets/assets/coins/5712-0049.jpg": "ccb0b9c0a98e88e2ed3d59097e4d6974",
"assets/assets/coins/5712-0050.jpg": "4ad8c421bb5a43325fe2bcc4a2143a85",
"assets/assets/coins/5712-0051.jpg": "3ed5e21b28718a591aba30facdced735",
"assets/assets/coins/5714-0001.jpg": "e01419946ef48b7add67fde55a6bfe39",
"assets/assets/coins/5714-0002.jpg": "714a9655a92082c3d03bde258f119d6a",
"assets/assets/coins/5714-0003.jpg": "b81c6d5a85198ca3596a4fc1498fe952",
"assets/assets/coins/5714-0004.jpg": "bd3c493d95d84e340da42f6cd2071779",
"assets/assets/coins/5714-0005.jpg": "d11d7db77962dc247440dced2d0800d4",
"assets/assets/coins/5714-0006.jpg": "4ba57bf286a370e1279f3edfb1736c8a",
"assets/assets/coins/5714-0007.jpg": "f6ddbb9e88e90fd8ac2f117eab656c37",
"assets/assets/coins/5714-0008.jpg": "f8c3bbe7adbcbab111cab882d87ecf6a",
"assets/assets/coins/5714-0009.jpg": "79f2eab8cfbb4b96a4a47a0bc9a63cdc",
"assets/assets/coins/5714-0010.jpg": "0c7d08174e489c405a03b6a24892b73e",
"assets/assets/coins/5714-0011.jpg": "30a6c0e4b9594af556bd3c8b0d05c7a3",
"assets/assets/coins/5714-0012.jpg": "7fc07688258208f0a130618765f904f7",
"assets/assets/coins/5714-0013.jpg": "4cad9968e103a9d80310f18db3367c61",
"assets/assets/coins/5714-0014.jpg": "800daa9b98783638e7eeef8f07fde6e0",
"assets/assets/coins/5714-0015.jpg": "f07ca3f1951b0159a3549d485b9fe78e",
"assets/assets/coins/5714-0016.jpg": "5b565e82b5f21d38b2bd1a355c475394",
"assets/assets/coins/5714-0017.jpg": "b225b658a4fb548c6c6353a37bfa30c3",
"assets/assets/coins/5714-0018.jpg": "48f7bb9080757cd65f8a158ddb5012d8",
"assets/assets/coins/5714-0019.jpg": "5ab2b3278be82ad43a1cd980ef305a53",
"assets/assets/coins/5714-0020.jpg": "9af0637a2b674bbcc52c44c8cf93ebf6",
"assets/assets/coins/5714-0021.jpg": "2b2e14259cf19f900aee17ee7b837cf9",
"assets/assets/coins/5714-0022.jpg": "64fd9dfe5d7d399e6bc94b672ba80827",
"assets/assets/coins/5714-0023.jpg": "2496b3295af4b28fc919b72b455d203a",
"assets/assets/coins/5714-0024.jpg": "6112d86cf57a4a74488a2a863ca721b6",
"assets/assets/coins/5714-0025.jpg": "5310da112d28acb5492552157de9d5b7",
"assets/assets/coins/5714-0026.jpg": "172eb3987aa736f032f22b33140b3bef",
"assets/assets/coins/5714-0027.jpg": "6092658910ebe5966bdea24c51a0866f",
"assets/assets/coins/5714-0028.jpg": "b727619fd7fe0e8f3f265b0c8deee421",
"assets/assets/coins/5714-0029.jpg": "e95e026b65a7469e50299f8bba19a12a",
"assets/assets/coins/5714-0030.jpg": "2f678e024c9c41ba1e403dd3d7ca195c",
"assets/assets/coins/5714-0031.jpg": "1937da714c304d2e4d06e909ce619d5d",
"assets/assets/coins/5714-0032.jpg": "18390b46966dfb857d4690e62280c0c2",
"assets/assets/coins/5714-0033.jpg": "2c2297ea0dc3bd9e70a8ce7dbf479f18",
"assets/assets/coins/5714-0034.jpg": "c45cb36b0e22831d2b7ed5579629acfe",
"assets/assets/coins/5714-0035.jpg": "b9e114ce1627f3860459cb7be0acff84",
"assets/assets/coins/5714-0036.jpg": "3aad3261b34addfb7aad7c3978614267",
"assets/assets/coins/5714-0037.jpg": "e3410a50c6937db8c8725ef31814fc8b",
"assets/assets/coins/5714-0038.jpg": "f088bf5f697a9f99f813d7aed2fc8ea6",
"assets/assets/coins/5714-0039.jpg": "f3cbf9195f4a2684011c1c88783c831e",
"assets/assets/coins/5714-0040.jpg": "7ca38008f19bec88a448e9a80c30f6f6",
"assets/assets/coins/5714-0041.jpg": "cd712141306227c41d4fae99b6ce8dd1",
"assets/assets/coins/5714-0042.jpg": "1c7bf00985b8b19c05911a01a14c3449",
"assets/assets/coins/5714-0043.jpg": "13a81bc6d8bc84356c8933573da7fffd",
"assets/assets/coins/5714-0044.jpg": "7a80500a8e0c56cc4987cbeb0f257e41",
"assets/assets/coins/5714-0045.jpg": "490a279eede19aa4ed4bca551f51955f",
"assets/assets/coins/5714-0046.jpg": "676e01c96d290afa3d2605c3568ca844",
"assets/assets/coins/5714-0047.jpg": "e7df7d742bffe47c0343dd9d5c7f14f8",
"assets/assets/coins/5714-0048.jpg": "ef03334533acf1ec7a81b500147978f8",
"assets/assets/coins/5714-0049.jpg": "e62fb78cc5a4cb5576726656e20ed006",
"assets/assets/coins/5714-0050.jpg": "66f31d9429b2d6c8a83f00051834dce5",
"assets/assets/coins/5714-0051.jpg": "1ed3e5ac770edef3a1e4f2fd5b946372",
"assets/assets/coins/5714-0052.jpg": "de7365c1231a041f6e38270d2c9d90e9",
"assets/assets/coins/5714-0053.jpg": "86186932f643d24bb7dbfcf88bc9652c",
"assets/assets/coins/5714-0054.jpg": "c0ab7d58226b6762288cb02210ac2745",
"assets/assets/coins/5714-0055.jpg": "a30cd297e8981f815da88802f6b52fa0",
"assets/assets/coins/5714-0056.jpg": "6e1e60c9120bf5e66bb43d3469854ffd",
"assets/assets/coins/5714-0057.jpg": "54e7cc62bb4eee872095f8a238d146e3",
"assets/assets/coins/5714-0058.jpg": "3c9b226a7509308b09aca05ef4d517d3",
"assets/assets/coins/5714-0059.jpg": "ce3c5c162f3204650f0ae27a2ef23fa5",
"assets/assets/coins/5714-0060.jpg": "1e4db23364ad77743cc7c912bdd4627a",
"assets/assets/coins/5714-0061.jpg": "9ca4ed26e1ac727c7eb68b6f9d1d3d20",
"assets/assets/coins/5714-0062.jpg": "b84e0206e5fc822fb30c4f9755390843",
"assets/assets/coins/5714-0063.jpg": "8e47f79655c8bf380edd144dc06f0ea1",
"assets/assets/coins/5714-0064.jpg": "f5f3811ddffbcc9c14ecc51002a99d50",
"assets/assets/coins/5714-0065.jpg": "dd30aa7b7264063587cc38b87ddfbf4e",
"assets/assets/coins/5714-0066.jpg": "8e71cc4baa9357f45701fa58c00e7d6f",
"assets/assets/coins/5714-0067.jpg": "e2e03ad4369152dbaa3f9bb1adf19b67",
"assets/assets/coins/5714-0068.jpg": "e4071e7c41d52b7bc1efdd02cb92e708",
"assets/assets/coins/5714-0069.jpg": "f2a4f94a9b8f9b366f42ea1d6435ff1b",
"assets/assets/coins/5714-0070.jpg": "2fe1caab2015ae238c467ca53968ef83",
"assets/assets/coins/5714-0071.jpg": "b0f078d7211e7602d1fff233279f7a78",
"assets/assets/coins/5714-0072.jpg": "30d5fdf21c4c3badc5afca5be926953a",
"assets/assets/coins/5714-0073.jpg": "9ff8b34e25e070577b21b887d9675c5a",
"assets/assets/coins/5714-0074.jpg": "fbb3fde7a13ddc71299af3be7ba8ffbd",
"assets/assets/coins/5714-0075.jpg": "532d0c24bfccc37e206deeb619a8be88",
"assets/assets/coins/5714-0076.jpg": "bb994d53f55dcc92f5e44bb37ea8c1d3",
"assets/assets/coins/5714-0077.jpg": "31810c16a125aad6bc4c0f31c6243da2",
"assets/assets/coins/5714-0078.jpg": "d5d1c3c083d266258fc608f53a3746ef",
"assets/assets/coins/5714-0079.jpg": "f3b0adc721cfbc6d32d8e7de5f6b2a09",
"assets/assets/coins/5714-0080.jpg": "57f0c758ddfdc685580fd48b799f1aca",
"assets/assets/coins/5714-0081.jpg": "a2cb1b6ee6a9ab86bfd1ecd41f0b67ad",
"assets/assets/coins/5714-0082.jpg": "c0eab7db29dc9db32eb7c4f65c97b8f3",
"assets/assets/coins/5714-0083.jpg": "ff1d13ab05fe600bee13ef7eae025fd2",
"assets/assets/coins/5714-0084.jpg": "c24f91fdf0700e98584be7d060c1f42b",
"assets/assets/coins/5714-0085.jpg": "2f21dcdb6f632745f3b243e0f485f226",
"assets/assets/coins/5714-0086.jpg": "19f09e3e2bffe3f40f8b665d48a6f8df",
"assets/assets/coins/5714-0087.jpg": "cc8435dd8bddd28cc28a9c51a59e6ae0",
"assets/assets/coins/5714-0088.jpg": "c12cd4d0761b57a0c354169a087f14fd",
"assets/assets/coins/5714-0089.jpg": "bc9176f2c3f1fff3fc7e76d8b18fc40e",
"assets/assets/coins/5714-0090.jpg": "3a62cf54ca79daf7d2f2c875edf96180",
"assets/assets/coins/5714-0091.jpg": "2a12de8a18d38c0e09e977e55b1126c4",
"assets/assets/coins/5714-0092.jpg": "08280c6de4e5c7ee31da8b64397f8f7a",
"assets/assets/coins/5714-0093.jpg": "aec0d934bfd145982785351e98b0b1da",
"assets/assets/coins/5714-0094.jpg": "7ab05e6922b3531017c262aa286634d7",
"assets/assets/coins/5714-0095.jpg": "844af37e844d65895c43de01bd8cc9c3",
"assets/assets/coins/5714-0096.jpg": "66a1c839630c24506895cdc78f482a1a",
"assets/assets/coins/5714-0097.jpg": "ed65e50db2c3206052da1cfe0109db11",
"assets/assets/coins/5714-0098.jpg": "443f5c2978f5af59a2839cb0b6be2d6e",
"assets/assets/coins/5714-0099.jpg": "2df8d6c1dca149c2f615ac21748f5033",
"assets/assets/coins/5714-0100.jpg": "a2ff33986c905446c95ed6399d66ca12",
"assets/assets/coins/5714-0101.jpg": "0053e7fe67320f91a532c014418c6136",
"assets/assets/coins/5714-0102.jpg": "6410e76774adbaf3d528f5967413f6f9",
"assets/assets/coins/5714-0103.jpg": "e7a2a72a5642c4365bb4372836038f94",
"assets/assets/coins/5714-0104.jpg": "8fcfd7a761a8f85d45d9476cd7aece32",
"assets/assets/coins/5714-0105.jpg": "1fc8894a14ecc4af346f4a3838d4459d",
"assets/assets/coins/5714-0106.jpg": "abdf07fa6dec8e273532070a64d7799d",
"assets/assets/coins/5714-0107.jpg": "f33b6a6f3327cb5efc265bff0a91a993",
"assets/assets/coins/5714-0108.jpg": "84c3e216a74931307a1c9df2b3097e59",
"assets/assets/coins/5714-0109.jpg": "cc0534a5d963c4977fbe66fff11340a2",
"assets/assets/coins/5714-0110.jpg": "9390cc848a3cfe914cee0c7aded310ad",
"assets/assets/coins/5714-0111.jpg": "c6718662052fdf2ea8929c145548d9a3",
"assets/assets/coins/5714-0112.jpg": "c77c82194347e0eb387755068d0b971b",
"assets/assets/coins/5714-0113.jpg": "6e9fc7d64b1644bfa21a1855874b75ee",
"assets/assets/coins/5714-0114.jpg": "846ac8ba1926c1bee4352ba5df2b4129",
"assets/assets/coins/5714-0115.jpg": "0236bc2f82bdbe9a912cfd0843363097",
"assets/assets/coins/5714-0116.jpg": "74d92011d5d21979a6b1ed686ded8e15",
"assets/assets/coins/5715-0001.jpg": "f81b5cd6d4f67a654b7f36ec42689b0a",
"assets/assets/coins/5715-0002.jpg": "85f4dd93e18b5f6d80b1db87069ab6da",
"assets/assets/coins/5715-0003.jpg": "0ca4b439e479c1078ce3427982cc2c59",
"assets/assets/coins/5715-0004.jpg": "6596989cdcd17bd800b1892eeb25afd7",
"assets/assets/coins.json": "8ac8c5103f908449eb673e4d49ebb4ce",
"assets/FontManifest.json": "5a983e5274048e971860d1ced084eda9",
"assets/fonts/MaterialIcons-Regular.otf": "be5a470725f2829e1a121f2bebb57612",
"assets/fonts/Oswald-500.ttf": "ceea8a355e30bd9942da63ef00bffff5",
"assets/fonts/Oswald-600.ttf": "f90f48fc6280f67edf019af14770b719",
"assets/fonts/PTSans-400.ttf": "e25dbd081ac78287741eddb635d0b827",
"assets/fonts/PTSans-700.ttf": "263ff4c1b640058aaaf16af6f0585f7d",
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
"flutter_bootstrap.js": "ef4612f512286fc662b4611f6f99ef16",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ccbd252d190fd712d72148b8a8a17b24",
"/": "ccbd252d190fd712d72148b8a8a17b24",
"main.dart.js": "3d0087df5b305a55aa79c2f300727d63",
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
