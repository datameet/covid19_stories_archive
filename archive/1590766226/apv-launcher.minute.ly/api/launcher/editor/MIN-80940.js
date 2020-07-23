(function () {
	var min_validator = function () {
		var _userAgent = navigator.userAgent.toLowerCase();
		var _os = _blackList() || _tweezersOS(_userAgent);
		var _browser = _blackList() || _tweezersBrowser(_userAgent);
		var _isLPM = false;
		function isDeviceMobile() {
			return (/android|ios/).test(_os.name) || (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_userAgent.substr(0, 4)));
		}

		function isDeviceDesktop() {
			return !isDeviceMobile()
		}

		function isDeviceIPad() {
			return (navigator.platform === "iPad") || (/iPad/i).test(_userAgent);
		}

		function isOSiOS() {
			return (_os.name === "ios") || (/(?:iPhone|iPod|iPad)/i).test(_userAgent);
		}

		function isOSAndroid() {
			return _os.name === "android";
		}

		function isOSWindows() {
			return _os.name === "windows"
		}

		function isOSMac() {
			return _os.name === "mac os x"
		}

		function isOSOther() {
			return !isOSiOS() && !isOSAndroid() && !isOSWindows() && !isOSMac();
		}

		function isBrowserIE() {
			return _browser.name === "msie"
		}

		function isBrowserSafari() {
			return (isOSiOS() || (isDeviceDesktop() && _os.name === "mac os x")) && _browser.name === "safari";
		}

		function isBrowserChrome() {
			return _browser.name === "chrome";
		}

		function isBrowserEdge() {
			return _browser.name === "edge";
		}

		function isBrowserFirefox() {
			return _browser.name === "firefox";
		}


		function isBrowserOpera() {
			return _browser.name === "opera";
		}

		function isBrowserOther() {
			return _browser.name === "none" || (!isBrowserIE() && !isBrowserSafari() && !isBrowserChrome() && !isBrowserEdge() && !isBrowserFirefox() && !isBrowserOpera());
		}

		function osVersion() {
			return _os.version
		}

		function osName() {
			return _os.name
		}

		function browserVersion() {
			return _browser.version || [0];
		}

		function browserMajorVersion() {
			return _browser.version && _browser.version[0];
		}

		function browserName() {
			return _browser.name;
		}

		function isBrowserSupportsNonMuteAutoPlay() {
			return !isDeviceMobile() && (!isBrowserSafari() || browserMajorVersion() <= 10);
		}

		function isPromise(promise) {
			return promise && (typeof Promise === "function") && (promise instanceof Promise);
		}

		// pass error case and success case callback functions
		if (isDeviceMobile() && isBrowserSafari()) {
            var vid = document.createElement("video");
            vid.setAttribute("muted", "");
            vid.setAttribute("playsinline", "");
            vid.setAttribute("webkit-playsinline", "");

            var playPromise = vid.play();
            if (isPromise(playPromise) && playPromise.then && playPromise.catch) {
                playPromise.then(function (data) {
                    _isLPM = false;
                }).catch(function (err) {
                    if (err.code === 0) {
                        _isLPM = true;
                    }
                });
            } else {
                _isLPM = false;
            }
		}else{
			_isLPM = false;
		}

		function isLPM() {
			return _isLPM;
		}

		function isDataSaverOn() {
			return navigator && navigator.connection && navigator.connection.saveData
		}

// Private methods

		function _tweeze_rv(userAgent) {
			var value = userAgent.match(/rv:([\d.]+)/) || userAgent.match(/\b(?:MS)?IE\s+([\d\.]+)/i);
			return value && value[1];
		}

		function _tweeze_version(userAgent) {
			var value = userAgent.match(/version\/([\d.]+)/);
			return value ? value[1] : "0.0";
		}

		function _tweeze_fbios(userAgent) {
			var value = userAgent.match(/fbsv\/([\d]+)/);
			return value ? value[1] : "0.0";
		}

		function iosVersion(userAgent) {
        	const value = userAgent.match(/([\d_]+) like mac os/);
        	return value && value[1];
        }

		function _tweezersOS(userAgent) {
			return _tweezers(userAgent, {
				orders: "iphone os|cpu os|mac os x|mac os|windows nt|android|linux|cpu os",
				tweezeVer: "item ([\\d._]+)",
				transformMap: "iphone os|mac os|cpu os|->ios windows nt->windows",
				verEngine: {msie: _tweeze_rv, safari: _tweeze_version},
			});
		}

		function _tweezersBrowser(userAgent) {
			var BuildVersion = /^(.*)(?:build\/[^\s\)]+)(.*)$/i;
			userAgent = userAgent.replace(BuildVersion, "$1$2");
			return _tweezers(userAgent, {
				orders: "fbios|trident|edge|msie|fxios|firefox|opr|opera|crios|chrome|safari",
				tweezeVer: "item\\/([\\d._]+)",
				transformMap: "trident|msie->msie opera opr->opera firefox fxios->firefox crios->chrome",
				verEngine: {msie: _tweeze_rv, safari: _tweeze_version, fbios: _tweeze_fbios},
			});
		}


		function _tweezers(userAgent, config) {
			var name = "other";
			var orders = config.orders;
			var tweezeVer = config.tweezeVer;
			userAgent = userAgent.toLowerCase();
			var items = userAgent.match(RegExp(orders, "ig"));
			var versionParse;

			/* If we found some items */
			if (items) {
				/* Sort item by relevent, mean by config.orders*/
				items.sort(function (a, b) {
					return orders.indexOf(a) - orders.indexOf(b);
				});

				/* get the most relevant item*/
				/* and convert rawName to normalize name*/
				name = config.transformMap.match(RegExp(items[0] + ".*?->(\\w*)?")) || [];
				name = name[1] || items[0];

				/* select engine to extract version from userAgent */
				var verEngine = config.verEngine[name] || function () {
						var verReg = RegExp(tweezeVer.replace("item", items[0]), "i");
						var match = userAgent.match(verReg);
						return match && match[1];
					};
				versionParse = _parseRawVersion(verEngine(userAgent));

			} else {
				//uiwebview

				var standalone = ("standalone" in window.navigator) && !window.navigator.standalone,
					ios = /iphone|ipod|ipad/.test(userAgent);

				if (ios) {
					if (standalone) {
						//standalone
						name = "safari";
					} else {
						//uiwebview
						name = "safari";
					}
					versionParse = _parseRawVersion(iosVersion(userAgent));
				}
			}

			name = (name === "fbios") ? "safari" : name;

			return {
				name: name,
				version: versionParse,
			};
		}

		function _blackList() {
			var BLACK_LIST = /Yandex|SeaMonkey|Maxthon|Avant|Deepnet|Comodo_Dragon|Dooble|Palemoon|Flock|facebookexternalhit|Facebot|bb\d+|PlayBook|Googlebot/i;
			if (!!_userAgent.match(BLACK_LIST)) {
				return {
					name: "none",
					version: [-1],
				};
			}
			return null;
		}

		function _parseRawVersion(_version) {
			var version = [-1];
			if (_version) {
				version = _version.split(/[._]/);
				version[0] = version.major = version[0] ? parseInt(version[0]) : 0;
				version[1] = version.minor = version[1] ? parseInt(version[1]) : 0;
				version[2] = version.patch = version[2] ? parseInt(version[2]) : 0;
				version[3] = version.build = version[3] ? parseInt(version[3]) : 0;
			}
			return version;
		}

		return {
			"isDeviceMobile": isDeviceMobile,
			"isDeviceDesktop": isDeviceDesktop,
			"isDeviceIPad": isDeviceIPad,
			"isOSiOS": isOSiOS,
			"isOSAndroid": isOSAndroid,
			"isOSWindows": isOSWindows,
			"isOSMac": isOSMac,
			"isOSOther": isOSOther,
			"isBrowserIE": isBrowserIE,
			"isBrowserSafari": isBrowserSafari,
			"isBrowserChrome": isBrowserChrome,
			"isBrowserEdge": isBrowserEdge,
			"isBrowserFirefox": isBrowserFirefox,
			"isBrowserOpera": isBrowserOpera,
			"isBrowserOther": isBrowserOther,
			"osVersion": osVersion,
			"osName": osName,
			"browserVersion": browserVersion,
			"browserMajorVersion": browserMajorVersion,
			"browserName": browserName,
			"isBrowserSupportsNonMuteAutoPlay": isBrowserSupportsNonMuteAutoPlay,
			"isLPM": isLPM,
			"isPromise": isPromise,
			"isDataSaverOn": isDataSaverOn
		}
	}();

	

	!function(i,d){if(localStorage&&localStorage.getItem("blockEditor"))console.log("MinuteTV Blocked by localStorage");else if(!window._editor_tv_loaded&&!function(){for(var e=i.blackList||[],t=0;t<e.length;t++)if(new RegExp(e[t]).test(location.href))return!0;return!1}()){window._editor_tv_loaded=!0;var o=(new Date).getTime();"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}function e(){t(),setInterval(t,1e3)}function t(){var e;!function(e){if(e){var t,n,r,i,o,a,l,c=null,d=document.querySelector(e.selectors.target);d&&(i=e,o=document.createElement("div"),a=document.createElement("div"),l=isNaN(parseInt(i.embed))?"data-embed-name":"data-embed-id",o.classList.add("editor-tv-wrapper"),o.style.display="none",i.wrapperStyle&&(o.style=i.wrapperStyle),a.classList.add("editor-tv-component"),o.appendChild(a),o.setAttribute(l,i.embed),t=c=o,(n=e).selectors.titleStyle&&(r=document.querySelector(n.selectors.titleStyle)),n.titleElement&&(t.insertAdjacentHTML("afterbegin",n.titleElement),function(e,t){if(null!=e&&null!=t){var n,r=!1;if(r=e.currentStyle||document.defaultView.getComputedStyle(e,null))for(property in r)property,void 0!==(n=r[property])&&"object"!=typeof n&&"function"!=typeof n&&0<n.length&&n!=parseInt(n)&&(t.style[property]=r[property])}}(r,t.querySelector(".editor-tv-title"))),c=t,d.insertAdjacentElement(e.selectors.method,c),e.injected=!0)}}(function(){var e=i.urlPlacementsConfig||[];e=e.filter(n);for(var t=0;t<e.length;t++)if(a(e[t])&&r(e[t]))return e[t];return!1}()),e=document.querySelectorAll("div.editor-tv-wrapper:not(.editor-tv-active):not(.editor-tv-progress)"),Array.prototype.forEach.call(e,l)}function n(e){return!e.injected}function r(e){var t=e.selectors.validator;return!t||!!document.querySelector(t)}function a(e){e.regexList=e.regexList||[];for(var t=0;t<e.regexList.length;t++)if(new RegExp(e.regexList[t]).test(location.href))return!0;return!1}function l(e){e.classList.add("editor-tv-progress"),function(e,t){var n=e.getAttribute("data-embed-name"),r=e.getAttribute("data-embed-id"),i="",o="";r?(i="embed_id",o=r):n&&(i="alias",o=n);a=i,l=o,c=t,0<d.length?function(e,t,n){for(var r=!1,i=0;i<d.length;i++)d[i][e]==t&&(r=d[i]);n(r)}(a,l,c):function(e,t,n){var r,i,o,a="",l=!1;o="//tv.tldw.me/api/v1/editor/configuration/MIN-80940.json?",o+=i="alias"==(i=e)?"alias_name":i,o+="[]=",a=o+=t;var c=new XMLHttpRequest;c.onreadystatechange=function(){if(4==this.readyState&&200==this.status)try{r=JSON.parse(c.responseText),l=r.packages[0],n(l)}catch(e){}},c.open("GET",a,!0),c.send()}(a,l,c);var a,l,c}(e,function(e,t){if(t){var n=e.querySelector(".editor-tv-title"),r=(c=e,(d=document.createElement("div")).setAttribute("id","minute-size-container"),d.style.width="100%",d.style.position="relative",c.querySelector(".editor-tv-component").appendChild(d),d),i=function(e){try{var t=document.createElement("iframe");t.setAttribute("src","about:blank"),t.setAttribute("frameborder","0"),t.setAttribute("scrolling","no"),t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.top="0",t.style.left="0",e.appendChild(t);var n=document.createElement("tag");return n.setAttribute("name","viewport"),n.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),t.contentDocument.head.appendChild(n),t}catch(e){return console.warn(e),!1}}(r);n&&(n.innerText=t.package_name),i&&(min_validator&&min_validator.isBrowserFirefox&&min_validator.isBrowserFirefox()?function(e,t){var n=e.contentDocument;n.open(),n.write('<script>var s = document.createElement("script")\ns.src ="'+u()+'"\ndocument.head.appendChild(s);<\/script>'),n.close();var r=setInterval(function(){"function"==typeof e.contentWindow.startMinTopVideo&&(clearInterval(r),t())},500)}(i,s.bind(null,i,e,r,t)):(a=s.bind(null,o=i,e,r,t),(l=document.createElement("script")).src=u(),l.type="text/javascript",l.async=!0,l.onload=a,o.contentWindow.document.head.appendChild(l)))}var o,a,l;var c,d}.bind(this,e))}function s(e,t,n,r){e.contentWindow.startMinTopVideo({minuteGenesis:o,config:i,package:r,sizeContainer:n,wrapperEle:t,min_validator:min_validator})}function u(){if(localStorage.minuteTvpUrl)return localStorage.minuteTvpUrl;var e=i.versions.split("@")[0],t=localStorage.minuteTvpUrl||"//snippet.tldw.me/tv/"+e+"/tvp.js";return!(!document.documentMode&&!/Edge/.test(navigator.userAgent))?t.replace("tvp.js","tvp.ie.js"):t}}({"publisherId":"80940","rezVideo":{"tvxs":200,"tvs":300,"tvm":350,"tvl":400},"versions":"zee_3_4","shuffleAPVS":"true","titleStyle":"0","adManager":"aniview","aniviewOptions":{"description":"ads","channel":"5e820c6fee4d607f161176b6","playButton":true,"muteButton":true,"hd":false,"nativeVideo":true,"imaiOSSkip":true,"viewportPause":true,"vastRetry":2,"errorLimit":2},"background_lowerthird_number":"#e21727","showLogo":"false","urlPlacementsConfig":[{"embed":130509,"regexList":["https://zeenews.india.com/.*"],"titleElement":"\u003ch2 class='editor-tv-title margin-bt10px'\u003e\u003c/h2\u003e","selectors":{"target":"div:last-of-type div.article","method":"beforeend","validator":"div:last-of-type div.article"}},{"embed":130509,"regexList":["https://zeenews.india.com/.*"],"titleElement":"\u003ch2 class='editor-tv-title margin-bt10px'\u003e\u003c/h2\u003e","selectors":{"target":"div.article-box","method":"beforeend"}}]},[{"id":131687,"template":"2,5,7,9,11,13,15,17,19","embed_id":"130509","package_type":"auto","package_name":"Also Watch","videos":[{"id":8199984,"title":"Street Fight: লকডাউনেও লোকারণ্য; বাড়ছে সংক্রমণের আশঙ্কা, কেন এই অব্যবস্থা, দেখুন স্ট্রিট ফাইট | 24 Ghanta, Zee News","link":"https://zeenews.india.com/bengali/videos/street-fight-despite-lockdown-people-hit-the-street-increase-risk-of-corona-infection_308089.html","video":"//apv-static.tldw.me/videos/v-330c980e-fa9a-4b10-889277-9906-1ebbbcf99bfe-s231.0-237.0"},{"id":8198501,"title":"Edit Page: ১৫ এপ্রিল পর্যন্ত রাজ্যে জারি থাকবে লকডাউন, ঘোষণা মমতার | 24 Ghanta, Zee News","link":"https://zeenews.india.com/bengali/videos/edit-page-lockdown-to-be-continued-up-to-15th-april-in-west-bengal-mamata_308076.html","video":"//apv-static.tldw.me/videos/v-7b8f978e-f80f-48ff-889154-bdd3-79d23940a04c-s472.54-479.0"},{"id":8177528,"title":"Lockdown না Holiday ? বাজারে থিকথিক করছে ভিড়","link":"https://zeenews.india.com/bengali/videos/people-are-not-abiding-lock-down_307885.html","video":"//apv-static.tldw.me/videos/v-b7c3f32d-ffca-44c1-887633-bbd6-9beca779be91-s102.48-111.88"},{"id":8178170,"title":"তেহট্টে Corona আক্রান্ত ৫, দায়িত্বজ্ঞানহীনতার অভিযোগ | 24 Ghanta, Zee News","link":"https://zeenews.india.com/bengali/videos/5-more-corona-cases-in-bengal_307883.html","video":"//apv-static.tldw.me/videos/v-d6254d97-f238-4fa4-887679-bf64-862634c249fc-s275.4-284.28"},{"id":8181337,"title":"Lockdown-এ জাতীয় সড়ক ধরে বাড়ি ফিরছেন Workers | 24 Ghanta, Zee News","link":"https://zeenews.india.com/bengali/videos/migrant-workers-walking-home-in-lockdown_307881.html","video":"//apv-static.tldw.me/videos/v-04d27530-b028-487d-887976-a3d9-7f28d35df362-s200.44-206.2"}],"alias":null}]);



}());