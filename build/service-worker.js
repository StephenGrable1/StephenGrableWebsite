"use strict";var precacheConfig=[["/index.html","3c1be385fd0fe58306edaabf79e03662"],["/static/css/main.bf515b13.css","c8a4e41df4f3ce2b3206745aa90d1ca0"],["/static/js/main.78ed37ba.js","5bd117213c53004256658ed85046f872"],["/static/media/CSS3_logo.svg.ac36808d.png","ac36808d3da8421a5f5fcaa9cd982cf5"],["/static/media/DigitalOcean_logo.svg.cb89b2f8.png","cb89b2f82ed842e6744fee84d8e5b63b"],["/static/media/Github.8dfd0b29.svg","8dfd0b29dfa0d1fef1d9ba0935d8e771"],["/static/media/HTML5_logo.svg.da3c36ab.png","da3c36ab7d12285e143e25c4741d3d3e"],["/static/media/JavaScript_logo.svg.1cff25ec.png","1cff25ecb30cb7b4a1e54a0ed53fb22d"],["/static/media/Nginx_logo.svg.b4f75266.png","b4f75266b605a70f043d7a59285e98cd"],["/static/media/analytics.4382f682.svg","4382f682cac6622d9f429a0325e4e736"],["/static/media/calendar.dbab3102.svg","dbab310231bcf42fb90309ae28155b7e"],["/static/media/computer_website_display.ee685822.png","ee68582205a2274daf801b2f2b7c01a5"],["/static/media/crossword.b5c5ab66.png","b5c5ab66d8331513696fe3ec992187a0"],["/static/media/deafboy_website_display.706c8faa.png","706c8faaa2283c4c9c8f6e8661889138"],["/static/media/dust_scratches.608ab5fe.png","608ab5fe4a45e2ac93febd3416b260f0"],["/static/media/email_signup.86e62378.gif","86e6237808914eff2df5d8a77ca7b227"],["/static/media/express.8df51564.png","8df51564eb08c7a173fd2e5c8350a312"],["/static/media/firebase-logo.e0db5459.png","e0db54599b018f60c024a055dd4eac53"],["/static/media/heroku.b38ff61a.svg","b38ff61aa327fbdc24f7b1dad7d04d1a"],["/static/media/jestlogo.e74a81c0.png","e74a81c023daf2876e0708b3cabbab43"],["/static/media/node.cc2b3aaf.svg","cc2b3aafefa9bd0890b1fcc6b9ca835f"],["/static/media/react-router.4cabe54d.png","4cabe54de36ab64a75b3e7950791ebbe"],["/static/media/react.21cef5f5.png","21cef5f5ff8f0a831ed1692e91e7154a"],["/static/media/redux_logo.b4e23a50.png","b4e23a502e44692d9f3c8b427ac23e01"],["/static/media/responsive.eb821ecb.svg","eb821ecb3b56df950ece0fee3310eec4"],["/static/media/stephen.3a621c21.png","3a621c21caed3b861270d946dace473c"],["/static/media/timer_website_display.796b186f.png","796b186f13c89c09596dc2e32950bbdb"],["/static/media/todo-website-gif.5b8db256.gif","5b8db256162fd2ef21e5abc4cc88aa94"],["/static/media/todo_website_display.d0c7a783.png","d0c7a783f514c561c74960cc8b00670e"],["/static/media/webpack_logo.80570b80.png","80570b8047fbb418ee02a9d0d08f17b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});