
(function () {
  'use strict'

  var appCache = 'hacker-news-cache-v1' // Will use Cache, falling back to Network.

  self.addEventListener('install', function (event) {
    console.info('##Service Worker## Attempting to install service worker and cache static assets')
    event.waitUntil(
      fetch('asset-manifest.json')
        .then(response => response.json())
        .then(json => {
          var staticFiles = [
            '/',
            './index.html',
            'manifest.json',
            'logo.png',
            'ios.png',
            'iphone.png',
            'ipad.png',
            'ripad.png',
            'favicon.ico'

          ]
          var staticContents = Object.keys(json)
          for (var key in staticContents) {
            var staticContent = staticContents[key]
            if (staticFiles.indexOf(staticContent) === -1 && staticContent.indexOf('service-worker') === -1) {
              staticFiles.push(json[staticContent])
            }
          }
          return caches.open(appCache)
            .then(function (cache) {
              return cache.addAll(staticFiles)
            })
        })

    )
  })

  self.addEventListener('activate', function (event) {
    console.log('##Service Worker## Activating new service worker...')

    var cacheWhitelist = [appCache]

    event.waitUntil(
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
    )
  })

  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.open(appCache).then(function (cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function (response) {
            if (event.request.url.indexOf('https://hn.algolia.com/api/v1') > -1 || event.request.url.indexOf('https://www.gstatic.com/charts') > -1) {
              cache.put(event.request, response.clone())
            } else {
              console.log('Network Issue')
            }
            return response
          })
        })
      })
    )
  })
})()
