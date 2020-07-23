jQuery(document).ready(function() {
	jQuery('.whatsapp-button').on("click", function(e) {
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var article = jQuery(this).attr("data-text");
		var weburl = jQuery(this).attr("data-link");
		var whats_app_message = encodeURIComponent(article)+" - "+encodeURIComponent(weburl);
		var whatsapp_url = "whatsapp://send?text="+whats_app_message;
		window.location.href= whatsapp_url;
		}else{
		 alert('you are not on mobile device.');
		}
	});
});