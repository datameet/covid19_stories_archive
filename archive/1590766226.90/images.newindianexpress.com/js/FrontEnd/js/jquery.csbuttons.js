// VERSION: 1.0 LAST UPDATE: 18.12.2014
/* 
 *           .       .   .               
 *          |       |   |               
 * ,-. ,-. |-. . . |-  |-  ,-. ;-. ,-. 
 * |   `-. | | | | |   |   | | | | `-. 
 * `-' `-' `-' `-` `-' `-' `-' ' ' `-' 
 *
 * Social customs counter buttons (Facebook, Twitter, Google+, LinkedIn, Pinterest)
 * Made by Mathieu ORLANDO, contact@acrow.fr, Acrow, FRANCE
 * Website: http://csbuttons.acrow.fr/
 */
(function($)
{
	$.fn.cSButtons = function(options)
	{
		// Default params
		var defaults = 
		{
			"url" 	: null,
			"type" 	: 'facebook',
			"txt"	: null,
			"via"	: null,
			"count"	: false,
			"count_position" : 'right',
			"apikey": null,
			"media" : null,
			"lang"	: null,
			"total"	: null,
			"bitly_link" : null,
		}

		var parametres 	= $.extend(defaults, options);
		var totalShare 	= 0;
		var nbButtons 	= this.length;
		var i 			= 0;
		var jg			= 0;

		return this.each(function()
		{	
			i++;
			// If option on the link attributs
			var url 		= ($(this).attr('data-url') != undefined && $(this).attr('data-url') != '') ?  $(this).attr('data-url') : parametres.url;
			var type 		= ($(this).attr('data-type') != undefined && $(this).attr('data-type') != '') ?  $(this).attr('data-type') : parametres.type;
			var txt 		= ($(this).attr('data-txt') != undefined && $(this).attr('data-txt') != '') ?  $(this).attr('data-txt') : parametres.txt;
			var via 		= ($(this).attr('data-via') != undefined && $(this).attr('data-via') != '') ?  $(this).attr('data-via') : parametres.via;
			var count 		= ($(this).attr('data-count') != undefined && $(this).attr('data-count') != '') ?  $(this).attr('data-count') : parametres.count;
			var cPosition 	= ($(this).attr('data-count-position') != undefined && $(this).attr('data-count-position') != '') ?  $(this).attr('data-count-position') : parametres.count_position;
			var apikey 		= ($(this).attr('data-apikey') != undefined && $(this).attr('data-apikey') != '') ?  $(this).attr('data-apikey') : parametres.apikey;
			var media 		= ($(this).attr('data-media') != undefined && $(this).attr('data-media') != '') ?  $(this).attr('data-media') : parametres.media;
			var lang 		= ($(this).attr('data-lang') != undefined && $(this).attr('data-lang') != '') ?  $(this).attr('data-lang') : parametres.lang;
			var bitly_url 		= ($(this).attr('data-bitly') != undefined && $(this).attr('data-bitly') != '') ?  $(this).attr('data-bitly') : parametres.bitly_link;
			var popupWidth 	= 0;
			var popupHeight = 0;
			var shareUrl 	= '';
			var shareFrom   = '';

			// Url use to share
			url				= (url != null) ? url : document.URL;
			$URL 			= url;
            bitly_url       = (bitly_url != null && bitly_url.trim()!='' && bitly_url != "undefined") ? bitly_url : document.URL;
			console.log(bitly_url);
			// If count total share
			if(count){
				if(cPosition == 'left'){
					$(this).prepend('<span class="csbuttons-count" />');
				}
				else
				{
					($('span.csbuttons-count', $(this)).length==0)? $(this).append('<span class="csbuttons-count" />'):" ";
				}
			}

			switch(type)
			{
				case 'twitter': // Twitter share
					var twitter = $(this);
					popupWidth 	= 550;
					popupHeight = 420;
					shareUrl 	= (txt != null) ? 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(bitly_url) + '&text=' + encodeURIComponent(txt) + '&url=' + encodeURIComponent(bitly_url) : 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(bitly_url) + '&url=' + encodeURIComponent(bitly_url);
					shareUrl	= (via != null) ? shareUrl + '&via=' + via : shareUrl;
					shareFrom   = 'twitter';

					if(count)
					{
						$('span.csbuttons-count', twitter).text(0);
						$.getJSON('http://cdn.api.twitter.com/1/urls/count.json?url=' + $URL + '&callback=?', function( twitdata ) {
							if (twitdata.count > 999 && twitdata.count <= 999999) {
								tweet_count = parseFloat(twitdata.count / 1000).toFixed(1)+'K';
							} else if (twitdata.count > 999999) {
							   tweet_count = parseFloat(twitdata.count / 1000000).toFixed(1)+'M';
							} else {
								tweet_count = twitdata.count;
							}
							$('span.csbuttons-count', twitter).text(tweet_count);
							totalShare += (isNaN(parseInt(twitdata.count))) ? 0 : parseInt(twitdata.count);
							if(parametres.total != null && i == nbButtons)
								$(parametres.total).text(totalShare);
						});
					}		
				break;
				case 'google': // Google + share
					var google = $(this);
					jg++;

					popupWidth 	= 600;
					popupHeight = 600;
					shareUrl 	= 'https://plus.google.com/share?url=' + url;
					shareUrl 	= (lang != null) ? shareUrl + '&hl=' + lang : shareUrl;
					shareFrom   = 'google';
					
					if(count)
					{
						$('span.csbuttons-count', google).text(0);
						if(apikey != null)
						{
							$.post('https://clients6.google.com/rpc?key=' + apikey,  
							{ 
								"method":"pos.plusones.get",
								"id":"p",
								"params":{
									"nolog":true,
									"id": $URL,
									"source":"widget",
									"userId":"@viewer",
									"groupId":"@self"
								},
								"jsonrpc":"2.0",
								"key":"p",
								"apiVersion":"v1"
							}, 
							function(gpdata){
								$('span.csbuttons-count', google).text(gpdata.result.metadata.globalCounts.count);
							totalShare += (isNaN(parseInt(gpdata.result.metadata.globalCounts.count))) ? 0 : parseInt(gpdata.result.metadata.globalCounts.count);
								if(parametres.total != null && i == nbButtons)
									$(parametres.total).text(totalShare);
							});
						}
						else // Alternative yandex
						{
							window['gplus'+jg] = google;
							if (!window.services) window.services = {};
							window.services.gplus = {
								cb: function(number) {
									window['gplusnb'+jg] = (number == '') ? 0 : number;
								}
							};

							$.getJSON( 'http://share.yandex.ru/gpp.xml?url=' + $URL + '&callback=?', function(gshare_count){
								var gshare = (isNaN(parseInt(window['gplusnb'+jg]))) ? 0 : parseInt(window['gplusnb'+jg]);
								var gplus_count = parseInt(gshare_count);
								if (gplus_count > 999 && gplus_count <= 999999) {
								google_count = parseFloat(gplus_count / 1000).toFixed(1)+'K';
							} else if (gplus_count > 999999) {
							   google_count = parseFloat(gplus_count / 1000000).toFixed(1)+'M';
							} else {
								google_count = gplus_count;
							}
								$('span.csbuttons-count', google).text(google_count);
								totalShare += (isNaN(parseInt(window['gplusnb'+jg]))) ? 0 : parseInt(window['gplusnb'+jg]);
								if(parametres.total != null && i == nbButtons)
									$(parametres.total).text(totalShare);
							});
						}
					}
				break;
				case 'linkedin' : // Linkedin share
					var linkedin 	= $(this);
					popupWidth 	= 600;
					popupHeight = 213;
					shareUrl 	= 'https://www.linkedin.com/cws/share?url=' + url;
					shareFrom   = 'linkedin';

					if(count)
					{
						$('span.csbuttons-count', linkedin).text(0);
						$.getJSON('http://www.linkedin.com/countserv/count/share?url=' + $URL + '&callback=?', function( indata ) {
							$('span.csbuttons-count', linkedin).text(indata.count);
							totalShare += (isNaN(parseInt(indata.count))) ? 0 : parseInt(indata.count);
							if(parametres.total != null && i == nbButtons)
								$(parametres.total).text(totalShare);
						});
					}
				break;
				case 'pinterest': // Pinterest share
					var pinterest = $(this);
					popupWidth 	= 1000;
					popupHeight = 617;
					shareUrl	= 'http://www.pinterest.com/pin/create/button/?url=' + url;
					shareUrl 	= (media != null) ? shareUrl + '&media=' + media : shareUrl;
					shareUrl 	= (txt != null) ? shareUrl + '&description=' + txt : shareUrl;
					shareFrom   = 'pinterest';

					if(count)
					{
						$('span.csbuttons-count', pinterest).text(0);
						$.getJSON('https://api.pinterest.com/v1/urls/count.json?url=' + $URL + '&callback=?', function( ptrdata ) {
							$('span.csbuttons-count', pinterest).text(ptrdata.count);
							totalShare += (isNaN(parseInt(ptrdata.count))) ? 0 : parseInt(ptrdata.count);
							if(parametres.total != null && i == nbButtons)
								$(parametres.total).text(totalShare);
						})
					}
				break;
				default: // Default Facebook share
					var facebook 	= $(this);
					popupWidth 	= 670;
					popupHeight = 340;
					shareUrl	= 'https://www.facebook.com/sharer/sharer.php?u=' + url;
					shareFrom   = 'facebook';

					if(count)
					{
						$('span.csbuttons-count', facebook).text(0);
						$.getJSON('http://graph.facebook.com/?id=' + $URL, function( fbdata ) {
							if (fbdata.share.share_count > 999 && fbdata.share.share_count <= 999999) {
								fb_count = parseFloat(fbdata.share.share_count / 1000).toFixed(1)+'K';
							} else if (fbdata.share.share_count > 999999) {
							   fb_count = parseFloat(fbdata.share.share_count / 1000000).toFixed(1)+'M';
							} else {
								fb_count = fbdata.share.share_count;
							}
							$('span.csbuttons-count', facebook).text(fb_count);
							
							totalShare += (isNaN(parseInt(fbdata.share.share_count))) ? 0 : parseInt(fbdata.share.share_count);
							if(parametres.total != null && i == nbButtons)
								$(parametres.total).text(totalShare);
						});
					}
				break;
			}

			// Click to Action Open Popup Share 
			$(this).on('click tap', function()
			{
				// Center popup to the screen
				var left 	= (screen.width/2)-(popupWidth/2);
				var top 	= (screen.height/2)-(popupHeight/2);
				if(shareFrom!="twitter"){
					popupWindow = window.open(shareUrl,'popUpWindow','height=' + popupHeight + ',width=' + popupWidth + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes');
				}else{
					 popupWindow = window.open("",'popUpWindow','height=' + popupHeight + ',width=' + popupWidth + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes');
					var short_url = get_shorten_url(popupWindow, txt, popupHeight, popupWidth, left, top, via);
			  }
				
				/*var popupTick = setInterval(function() {
				  if (popupWindow.closed) {
					clearInterval(popupTick);
					console.log('window closed!');
					if(shareFrom=="facebook"){
					facebook_count($URL);
					}else if(shareFrom=="google"){
					gplus_count($URL);
					}
				  }
				}, 500);*/
			});
		});
	};
})(jQuery);
 function get_shorten_url(popupWindow, txt, popupHeight, popupWidth, left, top, via){
	$.ajax({
			url			: base_url+'user/commonwidget/get_shorten_url',
			method		: 'post',
			data		: {'article_url'         : content_url },
			dataType    : 'json',
			success		: function(result){
		    short_url   = (result.id != "") ? result.id : content_url.split('?')[0];
			shareUrl 	= (txt != null) ? 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(short_url) + '&text=' + encodeURIComponent(txt) + '&url=' + encodeURIComponent(short_url) : 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(short_url) + '&url=' + encodeURIComponent(short_url);
			shareUrl	= (via != null) ? shareUrl + '&via=' + via : shareUrl;
			popupWindow.location = shareUrl;
		  },
		  });
	//return short_url;
}
function facebook_count($URL){
$.getJSON('http://graph.facebook.com/?id=' + $URL, function( fbdata ) {
	if (fbdata.share.share_count > 999 && fbdata.share.share_count <= 999999) {
		fb_count = parseFloat(fbdata.share.share_count / 1000).toFixed(1)+'K';
	} else if (fbdata.share.share_count > 999999) {
	   fb_count = parseFloat(fbdata.share.share_count / 1000000).toFixed(1)+'M';
	} else {
		fb_count = fbdata.share.share_count;
	}
	$('span.csbuttons-count:eq(1)').text(fb_count);
});
}
function gplus_count($URL){
$.getJSON( 'http://share.yandex.ru/gpp.xml?url=' + $URL + '&callback=?', function(gshare_count){
	var gplus_count = parseInt(gshare_count);
	if (gplus_count > 999 && gplus_count <= 999999) {
	google_count = parseFloat(gplus_count / 1000).toFixed(1)+'K';
} else if (gplus_count > 999999) {
   google_count = parseFloat(gplus_count / 1000000).toFixed(1)+'M';
} else {
	google_count = gplus_count;
}
	$('span.csbuttons-count:eq(2)').text(google_count);
});
}