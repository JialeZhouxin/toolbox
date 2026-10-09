/* Offline cache for 心语卡牌 PWA */
/* CacheStorage 按 origin 共享，activate 只清理带本前缀的键，
   否则会把同站其它工具（bible / premarital）的缓存一起删掉。 */
const CACHE_PREFIX = "heart-talk-";
const CACHE = "heart-talk-30f1aa97";
const ASSETS = [
  "../shared/theme.css",
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./src/styles.css",
  "./src/pwa.js",
  "./src/main.js",
  "./src/data/cards.js",
  "./src/core/card-service.js",
  "./src/core/history-store.js",
  "./src/ui/render.js",
  "./heart-talk-cards-offline.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((res) => {
          if (!res || res.status !== 200 || res.type === "opaque") return res;
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          return res;
        })
        .catch(() => {
          // 只有导航请求才回退到 index.html；否则 JS/CSS/图片请求失败时
          // 会拿到一坨 HTML，报错信息完全对不上。
          if (event.request.mode === "navigate") return caches.match("./index.html");
          return Response.error();
        });
    })
  );
});
