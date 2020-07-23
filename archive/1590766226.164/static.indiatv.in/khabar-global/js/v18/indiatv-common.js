function sendGA(eventCategory, eventAction, eventLabel, eventValue) {
  eventValue = eventValue || '';
  try {
    ga("send", "event", eventCategory, eventAction, eventLabel, eventValue);
  } catch (err) {
    console.log("sendGA error " + eventCategory + " | " + eventAction + " | " + eventLabel + " | " + eventValue);
  }
}
function sendGAPageViews(pageUrl) {
  try {
    ga('send', 'pageview', pageUrl);
  } catch (e) {
    console.log("load error pageviews " + pageUrl);
  }
}
function sendGAforSocial(socialNetwork, socialAction, socialTarget) {
  try {
    socialTarget = socialTarget || window.location.pathname;
    ga('send', 'social', socialNetwork, socialAction, socialTarget);
  } catch (e) {
    console.log("social share error " + socialNetwork + " " + socialAction + " " + socialTarget);
  }
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 79) {
    $('.menuMain').addClass("sticky_menu");
  } else {
    $('.menuMain').removeClass("sticky_menu");
  }
});
var a = 1;
$(".openserch").click(function () {
  if (a == 1) {
    $(this).addClass("active");
    $(".serchBox").css("height", "76px");
    a = 0;
  } else {
    $(this).removeClass("active");
    $(".serchBox").css("height", "0px");
    a = 1;
  }
  $(".sercfield").focus();
});

var b = 1;
$(".openserch_menu").click(function () {
  if (b == 1) {
    $(this).addClass("active");
    $(".serchBox_menu").css("height", "76px");
    b = 0;
  } else {
    $(this).removeClass("active");
    $(".serchBox_menu").css("height", "0px");
    b = 1;
  }
  $(".sercfield_menu").focus();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('.gutStickyArt .gutinner').addClass("sticky");
  } else {
    $('.gutStickyArt .gutinner').removeClass("sticky");
  }
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 255) {
    $('.gutStickyCat .gutinner').addClass("sticky");
  } else {
    $('.gutStickyCat .gutinner').removeClass("sticky");
  }
});
$('.closeNews').click(function () {
  $('#breakingNow').hide();
});

/*SOCIAL SHARE BUTTON ON IMAGES*/
if($('.shareimage').length>0) {
  var siteurl = window.location.protocol+'//'+window.location.hostname;
  $('.shareimage').each(function(){
    var sharepath = $(this).attr('id').replace('_','/');
    var sharetitle = '';
    try{
      sharetitle = $(this).parent('p').next('.img_caption').text();
    } catch(err){}
    parentp = $(this).parent('p');
    parentp.addClass('shareimgcont');
    $('<ul class="imgsocial pull-right"><li class="facebook"><a class="facebook" href="javascript:void(0);" data-url="'+siteurl+'/share/'+sharepath+'" data-title="" title="Facebook"><i class="icon-facebook" aria-hidden="true"></i></a></li> <li class="twitter"><a class="twitter" href="javascript:void(0);" data-url="'+siteurl+'/share/'+sharepath+'" data-title="'+sharetitle+'"  title="Twitter"><i class="icon-twitter" aria-hidden="true"></i></a></li> <li class="google-plus"><a class="google-plus" href="javascript:void(0);" data-url="'+siteurl+'/share/'+sharepath+'" data-title="" title="Google-plus"><i class="icon-google-plus" aria-hidden="true"></i></a></li> </ul>').insertAfter($(this));
  });
}

$(document).on("click", '.social a,.imgsocial a,.v_social ul a', function () {
  var url = $(this).attr('data-url');
  var title = $(this).attr('data-title');
  var image = $(this).attr('data-image');
  var currentSocialClass = $(this).attr('class');
  var eventCategory = $(this).attr('category');
  var eventAction = $(this).attr('action');
  var eventLabel = $(this).attr('label');
  var eventValue = $(this).attr('id');
  var twt_hndle = 'IndiaTVHindi';
  if(url.match('/paisa/')) {
    twt_hndle = 'IndiaTVPaisa';
  }
  switch (currentSocialClass) {
    case 'facebook':
      sendGA(eventCategory, eventAction, eventLabel, eventValue);
      var popUp = window.open("https://www.facebook.com/sharer/sharer.php?u=" + url + "&t=" + title, "popupwindow", "menubar=1,resizable=1,width=600,height=400");

      if (image != '' || image != 'undefined') {
        $('meta[name=og\\:image]').attr('content', image);
      }
      popUp.focus();
      return false;
      break;
    case 'twitter':
      sendGA(eventCategory, eventAction, eventLabel, eventValue);
      var strUrl = encodeURI("https://twitter.com/share?text=" + title + "&url=" + url);
      /*+ "&via="+twt_hndle);*/
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
    case 'pinterest':
    case 'pinteres':
      sendGA(eventCategory, eventAction, eventLabel, eventValue);
      var popUp = window.open("https://pinterest.com/pin/create/bookmarklet/?media=" + image + "&url=" + url + "&is_video=false&description=" + title, "popUpWindow", "height=400,width=600,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes");
      popUp.focus();
      return false;
      break;
    case 'linedin':
    case 'linkedin':
      sendGA(eventCategory, eventAction, eventLabel, eventValue);
      var popUp = window.open("https://www.linkedin.com/shareArticle?mini=true" + "&url=" + url + "&title=" + title, 'popupwindow', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600');
      popUp.focus();
      return false;
      break;
  }
});

$(".searchsubmit,.submitSerch").click(function (e) {
  var searchReg = /^[a-zA-Z0-9- '.]+$/;
  if ($(this).attr('id') == "searchbutton") {
    var val = $("#searchfield").val().trim();
    if (val === "") {
      $("#searchfield").attr('class', 'sercfield red');
      $('#searchfield').focus();
      return false;
    }
    /*if (!searchReg.test(val)) {
      $("#searchfield").attr('class', 'sercfield red');
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $('#searchfield').focus();
      return false;
    }*/
  }

  if ($(this).attr('id') == "searchbutton_paisa") {
    var val = $("#searchfield_paisa").val().trim();
    if (val === "") {
      $("#searchfield_paisa").attr('class', 'sercfield red');
      $('#searchfield_paisa').focus();
      return false;
    }
    /*if (!searchReg.test(val)) {
      $("#searchfield_paisa").attr('class', 'sercfield red');
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $('#searchfield_paisa').focus();
      return false;
    }*/
  }

  if ($(this).attr('id') == "searchboxbutton") {
    var val = $("#searchboxfield").val().trim();
    if (val === "") {
      $("#searchboxfield").attr('class', 'searchfield red');
      $('#searchboxfield').focus();
      return false;
    }
    /*if (!searchReg.test(val)) {
      $("#searchboxfield").attr('class', 'searchfield red');
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $('#searchboxfield').focus();
      return false;
    }*/
  }

  if ($(this).attr('id') == "searchboxmenubutton") {
    var val = $("#searchboxmenu").val().trim();
    if (val === "") {
      $("#searchboxmenu").attr('class', 'sercfield_menu red');
      $('#searchboxmenu').focus();
      return false;
    }
    /*if (!searchReg.test(val)) {
      $("#searchboxmenu").attr('class', 'sercfield_menu red');
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $('#searchboxmenu').focus();
      return false;
    }*/
  }

  if ($(this).attr('id') == "searchboxmenubutton_paisa") {
    var val = $("#searchboxmenu_paisa").val().trim();
    if (val === "") {
      $("#searchboxmenu_paisa").attr('class', 'sercfield_menu red');
      $('#searchboxmenu_paisa').focus();
      return false;
    }
    /*if (!searchReg.test(val)) {
      $("#searchboxmenu_paisa").attr('class', 'sercfield_menu red');
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $('#searchboxmenu_paisa').focus();
      return false;
    }*/
  }
  if ($(this).attr('id') == "searchbutton_paisa" || $(this).attr('id') == "searchboxmenubutton_paisa") {
    val = $.trim(val);
    str = val.replace(/\s+/g, '-').toLowerCase();
    window.location.href = '/paisa/topic/' + str;
    return true;
  } else {
    val = $.trim(val);
    str = val.replace(/\s+/g, '-').toLowerCase();
    window.location.href = '/topic/' + str;
    return true;
  }
});
$("#searchboxmenu").blur(function (e) {
  $("#searchboxmenu").attr('class', 'sercfield_menu');
});

$("#searchboxmenu_paisa").blur(function (e) {
  $("#searchboxmenu_paisa").attr('class', 'sercfield_menu');
});

$("#searchboxmenu").keypress(function (e) {
  if (e.which == 13) {
    var searchReg = /^[a-zA-Z0-9- '.]+$/;
    var val = $('#searchboxmenu').val().trim();
    if (val === "") {
      $("#searchboxmenu").attr('class', 'sercfield_menu red');
      $('#searchboxmenu').focus();
      return false;
    } /*else if (!searchReg.test(val)) {
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $("#searchboxmenu").attr('class', 'sercfield red');
      $('#searchboxmenu').focus();
      return false;
    }*/
    val = $.trim(val);
    str = val.replace(/\s+/g, '-').toLowerCase();
    window.location.href = '/topic/' + str;
    return true;
  }
});

$("#searchboxmenu_paisa").keypress(function (e) {
  if (e.which == 13) {
    var searchReg = /^[a-zA-Z0-9- '.]+$/;
    var val = $('#searchboxmenu_paisa').val().trim();
    if (val === "") {
      $("#searchboxmenu_paisa").attr('class', 'sercfield_menu red');
      $('#searchboxmenu_paisa').focus();
      return false;
    } /*else if (!searchReg.test(val)) {
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $("#searchboxmenu_paisa").attr('class', 'sercfield red');
      $('#searchboxmenu_paisa').focus();
      return false;
    }*/
    val = $.trim(val);
    str = val.replace(/\s+/g, '-').toLowerCase();
    window.location.href = '/paisa/topic/' + str;
    return true;
  }
});

$("#searchboxfield").keypress(function (e) {
  if (e.which == 13) {
    var searchReg = /^[a-zA-Z0-9- '.]+$/;
    var val = $('#searchboxfield').val().trim();
    if (val === "") {
      $("#searchboxfield").attr('class', 'searchfield red');
      $('#searchboxfield').focus();
      return false;
    } /*else if (!searchReg.test(val)) {
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $("#searchboxfield").attr('class', 'searchfield red');
      $('#searchboxfield').focus();
      return false;
    }*/
    val = $.trim(val);
    str = val.replace(/\s+/g, '-').toLowerCase();
    window.location.href = '/topic/' + str;
    return true;
  }
});

$("#searchboxfield_paisa").keypress(function (e) {
  if (e.which == 13) {
    var searchReg = /^[a-zA-Z0-9- '.]+$/;
    var val = $('#searchboxfield_paisa').val().trim();
    if (val === "") {
      $("#searchboxfield_paisa").attr('class', 'searchfield red');
      $('#searchboxfield_paisa').focus();
      return false;
    } /*else if (!searchReg.test(val)) {
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $("#searchboxfield_paisa").attr('class', 'searchfield red');
      $('#searchboxfield_paisa').focus();
      return false;
    }*/
    val = $.trim(val);
    str = val.replace(/\s+/g, '-').toLowerCase();
    window.location.href = '/paisa/topic/' + str;
    return true;
  }
});

$("#searchfield").blur(function (e) {
  $("#searchfield").attr('class', 'sercfield');
});

$("#searchfield_paisa").blur(function (e) {
  $("#searchfield_paisa").attr('class', 'sercfield');
});

$("#searchfield").keypress(function (e) {
  if (e.which == 13) {
    var searchReg = /^[a-zA-Z0-9- '.]+$/;
    var val = $('#searchfield').val().trim();
    if (val === "") {
      $("#searchfield").attr('class', 'sercfield red');
      $('#searchfield').focus();
      return false;
    } /*else if (!searchReg.test(val)) {
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $("#searchfield").attr('class', 'sercfield red');
      $('#searchfield').focus();
      return false;
    }*/
    val = $.trim(val);
    str = val.replace(/\s+/g, '-').toLowerCase();
    window.location.href = '/topic/' + str;
    return true;
  }
});

$("#searchfield_paisa").keypress(function (e) {
  if (e.which == 13) {
    var searchReg = /^[a-zA-Z0-9- '.]+$/;
    var val = $('#searchfield_paisa').val().trim();
    if (val === "") {
      $("#searchfield_paisa").attr('class', 'sercfield red');
      $('#searchfield_paisa').focus();
      return false;
    } /*else if (!searchReg.test(val)) {
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $("#searchfield_paisa").attr('class', 'sercfield red');
      $('#searchfield_paisa').focus();
      return false;
    }*/
    val = $.trim(val);
    str = val.replace(/\s+/g, '-').toLowerCase();
    window.location.href = '/paisa/topic/' + str;
    return true;
  }
});

$("#search404").keypress(function (e) {
  if (e.which == 13) {
    var searchReg = /^[a-zA-Z0-9- '.]+$/;
    var val = $('#search404').val().trim();
    if (val === "") {
      alert('Please enter what you like to search today.');
      $('#search404').focus();
      return false;
    } /*else if (!searchReg.test(val)) {
      alert('Oops! You might have entered the invalid keyword(s). Kindly re-enter.');
      $('#searchtop').focus();
      return false;
    }*/
    $(this).closest('form').submit();
    return false;
  }
});
$(document).ready(function () {
  $('.fontSizeMinus').on("click", function () {
    sendGA("FontSizeMinus", 'clicked', 'News font minus clicked');
  });
  $('.fontSizePlus').on("click", function () {
    sendGA("FontSizePlus", 'clicked', 'News font plus clicked');
  });
  $('.cicon').on("click", function () {
    sendGA("vuukle", 'clicked', 'Icon Button clicked');
  });
  $('.pricon').on("click", function () {
    sendGA("Print", 'clicked', 'Button clicked');
  });
  $('.prevv').on("click", function () {
    sendGA("Featured-Widget", 'clicked', 'previous');
  });
  $('.nextv').on("click", function () {
    sendGA("Featured-Widget", 'clicked', 'next');
  });
  $('.f-f-icon').on("click", function () {
    sendGA("Social-Icons", 'clicked', 'FB Footer');
  });
  $('.f-t-icon').on("click", function () {
    sendGA("Social-Icons", 'clicked', 'Twitter Footer');
  });
  $('.f-y-icon').on("click", function () {
    sendGA("Social-Icons", 'clicked', 'Youtube Footer');
  });
  $('.f-p-icon').on("click", function () {
    sendGA("Social-Icons", 'clicked', 'Pinterest Footer');
  });
  $('#upflink').on("click", function () {
    sendGA("Site-Index", 'clicked', 'Footer icon');
  });
  $('.scrollupicon').on("click", function () {
    sendGA("PageScroll", 'clicked', 'Scroll up');
  });
  $('#showLeftPush').on("click", function () {
    if ($(this).hasClass('active')) {
      sendGA("Hamburger", 'clicked', 'Hamburger Opened');
    } else {
      sendGA("Hamburger", 'clicked', 'Hamburger Closed');
    }
  });
  $('.touch-icon').on("click", function () {
    if ($(this).hasClass('down')) {
      sendGA("Hamburger", 'clicked', 'Hamburger Collapsed');
    }
    if ($(this).hasClass('up')) {
      sendGA("Hamburger", 'clicked', 'Hamburger Expanded');
    }
  });
});
$('document').ready(function () {
  $('#show_timing .tab-section').hide();
  $.each($('#show_timing .tab-section'), function () {
    var id = $(this).attr('id');
    if ($('#' + id).hasClass('active')) {
      $('#' + id).show();
    }
  });
  $('#show-timing-taber a').on("click", function () {
    $('#show_timing .tab-section').hide();
    $('#show_timing .tab-section').removeClass('active');
    $('#show-timing-taber a').removeClass('active');
    var id = $(this).attr('attrib');
    $(id).show();
    $(id).addClass('active');
    $(this).addClass('active');
    sendGA("showtiming", 'clicked', 'tab', id);
  });
});

$("body").on('click', '#loadMoreContent', function () {
  $("#loadermnews").attr('style', "opacity:1");
  var currentPage = $("#page").val().trim();
  var module = $("#module").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var subcategoryId = $("#subcategoryId").val().trim();
  var maxLimit = $("#maxLimit").val().trim();
  var categoryId = $("#categoryId").val().trim();
  var mainmodule = $("#mainmodule").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if(subcategoryId=='') {
    subcategoryId = 0;
  }
  if(maxLimit=='') {
    maxLimit = 5;
  }
  if(categoryId=='') {
    categoryId = 0;
  }
  if(mainmodule=='') {
    mainmodule = 0;
  }
  if(nextPage=='') {
    nextPage = 2;
  }
  if(module=='') {
    module = 0;
  }
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      /*url: "/widgets/getmorestories?module=" + module + "&subcategoryId=" + subcategoryId + "&maxLimit=" + maxLimit + "&categoryId=" + categoryId + "&mainmodule=" + mainmodule + "&nextPage=" + nextPage + "&rand=" + randomnumber,*/
      url: "/widgets/getmorestories/" + module + "/" + subcategoryId + "/" + maxLimit + "/" + categoryId + "/" + mainmodule + "/" + nextPage,
      dataType: 'json',
      success: function (response) {
        if (response.status == 1) {
          $('.newsListfull').append(response.categoryData);
          history.pushState(null, null, pageUrl + '/' + nextPage);
          $('meta[name="description"]').attr("content", descArr[0] + ' | page ' + nextPage);
          document.title = titleArr[0] + ' | page ' + nextPage;
          $("#loadermnews").attr('style', "opacity:0");
          $("#page").val(nextPage);
          $("img.lazy").lazyload({
            effect: "fadeIn"
          }).removeClass("lazy");
          sendGA(module, 'click', 'Load More', nextPage);
          sendGAPageViews(slugUrl + '/' + nextPage);
          comscore_tag_listing();
          if (totalPages == nextPage) {
            $("#loadMoreContent").hide();
          }
        } else {
          $("#loadMoreContent").hide();
        }
      }
    });
  } else {
    $("#loadMoreContent").hide();
  }
});

$("body").on('click', '#loadMoreReview', function () {
  $("#loadermnews").attr('style', "opacity:1");
  var currentPage = $("#page").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var maxLimit = $("#maxLimit").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      url: "/widgets/getmorereviews?maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&rand=" + randomnumber,
      dataType: 'json',
      success: function (response) {
        if (response.status == 1) {
          $('.newsListfull').append(response.categoryData);
          history.pushState(null, null, pageUrl + '/' + nextPage);
          $('meta[name="description"]').attr("content", descArr[0] + ' | page ' + nextPage);
          document.title = titleArr[0] + ' | page ' + nextPage;
          $("#loadermnews").attr('style', "opacity:0");
          $("#page").val(nextPage);
          $("img.lazy").lazyload({
            effect: "fadeIn"
          }).removeClass("lazy");
          sendGA('movie review', 'click', 'Load More', nextPage);
          sendGAPageViews(slugUrl + '/' + nextPage);
          comscore_tag_listing();
          if (totalPages == nextPage) {
            $("#loadMoreReview").hide();
          }
        } else {
          $("#loadMoreReview").hide();
        }
      }
    });
  } else {
    $("#loadMoreContent").hide();
  }
});

$("body").on('click', '#loadMoreTrailer', function () {
  $("#loadermnews").attr('style', "opacity:1");
  var currentPage = $("#page").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var maxLimit = $("#maxLimit").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      url: "/widgets/getmoretrailers?maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&rand=" + randomnumber,
      dataType: 'json',
      success: function (response) {
        if (response.status == 1) {
          $('.newsListfull').append(response.categoryData);
          history.pushState(null, null, pageUrl + '/' + nextPage);
          $('meta[name="description"]').attr("content", descArr[0] + ' | page ' + nextPage);
          document.title = titleArr[0] + ' | page ' + nextPage;
          $("#loadermnews").attr('style', "opacity:0");
          $("#page").val(nextPage);
          $("img.lazy").lazyload({
            effect: "fadeIn"
          }).removeClass("lazy");
          sendGA('movie trailer', 'click', 'Load More', nextPage);
          sendGAPageViews(slugUrl + '/' + nextPage);
          comscore_tag_listing();
          if (totalPages == nextPage) {
            $("#loadMoreTrailer").hide();
          }
        } else {
          $("#loadMoreTrailer").hide();
        }
      }
    });
  } else {
    $("#loadMoreContent").hide();
  }
});

function comscore_tag_listing() {
  if (typeof _comscore != 'undefined') {
    _comscore.push({c1: "2", c2: "20465327"});
  }
}

$("body").on('click', '#loadMoreContentSearch', function () {
  $("#loadermnews").attr('style', "display:block");
  var currentPage = $("#page").val().trim();
  var maxLimit = $("#maxLimit").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var slug = $("#slug").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      url: "/widgets/getmoresearch?maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&slug=" + slug + "&rand=" + randomnumber,
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
            $("#loadMoreContentSearch").hide();
          }
        } else {
          $("#loadMoreContentSearch").hide();
        }
      }
    });
  } else {
    $("#loadMoreContentSearch").hide();
  }
});

$("body").on('click', '#loadMoreData', function () {
  $("#loadermnews").attr('style', "display:block");
  var currentPage = $("#page").val().trim();
  var maxLimit = $("#maxLimit").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var srchtag = $("#srchtag").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      url: "/widgets/getmoresearch?maxLimit=" + maxLimit + "&module=news&nextPage=" + nextPage + "&slug=" + srchtag + "&rand=" + randomnumber,
      dataType: 'json',
      success: function (response) {
        if (response.status == 1) {
          $('#newsListfull').append(response.searchData);
          history.pushState(null, null, pageUrl);
          document.title = titleArr[0] + ' | page ' + nextPage;
          $('meta[name="description"]').attr("content", descArr[0] + ' | page ' + nextPage);
          sendGA(slugUrl, 'click', 'Load More', nextPage);
          sendGAPageViews(slugUrl + '/' + nextPage);
          comscore_tag_listing();
          $("#loadermnews").attr('style', "");
          $("img.lazy").lazyload({
            effect: "fadeIn"
          }).removeClass("lazy");
          $("#page").val(nextPage);
          if (totalPages == nextPage) {
            $("#loadMoreData").hide();
          }
        } else {
          $("#loadMoreData").hide();
        }
      }
    });
  } else {
    $("#loadMoreData").hide();
  }
});

$("body").on('click', '#loadMoreContentSearchNews', function () {
  $("#loadermnews").attr('style', "display:block");
  var currentPage = $("#page").val().trim();
  var maxLimit = $("#maxLimit").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var slug = $("#slug").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var module = $("#module").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      url: "/widgets/getmoresearchnews?maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&module=" + module + "&slug=" + slug + "&rand=" + randomnumber,
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
            $("#loadMoreContentSearchNews").hide();
          }
        } else {
          $("#loadMoreContentSearchNews").hide();
        }
      }
    });
  } else {
    $("#loadMoreContentSearchNews").hide();
  }
});

$("body").on('click', '#loadMoreContentSearchVideo', function () {
  $("#loadermnews").attr('style', "display:block");
  var currentPage = $("#page").val().trim();
  var maxLimit = $("#maxLimit").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var slug = $("#slug").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      url: "/widgets/getmoresearch?maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&slug=" + slug + "&rand=" + randomnumber,
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
            $("#loadMoreContentSearchVideo").hide();
          }
        } else {
          $("#loadMoreContentSearchVideo").hide();
        }
      }
    });
  } else {
    $("#loadMoreContentSearchVideo").hide();
  }
});

$("body").on('click', '.eventTracking', function () {
  var eventCategory = $(this).attr('category');
  var eventAction = $(this).attr('action');
  var eventLabel = $(this).attr('label');
  var eventValue = $(this).attr('id');
  console.log(eventCategory + "," + eventAction + "," + eventLabel + "," + eventValue);
  sendGA(eventCategory, eventAction, eventLabel, eventValue);
});

$(".topNews").on('click', '#loadMoreArchieve', function () {
  $("#loadermnews").attr('style', "display:block");
  var currentPage = $("#page").val().trim();
  var maxLimit = $("#maxLimit").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var slug = $("#slug").val().trim();
  var slugData = $("#slugData").val().trim();
  var categoryName = $("#categoryName").val().trim();
  var categoryId = $("#categoryId").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');

  var randomnumber = Math.random() * 1000000000;
  if (totalPages != nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      url: "/widgets/getmorearchivestories?maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&categoryName=" + categoryName + "&categoryId=" + categoryId + "&slug=" + slug + "&slugData=" + slugData + "&rand=" + randomnumber,
      dataType: 'json',
      success: function (response) {
        if (response.status == 1) {
          $('#newsListfull').append(response.categoryData);
          $("#loadermnews").attr('style', "");
          $("#page").val(nextPage);
          history.pushState(null, null, pageUrl + '/' + nextPage);
          document.title = titleArr[0] + ' | page ' + nextPage;
          $('meta[name="description"]').attr("content", descArr[0] + ' | page ' + nextPage);
          sendGA(slug, 'click', 'Load More', nextPage);
          sendGAPageViews(slugUrl + '/' + nextPage);
          comscore_tag_listing();
          $("img.lazy").lazyload({
            effect: "fadeIn"
          }).removeClass("lazy");
          $("#page").val(nextPage);
          if (totalPages == nextPage) {
            $("#loadMoreArchieve").hide();
          }
        } else {
          $("#loadMoreArchieve").hide();
        }
      }
    });
  } else {
    $("#loadMoreArchieve").hide();
  }
});

$("body").on('click', '#loadMoreContentEventNews', function () {
  $("#loadermnews").attr('style', "display:block");
  var currentPage = $("#page").val().trim();
  var maxLimit = $("#maxLimit").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var slug = $("#searchtag").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var module = $("#module").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      url: "/widgets/getmoresearchnews?maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&module=" + module + "&slug=" + slug + "&rand=" + randomnumber,
      dataType: 'json',
      success: function (response) {
        if (response.status == 1) {
          $('.newsListfull').append(response.searchData);
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
            $("#loadMoreContentEventNews").hide();
          }
        } else {
          $("#loadMoreContentEventNews").hide();
        }
      }
    });
  } else {
    $("#loadMoreContentEventNews").hide();
  }
});

$("body").on('click', '#loadMoreContentProfileData', function () {
  $("#loadermnews").attr('style', "display:block");
  var currentPage = $("#page").val().trim();
  var maxLimit = $("#maxLimit").val().trim();
  var totalPages = parseInt($("#totalPages").val().trim());
  var slug = $("#slug").val().trim();
  var nextPage = parseInt(currentPage) + 1;
  var pageUrl = $("#pageUrl").val().trim();
  var module = $("#module").val().trim();
  var slugUrl = $("#slugUrl").val().trim();
  var randomnumber = Math.random() * 1000000000;
  var title = document.title;
  var description = $("meta[name=description]").attr('content');
  var titleArr = title.split('|');
  var descArr = description.split('|');
  if (totalPages >= nextPage) {
    $.ajax({
      type: 'GET',
      async: false,
      cache: true,
      url: "/widgets/getmoreprofile/" + maxLimit + "/" + nextPage + "/" + module + "/" + slug,
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
            $("#loadMoreContentProfileData").hide();
          }
        } else {
          $("#loadMoreContentProfileData").hide();
        }
      }
    });
  } else {
    $("#loadMoreContentProfileData").hide();
  }
});

$(".bolly-prodetails .read_more").click(function(){
  if(b==1){
    $(this).addClass("active");
    $(".read_more .text").text("read less");
    $(".bolly-prodetails .info").css("height", "auto");
    b=0;
  } else{
    $(this).removeClass("active");
    $(".read_more .text").text("read more");
    $(".bolly-prodetails .info").css("height", "54px");
    b=1;
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
      url: "/widgets/getmorespeciallistings?maxLimit=" + maxLimit + "&nextPage=" + nextPage + "&rand=" + randomnumber,
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
function setCookieCom(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires +";path=/";
}
function getCookieCom(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	}
	return "";
}