self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('.css')) {
    event.respondWith(
      fetch(event.request.url).then(res => res.blob())
    ) 
  }
});
