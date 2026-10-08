/* Offline cache for premarital forms PWA */
/* CacheStorage 按 origin 共享，activate 只清理带本前缀的键，
   否则会把同站其它工具（heart-talk / bible）的缓存一起删掉。 */
const CACHE_PREFIX = "premarital-";
const CACHE = "premarital-7505e679";
const ASSETS = [
  '../shared/theme.css',
  './',
  './index.html',
  './fill.html',
  './compare.html',
  './css/app.css',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './js/pwa.js',
  './js/data-loader.js',
  './js/theme.js',
  './js/home.js',
  './js/fill.js',
  './js/compare.js',
  './js/compare-page.js',
  './js/storage.js',
  './js/import-export-core.js',
  './js/form-logic.js',
  './data/forms.json',
  './data/assessment.json',
  './data/forms/assessment.json',
  './data/forms/intake.json',
  './data/forms/expectations.json',
  './data/forms/family.json',
  './data/forms/knowyou.json',
  './data/forms/roles.json',
  './data/forms/sex.json',
  './premarital-counseling-offline.html',
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
          // 只有导航请求才回退到 index.html（见 heart-talk/sw.js 同款说明）
          if (event.request.mode === "navigate") return caches.match("./index.html");
          return Response.error();
        });
    })
  );
});
