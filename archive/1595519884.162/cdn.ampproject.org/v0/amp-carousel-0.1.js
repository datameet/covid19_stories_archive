(self.AMP=self.AMP||[]).push({n:"amp-carousel",v:"2007172306001",f:(function(AMP,_){
var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ca={a:!0},da={};try{da.__proto__=ca;m=da.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=l;
function p(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ua=b.prototype}var q;function r(){return q?q:q=Promise.resolve(void 0)};function fa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ia(a){return"number"===typeof a&&isFinite(a)};var t=self.AMP_CONFIG||{},ja=("string"==typeof t.cdnProxyRegex?new RegExp(t.cdnProxyRegex):t.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ka(a){if(self.document&&self.document.head&&(!self.location||!ja.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}t.cdnUrl||ka("runtime-host");t.geoApiUrl||ka("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u=self.__AMP_LOG;function v(){if(!u.user)throw Error("failed to call initLogConstructor");return u.user}function w(){if(u.dev)return u.dev;throw Error("failed to call initLogConstructor");}function la(a){v().assert(a,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function ma(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};var na=Object.prototype.hasOwnProperty;function x(a){return a||{}};function y(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};x({c:!0,v:!0,a:!0,ad:!0,action:!0});function z(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],g=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(g){var h=g.getAttribute("content").split(",");for(c=0;c<h.length;c++)-1!=e.indexOf(h[c])&&(b[h[c]]=!0)}}Object.assign(b,oa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var k=a.location.originalHash||a.location.hash;a=Object.create(null);if(k)for(var n;n=ha.exec(k);){var F=fa(n[1],n[1]);n=n[2]?fa(n[2].replace(/\+/g," "),n[2]):"";a[F]=n}for(k=0;k<c.length;k++)F=a["e-"+c[k]],"1"==F&&(b[c[k]]=!0),
"0"==F&&(b[c[k]]=!1)}return b}function oa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){w().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var pa=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function qa(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,e;if(z(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(e=0;e<pa.length;e++){var g=pa[e],h=g.experimentId;na.call(c.__AMP_EXPERIMENT_BRANCHES,h)||(g.isTrafficEligible&&g.isTrafficEligible(c)?!c.__AMP_EXPERIMENT_BRANCHES[h]&&z(c)[h]&&(g=g.branches,c.__AMP_EXPERIMENT_BRANCHES[h]=g[Math.floor(Math.random()*g.length)]||null):c.__AMP_EXPERIMENT_BRANCHES[h]=null)}e="21065002"===(c.__AMP_EXPERIMENT_BRANCHES?
c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else e=!1;var k=e;d&&!k?a=A(b,"action")?B(b,"action"):null:(a=C(a),a=D(a),a=A(a,"action")?B(a,"action"):null);return a}function E(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return B(a,b)}function G(a){var b=C(a);b=D(b);return B(b,"owners")}function C(a){return a.nodeType?E((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function D(a){a=C(a);return a.isSingleDoc()?a.win:a}
function B(a,b){A(a,b);a=H(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ra(a){var b=H(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;B(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function H(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function A(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}
function sa(){var a=new ma,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ta(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function ua(a){return a.closest?a.closest("[i-amphtml-scale-animation]"):ta(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[i-amphtml-scale-animation]"):!1})};function va(a){var b=ra(D(a));if(b)return b;var c=C(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var g={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var h=0;h<b.length;h++){var k=b[h];k=k.getAttribute("custom-element")||k.getAttribute("custom-template");g[k]=!0}g=Object.keys(g)}else g=[];return g.includes("amp-analytics")?E(a,"extensions").waitForExtension(a,"amp-analytics"):r()}).then(function(){var b=c.win;if(b.__AMP_EXTENDED_ELEMENTS&&
b.__AMP_EXTENDED_ELEMENTS["amp-analytics"]){b=D(a);var e=ra(b);e?b=e:(b=H(b),b["amp-analytics-instrumentation"]=sa(),b=b["amp-analytics-instrumentation"].promise)}else b=null;return b})};function I(a){return E(a,"timer")};function J(a,b,c,d){var e=new wa(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function wa(a,b,c,d){this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.y3=this.x3=1}f=wa.prototype;f.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
f.solvePositionFromXValue=function(a){var b=(a-this.x0)/(this.x3-this.x0);if(0>=b)return 0;if(1<=b)return 1;for(var c=0,d=1,e=0,g=0;8>g;g++){e=this.getPointX(b);var h=(this.getPointX(b+1E-6)-e)/1E-6;if(1E-6>Math.abs(e-a))return b;if(1E-6>Math.abs(h))break;else e<a?c=b:d=b,b-=(e-a)/h}for(g=0;1E-6<Math.abs(e-a)&&8>g;g++)e<a?(c=b,b=(b+d)/2):(d=b,b=(b+c)/2),e=this.getPointX(b);return b};
f.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.lerp=function(a,b,c){return a+c*(b-a)};
var xa=J(.25,.1,.25,1),ya=J(.42,0,1,1),za=J(0,0,.58,1),Aa=J(.42,0,.58,1),Ba={linear:function(a){return a},ease:xa,"ease-in":ya,"ease-out":za,"ease-in-out":Aa};function Ca(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return J(b[0],b[1],b[2],b[3])}return null}return Ba[a]}return a};function Da(){}function K(a){this.L=a;this.C=E(self,"vsync");this.ha=null;this.w=[]}function L(a,b,c,d){return(new K(a)).setCurve(d).add(0,b,1).start(c)}K.prototype.setCurve=function(a){a&&(this.ha=Ca(a));return this};K.prototype.add=function(a,b,c,d){this.w.push({delay:a,func:b,duration:c,curve:Ca(d)});return this};K.prototype.start=function(a){return new M(this.C,this.L,this.w,this.ha,a)};
function M(a,b,c,d,e){this.C=a;this.L=b;this.w=[];for(b=0;b<c.length;b++){var g=c[b];this.w.push({delay:g.delay,func:g.func,duration:g.duration,curve:g.curve||d,started:!1,completed:!1})}this.na=e;this.qa=Date.now();this.ca=!0;this.la={};c=new ma;this.ka=c.promise;this.pa=c.resolve;this.oa=c.reject;this.ma=this.C.createAnimTask(this.L,{mutate:this.ra.bind(this)});this.C.canAnimate(this.L)?this.ma(this.la):(w().warn("Animation","cannot animate"),N(this,!1,0))}
M.prototype.then=function(a,b){return a||b?this.ka.then(a,b):this.ka};M.prototype.thenAlways=function(a){a=a||Da;return this.then(a,a)};M.prototype.halt=function(a){N(this,!1,a||0)};
function N(a,b,c){if(a.ca){a.ca=!1;if(0!=c){1<a.w.length&&a.w.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.w.length;c++)a.w[c].func(1,!0);else for(var d=a.w.length-1;0<=d;d--)a.w[d].func(0,!1)}catch(e){w().error("Animation","completion failed: "+e,e),b=!1}}b?a.pa():a.oa()}}
M.prototype.ra=function(){if(this.ca){for(var a=Date.now(),b=Math.min((a-this.qa)/this.na,1),c=0;c<this.w.length;c++){var d=this.w[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.w.length;c++)if(d=this.w[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var g=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=g)try{g=d.curve(e)}catch(h){w().error("Animation","step curve failed: "+h,h);N(this,!1,0);break a}}else g=e=1;1==e&&(d.completed=!0);try{d.func(g,d.completed)}catch(h){w().error("Animation",
"step mutate failed: "+h,h),N(this,!1,0)}}1==b?N(this,!0,0):this.C.canAnimate(this.L)?this.ma(this.la):(w().warn("Animation","cancel animation"),N(this,!1,0))}};function Ea(a){var b=a.documentElement;return["\u26a14email","amp4email"].some(function(a){return b.hasAttribute(a)})};function O(a){a=AMP.BaseElement.call(this,a)||this;a.J=null;a.I=null;a.T=!1;return a}p(O,AMP.BaseElement);f=O.prototype;f.buildCallback=function(){var a=E(this.win,"input");(this.T=Ea(this.element.ownerDocument)||a.isMouseDetected()||this.element.hasAttribute("controls"))&&this.element.classList.add("i-amphtml-carousel-has-controls");this.buildCarousel();this.buildButtons();this.setupGestures();this.setControlsState()};f.viewportCallback=function(a){this.onViewportCallback(a);a&&this.hintControls()};
f.onViewportCallback=function(){};f.buildButton=function(a,b){var c=this.element.ownerDocument.createElement("div");c.tabIndex=0;c.classList.add("amp-carousel-button");c.classList.add(a);c.setAttribute("role",this.buttonsAriaRole());c.onkeydown=function(a){"Enter"!=a.key&&" "!=a.key||a.defaultPrevented||(a.preventDefault(),b())};c.onclick=b;return c};f.buttonsAriaRole=function(){return"button"};
f.buildButtons=function(){var a=this;this.J=this.buildButton("amp-carousel-button-prev",function(){a.interactionPrev()});this.element.appendChild(this.J);this.I=this.buildButton("amp-carousel-button-next",function(){a.interactionNext()});this.updateButtonTitles();this.element.appendChild(this.I)};f.prerenderAllowed=function(){return!0};f.isRelayoutNeeded=function(){return!0};f.buildCarousel=function(){};f.setupGestures=function(){};f.go=function(a,b,c){c=void 0===c?!1:c;this.goCallback(a,b,c)};
f.goCallback=function(){};f.setControlsState=function(){this.J.classList.toggle("amp-disabled",!this.hasPrev());this.J.setAttribute("aria-disabled",!this.hasPrev());this.I.classList.toggle("amp-disabled",!this.hasNext());this.I.setAttribute("aria-disabled",!this.hasNext())};
f.hintControls=function(){var a=this;!this.T&&this.isInViewport()&&this.getVsync().mutate(function(){a.element.classList.add("i-amphtml-carousel-button-start-hint");I(a.win).delay(function(){a.mutateElement(function(){a.element.classList.remove("i-amphtml-carousel-button-start-hint");var b=a.element,c=!a.T,d=b.hasAttribute("i-amphtml-carousel-hide-buttons");c=void 0!==c?c:!d;c!==d&&(c?b.setAttribute("i-amphtml-carousel-hide-buttons",""):b.removeAttribute("i-amphtml-carousel-hide-buttons"))})},4E3)})};
f.updateButtonTitles=function(){this.I.title=this.getNextButtonTitle();this.J.title=this.getPrevButtonTitle()};f.getNextButtonTitle=function(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"};f.getPrevButtonTitle=function(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"};f.unlayoutCallback=function(){return!0};f.hasPrev=function(){};f.hasNext=function(){};
f.interactionNext=function(){this.I.classList.contains("amp-disabled")||this.go(1,!0,!1)};f.interactionPrev=function(){this.J.classList.contains("amp-disabled")||this.go(-1,!0,!1)};var P,Fa="Webkit webkit Moz moz ms O o".split(" ");function Ga(a,b){if(y(b,"--"))return b;P||(P=Object.create(null));var c=P[b];if(!c){c=b;if(void 0===a[b]){var d=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var e=0;e<Fa.length;e++){var g=Fa[e]+d;if(void 0!==a[g]){d=g;break a}}d=""}var h=d;void 0!==a[h]&&(c=h)}P[b]=c}return c}function Ha(a,b){var c=Ga(a.style,"order");c&&(y(c,"--")?a.style.setProperty(c,b):a.style[c]=b)}
function Ia(a){var b=Ga(a.style,"scrollSnapType");if(b)return y(b,"--")?a.style.getPropertyValue(b):a.style[b]};var Q;function Ja(a,b,c){var d={passive:!0},e=Ka(),g=!1;d&&(g=d.capture);a.addEventListener(b,function(a){try{return c(a)}catch(k){throw self.__AMP_REPORT_ERROR(k),k;}},e?d:g)}function Ka(){if(void 0!==Q)return Q;Q=!1;try{var a={get capture(){Q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return Q};function R(a,b,c){Ja(a,b,c)};function S(a,b){return function(c){return a+(b-a)*c}};function T(a){a=O.call(this,a)||this;a.m=0;a.ba=0;a.F=null;a.A=null;a.ea=null;return a}p(T,O);f=T.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a};
f.buildCarousel=function(){var a=this;this.F=this.getRealChildren();this.A=this.element.ownerDocument.createElement("div");this.A.classList.add("i-amphtml-scrollable-carousel-container");this.A.setAttribute("tabindex","-1");this.element.appendChild(this.A);this.F.forEach(function(b){G(a.element).setOwner(b,a.element);b.classList.add("amp-carousel-slide");b.classList.add("amp-scrollable-carousel-slide");a.A.appendChild(b)});this.W();this.A.addEventListener("scroll",this.da.bind(this));this.A.addEventListener("keydown",
this.$.bind(this));this.registerAction("goToSlide",function(b){var c=b.args;c&&(c=parseInt(c.index,10),La(a,c))},1);qa(this.element).addToAllowlist("amp-carousel","goToSlide",["email"])};f.buttonsAriaRole=function(){return"presentation"};f.layoutCallback=function(){Ma(this,this.m);Na(this,this.m,1);this.setControlsState();return r()};f.onViewportCallback=function(){Oa(this,this.m,this.m)};
f.goCallback=function(a,b){var c=this,d=Pa(this,this.m,a),e=this.m;if(d!=e)if(b){var g=S(e,d);L(this.element,function(a){c.A.scrollLeft=g(a)},200,"ease-in-out").thenAlways(function(){U(c,d)})}else U(this,d),this.A.scrollLeft=d};
function La(a,b){var c=a.F.length;if(!isFinite(b)||0>b||b>=c)a.user().error("amp-scrollable-carousel","Invalid [slide] value: %s",b),r();else{var d=a.m,e=d;a.measureMutateElement(function(){e=a.F[b].offsetLeft-(a.element.offsetWidth-a.F[b].offsetWidth)/2},function(){if(e!=d){var b=S(d,e);L(a.element,function(c){a.A.scrollLeft=b(c)},200,"ease-in-out").thenAlways(function(){U(a,e)})}})}}f.da=function(){var a=this.A.scrollLeft;this.m=a;null===this.ea&&Qa(this,a)};
f.$=function(a){var b=a.key;"ArrowLeft"!=b&&"ArrowRight"!=b||a.stopPropagation()};function Qa(a,b){a.ea=I(a.win).delay(function(){30>Math.abs(b-a.m)?(w().fine("amp-scrollable-carousel","slow scrolling: %s - %s",b,a.m),a.ea=null,U(a,a.m)):(w().fine("amp-scrollable-carousel","fast scrolling: %s - %s",b,a.m),Qa(a,a.m))},100)}function U(a,b){Oa(a,b,a.ba);Ma(a,b);Na(a,b,Math.sign(b-a.ba));a.ba=b;a.m=b;a.setControlsState()}
function Pa(a,b,c){var d=a.element.offsetWidth,e=a.A.scrollWidth;a=b+c*d;return 0>a?0:e>=d&&a>e-d?e-d:a}function V(a,b,c){for(var d=a.element.getLayoutWidth(),e=0;e<a.F.length;e++){var g=a.F[e];g.offsetLeft+g.offsetWidth>=b&&g.offsetLeft<=b+d&&c(g)}}function Ma(a,b){V(a,b,function(b){G(a.element).scheduleLayout(a.element,b)})}function Na(a,b,c){var d=Pa(a,b,c);d!=b&&V(a,d,function(b){G(a.element).schedulePreload(a.element,b)})}
function Oa(a,b,c){var d=[];V(a,b,function(b){d.push(b);G(a.element).updateInViewport(a.element,b,!0)});c!=b&&V(a,c,function(b){if(!d.includes(b)){var c=G(a.element);c.updateInViewport(a.element,b,!1);c.schedulePause(a.element,b)}})}f.hasPrev=function(){return 0!=this.m};f.hasNext=function(){var a=this.element.getLayoutWidth();return this.m!=Math.max(this.A.scrollWidth-a,0)};f.W=function(){R(this.element,"touchmove",function(a){return a.stopPropagation()})};function W(a){a=O.call(this,a)||this;a.P=null;a.N=!1;a.aa=!1;a.G=!1;a.ga=5E3;a.H=null;a.ja=0;a.shouldLoop=!1;a.B=!1;return a}p(W,O);f=W.prototype;
f.buildCarousel=function(){var a=this;this.N=this.element.hasAttribute("loop");this.G=this.element.hasAttribute("autoplay");var b=this.element.getAttribute("autoplay");b&&(this.H=parseInt(b,10),la(ia(this.H)));this.buildSlides();this.shouldLoop=this.N&&this.isLoopingEligible();(this.B=this.G&&this.isLoopingEligible())&&0!=this.H&&Ra(this);this.registerAction("toggleAutoplay",function(b){(b=b.args)&&void 0!==b.toggleOn?Sa(a,b.toggleOn):Sa(a,!a.G)},1)};f.buildSlides=function(){};
f.onViewportCallback=function(a){this.updateViewportState(a);a?X(this):this.clearAutoplay()};f.goCallback=function(a,b,c){this.moveSlide(a,b,c?1:3);c?X(this):this.clearAutoplay()};f.moveSlide=function(){};f.updateViewportState=function(){};f.isLoopingEligible=function(){return!1};function Ra(a){var b=Number(a.element.getAttribute("delay"));0<b&&(a.ga=Math.max(1E3,b));a.N||(a.element.setAttribute("loop",""),a.aa=!0,a.N=!0,a.shouldLoop=!0)}
function X(a){a.B&&0!=a.H&&(a.clearAutoplay(),a.P=I(a.win).delay(a.go.bind(a,1,!0,!0),a.ga))}function Sa(a,b){if(b!=a.B){var c=a.B;a.G=b;a.B=a.G&&a.isLoopingEligible();!c&&a.B&&Ra(a);a.B?X(a):a.clearAutoplay()}}f.clearAutoplay=function(){null!==this.P&&(I(this.win).cancel(this.P),this.P=null)};f.removeAutoplay=function(){this.clearAutoplay();this.aa&&(this.element.removeAttribute("loop"),this.shouldLoop=this.N=this.aa=!1);this.B=this.G=!1};function Y(a,b,c){c=void 0===c?{}:c;var d=void 0===d?!0:d;va(a).then(function(e){e&&e.triggerEventForTarget(a,b,c,d)})};function Ta(a){a=W.call(this,a)||this;a.C=null;a.O=!1;a.o=[];a.j=0;a.l=null;a.K=[];a.U=!1;a.S=null;a.Z=!1;a.M=0;a.h=null;a.ia=0;a.D=0;a.R=0;a.X=[];var b=E(a.win,"platform");a.Y=b.isIos();a.V=null;a.fa=y(E(a.win,"platform").getIosVersionString(),"10.3")?!0:a.Y?!1:!z(a.win)["amp-carousel-chrome-scroll-snap"];return a}p(Ta,W);f=Ta.prototype;f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
f.buildSlides=function(){var a=this;this.C=this.getVsync();this.V=qa(this.element);this.V.addToAllowlist("AMP-CAROUSEL","goToSlide",["email"]);this.O=void 0!=Ia(this.element);this.fa&&(this.O=!1);this.element.classList.add("i-amphtml-slidescroll");this.o=this.getRealChildren();this.j=this.o.length;this.l=this.win.document.createElement("div");this.l.setAttribute("tabindex","-1");this.l.classList.add("i-amphtml-slides-container");this.l.setAttribute("aria-live","polite");this.fa&&this.l.classList.add("i-amphtml-slidescroll-no-snap");
if(this.O){var b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-start-marker");this.l.appendChild(b);b=this.win.document.createElement("div");b.classList.add("i-amphtml-carousel-end-marker");this.l.appendChild(b)}this.element.appendChild(this.l);this.o.forEach(function(b,d){a.X.push(b.getAttribute("data-slide-id")||d.toString());G(a.element).setOwner(b,a.element);b.classList.add("amp-carousel-slide");var c=a.win.document.createElement("div");c.classList.add("i-amphtml-slide-item");
a.l.appendChild(c);c.appendChild(b);a.K.push(c)});this.W();this.l.addEventListener("scroll",this.da.bind(this));this.l.addEventListener("keydown",this.$.bind(this));R(this.l,"touchmove",this.ta.bind(this));R(this.l,"touchend",this.sa.bind(this));this.registerAction("goToSlide",function(b){(b=b.args)&&a.goToSlide(b.index,3)},1)};f.isLoopingEligible=function(){return 1<this.j};f.mutatedAttributesCallback=function(a){var b=a.slide;void 0!==b&&this.goToSlide(b,3)};
f.ta=function(){this.clearAutoplay();this.Z=!0};function Ua(a,b){a.S&&I(a.win).cancel(a.S);a.S=I(a.win).delay(function(){a.S=null;if(!a.U&&!a.Z){var b=a.l.scrollLeft;a.O?Va(a,b,1):Z(a,b,void 0,1)}},b)}f.sa=function(){var a=this.fa?45:100;this.Z=!1;Ua(this,a)};f.onLayoutMeasure=function(){this.D=this.element.getLayoutWidth()};
f.layoutCallback=function(){if(ua(this.element))return r();if(null===this.h)Wa(this,this.ia);else{var a=v().assertNumber(this.h,"E#19457 this.slideIndex_"),b=Xa(this,a);G(this.element).scheduleLayout(this.element,this.o[a]);this.R=this.l.scrollLeft=b}return r()};f.unlayoutCallback=function(){this.h=null;return W.prototype.unlayoutCallback.call(this)};
f.updateViewportState=function(a){null!==this.h&&G(this.element).updateInViewport(this.element,this.o[v().assertNumber(this.h,"E#19457 this.slideIndex_")],a)};f.hasPrev=function(){return this.shouldLoop||0<this.h};f.hasNext=function(){return this.shouldLoop||this.h<this.o.length-1};f.moveSlide=function(a,b,c){if(null!==this.h){var d=this.hasNext(),e=this.hasPrev();if(1==a&&d||-1==a&&e){var g=this.h+a;-1==g?g=this.j-1:g>=this.j&&(g=0);b?Z(this,1!=a||e?this.D:0,a,c):Ya(this,g,c)}}};
f.da=function(){var a=this.l.scrollLeft;this.Y||Za(this,a);Ua(this,this.O?200:this.Y?45:100);this.R=a};f.$=function(a){var b=a.key;"ArrowLeft"!=b&&"ArrowRight"!=b||a.stopPropagation()};function Za(a,b){var c=a.l.scrollWidth;-1==a.M&&b>=a.R?Z(a,b).then(function(){a.M=0}):1==a.M&&b<=a.R?Z(a,b).then(function(){a.M=0}):a.M=0>b?-1:b+a.D>c?1:0}
function Z(a,b,c,d){a.U=!0;var e=$a(a,b)-a.h,g=a.hasPrev(),h=g?a.D:0;0!=e||1!=c&&-1!=c||(e=c);if(1==e||-1!=e&&e==-1*(a.j-1))h=g?2*a.D:a.D;else if(-1==e||e==a.j-1)h=0;return ab(a,b,h).then(function(){Va(a,h,d)})}function $a(a,b){var c=Math.round(b/a.D),d=0;b=a.hasPrev();var e=a.hasNext();b&&e?d=c-1:e?d=c:b&&(d=c-1);b=a.h+d;return b=a.shouldLoop?0>b?a.j-1:b>=a.j?0:b:0>b?0:b>=a.j?a.j-1:b}
function bb(a,b){var c=String(b+1),d=String(a.j);return" "+(a.element.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",c).replace("%s",d)}f.getPrevButtonTitle=function(){var a=this.h;a=0<=a-1?a-1:this.shouldLoop?this.j-1:null;a=null==a?0:a;return W.prototype.getPrevButtonTitle.call(this)+bb(this,a)};f.getNextButtonTitle=function(){var a=this.h;a=a+1<this.j?a+1:this.shouldLoop?0:null;a=null==a?this.j-1:a;return W.prototype.getNextButtonTitle.call(this)+bb(this,a)};
function Va(a,b,c){if(ia(b)&&null!==a.h){a.U=!0;var d=$a(a,b);a.C.mutate(function(){Ya(a,d,c);a.C.mutate(function(){a.U=!1})})}}f.goToSlide=function(a,b){var c=parseInt(a,10);!isFinite(c)||0>c||c>=this.j?this.user().error("AMP-CAROUSEL","Invalid [slide] value: ",a):null===this.h?this.ia=c:Ya(this,c,b)};
function Wa(a,b){var c=a.j;if(0>b||b>=c||a.h==b)return!1;var d=0<=b-1?b-1:a.shouldLoop?a.j-1:null,e=b+1<a.j?b+1:a.shouldLoop?0:null,g=[];null!=d&&g.push(d);g.push(b);null!=e&&e!==d&&g.push(e);null!==a.h&&G(a.element).updateInViewport(a.element,a.o[v().assertNumber(a.h,"E#19457 this.slideIndex_")],!1);var h=a.o[b];if(void 0===h)return w().error("AMP-CAROUSEL","Attempting to access a non-existant slide %s / %s",b,c),!1;G(a.element).updateInViewport(a.element,h,!0);g.forEach(function(c,d){a.shouldLoop&&
Ha(a.K[c],d+1);a.K[c].classList.add("i-amphtml-slide-item-show");var e=G(a.element);c==b?(e.scheduleLayout(a.element,a.o[c]),e.scheduleResume(a.element,a.o[c]),a.o[c].setAttribute("aria-hidden","false")):(e.schedulePreload(a.element,a.o[c]),a.o[c].setAttribute("aria-hidden","true"))});a.l.scrollLeft=Xa(a,b);cb(a,b);a.h=b;a.H&&a.h===a.j-1&&(a.ja++,a.ja==a.H&&a.removeAutoplay());db(a,g);a.setControlsState();a.updateButtonTitles();return!0}
function Ya(a,b,c){c=void 0===c?1:c;if(Wa(a,b)){var d=a.win;var e=x({index:b});var g={detail:e};Object.assign(g,void 0);"function"==typeof d.CustomEvent?e=new d.CustomEvent("slidescroll.slideChange",g):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent("slidescroll.slideChange",!!g.bubbles,!!g.cancelable,e),e=d);a.V.trigger(a.element,"slideChange",e,c);a.element.dispatchCustomEvent("slideChange",{index:b,actionTrust:c})}}
function Xa(a,b){var c=a.D;if(!a.shouldLoop&&0==b||1>=a.o.length)c=0;return c}function db(a,b){for(var c=a.j,d=0;d<c;d++)a.K[d].classList.contains("i-amphtml-slide-item-show")&&(b.includes(d)||(a.shouldLoop&&Ha(a.K[d],""),a.K[d].classList.remove("i-amphtml-slide-item-show"),a.o[d].removeAttribute("aria-hidden")),a.h!=d&&G(a.element).schedulePause(a.element,a.o[d]))}function ab(a,b,c){if(b==c)return r();var d=S(b,c);c=J(.8,0,.6,1);return L(a.l,function(b){a.l.scrollLeft=d(b)},80,c).thenAlways()}
f.W=function(){R(this.element,"touchmove",function(a){return a.stopPropagation()})};function cb(a,b){var c=b-a.h;if(0!=c){1!==Math.abs(c)&&(c=0>c?1:-1,null===a.h&&(c=1));var d=x({fromSlide:null===a.h?"null":a.X[a.h],toSlide:a.X[b]});Y(a.element,"amp-carousel-change",d);1==c?Y(a.element,"amp-carousel-next",d):Y(a.element,"amp-carousel-prev",d)}};function eb(){return AMP.BaseElement.apply(this,arguments)||this}p(eb,AMP.BaseElement);eb.prototype.upgradeCallback=function(){return"slides"==this.element.getAttribute("type")?new Ta(this.element):new T(this.element)};(function(a){a.registerElement("amp-carousel",eb,".amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,0.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-mode-mouse .amp-carousel-button,amp-carousel.i-amphtml-carousel-has-controls .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;opacity:0;visibility:hidden}amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-next,amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-carousel-0.1.js.map
