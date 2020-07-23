
    $(function () {
        $(".TextIncrease").click(function () {
            var div = document.getElementById("ArticleDetailContent");
            var Abstract = document.getElementById("ArticleAbstract");
            var currentFont = window.getComputedStyle(div, null).getPropertyValue('font-size');
            var AbstractCurrentFont = window.getComputedStyle(Abstract, null).getPropertyValue('font-size');
            var FontSize = div.style.fontSize.replace("px", "");
            var AbstractFont = Abstract.style.fontSize.replace("px", "");
           
                if (FontSize < 20) {
                    div.style.fontSize = parseInt(currentFont) + parseInt(1) + "px";
                    Abstract.style.fontSize = parseInt(AbstractCurrentFont) + parseInt(1) + "px";
                }
        });
        $(".TextDecrease").click(function () {
            var div = document.getElementById("ArticleDetailContent");
            var Abstract = document.getElementById("ArticleAbstract");
            var currentFont = window.getComputedStyle(div, null).getPropertyValue('font-size');
            var AbstractCurrentFont = window.getComputedStyle(Abstract, null).getPropertyValue('font-size');
            var FontSize = div.style.fontSize.replace("px", "");
            var AbstractFont = Abstract.style.fontSize.replace("px", "");
         
            if (FontSize >= 17) {
                $(".hiddenvalueFont").val("I")

                div.style.fontSize = parseInt(currentFont) - parseInt(1) + "px";
                Abstract.style.fontSize = parseInt(AbstractCurrentFont) - parseInt(1) + "px";
            }
            


        });


        $(".Print").on('click', function () {
            $('#printcontentarea').html('<h2>' + $('.Article_Headline').html() + '</h2>' + " " + $('.PrintContent').html())
            $("#printcontentarea").print();
        });
    })
/*Facebook Start*/

function postToFB(placement, url, shareObject) {
    var caption = $(".Article_Headline").text();
    var picture = $(".article-img").attr('src');
    var description = $(".ArticleDetailAbstract").text();
    var link = window.location.href;
    var width = 1000,
                    height = 500,
                    left = (window.outerWidth - width) / 2,
                    top = (window.outerHeight - height) / 2,
                    url = url,
                    opts = 'resizable=1,scrollbars=1,status=1' +
                             ',width=' + width +
                             ',height=' + height +
                             ',top=' + top +
                             ',left=' + left;

    var sharingUrl = getSharingUrl(shareObject) || ("http://www.facebook.com/sharer/sharer.php?u=" + url);

    var newwindow = window.open(sharingUrl, "", opts);

    function getSharingUrl(shareObject) {
        var sharingUrl = null;
        if (shareObject) {
            shareObject = JSON.parse(shareObject);
            sharingUrl = 'https://www.facebook.com/dialog/feed?app_id=146202712090395' +
                                 (shareObject.link ? '&link=' + encodeURIComponent(link) : '') +
                                 (shareObject.picture ? '&picture=' + encodeURIComponent(picture) : '') +
                                 (shareObject.name ? '&name=' + encodeURIComponent(link) : '') +
                                 (shareObject.caption ? '&caption=' + encodeURIComponent(caption) : '') +
                                 (shareObject.description ? '&description=' + encodeURIComponent(description) : '') +
                                 (shareObject.redirect_uri ? '&redirect_uri=' + encodeURIComponent(link) : '');
        }
        return sharingUrl;
    };

}

/*End*/

/*Twitter*/
function postToTWTTR(placement, url, title, shareObject) {
    // social_button_clicked('twitter', placement);

    var width = 575,
                    height = 400,
                    left = (window.outerWidth - width) / 2,
                    top = (window.outerHeight - height) / 2,
                    url = url,
                    opts = 'resizable=1,scrollbars=1,status=1' +
                             ',width=' + width +
                             ',height=' + height +
                             ',top=' + top +
                             ',left=' + left, twitterVia = 'dt_next';

    var articleSharingUrl = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(' ' + url + '');
    var shareObjectSharingUrl = getSharingUrl(shareObject);
    var sharingUrl = shareObjectSharingUrl || articleSharingUrl;
    var newwindow = window.open(sharingUrl, "", opts);

    function getSharingUrl(shareObject) {
        var sharingUrl = null;
        if (shareObject) {
            var parsedShareObject = JSON.parse(shareObject);
            sharingUrl = 'https://twitter.com/share?' +
                                 (parsedShareObject.url ? 'url=' + encodeURIComponent(parsedShareObject.url) : '');
        }
        return sharingUrl;
    }
}
/*End*/
/*start*/
function postToEnvelope() {
    var url = window.location.href;
    var headline = $(".Article_Headline ").text();
    var Abstract = $(".ArticleDetailAbstract ").text();
    window.location.href = "mailto:user@domain.com?subject= Shared from Daily Thanthi News  | செய்திகள் &body=You have been shared with an article from Daily Thanthi News  " + url;
}
/*End*/
/*Google Plus*/
function postToGPlus(placement, url, shareObject) {
    // social_button_clicked('twitter', placement);
    var width = 1000,
                    height = 500,
                    left = (window.outerWidth - width) / 2,
                    top = (window.outerHeight - height) / 2,
                    url = url,
                    opts = 'resizable=1,scrollbars=1,status=1' +
                             ',width=' + width +
                             ',height=' + height +
                             ',top=' + top +
                             ',left=' + left;
    var headline = $(".Article_Headline ").text();
    var Abstract = $(".ArticleDetailAbstract ").text();
    var sharingUrl = getSharingUrl(shareObject) || ("https://plus.google.com/share?url=" + url);

    var newwindow = window.open(sharingUrl, "", opts);

    function getSharingUrl(shareObject) {
        var sharingUrl = null;
        if (shareObject) {
            shareObject = JSON.parse(shareObject);
            sharingUrl = (shareObject.link ? '&link=' + encodeURIComponent(shareObject.link) : '') +
                                 (shareObject.picture ? '&picture=' + encodeURIComponent(shareObject.picture) : '') +
                                 (shareObject.name ? '&name=' + encodeURIComponent(shareObject.name) : '') +
                                 (shareObject.caption ? '&caption=' + encodeURIComponent(shareObject.caption) : '') +
                                 (shareObject.description ? '&description=' + encodeURIComponent(shareObject.description) : '') +
                                 (shareObject.redirect_uri ? '&redirect_uri=' + encodeURIComponent(shareObject.redirect_uri) : '');
        }
        return sharingUrl;
    };
}
/*End*/
function postTotumblr() {
    // social_button_clicked('twitter', placement);
    var url = window.location.href;
    var width = 1000,
                    height = 500,
                    left = (window.outerWidth - width) / 2,
                    top = (window.outerHeight - height) / 2,
                    url = url,
                    opts = 'resizable=1,scrollbars=1,status=1' +
                             ',width=' + width +
                             ',height=' + height +
                             ',top=' + top +
                             ',left=' + left;
    var sharingUrl = ("http://www.tumblr.com/share/link?url=" + url);
    var newwindow = window.open(sharingUrl, "", opts);
}

function PostToPintrest() {
    // social_button_clicked('twitter', placement);
    var url = window.location.href;
    var width = 1000,
                    height = 500,
                    left = (window.outerWidth - width) / 2,
                    top = (window.outerHeight - height) / 2,
                    url = url,
                    opts = 'resizable=1,scrollbars=1,status=1' +
                             ',width=' + width +
                             ',height=' + height +
                             ',top=' + top +
                             ',left=' + left;
    var sharingUrl = ("https://pinterest.com/pin/create%2Fbutton/?url=" + url);
    var newwindow = window.open(sharingUrl, "", opts);
}
/*Linked Start*/

function postToLinkedIn() {
    var width = 1000,
                    height = 500,
                    left = (window.outerWidth - width) / 2,
                    top = (window.outerHeight - height) / 2,
                    url = url,
                    opts = 'resizable=1,scrollbars=1,status=1' +
                             ',width=' + width +
                             ',height=' + height +
                             ',top=' + top +
                             ',left=' + left;

    var sharingUrl = (" https://www.linkedin.com/cws/share?url=" + url);

    var newwindow = window.open(sharingUrl, "", opts);

   

}

/*End*/
//Whatsspp
    function postToWhatsApp() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var text = $(".Article_Headline ").text();
            var url = location.href;
            var message = encodeURIComponent(text) + encodeURIComponent(url);           
            var whatsapp_url = "whatsapp://send?text=" + message;
            window.location.href = whatsapp_url;
        } else {
            alert("Error on sharing");
        }
    }