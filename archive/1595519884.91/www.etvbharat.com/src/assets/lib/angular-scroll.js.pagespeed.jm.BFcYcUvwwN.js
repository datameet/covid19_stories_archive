var duScrollDefaultEasing=function(e){"use strict";return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},duScroll=angular.module("duScroll",["duScroll.scrollspy","duScroll.smoothScroll","duScroll.scrollContainer","duScroll.spyContext","duScroll.scrollHelpers"]).value("duScrollDuration",350).value("duScrollSpyWait",100).value("duScrollSpyRefreshInterval",0).value("duScrollGreedy",!1).value("duScrollOffset",0).value("duScrollEasing",duScrollDefaultEasing).value("duScrollCancelOnEvents","scroll mousedown mousewheel touchmove keydown").value("duScrollBottomSpy",!1).value("duScrollActiveClass","active");"undefined"!=typeof module&&module&&module.exports&&(module.exports=duScroll),angular.module("duScroll.scrollHelpers",["duScroll.requestAnimation"]).run(["$window","$q","cancelAnimation","requestAnimation","duScrollEasing","duScrollDuration","duScrollOffset","duScrollCancelOnEvents",function(e,t,n,r,o,l,u,i){"use strict";var c={},a=function(e){return"undefined"!=typeof HTMLDocument&&e instanceof HTMLDocument||e.nodeType&&e.nodeType===e.DOCUMENT_NODE},s=function(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement||e.nodeType&&e.nodeType===e.ELEMENT_NODE},d=function(e){return s(e)||a(e)?e:e[0]};c.duScrollTo=function(t,n,r,o){var l;if(angular.isElement(t)?l=this.duScrollToElement:angular.isDefined(r)&&(l=this.duScrollToAnimated),l)return l.apply(this,arguments);var u=d(this);return a(u)?e.scrollTo(t,n):(u.scrollLeft=t,void(u.scrollTop=n))};var f,m;c.duScrollToAnimated=function(e,l,u,c){u&&!c&&(c=o);var a=this.duScrollLeft(),s=this.duScrollTop(),d=Math.round(e-a),p=Math.round(l-s),S=null,g=0,v=this,h=function(e){(!e||g&&e.which>0)&&(i&&v.unbind(i,h),n(f),m.reject(),f=null)};if(f&&h(),m=t.defer(),0===u||!d&&!p)return 0===u&&v.duScrollTo(e,l),m.resolve(),m.promise;var y=function(e){null===S&&(S=e),g=e-S;var t=g>=u?1:c(g/u);v.scrollTo(a+Math.ceil(d*t),s+Math.ceil(p*t)),t<1?f=r(y):(i&&v.unbind(i,h),f=null,m.resolve())};return v.duScrollTo(a,s),i&&v.bind(i,h),f=r(y),m.promise},c.duScrollToElement=function(e,t,n,r){var o=d(this);angular.isNumber(t)&&!isNaN(t)||(t=u);var l=this.duScrollTop()+d(e).getBoundingClientRect().top-t;return s(o)&&(l-=o.getBoundingClientRect().top),this.duScrollTo(0,l,n,r)},c.duScrollLeft=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(t,this.duScrollTop(),n,r);var o=d(this);return a(o)?e.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft:o.scrollLeft},c.duScrollTop=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(this.duScrollLeft(),t,n,r);var o=d(this);return a(o)?e.scrollY||document.documentElement.scrollTop||document.body.scrollTop:o.scrollTop},c.duScrollToElementAnimated=function(e,t,n,r){return this.duScrollToElement(e,t,n||l,r)},c.duScrollTopAnimated=function(e,t,n){return this.duScrollTop(e,t||l,n)},c.duScrollLeftAnimated=function(e,t,n){return this.duScrollLeft(e,t||l,n)},angular.forEach(c,function(e,t){angular.element.prototype[t]=e;var n=t.replace(/^duScroll/,"scroll");angular.isUndefined(angular.element.prototype[n])&&(angular.element.prototype[n]=e)})}]),angular.module("duScroll.polyfill",[]).factory("polyfill",["$window",function(e){"use strict";var t=["webkit","moz","o","ms"];return function(n,r){if(e[n])return e[n];for(var o,l=n.substr(0,1).toUpperCase()+n.substr(1),u=0;u<t.length;u++)if(o=t[u]+l,e[o])return e[o];return r}}]),angular.module("duScroll.requestAnimation",["duScroll.polyfill"]).factory("requestAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=0,r=function(e,r){var o=(new Date).getTime(),l=Math.max(0,16-(o-n)),u=t(function(){e(o+l)},l);return n=o+l,u};return e("requestAnimationFrame",r)}]).factory("cancelAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=function(e){t.cancel(e)};return e("cancelAnimationFrame",n)}]),angular.module("duScroll.spyAPI",["duScroll.scrollContainerAPI"]).factory("spyAPI",["$rootScope","$timeout","$interval","$window","$document","scrollContainerAPI","duScrollGreedy","duScrollSpyWait","duScrollSpyRefreshInterval","duScrollBottomSpy","duScrollActiveClass",function(e,t,n,r,o,l,u,i,c,a,s){"use strict";var d=function(n){var l=!1,c=!1,d=function(){c=!1;var t,l=n.container,i=l[0],d=0;if("undefined"!=typeof HTMLElement&&i instanceof HTMLElement||i.nodeType&&i.nodeType===i.ELEMENT_NODE)d=i.getBoundingClientRect().top,t=Math.round(i.scrollTop+i.clientHeight)>=i.scrollHeight;else{var f=o[0].body.scrollHeight||o[0].documentElement.scrollHeight;t=Math.round(r.pageYOffset+r.innerHeight)>=f}var m,p,S,g,v,h,y=a&&t?"bottom":"top";for(g=n.spies,p=n.currentlyActive,S=void 0,m=0;m<g.length;m++)v=g[m],h=v.getTargetPosition(),h&&v.$element&&(a&&t||h.top+v.offset-d<20&&(u||h.top*-1+d)<h.height)&&(!S||S[y]<h[y])&&(S={spy:v},S[y]=h[y]);S&&(S=S.spy),p===S||u&&!S||(p&&p.$element&&(p.$element.removeClass(s),e.$broadcast("duScrollspy:becameInactive",p.$element,angular.element(p.getTargetElement()))),S&&(S.$element.addClass(s),e.$broadcast("duScrollspy:becameActive",S.$element,angular.element(S.getTargetElement()))),n.currentlyActive=S)};return i?function(){l?c=!0:(d(),l=t(function(){l=!1,c&&d()},i,!1))}:d},f={},m=function(e){var t=e.$id,n={spies:[]};return n.handler=d(n),f[t]=n,e.$on("$destroy",function(){p(e)}),t},p=function(e){var t=e.$id,r=f[t],o=r.container;r.intervalPromise&&n.cancel(r.intervalPromise),o&&o.off("scroll",r.handler),delete f[t]},S=m(e),g=function(e){return f[e.$id]?f[e.$id]:e.$parent?g(e.$parent):f[S]},v=function(e){var t,n,r=e.$scope;if(r)return g(r);for(n in f)if(t=f[n],t.spies.indexOf(e)!==-1)return t},h=function(e){for(;e.parentNode;)if(e=e.parentNode,e===document)return!0;return!1},y=function(e){var t=v(e);t&&(t.spies.push(e),t.container&&h(t.container)||(t.container&&t.container.off("scroll",t.handler),t.container=l.getContainer(e.$scope),c&&!t.intervalPromise&&(t.intervalPromise=n(t.handler,c,0,!1)),t.container.on("scroll",t.handler).triggerHandler("scroll")))},$=function(t){var n=v(t);t===n.currentlyActive&&(e.$broadcast("duScrollspy:becameInactive",n.currentlyActive.$element),n.currentlyActive=null);var r=n.spies.indexOf(t);r!==-1&&n.spies.splice(r,1),t.$element=null};return{addSpy:y,removeSpy:$,createContext:m,destroyContext:p,getContextForScope:g}}]),angular.module("duScroll.scrollContainerAPI",[]).factory("scrollContainerAPI",["$document",function(e){"use strict";var t={},n=function(e,n){var r=e.$id;return t[r]=n,r},r=function(e){return t[e.$id]?e.$id:e.$parent?r(e.$parent):void 0},o=function(n){var o=r(n);return o?t[o]:e},l=function(e){var n=r(e);n&&delete t[n]};return{getContainerId:r,getContainer:o,setContainer:n,removeContainer:l}}]),angular.module("duScroll.smoothScroll",["duScroll.scrollHelpers","duScroll.scrollContainerAPI"]).directive("duSmoothScroll",["duScrollDuration","duScrollOffset","scrollContainerAPI",function(e,t,n){"use strict";return{link:function(r,o,l){o.on("click",function(o){if(l.href&&l.href.indexOf("#")!==-1||""!==l.duSmoothScroll){var u=l.href?l.href.replace(/.*(?=#[^\s]+$)/,"").substring(1):l.duSmoothScroll,i=document.getElementById(u)||document.getElementsByName(u)[0];if(i&&i.getBoundingClientRect){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault();var c=l.offset?parseInt(l.offset,10):t,a=l.duration?parseInt(l.duration,10):e,s=n.getContainer(r);s.duScrollToElement(angular.element(i),isNaN(c)?0:c,isNaN(a)?0:a)}}})}}}]),angular.module("duScroll.spyContext",["duScroll.spyAPI"]).directive("duSpyContext",["spyAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){e.createContext(t)}}}}}]),angular.module("duScroll.scrollContainer",["duScroll.scrollContainerAPI"]).directive("duScrollContainer",["scrollContainerAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){r.$observe("duScrollContainer",function(r){angular.isString(r)&&(r=document.getElementById(r)),r=angular.isElement(r)?angular.element(r):n,e.setContainer(t,r),t.$on("$destroy",function(){e.removeContainer(t)})})}}}}}]),angular.module("duScroll.scrollspy",["duScroll.spyAPI"]).directive("duScrollspy",["spyAPI","duScrollOffset","$timeout","$rootScope",function(e,t,n,r){"use strict";var o=function(e,t,n,r){angular.isElement(e)?this.target=e:angular.isString(e)&&(this.targetId=e),this.$scope=t,this.$element=n,this.offset=r};return o.prototype.getTargetElement=function(){return!this.target&&this.targetId&&(this.target=document.getElementById(this.targetId)||document.getElementsByName(this.targetId)[0]),this.target},o.prototype.getTargetPosition=function(){var e=this.getTargetElement();if(e)return e.getBoundingClientRect()},o.prototype.flushTargetCache=function(){this.targetId&&(this.target=void 0)},{link:function(l,u,i){var c,a=i.ngHref||i.href;if(a&&a.indexOf("#")!==-1?c=a.replace(/.*(?=#[^\s]+$)/,"").substring(1):i.duScrollspy?c=i.duScrollspy:i.duSmoothScroll&&(c=i.duSmoothScroll),c){var s=n(function(){var n=new o(c,l,u,(-(i.offset?parseInt(i.offset,10):t)));e.addSpy(n),l.$on("$locationChangeSuccess",n.flushTargetCache.bind(n));var a=r.$on("$stateChangeSuccess",n.flushTargetCache.bind(n));l.$on("$destroy",function(){e.removeSpy(n),a()})},0,!1);l.$on("$destroy",function(){n.cancel(s)})}}}}]);