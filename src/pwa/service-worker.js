
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
            'favicon.ico',
            'https://hn.algolia.com/api/v1/search_by_date?numericFilters=points%3E0,num_comments%3E0&page=1'
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

              var vendorFiles = [
                'https://www.gstatic.com/charts/47/css/controls/controls.css',
                'https://www.gstatic.com/charts/47/css/core/tooltip.css',
                'https://www.gstatic.com/charts/47/css/util/util.css',
                'https://www.gstatic.com/charts/47/js/jsapi_compiled_controls_module.js',
                'https://www.gstatic.com/charts/47/js/jsapi_compiled_corechart_module.js',
                'https://www.gstatic.com/charts/47/js/jsapi_compiled_default_module.js',
                'https://www.gstatic.com/charts/47/js/jsapi_compiled_format_module.js',
                'https://www.gstatic.com/charts/47/js/jsapi_compiled_ui_module.js',
                'https://www.gstatic.com/charts/47/loader.js',
                'https://www.gstatic.com/charts/loader.js',
              ]
              vendorFiles.forEach((url)=>{
                const request = new Request(url, { mode: 'no-cors' });
                fetch(request).then(response => cache.put(request, response.clone()));
              })
              
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
            // Check if we received a valid response  || response.type !== 'basic'
            if(!response || response.status !== 200) {
              return response;
            }
            // SEARCH API CACHE
            if (event.request.url.indexOf('https://hn.algolia.com/api/v1') > -1) {
              cache.put(event.request, response.clone())
            } 
          
            return response
          }).catch(function(error) {
            console.log('NETWORK OFFLINE: '+event.request.url);
        });
        })
      })
    )
  })
})()
