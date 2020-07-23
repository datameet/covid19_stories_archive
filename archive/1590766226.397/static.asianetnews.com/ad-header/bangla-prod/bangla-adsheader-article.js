
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

// dfp code

var adslot0, adslot1, adslot2, adslot3, adslot4, adslot5, adslot6, mobile_adslot0, mobile_adslot1, mobile_adslot3, mobile_adslot5, mobile_adslot6, mobile_adslot7;
var adTargeting = adTargeting || [];
if($(window).width() > 728) {
    googletag.cmd.push(function() {
        adslot4 = googletag.defineSlot('/46138097/desktop_bengali_ros_masthead', [[970, 90], [728, 90]], 'desktop_bengali_article_masthead').addService(googletag.pubads());
        adslot0 = googletag.defineSlot('/46138097/desktop_bengali_ros_top', [300, 250], 'desktop_bengali_article_top').addService(googletag.pubads());
        adslot1 = googletag.defineSlot('/46138097/desktop_bengali_ros_medium', [300, 250], 'desktop_bengali_article_medium').addService(googletag.pubads());
        adslot3 = googletag.defineSlot('/46138097/desktop_bengali_ros_bottom', [300, 250], 'desktop_bengali_article_bottom').addService(googletag.pubads());
        adslot6 = googletag.defineSlot('/46138097/desktop_bengali_ros_native', [[728, 90], [640, 100]], 'desktop_bengali_article_native').addService(googletag.pubads());
        // adslot2 = googletag.defineSlot('/46138097/desktop_bengali_ros_bottom_masthead', [728, 90], 'desktop_bengali_article_bottom_masthead').addService(googletag.pubads());
        adslot5 = googletag.defineSlot('/46138097/desktop_bengali_ros_oop', [1, 1], 'desktop_bengali_article_oop').addService(googletag.pubads());
        googletag.pubads().set('page_url', 'https://bangla.asianetnews.com');
        googletag.pubads().setTargeting('category', adTargeting);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        googletag.pubads().enableLazyLoad({ fetchMarginPercent: 50, renderMarginPercent: 50, mobileScaling: 2.0 });
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });
} else {
    googletag.cmd.push(function() {
        mobile_adslot0 = googletag.defineSlot('/46138097/mobile_bengali_ros_top', [[336, 280], [320, 50], [300, 250], [320, 100]], 'mobile_bengali_article_top').addService(googletag.pubads());
        mobile_adslot1 = googletag.defineSlot('/46138097/mobile_bengali_ros_medium', [[336, 280], [300, 250]], 'mobile_bengali_article_medium').addService(googletag.pubads());
        mobile_adslot3 = googletag.defineSlot('/46138097/mobile_bengali_ros_bottom', [[336, 280], [300, 250]], 'mobile_bengali_article_bottom').addService(googletag.pubads());
        mobile_adslot6 = googletag.defineSlot('/46138097/mobile_bengali_ros_native', [320, 50], 'mobile_bengali_article_native').addService(googletag.pubads());
        mobile_adslot7 = googletag.defineSlot('/46138097/mobile_bengali_ros_sticky', [320, 50], 'mobile_bengali_article_sticky').addService(googletag.pubads());
        mobile_adslot5 = googletag.defineSlot('/46138097/mobile_bengali_ros_oop', [1, 1], 'mobile_bengali_article_oop').addService(googletag.pubads());
        googletag.pubads().set('page_url', 'https://bangla.asianetnews.com');
        googletag.pubads().setTargeting('category', adTargeting);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        googletag.pubads().enableLazyLoad({ fetchMarginPercent: 50, renderMarginPercent: 50, mobileScaling: 2.0 });
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });
}
(function() {
  var andbeyond = document.createElement("script");
  var useSSL = "https:" == document.location.protocol;
  andbeyond.src =
    (useSSL ? "https:" : "http:") +
    "//rtbcdn.andbeyond.media/prod-global-337625.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(andbeyond, node);
})();
