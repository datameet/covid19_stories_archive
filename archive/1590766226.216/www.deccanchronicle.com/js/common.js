/* Common all pages JS Jai 12/21/2019 */
var hoverInterval;
var Banimages = [];
var Bantitle = [];
var Banurl = [];
var flag = false;
var bannerPause = true;
imgShow = 1;
bannerRunning = false;

var hoverIntervalGal;
var Galimages = [];
var Galtitle = [];
var Galurl = [];
galPlayState = false;
var startImgLoad = "";


function actTimer(){
	if($("#galleryCaption").length != 0 && isMobile==0) {
		setInterval(function(){
			if(bannerPause){

			runBanner(imgShow);
			flag = !flag;
			imgShow++;
			}
			if(imgShow>3){imgShow=0;}
		}, 3000);
	}
}

function runBanner(imgShow){
	if($("#galleryCaption").length != 0) {
		$img.attr('src', Banimages[imgShow] );
		$img.attr('title', Bantitle[imgShow] );
		$bUrl.attr('href', Banurl[imgShow] );
		$('#galleryCaption').text(Bantitle[imgShow] );
		$('#banImgTitleRun').text( $( "#t"+(imgShow+1)+" div.thumbH3" ).text() );
		$('.thumb-gal-a').removeClass("thumbSelect");
		$('#t'+(imgShow+1)).addClass("thumbSelect");
	}
}

function hoverBanner(imgShow){
bannerPause = false;
runBanner(imgShow-1);
}

function outBanner(){
bannerPause = true;
}

function autoRefresh()
{
	if($("#autoRefresh").is(':checked')){
	   window.location.reload();
	}
}

function blinkeffect(selector, speed) {
		$(selector).fadeOut(speed*2, function() {
		$(this).fadeIn(speed, function() {
		blinkeffect(this,speed);
		});
	});
}
function optimizeStoryImages(){
	var $window = $(window);
	$('#storyBody img').each(
        function(){
            var theWidth = $(this).width();
            var theHeight = $(this).height();
			var windowHeight = $window.height();
			var shouldHeight = $window.height()-($('#top-bar').height()+10);//+($window.height()/3);
			
			if(theHeight >= theWidth && theHeight > shouldHeight){
            //$(this).css({'margin-top': -theHeight / 2 + 'px', 'margin-left': -theWidth / 2 + 'px'});
            $(this).css({'height': shouldHeight + 'px', 'width': 'auto'});
				jQuery(this).parents('p').addClass('imgCenter');
			}
			jQuery(this).parents('p').addClass('imgCenter');

        });
}
function optimizeImage(wWidth,wHeight){
	
	if(document.getElementById('cImg')){
		wWidth = $('.cover').width();
		var h = document.getElementById('cImg').naturalHeight;
		var w = document.getElementById('cImg').naturalWidth;
		//alert('height:'+h+' width:'+w);
		//alert(wHeight+' '+h);
		//newPercentWidth = $('.cover').width() * (1 - 0.10);
		newPercentWidth = $('.cover').width();
		//console.log('imgOrg w:'+w+' new per: '+newPercentWidth+' :: '+$('.cover').width());
		if(w<newPercentWidth && h<=w){//if image width smaller then container
			$('.cover img').css('height', 'auto' );
			$('.cover img').css('width', 'auto' );
		}else if(w>wWidth){
			$('.cover img').css('height', 'auto' );
			//$('.cover img').css('width', '90%' );
			$('.cover img').css('width', newPercentWidth );
			//console.log('new width : '+newPercentWidth);
		}else if(h>wHeight){
			$('.cover img').css('height', wHeight );
			$('.cover img').css('width', 'auto' );
			//$('.cover img').css('width', 'auto w' );
		}
	}

}
function fScrollNow(to, which){
	if(which=='r'){
	$("div.Ccontainer").scrollLeft($("div.Ccontainer").scrollLeft()+to)
	}else{
	$("div.Ccontainer").scrollLeft($("div.Ccontainer").scrollLeft()-to)
	}
}
function currentGalImage(){
curr_img = $("#cImg").attr("src");
//curr_img = curr_img.replace("preview", "thumb");
curr_img = curr_img.replace("Medi", "original");
	for (i = 0; i < Galimages.length; i++) { 
		//console.log(Galimages[i]+' == '+curr_img);
		if(Galimages[i] == curr_img){return i;}
		}
return "nothing";
}
function changeImage(what){
	currImageId = currentGalImage();
	if(what=="forward"){
		newImageId = currImageId+1;
		if(newImageId>(Galimages.length-1)){newImageId=0;}
	}else{
		newImageId = currImageId-1;
		if(newImageId<0){newImageId=Galimages.length;}
	}
	newImageSrc = Galimages[newImageId];
	newImageTtiel = Galtitle[newImageId];
	newUrl = Galurl[newImageId];
	if(isMobile==0) {
		newImageSrc = newImageSrc.replace("thumb", "preview");
	}
		//$("#cImg").fadeOut();

		$('#cImg').attr('src', newImageSrc );
		$('#cImg').attr('alt', newImageTtiel );
		$('#cImg').attr('title', newImageTtiel );
		$('#storyimg-caption').text( newImageTtiel );
	if (window.history.replaceState) {
	   //prevents browser from storing history with each change:
	   window.history.replaceState('', newImageTtiel, newUrl);
	}
		//$("#cImg").delay(200).fadeIn();
		//console.log(currImageId+':'+newImageSrc);
}
function checkWidth() {
		var $window = $(window);
        var windowsize = $window.width();
        var windowHeight = $window.height();
		optimizeImage(windowsize, windowHeight);
		optimizeStoryImages();
        $('#toggleNav').height(windowHeight);
        $('#toggleNav .sideNav').height(windowHeight-200);
        
        if (windowsize < 768) {//small device less then 801px width
            $('#nationRight').addClass("noPadding");
            $('.topStoryContainer').css('border',0 );
            //Gallery
            $('.galleryContainerM').css('display','none' );
            $('.tumbList h2 span').text('Gallery' );
            $('.thumb-gal-a').css('height','auto' );
            $('.outerThumb').css('max-height','none' );
            //$('.outerThumb img').css({'max-height': windowHeight-10 , 'width': 'auto' });
            //$('.thumbH3').css('height','auto' );
            $('.stry-hd-sml-cnt').css('height','auto' );
            $('#thumbNav').css('height','auto' );
            
        }else{
        //alert($('.galleryContainer').height());
        theHeight = $('.galleryContainer').height();
        	$('#thumbNav').css('height', theHeight );
        	//$('#thumbNav').css('height', '426' );
        	$('#nationRight').removeClass("noPadding");
        	if (bannerRunning){}else{actTimer();bannerRunning=true;
        	}
        	//$('.thumb-gal-a').css('max-height','24.5%' );
        }
		/*
		$(".cookie-close").click(function(){
			$(".cookie-popup-box").slideUp();
		});
		$(document).on('click','#ok_cookies',function(){
			alert('Ok')
		});
		*/
		//$(function () { $("[data-toggle = 'tooltip']").tooltip(); });
		
		/*if ($('#div-gpt-ad-1472539284604-0').length) {
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1472539284604-0'); });
		}*/
		/*
		if ($('#div-gpt-ad-1551419860586-0').length) {
		googletag.cmd.push(function() { googletag.display("div-gpt-ad-1551419860586-0"); });
		}
		if ($('#div-gpt-ad-1423809897472-0').length) {
		googletag.cmd.push(function() { googletag.display("div-gpt-ad-1423809897472-0"); });
		}
		if ($('#div-gpt-ad-1423810071219-0').length) {
		googletag.cmd.push(function() { googletag.display("div-gpt-ad-1423810071219-0"); });
		}
		if ($('#div-gpt-ad-1423810244263-0').length) {
		googletag.cmd.push(function() { googletag.display("div-gpt-ad-1423810244263-0"); });
		}
		if ($('#div-gpt-ad-1423810531536-0').length) {
		googletag.cmd.push(function() { googletag.display("div-gpt-ad-1423810531536-0"); });
		}
		if ($('#div-gpt-ad-1423810681887-0').length) {
		googletag.cmd.push(function() { googletag.display("div-gpt-ad-1423810681887-0"); });
		}
		if ($('#div-gpt-ad-1423810779586-0').length) {
		googletag.cmd.push(function() { googletag.display("div-gpt-ad-1423810779586-0"); });
		}
		if ($('#div-gpt-ad-1562305123898-0').length) {
		//googletag.cmd.push(function() { googletag.display("div-gpt-ad-1562305123898-0"); });
		}
		*/
		$img = $('.galleryContainer img').first();
		$bUrl = $('.galleryContainer a').first();
		$('#cImg').onImagesLoad({
			each : eachItemLoaded
		});

		// When the window is resized
		$(window).resize(function() {
		reSetIframes();
		}).resize();

		$('#cImg.img').bind('load', function(){ // image ready
		// do stuff here
		//alert('here');
		//console.log('image loaded now...');
		});
    }
function openModel(src,nTitle){
	$('#myModal').modal('show');
	$('#myModalLabel').html(nTitle);
	$('#subFrame').attr('src', src);
	$('#subFrame').attr('width','100%');
	$('#subFrame').attr('height','100%');
}
function scrollToTopInitiate(){
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
}
function eachItemLoaded(domObject){
			//note: this == domObject. domObject will be the <div class="imageSection" /> that has just finished loading all of its images
            //console.log('new width --: ');
			checkWidth();
}
function initiatorOnReady(){
	var $window = $(window);
	//- Top Navigation

	/*$('#top-bar').click(function(event){
    	event.stopPropagation();
	});*/	
	//- Top Navigation end 
			if ($('#div-gpt-ad-1562305123898-0').length) {
			googletag.cmd.push(function() { googletag.display("div-gpt-ad-1562305123898-0"); });//div-gpt-ad-1562305123898-0
			}
			if ($('#div-gpt-ad-1578653228638-0').length) {
			//googletag.cmd.push(function() { googletag.display("div-gpt-ad-1578653228638-0"); });//div-gpt-ad-1562305123898-0
			}
		

	if ($('.liveBg').length){
		blinkeffect('.liveBg',2000);
	}
	if ($('.breakingBg').length){
		blinkeffect('.breakingBg',1000);
	}
	/*
    $(".tumbList img").each(function(){
      Banimages.push($(this).attr('src'));
      Bantitle.push($(this).attr('title'));
    })
    $("#thumbNav a").each(function(){
      Banurl.push($(this).attr('href'));
    })
    */
    //console.log(Banurl);

		
        //the 'each' callback is invoked once for each item that $('.imageSection') encapsulates
        //i.e. $('.imageSection').length == 2 here, so the 'each' callback will be invoked twice
       

	$(window).bind('scroll', function() {
      if ($(window).scrollTop() > 145) {
        $('#top-bar').addClass('top-bar-fixed');
        if($('#scoreTop').length>0) {
        $('#scoreTop').addClass('scoreFixIt');
        }
        $('.tool-bar-logo').show(000);
        if ($window.width() < 768){
        	$('.top-left').hide(100);
        	$('.tool-bar-logo .navMob').show(00);
        	}
       } else {
         $('#top-bar').removeClass('top-bar-fixed');
         if($('#scoreTop').length>0) {
         $('#scoreTop').removeClass('scoreFixIt');
     	 }
         $('.tool-bar-logo').hide(000);
         if ($window.width() < 768){
         	$('.top-left').show(100);
         	$('.tool-bar-logo .navMob').hide(00);
         	}
       }
    }); 
	// Optimalisation: Store the references outside the event handler:
   /* if ($window.width() < 768){//if mobile
			startImgLoad = setInterval(ticker, 100);
		}else{
			startImgLoad = setInterval(ticker, 100);
		}*/
	    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
	 $('#cImg').on('load', function(){
			 checkWidth();
		 });	
	$("#arrowR").click(function(){
        fScrollNow(20, 'r');
    });
    $("#arrowL").click(function(){
        fScrollNow(20, 'l');
    });

	
    $("#arrowL").hover(function() {
            // call doStuff every 100 milliseconds
            hoverInterval = setInterval(function(){fScrollNow(10, 'l')}, 100);        
		},
        function() {
            // stop calling doStuff
            clearInterval(hoverInterval);
        }
	);

    $("#arrowR").hover(function() {
            // call doStuff every 100 milliseconds
            hoverInterval = setInterval(function(){fScrollNow(10, 'r')}, 100);        
		},
        function() {
            // stop calling doStuff
            clearInterval(hoverInterval);
        }
	);
	
	scrollToTopInitiate();
	reSetIframes();
	$( "div.fb-post" ).parent().css( "text-align", "center" );

	$(".Ccontainer img").each(function(){
      Galimages.push($(this).attr('src'));
      Galurl.push($(this).parents('.div_to_hold_images').find('a').attr('href'));
      Galtitle.push($(this).attr('title'));
    })

	galPlay();
}
function galPlay(){
	setInterval(function(){
		if(galPlayState){
		changeImage('forward');
		}
	}, 5000);
}
function galPlaySet(){
	if(galPlayState){
		$( "#galPlayButt" ).removeClass( "fa-pause" ).addClass( "fa-play-circle" );
		galPlayState=false;
	}else{
		$( "#galPlayButt" ).removeClass( "fa-play-circle" ).addClass( "fa-pause" );
		galPlayState=true;
	}
}
function checkedAutoRefresh() {
	if(document.getElementById("autoRefresh").checked == true) {
	  document.getElementById("autoRefreshHidden").value='checked';
	} else {
	  document.getElementById("autoRefreshHidden").value='';
	}
	document.autoRefFrm.submit();
}
function uncheckedAutoRefresh() {
	document.getElementById("autoRefresh").checked = false;
}
function reSetIframes(){
	$fluidEl = $(".story-body");
	newWidth = $fluidEl.width();
	var $allVideos = $("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com']");
	 $allVideos.each(
	 //$("iframe").each(
			function(index, elem) {
		 newHeight = elem.height * newWidth / elem.width;
		 //console.log(elem.height);
		 srcString = this.src;
		 var res = srcString.match(/googlesyndication/g);
		 //alert(srcString+' : '+res);
		 //console.log("---"+res);
			if(newWidth>0 && newHeight>0 && res != 'googlesyndication'){
				//alert('ping');
				//console.log("--->"+res);
			 elem.setAttribute("width",newWidth);
			 elem.setAttribute("height",newHeight);}
		 }
	 );
}
/* Common all pages JS Jai 12/21/2019 <*/