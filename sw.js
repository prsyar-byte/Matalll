const CACHE = 'deftar-v3';
const URLS = ['/Matalll/', '/Matalll/index.html', '/Matalll/manifest.json', '/Matalll/icons/icon-192.png', '/Matalll/icons/icon-512.png'];

// کاتێک SWی نوێ دادەمەزرێت، دەستبەجێ چالاک بێت
self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS).catch(()=>{})));
});

// SWی کۆن بسڕەوە و هەموو پەڕە کراوەکان نوێ بکەرەوە
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
        .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    // بۆ پەڕەکانی HTML: هەمیشە لە ئینتەرنێتەوە (کۆدی تازە!)
    if (e.request.mode === 'navigate' || e.request.destination === 'document') {
        e.respondWith(
            fetch(e.request).then(res => {
                const clone = res.clone();
                caches.open(CACHE).then(c => c.put(e.request, clone));
                return res;
            }).catch(() => caches.match(e.request))
        );
        return;
    }
    // بۆ وێنە و شتەکانی تر: cache (بۆ خێرایی + ئۆفلاین)
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request).then(f => {
            return caches.open(CACHE).then(c => { c.put(e.request, f.clone()); return f; });
        }).catch(() => caches.match('/Matalll/index.html')))
    );
});