function GetTodayDate() {
    var t = new Date,
        e = t.getDate(),
        o = t.getMonth(),
        n = t.getFullYear();
    o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][o];
    for (var a = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"), i = t.getDay(); i > 7;) i -= 7;
    return a[i] + ", " + e + " " + o + " " + n
}

function getLocation() {
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition) : document.getElementById("weather").innerHTML = "Geolocation is not supported by this browser."
}

function showPosition(t) {
    var e = t.coords.latitude,
        o = t.coords.longitude;
    "" != e && null != e && null != e || (e = "30.680223899999998"), null != o && "" != o && null != o || (o = "76.83479489999999"), getWeather(e, o)
}

function getWeather(t, e) {
    $.ajax({
        type: "GET",
        url: "/Weather/GetWeather?latitude=" + t.toString() + "&longitude=" + e.toString(),
        contentType: "application/json; charset=utf-8",
        aysnc: !1,
        cache: !1,
        success: function (t) {
            document.getElementById("weather").innerHTML = t.Temp, $("#wicon").attr("src", t.Icon)
        },
        error: function (t) {
            console.log(t.responseText)
        }
    })
}

function ToggleShareIcon(t) {
    $("div.top.icon-bar").not($(t).find("div.top.icon-bar")).hide(), $(t).find("div.top.icon-bar").toggle()
}

function up() {
    var t = $("#content .story-desc>p").css("font-size");
    if (parseInt(48) > parseInt(t)) {
        var e = parseInt(t) + 5;
        $("#content .story-desc>p").css({
            "font-size": e + "px"
        }), UpdateCookies(e)
    }
}

function down() {
    var t = $("#content .story-desc>p, #content .story-desc>p span").css("font-size");
    if (parseInt(18) < parseInt(t)) {
        var e = parseInt(t) - 5;
        $("#content .story-desc>p, #content .story-desc>p span").css({
            "font-size": e + "px"
        }), UpdateCookies(e)
    }
}

function getCookieValue() {
    var t = document.cookie.match("(^|[^;]+)\\s*fontcookie\\s*=\\s*([^;]+)");
    return t ? t.pop() : ""
}

function SetStorySize() {
    var t, e = new Date;
    e.setFullYear(e.getFullYear() + 1);
    var o = getCookieValue();
    "" == o && (o = "18px"), t = "fontcookie=" + o + "; path=/; expires=" + e.toUTCString(), $("#content .story-desc>p, #content .story-desc>p span").css({
        "font-size": o
    }), document.cookie = t
}

function UpdateCookies(t) {
    t += "px";
    var e = new Date;
    e.setFullYear(e.getFullYear() + 1), cookie_string = "fontcookie=" + t + "; path=/; expires=" + e.toUTCString(), document.cookie = cookie_string
}
$(window).scroll(function () {
    $(this).scrollTop() > 800 ? $(".scrolltop").fadeIn() : $(".scrolltop").fadeOut();
    var t = $("#myheader");
    $(window).scrollTop() >= 150 ? t.addClass("sticky") : t.removeClass("sticky")
}), $(document).ready(function () {
    var t;
    $("#city").blur(function () {
        $(this).hide()
    }), $("#w-caret").click(function () {
        $("#city").toggle()
    }), $('li.dropdown:not("#txtSearch")').click(function (t) {
        if ("text" != t.target.type) {
            var e = $(this).attr("data-name");
            $('input[name="search_term_string"]').val(""), $(".dropdown-content").each(function () {
                $(this).closest("li").attr("data-name") != e ? ($(this).hide(), $(this).closest("li").removeClass("active-link")) : ($(this).toggle(), $(this).closest("li").toggleClass("active-link"))
            })
        }
    }), t = window.innerWidth >= 1400 ? 265 : 250, $(".flexslider:not(#tribune-album):not(#video-page-slider):not(#carousel2):not(#album-page-slider):not(#tribune-videos)").flexslider({
        animation: "slide",
        animationLoop: !1,
        itemWidth: t,
        itemMargin: 40,
        controlNav: !1,
        move: 1,
        slideshow: !1,
        start: function (t) {
            $("body").removeClass("loading")
        }
    });
    var e = 5;
    "/" != window.location.pathname && (e = 3.5), $(".owl-carousel:not(#ht-carousl)").owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        nav: !0,
        dots: !1,
        navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            600: {
                items: 2,
                nav: !1
            },
            1000: {
                items: e,
                nav: !0
            }
        }
    }), $(".card-text:empty").hide(), $("#city").on("paste", function (t) {
        if (exp = /^[a-zA-Z]*$/, !exp.test(t.originalEvent.clipboardData.getData("Text"))) return !1
    }), $("#city").autocomplete({
        source: function (t, e) {
            var o = $("#city").val();
            $.ajax({
                url: "/Weather/GetCities?name=" + o,
                type: "GET",
                success: function (t) {
                    null != t && t.length > 0 && e($.map(t, function (t) {
                        return {
                            label: t.Name + ", " + t.Country,
                            value: t.Name + ", " + t.Country,
                            lat: t.Lat,
                            lon: t.Lon
                        }
                    }))
                }
            })
        },
        delay: 0,
        select: function (t, e) {
            getWeather(e.item.lat, e.item.lon), $("#city").hide()
        },
        minLength: 3
    }), document.getElementById("todayDate").innerHTML = GetTodayDate(), getWeather("30.680223899999998", "76.83479489999999")
});