(self.AMP=self.AMP||[]).push({n:"amp-position-observer",v:"2005151844001",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var m;a:{var ba={a:!0},n={};try{n.__proto__=ba;m=n.a;break a}catch(a){}m=!1}k=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=k;function q(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var r=self.AMP_CONFIG||{},da=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function t(a){if(self.document&&self.document.head&&(!self.location||!da.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}r.cdnUrl||t("runtime-host");r.geoApiUrl||t("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u=self.__AMP_LOG;function v(){if(!u.user)throw Error("failed to call initLogConstructor");return u.user}function x(){if(u.dev)return u.dev;throw Error("failed to call initLogConstructor");}function y(a,b,c){return v().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var z=Object.prototype.hasOwnProperty;function A(a){return a||{}};A({c:!0,v:!0,a:!0,ad:!0,action:!0});function B(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var g=f.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=e.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,ea(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var h=a.location.originalHash||a.location.hash;a=Object.create(null);if(h)for(var l;l=ca.exec(h);){var w=q(l[1],l[1]);l=l[2]?q(l[2].replace(/\+/g," "),l[2]):"";a[w]=l}for(h=0;h<c.length;h++)w=a["e-"+c[h]],"1"==w&&(b[c[h]]=!0),"0"==
w&&(b[c[h]]=!1)}return b}function ea(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){x().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var C={},D=(C["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},C);function fa(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c;if(B(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(f in D)if(z.call(D,f)&&!z.call(c.__AMP_EXPERIMENT_BRANCHES,f))if(D[f].isTrafficEligible&&D[f].isTrafficEligible(c)){var e;if(e=!c.__AMP_EXPERIMENT_BRANCHES[f])e=f,e=!!B(c)[e];e&&(e=D[f].branches,c.__AMP_EXPERIMENT_BRANCHES[f]=e[Math.floor(Math.random()*e.length)]||null)}else c.__AMP_EXPERIMENT_BRANCHES[f]=null;var f="21065002"===
(c.__AMP_EXPERIMENT_BRANCHES?c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else f=!1;var g=f;d&&!g?a=E(b,"action")?F(b,"action"):null:(a=G(a),a=H(a),a=E(a,"action")?F(a,"action"):null);return a}function ha(a){var b=I,c=G(a),d=H(c),e=J(d),f=e["position-observer"];f||(f=e["position-observer"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});f.ctor||f.obj||(f.ctor=b,f.context=c,f.resolve&&F(d,"position-observer"))}
function K(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function L(a,b){var c=G(a);c=H(c);return F(c,b)}function G(a){return a.nodeType?K((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}function F(a,b){E(a,b);a=J(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function J(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}
function E(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};function M(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function N(a,b){return a.top<b.top?"top":a.bottom>b.bottom?"bottom":"inside"}function O(a,b){return a&&b?a.left==b.left&&a.top==b.top&&a.width==b.width&&a.height==b.height:!1};function P(a,b,c,d){this.element=b;this.P=d;this.fidelity=c;this.turn=0==c?Math.floor(4*Math.random()):0;this.B=null;this.j=L(a,"viewport")}
P.prototype.update=function(a){var b=this;if(!a){if(0!=this.turn){this.turn--;return}0==this.fidelity&&(this.turn=4)}var c=this.j.getSize(),d=M(0,0,c.width,c.height);this.j.getClientRectAsync(this.element).then(function(a){var c={positionRect:a,viewportRect:d,relativePos:null},e=b.B;if(!(e&&O(e.positionRect,c.positionRect)&&O(e.viewportRect,c.viewportRect))){e=c.positionRect;c.relativePos=N(e,c.viewportRect);var h=c.viewportRect;e.top<=h.bottom&&h.top<=e.bottom&&e.left<=h.right&&h.left<=e.right?(b.B=
c,b.P(c)):b.B&&(b.B=null,c.positionRect=null,b.P(c))}})};function Q(a){y(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a),"Invalid length value: %s",a);return a};function R(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a};function ia(a,b){function c(){d=0;var g=500-(a.Date.now()-e);if(0<g)d=a.setTimeout(c,g);else{var h=f;f=null;b.apply(null,h)}}var d=0,e=0,f=null;return function(b){for(var h=[],g=0;g<arguments.length;++g)h[g-0]=arguments[g];e=a.Date.now();f=h;d||(d=a.setTimeout(c,500))}};function I(a){var b=this;this.V=a;this.U=a.win;this.h=[];this.Z=K(this.U,"vsync");this.j=L(a,"viewport");this.H=[];this.K=this.M=this.L=!1;this.W=ia(this.U,function(){b.L=!1})}I.prototype.observe=function(a,b,c){var d=this,e=new P(this.V,a,b,c);this.h.push(e);this.K||ja(this);e.update();return function(){for(var a=0;a<d.h.length;a++)if(d.h[a]==e){d.h.splice(a,1);0==d.h.length&&S(d);break}}};
I.prototype.unobserve=function(a){for(var b=0;b<this.h.length;b++)if(this.h[b].element==a){this.h.splice(b,1);0==this.h.length&&S(this);return}x().error("POSITION_OBSERVER","cannot unobserve unobserved element")};function ja(a){a.K=!0;a.H.push(a.j.onScroll(function(){a.W();a.L=!0;a.M||T(a)}));a.H.push(a.j.onResize(function(){a.updateAllEntries(!0)}))}function S(a){for(a.K=!1;a.H.length;)a.H.pop()()}I.prototype.updateAllEntries=function(a){for(var b=0;b<this.h.length;b++)this.h[b].update(a)};
function T(a){a.updateAllEntries();a.M=!0;a.L?a.Z.measure(function(){T(a)}):a.M=!1};function U(a){a=AMP.BaseElement.call(this,a)||this;a.w=null;a.m=null;a.j=null;a.l=!1;a.G=0;a.o=0;a.N="0";a.J="0";a.C=0;a.S=0;a.I=null;a.F=null;a.A=null;a.D=0;a.R=0;a.T=!1;a.O=!1;return a}var V=AMP.BaseElement;U.prototype=aa(V.prototype);U.prototype.constructor=U;if(p)p(U,V);else for(var W in V)if("prototype"!=W)if(Object.defineProperties){var X=Object.getOwnPropertyDescriptor(V,W);X&&Object.defineProperty(U,W,X)}else U[W]=V[W];U.aa=V.prototype;
U.prototype.buildCallback=function(){this.getAmpDoc().whenFirstVisible().then(this.X.bind(this));this.T=this.element.hasAttribute("once")};U.prototype.X=function(){var a=this;ka(this);this.w=fa(this.element);this.j=L(this.element,"viewport");this.m||(ha(this.getAmpDoc()),this.m=L(this.element,"position-observer"));this.getAmpDoc().whenReady().then(function(){var b=Y(a);a.m.observe(b,1,a.Y.bind(a))})};
function Z(a){var b=a.j.getScrollTop(),c=A({"start-scroll-offset":b,"end-scroll-offset":b+a.R,"initial-inview-percent":a.D}),d=R(a.win,"amp-position-observer.scroll",A({percent:a.D,positionObserverData:c}));a.w.trigger(a.element,"scroll",d,1)}
U.prototype.Y=function(a){if(!this.T||!this.O){var b=this.l,c=this.I&&this.I.height;this.A||(this.A=a.viewportRect.height);var d=this.A-a.viewportRect.height,e=0;150>Math.abs(d)?e=d:this.A=null;a.viewportRect=M(a.viewportRect.left,a.viewportRect.top,a.viewportRect.width,a.viewportRect.height+e);this.I=a.viewportRect;c!=a.viewportRect.height&&(this.C=la(this,this.N),this.S=la(this,this.J));d=a.viewportRect;d=M(d.left,d.top+this.C,d.width,d.height-this.S-this.C);e=a.positionRect;var f;if(e){var g=f=
N(e,d);if("inside"==g)this.l=!0;else{var h=e.height*("top"==g?this.G:this.o);this.l="bottom"==g?e.top<=d.bottom-h:e.bottom>=d.top+h}}else this.l=!1,f=a.relativePos;b&&!this.l&&(this.D="bottom"==f?0:1,Z(this),g=R(this.win,"amp-position-observer.exit",A({})),this.w.trigger(this.element,"exit",g,1),this.O=!0);!b&&this.l&&(g=R(this.win,"amp-position-observer.enter",A({})),this.w.trigger(this.element,"enter",g,1));this.l&&(e&&(g=d.height+e.height-(e.height*this.o+e.height*this.G),d=Math.abs(e.top-this.C-
(d.height-e.height*this.o)),this.D=d/g,this.R=g-d),Z(this))}};function ka(a){var b=a.element.getAttribute("intersection-ratios");if(b){var c=b.trim().split(" ");a.G=ma(c[0]);a.o=a.G;c[1]&&(a.o=ma(c[1]))}var d=a.element.getAttribute("viewport-margins");d&&(d=d.trim().split(" "),a.N=d[0],a.J=a.N,d[1]&&(a.J=d[1]));a.F=a.element.getAttribute("target")}
function Y(a){var b=a.F?v().assertElement(a.win.document.getElementById(a.F),"No element found with id:"+a.F):a.element.parentNode;a.win.document.body===b&&(b=a.win.document.documentElement);return b}
function la(a,b){b="number"==typeof b?b+"px":b&&/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(b)?/^\d+(\.\d+)?$/.test(b)?b+"px":b:void 0;b=Q(b);var c=b;Q(c);c=y(/[a-z]+/i.exec(c),"Failed to read units from %s",c)[0];var d=parseFloat(b);d="number"===typeof d&&isFinite(d)?d:void 0;if(!d)return 0;y("px"==c||"vh"==c,"Only pixel or vh are valid as units for exclusion margins: "+b);"vh"==c&&(d=d/100*a.I.height);return d}
function ma(a){var b=parseFloat(a);y(0<=b&&1>=b,"Ratios must be a decimal between 0 and 1: "+a);return b}U.prototype.$=function(){if(this.m){var a=Y(this);this.m.unobserve(a);this.m=null}};(function(a){a.registerElement("amp-position-observer",U)})(self.AMP);
})});

//# sourceMappingURL=amp-position-observer-0.1.js.map
