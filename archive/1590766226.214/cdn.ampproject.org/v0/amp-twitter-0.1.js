(self.AMP=self.AMP||[]).push({n:"amp-twitter",v:"2005151844001",f:(function(AMP,_){
var n,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},r;if("function"==typeof Object.setPrototypeOf)r=Object.setPrototypeOf;else{var w;a:{var ba={a:!0},y={};try{y.__proto__=ba;w=y.a;break a}catch(a){}w=!1}r=w?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var z=r;function A(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function B(a){var b=Object.create(null);if(!a)return b;for(var c;c=ca.exec(a);){var d=A(c[1],c[1]),e=c[2]?A(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var C="";
function D(){var a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{var c=self.AMP_CONFIG||{};b=B(a.location.originalHash||a.location.hash);c=c.spt;var d=B(a.location.search);C||(C=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012005151844001");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!1,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=d.amp_lite,test:!1,log:b.log,version:"2005151844001",rtvVersion:C,
singlePassType:c};b=a.__AMP_MODE=b}return b};var E=self.AMP_CONFIG||{},F=("string"==typeof E.cdnProxyRegex?new RegExp(E.cdnProxyRegex):E.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function G(a){if(!self.document||!self.document.head||self.location&&F.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var H={thirdParty:E.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:E.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof E.thirdPartyFrameRegex?new RegExp(E.thirdPartyFrameRegex):E.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:E.cdnUrl||G("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:F,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:E.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:E.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:E.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:E.geoApiUrl||G("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var I=self.__AMP_LOG;function J(){if(!I.user)throw Error("failed to call initLogConstructor");return I.user}function K(){if(I.dev)return I.dev;throw Error("failed to call initLogConstructor");}function L(a,b,c,d,e){J().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function M(a){return a||{}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function N(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function O(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};function da(a){if(!P(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return K().error("MESSAGING","Failed to parse message: "+a,c),null}}function P(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function Q(){this.w=100;this.l=this.m=0;this.j=Object.create(null)}Q.prototype.has=function(a){return!!this.j[a]};Q.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.l,b.payload};Q.prototype.put=function(a,b){this.has(a)||this.m++;this.j[a]={payload:b,access:this.l};if(!(this.m<=this.w)){K().warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.l+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.m--)}};M({c:!0,v:!0,a:!0,ad:!0,action:!0});var R,ea;
function S(a){R||(R=self.document.createElement("a"),ea=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Q));var b=ea,c=R;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a};function fa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){K().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function ha(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return ia(a,b)}function ja(a,b){var c=T(a);c=T(c);c=c.isSingleDoc()?c.win:c;return ia(c,b)}function T(a){return a.nodeType?ha((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function ia(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function ka(a){for(var b=a.nodeName,c=0,d=0,e=a.previousElementSibling;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?"."+d:""};var U;var V,la="Webkit webkit Moz moz ms O o".split(" ");function ma(a){var b=a.style;if(N("border","--"))b="border";else{V||(V=Object.create(null));var c=V.border;if(!c){c="border";if(void 0===b.border){var d;b:{for(d=0;d<la.length;d++){var e=la[d]+"Border";if(void 0!==b[e]){d=e;break b}}d=""}void 0!==b[d]&&(c=d)}V.border=c}b=c}b&&(N(b,"--")?a.style.setProperty(b,"none"):a.style[b]="none")};function na(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};var W={};
function oa(a,b){L("twitter","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+pa(a);var e=d={},f=b.dataset,g;for(g in f)N(g,"vars")||(e[g]=f[g]);if(g=b.getAttribute("json")){g=O(g);if(void 0===g)throw J().createError("Error parsing JSON in json attribute in element %s",b);for(var k in g)e[k]=g[k]}k=d;d=Date.now();e=b.getAttribute("width");g=b.getAttribute("height");k=k?k:{};k.width=na(e);k.height=na(g);b.getAttribute("title")&&(k.title=
b.getAttribute("title"));var u=a.location.href;"about:srcdoc"==u&&(u=a.parent.location.href);var l=T(b),x=ja(b,"documentInfo").get();e=ja(b,"viewer").getUnconfirmedReferrerUrl();var p=b.getPageLayoutBox();g=k;f=H.thirdParty+"/2005151844001/ampcontext-v0.js";var ua=x.sourceUrl,va=x.canonicalUrl;x=x.pageViewId;u={href:u};var wa=b.tagName,xa={localDev:!1,development:D().development,esm:!1,minified:!0,lite:D().lite,test:!1,log:D().log,version:D().version,rtvVersion:D().rtvVersion,singlePassType:D().singlePassType},
ya=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary);l=!l.isVisible();p=p?{left:p.left,top:p.top,width:p.width,height:p.height}:null;var za=b.getIntersectionChangeEntry();var q=b;for(var t=[],h=0;q&&1==q.nodeType&&25>h;){var m="";q.id&&(m="/"+q.id);var Aa=q.nodeName.toLowerCase();t.push(""+Aa+m+ka(q));h++;q=q.parentElement}q=t.join();t=q.length;h=5381;for(m=0;m<t;m++)h=33*h^q.charCodeAt(m);q=String(h>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);
t=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var v in a.AMP_CONFIG)h=a.AMP_CONFIG[v],"number"===typeof h&&0<=h&&1>=h&&(t[v]=Math.random()<h);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(v=a.AMP_CONFIG["allow-doc-opt-in"],h=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(h=h.getAttribute("content").split(","),m=0;m<h.length;m++)-1!=v.indexOf(h[m])&&(t[h[m]]=!0);Object.assign(t,fa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&
0<a.AMP_CONFIG["allow-url-opt-in"].length)for(v=a.AMP_CONFIG["allow-url-opt-in"],a=B(a.location.originalHash||a.location.hash),h=0;h<v.length;h++)m=a["e-"+v[h]],"1"==m&&(t[v[h]]=!0),"0"==m&&(t[v[h]]=!1);a=t}g._context=M({ampcontextVersion:"2005151844001",ampcontextFilepath:f,sourceUrl:ua,referrer:e,canonicalUrl:va,pageViewId:x,location:u,startTime:d,tagName:wa,mode:xa,canary:ya,hidden:l,initialLayoutRect:p,initialIntersection:za,domFingerprint:q,experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&
(k.src=b);d=k;d.type="twitter";Object.assign(d._context,null);return d}
function qa(a,b){var c={allowFullscreen:!0};c=void 0===c?{}:c;var d=c.disallowCustom,e=c.allowFullscreen;c=oa(a,b);var f=a.document.createElement("iframe");W[c.type]||(W[c.type]=0);W[c.type]+=1;var g=b.getAmpDoc();a=ra(a,g,d);var k=S(a).hostname;g=JSON.stringify(M({host:k,type:c.type,count:W[c.type],attributes:c}));f.src=a;f.ampLocation=S(a);f.name=g;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);e&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling",
"no");ma(f);f.onload=function(){this.readyState="complete"};f.setAttribute("allow","sync-xhr 'none';");["facebook"].includes("twitter")||sa(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function ra(a,b,c){if(c)var d=null;else if(b=b.getMetaByName("amp-3p-iframe-src")){d=void 0===d?"source":d;L(null!=b,"%s %s must be available",'meta[name="amp-3p-iframe-src"]',d);c=b;"string"==typeof c&&(c=S(c));var e;(e="https:"==c.protocol||"localhost"==c.hostname||"127.0.0.1"==c.hostname)||(c=c.hostname,e=c.length-10,e=0<=e&&c.indexOf(".localhost",e)==e);L(e||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
'meta[name="amp-3p-iframe-src"]',d,b);L(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,b);d=S(b);L("localhost"==d.hostname&&!0||d.origin!=S(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,d.origin,b);d=b+"?2005151844001"}else d=null;d||(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||
"d-"+pa(a),d="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+("."+H.thirdPartyFrameHost+"/2005151844001/frame.html"));return d}function pa(a){if(a.crypto&&a.crypto.getRandomValues){var b=new Uint32Array(2);a.crypto.getRandomValues(b);var c=String(b[0])+b[1]}else c=String(a.Math.random()).substr(2)+"0";return c}
function sa(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c=0;c<b.length;c++){var d=b[c];if(!a.sandbox.supports(d)){K().info("3p-frame","Iframe doesn't support %s",d);return}}a.sandbox=b.join(" ")+" allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts"}};function ta(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function Ba(a,b){var c=b.getAttribute("data-amp-3p-sentinel");a=ta(a,c,!0);for(c=0;c<a.length;c++){var d=a[c];if(d.frame===b){var e=d;break}}e||(e={frame:b,events:Object.create(null)},a.push(e));return e.events}
function Ca(a){for(var b=M({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function Da(a){a.listeningFors||a.addEventListener("message",function(b){if(b.data){var c=Ea(b.data);if(c&&c.sentinel){var d=b.source;var e=ta(a,c.sentinel);if(e){for(var f,g=0;g<e.length;g++){var k=e[g],u=k.frame.contentWindow;if(u){var l;if(!(l=d==u))b:{for(l=d;l&&l!=l.parent;l=l.parent)if(l==u){l=!0;break b}l=!1}if(l){f=k;break}}else setTimeout(Ca,0,e)}d=f?f.events:null}else d=e;var x=d;if(x){var p=x[c.type];if(p)for(p=p.slice(),d=0;d<p.length;d++)(0,p[d])(c,b.source,b.origin,b)}}}})}
function Fa(a,b,c){function d(b,d,e,g){if("amp"==b.sentinel){if(d!=a.contentWindow)return;var l="null"==e&&void 0;if(f!=e&&!l)return}d==a.contentWindow&&("unlisten"==b.sentinel?k():c(b,d,e,g))}var e=a.ownerDocument.defaultView;Da(e);e=Ba(e,a);var f=S(a.src).origin,g=e[b]||(e[b]=[]);g.push(d);var k=function(){if(d){var a=g.indexOf(d);-1<a&&g.splice(a,1);c=g=d=null}}}
function Ea(a){"string"==typeof a&&(a="{"==a.charAt(0)?O(a,function(a){K().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:P(a)?da(a):null);return a};var Ga=['<svg viewBox="0 0 72 72"><path fill=currentColor d="M32.29,44.13c7.55,0,11.67-6.25,11.67-11.67c0-0.18,0-0.35-0.01-0.53c0.8-0.58,1.5-1.3,2.05-2.12\n    c-0.74,0.33-1.53,0.55-2.36,0.65c0.85-0.51,1.5-1.31,1.8-2.27c-0.79,0.47-1.67,0.81-2.61,1c-0.75-0.8-1.82-1.3-3-1.3\n    c-2.27,0-4.1,1.84-4.1,4.1c0,0.32,0.04,0.64,0.11,0.94c-3.41-0.17-6.43-1.8-8.46-4.29c-0.35,0.61-0.56,1.31-0.56,2.06\n    c0,1.42,0.72,2.68,1.83,3.42c-0.67-0.02-1.31-0.21-1.86-0.51c0,0.02,0,0.03,0,0.05c0,1.99,1.41,3.65,3.29,4.02\n    c-0.34,0.09-0.71,0.14-1.08,0.14c-0.26,0-0.52-0.03-0.77-0.07c0.52,1.63,2.04,2.82,3.83,2.85c-1.4,1.1-3.17,1.76-5.1,1.76\n    c-0.33,0-0.66-0.02-0.98-0.06C27.82,43.45,29.97,44.13,32.29,44.13"/></svg>'];
function X(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.o=null;return a}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(z)z(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Ha=Object.getOwnPropertyDescriptor(Y,Z);Ha&&Object.defineProperty(X,Z,Ha)}else X[Z]=Y[Z];X.A=Y.prototype;n=X.prototype;n.buildCallback=function(){this.o=this.getPlaceholder()};
n.preconnectCallback=function(a){var b=ha(this.win,"preconnect"),c=this.getAmpDoc(),d=ra(this.win,c,void 0);b.preload(c,d,"document");b.preload(c,H.thirdParty+"/2005151844001/f.js","script");b.preload(c,"https://platform.twitter.com/widgets.js","script");b.url(c,"https://syndication.twitter.com",a);b.url(c,"https://pbs.twimg.com",a);b.url(c,"https://cdn.syndication.twimg.com",a)};
n.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};n.firstLayoutCompleted=function(){};n.layoutCallback=function(){var a=this,b=qa(this.win,this.element);this.applyFillContent(b);Ia(this);Fa(b,"embed-size",function(b){Ja(a,b.height)});Fa(b,"no-content",function(){Ka(a)});this.element.appendChild(b);this.h=b;return this.loadPromise(b)};
function Ia(a){var b;a.measureMutateElement(function(){b=a.element.getBoundingClientRect().height},function(){a.forceChangeHeight(b)})}function Ja(a,b){a.mutateElement(function(){a.toggleLoading(!1);a.o&&a.togglePlaceholder(!1);a.forceChangeHeight(b)})}function Ka(a){var b=a.getFallback(),c=b||a.o;a.mutateElement(function(){a.toggleLoading(!1);b&&(a.togglePlaceholder(!1),a.toggleFallback(!0));c&&a.forceChangeHeight(c.offsetHeight)})}n.isLoadingReused=function(){return!0};
n.createLoaderLogoCallback=function(){var a=this.element;a=a.ownerDocument||a;U&&U.ownerDocument===a||(U=a.createElement("div"));a=U;a.innerHTML=Ga[0];var b=a.firstElementChild;a.removeChild(b);return{color:"#1DA1F2",content:b}};n.unlayoutOnPause=function(){return!0};n.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}return!0};
n.mutatedAttributesCallback=function(a){this.h&&null!=a["data-tweetid"]&&(this.unlayoutCallback(),this.toggleLoading(!0),this.layoutCallback())};(function(a){a.registerElement("amp-twitter",X)})(self.AMP);
})});

//# sourceMappingURL=amp-twitter-0.1.js.map
