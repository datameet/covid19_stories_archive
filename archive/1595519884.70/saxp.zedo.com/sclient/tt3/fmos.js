//  Copyright (c) 2000-2020 ZEDO Inc. All Rights Reserved.
var zz_zdmaster=function(){
return{
init:function(master_id){
this.master_id=master_id;
this.zd_async=0;
this.hbid=0;
this.zd_pu="";
this.zd_content_loaded=false;
if(!window.zz_zdmasters)
window.zz_zdmasters=new Array();
if(!this.donePlacements)
this.donePlacements=new Array();
if(!this.placements)
this.placements=new Array();
window.zz_zdmasters.push(this);
},
zmt_set_network:function(network){
this.n=network;
var e2='true';
if(this.n==767&&e2=='false'){
this.hbid=1;
}
return this.n;
},
zmt_set_masterid:function(zd_masterid){
this.mi=zd_masterid;
return this.mi;
},
zmt_set_geo:function(geo){
this.gc=geo;
return this.gc;
},
zmt_set_pageUrl:function(pageUrl){
this.zd_pu=pageUrl;
return this.zd_pu;
},
zmt_set_tmy:function(tmy){
this.tmy=tmy;
return this.tmy;
},
zmt_set_media:function(media){
this.r=media;
return this.r;
},
zmt_set_redirect:function(redirect){
this.cs=redirect;
return this.cs;
},
zmt_set_charset:function(n0){
this.n0=n0;
return this.n0;
},
zmt_set_async:function(){
this.zd_async=1;
return this.zd_async;
},
zmt_set_hbid:function(){
this.hbid=1;
return this.hbid;
},
zmt_set_bid_request:function(url){
this.bidUrl=url;
return this.bidUrl;
},
zmt_get_placement:function(zd_scriptid,zd_masterid,o0,zd_channel,zd_size,zd_publisher){
zmt_get_placement(zd_scriptid,zd_masterid,o0,zd_channel,zd_size,zd_publisher,0,0);
},
zmt_get_placement:function(zd_scriptid,zd_masterid,o0,zd_channel,zd_size,zd_publisher,zd_width,d14){
var r0=new o20();
r0.si=zd_scriptid;
r0.mi=zd_masterid;
r0.sq=o0;
r0.w=zd_width;
r0.h=d14;
r0.ir=false;
if((!zd_channel)||(zd_channel<0)||(zd_channel>999999)){
zd_channel=0;
}
r0.c=zd_channel;
if(zd_size<0||zd_size>95){
zd_size=0;
}
r0.d=zd_size;
r0.s=zd_publisher;
this.placements.push(r0);
return r0;
},
zmt_load:function(){
var _this=this;var _callback_Tag=function(result){
zz_callback_Tag(_this,result);
};
if(_this.hbid){
try{
loadHeaderBidder(_this.n,_this.bidUrl,getsizeList(_this.placements),_callback_Tag,2000);
}catch(err){
w12=new Image();
var z13='Error in calling headerbid:'+err.w4;
w12.src='https://ss2.zedo.com/log/ERR.gif?v=v02-63;'+z13+'b='+navigator.userAgent;
zz_callback_Tag(_this,undefined);
}
}else{
zz_callback_Tag(_this,undefined);
}
},
zmt_render_placement:function(r0){
zmt_render_placement(this,r0);
}
};
};
var o20=function(){
return{
zmt_add_ct:function(custom){
this.ct=custom;
return this.ct;
},
zmt_add_fixWidth:function(custom){
this.fw=custom;
return this.fw;
},
zmt_add_fixHeight:function(custom){
this.fh=custom;
return this.fh;
},
zmt_add_minWidth:function(custom){
this.mw=custom;
return this.mw;
},
zmt_add_minHeight:function(custom){
this.mh=custom;
return this.mh;
},
zmt_add_maxWidth:function(custom){
this.mxw=custom;
return this.mxw;
},
zmt_add_maxHeight:function(custom){
this.mxh=custom;
return this.mxh;
},
zmt_add_autoPlayViewPercent:function(custom){
this.apv=custom;
return this.apv;
},
zmt_add_autoPlay:function(custom){
this.ap=custom;
return this.ap;
},
zmt_add_onVideoReady:function(custom){
this.ovr=custom;
return this.ovr;
},
zmt_add_onVideoError:function(custom){
this.ove=custom;
return this.ove;
},
zmt_add_hideFullScreenIcon:function(custom){
this.hfs=custom;
return this.hfs;
},
zmt_add_keyword:function(keyword){
this.q=keyword.replace(/&/g,'zzazz');
return this.q;
},
zmt_add_multiple_custom:function(m_custom){
this.mp=m_custom;
return this.mp;
},
zmt_add_custom:function(custom){
this.p=custom;
return this.p;
},
zmt_add_alternate_dim:function(alt_dim){
if(alt_dim<0||alt_dim>95){
alt_dim=0;
}
this.adm=alt_dim;
return this.adm;
},
zmt_add_pb_ad:function(pbkAd){
this.$=pbkAd;
return this.$;
},
zmt_add_pb_nw:function(pbkNw){
this.pn=pbkNw;
return this.pn;
},
zmt_add_sli_smooth:function(ssm){
this.ssm=ssm;
return this.ssm;
},
zmt_add_sli_speed:function(ssp){
this.ssp=ssp;
return this.ssp;
},
zmt_add_sli_close_text:function(sct){
this.sct=sct;
return this.sct;
},
zmt_add_title:function(title){
this.t=title;
return this.t;
},
zmt_add_d1:function(d1){
this.d1=d1;
return this.d1;
},
zmt_add_d2:function(d2){
this.d2=d2;
return this.d2;
},
zmt_add_d3:function(d3){
this.d3=d3;
return this.d3;
},
zmt_add_d4:function(d4){
this.d4=d4;
return this.d4;
},
zmt_add_d5:function(d5){
this.d5=d5;
return this.d5;
},
zmt_add_d6:function(d6){
this.d6=d6;
return this.d6;
},
zmt_add_d7:function(d7){
this.d7=d7;
return this.d7;
},
zmt_add_d8:function(d8){
this.d8=d8;
return this.d8;
},
zmt_add_d9:function(d9){
this.d9=d9;
return this.d9;
},
zmt_add_da:function(da){
this.da=da;
return this.da;
},
zmt_add_db:function(db){
this.db=db;
return this.db;
},
zmt_add_dc:function(dc){
this.dc=dc;
return this.dc;
},
zmt_add_dd:function(dd){
this.dd=dd;
return this.dd;
},
zmt_add_de:function(de){
this.de=de;
return this.de;
},
zmt_add_df:function(df){
this.df=df;
return this.df;
},
zmt_add_MultiSize:function(wd,ht,d){
if(typeof this.mulDim=='undefined'){
this.mulDim=new Array();
}
this.mulDim.push(new TagDimDet(d,ht,wd));
var n12=get_best_dim_for_display(this.mulDim,screen.width,screen.height);
if(typeof n12!='undefined'&&this.d!=n12){
this.d=n12;
}}
};
};
function zzOVV(){function a(a){try{if(window.top==window)return a.OnPage;for(var b=window,c=0;b.parent!=b&&1e3>c;){if(b.parent.document.domain!=b.document.domain)return a.CrossDomainIframe;b=b.parent}return a.SameDomainIframe}catch(d){}return a.CrossDomainIframe}this.DEBUG=!1,this.asset=null,this.positionInterval,this.userAgent=window.testOvvConfig&&window.testOvvConfig.userAgent?window.testOvvConfig.userAgent:navigator.userAgent,this.servingScenarioEnum={OnPage:1,SameDomainIframe:2,CrossDomainIframe:3},this.servingScenario=a(this.servingScenarioEnum),this.IN_IFRAME=this.servingScenario!=this.servingScenarioEnum.OnPage,this.IN_XD_IFRAME=this.servingScenario==this.servingScenarioEnum.CrossDomainIframe,this.geometrySupported=!this.IN_XD_IFRAME;var b=new OVVBrowser(this.userAgent);this.browser=b.getBrowser(),this.browserIDEnum=b.getBrowserIDEnum();var c=1e3;this.interval=c,this.releaseVersion="OVVRELEASEVERSION",this.buildVersion="OVVBUILDVERSION";var d={},e=[],f=1e3,g=[];this.addAsset=function(a){d.hasOwnProperty(a.getId())||(d[a.getId()]=a,this.asset=a)},this.removeAsset=function(a){delete d[a.getId()]},this.getAssetById=function(a){return d[a]},this.getAds=function(){var a={};for(var b in d)d.hasOwnProperty(b)&&(a[b]=d[b]);return a},this.subscribe=function(a,b,c,d){if(d)for(key in e[b])e[b][key]&&i(e[b][key].eventName,a)&&j(function(){c(b,e[b][key])});for(key in a)g[a[key]+b]||(g[a[key]+b]=[]),g[a[key]+b].push({Func:c})},this.publish=function(a,b,c){var d={eventName:a,eventTime:h(),ovvArgs:c};if(e[b]||(e[b]=[]),e[b].length<f&&e[b].push(d),a&&b&&g[a+b]instanceof Array)for(var i=0;i<g[a+b].length;i++){var k=g[a+b][i];k&&k.Func&&"function"==typeof k.Func&&j(function(){k.Func(b,d)})}},this.getAllReceivedEvents=function(a){return e[a]};var h=function(){"use strict";return Date.now?Date.now():(new Date).getTime()},i=function(a,b){for(var c=0;c<b.length;c++)if(b[c]===a)return!0;return!1},j=function(a){try{var b=a();return void 0!==b?b:!0}catch(c){return!1}}}function OVVCheck(){this.clientHeight=-1,this.clientWidth=-1,this.error="",this.focus=null,this.fps=-1,this.id="",this.beaconsSupported=null,this.geometrySupported=null,this.geometryViewabilityState="",this.beaconViewabilityState="",this.cssViewabilityState="",this.domViewabilityState="",this.technique="",this.beacons=new Array,this.inIframe=null,this.objBottom=-1,this.objLeft=-1,this.objRight=-1,this.objTop=-1,this.percentViewable=-1,this.percentObscured=0,this.viewabilityState=""}function OVVBrowser(a){function b(a,b){var c=function(){for(var b={ID:0,name:"",version:""},c=a,f=0;f<e.length;f++)if(null!=c.match(new RegExp(e[f].brRegex))){if(b.ID=e[f].id,b.name=e[f].name,null==e[f].verRegex)break;var g=c.match(new RegExp(e[f].verRegex+"[0-9]*"));if(null!=g){var h=g[0].match(new RegExp(e[f].verRegex));b.version=g[0].replace(h[0],"")}var i=c.match(new RegExp(d+"[0-9\\.]*"));null!=i&&(b.os=i[0]);break}return b},d="(Windows NT)",e=[{id:4,name:"Opera",brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,name:"MSIE",brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7",verRegex:"(MSIE |rv:)"},{id:2,name:"Firefox",brRegex:"Firefox",verRegex:"Firefox/"},{id:3,name:"Chrome",brRegex:"Chrome",verRegex:"Chrome/"},{id:5,name:"Safari",brRegex:"Safari|(OS |OS X)[0-9].*AppleWebKit",verRegex:"Version/"}];return c()}var c={MSIE:1,Firefox:2,Chrome:3,Opera:4,safari:5},d=b(a);this.getBrowser=function(){return d},this.getBrowserIDEnum=function(){return c}}function OVVBeaconSupportCheck(){var a=new OVVBrowser($zovvObj.userAgent),b=a.getBrowser(),c=a.getBrowserIDEnum();this.supportsBeacons=function(){var a=6.3,d=b.ID==c.MSIE,e=b.version>=11,f=b.os?b.os.split(" "):[0],g=f[f.length-1],h=g>=a;return!d||e&&h}}function ZOVVAsset(a,b){var c,d,e=13,f=Math.sqrt(2),g=0,h=1,i=2,j=3,k=4,l=5,m=6,n=7,o=8,p=9,q=10,r=11,s=12,t=13,u=500,v=a,w=0,x=$zovvObj.DEBUG?20:1,y=b.geometryViewabilityCalculator,z=function(){return null},A=function(){return null},B=new OVVBeaconSupportCheck;this.focus=!0;var C="hidden",D=function(a,b,c){C in a?a.addEventListener("visibilitychange",c):(C="mozHidden")in a?a.addEventListener("mozvisibilitychange",c):(C="webkitHidden")in a?a.addEventListener("webkitvisibilitychange",c):(C="msHidden")in a?a.addEventListener("msvisibilitychange",c):"onfocusin"in a?a.onfocusin=a.onfocusout=c:(b.addEventListener("focus",c),b.addEventListener("blur",c),b.addEventListener("pagehide",c),b.addEventListener("pageshow",c))},E=function(a){var b="",c="visible",d="hidden",e={focus:c,focusin:c,pageshow:c,blur:d,focusout:d,pagehide:d};a=a||window.event,b=a.type in e?e[a.type]:document.visibilityState,"hidden"==b?this.focus=!1:this.focus=!0};D(document,window,E.bind(this));var F=function(a,b){var c=a.getBoundingClientRect(),d=a.clientHeight,e=a.clientWidth,f=Math.max(0,c.top),g=Math.max(0,c.left),h=Math.max(0,Math.min(b.innerHeight-f,c.bottom-f)),i=Math.max(0,Math.min(b.innerWidth-g,c.right-g));return{vw:Math.round(i/e*100),vh:Math.round(h/d*100)}};this.checkViewability=function(){var a=new OVVCheck;if(a.id=v,a.inIframe=$zovvObj.IN_IFRAME,a.geometrySupported=$zovvObj.geometrySupported,a.focus=this.focus,!d)return a.error="Player not found!",a;if(G(a,d)===!0){if(!$zovvObj.DEBUG)return a;a.cssViewabilityState=OVVCheck.UNVIEWABLE}if(H(a,d)===!0){if(!$zovvObj.DEBUG)return a;a.domViewabilityState=OVVCheck.UNVIEWABLE}if(!B.supportsBeacons()&&a.geometrySupported===!1&&(a.viewabilityState=OVVCheck.UNMEASURABLE,!$zovvObj.DEBUG))return a;if(a.geometrySupported){if(a.technique=OVVCheck.GEOMETRY,J(a,d),a.viewabilityState=a.percentViewable>=1&&a.focus?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,!$zovvObj.DEBUG)return a;a.geometryViewabilityState=a.viewabilityState}var b=P(0),c=S(0);if(b&&b.isViewable&&c){var e=O(c)&&b.isViewable();a.beaconsSupported=!e}else a.beaconsSupported=!1;if(L())if(a.beaconsSupported){a.technique=OVVCheck.BEACON;var f=K(a);null===f?(a.viewabilityState=OVVCheck.UNMEASURABLE,$zovvObj.DEBUG&&(a.beaconViewabilityState=OVVCheck.UNMEASURABLE)):(a.viewabilityState=f?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,$zovvObj.DEBUG&&(a.beaconViewabilityState=f?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE))}else a.viewabilityState=OVVCheck.UNMEASURABLE;else a.technique=OVVCheck.BEACON,a.viewabilityState=OVVCheck.NOT_READY;if((a.viewabilityState==OVVCheck.NOT_READY||a.viewabilityState==OVVCheck.UNMEASURABLE)&&(a.technique="",a.percentViewable=F(d,window).vh,a.viewabilityState=a.percentViewable>=1&&a.focus?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE),$zovvObj.DEBUG)if(a.technique="",null===a.geometryViewabilityState&&null===a.beaconViewabilityState)a.viewabilityState=OVVCheck.UNMEASURABLE;else{var g=a.beaconViewabilityState===OVVCheck.VIEWABLE,h=a.cssViewabilityState===OVVCheck.VIEWABLE,i=a.domViewabilityState===OVVCheck.VIEWABLE,j=a.geometryViewabilityState===OVVCheck.VIEWABLE;a.viewabilityState=h||i||g||j?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE}return a},this.beaconStarted=function(b){$zovvObj.DEBUG&&P(b).debug&&P(b).debug(),0!==b&&(w++,L()&&d["onJsReady"+a]())},this.dispose=function(){for(var a=1;e>=a;a++){var b=S(a);b&&(delete w[a],b.parentElement.removeChild(b))}clearInterval(window.$zovvObj.positionInterval),window.$zovvObj.removeAsset(this)},this.getId=function(){return v},this.getPlayer=function(){return d};var G=function(a,b){var c=window.getComputedStyle(b,null),d=c.getPropertyValue("visibility"),e=c.getPropertyValue("display");return"hidden"==d||"none"==e?(a.technique=OVVCheck.CSS_INVISIBILITY,a.viewabilityState=OVVCheck.UNVIEWABLE,!0):!1},H=function(a,b){var c=b.getBoundingClientRect(),d=1,e=c.left+d,f=c.right-d,g=c.top+d,h=c.bottom-d,i=Math.floor(c.left+c.width/2),j=Math.floor(c.top+c.height/2),k=[{x:e,y:g},{x:i,y:g},{x:f,y:g},{x:e,y:j},{x:i,y:j},{x:f,y:j},{x:e,y:h},{x:i,y:h},{x:f,y:h}];for(var l in k)if(k[l]&&k[l].x>=0&&k[l].y>=0&&(elem=document.elementFromPoint(k[l].x,k[l].y),null!=elem&&elem!=b&&!b.contains(elem)&&(overlappingArea=I(c,elem.getBoundingClientRect()),overlappingArea>0&&(a.percentObscured=100*I(c,elem.getBoundingClientRect()),a.percentObscured>50))))return a.percentViewable=100-a.percentObscured,a.technique=OVVCheck.DOM_OBSCURING,a.viewabilityState=OVVCheck.UNVIEWABLE,!0;return!1},I=function(a,b){var c=a.width*a.height,d=Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left)),e=Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));return d*e/c},J=function(a,b){a.percentObscured=a.percentObscured||0;var c=y.getViewabilityState(b,window);return c.error||(a.clientWidth=c.clientWidth,a.clientHeight=c.clientHeight,a.percentViewable=c.percentViewable-a.percentObscured,a.objTop=c.objTop,a.objBottom=c.objBottom,a.objLeft=c.objLeft,a.objRight=c.objRight),c},K=function(a){if(!L())return null;var b=0,c=0,f=0,g=0;a.beacons=new Array(e);var u=d.getClientRects?d.getClientRects()[0]:{top:-1,bottom:-1,left:-1,right:-1};a.objTop=u.top,a.objBottom=u.bottom,a.objLeft=u.left,a.objRight=u.right;for(var v=0;e>=v;v++)if(0!==v){var w=P(v),x=S(v),y=w.isViewable(),z=O(x);if(a.beacons[v]=y&&z,y)switch(b++,v){case i:case j:case k:case l:c++;break;case m:case n:case o:case p:f++;break;case q:case r:case s:case t:g++}}if(b===e)return!0;var A=a.beacons;return A[h]===!1?g>=3||f>=3||c>=3?null:!1:A[h]===!0&&(A[i]===!0&&A[j]===!0||A[i]===!0&&A[k]===!0||A[j]===!0&&A[l]===!0||A[k]===!0&&A[l]===!0)?!0:A[h]===!0&&4==f?!0:(!A[i]||!A[l]||A[m]&&A[q]&&A[h]&&A[t]&&A[p])&&(!A[k]||!A[j]||A[o]&&A[s]&&A[h]&&A[r]&&A[n])?!1:null},L=function(){return d?w===e:!1},M=function(a){var b="LRU_FWS_NOCAEB",c=b.split("").reverse().join("");if(""!=a&&a!=c){for(var d=0;e>=d;d++){var f=document.createElement("DIV");f.id="OVVBeaconContainer_"+d+"_"+v,f.style.position="absolute",f.style.zIndex=$zovvObj.DEBUG?99999:-99999;var g='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+x+'" height="'+x+'"><param name="movie" value="'+a+'" /><param name="quality" value="low" /><param name="flashvars" value="id='+v+"&index="+d+'" /><param name="bgcolor" value="#ffffff" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--[if!IE]>--><object id="OVVBeacon_'+d+"_"+v+'" type="application/x-shockwave-flash" data="'+a+'" width="'+x+'" height="'+x+'"><param name="quality" value="low" /><param name="flashvars" value="id='+v+"&index="+d+'" /><param name="bgcolor" value="#ff0000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--<![endif]--></object>';f.innerHTML=g,document.body.insertBefore(f,document.body.firstChild)}N.bind(this)(),this.positionInterval=setInterval(N.bind(this),u)}},N=function(){if(L()){var a=d.getClientRects()[0];if(!c||!a||c.left!==a.left||c.right!==a.right||c.top!==a.top||c.bottom!==a.bottom){c=a;for(var b=a.right-a.left,u=a.bottom-a.top,v=b/(1+f),w=u/(1+f),y=b/f,z=u/f,A=0;e>=A;A++){var B=a.left+document.body.scrollLeft,C=a.top+document.body.scrollTop;switch(A){case g:B=-1e5,C=-1e5;break;case h:B+=(b-x)/2,C+=(u-x)/2;break;case i:break;case j:B+=b-x;break;case k:C+=u-x;break;case l:B+=b-x,C+=u-x;break;case m:B+=(b-y)/2,C+=(u-z)/2;break;case n:B+=(b-y)/2+y,C+=(u-z)/2;break;case o:B+=(b-y)/2,C+=(u-z)/2+z;break;case p:B+=(b-y)/2+y,C+=(u-z)/2+z;break;case q:B+=(b-v)/2,C+=(u-w)/2;break;case r:B+=(b-v)/2+v,C+=(u-w)/2;break;case s:B+=(b-v)/2,C+=(u-w)/2+w;break;case t:B+=(b-v)/2+v,C+=(u-w)/2+w}A>=m&&(B-=x/2,C-=x/2);var D=S(A);D.style.left=B+"px",D.style.top=C+"px"}}}},O=function(a){if(!a)return!1;var b=Math.max(document.body.clientWidth,window.innerWidth),c=Math.max(document.body.clientHeight,window.innerHeight),d=a.getClientRects()[0];return d.top<c&&d.bottom>0&&d.left<b&&d.right>0},P=function(a){return z(a)}.memoize(),Q=function(a){return document.getElementById("OVVBeacon_"+a+"_"+v)},R=function(a){var b=document.getElementById("OVVFrame_"+v+"_"+a),c=null;return b&&(c=b.contentWindow),c},S=function(a){return A(a)}.memoize(),T=function(a){return document.getElementById("OVVBeaconContainer_"+a+"_"+v)},U=function(a){return document.getElementById("OVVFrame_"+v+"_"+a)},V=function(){var a=document.getElementById(v);return a};d=V(),0==$zovvObj.geometrySupported||$zovvObj.DEBUG?$zovvObj.browser.ID===$zovvObj.browserIDEnum.Firefox?(z=R,A=U):(z=Q,A=T,M.bind(this)("BEACON_SWF_URL")):d&&d["onJsReady"+a]&&setTimeout(function(){d["onJsReady"+a]()},5)}function OVVGeometryViewabilityCalculator(){this.getViewabilityState=function(d,e){var f,g=a();if(g.area==1/0)return{error:"Failed to determine viewport"};var h=d.getBoundingClientRect(),i=h.width*h.height;if(g.area/i<.5)f=Math.floor(100*g.area/i),j=g;else{var j=b(window.top),k=c(d,e);k.bottom>j.height&&(k.height-=k.bottom-j.height),k.top<0&&(k.height+=k.top),k.left<0&&(k.width+=k.left),k.right>j.width&&(k.width-=k.right-j.width),f=Math.floor(100*(k.width*k.height)/i)}return{clientWidth:j.width,clientHeight:j.height,objTop:h.top,objBottom:h.bottom,objLeft:h.left,objRight:h.right,percentViewable:f}};var a=function(){for(var a=b(window),c=a.area,d=window;d!=window.top;)d=d.parent,viewPortSize=b(d),viewPortSize.area<c&&(c=viewPortSize.area,a=viewPortSize);return a},b=function(a){var b={width:1/0,height:1/0,area:1/0};return!isNaN(a.document.body.clientWidth)&&a.document.body.clientWidth>0&&(b.width=a.document.body.clientWidth),!isNaN(a.document.body.clientHeight)&&a.document.body.clientHeight>0&&(b.height=a.document.body.clientHeight),a.document.documentElement&&a.document.documentElement.clientWidth&&!isNaN(a.document.documentElement.clientWidth)&&(b.width=a.document.documentElement.clientWidth),a.document.documentElement&&a.document.documentElement.clientHeight&&!isNaN(a.document.documentElement.clientHeight)&&(b.height=a.document.documentElement.clientHeight),a.innerWidth&&!isNaN(a.innerWidth)&&(b.width=Math.min(b.width,a.innerWidth)),a.innerHeight&&!isNaN(a.innerHeight)&&(b.height=Math.min(b.height,a.innerHeight)),b.area=b.height*b.width,b},c=function(a,b){var e=b,f=b.parent,g={width:0,height:0,left:0,right:0,top:0,bottom:0};if(a){var h=d(a,b);if(h.width=h.right-h.left,h.height=h.bottom-h.top,g=h,e!=f){var i=c(e.frameElement,f);i.bottom<g.bottom&&(i.bottom<g.top&&(g.top=i.bottom),g.bottom=i.bottom),i.right<g.right&&(i.right<g.left&&(g.left=i.right),g.right=i.right),g.width=g.right-g.left,g.height=g.bottom-g.top}}return g},d=function(a,b){var c=b,e=b.parent,f={left:0,right:0,top:0,bottom:0};if(a){var g=a.getBoundingClientRect();c!=e&&(f=d(c.frameElement,e)),f={left:g.left+f.left,right:g.right+f.left,top:g.top+f.top,bottom:g.bottom+f.top}}return f}}function getViewabilityObject(a){var b=new ZOVVAsset(a,{geometryViewabilityCalculator:new OVVGeometryViewabilityCalculator});return b}function ZViewability(){}function ViewabilityMonitor(a,b){this.ovvAssetObject=b,this.onAdViewableImpressionCB=function(){},this.onTwentyPercentViewableCB=function(){},this.onFourtyPercentViewableCB=function(){},this.onSixtyPercentViewableCB=function(){},this.onEightyPercentViewableCB=function(){},this.onHundredPercentViewableCB=function(){},this.onViewableStateChangeCB=function(a,b){},this.onUnmesurableCB=function(){},this.config={IntervalForPullingViewablityMs:100,debugMode:!1},this.setConfig(a),this.pullViewabilityTimer={},this.analyerObj=new ViewabilityAnalyzer,this.lastCallback=0,this.lastViabilityState="",this.lastIabViewableState="",this.isIabViewableFired=!1,this.isUserIntract=!1,this.calculateViewabilityWith=50,this.viewableSince=zViewabilityUtils.getFutureDate(),this.IABLARGEADSIZEPIXEL=242500,this.isViewable=function(){return this.lastViabilityState===ZState.VIEWABLE}}function ViewabilityAnalyzer(){}function ZState(){}function zViewabilityUtils(){}function zCallbackManager(){}OVVCheck.UNMEASURABLE="unmeasurable",OVVCheck.VIEWABLE="viewable",OVVCheck.UNVIEWABLE="unviewable",OVVCheck.NOT_READY="not_ready",OVVCheck.BEACON="beacon",OVVCheck.GEOMETRY="geometry",OVVCheck.CSS_INVISIBILITY="css_invisibility",OVVCheck.DOM_OBSCURING="dom_obscuring",Function.prototype.memoized=function(a){return this._cacheValue=this._cacheValue||{},void 0!==this._cacheValue[a]?this._cacheValue[a]:this._cacheValue[a]=this.apply(this,arguments)},Function.prototype.memoize=function(){var a=this;return function(){return a.memoized.apply(a,arguments)}};var newOVV=new zzOVV;window.$zovvObj=window.$zovvObj||newOVV;for(var i in newOVV)$zovvObj.hasOwnProperty(i)||($zovvObj[i]=newOVV[i]);window.$zovvObj.addAsset(new ZOVVAsset("OVVID",{geometryViewabilityCalculator:new OVVGeometryViewabilityCalculator})),ZViewability.getViewabilityMonitor=function(a,b,c){try{var d=getViewabilityObject(a.id),e=d.checkViewability();if(""==e.viewabilityState||e.viewabilityState==ZState.UNMEASURABLE||e.viewabilityState==ZState.NOT_READY)c("Can't measure viewability");else{var f=new ViewabilityMonitor(a,d);b(f),f.startViewability()}}catch(g){a.debugMode&&console.error(g),c("Error due to construct object")}},ViewabilityMonitor.prototype={startViewability:function(){var a=this,b=function(){zViewabilityUtils.log("debug","startAnalysing ",a.config.debugMode);var b=a.ovvAssetObject.checkViewability(),c=a.createStateObject(b),d=function(){a.lastCallback=zCallbackManager.ZERO_PERCENTAAGE.Name},e=function(){a.lastCallback=zCallbackManager.TWENTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onTwentyPercentViewableCB,[])},f=function(){a.lastCallback=zCallbackManager.FORTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onFourtyPercentViewableCB,[])},g=function(){a.lastCallback=zCallbackManager.SIXTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onSixtyPercentViewableCB,[])},h=function(){a.lastCallback=zCallbackManager.EIGHTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onEightyPercentViewableCB,[])},i=function(){a.lastCallback=zCallbackManager.HUNDRED_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onHundredPercentViewableCB,[])},j=function(b){a.lastViabilityState=b,zViewabilityUtils.asyncCallback(a.onViewableStateChangeCB,[b])},k=function(){a.lastCallback=ZState.UNMEASURABLE,zViewabilityUtils.asyncCallback(a.onUnmesurableCB,[])};a.analyerObj.analyzeViewability(c,a.lastCallback,d,e,f,g,h,i,j,a.lastViabilityState,k,a.config),a.calculateViewabilityWith=a.getIabViewabilityCriteria(c.height,c.width);var l=function(b,c,d){a.isIabViewableFired=!0,zViewabilityUtils.asyncCallback(a.onAdViewableImpressionCB,[b,c,d])},m=function(b){a.lastIabViewableState=b,a.lastIabViewableState==ZState.VIEWABLE?a.viewableSince=zViewabilityUtils.getCurrentTime():a.lastIabViewableState==ZState.UNVIEWABLE&&(a.viewableSince=zViewabilityUtils.getFutureDate())};a.analyerObj.analyzeIabViewability(c,a.isIabViewableFired,l,a.isUserIntract,a.calculateViewabilityWith,a.viewableSince,a.lastIabViewableState,m,zViewabilityUtils.getCurrentTime(),a.config)};b(),this.pullViewabilityTimer=setInterval(b,this.config.IntervalForPullingViewablityMs)},createStateObject:function(a){return{viewablePercentage:Math.round(a.percentViewable),viewabilityState:a.viewabilityState,height:zViewabilityUtils.getElementHeight(this.config.id),width:zViewabilityUtils.getElementWidth(this.config.id),focus:a.focus}},getIabViewabilityCriteria:function(a,b){var c=a*b;return c<this.IABLARGEADSIZEPIXEL?50:30},onAdViewableImpression:function(a){this.onAdViewableImpressionCB=a},onTwentyPercentViewable:function(a){this.onTwentyPercentViewableCB=a},onFourtyPercentViewable:function(a){this.onFourtyPercentViewableCB=a},onSixtyPercentViewable:function(a){this.onSixtyPercentViewableCB=a},onEightyPercentViewable:function(a){this.onEightyPercentViewableCB=a},onHundredPercentViewable:function(a){this.onHundredPercentViewableCB=a},onViewableStateChange:function(a){this.onViewableStateChangeCB=a},onUnmesurable:function(a){this.onUnmesurableCB=a},userIntraction:function(){this.isUserIntract=!0},getViewability:function(){var a=this.createStateObject(this.ovvAssetObject.checkViewability());return a},stopViewabilityMonitor:function(){clearInterval(this.pullViewabilityTimer)},setConfig:function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&(this.config[b]=a[b])}},ViewabilityAnalyzer.prototype={analyzeViewability:function(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t=!1;if(zViewabilityUtils.log("debug"," viewablePercentage "+a.viewablePercentage+" lastCallback "+b,l.debugMode),isNaN(a.viewablePercentage)&&b!=ZState.UNMEASURABLE&&a.viewabilityState==ZState.UNMEASURABLE)return k(),!1;s=(a.viewablePercentage==zCallbackManager.ZERO_PERCENTAAGE.Min||a.viewablePercentage<zCallbackManager.ZERO_PERCENTAAGE.Min)&&a.focus,s&&(t=zCallbackManager.ZERO_PERCENTAAGE.Name),m=a.viewablePercentage>=zCallbackManager.TWENTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.TWENTY_PERCENTAGE.Max&&a.focus,m&&(t=zCallbackManager.TWENTY_PERCENTAGE.Name),n=a.viewablePercentage>=zCallbackManager.FORTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.FORTY_PERCENTAGE.Max&&a.focus,n&&(t=zCallbackManager.FORTY_PERCENTAGE.Name),o=a.viewablePercentage>=zCallbackManager.SIXTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.SIXTY_PERCENTAGE.Max&&a.focus,o&&(t=zCallbackManager.SIXTY_PERCENTAGE.Name),p=a.viewablePercentage>=zCallbackManager.EIGHTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.EIGHTY_PERCENTAGE.Max&&a.focus,p&&(t=zCallbackManager.EIGHTY_PERCENTAGE.Name),q=a.viewablePercentage>=zCallbackManager.HUNDRED_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.HUNDRED_PERCENTAGE.Max&&a.focus,q&&(t=zCallbackManager.HUNDRED_PERCENTAGE.Name);var u=function(a){switch(w){case 0:c();break;case 20:d();break;case 40:e();break;case 60:f();break;case 80:g();break;case 100:h()}};if(t>b){var v=t;if(t=b,b=v,t!==!1)for(var w=t+zCallbackManager.FREQUENCY;b>=w;w+=zCallbackManager.FREQUENCY)u(w)}else if(b>t&&t!==!1)for(var w=b-zCallbackManager.FREQUENCY;w>=t;w-=zCallbackManager.FREQUENCY)u(w);r=a.viewablePercentage>zCallbackManager.ONSTATECHANGE_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.ONSTATECHANGE_PERCENTAGE.Max&&a.focus,r&&j!=ZState.VIEWABLE?i(ZState.VIEWABLE):r||j==ZState.UNVIEWABLE||i(ZState.UNVIEWABLE)},analyzeIabViewability:function(a,b,c,d,e,f,g,h,i,j){if(!b){a.viewablePercentage>=e?g!=ZState.VIEWABLE&&h(ZState.VIEWABLE):g!=ZState.UNVIEWABLE&&h(ZState.UNVIEWABLE);var k=i.getTime()-f.getTime();zViewabilityUtils.log("debug"," currentTime-"+i+" viewableSince-"+f,j.debugMode),zViewabilityUtils.log("debug"," diff "+k,j.debugMode),(k>=1e3||d)&&c(d,a.height,a.width)}}},ZState.VIEWABLE="viewable",ZState.UNVIEWABLE="unviewable",ZState.UNMEASURABLE="unmeasurable",ZState.NOT_READY="not_ready",zViewabilityUtils.getCurrentTime=function(){return new Date},zViewabilityUtils.getFutureDate=function(){var a=new Date;return a.setFullYear(4e3),a},zViewabilityUtils.log=function(a,b,c){if(c)switch(a.toLowerCase()){case"warn":console.warn(b);break;case"info":console.info(b);break;case"error":console.error(b);break;case"trace":console.trace(b);break;case"bizlogic":"undefined"!=typeof console.bizlogic&&console.bizlogic(b);break;default:console.log(b)}},zViewabilityUtils.asyncCallback=function(a,b){setTimeout(function(){a.apply(this,b)},0)},zViewabilityUtils.getElementHeight=function(a){return document.getElementById(a)?document.getElementById(a).clientHeight:0},zViewabilityUtils.getElementWidth=function(a){return document.getElementById(a)?document.getElementById(a).clientWidth:0},zCallbackManager.FREQUENCY=20,zCallbackManager.ZERO_PERCENTAAGE={Min:0,Max:0,Name:0},zCallbackManager.TWENTY_PERCENTAGE={Min:20,Max:39,Name:20},zCallbackManager.FORTY_PERCENTAGE={Min:40,Max:59,Name:40},zCallbackManager.SIXTY_PERCENTAGE={Min:60,Max:79,Name:60},zCallbackManager.EIGHTY_PERCENTAGE={Min:80,Max:98,Name:80},zCallbackManager.HUNDRED_PERCENTAGE={Min:99,Max:100,Name:100},zCallbackManager.UNMEASURABLE_PERCENTAGE={Min:-1,Max:-1,Name:"Unmeasurable"},zCallbackManager.ONSTATECHANGE_PERCENTAGE={Min:1,Max:100,Name:"ViewableStateChange"};

var zd_usp,callUspAPI=function(o,a){for(var e=!1,n=function(a,n){e||(e=!0,n?(console.log(a),o("string"==typeof a?a:a.uspString)):(console.log("USP API response failed "),o()))},t={},s=window,i=s.__uspapi,c="function"==typeof i?s:void 0;!i;){try{"function"==typeof(i=s.__uspapi)&&(c=s)}catch(o){}if(s===window.top)break;s=s.parent}if(!c)for(s=window;!c;){try{s.frames.__uspapiLocator&&(c=s,frames.__uspapiLocator.contentDocument||frames.__uspapiLocator.contentWindow.document)}catch(o){}if(s===window.top)break;s=s.parent}if(c)try{c.__uspapi("getUSPData",1,n)}catch(o){console.log(o);function p(o){var a=o&&o.data&&o.data.__uspapiReturn;a&&a.callId&&void 0!==t[a.callId]&&(t[a.callId](a.returnValue,a.success),delete t[a.callId])}function r(o,a){window.removeEventListener("w4",p,!1),n(o,a)}window.addEventListener("w4",p,!1),setTimeout(function(){var o,a,e,n,s;o="getUSPData",a=1,e=r,n=Math.random()+"",s={__uspapiCall:{command:o,n9:a,callId:n}},t[n]=e,c.postMessage(s,"*")},a)}else console.log("USP API frame not found "),o()},uspResponseCallback=function(o){zd_usp=o};
function TagDimDet(tag_dimid,tag_height,tag_width){
this.tag_dimid=tag_dimid;
this.tag_height=tag_height;
this.tag_width=tag_width;
}
function get_best_dim_for_display(dimDetArr,scrWidth,scrHeight){
if(typeof dimDetArr=='undefined'||dimDetArr.length==0||typeof scrWidth=='undefined'||typeof scrHeight=='undefined'){
return;
}
dimDetArr.sort(compareWidth);
dimDetArr.sort(compareHeightWhenWidthEqual);
var defaultDim=dimDetArr[dimDetArr.length-1];
for(i=0;i<dimDetArr.length;i++){
if(parseInt(dimDetArr[i].tag_width)<=parseInt(scrWidth)&&parseInt(dimDetArr[i].tag_height)<=parseInt(scrHeight)){
return dimDetArr[i].tag_dimid;
}}
for(i=0;i<dimDetArr.length;i++){
if(parseInt(dimDetArr[i].tag_width)<=parseInt(scrWidth)){
return dimDetArr[i].tag_dimid;
}}
dimDetArr.reverse();
dimDetArr.sort(compareHeight);
for(i=0;i<dimDetArr.length;i++){
if(parseInt(dimDetArr[i].tag_height)<=parseInt(scrHeight)){
return dimDetArr[i].tag_dimid;
}}
return defaultDim.tag_dimid;
}
function compareHeightWhenWidthEqual(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function compareWidth(a,b){
if(parseInt(a.tag_width)>parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_width)<parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function compareHeight(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)){
return 1;
}else{
return 0;
}}
function get_dim_for_display(msize,scrWidth,scrHeight){
if(typeof msize=='undefined'){
return;
}
var arr=msize.replace(/^\s+|\s+$/g,'').split(",");var dimDetArr=new Array();
for(i=0;i<arr.length;i++){
var trimVal=arr[i].replace(/^\s+|\s+$/g,'');
if(null!=trimVal.match(/^\d+x\d+:\d+$/)){
dimDetArr.push(getDimDetail(trimVal));
}}
return get_best_dim_for_display(dimDetArr,scrWidth,scrHeight);
}
function getDimDetail(val){
var arr=val.split(":");var arr2=arr[0].split("x");
return new TagDimDet(arr[1],arr2[1],arr2[0]);
}
function zd_detect_page_url(isJSTag){
var zd_pg='';var inIframeDepth=zd_get_friendly_iframe_depth();
try{
if(inIframeDepth>1){
var win=zd_get_friendly_iframe_top_win(inIframeDepth);
if(inIframe(win)){
zd_pg=(typeof(win.document.referrer)=='undefined'?"":win.document.referrer.split("?")[0]);
}
else{
zd_pg=(typeof(win.location.href)=='undefined'?"":win.location.href.split("?")[0]);
}
}else{
if(isJSTag){
zd_pg=(typeof(location.href)=='undefined'?"":location.href.split("?")[0]);
}else{
zd_pg=(typeof(document.referrer)=='undefined'?"":document.referrer.split("?")[0]);
}}
}catch(err){}
return zd_pg;
}
function zd_get_page_ref(isJSTag){
var zd_ref='';
try{
if(isJSTag){
zd_ref=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(e){}
return zd_ref;
}
function zd_get_domain(url){
var domain="";
try{
if(url&&url.length>0){
if(url.indexOf("://")>-1){
domain=url.split('/')[2];
}else{
domain=url.split('/')[0];
}}
}catch(t){}
return domain;
}
function zd_get_top_parent_stack_url(){
var url="";
try{
if(!window.location.ancestorOrigins){
return "";
}
url=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]||"";
}catch(t){}
return url;
}
function zd_get_stack_url_depth(stackTopUrl){
var depth="";
try{
if(window.location.ancestorOrigins&&stackTopUrl.length>0){
depth=window.location.ancestorOrigins.length-1;
}
}catch(t){}
return depth;
}
function zd_get_page_url(isJSTag,zd_pg_url){
var zd_pg='';
try{
if(zd_pg_url!=''){
zd_pg=decodeURIComponent(zd_pg_url);
zd_pg=zd_pg.split("?")[0];
}else{
zd_pg=zd_detect_page_url(isJSTag);
}
var zd_stack_top=zd_get_top_parent_stack_url();
if(zd_stack_top!=null&&zd_stack_top.length>0){
zd_pg_dom=zd_get_domain(zd_pg);
zd_stack_top_dom=zd_get_domain(zd_stack_top);
if(zd_pg_dom!=zd_stack_top_dom){
zd_pg=zd_stack_top.split("?")[0];
}}
}catch(err){}
return encodeURIComponent(zd_pg);
}
function zd_get_tpu(passedPu){
var passed_dom,detected_dom;
if(typeof(passedPu)!='undefined'&&passedPu!=null&&passedPu!=''){
passed_dom=zd_get_domain(decodeURIComponent(passedPu));
var zd_stack_top=zd_get_top_parent_stack_url();
if(zd_stack_top!=null&&zd_stack_top.length>0){
detected_dom=zd_get_domain(zd_stack_top);
if(passed_dom==detected_dom){
return 1;
}else{
return 2;
}
}else{
return 3;
}}
return '';
}
function zd_get_friendly_iframe_depth(){
var count=0,frame;
do{
try{
frame=frame?frame.parent:window;
count++;
}catch(t){}
}
while(frame!==window.top&&count<20);
return count;
}
function isParentAccessible(win){
try{
win.document.location&&win.parent.document.location;
return true;
}catch(e){
return false;
}}
function inIframe(win){
return(win.frameElement&&win.frameElement.tagName=="IFRAME");
}
function inFriendlyIframe(win){
return(!isParentAccessible(win)?false:inIframe(win));
}
function zd_get_friendly_iframe_top_win(iframeDepth){
var currentWindow=window;var cnt=0;
while(inFriendlyIframe(currentWindow)&&cnt<iframeDepth){
try{
currentWindow=window.parent;
cnt++;
}catch(t){}
}
try{
return currentWindow;
}catch(t){
return window;
}}
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.ZFBid=e()}}(function(){return function e(t,r,i){function n(s,a){if(!r[s]){if(!t[s]){var d="function"==typeof require&&require;if(!a&&d)return d(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=r[s]={exports:{}};t[s][0].call(f.exports,function(e){var r=t[s][1][e];return n(r?r:e)},f,f.exports,e,t,r,i)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(e,t,r){(function(e,t,i,n,o,s,a,d,u){"use strict";function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function c(e){return 3*e.length/4-f(e)}function p(e){var t,r,i,n,o,s,a=e.length;o=f(e),s=new m(3*a/4-o),i=o>0?a-4:a;var d=0;for(t=0,r=0;t<i;t+=4,r+=3)n=y[e.charCodeAt(t)]<<18|y[e.charCodeAt(t+1)]<<12|y[e.charCodeAt(t+2)]<<6|y[e.charCodeAt(t+3)],s[d++]=n>>16&255,s[d++]=n>>8&255,s[d++]=255&n;return 2===o?(n=y[e.charCodeAt(t)]<<2|y[e.charCodeAt(t+1)]>>4,s[d++]=255&n):1===o&&(n=y[e.charCodeAt(t)]<<10|y[e.charCodeAt(t+1)]<<4|y[e.charCodeAt(t+2)]>>2,s[d++]=n>>8&255,s[d++]=255&n),s}function h(e){return g[e>>18&63]+g[e>>12&63]+g[e>>6&63]+g[63&e]}function l(e,t,r){for(var i,n=[],o=t;o<r;o+=3)i=(e[o]<<16)+(e[o+1]<<8)+e[o+2],n.push(h(i));return n.join("")}function b(e){for(var t,r=e.length,i=r%3,n="",o=[],s=16383,a=0,d=r-i;a<d;a+=s)o.push(l(e,a,a+s>d?d:a+s));return 1===i?(t=e[r-1],n+=g[t>>2],n+=g[t<<4&63],n+="=="):2===i&&(t=(e[r-2]<<8)+e[r-1],n+=g[t>>10],n+=g[t>>4&63],n+=g[t<<2&63],n+="="),o.push(n),o.join("")}r.byteLength=c,r.toByteArray=p,r.fromByteArray=b;for(var g=[],y=[],m="undefined"!=typeof Uint8Array?Uint8Array:Array,v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",w=0,B=v.length;w<B;++w)g[w]=v[w],y[v.charCodeAt(w)]=w;y["-".charCodeAt(0)]=62,y["_".charCodeAt(0)]=63}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/base64-js/index.js","/node_modules/base64-js")},{_process:5,buffer:2}],2:[function(e,t,r){(function(t,i,n,o,s,a,d,u,f){"use strict";function c(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}function p(){return n.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function h(e,t){if(p()<t)throw new RangeError("Invalid typed array length");return n.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=n.prototype):(null===e&&(e=new n(t)),e.length=t),e}function n(e,t,r){if(!(n.TYPED_ARRAY_SUPPORT||this instanceof n))return new n(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return y(this,e)}return l(this,e,t,r)}function l(e,t,r,i){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?w(e,t,r,i):"string"==typeof t?m(e,t,r):B(e,t)}function b(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function g(e,t,r,i){return b(t),t<=0?h(e,t):void 0!==r?"string"==typeof i?h(e,t).fill(r,i):h(e,t).fill(r):h(e,t)}function y(e,t){if(b(t),e=h(e,t<0?0:0|A(t)),!n.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function m(e,t,r){if("string"==typeof r&&""!==r||(r="utf8"),!n.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var i=0|T(t,r);e=h(e,i);var o=e.write(t,r);return o!==i&&(e=e.slice(0,o)),e}function v(e,t){var r=t.length<0?0:0|A(t.length);e=h(e,r);for(var i=0;i<r;i+=1)e[i]=255&t[i];return e}function w(e,t,r,i){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(i||0))throw new RangeError("'length' is out of bounds");return t=void 0===r&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,r):new Uint8Array(t,r,i),n.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=n.prototype):e=v(e,t),e}function B(e,t){if(n.isBuffer(t)){var r=0|A(t.length);return e=h(e,r),0===e.length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||ie(t.length)?h(e,0):v(e,t);if("Buffer"===t.type&&se(t.data))return v(e,t.data)}throw new TypeError("First argument must be a string,Buffer,ArrayBuffer,Array,or array-like object.")}function A(e){if(e>=p())throw new RangeError("Attempt to allocate Buffer larger than maximum size:0x"+p().toString(16)+" bytes");return 0|e}function _(e){return+e!=e&&(e=0),n.alloc(+e)}function T(e,t){if(n.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return Q(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return te(e).length;default:if(i)return Q(e).length;t=(""+t).toLowerCase(),i=!0}}function P(e,t,r){var i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,t>>>=0,r<=t)return"";for(e||(e="utf8");;)switch(e){case"hex":return L(this,t,r);case"utf8":case"utf-8":return x(this,t,r);case"ascii":return z(this,t,r);case"latin1":case"binary":return M(this,t,r);case"base64":return D(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,t,r);default:if(i)throw new TypeError("Unknown encoding:"+e);e=(e+"").toLowerCase(),i=!0}}function R(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function S(e,t,r,i,o){if(0===e.length)return-1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=n.from(t,i)),n.isBuffer(t))return 0===t.length?-1:E(e,t,r,i,o);if("number"==typeof t)return t=255&t,n.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):E(e,[t],r,i,o);throw new TypeError("val must be string,number or Buffer")}function E(e,t,r,i,n){function o(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}var s=1,a=e.length,d=t.length;if(void 0!==i&&(i=String(i).toLowerCase(),"ucs2"===i||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,d/=2,r/=2}var u;if(n){var f=-1;for(u=r;u<a;u++)if(o(e,u)===o(t,f===-1?0:u-f)){if(f===-1&&(f=u),u-f+1===d)return f*s}else f!==-1&&(u-=u-f),f=-1}else for(r+d>a&&(r=a-d),u=r;u>=0;u--){for(var c=!0,p=0;p<d;p++)if(o(e,u+p)!==o(t,p)){c=!1;break}if(c)return u}return-1}function O(e,t,r,i){r=Number(r)||0;var n=e.length-r;i?(i=Number(i),i>n&&(i=n)):i=n;var o=t.length;if(o%2!==0)throw new TypeError("Invalid hex string");i>o/2&&(i=o/2);for(var s=0;s<i;++s){var a=parseInt(t.substr(2*s,2),16);if(isNaN(a))return s;e[r+s]=a}return s}function I(e,t,r,i){return re(Q(t,e.length-r),e,r,i)}function N(e,t,r,i){return re($(t),e,r,i)}function C(e,t,r,i){return N(e,t,r,i)}function j(e,t,r,i){return re(te(t),e,r,i)}function U(e,t,r,i){return re(ee(t,e.length-r),e,r,i)}function D(e,t,r){return 0===t&&r===e.length?ne.fromByteArray(e):ne.fromByteArray(e.slice(t,r))}function x(e,t,r){r=Math.min(e.length,r);for(var i=[],n=t;n<r;){var o=e[n],s=null,a=o>239?4:o>223?3:o>191?2:1;if(n+a<=r){var d,u,f,c;switch(a){case 1:o<128&&(s=o);break;case 2:d=e[n+1],128===(192&d)&&(c=(31&o)<<6|63&d,c>127&&(s=c));break;case 3:d=e[n+1],u=e[n+2],128===(192&d)&&128===(192&u)&&(c=(15&o)<<12|(63&d)<<6|63&u,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:d=e[n+1],u=e[n+2],f=e[n+3],128===(192&d)&&128===(192&u)&&128===(192&f)&&(c=(15&o)<<18|(63&d)<<12|(63&u)<<6|63&f,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,a=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),n+=a}return k(i)}function k(e){var t=e.length;if(t<=ae)return String.fromCharCode.apply(String,e);for(var r="",i=0;i<t;)r+=String.fromCharCode.apply(String,e.slice(i,i+=ae));return r}function z(e,t,r){var i="";r=Math.min(e.length,r);for(var n=t;n<r;++n)i+=String.fromCharCode(127&e[n]);return i}function M(e,t,r){var i="";r=Math.min(e.length,r);for(var n=t;n<r;++n)i+=String.fromCharCode(e[n]);return i}function L(e,t,r){var i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);for(var n="",o=t;o<r;++o)n+=K(e[o]);return n}function Y(e,t,r){for(var i=e.slice(t,r),n="",o=0;o<i.length;o+=2)n+=String.fromCharCode(i[o]+256*i[o+1]);return n}function X(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function F(e,t,r,i,o,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<s)throw new RangeError('"value" argument is out of bounds');if(r+i>e.length)throw new RangeError("Index out of range")}function q(e,t,r,i){t<0&&(t=65535+t+1);for(var n=0,o=Math.min(e.length-r,2);n<o;++n)e[r+n]=(t&255<<8*(i?n:1-n))>>>8*(i?n:1-n)}function Z(e,t,r,i){t<0&&(t=4294967295+t+1);for(var n=0,o=Math.min(e.length-r,4);n<o;++n)e[r+n]=t>>>8*(i?n:3-n)&255}function V(e,t,r,i,n,o){if(r+i>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function H(e,t,r,i,n){return n||V(e,t,r,4,3.4028234663852886e38,-3.4028234663852886e38),oe.write(e,t,r,i,23,4),r+4}function J(e,t,r,i,n){return n||V(e,t,r,8,1.7976931348623157e308,-1.7976931348623157e308),oe.write(e,t,r,i,52,8),r+8}function W(e){if(e=G(e).replace(de,""),e.length<2)return"";for(;e.length%4!==0;)e+="=";return e}function G(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function K(e){return e<16?"0"+e.toString(16):e.toString(16)}function Q(e,t){t=t||1/0;for(var r,i=e.length,n=null,o=[],s=0;s<i;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!n){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&o.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&(t-=3)>-1&&o.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function $(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function ee(e,t){for(var r,i,n,o=[],s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),i=r>>8,n=r%256,o.push(n),o.push(i);return o}function te(e){return ne.toByteArray(W(e))}function re(e,t,r,i){for(var n=0;n<i&&!(n+r>=t.length||n>=e.length);++n)t[n+r]=e[n];return n}function ie(e){return e!==e}var ne=e("base64-js"),oe=e("ieee754"),se=e("isarray");r.Buffer=n,r.SlowBuffer=_,r.INSPECT_MAX_BYTES=50,n.TYPED_ARRAY_SUPPORT=void 0!==i.TYPED_ARRAY_SUPPORT?i.TYPED_ARRAY_SUPPORT:c(),r.kMaxLength=p(),n.poolSize=8192,n._augment=function(e){return e.__proto__=n.prototype,e},n.from=function(e,t,r){return l(null,e,t,r)},n.TYPED_ARRAY_SUPPORT&&(n.prototype.__proto__=Uint8Array.prototype,n.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&n[Symbol.species]===n&&Object.defineProperty(n,Symbol.species,{value:null,configurable:!0})),n.alloc=function(e,t,r){return g(null,e,t,r)},n.allocUnsafe=function(e){return y(null,e)},n.allocUnsafeSlow=function(e){return y(null,e)},n.isBuffer=function(e){return!(null==e||!e._isBuffer)},n.compare=function(e,t){if(!n.isBuffer(e)||!n.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,i=t.length,o=0,s=Math.min(r,i);o<s;++o)if(e[o]!==t[o]){r=e[o],i=t[o];break}return r<i?-1:i<r?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,t){if(!se(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return n.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var i=n.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var s=e[r];if(!n.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(i,o),o+=s.length}return i},n.byteLength=T,n.prototype._isBuffer=!0,n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)R(this,t,t+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)R(this,t,t+3),R(this,t+1,t+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)R(this,t,t+7),R(this,t+1,t+6),R(this,t+2,t+5),R(this,t+3,t+4);return this},n.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?x(this,0,e):P.apply(this,arguments)},n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===n.compare(this,e)},n.prototype.inspect=function(){var e="",t=r.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},n.prototype.compare=function(e,t,r,i,o){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),t<0||r>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&t>=r)return 0;if(i>=o)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,i>>>=0,o>>>=0,this===e)return 0;for(var s=o-i,a=r-t,d=Math.min(s,a),u=this.slice(i,o),f=e.slice(t,r),c=0;c<d;++c)if(u[c]!==f[c]){s=u[c],a=f[c];break}return s<a?-1:a<s?1:0},n.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1},n.prototype.indexOf=function(e,t,r){return S(this,e,t,r,!0)},n.prototype.lastIndexOf=function(e,t,r){return S(this,e,t,r,!1)},n.prototype.write=function(e,t,r,i){if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string,encoding,offset[,length])is no longer supported");t=0|t,isFinite(r)?(r=0|r,void 0===i&&(i="utf8")):(i=r,r=void 0)}var n=this.length-t;if((void 0===r||r>n)&&(r=n),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var o=!1;;)switch(i){case"hex":return O(this,e,t,r);case"utf8":case"utf-8":return I(this,e,t,r);case"ascii":return N(this,e,t,r);case"latin1":case"binary":return C(this,e,t,r);case"base64":return j(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding:"+i);i=(""+i).toLowerCase(),o=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var ae=4096;n.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var i;if(n.TYPED_ARRAY_SUPPORT)i=this.subarray(e,t),i.__proto__=n.prototype;else{var o=t-e;i=new n(o,(void 0));for(var s=0;s<o;++s)i[s]=this[s+e]}return i},n.prototype.readUIntLE=function(e,t,r){e=0|e,t=0|t,r||X(e,t,this.length);for(var i=this[e],n=1,o=0;++o<t&&(n*=256);)i+=this[e+o]*n;return i},n.prototype.readUIntBE=function(e,t,r){e=0|e,t=0|t,r||X(e,t,this.length);for(var i=this[e+--t],n=1;t>0&&(n*=256);)i+=this[e+--t]*n;return i},n.prototype.readUInt8=function(e,t){return t||X(e,1,this.length),this[e]},n.prototype.readUInt16LE=function(e,t){return t||X(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUInt16BE=function(e,t){return t||X(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUInt32LE=function(e,t){return t||X(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},n.prototype.readUInt32BE=function(e,t){return t||X(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,t,r){e=0|e,t=0|t,r||X(e,t,this.length);for(var i=this[e],n=1,o=0;++o<t&&(n*=256);)i+=this[e+o]*n;return n*=128,i>=n&&(i-=Math.pow(2,8*t)),i},n.prototype.readIntBE=function(e,t,r){e=0|e,t=0|t,r||X(e,t,this.length);for(var i=t,n=1,o=this[e+--i];i>0&&(n*=256);)o+=this[e+--i]*n;return n*=128,o>=n&&(o-=Math.pow(2,8*t)),o},n.prototype.readInt8=function(e,t){return t||X(e,1,this.length),128&this[e]?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,t){t||X(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},n.prototype.readInt16BE=function(e,t){t||X(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},n.prototype.readInt32LE=function(e,t){return t||X(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,t){return t||X(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,t){return t||X(e,4,this.length),oe.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,t){return t||X(e,4,this.length),oe.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,t){return t||X(e,8,this.length),oe.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,t){return t||X(e,8,this.length),oe.read(this,e,!1,52,8)},n.prototype.writeUIntLE=function(e,t,r,i){if(e=+e,t=0|t,r=0|r,!i){var n=Math.pow(2,8*r)-1;F(this,e,t,r,n,0)}var o=1,s=0;for(this[t]=255&e;++s<r&&(o*=256);)this[t+s]=e/o&255;return t+r},n.prototype.writeUIntBE=function(e,t,r,i){if(e=+e,t=0|t,r=0|r,!i){var n=Math.pow(2,8*r)-1;F(this,e,t,r,n,0)}var o=r-1,s=1;for(this[t+o]=255&e;--o>=0&&(s*=256);)this[t+o]=e/s&255;return t+r},n.prototype.writeUInt8=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,1,255,0),n.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},n.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,2,65535,0),n.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):q(this,e,t,!0),t+2},n.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,2,65535,0),n.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):q(this,e,t,!1),t+2},n.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,4,4294967295,0),n.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):Z(this,e,t,!0),t+4},n.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,4,4294967295,0),n.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):Z(this,e,t,!1),t+4},n.prototype.writeIntLE=function(e,t,r,i){if(e=+e,t=0|t,!i){var n=Math.pow(2,8*r-1);F(this,e,t,r,n-1,-n)}var o=0,s=1,a=0;for(this[t]=255&e;++o<r&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+r},n.prototype.writeIntBE=function(e,t,r,i){if(e=+e,t=0|t,!i){var n=Math.pow(2,8*r-1);F(this,e,t,r,n-1,-n)}var o=r-1,s=1,a=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+r},n.prototype.writeInt8=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,1,127,-128),n.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},n.prototype.writeInt16LE=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,2,32767,-32768),n.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):q(this,e,t,!0),t+2},n.prototype.writeInt16BE=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,2,32767,-32768),n.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):q(this,e,t,!1),t+2},n.prototype.writeInt32LE=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,4,2147483647,-2147483648),n.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):Z(this,e,t,!0),t+4},n.prototype.writeInt32BE=function(e,t,r){return e=+e,t=0|t,r||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),n.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):Z(this,e,t,!1),t+4},n.prototype.writeFloatLE=function(e,t,r){return H(this,e,t,!0,r)},n.prototype.writeFloatBE=function(e,t,r){return H(this,e,t,!1,r)},n.prototype.writeDoubleLE=function(e,t,r){return J(this,e,t,!0,r)},n.prototype.writeDoubleBE=function(e,t,r){return J(this,e,t,!1,r)},n.prototype.copy=function(e,t,r,i){if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);var o,s=i-r;if(this===e&&r<t&&t<i)for(o=s-1;o>=0;--o)e[o+t]=this[o+r];else if(s<1e3||!n.TYPED_ARRAY_SUPPORT)for(o=0;o<s;++o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+s),t);return s},n.prototype.fill=function(e,t,r,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!n.isEncoding(i))throw new TypeError("Unknown encoding:"+i)}else"number"==typeof e&&(e=255&e);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0);var s;if("number"==typeof e)for(s=t;s<r;++s)this[s]=e;else{var a=n.isBuffer(e)?e:Q(new n(e,i).toString()),d=a.length;for(s=0;s<r-t;++s)this[s+t]=a[s%d]}return this};var de=/[^+\/0-9A-Za-z-_]/g}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/buffer/index.js","/node_modules/buffer")},{_process:5,"base64-js":1,buffer:2,ieee754:3,isarray:4}],3:[function(e,t,r){(function(e,t,i,n,o,s,a,d,u){r.read=function(e,t,r,i,n){var o,s,a=8*n-i-1,d=(1<<a)-1,u=d>>1,f=-7,c=r?n-1:0,p=r?-1:1,h=e[t+c];for(c+=p,o=h&(1<<-f)-1,h>>=-f,f+=a;f>0;o=256*o+e[t+c],c+=p,f-=8);for(s=o&(1<<-f)-1,o>>=-f,f+=i;f>0;s=256*s+e[t+c],c+=p,f-=8);if(0===o)o=1-u;else{if(o===d)return s?NaN:(h?-1:1)*(1/0);s+=Math.pow(2,i),o-=u}return(h?-1:1)*s*Math.pow(2,o-i)},r.write=function(e,t,r,i,n,o){var s,a,d,u=8*o-n-1,f=(1<<u)-1,c=f>>1,p=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,h=i?0:o-1,l=i?1:-1,b=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=f):(s=Math.floor(Math.log(t)/Math.LN2),t*(d=Math.pow(2,-s))<1&&(s--,d*=2),t+=s+c>=1?p/d:p*Math.pow(2,1-c),t*d>=2&&(s++,d/=2),s+c>=f?(a=0,s=f):s+c>=1?(a=(t*d-1)*Math.pow(2,n),s+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,n),s=0));n>=8;e[r+h]=255&a,h+=l,a/=256,n-=8);for(s=s<<n|a,u+=n;u>0;e[r+h]=255&s,h+=l,s/=256,u-=8);e[r+h-l]|=128*b}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/ieee754/index.js","/node_modules/ieee754")},{_process:5,buffer:2}],4:[function(e,t,r){(function(e,r,i,n,o,s,a,d,u){var f={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==f.call(e)}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/isarray/index.js","/node_modules/isarray")},{_process:5,buffer:2}],5:[function(e,t,r){(function(e,r,i,n,o,s,a,d,u){function f(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function p(e){if(m===setTimeout)return setTimeout(e,0);if((m===f||!m)&&setTimeout)return m=setTimeout,setTimeout(e,0);try{return m(e,0)}catch(t){try{return m.call(null,e,0)}catch(t){return m.call(this,e,0)}}}function h(e){if(v===clearTimeout)return clearTimeout(e);if((v===c||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(e);try{return v(e)}catch(t){try{return v.call(null,e)}catch(t){return v.call(this,e)}}}function l(){A&&w&&(A=!1,w.length?B=w.concat(B):_=-1,B.length&&b())}function b(){if(!A){var e=p(l);A=!0;for(var t=B.length;t;){for(w=B,B=[];++_<t;)w&&w[_].run();_=-1,t=B.length}w=null,A=!1,h(e)}}function g(e,t){this.fun=e,this.array=t}function y(){}var m,v,e=t.exports={};!function(){try{m="function"==typeof setTimeout?setTimeout:f}catch(e){m=f}try{v="function"==typeof clearTimeout?clearTimeout:c}catch(e){v=c}}();var w,B=[],A=!1,_=-1;e.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];B.push(new g(e,t)),1!==B.length||A||p(b)},g.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=y,e.addListener=y,e.once=y,e.off=y,e.removeListener=y,e.removeAllListeners=y,e.emit=y,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/process/browser.js","/node_modules/process")},{_process:5,buffer:2}],6:[function(e,t,r){(function(e,r,i,n,o,s,a,d,u){"use strict";var f=function(){function e(){}return e.getTimestamp=function(){var e=new Date;return e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+":"+e.getMilliseconds()},e.isDebugOn=function(){var e=window.location.href.match(/[?&]pbjs_debug=([^&#]+)/);return!(!e||"true"!==e[1])},e.ajaxCall=function(t,r,i){var n=new XMLHttpRequest;n.onreadystatechange=e.createCallback(r,n,i),n.open("GET",t,!0),n.send()},e.createCallback=function(e,t,r){return function(){4===t.readyState&&200===t.status?r(e,t.responseText,""):r(e,"",t.statusText)}},e}();t.exports=f}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/Util.ts","/src")},{_process:5,buffer:2}],7:[function(e,t,r){(function(e,r,i,n,o,s,a,d,u){"use strict";var f=function(){function e(e,t,r,i,n){this.bidderName=e,this.slotId=t,this.category=r,this.action=i,this.value=n}return Object.defineProperty(e.prototype,"BidderName",{get:function(){return this.bidderName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"SlotId",{get:function(){return this.slotId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Category",{get:function(){return this.category},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Action",{get:function(){return this.action},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Value",{get:function(){return this.value},enumerable:!0,configurable:!0}),e}();t.exports=f}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/analytics/BidAnalyticData.ts","/src/analytics")},{_process:5,buffer:2}],8:[function(e,t,r){(function(r,i,n,o,s,a,d,u,f){"use strict";var c=e("./BidAnalyticData"),p=function(){function e(e){this.enableAnalytics=e,this.events=[]}return e.prototype.isEnableAnalytics=function(){return this.enableAnalytics},e.prototype.addEvent=function(e){this.enableAnalytics&&this.events.push(e)},e.prototype.setBidRequest=function(e,t){this.addEvent(new c(e,t,"Bids","Requests","1"))},e.prototype.setBidSuccess=function(e,t,r,i,n){this.addEvent(new c(e,t,"Bids","CPM",r.toString())),this.addEvent(new c(e,t,"Bids","LoadTime",n.toString())),this.addEvent(new c(e,t,"Bids","PmpDealId",i))},e.prototype.setNoBid=function(e,t,r){this.addEvent(new c(e,t,"Bids","NoBid","1")),this.addEvent(new c(e,t,"Bids","LoadTime",r.toString()))},e.prototype.setBidFailure=function(e,t,r){this.addEvent(new c(e,t,"Bids","Failed",r))},e.prototype.setBidTimeout=function(e,t,r,i,n){this.addEvent(new c(e,t,"Bids","CPM",r.toString())),this.addEvent(new c(e,t,"Bids","LoadTime",n.toString())),this.addEvent(new c(e,t,"Bids","PmpDealId",i)),this.addEvent(new c(e,t,"Bids","Timeout","1"))},e.prototype.setAllBidTimeout=function(e,t){this.addEvent(new c(e,t,"Bids","Timeout","1"))},e.prototype.setBidWon=function(e,t,r,i,n){this.addEvent(new c(e,t,"Bids","CPM",r.toString())),this.addEvent(new c(e,t,"Bids","PmpDealId",i)),this.addEvent(new c(e,t,"Bids","Won","1"))},e.prototype.getEvents=function(){return this.events},e}();t.exports=p}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/analytics/BidAnalytics.ts","/src/analytics")},{"./BidAnalyticData":7,_process:5,buffer:2}],9:[function(e,t,r){(function(e,r,i,n,o,s,a,d,u){"use strict";var f=function(){function e(){}return e.prototype.logData=function(e){console.log(JSON.stringify(e))},e}();t.exports=f}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/analytics/ConsoleLogger.ts","/src/analytics")},{_process:5,buffer:2}],10:[function(e,t,r){(function(e,r,i,n,o,s,a,d,u){"use strict";var f=function(){function e(e){this.bidAnalytics=e,this.initPrebidAdapter()}return e.prototype.initPrebidAdapter=function(){var e,t=this,r={errorless:function(e){return e}},i={init:function(){return arguments}},n=window;n.ZPreBidAnalyticAdapter=function(e,t,r){console.log("call to ZPreBidAnalyticAdapter library:log('"+e+"','"+t+"',"+JSON.stringify(r)+")")},e=n.ZPreBidAnalyticAdapter;var o={onBidRequested:function(e){return t.bidAnalytics.setBidRequest(e.bids[0].bidder,e.bids[0].placementCode)},onBidResponse:function(e){return t.bidAnalytics.setBidSuccess(e.bidder,e.placementCode,e.cpm,"",e.timeToRespond)}},s=e.q||[];i.init(),n.ZPreBidAnalyticAdapter=e=r.errorless(function(){if(arguments[0]&&"on"===arguments[0]){var e=arguments[1]&&arguments[1],t=arguments[2]&&arguments[2];e&&t&&("bidRequested"===e&&o.onBidRequested.apply(this,[t]),"bidResponse"===e&&o.onBidResponse.apply(this,[t]))}}),s.forEach(function(e){this.bidAnalytics.apply(this,e)})},e}();t.exports=f}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/analytics/PreBidAnalytic.ts","/src/analytics")},{_process:5,buffer:2}],11:[function(e,t,r){(function(e,r,i,n,o,s,a,d,u){"use strict";var f=function(){function e(e,t){this.isDebugOn=e,this.callbackOnComplete=t,this.isReqComplete=!1}return e.prototype.setRequestComplete=function(e){this.isReqComplete=e},e.prototype.isRequestComplete=function(){return this.isReqComplete},e}();t.exports=f}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/bidders/Bidder.ts","/src/bidders");
},{_process:5,buffer:2}],12:[function(e,t,r){(function(e,r,i,n,o,s,a,d,u){"use strict";var f;!function(e){e[e.OpenX=0]="OpenX",e[e.Prebid=1]="Prebid",e[e.RubiconFastLane=2]="RubiconFastLane",e[e.RubiconVideo=3]="RubiconVideo"}(f||(f={})),t.exports=f}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/bidders/BidderName.ts","/src/bidders")},{_process:5,buffer:2}],13:[function(e,t,r){(function(e,r,i,n,o,s,a,d,u){"use strict";var f;!function(e){e[e.display=0]="display",e[e.video=1]="video"}(f||(f={})),t.exports=f}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/bidders/MediaType.ts","/src/bidders")},{_process:5,buffer:2}],14:[function(e,t,r){(function(r,i,n,o,s,a,d,u,f){"use strict";var c=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},p=e("./Bidder"),h=e("./BidderName"),l=e("./MediaType"),b=e("../Util"),g=e("../zfbid"),y=function(e){function t(t,r,i,n){var o=this;e.call(this,t,r),this.propertiesManager=i,this.bidAnalytics=n,this.name="openx",this.OX_dfp_options={callback:function(){o.endBidTime=(new Date).getTime(),o.callbackOnComplete(o)}},this.OX_dfp_ads=[],this.placements={}}return c(t,e),t.prototype.getName=function(){return h.OpenX},t.prototype.addBid=function(e,t,r,i,n,o){this.OX_dfp_ads[this.OX_dfp_ads.length]=[t,[r+"x"+i],n],this.placements[e]={id:n,"partnerName:":o}},t.prototype.registerBids=function(){var e=window;e.OX_dfp_ads=this.OX_dfp_ads,e.OX_dfp_options=this.OX_dfp_options},t.prototype.invokeBeforeRegister=function(){},t.prototype.invokeAfterRegister=function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript";var t="https:"===document.location.protocol;this.startBidTime=(new Date).getTime(),e.src=(t?"https:":"http:")+"//zedo-d.openx.net/w/1.0/jstag?nc=123456-zedo&oxns=zedo";var r=document.getElementsByTagName("script")[0];this.bidAnalytics.setBidRequest(this.name,"all"),r.parentNode.insertBefore(e,r)},t.prototype.getResponse=function(e){var t=window,r=t.OX_zedo,i=0,n="",o="",s="";if(r)for(var a in this.placements){var d=parseInt(this.placements[a].id);if(e===a)if(r.dfp_bidder.getPrice(d)>0){var u=r.dfp_bidder.getPrice(d),f=u.split(",");f.length>1?(f[1].indexOf("pmp")>-1&&(n=f[2],this.isDebugOn&&console.log(b.getTimestamp()+" Id:"+d+"-----Price map:"+i)),i=Number(f[0])/100):i=Number(i)/100;var c=n.length>0?this.propertiesManager.getOpenXPmpShare():this.propertiesManager.getOpenXShare(),p=i*c/100;i=i>p?i-p:i,this.isDebugOn&&console.log("openx price:"+i+",placement:"+d),o=this.placements[a].id,s=this.placements[a].partnerName,this.bidAnalytics.setBidSuccess(this.name,e,i,n,this.endBidTime-this.startBidTime)}else this.bidAnalytics.setNoBid(this.name,e,this.endBidTime-this.startBidTime)}else this.bidAnalytics.setBidFailure(this.name,e,"openx not found");return new g.BidResponse(this.getName(),o,i,"","",s,l.display,n,this.endBidTime-this.startBidTime)},t.prototype.renderAd=function(e,t){var r=window,i=r.OX_zedo,n=i.dfp_bidder.getPriceMap();this.isDebugOn&&console.log(b.getTimestamp()+" Rendering openx"),e.write(n[parseInt(t.AdCode)].ad),e.close()},t}(p);t.exports=y}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/bidders/OpenX.ts","/src/bidders")},{"../Util":6,"../zfbid":"ZFBid","./Bidder":11,"./BidderName":12,"./MediaType":13,_process:5,buffer:2}],15:[function(e,t,r){(function(r,i,n,o,s,a,d,u,f){"use strict";var c=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},p=e("./Bidder"),h=e("./BidderName"),l=e("../Util"),b=e("../zfbid"),g=e("../analytics/PreBidAnalytic"),y=e("./MediaType"),m=function(e){function t(t,r,i,n){e.call(this,t,i),this.timeout=r,this.bidAnalytics=n;var o=window;o.zdpbjs=o.zdpbjs||{},this.zdpbjs=o.zdpbjs,this.zdpbjs.que=this.zdpbjs.que||[],this.brealTimeFlag=!1,this.bids={},this.preBidAnalytic=new g(n)}return c(t,e),t.prototype.getName=function(){return h.Prebid},t.prototype.getBid=function(e,t,r){var i=this.bids[e];return i||(i=new v(e,t,r),this.bids[e]=i),i},t.prototype.addAolBidder=function(e,t,r,i,n,o,s,a,d){var u=this.getBid(e,a,d);u.addBids({bidder:t,params:{network:r,placement:i,sizeId:n,alias:o},partnerName:s})},t.prototype.addBrealTimeBidder=function(e,t,r,i,n,o){var s=this.getBid(e,n,o);s.addBids({bidder:t,params:{placementId:r},partnerName:i}),this.brealTimeFlag=!0},t.prototype.addPulsePointBidder=function(e,t,r,i,n,o,s,a,d){var u=this.getBid(e,a,d);u.addBids({bidder:t,params:{cf:r,c:i,ct:n},partnerName:s})},t.prototype.addAppnexusBidder=function(e,t,r,i,n,o){var s=this.getBid(e,n,o);s.addBids({bidder:t,params:{placementId:r},partnerName:i})},t.prototype.addRubiconBidder=function(e,t,r,i,n,o,s,a){var d=this.getBid(e,s,a);d.addBids({bidder:t,params:{accountId:r,siteId:i,zoneId:n},partnerName:o})},t.prototype.addSovrnBidder=function(e,t,r,i,n,o){var s=this.getBid(e,n,o);s.addBids({bidder:t,params:{tagid:r},partnerName:i})},t.prototype.addCriteoApacBidder=function(e,t,r,i,n,o,s,a,d){var u=this.getBid(e,a,d);u.addBids({bidder:t,params:{nid:r,cookieName:i,varName:n,zoneMap:o},partnerName:s})},t.prototype.addCriteoBidder=function(e,t,r,i,n,o){var s=this.getBid(e,n,o);s.addBids({bidder:t,params:{zoneId:r},partnerName:i})},t.prototype.addTremorBidder=function(e,t,r,i,n,o,s,a){var d=this.getBid(e,s,a);d.addBids({bidder:t,params:{adCode:r,srcPageUrl:i,mediaId:n},partnerName:o})},t.prototype.addInnityBidder=function(e,t,r,i,n,o,s){var a=this.getBid(e,o,s);a.addBids({bidder:t,params:{pub:r,zone:i},partnerName:n})},t.prototype.invokeBeforeRegister=function(){var e="";for(var t in this.bids)for(var r in this.bids[t].Bids)e+=this.bids[t].Bids[r].bidder+"_";this.zdpbjs.biddersName=e,this.isDebugOn&&console.log(l.getTimestamp()+" Made call to prebid.js");try{this.zdpbjs.bidderTimeout=this.timeout-200;var i=document,n=i.createElement("script"),o=!1,s=new Date,a=s.getMonth()+1+""+s.getDate()+s.getHours()+s.getMinutes()+s.getSeconds();a="";var d="http:"===location.protocol?"http://c14.zedo.com/utils/prebid/v0.15.3/prebid.js?"+a:"https://ss3.zedo.com/utils/prebid/v0.15.2/prebid.js?"+a,u=n;n.type="text/javascript",n.src=d,n.id="zd_prebid",n.async=!0,n.onload=u.onreadystatechange=function(){var e=this.readyState;o||e&&"complete"!==e&&"loaded"!==e||(o=!0,this.isDebugOn&&console.log(l.getTimestamp()+" ZINC Log:Prebid.js Loaded"))};var f=document.getElementsByTagName("head")[0];f.insertBefore(n,f.firstChild)}catch(c){}},t.prototype.registerBids=function(e){var t=this,r=[];for(var i in this.bids)r.push({code:this.bids[i].SlotId,sizes:this.bids[i].Sizes,bids:this.bids[i].Bids});this.zdpbjs.que.push(function(){t.zdpbjs.addAdUnits(r),t.brealTimeFlag&&t.zdpbjs.aliasBidder("appnexus","brealtime"),t.zdpbjs.addCallback("adUnitBidsBack",function(e){t.isDebugOn&&console.log(l.getTimestamp()+" Ad unit bids back for:"+e)}),t.bidAnalytics.isEnableAnalytics()&&t.zdpbjs.enableAnalytics([{provider:"ZedoAnalytics",options:{enableDistribution:!1}}]),t.zdpbjs.requestBids({bidsBackHandler:function(e){t.callbackOnComplete(t)}}),t.zdpbjs.bidderSettings={standard:{adserverTargeting:[{key:"hb_bidder",val:function(e){return e.bidderCode}},{key:"hb_adid",val:function(e){return e.adId}},{key:"hb_cpm",val:function(e){return e.cpm}},{key:"hb_tt",val:function(e){return e.timeToRespond}},{key:"hb_mediaType",val:function(e){return e.mediaType}},{key:"hb_vastXml",val:function(e){return e.vastXml}},{key:"hb_vastUrl",val:function(e){return e.vastUrl}}]},aol:{bidCpmAdjustment:function(t){return n(t,e.getAolShare())}},brealtime:{bidCpmAdjustment:function(t){return n(t,e.getBrealTimeShare())}},pulsepoint:{bidCpmAdjustment:function(t){return n(t,e.getPulsePointShare())}},appnexus:{bidCpmAdjustment:function(t){return n(t,e.getAppnexusShare())}},rubicon:{bidCpmAdjustment:function(t){return n(t,e.getRubiconShare())}},sovrn:{bidCpmAdjustment:function(t){return n(t,e.getSovrnShare())}},criteoApac:{bidCpmAdjustment:function(t){return n(t,e.getCriteoApacShare())}},criteo:{bidCpmAdjustment:function(t){return n(t,e.getCriteoShare())}},tremor:{bidCpmAdjustment:function(t){return n(t,e.getTremorShare())}},innity:{bidCpmAdjustment:function(t){return n(t,e.getInnityShare())}}}});var n=function(e,t){if(t){var r=e*t/100;return e>r?e-r:e}return e}},t.prototype.invokeAfterRegister=function(){},t.prototype.getResponse=function(e){var t=0,r="",i="",n=0,o="",s="",a=y.display;if("undefined"!=typeof this.zdpbjs.libLoaded)for(var d in this.bids){if(d===e){var u=this.zdpbjs.getAdserverTargetingForAdUnitCode(e);this.isDebugOn&&console.log&&(console.log(l.getTimestamp()+" Are all bids available?:"+this.zdpbjs.allBidsAvailable()),console.log(l.getTimestamp()+" Dumping all bid objects to console:"),this.zdpbjs.getBidResponses(e),console.log(l.getTimestamp()+" Prebid Response with:"),console.log(u)),"undefined"!=typeof u&&"undefined"!=typeof u.hb_cpm&&u.hb_cpm>t&&(t=u.hb_cpm,r=u.hb_bidder,i=u.hb_adid,n=u.hb_tt,u.hb_mediaType&&(a=u.hb_mediaType),u.hb_vastXml&&(s=u.hb_vastXml),u.hb_vastUrl&&(o=u.hb_vastUrl))}for(var f in this.bids[d].Bids)this.bids[d].Bids[f].bidder===r&&(r=this.bids[d].Bids[f].partnerName)}return new b.BidResponse(this.getName(),i,t,s,o,r,a,"",n)},t.prototype.renderAd=function(e,t){this.isDebugOn&&console.log(l.getTimestamp()+" Rendering prebid"),this.zdpbjs.renderAd(e,t.AdCode)},t}(p),v=function(){function e(e,t,r){this.slotId=e,this.sizes=[t,r],this.bids=[]}return e.prototype.addBids=function(e){this.bids.push(e)},Object.defineProperty(e.prototype,"SlotId",{get:function(){return this.slotId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Sizes",{get:function(){return this.sizes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Bids",{get:function(){return this.bids},enumerable:!0,configurable:!0}),e}();t.exports=m}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/bidders/Prebid.ts","/src/bidders")},{"../Util":6,"../analytics/PreBidAnalytic":10,"../zfbid":"ZFBid","./Bidder":11,"./BidderName":12,"./MediaType":13,_process:5,buffer:2}],16:[function(e,t,r){(function(r,i,n,o,s,a,d,u,f){"use strict";var c=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},p=e("./Bidder"),h=e("./BidderName"),l=e("../Util"),b=e("../zfbid"),g=e("./MediaType"),y=function(e){function t(t,r,i,n){var o=this;e.call(this,t,r),this.propertiesManager=i,this.bidAnalytics=n,this.callback=function(){o.endBidTime=(new Date).getTime(),o.callbackOnComplete(o)};var s=window;s.rubicontag=s.rubicontag||{},this.rubicontag=s.rubicontag,this.rubicontag.cmd=this.rubicontag.cmd||[],this.bids={}}return c(t,e),t.prototype.getName=function(){return h.RubiconFastLane},t.prototype.addBid=function(e,t,r,i,n){var o=this.getBid(e,t,r);o.addBids({placement:i})},t.prototype.getBid=function(e,t,r){var i=this.bids[e];return i||(i=new m(e,t,r),this.bids[e]=i),i},t.prototype.registerBids=function(){var e=this;this.rubicontag.cmd.push(function(){var t=window;e.rubicontag=t.rubicontag;for(var r in e.bids)e.rubicontag.defineSlot(e.bids[r].Bids.placement,[e.bids[r].Sizes],e.bids[r].Bids.placement),e.rubicontag.run(e.callback)})},t.prototype.invokeBeforeRegister=function(){var e=this;!function(){var t=11990,r=document.createElement("script");r.type="text/javascript",r.async=!1,e.startBidTime=(new Date).getTime(),r.src=("https:"===document.location.protocol?"https:":"http:")+"//ads.rubiconproject.com/header/"+t+".js";var i=document.getElementsByTagName("script")[0];i.parentNode.appendChild(r)}()},t.prototype.invokeAfterRegister=function(){},t.prototype.getResponse=function(e){var t=0,r="",i="";for(var n in this.bids)if(n===e){var o=this.rubicontag.getSlot(e).getAdServerTargeting();this.isDebugOn&&console.log&&(console.log(l.getTimestamp()+" Rubicon Fastlane Response with:"),console.log(o))}return new b.BidResponse(this.getName(),i,t,"","",r,g.video,"",this.endBidTime-this.startBidTime)},t.prototype.renderAd=function(e,t){this.isDebugOn&&console.log(l.getTimestamp()+" Rendering prebid"),this.rubicontag.renderCreative(e,t.AdCode,0)},t}(p),m=function(){function e(e,t,r){this.slotId=e,this.sizes=[t,r],this.bids=[]}return e.prototype.addBids=function(e){this.bids.push(e)},Object.defineProperty(e.prototype,"SlotId",{get:function(){return this.slotId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Sizes",{get:function(){return this.sizes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Bids",{get:function(){return this.bids},enumerable:!0,configurable:!0}),e}();t.exports=y}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/bidders/RubiconFastLane.ts","/src/bidders")},{"../Util":6,"../zfbid":"ZFBid","./Bidder":11,"./BidderName":12,"./MediaType":13,_process:5,buffer:2}],17:[function(e,t,r){(function(r,i,n,o,s,a,d,u,f){"use strict";var c=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},p=e("./Bidder"),h=e("./BidderName"),l=e("../Util"),b=e("../zfbid"),g=e("./MediaType"),y=function(e){function t(t,r,i,n){var o=this;e.call(this,t,r),this.propertiesManager=i,this.bidAnalytics=n,this.rubiconVideoLoaded=!1,this.cmd=[],this.callback=function(){o.endBidTime=(new Date).getTime(),o.callbackOnComplete(o)},this.init=function(){for(var e in o.cmd){var t=o.cmd[e];t()}};var s=window;s.rubicontag=s.rubicontag||{},this.rubicontag=s.rubicontag,this.rubicontag.cmd=this.rubicontag.cmd||[],this.bids={}}return c(t,e),t.prototype.getName=function(){return h.RubiconVideo},t.prototype.addBid=function(e,t,r,i,n,o,s,a,d){var u=this.bids[e];u||(u=new m(e,t,r,i,n,o,s,a,d),this.bids[e]=u)},t.prototype.registerBids=function(){var e=this,t=window;this.rubicontag=t.rubicontag,t.rubicontag&&t.rubicontag.video?this.registerToRubicon():this.cmd.push(function(){e.registerToRubicon()})},t.prototype.registerToRubicon=function(){for(var e in this.bids){var t=window;this.rubicontag=t.rubicontag;var r={account_id:this.bids[e].AccountId,site_id:this.bids[e].SiteId,zone_id:this.bids[e].ZoneId,size_id:this.bids[e].SizeId,width:this.bids[e].Width,height:this.bids[e].Height};this.rubicontag.video.defineSlot(this.bids[e].Placement,r)}this.rubicontag.video.run(this.callback)},t.prototype.invokeBeforeRegister=function(){var e=this;!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!1,e.startBidTime=(new Date).getTime(),t.onload=function(){e.rubiconVideoLoaded=!0,e.init()},t.src=("https:"===document.location.protocol?"https:":"http:")+"//ads.aws.rubiconproject.com/video/vulcan.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.appendChild(t)}()},t.prototype.invokeAfterRegister=function(){},t.prototype.getResponse=function(e){var t=0,r="",i="";for(var n in this.bids)if(this.bids[n].SlotId===e){r=this.bids[n].Name;var o=this.rubicontag.video.getAllSlots(e);for(var s in o){var a=o[s];if("ok"===a.rawResponses[s].status)for(var d in a.rawResponses[s].ads){var u=a.rawResponses[s].ads[d];t=u.cpm,i=u.depot_url}}this.isDebugOn&&console.log&&(console.log(l.getTimestamp()+" Rubicon Video Response with:"),console.log(o));break}return new b.BidResponse(this.getName(),"",t,"",i,"rubicon",g.video,"",this.endBidTime-this.startBidTime)},t.prototype.renderAd=function(e,t){},t}(p),m=function(){function e(e,t,r,i,n,o,s,a,d){this.slotId=e,this.width=t,this.height=r,this.placement=i,this.name=n,this.accountId=o,this.zoneId=s,this.siteId=a,this.sizeId=d}return Object.defineProperty(e.prototype,"SlotId",{get:function(){return this.slotId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Width",{get:function(){return this.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Height",{get:function(){return this.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Placement",{get:function(){return this.placement},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Name",{get:function(){return this.name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"AccountId",{get:function(){return this.accountId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ZoneId",{get:function(){return this.zoneId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"SiteId",{get:function(){return this.siteId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"SizeId",{get:function(){return this.sizeId},enumerable:!0,configurable:!0}),e}();t.exports=y}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/bidders/RubiconVideo.ts","/src/bidders")},{"../Util":6,"../zfbid":"ZFBid","./Bidder":11,"./BidderName":12,"./MediaType":13,_process:5,buffer:2}],ZFBid:[function(e,t,r){(function(t,i,n,o,s,a,d,u,f){"use strict";var c=e("./bidders/OpenX"),p=e("./bidders/Prebid"),h=e("./bidders/RubiconFastLane"),l=e("./bidders/RubiconVideo"),b=e("./Util"),g=e("./bidders/BidderName"),y=e("./analytics/BidAnalytics"),m=e("./analytics/ConsoleLogger"),v=function(){function e(e,t,r,i,n){var o=this;this.callbackFunc=r,this.enableAnalytics=i,this.pgUrl=n,this.responses={},this.bidRequestComplete=function(e){o.bidders.headerBidComplete(e,o.isDebug),o.bidders.areBiddersReady()&&o.initAdserver()},this.initAdserver=function(){if(!o.isAdserverSet){o.isAdserverSet=!0;var e=o.bidders.getBidders();clearTimeout(o.timer);for(var t=0,r=o.slotIds;t<r.length;t++){var i=r[t],n=0,s=void 0;for(var a in e){var d=e[a];if(d.isRequestComplete){var u=d.getResponse(i);n<u.Price&&(n=u.Price,s=u)}}s&&n>0&&(o.responses[i]=s,o.bidAnalytics.setBidWon(s.BidderName,i,s.Price,s.PmpDealId,s.TimeTaken)),o.isDebug&&(console.log("Response for "+i+" is"),console.log(s))}if(o.enableAnalytics){var f=new m;f.logData(o.bidAnalytics.getEvents())}o.callbackFunc(o.responses)}},this.isDebug=b.isDebugOn(),this.bidders=new w,this.isAdserverSet=!1,this.timeout=e?e:400,this.slotIds=[],this.propertiesManager=new A(t),this.bidAnalytics=new y(this.enableAnalytics)}return e.prototype.addBids=function(e,t,r,i){for(var n=0,o=this.slotIds;n<o.length;n++){var s=o[n];if(s===e)return void console.error("Placement already added. Please check your setup")}this.slotIds.push(e);for(var a=0;a<i.length;a++){var d=i[a],u=void 0;switch(d.name){case"openx":var f=this.getOpenXBid();f.addBid(e,d.cf,t,r,d.placement,d.partnerName);break;case"rubiconfastlane":var c=this.getRubiconFastLane();c.addBid(e,t,r,d.placement,d.partnerName);break;case"rubiconvideo":var p=this.getRubiconVideo();p.addBid(e,t,r,d.placement,d.name,d.accountId,d.zoneId,d.siteId,d.sizeId);break;case"aol":u=this.getPrebid(),u.addAolBidder(e,d.name,d.network,d.placement,d.sizeId,d.alias,d.partnerName,t,r);break;case"brealtime":u=this.getPrebid(),u.addBrealTimeBidder(e,d.name,d.placementId,d.partnerName,t,r);break;case"pulsepoint":u=this.getPrebid(),u.addPulsePointBidder(e,d.name,d.cf,d.cp,d.ct,d.placement,d.partnerName,t,r);break;case"appnexus":u=this.getPrebid(),u.addAppnexusBidder(e,d.name,d.placementId,d.partnerName,t,r);break;case"rubicon":u=this.getPrebid(),u.addRubiconBidder(e,d.name,d.accountId,d.siteId,d.zoneId,d.partnerName,t,r);break;case"sovrn":u=this.getPrebid(),u.addSovrnBidder(e,d.name,d.tagid,d.partnerName,t,r);break;case"criteoApac":u=this.getPrebid(),u.addCriteoApacBidder(e,d.name,d.nid,d.cookieName,d.varName,this.propertiesManager.getCriteoApacZoneMap(),d.partnerName,t,r);break;case"tremor":u=this.getPrebid(),u.addTremorBidder(e,d.name,d.adCode,this.pgUrl,d.mediaId,d.partnerName,t,r);break;case"innity":u=this.getPrebid(),u.addInnityBidder(e,d.name,d.pub,d.zone,d.partnerName,t,r);case"criteo":u=this.getPrebid(),u.addCriteoBidder(e,d.name,d.zoneId,d.partnerName,t,r);break;default:this.isDebug&&console.log("Failed to match bidder:"+d.name)}}},e.prototype.start=function(){var e=this.bidders.getBidders();for(var t in e)e[t].invokeBeforeRegister();for(var t in e)e[t].registerBids(this.propertiesManager);for(var t in e)e[t].invokeAfterRegister();this.timeoutBids()},e.prototype.getOpenXBid=function(){var e,t=this.bidders.getBidder(g.OpenX);return t?e=t:(e=new c(this.isDebug,this.bidRequestComplete,this.propertiesManager,this.bidAnalytics),this.bidders.registerBidder(e,this.isDebug)),e},e.prototype.getPrebid=function(){var e,t=this.bidders.getBidder(g.Prebid);return t?e=t:(e=new p(this.isDebug,this.timeout,this.bidRequestComplete,this.bidAnalytics),this.bidders.registerBidder(e,this.isDebug)),e},e.prototype.getRubiconFastLane=function(){var e,t=this.bidders.getBidder(g.RubiconFastLane);return t?e=t:(e=new h(this.isDebug,this.bidRequestComplete,this.propertiesManager,this.bidAnalytics),this.bidders.registerBidder(e,this.isDebug)),e},e.prototype.getRubiconVideo=function(){var e,t=this.bidders.getBidder(g.RubiconVideo);return t?e=t:(e=new l(this.isDebug,this.bidRequestComplete,this.propertiesManager,this.bidAnalytics),this.bidders.registerBidder(e,this.isDebug)),e},e.prototype.renderAd=function(e,t){var r=this.responses[t];if(r){var i=this.bidders.getBidder(r.BidType);this.isDebug&&console.log(b.getTimestamp()+(" Entered Render Ad for "+r.BidderName)),i.renderAd(e,r)}else this.isDebug&&console.log(b.getTimestamp()+" Bid response not found ")},e.prototype.getResponse=function(e){return this.responses[e]},e.prototype.timeoutBids=function(){var e=this;this.timer=setTimeout(function(){clearTimeout(e.timer),e.isDebug&&console.log(b.getTimestamp()+" Timeout occured"),e.bidAnalytics.setAllBidTimeout("all","all"),e.initAdserver()},this.timeout)},e}();r.ZHeaderBidder=v;var w=function(){function e(){var e=this;this.bidderList={},this.registerBidder=function(t,r){r&&console.log(b.getTimestamp()+" Registering Bidder with ZEDO-"+g[t.getName()]),e.bidderList[t.getName()]=t},this.headerBidComplete=function(t,r){r&&console.log(b.getTimestamp()+" Loaded Bidder-"+g[t.getName()]),e.bidderList[t.getName()].setRequestComplete(!0)}}return e.prototype.getBidder=function(e){return this.bidderList[e]},e.prototype.getBidders=function(){return this.bidderList},e.prototype.areBiddersReady=function(){for(var e in this.bidderList){var t=this.bidderList[e];if(!t.isRequestComplete())return!1}return!0},e}();r.Bidders=w;var B=function(){function e(e,t,r,i,n,o,s,a,d){this.bidType=e,this.adcode=t,this.price=r,this.vastXml=i,this.vastUrl=n,this.bidderName=o,this.mediaType=s,this.pmpDealId=a,this.timeTaken=d}return Object.defineProperty(e.prototype,"BidType",{get:function(){return this.bidType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"MediaType",{get:function(){return this.mediaType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"AdCode",{get:function(){return this.adcode},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"Price",{get:function(){return this.price},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"VastXml",{get:function(){return this.vastXml},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"VastUrl",{get:function(){return this.vastUrl},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"BidderName",{get:function(){return this.bidderName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"PmpDealId",{get:function(){return this.pmpDealId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"TimeTaken",{get:function(){return this.timeTaken},enumerable:!0,configurable:!0}),e}();r.BidResponse=B;var A=function(){function e(e){this.aolShare=0,this.brealtimeShare=0,this.pulsePointShare=0,this.appnexusShare=0,this.rubiconShare=0,this.openXShare=0,this.openXPmpShare=0,this.sovrnShare=0,this.criteoApacShare=0,this.criteoShare=0,this.tremorShare=0,this.innityShare=0,this.criteoApacZoneMap={};for(var t in e){var r=e[t];r.properties&&("aol"===r.name&&(this.aolShare=this.getNumberProperty(r.properties,"share")),"brealtime"===r.name&&(this.brealtimeShare=this.getNumberProperty(r.properties,"share")),"pulsepoint"===r.name&&(this.pulsePointShare=this.getNumberProperty(r.properties,"share")),"appnexus"===r.name&&(this.appnexusShare=this.getNumberProperty(r.properties,"share")),"rubicon"===r.name&&(this.rubiconShare=this.getNumberProperty(r.properties,"share")),"openx"===r.name&&(this.openXShare=this.getNumberProperty(r.properties,"share"),this.openXPmpShare=this.getNumberProperty(r.properties,"pmpshare")),"sovrn"===r.name&&(this.sovrnShare=this.getNumberProperty(r.properties,"share")),"criteoApac"===r.name&&(this.criteoApacShare=this.getNumberProperty(r.properties,"share"),this.criteoApacZoneMap=this.getJsonProperty(r.properties,"zonemap")),"criteo"===r.name&&(this.criteoShare=this.getNumberProperty(r.properties,"share")),"tremor"===r.name&&(this.tremorShare=this.getNumberProperty(r.properties,"share")),"innity"===r.name&&(this.innityShare=this.getNumberProperty(r.properties,"share")))}}return e.prototype.getNumberProperty=function(e,t){for(var r in e)if(e[r].name===t)return e[r].value;return 0},e.prototype.getJsonProperty=function(e,t){for(var r in e)if(e[r].name===t)return e[r].value;return{}},e.prototype.getAolShare=function(){return this.aolShare},e.prototype.getBrealTimeShare=function(){return this.brealtimeShare},e.prototype.getPulsePointShare=function(){return this.pulsePointShare},e.prototype.getAppnexusShare=function(){return this.appnexusShare},e.prototype.getRubiconShare=function(){return this.rubiconShare},e.prototype.getOpenXShare=function(){return this.openXShare},e.prototype.getOpenXPmpShare=function(){return this.openXPmpShare},e.prototype.getSovrnShare=function(){return this.sovrnShare},e.prototype.getCriteoApacShare=function(){return this.criteoApacShare},e.prototype.getCriteoApacZoneMap=function(){return this.criteoApacZoneMap},e.prototype.getCriteoShare=function(){return this.criteoShare},e.prototype.getTremorShare=function(){return this.tremorShare},e.prototype.getInnityShare=function(){return this.innityShare},e}();r.PropertiesManager=A}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/zfbid.ts","/src")},{"./Util":6,"./analytics/BidAnalytics":8,"./analytics/ConsoleLogger":9,"./bidders/BidderName":12,"./bidders/OpenX":14,"./bidders/Prebid":15,"./bidders/RubiconFastLane":16,"./bidders/RubiconVideo":17,_process:5,buffer:2}]},{},["ZFBid"])("ZFBid")});
function getsizeList(placements){
var sizeList=new Array();
for(var i=0;i<placements.length;i++){
var obj={};
obj.slot_id=placements[i].si;
obj.dim=placements[i].w+"x"+placements[i].h;
sizeList.push(obj);
}
return sizeList;
}
function loadHeaderBidder(nwId,bidUrl,sizeList,callbackMasterTag,timeout){
zmt_logger(U14()+" ZAd Log:Calling headerbid JSON file");
var xhttp,zdTimer,fetchTimeout=false;var url="https://sz1.zedo.com/jsc/utils/hbd/HB_Ids.json?"+U14();
if(XMLHttpRequest){
xhttp=new XMLHttpRequest();
}else{
xhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.onreadystatechange=function(){
if(xhttp.readyState===4){
if(xhttp.status===200){
zmt_logger(U14()+" Headerbid JSON file Loaded");
if(fetchTimeout){
zmt_logger(U14()+" Not proceeding with headerbid since it was timed out");
}else{
clearTimeout(zdTimer);
fetchHeaderBidDetails(nwId,bidUrl,JSON.parse(xhttp.responseText),sizeList,callbackMasterTag);
}
}else{
zmt_logger(U14()+" Got Error from server "+xhttp.responseText+":"+xhttp.status+":"+xhttp.error);
fetchHeaderBidDetails(nwId,bidUrl,"",sizeList,callbackMasterTag);
}}
};
xhttp.open("GET",url,true);
xhttp.withCredentials=true;
xhttp.setRequestHeader("Content-Type","text/plain;"+(!this.charset)?"UTF-8":this.charset);
xhttp.send();
zdTimer=setTimeout(function(){clearTimeout(zdTimer);fetchHeaderBidDetails(nwId,bidUrl,"",sizeList,callbackMasterTag);},timeout);
}
function fetchHeaderBidDetails(nwId,bidUrl,response,sizeList,callbackMasterTag){
var nwBidList,nwProps;
if(response!=""&&response.headerBid){
nwBidList=response.headerBid;
var headerBids;
for(var i=0;i<nwBidList.length;i++){
if(nwBidList[i].nwId==nwId){
if(nwBidList[i].props){
nwProps=nwBidList[i].props;
}
headerBids=nwBidList[i];
break;
}}
if(typeof headerBids!=='undefined'){
if(typeof ZFBid!=='undefined')
try{
var hdrs=window["zfhs_hdrs"]||new ZFBid.ZHeaderBidder(headerBids["timeout"],nwProps,callbackMasterTag);
window["zfhs_hdrs"]=hdrs;
var hbids=headerBids["bids"];var hasBids=false;
for(var i=0;i<sizeList.length;i++){
for(var j=0;j<hbids.length;j++){
var bidSize=hbids[j].width+"x"+hbids[j].height;var obj=sizeList[i];
if(sizeList[i].dim===bidSize){
hasBids=true;
hdrs.addBids(obj.slot_id,hbids[j].width,hbids[j].height,hbids[j].bidders);
}}}
if(hasBids){
hdrs.start();
if(bidUrl&&bidUrl.length>7){
zd_firepbTracker("Request",bidUrl);
}
}else{
zmt_logger(U14()+":No bids found");
callbackMasterTag(null);
}
}catch(err){
zmt_logger(U14()+" Error while calling header bidding:"+err);
callbackMasterTag(null);
}
}else{
callbackMasterTag(null);
}
}else{
callbackMasterTag(null);
}}
function zd_firepbTracker(trackerName,trackerURL){
if(typeof trackerURL!=="undefined"&&trackerURL!==""){
zd_pixel_img=document.createElement('img');
zd_pixel_img.src=trackerURL;
zmt_logger(U14()+" ZAD Log:"+trackerName+" Tracker fired");
}
};
(function(){
var p17=false;var q6=false;
zmt_get_tag=function(network,master_id){
masterObj=new zz_zdmaster();
masterObj.init(master_id);
masterObj.zmt_set_network(network);
masterObj.zmt_set_masterid(master_id);
return masterObj;
};
get_zmt_paramStr=function(param_name,seq_id,param_value){
var str="";
if(typeof param_value!="undefined"){
if(typeof seq_id!="undefined"){
str=param_name+seq_id;
}else{
str=param_name;
}
str=str+"="+param_value;
}
return str;
};
get_zmt_demoGraph_param_str=function(param_name,param_value){
var str="";var t16=new RegExp(",","g");
if(typeof param_value!="undefined"){
param_value=param_value.replace(t16,"Z");
str=param_name;
str=str+":"+param_value;
}
return str;
};
get_zmt_urlAppended=function(origUrl,newVal,seperator){
var str="";
if(typeof newVal!="undefined"&&newVal!=''){
if(origUrl!=''){
str=origUrl+seperator+newVal;
}else{
str=newVal;
}
}else{
str=origUrl;
}
return str;
};
var a11=new function(){var r4=this;r4.zd_has_flash=false;
var zzDtctRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7"},{"name":"ShockwaveFlash.ShockwaveFlash.6"},{"name":"ShockwaveFlash.ShockwaveFlash"}];var zzgetXObj=function(name){var obj=-1;
try{
obj=new ActiveXObject(name);
}
catch(err){
obj={zzactiveXError:true};
}
return obj;
};
r4.a11=function(){
if(navigator.plugins&&navigator.plugins.length>0){
var y7='application/x-shockwave-flash';var a5=navigator.mimeTypes;
if(a5&&a5[y7]&&a5[y7].enabledPlugin&&a5[y7].enabledPlugin.description){
r4.zd_has_flash=true;
}
}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){
var n9=-1;
for(var i=0;i<zzDtctRules.length&&n9==-1;i++){
try{
var obj=zzgetXObj(zzDtctRules[i].name);
if((typeof(obj)!=='undefined')&&!obj.zzactiveXError){
r4.zd_has_flash=true;
return;
}
}catch(err){
r4.zd_has_flash=false;
}}}
}();
};
get_zmt_flash_bit=function(){
var v3=navigator.userAgent.toLowerCase();var p18=(v3.indexOf('mac')!=-1);var c18=parseInt(navigator.appVersion);
var c19=(!p18&&(v3.indexOf('opera')==-1)&&(v3.indexOf('msie')!=-1)&&(c18>=4)&&(v3.indexOf('webtv')==-1
)&&(v3.indexOf('msie 4')==-1));
var v16=navigator.javaEnabled();var z3=1;var a27=document.createElement("audio");var d31=document.createElement("video");var d20={audio:(a27.play)?true:false,video:(d31.play)?true:false};
if(d20.audio&&d20.video){
z3 |=128;
}
if(v16){z3 |=4;}
if(a11.zd_has_flash){z3 |=8;}
if(c19){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
z3 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
z3 |=16;
}}}
return z3;
};
isValidNetwork=function(networkID){
if(typeof networkID=='undefined'){
return false;
}
return true;
};
zd_get_zmtUrl=function(zdmaster,bidder_result){
var v10="https://saxp.zedo.com/asw";var z0="";var d0="";var o8="";var r8=zdmaster.placements;var q19=20;
if(!isValidNetwork(zdmaster.n)){
return "";
}
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("n",'',zdmaster.n),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("gc",'',zdmaster.gc),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("tmy",'',zdmaster.tmy),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("ce",'',zdmaster.n0),"&");
if(zdmaster.zd_async==1){
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("tt",'',"8"),"&");
}else{
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("tt",'',"0"),"&");
}
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("r",'',get_zmt_flash_bit()),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("cs",zdmaster.cs),"&");
if(r8.length<20){
q19=r8.length;
}
for(i=0;i<q19;i++){
var d0='';var e0=r8[i];var o0=e0.sq;
o8=get_zmt_urlAppended(o8,o0,",");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("c",o0,e0.c),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("q",o0,e0.q),"&");
var w5=e0.s;
if(!w5){w5=0;}
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("s",o0,w5),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("d",o0,e0.d),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("mp",o0,e0.mp),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("p",o0,zd_get_custom_param(e0.si,e0.p,bidder_result)),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("adm",o0,e0.adm),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("$",o0,e0.$),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("pn",o0,e0.pn),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("ssm",o0,e0.ssm),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("ssp",o0,e0.ssp),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("sct",o0,e0.sct),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("t",o0,e0.t),"&");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("1",e0.d1),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("2",e0.d2),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("3",e0.d3),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("4",e0.d4),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("5",e0.d5),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("6",e0.d6),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("7",e0.d7),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("8",e0.d8),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("9",e0.d9),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("a",e0.da),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("b",e0.db),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("c",e0.dc),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("d",e0.dd),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("e",e0.de),",");
d0=get_zmt_urlAppended(d0,get_zmt_demoGraph_param_str("f",e0.df),",");
if(d0!=''){
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("dm",o0,d0),"&");
}
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("ct",o0,zd_get_ct_param(e0.si,e0.ct,bidder_result)),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("fw",o0,e0.fw),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("fh",o0,e0.fh),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("mw",o0,e0.mw),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("mh",o0,e0.mh),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("mxw",o0,e0.mxw),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("mxh",o0,e0.mxh),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("apv",o0,e0.apv),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("ap",o0,e0.ap),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("ovr",o0,e0.ovr),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("ove",o0,e0.ove),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("hfs",o0,e0.hfs),"&");
}
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("mi",'',zdmaster.mi),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("pi",'',o8),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("z",'',Math.random()),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("pu",'',zd_get_page_url(true,zdmaster.zd_pu)),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("ru",'',zd_get_page_ref(true)),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("zpu",'',zd_get_top_prnt_url_options(true,zdmaster.zd_pu)),"&");
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("tpu",'',(zd_get_tpu(zdmaster.zd_pu))),"&");
callUspAPI(uspResponseCallback,10);
z0=get_zmt_urlAppended(z0,get_zmt_paramStr("usp",'',zd_usp),"&");
return v10+'/fmm/'+zdmaster.n+"/fmm.js?"+z0;
};
zd_get_ct_param=function(slot_id,param_ct,bidder_result){
var i4=param_ct?param_ct:"";
if(bidder_result&&bidder_result.hasOwnProperty(slot_id)){
var z4=bidder_result[slot_id];
if(z4){
i4=i4+"^pb_bp:"+z4.Price+"^pb_bidder:"+z4.BidderName;
if(z4.PmpDealId&&z4.PmpDealId.length>0){
i4=i4+"^pmp:"+z4.PmpDealId;
}
zmt_logger(U14()+" ZINC Log:Value is set for zflag_ct='"+i4+"'");
}else{
i4=i4+"^pb_bidder:none";
}}
return i4;
};
zd_get_custom_param=function(slot_id,param_custom,bidder_result){
var e12=param_custom;
if(bidder_result&&bidder_result.hasOwnProperty(slot_id)){
var z4=bidder_result[slot_id];
if(z4){
if(!e12){
e12=slot_id;
}else{
console.log("Failed to set header bid custom since the param is already in use");
}}}
return e12;
};
create_iframe=function(content,placement){
var p=document.getElementById(placement.si);var t28=getMSIEVr();
if(p!=null){
var w0=document.createElement('iframe');
w0.style.width=placement.w+'px';
w0.style.height=placement.h+'px';
w0.id="zd_async_frame_"+placement.si;
w0.name="zd_async_frame_"+placement.si;
w0.scrolling="no";
w0.style.marginHeight='0px';
w0.style.marginWidth='0px';
w0.frameBorder='0';
w0.style.hspace='0px';
w0.style.vspace='0px';
w0.allowFullscreen='true';
w0.allowTransparency='true';
w0.style.frameSpacing='0px';
w0.src="javascript:\"<html><body style='background:transparent'></body></html>\"";
p.appendChild(w0);
placement.ir=true;
rIframe=document.getElementById("zd_async_frame_"+placement.si);
var g=rIframe.contentWindow?rIframe.contentWindow.document:rIframe.contentDocument;
var w17='<html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"></head><body marginwidth=0 marginheight=0 leftmargin=0 rightmargin=0 topmargin=0 style="text-align:center;">'+content+'</body></html>';
if(t28){
rIframe.contentWindow.contents=w17;
rIframe.src='javascript:window["contents"]';
}else{
try{
-1!=navigator.userAgent.indexOf("Firefox")&&g.open("text/html","replace"),g.write(w17),g.close();
}catch(Ex){
zmt_logger("Could not write content into iframe using the DOM standards method:"+Ex.w4)
}}}
};
getMSIEVr=function(){
var ua=navigator.userAgent,
ie_index=ua.indexOf("MSIE ");
if(ie_index==-1)return 0;
return parseFloat(ua.substring(ie_index+5,ua.indexOf(";",ie_index)));
};
zmt_render_placement=function(masterObj,placement){
if(masterObj.zd_async==1){
if(typeof zz_ad_list!="undefined"&&!placement.ir&&masterObj.zd_content_loaded){
create_iframe(zmt_show_ad(masterObj,placement),placement);
}
}else{
document.write(zmt_show_ad(masterObj,placement));
}
};
zmt_logger=function(text){
var q6=false;
if(window.console&&q6){
console.log(text);
}
};
zz_show_all_ads=function(master_id){
for(i=0;i<window.zz_zdmasters.length;i++){
masterObj=window.zz_zdmasters[i];
if(masterObj.zd_async==1&&masterObj.master_id==master_id){
masterObj.zd_content_loaded=true;
for(j=0;j<masterObj.placements.length;j++){
zmt_render_placement(masterObj,masterObj.placements[j]);
}}}
};
zz_callback_Tag=function(zdmaster,bidder_result){
var url;var n0=zdmaster.n0;
if(typeof n0=="undefined"||n0==''){
n0="UTF-8";
}
url=zd_get_zmtUrl(zdmaster,bidder_result)+"&ad_calls=";
if(zdmaster.placements!==0){
zmt_logger(url);
if(zdmaster.zd_async==1){
var v7=document.createElement('script');
v7.setAttribute('type','text/javascript');
v7.setAttribute('src',url);
v7.setAttribute('charset',n0);
v7.async=true;
document.getElementsByTagName('head')[0].appendChild(v7);
}else{
z0='<scr'+'ipt language="javascript" src="'+url+'" charset='+n0+'></scr'+'ipt>';
document.write(z0);
}}
};
zd_get_top_prnt_url_options=function(isJsTag,zd_pg_url){
var i17="";
try{
var z26=zd_get_domain(zd_detect_page_url(isJsTag));var c20=zd_get_top_parent_stack_url().split("?")[0];var w25=zd_get_domain(decodeURIComponent((zd_pg_url)));
i17=encodeURIComponent(z26+"_"+c20+"_"+w25+"_"+zd_get_stack_url_depth(c20)+"_"+zd_get_friendly_iframe_depth()+"_"+zd_pg_url);
}catch(t){}
return i17;
};
zmt_show_ad=function(masterObj,placement){
function F0(msg){
zmt_logger(msg);
};
zd_render_ad=function(masterObj,placement){
script_id=placement.si;
seq_id=placement.sq;
zmt_logger("script_id="+script_id);
if(typeof zz_ad_list=="undefined"){
if(isValidNetwork(masterObj.n)){
F0("zz_ad_list is undefined ");
}
return "";
}
if(typeof zz_ad_list[seq_id]=="undefined"){
F0("Error Invalid Placement-"+seq_id);
return;
}
n=document.getElementById(script_id);
if(n!=null){
var n0=masterObj.n0;
if(typeof n0=="undefined"||n0==''){
n0="charset=UTF-8";
}else{
n0="charset="+n0;
}
zmt_logger(script_id+"defined;;");
content=zz_ad_list[seq_id];
delete zz_ad_list[seq_id];
var a16="";
if(masterObj.zd_async==1){
a16="inDapIF=true;";
}
content="<scr"+"ipt language=\"Javascript\" "+n0+">"+a16+content+"</scr"+"ipt>";
}else{
F0("Failed to find script_id="+script_id);
content="";
}
return content;
};
return zd_render_ad(masterObj,placement);
};
}).call(this);
function U14(){
return(new Date()).getHours()+":"+(new Date()).getMinutes()+":"+(new Date()).getSeconds()+":"+(new Date()).getMilliseconds();
}
setTimeout(function(){
if(typeof zd_get_placements!='undefined'){
zd_get_placements();
}
});
