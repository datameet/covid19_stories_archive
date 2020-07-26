// pubmatic code
var PWT = {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
PWT.jsLoaded = function() {
  (function() {
    var gads = document.createElement('script');
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
  })();
};
(function() {
  var purl = window.location.href;
  var url = '//ads.pubmatic.com/AdServer/js/pwt/156926/817';
  var profileVersionId = '';
  if (purl.indexOf('pwtv=') > 0) {
    var regexp = /pwtv=(.*?)(&|$)/g;
    var matches = regexp.exec(purl);
    if (matches.length >= 2 && matches[1].length > 0) {
      profileVersionId = '/' + matches[1];
    }
  }
  var wtads = document.createElement('script');
  wtads.async = true;
  wtads.type = 'text/javascript';
  wtads.src = url + profileVersionId + '/pwt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(wtads, node);
})();

//dfp code
var adslot0, adslot1, adslot2, adslot3, adslot4, adslot5, adslot6, mobile_adslot0, mobile_adslot1, mobile_adslot3, mobile_adslot5, mobile_adslot6, mobile_adslot7;
var adTargeting = adTargeting || [];
if($(window).width() > 728) {
    googletag.cmd.push(function() {
        adslot4 = googletag.defineSlot('/46138097/desktop_hindi_ros_pg_masthead', [[970, 90], [728, 90]], 'desktop_hindi_ros_masthead_article').addService(googletag.pubads());
        adslot0 = googletag.defineSlot('/46138097/desktop_hindi_ros_pg_top', [300, 250], 'desktop_hindi_ros_top_article').addService(googletag.pubads());
        adslot1 = googletag.defineSlot('/46138097/desktop_hindi_ros_pg_medium', [300, 250], 'desktop_hindi_ros_medium_article').addService(googletag.pubads());
        adslot3 = googletag.defineSlot('/46138097/desktop_hindi_ros_pg_bottom', [300, 250], 'desktop_hindi_ros_bottom_article').addService(googletag.pubads());
        adslot5 = googletag.defineSlot('/46138097/desktop_hindi_ros_pg_oop', [1, 1], 'desktop_hindi_ros_oop_article').addService(googletag.pubads());
        googletag.pubads().set("page_url", "https://hindi.asianetnews.com");
        googletag.pubads().setTargeting('category', adTargeting);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        googletag.pubads().enableLazyLoad({ fetchMarginPercent: 50,   renderMarginPercent: 50, mobileScaling: 2.0 });
        googletag.pubads().collapseEmptyDivs(); googletag.enableServices();
    });
} else {
    googletag.cmd.push(function() {
        mobile_adslot0 = googletag.defineSlot('/46138097/mobile_hindi_ros_pg_top', [[336, 280], [320, 50], [300, 250], [320, 100]], 'mobile_hindi_ros_top_article').addService(googletag.pubads());
        mobile_adslot1 = googletag.defineSlot('/46138097/mobile_hindi_ros_pg_medium', [[336, 280], [300, 250]], 'mobile_hindi_ros_medium_article').addService(googletag.pubads());
        mobile_adslot3 = googletag.defineSlot('/46138097/mobile_hindi_ros_pg_bottom', [[336, 280], [300, 250]], 'mobile_hindi_ros_bottom_article').addService(googletag.pubads());
        mobile_adslot7 = googletag.defineSlot('/46138097/mobile_hindi_ros_pg_sticky', [320, 50], 'mobile_hindi_ros_sticky_article').addService(googletag.pubads());
        mobile_adslot5 = googletag.defineSlot('/46138097/mobile_hindi_ros_pg_oop', [1, 1], 'mobile_hindi_ros_oop_article').addService(googletag.pubads());
        googletag.pubads().set("page_url", "https://hindi.asianetnews.com");
        googletag.pubads().setTargeting('category', adTargeting);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        googletag.pubads().enableLazyLoad({ fetchMarginPercent: 50,   renderMarginPercent: 50, mobileScaling: 2.0 });
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });
}
