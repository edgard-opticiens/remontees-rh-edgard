// Service worker minimal — sert uniquement à rendre la page installable
// comme une application (raccourci bureau), pas de cache hors-ligne.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Passthrough réseau simple, pas de mise en cache.
  event.respondWith(fetch(event.request));
});
