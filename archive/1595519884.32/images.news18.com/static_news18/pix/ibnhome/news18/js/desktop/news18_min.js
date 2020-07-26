$(document).ready(function(){
	$('.pancakebox').on('click', function(e){
		e.preventDefault();
		$('.second-lnav').slideToggle();
		$('.search-ltv').toggleClass('addcls');
		$('.pancake').toggleClass('adcls');
		$(this).toggleClass('adcls');
		$('.mstext').slideToggle(200);
		$('.ofhen').toggleClass('hdn');
		
	});

//Exclusive widget slider
if( $('.single-item1').length ) {
	$('.single-item1').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: '.r1',
		prevArrow: '.l1',
	});
}

//Photogallery slider	
if( $('.single-item2').length ) {
	$('.single-item2').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		nextArrow: '.galright',
		prevArrow: '.galleft',
	});
}

//Ivideos slider
if( $('.single-item3').length ) {
	$('.single-item3').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		nextArrow: '.ividright',
		prevArrow: '.ividleft',
	});
}

//Video wall slider
if( $('.single-item4').length ) {
	$('.single-item4').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.vidslright',
		prevArrow: '.vidslleft',
	});
}

var bott= $('nav').position().top;
$(window).scroll(function(){
var wintop= $(window).scrollTop();
if(wintop >= bott){
$('nav').addClass('adcls');
$('.stky-logo').show();
$('nav ul.topnav').addClass('adcls');
$('.ofhen').addClass('hdn')
$('nav ul.topnav li:nth-child(n+12)').css('display', 'none');
}
else{
$('nav').removeClass('adcls');
$('.stky-logo').hide();
$('nav ul.topnav').removeClass('adcls');
$('.ofhen').removeClass('hdn');
$('nav ul.topnav li:nth-child(n+12)').css('display', 'block');
}
});

// Cricket Results and Fixture Widget:
var crcontener=$("ul#cnr-box");
var crcount=0;
var crtotel_li=crcontener.find("li").length;
$('.cricket-widget ul.tab li').on('click', function(e){
	e.preventDefault();
	$(this).addClass('act').siblings().removeClass('act');
	var tab = $(this).data("type");
	$(".cricket-widget .cwinner").hide();
	$(".cricket-widget .cwinner#"+tab).show();
	crcount = 0;
	crcontener=$(".cwinner#"+tab+" ul.rhs_cricket_resultsfixture");
	crtotel_li = crcontener.find("li").length;	
	
});
var crli_width=crcontener.find("li").width();
$("div.cnrb").click(function(){
	console.log("After Click==" + crtotel_li);
	var crdir=$(this).data("type");
	if(crdir=="right"){
		crcount=crcount+1;
	}
	else{
		crcount=crcount-1;
	}
	if(crcount <0 || crcount>=crtotel_li){
	  crcount=0;
	}
	crcontener.animate({marginLeft:'-'+crcount*crli_width+'px'},500);
});
// End of Cricket Results and Fixture:

// Football Results and Upcoming Widgets:
if( $('.football_upcoming').length ) {
	$('.slider').show();
	$('.football_upcoming').slick({
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		nextArrow: '.rarrow1',
		prevArrow: '.larrow1',
		appendDots : '.sliderBullets',

	});	
}
if( $('.football_results').length ) {
	$('.slider').show();
	$('.football_results').slick({
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		nextArrow: '.rarrow',
		prevArrow: '.larrow',
		appendDots : '.sliderBullets1',

	});	
}

// End Of Football Results and Upcoming Widgets:

	var faderIndex = 0;
	var faders = $('.breaking-flash'); 
	function nextFade() {    
		$(faders[faderIndex]).fadeOut(3000, function() {       
			faderIndex++;
			if (faderIndex >= faders.length)
				faderIndex = 0;
			$(faders[faderIndex]).fadeIn(3000, nextFade);
		});
	}
	nextFade();
	
//header nav scripts

		$('.sbtn').on('click', function(){
			$('.exp-search').slideToggle();
		});
		$('.sclose').on('click', function(){
			$('.exp-search').slideUp();
		});

	$('ul.subnav li:first-child').click(function(){
		$(this).find('span').toggleClass('close');
	})

	$("ul.subnav li:first-child").click(function(){
		$("ul.subnav li em").toggleClass("addcls");
		$(".nav-rgt-inside-links").slideToggle('fast');
		});
		
	//for mobile header
	
	  $(".mbl-nav").click(function(){
		$(".mobile-bg").toggle();
		$(".mbl-nav").addClass("afterclick");
		$(".mobile-navigation").animate({width: 'toggle'}, 'slow');
		$("body").addClass("ovrflhdn");
		$(".mbl-nav-clbx").css({"display":"block"});
	});
	
	 $(".mbl-nav-clbx").click(function(){
	$(".mbl-nav-clbx").css({"display":"none"});
	$(".mbl-nav").removeClass("afterclick");
	$(".mobile-bg").toggle();
	$(".mobile-navigation").animate({width: 'toggle'}, 'slow');
	$("body").removeClass("ovrflhdn");
	 });
	
	$(".mobile-bg").click(function(){
		$(".mbl-nav-clbx").css({"display":"none"});
		$(".mbl-nav").removeClass("afterclick");
		$(".mobile-bg").toggle();
		$(".mobile-navigation").animate({width: 'toggle'}, 'slow');
	});
	
	$('.srch-for-mbl').on('click', function(){
		$('.exp-search-formobile').slideToggle();
	});
	
	$('.top-search').on('click', function(){
		$('.exp-search').slideToggle();
	});
	
	if( $('.single-item8').length ) {
		$('.single-item8').slick({
			infinite: true,
			speed: 1000,
			//slidesToShow: 5,
			variableWidth: true,
			slidesToScroll: 1,
			autoplay: true,
			nextArrow: '.budnxt',
			prevArrow: '.budpvr',
		});
	}

	if( $('.single-item9').length ) {
		$('.single-item9').slick({
			infinite: true,
			speed: 1000,
			variableWidth: true,
			slidesToScroll: 1,
			autoplay: true,	
			nextArrow: '',
			prevArrow: '',
		});
	}
			
});

