// Service Worker for Portfolio PWA (production only)
const CACHE_NAME = 'portfolio-v2';
const urlsToCache = [
  '/',
  '/images/developer-photo.png',
  '/images/FCDC.png',
  '/images/inspirehub.png',
  '/images/holdingsinc.png',
  '/images/inspireasset.png',
  '/favicon.ico',
  '/manifest.json'
];

// Install event
self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event — network-first for pages, cache-first for static assets
self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match('/');
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

// Activate event
self.addEventListener('activate', function(event) {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});
