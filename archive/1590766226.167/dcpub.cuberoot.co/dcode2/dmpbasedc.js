

var srcLoc="https://cuberootdmp1.dc.cuberoot.co/dcode2/"; //location of the script container

var ISD=ISD;  //PASS the network id
var STD=STD;    //pass the site id
var pn=pn;    //pass the network name
var cn=cn;    //pass the site name
var parameters = tagparameters;
var dcver = "0.90" ;

 
var hotspot = "hotspot";
parameters =  decodeURI(parameters);

var reg = new RegExp(",", "g");
parameters = parameters.replace(reg,"_");

var reg1 = new RegExp(";", "g");
parameters = parameters.replace(reg1,"_");

parameters = encodeURI(parameters);


var headings = [];
var tag_names = {
	h1:1,
	h2:1,
	h3:1,
	h4:1,
	h5:1,
	h6:1
};

var ahs="";
try{
  function walk( root ) {
	if( root.nodeType === 1 && root.nodeName !== 'script' ) {
		if( tag_names.hasOwnProperty(root.nodeName.toLowerCase()) ) {
			headings.push( root );
		} else {
			for( var i = 0; i < root.childNodes.length; i++ ) {
				walk( root.childNodes[i] );
			}
		}
	}
  }
  walk( document.body );

  for( var i = 0; i < headings.length; i++ ) {
	ahs=headings[i].innerHTML;
  }
}
catch(err){

}

var met="";
try{
   met=document.getElementsByTagName("meta")[0].content;
}catch(err){}

var t = document.title;


function U22(isJSTag) {
    var w30 = '';
    try {
        if (isJSTag) {
            w30 = (typeof (location.href) == 'undefined' ? "" : encodeURIComponent(location.href));
        } else {
            w30 = (typeof (document.referrer) == 'undefined' ? "" : encodeURIComponent(document.referrer));
        }
    } catch (err) {}

    return w30;
}



ahs = "ref";
met = "meta";

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );   
    xmlHttp.send( null );
    return xmlHttp.responseText;
}



function httpGet1(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.withCredentials = true;
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function createCookieppid(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookieppid(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

/*

var ppidcuberoot = readCookieppid('spdsuid');
var data;

if(typeof ppidcuberoot!= 'undefined' && ppidcuberoot){
ppidcuberoot = ppidcuberoot.replace(/-/g, "_").replace(/#/g, "_");
}
else{
     ppidcuberoot = httpGet1("https://realtimesegmentsync.dc.cuberoot.co:8443/cookievalue/getCookieData");
     if(typeof ppidcuberoot!= 'undefined' && ppidcuberoot)
     createCookieppid('spdsuid',ppidcuberoot,7);

}
*/

var userip = '';


function addToStorage(name){
    var old = localStorage.getItem(name);
    if(old === null) old = genID();
    localStorage.setItem(name, old);
    return old;
}

function genID(){
        var guidHolder = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        var hex = '0123456789abcdef';
        var r = 0;
        var guidResponse = "";
        for (var i = 0; i < 36; i++){
                if (guidHolder[i] !== '-' && guidHolder[i] !== '4') {
                r = Math.random() * 16 | 0;
        }
                if (guidHolder[i] === 'x') {
                guidResponse += hex[r];
                }
                else if (guidHolder[i] === 'y') {
                 r &= 0x3; r |= 0x8; guidResponse += hex[r];
                }
                else {
                guidResponse += guidHolder[i];
                }
         }
    return guidResponse;
}

var data = "localStorageCuid";


var cuid = addToStorage(data);

t="";
met="";

function iframe() {

	var iframe = document.createElement('iframe');

	var r19 =document.referrer;//window.location.href;
	var ref= r19 ? encodeURIComponent(r19) : U22(true)  ;

	var r20 = location.href; 

	var pref = r20 ? encodeURIComponent(r20) : U22(true) ;

	var ifrSpidSrc=srcLoc+'passinfo.php?a='+STD+'&b='+ISD+"&ref="+ref+"&pref="+pref+"&pn="+pn+"&cn="+cn+"&h="+ahs+"&met="+met+"&t="+t+"&ip="+userip+"&hotspot="+hotspot+"&parameters="+parameters+"&cuid="+cuid+"&ord="+Math.random();

	ifrSpidSrc=ifrSpidSrc + "&dcver=" + dcver;

	iframe.src = ifrSpidSrc;
	iframe.width = '0';
	iframe.height = '0';
	iframe.id="cuberootid1";
	iframe.frameBorder = '0'; // Add this line
	document.body.appendChild(iframe); 
	// document.write('<ifr'+'ame src="'+ifrSpidSrc+'" width="0" height="0" style="hidden" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></ifr'+'ame>');

     
}

if (window.attachEvent) {window.attachEvent('onload', iframe);}
else if (window.addEventListener) {window.addEventListener('load', iframe, false);}
else {document.addEventListener('load', iframe, false);}

