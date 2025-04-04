'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0c157071f340ac2376455de4c77192c3",
"assets/AssetManifest.bin.json": "bf4f89cebd3e8cc2c39db1ac7ef8c4ee",
"assets/AssetManifest.json": "91591e8210ec912a0c287cf2479085aa",
"assets/assets/about_me.png": "7c79357599349a6e9fdab9481ae174a6",
"assets/assets/about_ruby_hospital.png": "0aa59f6fe985f906704d1482992af6b4",
"assets/assets/ambulance.png": "6cd303152e88e7f210ab0c952991c2b5",
"assets/assets/contact.png": "91798bbdcfd928ad58d7cc515a382541",
"assets/assets/departments.png": "e025e861f85ce031054ad966f2cf7eaf",
"assets/assets/doctor.json": "cb360948bb4ddb9fb5e1a39df8bc9a40",
"assets/assets/edit_profile.png": "1bc92042454a1827d4ad8be0d6d389d3",
"assets/assets/education.png": "1c4ffa3b9bba113c3a2f83ab9628e709",
"assets/assets/emergency_services.png": "5d9a9cb191543c71200c1dfa1232d0ed",
"assets/assets/explore.png": "5d275ff16e67a2f3b27e087f4367e619",
"assets/assets/female.png": "1819c95f564c2b1d34be13203d39a58e",
"assets/assets/gallery.png": "4e5ee7009cdab41ebe30798f185389fa",
"assets/assets/health_files.png": "38666287367030913dae8b5021b4bc8a",
"assets/assets/hospital_logo.jpg": "eb9b2119f3896c30889ad87e604685ff",
"assets/assets/hospital_visit.png": "a246055af1d9076927eaa001dadda40c",
"assets/assets/hospital_visit_tabbar.png": "d4da5bb8936ff9319ab1e9c81d5fe413",
"assets/assets/ic_appointment.PNG": "9052a2d021949024d3d5fde338b3164f",
"assets/assets/ic_data_not_found.png": "d3a819ba1e685d68a70683b022abcc15",
"assets/assets/ic_emergency.PNG": "5d9a9cb191543c71200c1dfa1232d0ed",
"assets/assets/ic_support_icon.PNG": "bb2c1c11e91e5bb73b4e36a628799580",
"assets/assets/ic__appointment_not_found.PNG": "3b098ea1f214b718f7d379648af3b3f2",
"assets/assets/ic___icon__copy_.PNG": "0c6f4d1ec06434e5f060e00660784e50",
"assets/assets/image.png": "e6cde75177b3e2a915ffbed1a7429b4c",
"assets/assets/img_logo.png": "7170ee8b26797017637e5eeafe2bc418",
"assets/assets/invoices.png": "fc715d5c65f80ed9b7ee0ea9dcbe6c66",
"assets/assets/lang/en.json": "7ea5f1b83eeb6ab0a154c9f984d5faad",
"assets/assets/lang/ur.json": "2999808b76874ae6b794e0012e1e3825",
"assets/assets/language_speak.png": "724aead38a9e8a457a3b47e9fcac4e9f",
"assets/assets/loader.json": "3593f3895df861cf8f361df77d85f058",
"assets/assets/logout.png": "aafea64bb9ec43ed8e988e457624f08c",
"assets/assets/male.png": "36ba1c076a5b5201f9fcd41f8e83dc1e",
"assets/assets/manage_address.png": "a4c54b597efc4c7f7942c201146c9720",
"assets/assets/manage_family_member.png": "bcfacf39eda7baf3e912061185bec88c",
"assets/assets/medical_history_&_lifestyle.png": "6e2e59bc378587ffd3f671902e70476f",
"assets/assets/menu.png": "bca32c312860db0399975d6af9739800",
"assets/assets/online_consultation.png": "ffcb779b286053edcf277e137d6363d2",
"assets/assets/online_consultation_tabbar.png": "0094e198324fc92caccf838ad3d2cf08",
"assets/assets/prescription.png": "5d96e022b48e2c325ceefad0fba44b47",
"assets/assets/radiology.png": "468e02e79b4451d95abd53f2456c2e85",
"assets/assets/right_arrow.json": "79c919d7b99862e8b60843af1619fb4a",
"assets/assets/specialities.png": "a813bbd33f59f8028e21f09c8e0e7e6b",
"assets/assets/wallet.png": "afdccbea0404489fd6ad2e25efadb2ff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4f0d0f0ef02e529e2a4c1c80da0eae9c",
"assets/NOTICES": "6bc6f1a2ba8047b2ded701460f7cc908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd18f24d66ceb77c086e3628c975426f",
"/": "cd18f24d66ceb77c086e3628c975426f",
"main.dart.js": "ff4166f7a900a85c6c74d3ba04a688c4",
"manifest.json": "7ab78c969c424220fde4e1dcb72f270b",
"version.json": "7ada573fd66dde726cb0f3f11ae5d0bd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
