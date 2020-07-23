function sendGA(e, t, a, s) {
    s = s || "";
    try {
        ga("send", "event", e, t, a, s)
    } catch (o) {
        console.log("sendGA error " + e + " | " + t + " | " + a + " | " + s)
    }
}

function sendGAPageViews(e) {
    try {
        ga("send", "pageview", e)
    } catch (t) {
        console.log("load error pageviews " + e)
    }
}

function sendGAforSocial(e, t, a) {
    try {
        a = a || window.location.pathname, ga("send", "social", e, t, a)
    } catch (s) {
        console.log("social share error " + e + " " + t + " " + a)
    }
}
function comscore_tag_listing() {
    "undefined" != typeof _comscore && _comscore.push({
        c1: "2",
        c2: "20465327"
    })
}
$(window).scroll(function() {
    $(this).scrollTop() > 58 ? $(".menuMain").addClass("sticky_menu") : $(".menuMain").removeClass("sticky_menu")
});
var a = 1;
$(".openserch").click(function() {
    1 == a ? ($(this).addClass("active"), $(".serchBox").css("height", "76px"), a = 0) : ($(this).removeClass("active"), $(".serchBox").css("height", "0px"), a = 1), $(".sercfield").focus()
});
var b = 1;
$(".openserch_menu").click(function() {
    1 == b ? ($(this).addClass("active"), $(".serchBox_menu").css("height", "76px"), b = 0) : ($(this).removeClass("active"), $(".serchBox_menu").css("height", "0px"), b = 1), $(".sercfield_menu").focus()
}), $(window).scroll(function() {
    $(this).scrollTop() > 500 ? $(".gutStickyArt .gutinner").addClass("sticky") : $(".gutStickyArt .gutinner").removeClass("sticky")
}), $(window).scroll(function() {
    $(this).scrollTop() > 255 ? $(".gutStickyCat .gutinner").addClass("sticky") : $(".gutStickyCat .gutinner").removeClass("sticky")
}), $(".closeNews").click(function() {
    $("#breakingNow").hide()
}), $(document).on("click", ".social a,.imgsocial a,.graph-social a", function () {
    var url = $(this).attr('data-url');
    var title = $(this).attr('data-title');
    var image = $(this).attr('data-image');
    var currentSocialClass = $(this).attr('class');
    var eventCategory = $(this).attr('category');
    var eventAction = $(this).attr('action');
    var eventLabel = $(this).attr('label');
    var eventValue = $(this).attr('id');
    switch (currentSocialClass) {
      case 'facebook':
        sendGA(eventCategory, eventAction, eventLabel, eventValue);
        var popUp = window.open("https://www.facebook.com/sharer/sharer.php?u=" + url + "&t=" + title, "popupwindow", "menubar=1,resizable=1,width=600,height=400");

        if (image != undefined) {
          $('meta[name=og\\:image]').attr('content', image);
        }
        popUp.focus();
        return false;
        break;
      case 'twitter':
        sendGA(eventCategory, eventAction, eventLabel, eventValue);      
        var newTitle = (title.length > 240) ? title.substr(0, 235) + '... | via @IndiaTVNews' : title.substr(0, 240)+ ' | via @IndiaTVNews';
        var strUrl = encodeURI("https://twitter.com/share?text=" + newTitle + "&url=" + url);      
        var popUp = window.open(strUrl, "twitterwindow", "menubar=1,resizable=1,width=600,height=400");
        popUp.focus();
        return false;
        break;
      case 'googleplus':
        sendGA(eventCategory, eventAction, eventLabel, eventValue);
        var popUp = window.open("https://plus.google.com/share?url=" + url, 'popupwindow', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
        popUp.focus();
        return false;
        break;
      case 'google-plus':
        sendGA(eventCategory, eventAction, eventLabel, eventValue);
        var popUp = window.open("https://plus.google.com/share?url=" + url, 'popupwindow', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
        popUp.focus();
        return false;
        break;
      case 'pinteres':
        sendGA(eventCategory, eventAction, eventLabel, eventValue);
        var popUp = window.open("https://pinterest.com/pin/create/bookmarklet/?media=" + image + "&url=" + url + "&is_video=false&description=" + title, "popUpWindow", "height=400,width=600,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes");
        popUp.focus();
        return false;
        break;
      case 'linkedin':
        sendGA(eventCategory, eventAction, eventLabel, eventValue);
        var popUp = window.open("https://www.linkedin.com/shareArticle?mini=true" + "&url=" + url + "&title=" + title, 'popupwindow', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
        popUp.focus();
        return false;
        break;
    }
}), $(".searchsubmit,.submitSerch").click(function(e) {
    var t = /^[a-zA-Z0-9- '.]+$/;
    if ("searchbutton" == $(this).attr("id")) {
        if ("" === (a = $("#searchfield").val())) return $("#searchfield").attr("class", "sercfield red"), $("#searchfield").focus(), !1;
        if (!t.test(a)) return $("#searchfield").attr("class", "sercfield red"), alert("Oops! You might have entered the invalid keyword(s). Kindly re-enter."), $("#searchfield").focus(), !1
    }
    if ("searchboxbutton" == $(this).attr("id")) {
        if ("" === (a = $("#searchboxfield").val())) return $("#searchboxfield").attr("class", "searchfield red"), $("#searchboxfield").focus(), !1;
        if (!t.test(a)) return $("#searchboxfield").attr("class", "searchfield red"), alert("Oops! You might have entered the invalid keyword(s). Kindly re-enter."), $("#searchboxfield").focus(), !1
    }
    if ("searchboxmenubutton" == $(this).attr("id")) {
        var a = $("#searchboxmenu").val();
        if ("" === a) return $("#searchboxmenu").attr("class", "sercfield_menu red"), $("#searchboxmenu").focus(), !1;
        if (!t.test(a)) return $("#searchboxmenu").attr("class", "sercfield_menu red"), alert("Oops! You might have entered the invalid keyword(s). Kindly re-enter."), $("#searchboxmenu").focus(), !1
    }
    return a = $.trim(a), str = a.replace(/\s+/g, "-").toLowerCase(), window.location.href = "/topic/" + str, !0
}), $("#searchboxmenu").blur(function(e) {
    $("#searchboxmenu").attr("class", "sercfield_menu")
}), $("#searchboxmenu").keypress(function(e) {
    if (13 == e.which) {
        var t = /^[a-zA-Z0-9- '.]+$/,
            a = $("#searchboxmenu").val();
        return "" === a ? ($("#searchboxmenu").attr("class", "sercfield_menu red"), $("#searchboxmenu").focus(), !1) : t.test(a) ? (a = $.trim(a), str = a.replace(/\s+/g, "-").toLowerCase(), window.location.href = "/topic/" + str, !0) : (alert("Oops! You might have entered the invalid keyword(s). Kindly re-enter."), $("#searchboxmenu").attr("class", "sercfield red"), $("#searchboxmenu").focus(), !1)
    }
}), $("#searchboxfield").keypress(function(e) {
    if (13 == e.which) {
        var t = /^[a-zA-Z0-9- '.]+$/,
            a = $("#searchboxfield").val();
        return "" === a ? ($("#searchboxfield").attr("class", "searchfield red"), $("#searchboxfield").focus(), !1) : t.test(a) ? (a = $.trim(a), str = a.replace(/\s+/g, "-").toLowerCase(), window.location.href = "/topic/" + str, !0) : (alert("Oops! You might have entered the invalid keyword(s). Kindly re-enter."), $("#searchboxfield").attr("class", "searchfield red"), $("#searchboxfield").focus(), !1)
    }
}), $("#searchfield").blur(function(e) {
    $("#searchfield").attr("class", "sercfield")
}), $("#searchfield").keypress(function(e) {
    if (13 == e.which) {
        var t = /^[a-zA-Z0-9- '.]+$/,
            a = $("#searchfield").val();
        return "" === a ? ($("#searchfield").attr("class", "sercfield red"), $("#searchfield").focus(), !1) : t.test(a) ? (a = $.trim(a), str = a.replace(/\s+/g, "-").toLowerCase(), window.location.href = "/topic/" + str, !0) : (alert("Oops! You might have entered the invalid keyword(s). Kindly re-enter."), $("#searchfield").attr("class", "sercfield red"), $("#searchfield").focus(), !1)
    }
}), $("#search404").keypress(function(e) {
    if (13 == e.which) {
        var t = /^[a-zA-Z0-9- '.]+$/,
            a = $("#search404").val();
        return "" === a ? (alert("Please enter what you like to search today."), $("#search404").focus(), !1) : t.test(a) ? ($(this).closest("form").submit(), !1) : (alert("Oops! You might have entered the invalid keyword(s). Kindly re-enter."), $("#searchtop").focus(), !1)
    }
}), $(document).ready(function() {
     $(".scrollupicon").on("click", function() {
        sendGA("PageScroll", "clicked", "Scroll up")
    }), $("#showLeftPush").on("click", function() {
        $(this).hasClass("active") ? sendGA("Hamburger", "clicked", "Hamburger Opened") : sendGA("Hamburger", "clicked", "Hamburger Closed")
    }), $(".touch-icon").on("click", function() {
        $(this).hasClass("down") && sendGA("Hamburger", "clicked", "Hamburger Collapsed"), $(this).hasClass("up") && sendGA("Hamburger", "clicked", "Hamburger Expanded")
    })
}), $("document").ready(function() {
    $("#show_timing .tab-section").hide(), $.each($("#show_timing .tab-section"), function() {
        var e = $(this).attr("id");
        $("#" + e).hasClass("active") && $("#" + e).show()
    }), $("#show-timing-taber a").on("click", function() {
        $("#show_timing .tab-section").hide(), $("#show_timing .tab-section").removeClass("active"), $("#show-timing-taber a").removeClass("active");
        var e = $(this).attr("attrib");
        $(e).show(), $(e).addClass("active"), $(this).addClass("active"), sendGA("showtiming", "clicked", "tab", e)
    })
}), $("body").on("click", "#loadMoreContent", function() {
    $("#loadermnews").attr("style", "opacity:1");
    var e = $("#page").val(),
        t = $("#subCatName").val(),
        a = parseInt($("#totalPages").val()),
        s = $("#subCatId").val(),
        o = $("#maxLimit").val(),
        n = $("#categoryId").val(),
        i = $("#categoryName").val(),
        r = $("#contentType").val(),
        c = $("#contentTypeId").val(),
        l = $("#moduleType").val(),
        d = parseInt(e) + 1,
        u = $("#pageUrl").val(),
        h = $("#slugUrl").val(),
        m = 1e9 * Math.random(),
        p = document.title,
        f = $("meta[name=description]").attr("content"),
        g = p.split("|"),
        v = f.split("|");
        var vp = '';
        if($('#pagetype').length>0) {
          vp = $('#pagetype').val();
        }
        var morestory_url = '';
        if(vp!=='') {
           morestory_url = "/ajax/getmorestories/" + t + "/" + s + "/" + o + "/" + n + "/" + i + "/" + d + "/"+ 1 +"/"+ r +"/"+ c + "/" + vp;
        } else {
           morestory_url = "/ajax/getmorestories/" + t + "/" + s + "/" + o + "/" + n + "/" + i + "/" + d + "/"+ 1 +"/"+ r +"/"+ c;
        }
    a >= d ? $.ajax({
        type: "GET",
        async: !1,
        url: morestory_url,      
        /*url: "/ajax/getmorestories?subCatName=" + t + "&subCatId=" + s + "&maxLimit=" + o + "&categoryId=" + n + "&categoryName=" + i + "&contentType=" + r + "&contentTypeId=" + c + "&nextPage=" + d + "&moduleType=" + l + "&pagetype=" + vp + "&rand=" + m,*/
        dataType: "json",
        success: function(e) {
            1 == e.status ? ($(".newsListfull,#newsListfull ul").append(e.categoryData), history.pushState(null, null, u + "/" + d), $('meta[name="description"]').attr("content", v[0] + " | page " + d), document.title = g[0] + " | page " + d, $("#loadermnews").attr("style", "opacity:0"), $("#page").val(d), $("img.lazy").lazyload({
                effect: "fadeIn"
            }).removeClass("lazy"), sendGA(t, "click", "Load More", d), sendGAPageViews(h + "/" + d), comscore_tag_listing(), a == d && $("#loadMoreContent").hide()) : $("#loadMoreContent").hide()
        }
    }) : $("#loadMoreContent").hide()
}), $("body").on("click", "#loadMoreContentSearch", function() {
    $("#loadermnews").attr("style", "display:block");
    var e = $("#page").val(),
        t = $("#maxLimit").val(),
        a = parseInt($("#totalPages").val()),
        s = $("#slug").val(),
        o = parseInt(e) + 1,
        n = $("#pageUrl").val(),
        i = $("#slugUrl").val(),
        r = 1e9 * Math.random(),
        c = document.title,
        l = $("meta[name=description]").attr("content"),
        d = c.split("|"),
        u = l.split("|");
    a >= o ? $.ajax({
        type: "GET",
        async: !1,
        /*url: "/ajax/getmoresearch?maxLimit=" + t + "&nextPage=" + o + "&slug=" + s + "&rand=" + r,*/
        url: "/ajax/getmoresearch/" + t + "/" + o + "/" + s,
        dataType: "json",
        success: function(e) {
            1 == e.status ? ($("#newsListfull").append(e.searchData), history.pushState(null, null, n + "/" + o), document.title = d[0] + " | page " + o, $('meta[name="description"]').attr("content", u[0] + " | page " + o), sendGA(s, "click", "Load More", o), sendGAPageViews(i + "/" + o), comscore_tag_listing(), $("#loadermnews").attr("style", ""), $("img.lazy").lazyload({
                effect: "fadeIn"
            }).removeClass("lazy"), $("#page").val(o), a == o && $("#loadMoreContentSearch").hide()) : $("#loadMoreContentSearch").hide()
        }
    }) : $("#loadMoreContentSearch").hide()
}), $("body").on("click", "#loadMoreContentSearchNews", function() {
    $("#loadermnews").attr("style", "display:block");
    var e = $("#page").val(),
        t = $("#maxLimit").val(),
        a = parseInt($("#totalPages").val()),
        s = $("#slug").val(),
        o = parseInt(e) + 1,
        n = $("#pageUrl").val(),
        i = $("#slugUrl").val(),
        r = 1e9 * Math.random(),
        c = document.title,
        l = $("meta[name=description]").attr("content"),
        d = c.split("|"),
        u = l.split("|");
    a >= o ? $.ajax({
        type: "GET",
        async: !1,
        url: "/ajax/getmoresearchnews/" + t + "/" + o + "/" + s,
        dataType: "json",
        success: function(e) {
            1 == e.status ? ($("#newsListfull").append(e.searchData), history.pushState(null, null, n + "/" + o), document.title = d[0] + " | page " + o, $('meta[name="description"]').attr("content", u[0] + " | page " + o), sendGA(s, "click", "Load More", o), sendGAPageViews(i + "/" + o), comscore_tag_listing(), $("#loadermnews").attr("style", ""), $("img.lazy").lazyload({
                effect: "fadeIn"
            }).removeClass("lazy"), $("#page").val(o), a == o && $("#loadMoreContentSearchNews").hide()) : $("#loadMoreContentSearchNews").hide()
        }
    }) : $("#loadMoreContentSearchNews").hide()
}), $("body").on("click", "#loadMoreContentSearchVideo", function() {
    $("#loadermnews").attr("style", "display:block");
    var e = $("#page").val(),
        t = $("#maxLimit").val(),
        a = parseInt($("#totalPages").val()),
        s = $("#slug").val(),
        o = parseInt(e) + 1,
        n = $("#pageUrl").val(),
        i = $("#slugUrl").val(),
        r = 1e9 * Math.random(),
        c = document.title,
        l = $("meta[name=description]").attr("content"),
        d = c.split("|"),
        u = l.split("|");
    a >= o ? $.ajax({
        type: "GET",
        async: !1,
        /*url: "/ajax/getmoresearchnews?maxLimit=" + t + "&nextPage=" + o + "&slug=" + s + "&rand=" + r,*/
        url: "/ajax/getmoresearchvideo/" + t + "/" + o + "/" + s,
        dataType: "json",
        success: function(e) {
            1 == e.status ? ($("#newsListfull").append(e.searchData), history.pushState(null, null, n + "/" + o), document.title = d[0] + " | page " + o, $('meta[name="description"]').attr("content", u[0] + " | page " + o), sendGA(s, "click", "Load More", o), sendGAPageViews(i + "/" + o), comscore_tag_listing(), $("#loadermnews").attr("style", ""), $("img.lazy").lazyload({
                effect: "fadeIn"
            }).removeClass("lazy"), $("#page").val(o), a == o && $("#loadMoreContentSearchVideo").hide()) : $("#loadMoreContentSearchVideo").hide()
        }
    }) : $("#loadMoreContentSearchVideo").hide()
}), $("body").on("click", ".eventTracking", function() {
    var e = $(this).attr("category"),
        t = $(this).attr("action"),
        a = $(this).attr("label"),
        s = $(this).attr("id");
    console.log(e + "," + t + "," + a + "," + s), sendGA(e, t, a, s)
}), $(".topNews").on("click", "#loadMoreArchieve", function() {
    $("#loadermnews").attr("style", "display:block");
    var e = $("#page").val(),
        t = $("#maxLimit").val(),
        a = parseInt($("#totalPages").val()),
        s = $("#slug").val(),
        o = $("#slugData").val(),
        n = $("#categoryName").val(),
        i = $("#categoryId").val(),
        r = parseInt(e) + 1,
        c = $("#pageUrl").val(),
        l = $("#slugUrl").val(),
        d = document.title,
        u = $("meta[name=description]").attr("content"),
        h = d.split("|"),
        m = u.split("|"),
        p = 1e9 * Math.random();
    a != r ? $.ajax({
        type: "GET",
        async: !1,
        /*url: "/ajax/getmorearchivestories?maxLimit=" + t + "&nextPage=" + r + "&categoryName=" + n + "&categoryId=" + i + "&slug=" + s + "&slugData=" + o + "&rand=" + p,*/
        url: "/ajax/getmorearchivestories/" + t + "/" + r + "/" + n + "/" + i + "/" + s + "/" + o,
        dataType: "json",
        success: function(e) {
            1 == e.status ? ($("#newsListfull").append(e.categoryData), $("#loadermnews").attr("style", ""), $("#page").val(r), history.pushState(null, null, c + "/" + r), document.title = h[0] + " | page " + r, $('meta[name="description"]').attr("content", m[0] + " | page " + r), sendGA(s, "click", "Load More", r), sendGAPageViews(l + "/" + r), comscore_tag_listing(), $("img.lazy").lazyload({
                effect: "fadeIn"
            }).removeClass("lazy"), $("#page").val(r), a == r && $("#loadMoreArchieve").hide()) : $("#loadMoreArchieve").hide()
        }
    }) : $("#loadMoreArchieve").hide()
}), $("body").on("click", "#loadMoreContentSpecial", function() {
    $("#loadermnewsspecial").attr("style", "display:block");
    var a = $("#page").val(),
        e = $("#maxLimit").val(),
        t = parseInt($("#totalPages").val()),
        l = $("#slug").val(),
        n = parseInt(a) + 1,
        s = $("#pageUrl").val(),
        o = $("#slugUrl").val(),
        i = 1e9 * Math.random(),
        c = document.title,
        r = $("meta[name=description]").attr("content"),
        d = c.split("|"),
        p = r.split("|");
    t >= n ? $.ajax({
        type: "GET",
        async: !1,
       /*url: "/ajax/getmorespecials?maxLimit=" + e + "&nextPage=" + n + "&slug=" + l + "&rand=" + i,*/
        url: "/ajax/getmorespecials/" + e + "/" + n + "/" + l,
        dataType: "json",
        success: function(a) {
            1 == a.status ? ($("#newsListfull").append(a.searchData), history.pushState(null, null, s + "/" + n), document.title = d[0] + " | page " + n, $('meta[name="description"]').attr("content", p[0] + " | page " + n), sendGA(l, "click", "Load More", n), sendGAPageViews(o + "/" + n), comscore_tag_listing(), $("#loadermnewsspecial").attr("style", ""), $("img.lazy").lazyload({
                effect: "fadeIn"
            }).removeClass("lazy"), $("#page").val(n), t == n && $("#loadMoreContentSpecial").hide()) : $("#loadMoreContentSpecial").hide()
        }
    }) : $("#loadMoreContentSpecial").hide()
});
$(".prodetails .read_more").click(function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".read_more .text").text("read more");
        $(".prodetails .info").css("height", "64px")
    } else {
        $(this).addClass("active");
        $(".read_more .text").text("read less");
        $(".prodetails .info").css("height", "auto")
    }
});
$(".bolly-prodetails .read_more").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".read_more .text").text("read more");
    $(".bolly-prodetails .info").css("height", "54px");
  } else {
    $(this).addClass("active");
    $(".read_more .text").text("read less");
    $(".bolly-prodetails .info").css("height", "auto");
  }
});
$("body").on('click', '#loadMoreProfile', function () {
  $("#loadermnews").attr('style', "display:block");
  var currentPage = $("#page").val();
  var maxLimit = $("#maxLimit").val();
  var totalPages = parseInt($("#totalPages").val());
  var slug = $("#slug").val();
  var ctype = $("#section").val();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val();
  var slugUrl = $("#slugUrl").val();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      /*url: "/ajax/getmorenews?section="+ctype+"&maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&slug=" + slug + "&rand=" + randomnumber,*/
       url: "/ajax/getmorenews/"+ctype+"/" + maxLimit + "/" + nextPage + "/" + slug,
      dataType: 'json',
      success: function (response) {
        if (response.status == 1) {
          $('#newsListfull').append(response.searchData);
          history.pushState(null, null, pageUrl + '/' + nextPage);
          document.title = titleArr[0] + ' | page ' + nextPage;
          $('meta[name="description"]').attr("content", descArr[0] + ' | page ' + nextPage);
          sendGA(slug, 'click', 'Load More', nextPage);
          sendGAPageViews(slugUrl + '/' + nextPage);
          comscore_tag_listing();
          $("#loadermnews").attr('style', "");
          $("img.lazy").lazyload({
            effect: "fadeIn"
          }).removeClass("lazy");
          $("#page").val(nextPage);
          if (totalPages == nextPage) {
            $("#loadMoreProfile").hide();
          }
        } else {
          $("#loadMoreProfile").hide();
        }
      }
    });
  } else {
    $("#loadMoreProfile").hide();
  }
});
$("body").on('click', '#loadMoreSpecial', function () {
  $("#loadermnews").attr('style', "display:block");
  var currentPage = $("#page").val();
  var maxLimit = $("#maxLimit").val();
  var totalPages = parseInt($("#totalPages").val());
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val();
  var slugUrl = $("#slugUrl").val();
  var slug = $("#slug").val();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      /*url: "/ajax/getmorespeciallistings?maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&rand=" + randomnumber,*/
      url: "/ajax/getmorespeciallistings/" + maxLimit + "/" + nextPage,
      dataType: 'json',
      success: function (response) {
        if (response.status == 1) {
          $('#newsListfull').append(response.searchData);
          history.pushState(null, null, pageUrl + '/' + nextPage);
          document.title = titleArr[0] + ' | page ' + nextPage;
          $('meta[name="description"]').attr("content", descArr[0] + ' | page ' + nextPage);
          sendGA(slug, 'click', 'Load More', nextPage);
          sendGAPageViews(slugUrl + '/' + nextPage);
          comscore_tag_listing();
          $("#loadermnews").attr('style', "");
          $("img.lazy").lazyload({
            effect: "fadeIn"
          }).removeClass("lazy");
          $("#page").val(nextPage);
          if (totalPages == nextPage) {
            $("#loadMoreSpecial").hide();
          }
        } else {
          $("#loadMoreSpecial").hide();
        }
      }
    });
  } else {
    $("#loadMoreSpecial").hide();
  }
});

jQuery("body").on('click', '#loadallvideo', function () {
  jQuery(".loadmore-video").show();
  jQuery(".readMore").hide();
});
function setCookieComDesk(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires +";path=/";
}
function getCookieComDesk(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	}
	return "";
}
