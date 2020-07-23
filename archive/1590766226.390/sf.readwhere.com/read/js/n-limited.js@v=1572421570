var nLimitedEvents = {
	'authReadCheck'			: 'authReadCheckEvent',
	'authReadCheckComplete'	: 'authReadCheckCompleteEvent'
};

(function(){

	function nLimited(){
		this.volume_id = null;
		this.user_data = null;
	}

	nLimited.prototype.checkAuth = function(e, custom_data){

		var url = DEConfig.rwBaseHttps+'read/user/authread/'+custom_data[0]+'/'+custom_data[1]+'/'+custom_data[2]+'/'+custom_data[3];
		if(custom_data[4]) {
			var url = DEConfig.rwBaseHttps+'read/user/pauthread/'+custom_data[0]+'/'+custom_data[1]+'/'+custom_data[2]+'/'+custom_data[3];
		}
		
		$.getJSON(url+'?callback=?', function(response){

			$(window).trigger(nLimitedEvents.authReadCheckComplete, [response])
		})
	}

	var obj = new nLimited();

	$(window).bind(nLimitedEvents.authReadCheck, obj.checkAuth);
})();