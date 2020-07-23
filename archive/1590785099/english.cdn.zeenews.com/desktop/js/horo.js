// JavaScript Document
(function () {
var scrollHandle = 0,
scrollStep = 1,
parent = $(".horo-slider");
//Start the scrolling process
$(".panner").on("mouseenter", function () {
var data = $(this).data('scrollModifier'),
direction = parseInt(data, 10);
$(this).addClass('active');
startScrolling(direction, scrollStep);
});
//Kill the scrolling
$(".panner").on("mouseleave", function () {
stopScrolling();
$(this).removeClass('active');
});
//Actual handling of the scrolling
function startScrolling(modifier, step) {
if (scrollHandle === 0) {
scrollHandle = setInterval(function () {
var newOffset = parent.scrollLeft() + (scrollStep * modifier);
parent.scrollLeft(newOffset);
}, 10);
}
}
function stopScrolling() {
clearInterval(scrollHandle);
scrollHandle = 0;
}
}());
//HOROSCOPE SLIDER CLOSE HERE
$(document).ready(function(){
$('ul.horo-slider li').click(function(){
var tab_id = $(this).attr('data-tab');

$('ul.horo-slider li').removeClass('current');
$('.tab-con').removeClass('current');

$(this).addClass('current');
$("#"+tab_id).addClass('current');
})
//HOROSCOPE TAB CLOSE HERE





});
//SPORTS WIDGET CLOSE HERE (HOME PAGE)