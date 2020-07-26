var ctrl=false;
var astart=false;
var mute=false;
var replay=false;
var fwd=false;
var rewind=false;
var download=false;
var skin="six";
var file;
var image;
var height;
var width;
var playlist;
var vplist=false;
var logopostion;
var logoimage;
var logolink;
var iframeuri;
var shareuri;
var sharesites=[];
var ratio;
var related_file;
var client='googima';
var admsg="";
var post_tag_url='';
var tag_url='';
var mob_ad_tag_url="";
var mid_adurl="";
var mid_offset="";
var onclick="play";
var autoplaytimer=5;
var oncomplete='autoplay';
var fallbackimage;
var fallbackurl;
var ads_cmsurl='';
var ads_token="";
//alert(ads_token);
var useragent=navigator.userAgent;
//console.log(useragent);
var winres		= useragent.search("Windows");

var isMobile            = false;
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
var hasFlashPlayerVersion=swfobject.hasFlashPlayerVersion("1");
var hls_stream=false;
var pdvideourl;
var ofile;
var fallbackurl;
var i=1;
var adnum=1;
//console.log("is mobile1="+isMobile);
//console.log("hasFlashPlayerVersion="+swfobject.hasFlashPlayerVersion("1"));

var skin_active="#ff9e19";
var skin_inactive="red";
var skin_bg="white";

var error_count=1;
var actual_play=1;
var video_title="";
var ad_stitching=0;
var video_stretching='';
var adsobj={};
function add_related_videos(r)
{
    related_file=r;
}

function set_video_stretching(vs)
{
    video_stretching=vs;
}
function isSafari() {
	 return /^((?!chrome).)*safari/i.test(navigator.userAgent);
}

function set_config()
{
    is_mobile();
    fallbackurl = (typeof(pdvideourl) != "undefined")?pdvideourl:file;
    //fallbackurl = file;
    //console.log("pd : " + fallbackurl);
    var mac_safari=false;
    if(winres >= 0){
	file = ofile;
    }else if(navigator.userAgent.indexOf('Mac')>1){
	if(isSafari() == true){
            mac_safari=true;
	    file = ofile;
	} 
    }
    //console.log(" = mac safari =" +mac_safari);
    if((!hasFlashPlayerVersion && isMobile ==false ) || navigator.userAgent.match(/Windows Phone/i))
    {
	//console.log(" = mac safari1 =" +mac_safari);
        file=fallbackurl;
	hls_stream=false;	
    }     
    if(isMobile == true && mob_ad_tag_url != '')
    {
        tag_url = mob_ad_tag_url;	
        //console.log("mobile tag1 = "+tag_url);
	//post_tag_url=mob_ad_tag_url;
    }
    else if(isMobile == true)
    {
	tag_url='';
	//console.log("mobile tag2 = "+tag_url);
	post_tag_url='';
    }
    if(mac_safari == true)
    {
	file=ofile;
	hls_stream=true;
    }
    //console.log(file);
}

function is_mobile()
{
    //isMobile            = false;
    //console.log(navigator.userAgent+" = here i am ");
    if( /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|mobile.*safari|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
    {
        //alert("here+is mobile");
        isMobile = true;
    }
    //console.log(" final is mobile ="+isMobile);
}
function share_active()
{
    sharesites=['reddit','facebook','twitter','pinterest','email','tumblr','googleplus','linkedin'];
}
function add_logo(i,l,p)
{
    logolink=l;
    logopostion=p;
    logoimage=i;
}

function get_playlist(p,v)
{
    playlist=p;
    vplist=v;
}

function is_mute(u)
{
    mute=u;
}

function set_height_width(h,w)
{
    height=h;
    //width=w;
    width="100%";
}
function set_height(h)
{
    height=h;   
}
function set_width(w)
{
    width=w;   
}

function set_controls(m)
{
    ctrl=m;
}

function set_auto_start(n)
{
    astart=n;
}

function get_set_videourl(gt_url)
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", gt_url, false);
    xhttp.send();
    var res=xhttp.responseText;    
    var parsed = JSON.parse(res);        
    //console.log(parsed);
    file=parsed.hls;
    console.log(file);
    pdvideourl=parsed.pd;
    ofile=file;
    if(ad_stitching ==1){
        if(parsed.cms_url !== undefined)
        {
            ads_cmsurl=parsed.cms_url;            
        }        
        ads_token=parsed.token;
    }
}

function set_file(f,of,pd)
{
    file=f;
    ofile=of;
    pdvideourl=pd;
}

function set_video_title(video_t)
{
    video_title=video_t;
}


function get_videoimage(i)
{
    image=i;
}

function add_replay(r)
{
    replay=r;
}

function add_fast_fwd(f)
{
    fwd=f;
}

function add_rewind(r)
{
    rewind=r;
}

function add_download(d)
{
    download=d;
}

function add_skin(skin_name,skin_ac,skin_ina,skin_bgc)
{
    skin=skin_name;
    skin_active=skin_ac;
    skin_inactive=skin_ina;
    skin_bg=skin_bgc;
}

function make_responsive(r)
{
    ratio=r;
}

function add_ad(c,m,t)
{
    client=c;
    //tag_url=t;
    //admsg=m;
	 set_ad("pre",t);
}
function add_post_ad(c,m,t)
{
    client=c;
    //post_tag_url=t;
    //admsg=m;
	 set_ad("post",t);
}

function add_adtag(offset,adurl)
{
    //mid_adurl=adurl;
    //mid_offset=offset;
	 set_ad(offset,adurl);
}

function add_pre_mob_ad(c,m,t)
{
    client=c;
    //mob_ad_tag_url=t;
    //admsg=m;
    if(isMobile==true){    
	 set_ad("pre",t);
    }
}

function on_error(v,i)
{
    fallbackurl=v;
    fallbackimage=i;
}

function set_player_key(key)
{
    //console.log("key"+jwplayer.key);
    jwplayer.key = key;
    //console.log("key"+key);
}

function isEmpty(f){
    return f==='';
}

function enable_adsparak()
{
    ad_stitching=1;
}
function set_ad(o,t){
	 var l = Object.keys(adsobj).length;
	 var label = "ad-"+(l+1);
	 var ad={};
	 ad.offset=o;
	 ad.tag=t;
	 adsobj[label]=ad;
}
function set_ad_client(c){
	 client=c;
}
function get_player(id)
{
    var player = jwplayer(id);
    var jw_obj={};
    jw_obj.ga={};
    //jw_obj.flashplayer='http://player.in.com/jv7/jwplayer.flash.7_4_4.swf';
    if(!isEmpty(astart))jw_obj.autostart=astart;

    /*setting up configuration*/
    if(!isEmpty(image))jw_obj.image=image;
    if(!isEmpty(ctrl))jw_obj.controls=ctrl;
    jw_obj.primary='html5';
    jw_obj.hlshtml=true;
    if(hls_stream == true){
	jw_obj.type='hls';
	//jw_obj.primary='flash';
    }
   
    if(!isEmpty(width))jw_obj.width=width;
    if(!isEmpty(height))jw_obj.height=height;
    if(!isEmpty(playlist))jw_obj.playlist=playlist;
    if(!isEmpty(vplist))jw_obj.visualplaylist=vplist;
    if(!isEmpty(mute))jw_obj.mute=mute;
    if(!isEmpty(ratio))jw_obj.aspectratio=ratio;
    if(!isEmpty(video_stretching))jw_obj.stretching=video_stretching;
    
    /*Configuring logo*/
    if(!isEmpty(logoimage)&!isEmpty(logopostion)){
        var logo_obj={};
        logo_obj.file=logoimage;
        logo_obj.position=logopostion;
        if(!isEmpty(logolink))
            logo_obj.link=logolink;
        jw_obj.logo=logo_obj;
    }
    /*Configuring 'sharing'*/
    if(sharesites.length){
        jw_obj.sharing=sharesites;
    }
    /*Configuring player skin*/
    if(!isEmpty(skin)){
        var skin_obj={};
        skin_obj.name=skin;
        if(!isEmpty(skin_active))
            skin_obj.active=skin_active;
        if(!isEmpty(skin_inactive))
            skin_obj.inactive=skin_inactive;
        if(!isEmpty(skin_bg))
            skin_obj.background=skin_bg;
        jw_obj.skin=skin_obj;
    }
    /*Configuring related videos*/
    if(!isEmpty(related_file)){
        var rel_obj={};
        rel_obj.file=related_file;
        if(!isEmpty(onclick))
            rel_obj.onclick=onclick;
        if(!isEmpty(oncomplete))
            rel_obj.oncomplete=oncomplete;
        if(!isEmpty(autoplaytimer))
            rel_obj.autoplaytimer=autoplaytimer;
        jw_obj.related=rel_obj;
    }
    
    if(ad_stitching==1)
	jw_obj.playlist=[{'sources': [{'file':ads_cmsurl}]}];
    else{
	if(!isEmpty(file))jw_obj.file=file;
	/*Configuring ads*/
	console.log("file given to player="+file);
	if(Object.keys(adsobj).length){
	    var ads_obj={};
	    ads_obj.client=client;
	    ads_obj.admessage=admsg;
	    ads_obj.schedule=adsobj;
	    jw_obj.advertising=ads_obj;
	}
    }

    
    console.log(jw_obj);
    /*Player final configuration*/
    player.setup(jw_obj);
        
    player.on('play', function(event) {
        
	if(adnum == 1 && i==1)
	{
	    ga('send', 'event', 'ad Block', 'count', video_title);
	    //console.log("Ad block");
	}
        if(i == 1){
            ga('send', 'event', 'Video Play', 'Play', video_title);
        i++;
        }
    });
    
    player.on('adPlay', function(event){
        //console.log("inside add");
        if(adnum == 1){
            ga('send', 'event', 'Video Advertisement', 'Play', video_title);
            adnum++;
        }
    });
    player.on('error', function(event) {
        console.log("error");
        //console.log(fallbackurl);
        //console.log(event);        
        //console.log(fallbackurl);
	//console.log("here error-end");
        if(error_count == 1){
            ga('send', 'event', 'Video Fallback', 'Play', event.message+' '+video_title);
            player.setup({
                ga:{},
                file:fallbackurl,
                image:image,
                primary: 'html',
                width: width,
                autostart: true
                
            });
            player.play();
	    player.on('error', function(event) {
		
		ga('send', 'event', 'Video Error', 'Error', event.message+' '+video_title);
	    });
        }
        else
        {
            //ga('send', 'event', 'Video Fallback', 'Error', event.message+' '+video_title);    
        }
        error_count++;
    });
    
    if(download)
    {
        player.addButton(
            "download.png",
            "Download Video",                    
            function() {
                        window.location.href = player.getPlaylistItem()['file'];
                        },
            "download"
        );   
    }   
        
    player.onReady(function(){ 
    var leftGroup = document.getElementsByClassName('jw-controlbar-left-group')[0];
    
    if(rewind)
    {
        var myRewButton = document.createElement("div");
        myRewButton.id = "myRewButton";
        myRewButton.setAttribute('class','jw-icon jw-icon-inline jw-button-color jw-reset jw-icon-backward2');
        myRewButton.setAttribute('onclick','jwplayer().seek(jwplayer().getPosition()-5)');
        
        leftGroup.insertBefore(myRewButton, leftGroup.childNodes[0]);
    }
    
    if(fwd)
    {
        var myFFButton = document.createElement("div");
        myFFButton.id = "myFFButton";
        myFFButton.setAttribute('class','jw-icon jw-icon-inline jw-button-color jw-reset jw-icon-forward3');
        myFFButton.setAttribute('onclick','jwplayer().seek(jwplayer().getPosition()+5)');
        leftGroup.insertBefore(myFFButton, leftGroup.childNodes[2]);
    }
    
    if(replay)
    {
        var myRepeatButton = document.createElement("div");
        myRepeatButton.id = "myRepeatButton";
        myRepeatButton.setAttribute('class','jw-icon jw-icon-inline jw-button-color jw-reset jw-icon-replay');
        myRepeatButton.setAttribute('onclick','jwplayer().seek(0)');
        leftGroup.insertBefore(myRepeatButton, leftGroup.childNodes[3]);
    }
    });
    
}

