// SPIN Service Worker — offline-first caching
// Bump CACHE_NAME on breaking cache-layout changes.
const CACHE_NAME = 'spin-v2';
const MAX_ASSET_ENTRIES = 60;
const PRECACHE_URLS = [
  '/',
  '/index.html',
];

// Install: cache shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

/** Keep the asset cache from growing without bound across deploys */
async function pruneAssetCache() {
  const cache = await caches.open(CACHE_NAME);
  const keys = await cache.keys();
  const assetKeys = keys.filter((req) => req.url.includes('/assets/'));
  if (assetKeys.length > MAX_ASSET_ENTRIES) {
    // Oldest entries first (cache.keys() preserves insertion order)
    const toDelete = assetKeys.slice(0, assetKeys.length - MAX_ASSET_ENTRIES);
    await Promise.all(toDelete.map((req) => cache.delete(req)));
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Navigations: network first — and refresh the cached shell on success,
  // so offline users are never pinned to the first-installed version.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('/index.html', clone));
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Hashed assets: cache first (immutable), fallback network, bounded cache
  if (request.url.includes('/assets/')) {
    event.respondWith(
      caches.match(request).then((cached) =>
        cached || fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(request, clone))
            .then(pruneAssetCache);
          return response;
        })
      )
    );
    return;
  }

  // Default: network first
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
