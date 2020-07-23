function increaseFontSize(element, step) {
    step = parseInt(step, 10);
    var el = document.getElementById(element);
    var fontsize = $(el).css('font-size').replace('px', '');
    var curFont = parseInt(fontsize, 10);
    if (curFont <= 20) {
        el.style.fontSize = (curFont + step) + 'px';
    }
    else {

        return false;
    }
}

function DecreaseFontSize(element, step) {
    step = parseInt(step, 10);
    var el = document.getElementById(element);
    var fontsize = $(el).css('font-size').replace('px', '');
    var curFont = parseInt(fontsize, 10);
    if (curFont >= 17) {
        el.style.fontSize = (curFont + step) + 'px';
    }
    else {
        return false;
    }
}


$(function () {
    $(".Print").on('click', function () {
        $('#printcontentarea').html('<h2>' + $('.articaldetail_heading').html() + '</h2>' + " " + $('.Print_Content').html())
        $(".printcontentarea").css({ 'font-weight': 'bold', 'font-size': '24px', 'padding-bottom': '3px' })
        $("#printcontentarea").print();
    });

    $('#btnMailSubmit').on('click', function () {
        $('#mailSpinner').show();
        $('#myModal .alert').remove();
        if ($('#txtRepName').val().trim() == '') {
            $('#myModal .form-horizontal').before('<div class="alert alert-danger" role="alert" >Enter Recipient\'s Name</div>');
            $('#mailSpinner').hide();
            return false;
        }
        if ($('#txtRepEmailID').val().trim() == '' && !validateEmail($('#txtRepEmailID').val().trim())) {
            $('#myModal .form-horizontal').before('<div class="alert alert-danger" role="alert" >Enter Recipient\'s Email Id </div>');
            $('#mailSpinner').hide();
            return false;
        }
        if (!validateEmail($('#txtRepEmailID').val().trim())) {
            $('#myModal .form-horizontal').before('<div class="alert alert-danger" role="alert" >Enter valid Recipient\'s Email Id </div>');
            $('#mailSpinner').hide();
            return false;
        }
        if ($('#txtName').val().trim() == '') {
            $('#myModal .form-horizontal').before('<div class="alert alert-danger" role="alert" >Enter your Name</div>');
            $('#mailSpinner').hide();
            return false;
        }
        if ($('#txtEmailID').val().trim() == '') {
            $('#myModal .form-horizontal').before('<div class="alert alert-danger" role="alert" >Enter your Email Id</div>');
            $('#mailSpinner').hide();
            return false;
        }
        if (!validateEmail($('#txtEmailID').val().trim())) {
            $('#myModal .form-horizontal').before('<div class="alert alert-danger" role="alert" >Enter valid your Email Id </div>');
            $('#mailSpinner').hide();
            return false;
        }
        if ($('#txtMessage').val().trim() == '') {
            $('#myModal .form-horizontal').before('<div class="alert alert-danger" role="alert" >Enter your Message</div>');
            $('#mailSpinner').hide();
            return false;
        }
        var txtRepName = $('#txtRepName').val();
        var txtRepEmailID = $('#txtRepEmailID').val();
        var txtName = $('#txtName').val();
        var txtEmailID = $('#txtEmailID').val();
        var txtMessage = $('#txtMessage').val();
        var url = $('#hidarticleurl').val();
        var Title = $('#hidarticleheading').val();
        $.ajax({
            type: 'POST',
            url: '/Article/SendMail',
            data: { txtRepName: txtRepName, txtRepEmailID: txtRepEmailID, txtName: txtName, txtEmailID: txtEmailID, txtMessage: txtMessage, Title: Title, url: url },
        success: function(data) {
            //alert(data.d);
            if (data != '') {
                $('#txtRepName').val('');
                $('#txtRepEmailID').val('');
                $('#txtName').val('');
                $('#txtEmailID').val('');
                $('#txtMessage').val('');
                $('#myModal .form-horizontal').before('<div class="alert alert-success" role="alert">Mail Sent Successfully.</div>');
            }
            else {
                $('#myModal .form-horizontal').before('<div class="alert alert-danger" role="alert">Error occurred while sending the mail</div>');
            }
            $('#mailSpinner').hide();
        },
        error: function(result) {
            $('#myModal .form-horizontal').before('<div class="alert alert-danger" role="alert">Error occurred while sending the mail</div>');
            $('#mailSpinner').hide();
        }
    });

        return false;
    });
});

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

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

    var articleSharingUrl = 'http://twitter.com/intent/tweet?text=' + title + '' + encodeURIComponent(' ' + url + ' via @') + twitterVia +
                                        '&related=DailyMailCeleb ,' +
                                        twitterVia;
    var shareObjectSharingUrl = getSharingUrl(shareObject);
    var sharingUrl = shareObjectSharingUrl || articleSharingUrl;
    var newwindow = window.open(sharingUrl, "", opts);

    function getSharingUrl(shareObject) {
        var sharingUrl = null;
        if (shareObject) {
            var parsedShareObject = JSON.parse(shareObject);
            sharingUrl = 'https://twitter.com/share?' +
                                 (parsedShareObject.url ? 'url=' + encodeURIComponent(parsedShareObject.url) : '') +
                                 (parsedShareObject.via ? '&via=' + encodeURIComponent(parsedShareObject.via) : '') +
                                 (parsedShareObject.text ? '&text=' + encodeURIComponent(parsedShareObject.text) : '') +
                                 (parsedShareObject.related ? '&related=' + encodeURIComponent(parsedShareObject.related) : '') +
                                 (parsedShareObject.hashtags ? '&hashtags=' + encodeURIComponent(parsedShareObject.hashtags) : '');
        }
        return sharingUrl;
    }
}
/*End*/

/*Facebook Start*/

function postToFB(placement, url, shareObject) {



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
                                 (shareObject.link ? '&link=' + encodeURIComponent(shareObject.link) : '') +
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


