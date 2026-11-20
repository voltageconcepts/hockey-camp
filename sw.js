// Hockey Camp offline support: keeps the app and thumbnails on the iPad.
// Bump VERSION whenever you upload new files so the iPad picks them up.
const VERSION='hockey-camp-v4';
const FILES=['./', 'index.html', 'manifest.webmanifest', 'icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png', 'thumbs/177-60lpLZE.jpg', 'thumbs/7HluVwbAv3w.jpg', 'thumbs/8-LqKpnafHs.jpg', 'thumbs/DLEWgkVlmHg.jpg', 'thumbs/EOni5VdW9vE.jpg', 'thumbs/HxqbY6F5PJY.jpg', 'thumbs/Nugvy8UFGM8.jpg', 'thumbs/RHtdlyH2YG0.jpg', 'thumbs/Xk6I29zKcvs.jpg', 'thumbs/_ftLScGoVOI.jpg', 'thumbs/ex6v0WMkns8.jpg', 'thumbs/fzkc9iUKFl4.jpg', 'thumbs/qTMh3y_QKu4.jpg', 'thumbs/tO_2mB53Bgs.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==VERSION).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET')return;
  const mine=u.origin===location.origin,font=/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname),thumb=u.hostname==='i.ytimg.com';
  if(!mine&&!font&&!thumb)return; // YouTube videos stream normally
  if(mine&&e.request.mode==='navigate'){ // app page: try fresh copy, fall back to saved one
    e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(VERSION).then(x=>x.put('index.html',c));return r}).catch(()=>caches.match('index.html')));return}
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{if(r.ok||r.type==='opaque'){const c=r.clone();caches.open(VERSION).then(x=>x.put(e.request,c))}return r})));
});
