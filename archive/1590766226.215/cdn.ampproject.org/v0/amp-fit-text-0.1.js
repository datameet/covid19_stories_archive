(self.AMP=self.AMP||[]).push({n:"amp-fit-text",v:"2005151844001",f:(function(AMP,_){
var d="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var m={a:!0},n={};try{n.__proto__=m;l=n.a;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=k;var r=self.AMP_CONFIG||{},t=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function u(a){if(self.document&&self.document.head&&(!self.location||!t.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}r.cdnUrl||u("runtime-host");r.geoApiUrl||u("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v,w="Webkit webkit Moz moz ms O o".split(" ");function x(a,b,e){var f=a.style;if(2>b.length||0!=b.lastIndexOf("--",0)){v||(v=Object.create(null));var c=v[b];if(!c){c=b;if(void 0===f[b]){var g=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<w.length;h++){var q=w[h]+g;if(void 0!==f[q]){g=q;break b}}g=""}void 0!==f[g]&&(c=g)}v[b]=c}b=c}b&&((2>b.length?0:0==b.lastIndexOf("--",0))?a.style.setProperty(b,e):a.style[b]=e)}function y(a,b){for(var e in b)x(a,e,b[e])};function z(a){var b=parseFloat(a);return"number"===typeof b&&isFinite(b)?b:void 0};function A(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.c=null;a.j=null;a.m=-1;a.l=-1;return a}var B=AMP.BaseElement;A.prototype=d(B.prototype);A.prototype.constructor=A;if(p)p(A,B);else for(var C in B)if("prototype"!=C)if(Object.defineProperties){var D=Object.getOwnPropertyDescriptor(B,C);D&&Object.defineProperty(A,C,D)}else A[C]=B[C];A.o=B.prototype;
A.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
A.prototype.buildCallback=function(){var a=this;this.h=this.element.ownerDocument.createElement("div");this.applyFillContent(this.h);this.h.classList.add("i-amphtml-fit-text-content");y(this.h,{zIndex:2});this.c=this.element.ownerDocument.createElement("div");y(this.c,{lineHeight:"1.15em"});this.h.appendChild(this.c);this.j=this.element.ownerDocument.createElement("div");y(this.j,{position:"absolute",top:0,left:0,zIndex:1,visibility:"hidden",lineHeight:"1.15em"});this.getRealChildNodes().forEach(function(b){a.c.appendChild(b)});
this.j.innerHTML=this.c.innerHTML;this.element.appendChild(this.h);this.element.appendChild(this.j);this.m=z(this.element.getAttribute("min-font-size"))||6;this.l=z(this.element.getAttribute("max-font-size"))||72};A.prototype.prerenderAllowed=function(){return!0};A.prototype.isRelayoutNeeded=function(){return!0};
A.prototype.layoutCallback=function(){var a=this;return this.mutateElement(function(){var b=a.element.offsetHeight,e=a.j,f=a.element.offsetWidth;var c=a.m;var g=a.l;for(g++;1<g-c;){var h=Math.floor((c+g)/2);x(e,"fontSize",h+"px");var q=e.offsetWidth;e.offsetHeight>b||q>f?g=h:c=h}x(a.c,"fontSize",c+"px");e=a.c;f=a.j;x(f,"fontSize",c+"px");f=f.offsetHeight>b;c*=1.15;b=Math.floor(b/c);e.classList.toggle("i-amphtml-fit-text-content-overflown",f);y(e,{lineClamp:f?b:"",maxHeight:f?c*b+"px":""})})};
(function(a){a.registerElement("amp-fit-text",A,".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-fit-text-0.1.js.map
