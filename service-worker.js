const CACHE_NAME = "v1";
const assets = [
  "/",
  "/index.html",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

// Serve from cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});