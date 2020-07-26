$(document).ready(function(){
	
	var relatedLoaded= false;	
	// var adRefreshCounter= new Array();
	
	// var setCityLocation=setTimeout(function(){
		// get_city_name_article();
	// },2000);
	
	var winioconfig  = window._io_config = window._io_config || {};
	var winioconfign = window._io_config["0.2.0"] = window._io_config["0.2.0"] || [];

	var firstStoryURL = $(".story-container:first").attr('data-url');
	var firstStoryID = $(".story-container:first").attr('data-article-id');
	var totalStory = [];
	var currentStoryUrl = firstStoryURL;
	var isbackScoll=false;
	var previousScroll = 0;
	$(document).scroll(function(){
		var currentScroll = $(this).scrollTop();
		var windowScrollTop=$(window).scrollTop();
		var winBottom = windowScrollTop + $(window).height();
		if(typeof cat ==='undefined'){
			var cat = '';
		}
		if(windowScrollTop > 200 && relatedLoaded==false){
			if(Array.isArray(related_Ids) && related_Ids.length){	//added by Umesh for related stories not available 
				//related_Ids = JSON.parse(related_Ids);
				$.each(related_Ids, function(rStoryNumber, rStoryId){
					get_related_article(rStoryId,rStoryNumber, cat);
									
				});		
				relatedLoaded= true;
				//$('#infinite-scroll').fadeIn(1000);
			}
						
		}
		//console.log(totalStory);
		var activeBottomTab=$( "body div#infinite-scroll" ).find( "li.act" );
		if(activeBottomTab.length > 0){
			var activeBottomTabStory=activeBottomTab.attr('data-id');
		}else{
			var activeBottomTabStory='';
		}

		if(relatedLoaded==true){
			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();
			
			$('.story-container').each(function () {
				
				var elementTop = $(this).offset().top;
				var elementBottom = elementTop + $(this).outerHeight();
				
				var storyId 		= $(this).attr('data-article-id');
				var storySrNo 		= $(this).attr('data-srno');
				var relatedStoryUrl = $(this).attr('data-url');
				var realtedStoryHeadline = $(this).attr('data-title');
				var dataioarticleurl = $(this).attr('data-io-article-url');
				var section 	= $(this).attr('data-section');
				var author 	= $(this).attr('data-author');
				var articleTotalwords = $(this).attr('data-totalwords');
				var articleDate = $(this).attr('data-creationdate');
                                
				var eachStoryTop	=	$(this).offset().top + 400;
				var distanceBetween 	= windowScrollTop - eachStoryTop;
				
				var dimension7Val = $(this).attr('data-ga7');
                if(dimension7Val === 'undefined'){
					dimension7Val = "News18 | unassigned | News18 English";	
				}

				//if(elementBottom > viewportTop && elementTop < viewportBottom && relatedStoryUrl != currentStoryUrl) {
				if(distanceBetween < 500 && distanceBetween > -500 && relatedStoryUrl!=currentStoryUrl){
					$(".bxslider li").removeClass('act');
					$(".bxslider li span").css('width','0px');
					$("#article_scroll_"+storyId).addClass('act');
					activeBottomTabStory=storyId;
					currentStoryUrl=relatedStoryUrl;
                                       
                    document.title = realtedStoryHeadline;
					history.replaceState({}, '', currentStoryUrl);
					
					// load and refresh the ad					
					/*if(adRefreshCounter.indexOf(storySrNo)==-1 && storySrNo!=1){
						adRefreshCounter[storySrNo]=storySrNo;
						//console.log('ads cat'+dfpCatName);
						// refresh_dfp_ad(dfpCatName,storySrNo);
					}*/
		                       
					if(site_ad_display=='yes'){
						// ga('set', {location: relatedStoryUrl, page: relatedStoryUrl});
						ga('set', {location: 'https://www.news18.com'+currentStoryUrl, page: currentStoryUrl});
						//ga("send", "pageview");
						ga('set', 'dimension7', dimension7Val);
						ga('send', 'pageview', {'dimension1':author});
						if (isbackScoll) {
							ga('send', 'event', 'Previous Story', 'Scroll Up '+storySrNo, 'https://www.news18.com'+currentStoryUrl);
						} else {
							ga('send', 'event', 'Next Story', 'Scroll Down '+storySrNo, 'https://www.news18.com'+currentStoryUrl);
						}
						
                        self.COMSCORE && COMSCORE.beacon({c1: "2", c2: "6683813"});
						pageview_candidate_comescore();
						var isexists = totalStory.indexOf(storyId);
						if(isexists=='-1'){
							if(!$("#ajax_story_container_"+storyId).hasClass( "iotrue" )){
								//getIOScript(dataioarticleurl, realtedStoryHeadline, author, section,'', articleTotalwords, articleDate);
							}
						}
					}
					totalStory.push(storyId); 
				}
			});
		}

		// Display progress
		if(activeBottomTabStory!=''){
		
			var activePageOffset=$("#ajax_story_container_"+activeBottomTabStory).offset().top - 100;
			var page_pos = windowScrollTop - activePageOffset;
			var page_height = $("#ajax_story_container_"+activeBottomTabStory).height();
			var page_scrollpercent = 100-((page_height-page_pos)/page_height)*100;
			//console.log("page per:"+page_scrollpercent+"=>active story id="+activeBottomTabStory);
			
			$("#article_scroll_"+activeBottomTabStory+" span").css('width',page_scrollpercent+"%");
					
			if (currentScroll < previousScroll) {
				isbackScoll=true;
			}else{ 
				 isbackScoll=false;
			}
			previousScroll = currentScroll;
			
		}
	});
});

var playWatchVideos = false;
// $(window).scroll(function() {
	// var ividFirstScroll = $('.alsowatch').offset().top - 100;
	// var topOffsetIvid = $(window).scrollTop();
	// var topIviddistance = topOffsetIvid - ividFirstScroll;	
	// var finalScrollEnd = ividFirstScroll + 650;
	// var holaPlayDivId = $('div.video-js').attr('id');	
    // var holaPlayerObj = videojs(holaPlayDivId);
	// if(topOffsetIvid>ividFirstScroll && topOffsetIvid<finalScrollEnd && playWatchVideos==false) {
		
		// holaPlayerObj.play();		
		// playWatchVideos=true;
	// }else if( topOffsetIvid<ividFirstScroll || topOffsetIvid>finalScrollEnd && playWatchVideos==true) {
		// holaPlayerObj.pause();
		// playWatchVideos=false;
	// }	
	
// });

function pageview_candidate_comescore(){
	$.ajax({
		url:'/page-view-cand.html',
		type:'GET',
		cache:false,	
		success:function(pv_candidate){
			console.log("pv candidate fired");
		},
		error:function(){
			console.log('Something went wrong..');
		}
	});	
}

function scrollToPage(pageno){
	var targetPageOffset=$('#ajax_story_container_'+pageno).offset();
	$('html, body').animate({scrollTop: $('#ajax_story_container_'+pageno).offset().top - 75}, 2000);
}
function get_related_article(rStoryId,rStoryNumber, cat){
	var nexturl='';
	if(rStoryNumber<=1){ 
		nexturl=related_Urls[rStoryNumber+1];
	}
	var jqxhr = $.ajax({
		//url: '/related-scrolled/article/'+rStoryId+'/'+rStoryNumber+'.html',
		url: '/news18_revamp/ajax/ajax_news18_article.php?story_id='+rStoryId+'&story_no='+rStoryNumber+'&next_url='+nexturl+'&debug=yes&cat='+cat,
		type: 'GET',
		cache:true,
		dataType : 'html',	
	})
	.done  (function(data, textStatus, jqXHR){ 
		$("#ajax_story_container_"+rStoryId).html(data);
		//window.refreshVideoPlayers();
		window.refreshPubstackPlayers();
		OBR.extern.researchWidget();
		var userCity=$("#location_info").text();
		//$("ul li strong.ajaxlocation").text(userCity);
	
	})
	.fail(function(jqXHR, textStatus, errorThrown){ 
		//console.log("Ajax request failed!");
		alert("Article request failed")
	})
	.always(function(jqXHROrData, textStatus, jqXHROrErrorThrown){
		//console.log("Request completed!");
	});
}

/* function refresh_dfp_ad(dfpCatName,storySrNo){
	storySrNo=parseInt(storySrNo) - 1;
	load_dfp_ad('News18/News18_'+dfpCatName+'/News18_'+dfpCatName+'_Internal/News18_'+dfpCatName+'_Internal_Scr'+storySrNo+'_300x600');
	load_dfp_ad('News18/News18_'+dfpCatName+'/News18_'+dfpCatName+'_Internal/News18_'+dfpCatName+'_Internal_Scr'+storySrNo+'_300x250_1');
	load_dfp_ad('News18/News18_'+dfpCatName+'/News18_'+dfpCatName+'_Internal/News18_'+dfpCatName+'_Internal_Scr'+storySrNo+'_300x250_2');
	load_dfp_ad('News18/News18_Ros/News18_ROS_728x90_Inarticle',storySrNo);
	console.log('News18/News18_'+dfpCatName+'/News18_'+dfpCatName+'_Internal/News18_'+dfpCatName+'_Internal_Scr'+storySrNo+'_300x600');
	console.log('News18/News18_'+dfpCatName+'/News18_'+dfpCatName+'_Internal/News18_'+dfpCatName+'_Internal_Scr'+storySrNo+'_300x250_1');
	console.log('News18/News18_'+dfpCatName+'/News18_'+dfpCatName+'_Internal/News18_'+dfpCatName+'_Internal_Scr'+storySrNo+'_300x250_2');
	console.log('News18/News18_Ros/News18_ROS_728x90_Inarticle');	
} */

/* function load_dfp_ad(adTag,divNumber){
	//console.log("DFP refresh :"+adTag);
	//alert(adTag);
	var adWidth='';
	var adHeight='';
	var adWidthHeight=get_ad_width_height_by_tag(adTag);
	if(adWidthHeight!=''){
		adWidth=parseInt(adWidthHeight[0]);
		adHeight=parseInt(adWidthHeight[1]);
	}
	
	if(adWidth=='' || adHeight==''){
		console.log("ad width height not found!");
		return false;
	}
	
	var adDivId = adTag.replace(/\//g,"_")
	adDivId=adDivId.toLowerCase();
	
	if(typeof divNumber!=='undefined'){
		var dynamicDivId=adDivId+"_"+divNumber;
		var newAdDivId=adDivId+"_"+divNumber+"_"+Math.floor(Date.now());
		$('[id*="'+dynamicDivId+'"]').attr('id',newAdDivId);
		console.log("DFP Dynamic Div:"+dynamicDivId+":"+newAdDivId);		
	}else{
		var newAdDivId=adDivId+"_"+Math.floor(Date.now());
		$('[id*="'+adDivId+'"]').attr('id',newAdDivId);
		console.log("DFP Normal div:"+adDivId+":"+newAdDivId);
	}

	googletag.cmd.push(function() {
		var slot = googletag.defineSlot('/1039154/'+adTag, [adWidth, adHeight], newAdDivId).addService(googletag.pubads());
		googletag.display(newAdDivId);
		googletag.pubads().refresh([slot]);
	});
} */

/* function get_ad_width_height_by_tag(adTag){
	
	var adTagArray = adTag.split('/');
	var adTagArrayCount=adTagArray.length;	
	
	var lastAdTagPart=adTagArray[adTagArrayCount - 1];
	var lastAdTagPartArray = lastAdTagPart.split('_');
	
	var adWidthHeight='';
	for(var a=0; a < lastAdTagPartArray.length; a++){
		if (lastAdTagPartArray[a].indexOf("x") >= 0){
			adWidthHeight=lastAdTagPartArray[a];
			break;
		}
	}
	var adWidthHeighArray='';
	if(adWidthHeight!=''){
		adWidthHeighArray = adWidthHeight.split('x');
	}
	return adWidthHeighArray;
}*/

// function get_city_name_article(){
	// $.ajax({
		// type:"GET",
		// url:"https://www.news18.com/get_geo_location.json",
		// dataType: "json",
		// success:function(response){						
			// var articleCityName = response.city;
			// $("#location_info").html(articleCityName);
		// },
		// error:function(){
			// console.log('Error in fetching city name for article.');
		// }
	// });	
// }

function getIOScript(actualPageUrlIO, title, authName, section, subsecton, totalwords, creationdate){
    if(section!=''){
		section = section.toUpperCase();
	}
	console.log(section);
	window._io_config["0.2.0"].push({
		page_url: actualPageUrlIO,
		page_url_canonical: actualPageUrlIO,
		page_title: title,
		page_type: "article",
		page_language: "en",
		article_authors: [authName],
		article_categories: [section],
		article_subcategories: [subsecton],
		article_type: "longread",
		article_word_count: totalwords,
		article_publication_date: creationdate
	});
}