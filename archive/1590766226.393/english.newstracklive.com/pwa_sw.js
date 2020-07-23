//This is the "Offline copy of pages" service worker

//Install stage sets up the index page (home page) in the cache and opens a new cache
function get_hostname(str) {
     matches = str.split('/');
    return matches[2];
}

self.addEventListener('install', function(event) {

host_name =event.request.url;
 if(host_name.indexOf('superadmin') == -1){
    console.log('install service workder disabled for superadmin');
	return false;
 }
										  
  var indexPage = new Request(host_name);
  event.waitUntil(
    fetch(indexPage).then(function(response) {
      return caches.open('pwa-offline').then(function(cache) {
        console.log('Cached index page during Install'+ response.url);
        return cache.put(indexPage, response);
      });
  }));
});

//If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener('fetch', function(event) {
										
host_name =event.request.url;
//alert('test');
console.log(get_hostname(host_name)+' -----'+host_name.indexOf('superadmin'));
if (get_hostname(host_name)!='english.newstracklive.com' || host_name.indexOf('superadmin') != -1 ) {
	console.log('fetch service workder disabled for superadmin');
	return false;
	}
 
	
  var updateCache = function(request){
	  
    return caches.open('pwa-offline').then(function (cache) {
      return fetch(request).then(function (response) {
			
										  
        console.log('add page to offline'+response.url)
        return cache.put(request, response);
      });
    });
  };

	
  event.waitUntil(updateCache(event.request));


  event.respondWith(
    fetch(event.request).catch(function(error) {
      console.log( 'Network request Failed. Serving content from cache: ' + error );

      
      return caches.open('pwa-offline').then(function (cache) {
													  // alert('test1');
        return cache.match(event.request).then(function (matching) {
          var report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
          return report
        });
      });
    })
  );
})
