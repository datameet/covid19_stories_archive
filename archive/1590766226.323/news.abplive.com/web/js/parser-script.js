//Parser Buttons
jQuery(document).ready(function ($) {
	//twitter
	if($(".tw_filter_info").length){
		var all = $(".tw_filter_info").map(function() {
				var ins_url = $(this).attr('data-url');
				$(this).append('<blockquote class="twitter-tweet"><a href="'+ins_url+'"></a></blockquote>');
		}).get();
	}
  //instagram
	if($(".insta_filter_info").length){
		var all = $(".insta_filter_info").map(function() {
				var ins_url = $(this).attr('data-url');
				$(this).append('<blockquote class="instagram-media" data-instgrm-permalink="'+ins_url+'" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>');
				window.instgrm.Embeds.process();
		}).get();
	}
  //youtube
	if($(".yt_filter_info").length){
		var all = $(".yt_filter_info").map(function() {
				var ins_url = $(this).attr('data-url');
				var videoid = ins_url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
				if(videoid != null) {
					var htm = '<iframe title="YouTube video player" class="youtube-player" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/'+videoid[1]+'" frameborder="0" allowFullScreen></iframe>';
				  $(this).html(htm);
				} else { 
						console.log("The youtube url is not valid.");
				}
		}).get();
	}
  //facebook
	if($(".fb_filter_info").length){
		var all = $(".fb_filter_info").map(function() {
				var ins_url = $(this).attr('data-url');
					$(this).append('<div class="fb-post" data-href="'+ins_url+'"></div>');
	
		}).get();
	}
});