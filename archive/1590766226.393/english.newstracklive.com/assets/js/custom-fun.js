$(document).ready(function() {
 "use strict";

 function e(e) {
  var t = this.currentItem;
  $("#sync2").find(".owl-item").removeClass("synced").eq(t).addClass("synced"), void 0 !== $("#sync2").data("owlCarousel") && o(t)
 }

 function o(e) {
  var o = w.data("owlCarousel").owl.visibleItems,
   t = e,
   n = !1;
  for (var i in o)
   if (t === o[i]) var n = !0;
  n === !1 ? t > o[o.length - 1] ? w.trigger("owl.goTo", t - o.length + 2) : (t - 1 === -1 && (t = 0), w.trigger("owl.goTo", t)) : t === o[o.length - 1] ? w.trigger("owl.goTo", o[1]) : t === o[0] && w.trigger("owl.goTo", t - 1)
 }

 function t(e) {
  c = e, n(), i()
 }

 function n() {
  r = $("<div>", {
   id: "progressBar"
  }), d = $("<div>", {
   id: "bar"
  }), r.append(d).prependTo(c)
 }

 function i() {
  f = 0, u = !1, g = setInterval(a, 10)
 }

 function a() {
  u === !1 && (f += 1 / p, d.css({
   width: f + "%"
  }), f >= 100 && c.trigger("owl.next"))
 }

 function s() {
  u = !0
 }

 function l() {
  clearTimeout(g), i()
 }
 $(window).load(function() {
  $("#status").delay(300).fadeOut(), $("#preloader").delay(300).fadeOut("slow")
 }), $(".tags li").hover(function() {
  $(this).find("a").toggleClass("wow flipInY animated")
 }), $(".f-social li").hover(function() {
  $(this).find("a").toggleClass("wow swing animated")
 }), $(".social a").hover(function() {
  $(this).find("p").toggleClass("wow fadeInDown animated")
 }), $("a.read-more").hover(function() {
  $(this).find("span").toggleClass("wow flipInY animated")
 }), $.scrollUp(), $("html").niceScroll({
  styler: "fb",
  cursorcolor: "#ad0000"
 }), $(window).load(function() {
  setTimeout(function() {
   $("#gmbox div").animate({
    top: 60
   }, 1500, "easeOutElastic")
  }, 1500)
 }), $(".search-container").hide(), $(".toggle-search").on("click", function(e) {
  e.preventDefault(), e.stopPropagation(), $(".search-container").slideToggle(500, function() {
   $("#search-bar").focus()
  })
 }), $(document).click(function(e) {
  var o = $(".search-container");
  o.is(e.target) || 0 !== o.has(e.target).length || o.slideUp(500)
 }), enquire.register("screen and (min-width:767px)", {
  match: function() {
   $(".dropdown").hover(function() {
    $(".dropdown-menu", this).stop().fadeIn("slow")
   }, function() {
    $(".dropdown-menu", this).stop().fadeOut("slow")
   })
  }
 }),
  
  $(window).scroll(function() {
if(  $(window).scrollTop() >= 99 && $(".nav-search-outer").addClass("navbar-fixed-top"), $(window).scrollTop() >= 100 )
{ $(".nav-search-outer").addClass("show");  $('.sp_box').addClass('onscroll-open');}
else{ $(".nav-search-outer").removeClass("show navbar-fixed-top");$('.sp_box').removeClass('onscroll-open');}
 }), $("#banner-thumbs").owlCarousel({
  autoPlay: !0,
  navigation: !1,
  stopOnHover: !0,
  pagination: !1,
  items: 4,
  itemsDesktop: [1199, 4],
  itemsDesktopSmall: [979, 3],
  itemsTablet: [768, 3],
  itemsMobile: [479, 1]
 }), $("#vid-thumbs").owlCarousel({
  navigation: !1,
  pagination: !0,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: !0
 }), $("#owl-lifestyle").owlCarousel({
  autoPlay: true,
  navigation: true,
  pagination: true,
  items: 3,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [979, 2],
  itemsTablet: [768, 2],
  itemsMobile: [479, 1]
 }), $("#owl-blog").owlCarousel({
  navigation: !0,
  pagination: !1,
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: !0
 });
 var r, d, c, u, g, f, p = 4,
  m = $("#sync1"),
  w = $("#sync2");
 m.owlCarousel({
  singleItem: !0,
  slideSpeed: 1e3,
  navigation: !0,
  pagination: !1,
  transitionStyle: "fadeUp",
  afterAction: e,
  responsiveRefreshRate: 200,
  afterInit: t,
  afterMove: l,
  startDragging: s
 }), w.owlCarousel({
  items: 4,
  itemsDesktop: [1199, 4],
  itemsDesktopSmall: [979, 3],
  itemsTablet: [768, 3],
  itemsMobile: [479, 3],
  pagination: !1,
  responsiveRefreshRate: 100,
  afterInit: function(e) {
   e.find(".owl-item").eq(0).addClass("synced")
  }
 }), $("#sync2").on("click", ".owl-item", function(e) {
  e.preventDefault();
  var o = $(this).data("owlItem");
  m.trigger("owl.goTo", o)
 }), jQuery(c).on("mouseover", function() {
  u = !0
 }), jQuery(c).on("mouseout", function() {
  u = !1
 })
});