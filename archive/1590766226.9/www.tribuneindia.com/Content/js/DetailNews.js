
function RemoveEmptyPara() {
    var para = $(".story-desc p");
    if (para.length> 0) {
        $(".story-desc p").filter(function() {
            if ($(this).text().length == 0) {
                $(this).remove();
            }
        });
    }
}

function RemoveGreyLine() {
    var innerImage = $("figcaption");
    if (innerImage.length> 0) {
        $("figcaption").filter(function() {
            if ($(this).text().length == 0) {
                $(this).hide();
            }
        });
    }
}

function AdjustCaptionWidth() {
    var innerImage = $("figcaption");
    if (innerImage.length> 0) {
        $("figcaption").each(function() {
            var imgWidth = $(this).closest('figure').find('img').width();
            var capWidth = imgWidth + "px";
            $(this).css({ "width": capWidth, "float": "left"});
        });
    }
}

function BoldPrintNews() {
    var paras = $('.story-desc p:not(.p-ignore)');
    if (paras.length>= 2) {
        if ($($('.story-desc p:not(.p-ignore)')[0]).find("strong").length == 0) {
            if ($($('.story-desc p:not(.p-ignore)')[0]).find("br").length> 0) {
                $($($('.story-desc p:not(.p-ignore)')[0]).children()[0]).css("font-weight", "bold");
            } else {
                var boldParas = paras.filter(function() {
                    return $(this).text().trim().length> 0

                });

                var count = 3;
                if (boldParas.length < 3) {
                    count = boldParas.length;
                }
                for (var i = 0; i < count; i++) {
                    if (boldParas[i].innerText.length <50) {
                        $(boldParas[i]).css("font-weight", "bold");
                    }

                }
            }
        }
    }
}



function AddLikeCount(id, like) {


    $.ajax({
        url: "/Home/UpdateNewsLike?newsId=" + id + "&isLike=" + like,
        type: "GET",
        async: false,
        success: function(res) {

        },
        error: function(x, y, z) {

        }
    })

}

function CopyText() {
    var copyText = $('.story-desc');
    copyText.select();
    document.execCommand("copy");
}


function PlaceAds() {
   
    var paras = $('.story-desc').children('p:not(.p-ignore)').toArray();
    paras = paras.filter(function (v) {
        return v.innerHTML !== '' && v.innerText.length>50
    });

    var adsCode = "";
    $.ajax({
        type: "GET",
        url: "/News/GetAdsCode",
        async: false,
        success: function (code) {
            adsCode = code;
        }
    });


    if (paras.length > 1)
    {
            var $imageElement = '<div id=ads-0 class="horizontal-ads"></div>';
            var $currentPara = $(paras[0]);
            if ($currentPara.closest("#quote-news-block").length == 0) {
                $currentPara.after($imageElement);
                $('#ads-0').html(adsCode);

          
        }
    }
       

    if (paras.length >= 5 )
    {

        for (var i = 5; i < paras.length; i = i + 5) {
            var $imageElement = '<div id=ads-' + i + ' class="horizontal-ads"></div>';
            var $currentPara = $(paras[i]);
            if ($currentPara.closest("#quote-news-block").length == 0)
            {
                $currentPara.after($imageElement);
                $('#ads-' + i).html(adsCode);

            }
            else
            {
                $currentPara.closest("#quote-news-block").after($imageElement);
                $('#ads-' + i).html(adsCode);
            }
        }
    }
    else
    {
        var $imageElement = '<div id="adslast" class="horizontal-ads"></div>';
        $(paras).last().parent().after($imageElement);
        $('#adslast').html(adsCode);
    }
}