const CACHE='deftar-v1';
const URLS=['/Matalll/','/Matalll/index.html','/Matalll/manifest.json','/Matalll/icons/icon-192.png','/Matalll/icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLS)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(f=>caches.open(CACHE).then(c=>{c.put(e.request,f.clone());return f}))).catch(()=>caches.match('/Matalll/index.html')))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))))});