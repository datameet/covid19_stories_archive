! function (d, c) {
    var a = "e91f95c5fd756b81263fe39d57b4175c";
    if (window.location.hostname == "in.ign.com" || window.location.hostname == "in.askmen.com") {
        a = "2a4f561c5a89ba1e738e253b2f53f40c"
    };
    c.reviveAsync = c.reviveAsync || {};
    var f = c.reviveAsync[a] = {
        id: Object.keys(c.reviveAsync).length,
        name: "revive",
        start: function () {
            var e = function () {
                try {
                    f.done || (f.done = !0, f.apply(f.detect()))
                } catch (g) {
                    console.log(g)
                }
            };
            "loading" === d.readyState ? setTimeout(e) : e()
        },
        ajax: function (e, g) {
            var h = new XMLHttpRequest;
            h.onreadystatechange = function () {
                4 == this.readyState && 200 == this.status && f.spc(JSON.parse(this.responseText))
            }, h.open("GET", e + "?" + f.encode(g).join("&"), !0), h.withCredentials = !0, h.send()
        },
        encode: function (m, n) {
            var h, i, e = [];
            for (h in m)
                if (m.hasOwnProperty(h)) {
                    var l = n ? n + "[" + h + "]" : h;
                    if (/string|number|boolean/.test(typeof m[h])) e.push(encodeURIComponent(l) + "=" + encodeURIComponent(m[h]));
                    else {
                        var g = f.encode(m[h], l);
                        for (i in g) e.push(g[i])
                    }
                } return e
        },
        apply: function (g) {
            if (g.zones.length) {
                var e = "http:" == d.location.protocol ? "http://wtf2.forkcdn.com/www/delivery/asyncspc.php" : "https://wtf2.forkcdn.com/www/delivery/asyncspc.php";
                var amp = (c.context && (c.context.tagName === 'AMP-EMBED' || c.context.tagName === 'AMP-AD')) ? true : false;
                g.zones = g.zones.join("|"), g.loc = d.location.href, (amp && d.referrer) && (g.loc = d.referrer), d.referrer && (g.referer = d.referrer), f.ajax(e, g)
            }
        },
        detect: function () {
            for (var o = d.querySelectorAll("ins[data-" + f.name + "-id='" + a + "']"), n = {
                    zones: [],
                    prefix: f.name + "-" + f.id + "-"
                }, g = 0; g < o.length; g++) {
                var k = o[g];
                if (k.hasAttribute("data-" + f.name + "-zoneid"))
                    for (var e, l = new RegExp("^data-" + f.name + "-(.*)$"), h = 0; h < k.attributes.length; h++)(e = k.attributes[h].name.match(l)) && ("zoneid" == e[1] ? (n.zones[g] = k.attributes[h].value, k.id = n.prefix + g) : "id" != e[1] && (n[e[1]] = k.attributes[h].value))
            }
            return n
        },
        createFrame: function (h) {
            var e = d.createElement("IFRAME"),
                g = e.style;
            return e.scrolling = "no", e.frameBorder = 0, e.width = h.width > 0 ? h.width : 0, e.height = h.height > 0 ? h.height : 0, g.border = 0, g.overflow = "hidden", e
        },
        loadFrame: function (g, e) {
            var h = g.contentDocument || g.contentWindow.document;
            h.open(), h.writeln("<!DOCTYPE html>"), h.writeln("<html>"), h.writeln('<head><base target="_top"></head>'), h.writeln('<body border="0" margin="0" style="margin: 0; padding: 0">'), h.writeln(e), h.writeln("</body>"), h.writeln("</html>"), h.close()
        },
        spc: function (k) {
            for (var e in k)
                if (k.hasOwnProperty(e)) {
                    var o = k[e],
                        n = d.getElementById(e);
                    if (n) {
                        var m = d.createElement("INS");
                        if (o.iframeFriendly) {
                            var l = f.createFrame(o);
                            m.appendChild(l), n.parentNode.replaceChild(m, n), f.loadFrame(l, o.html)
                        } else {
                            m.innerHTML = o.html;
                            for (var g = m.getElementsByTagName("SCRIPT"), l = 0; l < g.length; l++) {
                                for (var q = document.createElement("SCRIPT"), p = g[l].attributes, h = 0; h < p.length; h++) q[p[h].nodeName] = p[h].value;
                                g[l].innerHTML && (q.text = g[l].innerHTML), m.replaceChild(q, g[l])
                            }
                            n.parentNode.replaceChild(m, n)
                        }
                    }
                }
        }
    };
    try {
        f.start()
    } catch (b) {
        console.log(b)
    }
}(document, window);


if(typeof org=="undefined"){var org={}}if(typeof org.openx=="undefined"){org.openx={}}if(typeof org.openx.util=="undefined"){org.openx.util={}}if(typeof org.openx.SWFObjectUtil=="undefined"){org.openx.SWFObjectUtil={}}org.openx.SWFObject=function(f,d,m,g,j,l,n,i,a,e){if(!document.getElementById){return}this.DETECT_KEY=e?e:"detectflash";this.skipDetect=org.openx.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(f){this.setAttribute("swf",f)}if(d){this.setAttribute("id",d)}if(m){this.setAttribute("width",m)}if(g){this.setAttribute("height",g)}if(j){this.setAttribute("version",new org.openx.PlayerVersion(j.toString().split(".")))}this.installedVer=org.openx.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){org.openx.SWFObject.doPrepUnload=true}if(l){this.addParam("bgcolor",l)}var b=n?n:"high";this.addParam("quality",b);var k=(i)?i:window.location;this.setAttribute("xiRedirectUrl",k);this.setAttribute("redirectUrl","");if(a){this.setAttribute("redirectUrl",a)}};org.openx.SWFObject.prototype={setAttribute:function(a,b){this.attributes[a]=b},getAttribute:function(a){return this.attributes[a]},addParam:function(a,b){this.params[a]=b},getParams:function(){return this.params},addVariable:function(a,b){this.variables[a]=b},getVariable:function(a){return this.variables[a]},getVariables:function(){return this.variables},getVariablePairs:function(){var a=new Array();var b;var c=this.getVariables();for(b in c){a[a.length]=b+"="+c[b]}return a},getSWFHTML:function(){var d="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){d='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'"';d+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';var c=this.getParams();for(var a in c){d+=[a]+'="'+c[a]+'" '}var b=this.getVariablePairs().join("&");if(b.length>0){d+='flashvars="'+b+'"'}d+="/>"}else{d='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'">';d+='<param name="movie" value="'+this.getAttribute("swf")+'" />';var c=this.getParams();for(var a in c){d+='<param name="'+a+'" value="'+c[a]+'" />'}var b=this.getVariablePairs().join("&");if(b.length>0){d+='<param name="flashvars" value="'+b+'" />'}d+="</object>"}return d},write:function(a,b,d){if(this.skipDetect||this.installedVer.versionIsValid(this.getAttribute("version"))){var c=(typeof a=="string")?document.getElementById(a):a;c.innerHTML=this.getSWFHTML();this.logImpression(c,b);return true}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"))}}this.logImpression(c,d);return false},logImpression:function(c,a){if(a){var b=document.createElement("IMG");b.style.position="absolute";b.style.width=0;b.src=a;c.appendChild(b)}}};org.openx.SWFObjectUtil.getPlayerVersion=function(){var c=new org.openx.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description){c=new org.openx.PlayerVersion(a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."))}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var d=1;var b=3;while(d){try{b++;d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+b);c=new org.openx.PlayerVersion([b,0,0])}catch(f){d=null}}}else{try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(f){try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");c=new org.openx.PlayerVersion([6,0,21]);d.AllowScriptAccess="always"}catch(f){if(c.major==6){return c}}try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}}if(d!=null){c=new org.openx.PlayerVersion(d.GetVariable("$version").split(" ")[1].split(","))}}}return c};org.openx.PlayerVersion=function(a){this.major=a[0]!=null?parseInt(a[0]):0;this.minor=a[1]!=null?parseInt(a[1]):0;this.rev=a[2]!=null?parseInt(a[2]):0};org.openx.PlayerVersion.prototype.versionIsValid=function(a){if(this.major<a.major){return false}if(this.major>a.major){return true}if(this.minor<a.minor){return false}if(this.minor>a.minor){return true}if(this.rev<a.rev){return false}return true};org.openx.util={getRequestParameter:function(d){var c=document.location.search||document.location.hash;if(d==null){return c}if(c){var b=c.substring(1).split("&");for(var a=0;a<b.length;a++){if(b[a].substring(0,b[a].indexOf("="))==d){return b[a].substring((b[a].indexOf("=")+1))}}}return""}};org.openx.SWFObjectUtil.cleanupSWFs=function(){var c=document.getElementsByTagName("OBJECT");for(var b=c.length-1;b>=0;b--){c[b].style.display="none";for(var a in c[b]){if(typeof c[b][a]=="function"){c[b][a]=function(){}}}}};if(org.openx.SWFObject.doPrepUnload){if(!org.openx.unloadSet){org.openx.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",org.openx.SWFObjectUtil.cleanupSWFs)};window.attachEvent("onbeforeunload",org.openx.SWFObjectUtil.prepUnload);org.openx.unloadSet=true}}if(!document.getElementById&&document.all){document.getElementById=function(a){return document.all[a]}}var getQueryParamValue=org.openx.util.getRequestParameter;var FlashObject=org.openx.SWFObject;var SWFObject=org.openx.SWFObject;document.mmm_fo=1;