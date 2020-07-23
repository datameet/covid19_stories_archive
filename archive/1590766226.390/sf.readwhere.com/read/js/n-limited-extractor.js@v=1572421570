(function(){

var objappVersion = navigator.appVersion; 
var objAgent = navigator.userAgent; 
var objbrowserName = navigator.appName; 
var objfullVersion = ''+parseFloat(navigator.appVersion); 
var objBrMajorVersion = parseInt(navigator.appVersion,10); 
var objOffsetName,objOffsetVersion, ix; 

if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1) { 

	objbrowserName = "Chrome"; 
	objfullVersion = objAgent.substring(objOffsetVersion+7); 
} else if ((objOffsetVersion=objAgent.indexOf("MSIE"))!=-1) { 

	objbrowserName = "Microsoft Internet Explorer"; 
	objfullVersion = objAgent.substring(objOffsetVersion+5); 
}
else if ((objOffsetVersion=objAgent.indexOf("Firefox"))!=-1) { 

	objbrowserName = "Firefox"; 
} else if ((objOffsetVersion=objAgent.indexOf("Safari"))!=-1) { 

	objbrowserName = "Safari"; 
	objfullVersion = objAgent.substring(objOffsetVersion+7); 

	if ((objOffsetVersion=objAgent.indexOf("Version"))!=-1) {

		objfullVersion = objAgent.substring(objOffsetVersion+8); 
	}
} else if ( (objOffsetName=objAgent.lastIndexOf(' ')+1) < (objOffsetVersion=objAgent.lastIndexOf('/')) ) { // For other browser "name/version" is at the end of userAgent 

	objbrowserName = objAgent.substring(objOffsetName,objOffsetVersion); 
	objfullVersion = objAgent.substring(objOffsetVersion+1); 

	if (objbrowserName.toLowerCase()==objbrowserName.toUpperCase()) { 

		objbrowserName = navigator.appName; 
	} 
} 

// trimming the fullVersion string at semicolon/space if present 
if ((ix=objfullVersion.indexOf(";"))!=-1) {

	objfullVersion=objfullVersion.substring(0,ix); 
}

if ((ix=objfullVersion.indexOf(" "))!=-1) {

	objfullVersion=objfullVersion.substring(0,ix); 
}
	
objBrMajorVersion = parseInt(''+objfullVersion,10); 
if (isNaN(objBrMajorVersion)) { 

	objfullVersion = ''+parseFloat(navigator.appVersion); 
	objBrMajorVersion = parseInt(navigator.appVersion,10); 
}

var mobileAndTabletcheck = function() {
  var check = false;
  (function(a){
  	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) {

  		check = true;
  	}
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

var Extractor = function(){

	this.event = "vol_read";
	this.left_page_key = null;
	this.left_page_num = null;
	this.right_page_key = null;
	this.right_page_num = null;


	this.vol_id = null;
	this.title_id = null;
	this.publisher_id = null;
	this.vol_type = null;
	this.language = null;
	this.user_id = null;

	this.platform = null;
	this.browser_package = null;
	this.browser_version = null;
	this.user_agent = null;
	this.app_package = null;
	this.app_version = null;

	this.visited_pages = [];
	this.visit_track_ms =  10000;
	this.visit_timeout = null;
}

Extractor.prototype.getUserAgent = function(){

	return navigator.userAgent;
}

Extractor.prototype.getBrowserName = function(){

	return objbrowserName;
}

Extractor.prototype.getBrowserFullVersion = function(){

	return objfullVersion;
}

Extractor.prototype.getBrowserMajorVersion = function(){

	return objBrMajorVersion;
}

Extractor.prototype.getPlatform = function(){

	return (mobileAndTabletcheck ? 'mobile' : 'desktop') + 'web';
}

Extractor.prototype.init = function( evt, custom_data ){

	console.log("Init");
	this.vol_id = custom_data.vol_id;
	this.title_id = custom_data.title_id;
	this.publisher_id = custom_data.publisher_id
	this.vol_type = custom_data.vol_type;
	this.language = custom_data.language;
	this.user_id = custom_data.user_id;
}

Extractor.prototype.cleanPreviousPages = function(){

	clearTimeout(this.visit_timeout);
	this.left_page_key = null;
	this.left_page_num = null;
	this.right_page_key = null;
	this.right_page_num = null;
}

Extractor.prototype.leftPageChange = function(evt, custom_data){

	console.log("leftPageChange ", custom_data);
	if( this.left_page_key && this.left_page_key == custom_data.page_key ){

		console.log("Multiple job for left page");
		return;
	}

	this.cleanPreviousPages();

	this.left_page_key = custom_data.page_key;
	this.left_page_num = custom_data.page_num;

	if( this.visited_pages.indexOf(this.left_page_key) != -1 ){

		console.log("Page "+this.left_page_key+" already tracked");
		return;
	}

	this.visit_timeout = setTimeout(this.trackPageVisit.bind(this), this.visit_track_ms);
}

Extractor.prototype.rightPageChange = function(evt, custom_data){

	console.log("rightPageChange ", custom_data);
	if( this.right_page_key && this.right_page_key == custom_data.page_key ){

		console.log("Multiple job for right page");
		return;
	}

	this.right_page_key = custom_data.page_key;
	this.right_page_num = custom_data.page_num;

	if( this.visited_pages.indexOf(this.right_page_key) != -1 ){

		console.log("Page "+this.right_page_key+" already tracked");
		return;
	}
}

Extractor.prototype.trackPageVisit = function(){

	clearTimeout(this.visit_timeout);

	this.visited_pages.push(this.left_page_key);
	this.sendTrackJob(this.left_page_key, this.left_page_num);

	if( this.right_page_key ){

		this.visited_pages.push(this.right_page_key);
		this.sendTrackJob(this.right_page_key, this.right_page_num);
	}
}

Extractor.prototype.sendTrackJob = function(page_key, page_num){

	console.log("sendTrackJob ", page_key, page_num);
	$.post('https://infinitetracker.readwhere.com/ntracker/track/dotrack',{
		event: this.event,
		page_key: page_key,
		page_no: page_num,
		vol_id: this.vol_id,
		title_id: this.title_id,
		pub_id: this.publisher_id,
		vol_type: this.vol_type,
		language: this.language,
		user_id: this.user_id,
		platform: this.getPlatform(),
		app_package: '',
		app_version: '',
		browser_package: this.getBrowserName(),
		browser_version: this.getBrowserFullVersion(),
		institutional_reference: ""
	}, function(response){

	})
}

var objExtractor = new Extractor();
$(window).bind( 'n-limited-init', objExtractor.init.bind(objExtractor) );
$(window).bind( 'n-limited-left-page-change', objExtractor.leftPageChange.bind(objExtractor) );
$(window).bind( 'n-limited-right-page-change', objExtractor.rightPageChange.bind(objExtractor) );
})()