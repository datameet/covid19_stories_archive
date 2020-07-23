$(document).ready(function () {

    var _sec = 1000;
    var _allowUrl = ["/ap/apnews", "/telangana/tsnews", "/eenadu",
        "/eenadu/ap/apnews", "/eenadu/telangana/tsnews", "/liveblog",
        "general_news_liveblog", "/liveblog/general/8", "/liveblog/general/8/"];
    var _path = window.location.pathname;

    for (var i = 0; i < _allowUrl.length; i++) {
        var val = _allowUrl[i];
        if (_path.indexOf(val) >= 0 || _path === "" || _path === "/" || _path === "/index" || _path === "/index.php") {
            if (_path.indexOf("liveblog") >= 0) {
                var _refreshtime = _sec * 300;
            }
            else {
                var _refreshtime = _sec * 600;
            }
            setInterval("refreshPage();", _refreshtime);
            console.log(_path);
            break;
        }
    }

    /* AD Injestion with in the article */
    var _allowUrl = ["mainnews"];
    var _path = window.location.pathname;
    var parr = _path.split("/");
    /* For Main News Only */
    /*
     if (_allowUrl.indexOf(parr[0]) >= 0 || _allowUrl.indexOf(parr[1]) >= 0) {

     var addata = "";
     addata = '<!-- ad inject -->';
     addata += '<div id="ads" class="mobclr"></div>';
     addata += '<div id="mads" class="events-ad300"></div>';
     addata += '<!-- ad injest -->';

     addata = '<div class="ad-block-300">';
     addata += '<div id=div-gpt-ad-1539767999844-6>';
     addata += '<script>';
     addata += 'googletag.cmd.push(function() { googletag.display("div-gpt-ad-1539767999844-6"); }); ';
     addata += '</script>';
     addata += '</div>';
     addata += '</div>';

     ptags = $(".fullstory1 p");
     var idx = 2;
     if (ptags.length <= 2) {
     idx = ptags.length - 1;
     }
     if ($(window).width() >= 1024) {
     $(".fullstory1 p:eq(" + idx + ")").after(addata);
     }
     }
     */

    if (typeof newsid !== 'undefined') {

        if (pageid < 500) {

            var adid = 'div-gpt-ad-1580475461855-0';
            var container = '';
            container += '<div id="' + adid + '" class="inn-cont-ad-300">';
            container += '</div>';
            container += '';
            var containerlast = '';
            containerlast += '<div id="' + adid + '" class="ad-block-300">';
            containerlast += '</div>';
            containerlast += '';

            var ptags = $(".fullstory1 p");
            var idx = ptags.length - 1;
            if (ptags.length <= 2) {
                idx = ptags.length - 1;
                if ($(window).width() >= 1024) {
                    $(".fullstory1 p:eq(" + idx + ")").after(containerlast);
                }
            }
            else if (ptags.length >= 8) {
                idx = ptags.length - 6;
                if ($(window).width() >= 1024) {
                    $(".fullstory1 p:eq(" + idx + ")").after(containerlast);
                }
                idx = ptags.length - 3;
                if ($(window).width() >= 1024) {
                    $(".fullstory1 p:eq(" + idx + ")").after(containerlast);
                }
                idx = ptags.length - 1;
                if ($(window).width() >= 1024) {
                    $(".fullstory1 p:eq(" + idx + ")").after(containerlast);
                }
            }
            else if (ptags.length >= 5) {
                idx = ptags.length - 3;
                if ($(window).width() >= 1024) {
                    $(".fullstory1 p:eq(" + idx + ")").after(containerlast);
                }
                idx = ptags.length - 1;
                if ($(window).width() >= 1024) {
                    $(".fullstory1 p:eq(" + idx + ")").after(containerlast);
                }
            }
            else if (ptags.length >= 3) {
                idx = ptags.length - 1;
                if ($(window).width() >= 1024) {
                    $(".fullstory1 p:eq(" + idx + ")").after(containerlast);
                }
            }

            googletag.cmd.push(function () {
                var slot = googletag.defineSlot('/1673516/E-IA-300X250', [300, 250], adid).addService(googletag.pubads());
                googletag.cmd.push(function () {
                    googletag.display(adid);
//                googletag.pubads().refresh([slot]);
                });
            });
//            googletag.pubads().collapseEmptyDivs();
        }

    }

    /*
     * ADs injection for Live Blog
     */
    if (typeof pageid !== 'undefined') {

        if (pageid >= 500) {

            var adscriptpre = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">';
            adscriptpre += '</script>';

            var adsdata = new Array();

            var adscript = '<div style="text-align:center;margin-bottom: 4%;"><ins class="adsbygoogle"';
            adscript += 'style="display:block; text-align:center;" ';
            adscript += 'data-ad-layout="in-article" ';
            adscript += 'data-ad-format="fluid" ';
            adscript += 'data-ad-client="ca-pub-8401462373718852" ';
            adscript += 'data-ad-slot="4165293640"></ins></div>';
            adsdata[0] = adscript;

            adscript = '<div style="text-align:center;margin-bottom: 4%;"><ins class="adsbygoogle"';
            adscript += 'style="display:block; text-align:center;" ';
            adscript += 'data-ad-layout="in-article" ';
            adscript += 'data-ad-format="fluid" ';
            adscript += 'data-ad-client="ca-pub-8401462373718852" ';
            adscript += 'data-ad-slot="4539879923"></ins></div>';
            adsdata[1] = adscript;

            adscript = '<div style="text-align:center;margin-bottom: 4%;"><ins class="adsbygoogle"';
            adscript += 'style="display:block; text-align:center;" ';
            adscript += 'data-ad-layout="in-article" ';
            adscript += 'data-ad-format="fluid" ';
            adscript += 'data-ad-client="ca-pub-8401462373718852" ';
            adscript += 'data-ad-slot="7710050314"></ins></div>';
            adsdata[2] = adscript;

            adscript = '<div style="text-align:center;margin-bottom: 4%;"><ins class="adsbygoogle"';
            adscript += 'style="display:block; text-align:center;" ';
            adscript += 'data-ad-layout="in-article" ';
            adscript += 'data-ad-format="fluid" ';
            adscript += 'data-ad-client="ca-pub-8401462373718852"  ';
            adscript += 'data-ad-slot="3202747525"></ins></div>';
            adsdata[3] = adscript;

            var adscriptpost = '<script> ';
            adscriptpost += '(adsbygoogle = window.adsbygoogle || []).push({}); ';
            adscriptpost += '</script>';

            var ptags = $(".mc-adunit");
            var ptagslength = ptags.length;
            var idx = ptags.length;
            var eqidx = parseInt(ptagslength / adsdata.length);

            idx = 0;
            for (i = 0; i < adsdata.length; i++) {
                idx += eqidx;
                if (idx > ptagslength - 1) {
                    break;
                }
                if ($(window).width() >= 1024) {
                    var cntblock = adsdata[i];
                    $(".mc-adunit:eq(" + idx + ")").after(cntblock);
                }
            }

            if (i < adsdata.length) {
                idx = ptagslength - 1;
                if ($(window).width() >= 1024) {
                    var cntblock = adsdata[i];
                    $(".mc-adunit:eq(" + idx + ")").after(cntblock);
                }
            }

//            var ptags = $(".mc-adunit");
//            var ptagslength = ptags.length;
//            var repeatat = 3;
//            //Inject ad after every 3 divs
//            var eqidx = parseInt(ptagslength / repeatat);
//
//            idx = 0;
//            for (i = repeatat - 1; i < ptagslength; i += repeatat) {
//                idx = i;
//                if ((idx + repeatat) > ptagslength - 1) {
//                    break;
//                }
//                $(".mc-adunit:eq(" + idx + ")").after(adscript);
//            }
//
//            if (ptagslength <= repeatat) {
//                $(".mc-adunit:eq(" + ptagslength - 1 + ")").after(adscript);
//            }

            $(".mc-adunit:eq(" + (ptagslength - 1) + ")").after(adscriptpost);
        }
    }

//    console.log(http.headers().frameOptions());
//    http.headers().frameOptions().disable();
//    console.log($("iframe").contents());

    /* Comments Block */
    if ((typeof newsid !== 'undefined') && (typeof pageid !== 'undefined')) {
        if (typeof sessid !== 'undefined') {
            var sessidval = sessid;
        }
        else {
            var sessidval = "";
        }
        $.ajax({
//            type: 'post',
            url: 'https://www.eenadu.net/comments/comment.php',
            data: { newsid: newsid, pageid: pageid, sessid: sessidval },
            success: function (response) {
                $("#commentsmaindiv").html(response);
            }

        });
    }

    if (typeof newsid !== 'undefined') {

        var newsurl = location.href;
        var newscatg = 1;
        if (newsid.toString().length === 9) {
            newscatg = newsid.charAt(0);
        }
        else if (newsurl.indexOf("mainnews")) {
            newcatg = 2;
        }

        $.ajax({
            type: 'post',
            url: 'https://api.eenadu.net/eeimages/eenaduapis/readcountapi.php',
            data: { newsid: newsid, newsurl: newsurl, newstitle: document.title, newscatg: newscatg },
            success: function (response) {
                //recorded
            }

        });

    }
});

function refreshPage() {
    window.location.reload(true);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
