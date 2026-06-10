// Service Worker sederhana agar web bisa diinstal di HP
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Biarkan browser mengambil data live seperti biasa dari Google Sheet
  e.respondWith(fetch(e.request));
});
