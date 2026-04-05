const CACHE_NAME = 'puyo-cache-v1';
const urlsToCache = [
  '/block-games/games/puyo.html'
  // Mẹo: Bạn có thể thêm đường dẫn các file CSS/JS/Ảnh mà puyo.html đang dùng vào đây
  // để game có thể chơi được hoàn toàn khi mất mạng.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Trả về file từ cache nếu có, nếu không thì tải từ mạng
        return response || fetch(event.request);
      })
  );
});
