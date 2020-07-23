(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function m(a,b){if(b){for(var c=ca,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
var da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var ea={u:!0},fa={};try{fa.__proto__=ea;q=fa.u;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=p;
function r(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
function ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
m("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
m("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ia(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&h<e;)if(d[h++]!=b[k++])return!1;return k>=f}});
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
m("Object.assign",function(a){return a||ja});
var t=this||self;function u(a){a=a.split(".");for(var b=t,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function w(){}
function ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function la(a){var b=ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function x(a){return"function"==ka(a)}
function ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=na:y=oa;return y.apply(null,arguments)}
var pa=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=t;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function qa(a,b){function c(){}
c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function A(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
qa(A,Error);A.prototype.name="CustomError";var ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},sa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
B(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ta(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(la(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
;function ua(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function va(a,b){var c=la(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function wa(){var a=xa,b={},c;for(c in a)b[c]=a[c];return b}
var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var C;a:{var Aa=t.navigator;if(Aa){var Ba=Aa.userAgent;if(Ba){C=Ba;break a}}C=""};function Ca(){}
;var D=window;function E(a,b){this.width=a;this.height=b}
E.prototype.aspectRatio=function(){return this.width/this.height};
E.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
E.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
E.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Da(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
;var Ea=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function F(a){return a.match(Ea)}
function G(a){return a?decodeURI(a):a}
function Fa(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Fa(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ga(a){var b=[],c;for(c in a)Fa(c,a[c],b);return b.join("&")}
;function Ha(a){var b=Ia;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Ja(){var a=[];Ha(function(b){a.push(b)});
return a}
var Ia={F:"allow-forms",G:"allow-modals",H:"allow-orientation-lock",I:"allow-pointer-lock",J:"allow-popups",K:"allow-popups-to-escape-sandbox",L:"allow-presentation",M:"allow-same-origin",N:"allow-scripts",O:"allow-top-navigation",P:"allow-top-navigation-by-user-activation"},Ka=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Ja()});
function La(){var a=Da(),b={};B(Ka(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var Ma=(new Date).getTime();function H(){this.b=[];this.a=-1}
H.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.b[a]!=b&&(this.b[a]=b,this.a=-1)};
H.prototype.get=function(a){return!!this.b[a]};
function Na(a){-1==a.a&&(a.a=sa(a.b,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.a}
;function I(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
I.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};
function Oa(a,b){a.g(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)}
;function Pa(a){t.setTimeout(function(){throw a;},0)}
var J;function Qa(){var a=t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==C.indexOf("Presto")&&(a=function(){var e=Da();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var h="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(g){if(("*"==k||g.origin==k)&&g.data==h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,k)}}});
if("undefined"!==typeof a&&-1==C.indexOf("Trident")&&-1==C.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.j;c.j=null;e()}};
return function(e){d.next={j:e};d=d.next;b.port2.postMessage(0)}}return function(e){t.setTimeout(e,0)}}
;function K(){this.b=this.a=null}
var Ra=new I(function(){return new L},function(a){a.reset()});
K.prototype.add=function(a,b){var c=Ra.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
K.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function L(){this.next=this.b=this.a=null}
L.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
L.prototype.reset=function(){this.next=this.b=this.a=null};function M(a,b){N||Sa();O||(N(),O=!0);Ta.add(a,b)}
var N;function Sa(){if(t.Promise&&t.Promise.resolve){var a=t.Promise.resolve(void 0);N=function(){a.then(Ua)}}else N=function(){var b=Ua,c;
!(c=!x(t.setImmediate))&&(c=t.Window&&t.Window.prototype)&&(c=-1==C.indexOf("Edge")&&t.Window.prototype.setImmediate==t.setImmediate);c?(J||(J=Qa()),J(b)):t.setImmediate(b)}}
var O=!1,Ta=new K;function Ua(){for(var a;a=Ta.remove();){try{a.a.call(a.b)}catch(b){Pa(b)}Oa(Ra,a)}O=!1}
;function Va(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function P(a){this.a=0;this.l=void 0;this.g=this.b=this.f=null;this.h=this.i=!1;if(a!=w)try{var b=this;a.call(void 0,function(c){Q(b,2,c)},function(c){Q(b,3,c)})}catch(c){Q(this,3,c)}}
function Wa(){this.next=this.context=this.b=this.f=this.a=null;this.g=!1}
Wa.prototype.reset=function(){this.context=this.b=this.f=this.a=null;this.g=!1};
var Xa=new I(function(){return new Wa},function(a){a.reset()});
function Ya(a,b,c){var d=Xa.get();d.f=a;d.b=b;d.context=c;return d}
function Za(a){return new P(function(b,c){c(a)})}
P.prototype.then=function(a,b,c){return $a(this,x(a)?a:null,x(b)?b:null,c)};
P.prototype.$goog_Thenable=!0;function R(a,b){return $a(a,null,b,void 0)}
P.prototype.cancel=function(a){if(0==this.a){var b=new S(a);M(function(){ab(this,b)},this)}};
function ab(a,b){if(0==a.a)if(a.f){var c=a.f;if(c.b){for(var d=0,e=null,f=null,h=c.b;h&&(h.g||(d++,h.a==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.a&&1==d?ab(c,b):(f?(d=f,d.next==c.g&&(c.g=d),d.next=d.next.next):bb(c),cb(c,e,3,b)))}a.f=null}else Q(a,3,b)}
function db(a,b){a.b||2!=a.a&&3!=a.a||eb(a);a.g?a.g.next=b:a.b=b;a.g=b}
function $a(a,b,c,d){var e=Ya(null,null,null);e.a=new P(function(f,h){e.f=b?function(k){try{var g=b.call(d,k);f(g)}catch(l){h(l)}}:f;
e.b=c?function(k){try{var g=c.call(d,k);void 0===g&&k instanceof S?h(k):f(g)}catch(l){h(l)}}:h});
e.a.f=a;db(a,e);return e.a}
P.prototype.A=function(a){this.a=0;Q(this,2,a)};
P.prototype.D=function(a){this.a=0;Q(this,3,a)};
function Q(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.A,f=a.D;if(d instanceof P){db(d,Ya(e||w,f||null,a));var h=!0}else if(Va(d))d.then(e,f,a),h=!0;else{if(ma(d))try{var k=d.then;if(x(k)){fb(d,k,e,f,a);h=!0;break a}}catch(g){f.call(a,g);h=!0;break a}h=!1}}h||(a.l=c,a.a=b,a.f=null,eb(a),3!=b||c instanceof S||gb(a,c))}}
function fb(a,b,c,d,e){function f(g){k||(k=!0,d.call(e,g))}
function h(g){k||(k=!0,c.call(e,g))}
var k=!1;try{b.call(a,h,f)}catch(g){f(g)}}
function eb(a){a.i||(a.i=!0,M(a.v,a))}
function bb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.g=null);return b}
P.prototype.v=function(){for(var a;a=bb(this);)cb(this,a,this.a,this.l);this.i=!1};
function cb(a,b,c,d){if(3==c&&b.b&&!b.g)for(;a&&a.h;a=a.f)a.h=!1;if(b.a)b.a.f=null,hb(b,c,d);else try{b.g?b.f.call(b.context):hb(b,c,d)}catch(e){ib.call(null,e)}Oa(Xa,b)}
function hb(a,b,c){2==b?a.f.call(a.context,c):a.b&&a.b.call(a.context,c)}
function gb(a,b){a.h=!0;M(function(){a.h&&ib.call(null,b)})}
var ib=Pa;function S(a){A.call(this,a)}
qa(S,A);S.prototype.name="cancel";function jb(a){z("yt.ads.biscotti.lastId_",a)}
;var T=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",T);function kb(a){var b=arguments;1<b.length?T[b[0]]=b[1]:1===b.length&&Object.assign(T,b[0])}
function U(a,b){return a in T?T[a]:b}
;var lb=[];function mb(a){lb.forEach(function(b){return b(a)})}
function nb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ob(b),mb(b)}}:a}
function ob(a){var b=u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=U("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),kb("ERRORS",b))}
;function pb(a){var b=[];ua(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];B(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
function qb(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),h=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?ta(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(g){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};ob(k)}}}return b}
function rb(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=qb(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Ga(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;function sb(a){var b=tb;a=void 0===a?u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(ub(b),vb(b));b.ca_type="image";a&&(b.bid=a);return b}
function ub(a){var b={};b.dt=Ma;b.flash="0";a:{try{var c=a.a.top.location.href}catch(f){a=2;break a}a=c?c===a.b.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?D:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!D.navigator&&"unknown"!==typeof D.navigator.javaEnabled&&!!D.navigator.javaEnabled&&D.navigator.javaEnabled();D.screen&&(b.u_h=D.screen.height,b.u_w=D.screen.width,b.u_ah=D.screen.availHeight,b.u_aw=D.screen.availWidth,b.u_cd=D.screen.colorDepth);
D.navigator&&D.navigator.plugins&&(b.u_nplug=D.navigator.plugins.length);D.navigator&&D.navigator.mimeTypes&&(b.u_nmime=D.navigator.mimeTypes.length);return b}
function vb(a){var b=a.a;try{var c=b.screenX;var d=b.screenY}catch(v){}try{var e=b.outerWidth;var f=b.outerHeight}catch(v){}try{var h=b.innerWidth;var k=b.innerHeight}catch(v){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,k];c=a.a.top;try{var g=(c||window).document,l="CSS1Compat"==g.compatMode?g.documentElement:g.body;var n=(new E(l.clientWidth,l.clientHeight)).round()}catch(v){n=new E(-12245933,-12245933)}g=n;n={};l=new H;t.SVGElement&&
t.document.createElementNS&&l.set(0);c=La();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);t.crypto&&t.crypto.subtle&&l.set(3);t.TextDecoder&&t.TextEncoder&&l.set(4);l=Na(l);n.bc=l;n.bih=g.height;n.biw=g.width;n.brdim=b.join();a=a.b;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!D.WebGLRenderingContext,n}
var tb=new function(){var a=window.document;this.a=window;this.b=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return pb(sb(a))});pa();function wb(a){var b=U("EXPERIMENTS_FORCED_FLAGS",{});a=void 0!==b[a]?b[a]:U("EXPERIMENT_FLAGS",{})[a];return"string"===typeof a&&"false"===a?!1:!!a}
;var xb=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function yb(){if(!xb)return null;var a=xb();return"open"in a?a:null}
function zb(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ab(a,b){x(a)&&(a=nb(a));return window.setTimeout(a,b)}
;var Bb={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Cb="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Db=!1;
function Eb(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=F(a)[1]||null,e=G(F(a)[3]||null);d&&e?(d=c,c=F(a),d=F(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?G(F(c)[3]||null)==e&&(Number(F(c)[4]||null)||null)==(Number(F(a)[4]||null)||null):!0;d=wb("web_ajax_ignore_global_headers_if_set");for(var f in Bb)e=U(Bb[f]),!e||!c&&!V(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||V(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||V(a,"X-YouTube-Time-Zone"))&&(f=
"undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||V(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=pb(sb(void 0));return b}
function Fb(a){var b=window.location.search,c=G(F(a)[3]||null),d=G(F(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=qb(b),f={};B(Cb,function(h){e[h]&&(f[h]=e[h])});
return rb(a,f||{},!1)}
function V(a,b){var c=U("CORS_HEADER_WHITELIST")||{},d=G(F(a)[3]||null);return d?(c=c[d])?0<=ra(c,b):!1:!0}
function Gb(a){var b=a.format||"JSON";var c=Hb("//googleads.g.doubleclick.net/pagead/id",a);var d=Ib(c,a),e=!1,f=Jb(c,function(g){if(!e){e=!0;k&&window.clearTimeout(k);var l=zb(g),n=null,v=400<=g.status&&500>g.status,Vb=500<=g.status&&600>g.status;if(l||v||Vb)n=Kb(b,g,a.R);if(l)a:if(g&&204==g.status)l=!0;else{switch(b){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};v=a.context||t;l?a.m&&a.m.call(v,g,n):a.onError&&a.onError.call(v,g,n);a.B&&a.B.call(v,g,
n)}},a.method,d,a.headers,a.responseType,a.withCredentials);
if(a.o&&0<a.timeout){var h=a.o;var k=Ab(function(){e||(e=!0,f.abort(),window.clearTimeout(k),h.call(a.context||t,f))},a.timeout)}return f}
function Hb(a,b){b.T&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=U("XSRF_FIELD_NAME",void 0),d=b.V;d&&(d[c]&&delete d[c],a=rb(a,d||{},!0));return a}
function Ib(a,b){var c=U("XSRF_FIELD_NAME",void 0),d=U("XSRF_TOKEN",void 0),e=b.U||"",f=b.s,h=U("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.S||G(F(a)[3]||null)&&!b.withCredentials&&G(F(a)[3]||null)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.s&&b.s[h]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=qb(e),za(e,f),e=b.C&&"JSON"==b.C?JSON.stringify(e):Ga(e));if(!(c=e)&&(c=f)){a:{for(var g in f){f=!1;break a}f=!0}c=!f}!Db&&c&&"POST"!=
b.method&&(Db=!0,ob(Error("AJAX request with postData should use POST")));return e}
function Kb(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Lb(b):null)d={},B(b.getElementsByTagName("*"),function(e){d[e.tagName]=Mb(e)})}c&&Nb(d);
return d}
function Nb(a){if(ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=new Ca:Nb(a[b])}}
function Lb(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Mb(a){var b="";B(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Jb(a,b,c,d,e,f,h){function k(){4==(g&&"readyState"in g?g.readyState:0)&&b&&nb(b)(g)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var g=yb();if(!g)return null;"onloadend"in g?g.addEventListener("loadend",k,!1):g.onreadystatechange=k;wb("debug_forward_web_query_parameters")&&(a=Fb(a));g.open(c,a,!0);f&&(g.responseType=f);h&&(g.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Eb(a,e))for(var l in e)g.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");g.send(d);
return g}
;function Ob(){var a=wa(),b;return R(new P(function(c,d){a.m=function(e){zb(e)?c(e):d(new W("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new W("Unknown request error","net.unknown",e))};
a.o=function(e){d(new W("Request timed out","net.timeout",e))};
b=Gb(a)}),function(c){c instanceof S&&b.abort();
return Za(c)})}
function W(a,b){A.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
r(W,A);function X(){this.a=0;this.b=null}
X.prototype.then=function(a,b,c){return 1===this.a&&a?(a=a.call(c,this.b),Va(a)?a:Pb(a)):2===this.a&&b?(a=b.call(c,this.b),Va(a)?a:Qb(a)):this};
X.prototype.$goog_Thenable=!0;function Qb(a){var b=new X;a=void 0===a?null:a;b.a=2;b.b=void 0===a?null:a;return b}
function Pb(a){var b=new X;a=void 0===a?null:a;b.a=1;b.b=void 0===a?null:a;return b}
;function Rb(a){A.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Y;this.isTimeout=a instanceof W&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof S}
r(Rb,A);Rb.prototype.name="BiscottiError";function Y(){A.call(this,"Biscotti ID is missing from server")}
r(Y,A);Y.prototype.name="BiscottiMissingError";var xa={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Z=null;function Sb(){if("1"===va(U("PLAYER_CONFIG",{}),"args","privembed"))return Za(Error("Biscotti ID is not available in private embed mode"));Z||(Z=R(Ob().then(Tb),function(a){return Ub(2,a)}));
return Z}
function Tb(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Y;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Y;a=a.id;jb(a);Z=Pb(a);Wb(18E5,2);return a}
function Ub(a,b){var c=new Rb(b);jb("");Z=Qb(c);0<a&&Wb(12E4,a-1);throw c;}
function Wb(a,b){Ab(function(){R(Ob().then(Tb,function(c){return Ub(b,c)}),w)},a)}
;u("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",Sb);var Xb;try{var Yb=u("yt.ads.biscotti.getId_");Xb=Yb?Yb():Sb()}catch(a){Xb=Za(a)}R(Xb,w);}).call(this);
