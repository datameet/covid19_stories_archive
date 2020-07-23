
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

var adslot0, adslot1, adslot2, adslot3, adslot4, adslot5, adslot6, mobile_adslot0, mobile_adslot1, adslot3, mobile_adslot5, mobile_adslot6, mobile_adslot7;
var adTargeting = adTargeting || [];

if($(window).width() > 728) {googletag.cmd.push(function() {
  adslot4 = googletag.defineSlot('/46138097/desktop_newsable_ros_masthead', [[970, 90], [970, 250], [728, 90]], 'desktop_newsable_ros_masthead').addService(googletag.pubads());
  adslot0 = googletag.defineSlot('/46138097/desktop_newsable_ros_top', [[300, 600], [300, 250]], 'desktop_newsable_ros_top').addService(googletag.pubads());
  adslot1 = googletag.defineSlot('/46138097/desktop_newsable_ros_medium', [[300, 600], [300, 250]], 'desktop_newsable_ros_medium').addService(googletag.pubads());
  adslot3 = googletag.defineSlot('/46138097/desktop_newsable_ros_bottom', [[300, 600], [300, 250]], 'desktop_newsable_ros_bottom').addService(googletag.pubads());
  adslot6 = googletag.defineSlot('/46138097/desktop_newsable_ros_native', [[640, 100], [728, 90]], 'desktop_newsable_ros_native').addService(googletag.pubads());
  adslot2 = googletag.defineSlot('/46138097/desktop_newsable_ros_bottom_masthead', [728, 90], 'desktop_newsable_ros_bottom_masthead').addService(googletag.pubads());
  adslot5 = googletag.defineSlot('/46138097/desktop_newsable_ros_oop', [1, 1], 'desktop_newsable_ros_oop').addService(googletag.pubads());
  googletag.pubads().set("page_url", "https://newsable.asianetnews.com");
  googletag.pubads().setTargeting('category', adTargeting);
  googletag.pubads().enableSingleRequest();
  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableLazyLoad({ fetchMarginPercent: 50,   renderMarginPercent: 50, mobileScaling: 2.0 });
  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices(); });
} else {
googletag.cmd.push(function() {
  mobile_adslot0 = googletag.defineSlot('/46138097/mobile_newsable_ros_top', [[300, 250], [320, 50], [336, 280], [320, 100]], 'mobile_newsable_ros_top').addService(googletag.pubads());
  mobile_adslot1 = googletag.defineSlot('/46138097/mobile_newsable_ros_medium', [[300, 250], [320, 480], [336, 280]], 'mobile_newsable_ros_medium').addService(googletag.pubads());
  mobile_adslot3 = googletag.defineSlot('/46138097/mobile_newsable_ros_bottom', [[336, 280], [300, 250]], 'mobile_newsable_ros_bottom').addService(googletag.pubads());
  mobile_adslot6 = googletag.defineSlot('/46138097/mobile_newsable_ros_native', [320, 50], 'mobile_newsable_ros_native').addService(googletag.pubads());
  mobile_adslot7 = googletag.defineSlot('/46138097/mobile_newsable_ros_sticky', [320, 50], 'mobile_newsable_ros_sticky').addService(googletag.pubads());
  mobile_adslot5 = googletag.defineSlot('/46138097/mobile_newsable_ros_oop', [1, 1], 'mobile_newsable_ros_oop').addService(googletag.pubads());
  googletag.pubads().set("page_url", "https://newsable.asianetnews.com");
  googletag.pubads().setTargeting('category', adTargeting);
  googletag.pubads().enableSingleRequest();
  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableLazyLoad({ fetchMarginPercent: 50,   renderMarginPercent: 50, mobileScaling: 2.0 });
  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices(); });
}
// amazon header-bid code
!function(a9,a,p,s,t,A,g){
  if(a[a9])return;
  function q(c,r){
    a[a9]._Q.push([c,r])
  }
  a[a9]={
    init:function(){
      q("i",arguments)
    },
    fetchBids:function(){
      q("f",arguments)
    },
    setDisplayBids:function(){},
    targetingKeys:function(){
      return[]
    },_Q:[]
  };
  A=p.createElement(s);
  A.async=!0;
  A.src=t;
  g=p.getElementsByTagName(s)[0];
  g.parentNode.insertBefore(A,g)
}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

apstag.init({
    pubID: '92fe4772-0187-4fa2-93a0-0e57d716a21f',
    adServer: 'googletag'
});

apstag.fetchBids({
    slots: [ {
        slotID: 'desktop_newsable_ros_masthead',
        slotName: '46138097/desktop_newsable_ros_masthead',
        sizes: [[970,90], [728,90]]
    },
{
        slotID: 'desktop_newsable_ros_top',
        slotName: '46138097/desktop_newsable_ros_top',
        sizes: [[300,250]]
    },
{
        slotID: 'desktop_newsable_ros_medium',
        slotName: '46138097/desktop_newsable_ros_medium',
        sizes: [[300,250]]
    },
{
        slotID: 'desktop_newsable_ros_bottom',
        slotName: '46138097/desktop_newsable_ros_bottom',
        sizes: [[300,250]]
    },

{        slotID: 'mobile_newsable_ros_top',
        slotName: '46138097/mobile_newsable_ros_top',
        sizes: [[336,280], [300,250]]
    },
{
        slotID: 'mobile_newsable_ros_medium',
        slotName: '46138097/mobile_newsable_ros_medium',
        sizes: [[336,280], [300,250]]
    },
{
        slotID: 'mobile_newsable_ros_bottom',
        slotName: '46138097/mobile_newsable_ros_bottom',
        sizes: [[336,280], [300,250]]
    },
{
        slotID: 'mobile_newsable_ros_sticky',
        slotName: '46138097/mobile_newsable_ros_sticky',
        sizes: [[320,50]]
    }],
    timeout: 1000
}, function(bids) {
    googletag.cmd.push(function(){
        apstag.setDisplayBids();
    });
});
(function() {
  var andbeyond = document.createElement("script");
  var useSSL = "https:" == document.location.protocol;
  andbeyond.src =
    (useSSL ? "https:" : "http:") +
    "//rtbcdn.andbeyond.media/prod-global-337625.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(andbeyond, node);
})();
