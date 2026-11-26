const C='solist-game-v12';
const FILES=['./','index.html','privacy.html','manifest.webmanifest','icon-192.png','icon-512.png'];
for(let m=40;m<=83;m++)FILES.push('sounds/p'+m+'.mp3');
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('index.html'))))});
