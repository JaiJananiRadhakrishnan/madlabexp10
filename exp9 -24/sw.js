self.addEventListener("install", e => {
  e.waitUntil(
      caches.open("static").then(cache => {
          return cache.addAll(["./", "./src/master.css", "./assets/icons/icon-48x48.png"]);
        
      })
  );
    });

    self.addEventListener("fetch", e=>{
        e.respondWith(
            caches.match(e.request).then(response => {
                return response || fetch(e.request);
  
            })
        );
    });