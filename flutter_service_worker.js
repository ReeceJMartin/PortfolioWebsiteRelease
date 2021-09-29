'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "92a047e12e6cc776051d519221dfb5a1",
"index.html": "f6a4e250d48b367c7c467b35ba1b74d4",
"/": "f6a4e250d48b367c7c467b35ba1b74d4",
"main.dart.js": "82943b133cc082145e5eefaa6e2116b1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c1a228c1e0a8068fdfd2853b53019830",
".git/config": "6e8e381e4514137ab37342d79ec64c16",
".git/objects/92/15c3363f8c582638bdd29a62b212ebc9a5250a": "3f180e7ed65a639d7de4e537e70fe652",
".git/objects/66/02e872703c4dd76b09f1553ae76c70533f0fcc": "e3823e7cb8b3343ffa86a61c4d5f1d14",
".git/objects/57/7ee7baa5f49035c9c0eacaabbb29e1a3b1a8f2": "7ec99e37b2d9f4f97a3e2e1664a76717",
".git/objects/3b/f44cd47b9e6d0a9d2d08fce57fb3cd28d634c9": "18f5c58bb88c70c9e43029d86d98bea5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/07e7f2442b618058778e3e009e3c28f82951dd": "9a2add6eaa02323743972173a7fe820e",
".git/objects/35/63e7347be1ef18a3a447df1cd5d049cc088e14": "410c839ec94204d5a12c81538aae3317",
".git/objects/69/3c4ede02784eb55822825cb4075e5ca2aadcfb": "fbeabcc2218073effb37df455f8297ae",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/ac/05578a4a889d9dff555034fab5424bd7828a7a": "07dae83ee8d68e9bae13b68a49ecd63a",
".git/objects/d0/673ea812703ff89255a9e571965dd361c8a194": "fbe22fc3b8ba8eeaca209d0be1f00bdb",
".git/objects/a5/62b6f50430bf428f665b56f4bb6a1de79ab23b": "6e3c1c021d2562ad7e3a3372a33d4ff1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/90e045bfef5a65717c0a794781478f7e3b138b": "c867fe9ce2b283e2314e1e55c5539d54",
".git/objects/e4/cad0933f1b04796640b3b49b5306290306dd1b": "6a8633032ae6c37f368daf3fbfbdf9c1",
".git/objects/fb/a58c3dbc5af4fcdb491b168c174ef979203736": "42c889d2b9b1d9a843d7a8d5dd5403bf",
".git/objects/20/c2a07adf0bf1c2e78132bdee019e906a2d846e": "30c138950e747fd17542ce35c80d06b6",
".git/objects/17/383088a7cf3def82cb35a69b885ba6d2c6dc03": "9a2e4671a5448b26bb43c43b04dfe651",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/b77daf90fba52a0fd86c28089f6c8ce51c5505": "8ec048b7f4117e9177e4213b399c3f7c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "14c972e5155e5aa3bf2db2ef8589e81a",
".git/objects/55/d7bf6cb11fc07af263fbb1f0fe6fa4151df77b": "14f19833b31a656d72c5a83a61946208",
".git/objects/d4/e6ce030efed877bcf9d247e524a683c1dd63c3": "bab1b3e415b3ebc18890fd266d6417aa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/4c8c9690ac9c32132abf3dfba718283bac0b66": "6146ef9657750d9cf76cb6306b540273",
".git/objects/c4/8dc1e7899e0bcffb1a7ad451979c389a8cb4db": "e6aca1d438639182de870b12ee8e15ce",
".git/objects/f1/b8636506595cbffb8387b4875759a9497f1d1d": "6747846f501aa53d8556fe1f9e1324bd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/24/8e168cb31abaea1de13402d8f905785128e830": "b0c2aa351ea00684fba1e9c1a2574529",
".git/objects/24/c78e8af6ca1618c9e191ed5501372fa5cadde7": "711a7c586dd70f8be60c6cbb3268617a",
".git/objects/85/9c974d9eeab7ed27a81acf8d71d6e920af3f04": "75fe3e0a04bc42bfe188d9a3e7bedf50",
".git/objects/2e/9804b99e191d59066ec65614aaada8e273502a": "77afc09381e0631f857257227a89a418",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "24903d7dff42752860e5225a12794a6b",
".git/logs/refs/heads/main": "0374d0255b37053da847b790f741ff94",
".git/logs/refs/remotes/origin/main": "e4bfce13a849ece12889bbe1e038d2e6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9ba38d6ae96ce0371f04443fae380322",
".git/refs/remotes/origin/main": "9ba38d6ae96ce0371f04443fae380322",
".git/index": "43c64da59457e421d28b1104ce32a42d",
".git/COMMIT_EDITMSG": "5fe65449a15ca7804dcc9b1b409c3341",
"assets/images/profileAnimoji.jpeg": "cb79e4a380ddbe47fe4fb1e84de5896a",
"assets/images/profilePhoto.JPG": "7a9e7b553ef5190427bc05c83f901e11",
"assets/AssetManifest.json": "5b4c8cf7f76a1387afa9e2326dfcc2f5",
"assets/NOTICES": "73f1f4bf5c9de8f5e30fa78196fad096",
"assets/FontManifest.json": "ecc3f81b7b92f9b542f1fdb43cc87c32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Source_Code_Pro/SourceCodePro-Regular.ttf": "b484b32fcec981a533e3b9694953103b",
"assets/fonts/Source_Code_Pro/SourceCodePro-Bold.ttf": "03c11f6b0c0f707075d6483a78824c60",
"assets/fonts/Roboto/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/Roboto/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
