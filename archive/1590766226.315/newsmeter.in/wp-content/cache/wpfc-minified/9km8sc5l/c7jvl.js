jQuery(function($){
$(window).load(function(){
$('.viral-slider').flexslider({
animation: "slide",
smoothHeight: true,
controlNav: false,
slideshowSpeed: 6000
});
$('.top-stories-slider').flexslider({
autoplay: true,
animation: "slide",
smoothHeight: true,
controlNav: false,
slideshowSpeed: 3000
});
});
$(document).ready(function(){
$('.tabs1 ul.tabs li').click(function(){
var tab_id=$(this).attr('data-tab');
$('.tabs1 ul.tabs li').removeClass('current');
$('.tabs1 .tab-content-wrapper .tab-content').removeClass('current');
$(this).addClass('current');
$("#"+tab_id).addClass('current');
});
$('.tabs2 ul.tabs li').click(function(){
var tab_id=$(this).attr('data-tab');
$('.tabs2 ul.tabs li').removeClass('current');
$('.tabs2 .tab-content-wrapper .tab-content').removeClass('current');
$(this).addClass('current');
$("#"+tab_id).addClass('current');
});
$('.search-btn').click(function(){
$('#header-search').toggle();
});
$('.navicon').click(function(){
$('#mobilenav').fadeToggle();
});
$('#mobilenav #close').click(function(){
$('#mobilenav').fadeOut();
});
$('a[href^="#"]').on('click', function (event){
var target=$($(this).attr('href'));
if(target.length){
event.preventDefault();
$('html, body').animate({
scrollTop: target.offset().top
}, 1000);
}});
/* $('#copyLink').click(function(){
alert("hi");
});*/
$('.related-slider').owlCarousel({
margin:15,
nav:true,
dots:false,
loop:true,
autoplay: true,
autoplayTimeout:5000,
autoplayHoverPause: true,
responsive:{
320:{
items:2
},
1024:{
items:3
}}
});
});
$('.slick-carousel').slick({
autoplay: true,
autoplaySpeed: 2000,
speed: 500,
infinite: true,
vertical:true,
verticalSwiping:true,
slidesToShow: 4,
slidesToScroll: 1,
prevArrow: $('.prev-arrow'),
nextArrow: $('.next-arrow')
});
$('a.close-poll').click(function(){
$(this).parents('[class*=poll-]').hide();
});
if($.cookie('noShowWelcome')){
$('div#text-8').hide();
}else{
$('div#text-8').hide(0).delay(30000).show(0);
$("div#text-8 .close").click(function(){
$("div#text-8").fadeOut(1000);
$.cookie('noShowWelcome', true);
});
}});