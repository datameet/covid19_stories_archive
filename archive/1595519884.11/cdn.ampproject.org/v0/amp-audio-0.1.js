(self.AMP=self.AMP||[]).push({n:"amp-audio",v:"2007102309001",f:(function(AMP,_){
var k,l="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function n(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}n(this);"function"===typeof Symbol&&Symbol("x");var p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var aa={a:!0},r={};try{r.__proto__=aa;q=r.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=p;function ba(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function u(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var da=Object.prototype.toString;var w=self.AMP_CONFIG||{},ea=("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function x(a){if(self.document&&self.document.head&&(!self.location||!ea.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}w.cdnUrl||x("runtime-host");w.geoApiUrl||x("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function z(){if(!y.user)throw Error("failed to call initLogConstructor");return y.user}function A(){if(y.dev)return y.dev;throw Error("failed to call initLogConstructor");}function fa(){}function B(a,b,c,d,f){z().assert(a,b,c,d,f,void 0,void 0,void 0,void 0,void 0,void 0)};var ha=Object.prototype.hasOwnProperty;function C(){this.o=100;this.j=this.l=0;this.h=Object.create(null)}C.prototype.has=function(a){return!!this.h[a]};C.prototype.get=function(a){var b=this.h[a];if(b)return b.access=++this.j,b.payload};C.prototype.put=function(a,b){this.has(a)||this.l++;this.h[a]={payload:b,access:this.j};if(!(this.l<=this.o)){A().warn("lru-cache","Trimming LRU cache");a=this.h;var c=this.j+1,d;for(d in a){var f=a[d].access;if(f<c){c=f;var e=d}}void 0!==e&&(delete a[e],this.l--)}};var D,E;
function F(a,b){var c=void 0===c?"source":c;B(null!=a,"%s %s must be available",b,c);var d=a;if("string"==typeof d){D||(D=self.document.createElement("a"),E=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new C));var f=E,e=D;if(f&&f.has(d))d=f.get(d);else{e.href=d;e.protocol||(e.href=e.href);var g={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==g.pathname[0]&&(g.pathname="/"+g.pathname);if("http:"==
g.protocol&&80==g.port||"https:"==g.protocol&&443==g.port)g.port="",g.host=g.hostname;g.origin=e.origin&&"null"!=e.origin?e.origin:"data:"!=g.protocol&&g.host?g.protocol+"//"+g.host:g.href;f&&f.put(d,g);d=g}}(f="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,f=d.length-10,f=0<=f&&d.indexOf(".localhost",f)==f);B(f||/^(\/\/)/.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,
a)};function G(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var f=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(e){var g=e.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=f.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,ia(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var h=a.location.originalHash||a.location.hash;a=Object.create(null);if(h)for(var m;m=ca.exec(h);){var v=u(m[1],m[1]);m=m[2]?u(m[2].replace(/\+/g," "),m[2]):"";a[v]=m}for(h=0;h<c.length;h++)v=a["e-"+c[h]],"1"==v&&(b[c[h]]=!0),"0"==
v&&(b[c[h]]=!1)}return b}function ia(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(f){A().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var H=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function ja(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,f;if(G(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(f=0;f<H.length;f++){var e=H[f],g=e.experimentId;ha.call(c.__AMP_EXPERIMENT_BRANCHES,g)||(e.isTrafficEligible&&e.isTrafficEligible(c)?!c.__AMP_EXPERIMENT_BRANCHES[g]&&G(c)[g]&&(e=e.branches,c.__AMP_EXPERIMENT_BRANCHES[g]=e[Math.floor(Math.random()*e.length)]||null):c.__AMP_EXPERIMENT_BRANCHES[g]=null)}f="21065002"===(c.__AMP_EXPERIMENT_BRANCHES?
c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else f=!1;var h=f;d&&!h?a=I(b,"url")?J(b,"url"):null:(a=K(a),a=L(a),a=I(a,"url")?J(a,"url"):null);return a}function M(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return J(a,b)}function K(a){return a.nodeType?M((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function L(a){a=K(a);return a.isSingleDoc()?a.win:a}function J(a,b){I(a,b);a=N(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function O(a){var b=N(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;J(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function N(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function I(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function ka(){var a=new ba,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};var P;/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function la(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function ma(a){return a.closest?a.closest("AMP-STORY"):la(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"AMP-STORY"):!1})};function na(a){var b=O(L(a));if(b)return b;var c=K(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var e={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var g=0;g<b.length;g++){var h=b[g];h=h.getAttribute("custom-element")||h.getAttribute("custom-template");e[h]=!0}e=Object.keys(e)}else e=[];e.includes("amp-analytics")?a=M(a,"extensions").waitForExtension(a,"amp-analytics"):(P||(P=Promise.resolve(void 0)),a=P);return a}).then(function(){var b=
c.win;if(b.__AMP_EXTENDED_ELEMENTS&&b.__AMP_EXTENDED_ELEMENTS["amp-analytics"]){b=L(a);var f=O(b);f?b=f:(b=N(b),b["amp-analytics-instrumentation"]=ka(),b=b["amp-analytics-instrumentation"].promise)}else b=null;return b})};var Q={title:"",artist:"",album:"",artwork:[{src:""}]};function oa(a,b,c,d,f){var e=b.navigator;"mediaSession"in e&&b.MediaMetadata&&(e.mediaSession.metadata=new b.MediaMetadata(Q),pa(a,c),e.mediaSession.metadata=new b.MediaMetadata(c),e.mediaSession.setActionHandler("play",d),e.mediaSession.setActionHandler("pause",f))}
function qa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){try{var c=JSON.parse(b.textContent)}catch(f){c=null}var d=c;if(d&&d.image){if("string"===typeof d.image)return d.image;if(d.image["@list"]&&"string"===typeof d.image["@list"][0])return d.image["@list"][0];if("string"===typeof d.image.url)return d.image.url;if("string"===typeof d.image[0])return d.image[0]}}}
function pa(a,b){var c=ja(a);if(b&&b.artwork){var d=b.artwork;fa(Array.isArray(d));d.forEach(function(a){a&&(a="[object Object]"===da.call(a)?a.src:a,B(c.isProtocolValid(a)))})}};var R;function ra(a,b,c){var d=sa();a.addEventListener(b,function(a){try{return c(a)}catch(e){throw self.__AMP_REPORT_ERROR(e),e;}},d?void 0:!1)}function sa(){if(void 0!==R)return R;R=!1;try{var a={get capture(){R=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return R};function S(a,b,c){ra(a,b,c)};function T(a,b){var c=void 0===c?{}:c;var d=void 0===d?!0:d;na(a).then(function(f){f&&f.triggerEventForTarget(a,b,c,d)})};function U(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;a.m=Q;a.isPlaying=!1;return a}var V=AMP.BaseElement;U.prototype=l(V.prototype);U.prototype.constructor=U;if(t)t(U,V);else for(var W in V)if("prototype"!=W)if(Object.defineProperties){var X=Object.getOwnPropertyDescriptor(V,W);X&&Object.defineProperty(U,W,X)}else U[W]=V[W];U.B=V.prototype;k=U.prototype;k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a};
k.buildCallback=function(){"nodisplay"===this.getLayout()&&(this.element.removeAttribute("autoplay"),this.buildAudioElement());this.element.classList.add("i-amphtml-media-component");this.registerAction("play",this.A.bind(this));this.registerAction("pause",this.w.bind(this))};
k.mutatedAttributesCallback=function(a){if(this.c){var b=a.src,c=a.controlsList,d=a.loop;if(void 0!==b||void 0!==c||void 0!==d)void 0!==b&&F(b,this.element),this.propagateAttributes(["src","loop","controlsList"],this.c);b=a.title;var f=a.album,e=a.artwork;void 0===a.artist&&void 0===b&&void 0===f&&void 0===e||Y(this)}};
k.buildAudioElement=function(){var a=this,b=this.element.ownerDocument.createElement("audio");if(b.play){b.controls=!0;var c=this.element.getAttribute("src");c&&F(c,this.element);this.propagateAttributes("src preload autoplay muted loop aria-label aria-describedby aria-labelledby controlsList".split(" "),b);this.applyFillContent(b);this.getRealChildNodes().forEach(function(a){a.getAttribute&&a.getAttribute("src")&&F(a.getAttribute("src"),a);b.appendChild(a)});this.element.appendChild(b);this.c=b;
S(this.c,"playing",function(){return ta(a)});S(this.c,"play",function(){return T(a.element,"audio-play")});S(this.c,"pause",function(){return T(a.element,"audio-pause")})}else this.toggleFallback(!0)};k.layoutCallback=function(){"nodisplay"!==this.getLayout()&&this.buildAudioElement();Y(this);return"none"===this.element.getAttribute("preload")?this.c:this.loadPromise(this.c)};
function Y(a){var b=a.getAmpDoc().win.document,c=a.element.getAttribute("artist")||"",d=a.element.getAttribute("title")||a.element.getAttribute("aria-label")||b.title||"",f=a.element.getAttribute("album")||"",e;(e=a.element.getAttribute("artwork")||qa(b))||(e=(e=b.querySelector('meta[property="og:image"]'))?e.getAttribute("content"):void 0);e||(e=(b=b.querySelector('link[rel="shortcut icon"]')||b.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);a.m={title:d,artist:c,album:f,artwork:[{src:e||
""}]}}k.renderOutsideViewport=function(){return!0};k.pauseCallback=function(){this.c&&this.c.pause()};function Z(a){return a.c?ma(a.element)?(z().warn("amp-audio","<amp-story> elements do not support actions on <amp-audio> elements"),!1):!0:!1}k.w=function(){Z(this)&&this.c.pause()};k.A=function(){Z(this)&&this.c.play()};function ta(a){oa(a.element,a.win,a.m,function(){a.c.play()},function(){a.c.pause()})}(function(a){a.registerElement("amp-audio",U)})(self.AMP);
})});

//# sourceMappingURL=amp-audio-0.1.js.map
