const CACHE_NAME = "stop-watch-cache-v1";
const URLS_TO_CACHE = [
  "./stopwatch/",
  "./stopwatch/index.html",
  "./stopwatch/icon.png",
  "./stopwatch/script.js",
  "./stopwatch/styles.css",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE).catch((error) => {
        console.error("Cache addAll error:", error);
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch((error) => {
          console.error("Fetch error:", error);
        })
      );
    })
  );
});
