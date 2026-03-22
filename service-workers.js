const CACHE_NAME = "pwa-demo-cache";
const urlsToCache = [
  "portfolio.html",
  "designs.css",
  "manifest.json",
  "service-workers.js",
  "Sendo.jpg",
  "icon-192x192.png",
  "icon-512x512.png"
];

// Install Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Cached Files
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});