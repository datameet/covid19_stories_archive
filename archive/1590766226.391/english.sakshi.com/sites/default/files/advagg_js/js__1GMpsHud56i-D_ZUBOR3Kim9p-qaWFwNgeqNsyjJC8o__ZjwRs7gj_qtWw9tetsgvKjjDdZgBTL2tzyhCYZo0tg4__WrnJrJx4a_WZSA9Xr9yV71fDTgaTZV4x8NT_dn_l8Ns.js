/*! jssocials - v1.5.0 - 2017-04-30
* http://js-socials.com
* Copyright (c) 2017 Artem Tabalin; Licensed MIT */
!function(a,b,c){function d(a,c){var d=b(a);d.data(f,this),this._$element=d,this.shares=[],this._init(c),this._render()}var e="JSSocials",f=e,g=function(a,c){return b.isFunction(a)?a.apply(c,b.makeArray(arguments).slice(2)):a},h=/(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,i=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,j={G:1e9,M:1e6,K:1e3},k={};d.prototype={url:"",text:"",shareIn:"blank",showLabel:function(a){return this.showCount===!1?a>this.smallScreenWidth:a>=this.largeScreenWidth},showCount:function(a){return a<=this.smallScreenWidth?"inside":!0},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(a){this._initDefaults(),b.extend(this,a),this._initShares(),this._attachWindowResizeCallback()},_initDefaults:function(){this.url=a.location.href,this.text=b.trim(b("meta[name=description]").attr("content")||b("title").text())},_initShares:function(){this.shares=b.map(this.shares,b.proxy(function(a){"string"==typeof a&&(a={share:a});var c=a.share&&k[a.share];if(!c&&!a.renderer)throw Error("Share '"+a.share+"' is not found");return b.extend({url:this.url,text:this.text},c,a)},this))},_attachWindowResizeCallback:function(){b(a).on("resize",b.proxy(this._windowResizeHandler,this))},_detachWindowResizeCallback:function(){b(a).off("resize",this._windowResizeHandler)},_windowResizeHandler:function(){(b.isFunction(this.showLabel)||b.isFunction(this.showCount))&&(a.clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(b.proxy(this.refresh,this),this.resizeTimeout))},_render:function(){this._clear(),this._defineOptionsByScreen(),this._$element.addClass(this.elementClass),this._$shares=b("<div>").addClass(this.sharesClass).appendTo(this._$element),this._renderShares()},_defineOptionsByScreen:function(){this._screenWidth=b(a).width(),this._showLabel=g(this.showLabel,this,this._screenWidth),this._showCount=g(this.showCount,this,this._screenWidth)},_renderShares:function(){b.each(this.shares,b.proxy(function(a,b){this._renderShare(b)},this))},_renderShare:function(a){var c;c=b.isFunction(a.renderer)?b(a.renderer()):this._createShare(a),c.addClass(this.shareClass).addClass(a.share?"jssocials-share-"+a.share:"").addClass(a.css).appendTo(this._$shares)},_createShare:function(a){var c=b("<div>"),d=this._createShareLink(a).appendTo(c);if(this._showCount){var e="inside"===this._showCount,f=e?d:b("<div>").addClass(this.shareCountBoxClass).appendTo(c);f.addClass(e?this.shareLinkCountClass:this.shareCountBoxClass),this._renderShareCount(a,f)}return c},_createShareLink:function(a){var c=this._getShareStrategy(a),d=c.call(a,{shareUrl:this._getShareUrl(a)});return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)),this._showLabel&&d.append(this._createShareLabel(a)),b.each(this.on||{},function(c,e){b.isFunction(e)&&d.on(c,b.proxy(e,a))}),d},_getShareStrategy:function(a){var b=m[a.shareIn||this.shareIn];if(!b)throw Error("Share strategy '"+this.shareIn+"' not found");return b},_getShareUrl:function(a){var b=g(a.shareUrl,a);return this._formatShareUrl(b,a)},_createShareLogo:function(a){var c=a.logo,d=h.test(c)?b("<img>").attr("src",a.logo):b("<i>").addClass(c);return d.addClass(this.shareLogoClass),d},_createShareLabel:function(a){return b("<span>").addClass(this.shareLabelClass).text(a.label)},_renderShareCount:function(a,c){var d=b("<span>").addClass(this.shareCountClass);c.addClass(this.shareZeroCountClass).append(d),this._loadCount(a).done(b.proxy(function(a){a&&(c.removeClass(this.shareZeroCountClass),d.text(a))},this))},_loadCount:function(a){var c=b.Deferred(),d=this._getCountUrl(a);if(!d)return c.resolve(0).promise();var e=b.proxy(function(b){c.resolve(this._getCountValue(b,a))},this);return b.getJSON(d).done(e).fail(function(){b.get(d).done(e).fail(function(){c.resolve(0)})}),c.promise()},_getCountUrl:function(a){var b=g(a.countUrl,a);return this._formatShareUrl(b,a)},_getCountValue:function(a,c){var d=(b.isFunction(c.getCount)?c.getCount(a):a)||0;return"string"==typeof d?d:this._formatNumber(d)},_formatNumber:function(a){return b.each(j,function(b,c){return a>=c?(a=parseFloat((a/c).toFixed(2))+b,!1):void 0}),a},_formatShareUrl:function(b,c){return b.replace(i,function(b,d,e){var f=c[e]||"";return f?(d||"")+a.encodeURIComponent(f):""})},_clear:function(){a.clearTimeout(this._resizeTimer),this._$element.empty()},_passOptionToShares:function(a,c){var d=this.shares;b.each(["url","text"],function(e,f){f===a&&b.each(d,function(b,d){d[a]=c})})},_normalizeShare:function(a){return b.isNumeric(a)?this.shares[a]:"string"==typeof a?b.grep(this.shares,function(b){return b.share===a})[0]:a},refresh:function(){this._render()},destroy:function(){this._clear(),this._detachWindowResizeCallback(),this._$element.removeClass(this.elementClass).removeData(f)},option:function(a,b){return 1===arguments.length?this[a]:(this[a]=b,this._passOptionToShares(a,b),void this.refresh())},shareOption:function(a,b,c){return a=this._normalizeShare(a),2===arguments.length?a[b]:(a[b]=c,void this.refresh())}},b.fn.jsSocials=function(a){var e=b.makeArray(arguments),g=e.slice(1),h=this;return this.each(function(){var e,i=b(this),j=i.data(f);if(j)if("string"==typeof a){if(e=j[a].apply(j,g),e!==c&&e!==j)return h=e,!1}else j._detachWindowResizeCallback(),j._init(a),j._render();else new d(i,a)}),h};var l=function(a){var c;b.isPlainObject(a)?c=d.prototype:(c=k[a],a=arguments[1]||{}),b.extend(c,a)},m={popup:function(c){return b("<a>").attr("href","#").on("click",function(){return a.open(c.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"),!1})},blank:function(a){return b("<a>").attr({target:"_blank",href:a.shareUrl})},self:function(a){return b("<a>").attr({target:"_self",href:a.shareUrl})}};a.jsSocials={Socials:d,shares:k,shareStrategies:m,setDefaults:l}}(window,jQuery),function(a,b,c){b.extend(c.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"https://graph.facebook.com/?id={url}",getCount:function(a){return a.share&&a.share.share_count||0}},vkontakte:{label:"Like",logo:"fa fa-vk",shareUrl:"https://vk.com/share.php?url={url}&title={title}&description={text}",countUrl:"https://vk.com/share.php?act=count&index=1&url={url}",getCount:function(a){return parseInt(a.slice(15,-2).split(", ")[1])}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:""},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(a){return a.count}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(a){return a.count}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(a){return a.result&&a.result.views}},telegram:{label:"Telegram",logo:"fa fa-telegram",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""},viber:{label:"Viber",logo:"fa fa-volume-control-phone",shareUrl:"viber://forward?text={url} {text}",countUrl:"",shareIn:"self"},pocket:{label:"Pocket",logo:"fa fa-get-pocket",shareUrl:"https://getpocket.com/save?url={url}&title={title}",countUrl:""},messenger:{label:"Share",logo:"fa fa-commenting",shareUrl:"fb-messenger://share?link={url}",countUrl:"",shareIn:"self"},rss:{label:"RSS",logo:"fa fa-rss",shareUrl:"/feeds/",countUrl:"",shareIn:"blank"}})}(window,jQuery,window.jsSocials);
;/*})'"*/
;/*})'"*/
(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);

;/*})'"*/
;/*})'"*/
/*
* Based on the work of
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jcaption-a-jquery-plugin-for-simple-image-captions
*/
Drupal.behaviors.jcaption = {
  attach: function(context, settings) {
      (function($) {
      
      var captionSelectors = Drupal.settings.jcaption.jcaption_selectors;
      
    	$.fn.jcaption = function(settings) {
    		settings = $.extend({
    			wrapperElement: 'span',
    			wrapperClass: 'caption',
    			captionElement: 'p',
    			imageAttr: Drupal.settings.jcaption.jcaption_alt_title,
    			requireText: Drupal.settings.jcaption.jcaption_requireText,
    			copyStyle: Drupal.settings.jcaption.jcaption_copyStyle,
    			removeStyle: Drupal.settings.jcaption.jcaption_removeStyle,
    			removeClass: Drupal.settings.jcaption.jcaption_removeClass,
    			removeAlign: Drupal.settings.jcaption.jcaption_removeAlign,
    			copyAlignmentToClass: Drupal.settings.jcaption.jcaption_copyAlignmentToClass,
    			copyFloatToClass: Drupal.settings.jcaption.jcaption_copyFloatToClass,
    			copyClassToClass: Drupal.settings.jcaption.jcaption_copyClassToClass,
    			autoWidth: Drupal.settings.jcaption.jcaption_autoWidth,
    			keepLink: Drupal.settings.jcaption.jcaption_keepLink,
          styleMarkup: Drupal.settings.jcaption.jcaption_styleMarkup,
    			animate: Drupal.settings.jcaption.jcaption_animate,
    			show: {opacity: 'show'},
    			showDuration: Drupal.settings.jcaption.jcaption_showDuration,
    			hide: {opacity: 'hide'},
    			hideDuration: Drupal.settings.jcaption.jcaption_hideDuration	
    		}, settings);
    
    		return $(this).each(function(){
    			//Only add the caption after the image has been loaded.  This makes sure we can know the width of the caption.
    			
    			$(this).bind('load', function(){
    				
    				//Make sure the captioning isn't applied twice when the IE fix at the bottom is applied
    				if($(this).data('loaded')) return false;
    				$(this).data('loaded', true);
    			
    				//Shorthand for the image we will be applying the caption to
    				if($(this).parent("a").length > 0 && !settings.keepLink) {
    				  var image = $(this).parent("a");
      			  var cleanimage = $(this);    				
      			  } 
    				else {
      			  var image = $(this);
      			  var cleanimage = $(this);    				
    				}

    				//Only create captions if there is content for the caption
    				if(cleanimage.attr(settings.imageAttr) != undefined && (cleanimage.attr(settings.imageAttr).length > 0 || !settings.requireText)){
    					
    					//Wrap the image with the caption span
    					image.wrap("<" + settings.wrapperElement + " class='" + settings.wrapperClass + "'></" + settings.wrapperElement + ">");
    					
    					//Save Image Float
    					var imageFloat = cleanimage.css('float')
    					
    					//Save Image Class
    					var imageClass = cleanimage.attr('class');
    					if(settings.removeClass) cleanimage.removeAttr('class');

    					//Save Image Style
    					var imageStyle = cleanimage.attr('style');
    					if(settings.removeStyle) cleanimage.removeAttr('style');
    					
    					//Save Image Align
    					var imageAlign = cleanimage.attr('align');
    					if(settings.removeAlign) cleanimage.removeAttr('align');
    					
    					//Put Caption in the Wrapper span
    					var span = image.parent().append('<' + settings.captionElement + '>' + cleanimage.attr(settings.imageAttr) + '</' + settings.captionElement + '>');
    					
              //Add css if there is style markup for the paragraph in the settings
              //if(settings.styleMarkup) 
              
              if(settings.styleMarkup) {
                $('.caption p').attr('style', function() {
                  return settings.styleMarkup; 
                });
              }
              
    					if(settings.animate){
    						$(this).next().hide();
    						$(this).parent().hover(
    						function(){
    							$(this).find('p').animate(settings.show, settings.showDuration);
    						},
    						function(){
    							$(this).find('p').animate(settings.hide, settings.hideDuration);
    						});
    					}
    					
    					//Copy Image Style to span
    					if(settings.copyStyle) span.attr('style',imageStyle);
    					
    					//If there is an alignment on the image (for example align="left") add "left" as a class on the caption.  This helps deal with older Text Editors like TinyMCE
    					if(settings.copyAlignmentToClass) span.addClass(imageAlign);
    					
    					//Transfers the float style from the image to the caption container
    					if(settings.copyFloatToClass) span.addClass(imageFloat);
    					
     					//Transfers the class from the image to the caption container
    					if(settings.copyClassToClass) span.addClass(imageClass);
    					
    					//Properly size the caption span based on the loaded image's size
    					if(settings.autoWidth) span.width(image.width());
    				}
    			});
    			
    			// Thanks to Captify for this bit!
    			//if the image has already loaded (due to being cached), force the load function to be called
    			if (this.complete || this.naturalWidth > 0){
    				$(this).trigger('load');
    			}
    		});
    	}
    	
    	$(captionSelectors.join(",")).each(function(index, elem){
    	  $(elem).jcaption();
    	});
    
    })(jQuery);
  }
};

(function ($) {
  $(document).ready(function(){

  });
})(jQuery);
;/*})'"*/
;/*})'"*/
Drupal.TBMegaMenu = Drupal.TBMegaMenu || {};

(function ($) {
  Drupal.TBMegaMenu.oldWindowWidth = 0;
  Drupal.TBMegaMenu.displayedMenuMobile = false;
  Drupal.TBMegaMenu.supportedScreens = [980];
  Drupal.TBMegaMenu.menuResponsive = function () {
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    var navCollapse = $('.tb-megamenu').children('.nav-collapse');
    if (windowWidth < Drupal.TBMegaMenu.supportedScreens[0]) {
		
      navCollapse.addClass('collapse');
      if (Drupal.TBMegaMenu.displayedMenuMobile) {
        navCollapse.css({height: 'auto', overflow: 'visible'});
      } else {
        navCollapse.css({height: 0, overflow: 'hidden'});
      }
    } else {
      // If width of window is greater than 980 (supported screen).
      navCollapse.removeClass('collapse');
      if (navCollapse.height() <= 0) {
        navCollapse.css({height: 'auto', overflow: 'visible'});
      }
    }
  };
  
  Drupal.behaviors.tbMegaMenuAction = {
    attach: function(context) {
      $('.tb-megamenu-button', context).once('menuIstance', function () {
        var This = this;
        $(This).click(function() {
          if(parseInt($(this).parent().children('.nav-collapse').height())) {
            $(this).parent().children('.nav-collapse').css({height: 0, overflow: 'hidden'});
            Drupal.TBMegaMenu.displayedMenuMobile = false;
          }
          else {
            //$(this).parent().children('.nav-collapse').css({height: 'auto', overflow: 'visible'});
			$(this).parent().children('.nav-collapse').css({height: '400px', overflow: 'scroll'});
            Drupal.TBMegaMenu.displayedMenuMobile = true;
          }
        });
      });
      
      
      var isTouch = 'ontouchstart' in window && !(/hp-tablet/gi).test(navigator.appVersion);
      if(!isTouch){
        $(document).ready(function($){
          var mm_duration = 0;
          $('.tb-megamenu').each (function(){
            if ($(this).data('duration')) {
              mm_duration = $(this).data('duration');
            }
          });
          var mm_timeout = 0;//mm_duration ? 100 + mm_duration : 500;
          $('.nav > li, li.mega').hover(function(event) {
            var $this = $(this);
            if ($this.hasClass ('mega')) {
              $this.addClass ('animating');
              clearTimeout ($this.data('animatingTimeout'));
              $this.data('animatingTimeout', setTimeout(function(){$this.removeClass ('animating')}, mm_timeout));
              clearTimeout ($this.data('hoverTimeout'));
              $this.data('hoverTimeout', setTimeout(function(){$this.addClass ('open')}, 100));  
            } else {
              clearTimeout ($this.data('hoverTimeout'));
              $this.data('hoverTimeout', 
              setTimeout(function(){$this.addClass ('open')}, 100));
            }
          },
          function(event) {
            var $this = $(this);
            if ($this.hasClass ('mega')) {
              $this.addClass ('animating');
              clearTimeout ($this.data('animatingTimeout'));
              $this.data('animatingTimeout', 
              setTimeout(function(){$this.removeClass ('animating')}, mm_timeout));
              clearTimeout ($this.data('hoverTimeout'));
              $this.data('hoverTimeout', setTimeout(function(){$this.removeClass ('open')}, 100));
            } else {
              clearTimeout ($this.data('hoverTimeout'));
              $this.data('hoverTimeout', 
              setTimeout(function(){$this.removeClass ('open')}, 100));
            }
          });
        });
      }
      else{
		  console.log('is touch is true');
		  $(document).ready(function($){
			  $('.tb-megamenu-main-menu ul li a .caret').click(function(){
				  $('.tb-megamenu-main-menu ul li').find('.tb-megamenu-column').removeAttr('style');
				  $(this).parent().parent().children().find('.tb-megamenu-column').attr('style', 'display: block !important');
				  $(this).parent().parent().find('.tb-megamenu-submenu.nav-child').attr('style', 'display: block !important');
				  $(this).parent().parent().find('.mega-group-title').show();
			  })
		  })
	  }
	  
      $(window).resize(function() {
        var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        if(windowWidth != Drupal.TBMegaMenu.oldWindowWidth){
          Drupal.TBMegaMenu.oldWindowWidth = windowWidth;
          Drupal.TBMegaMenu.menuResponsive();
        }
      });
    },
  }
})(jQuery);


;/*})'"*/
;/*})'"*/
Drupal.TBMegaMenu = Drupal.TBMegaMenu || {};

(function ($) {
  Drupal.TBMegaMenu.createTouchMenu = function(items) {
      items.children('a').each( function() {
	var $item = $(this);
        var tbitem = $(this).parent();
        $item.click( function(event){
          if ($item.hasClass('tb-megamenu-clicked')) {
            var $uri = $item.attr('href');
            window.location.href = $uri;
          }
          else {
            event.preventDefault();
            $item.addClass('tb-megamenu-clicked');
            if(!tbitem.hasClass('open')){	
              tbitem.addClass('open');
            }
          }
        }).closest('li').mouseleave( function(){
          $item.removeClass('tb-megamenu-clicked');
          tbitem.removeClass('open');
        });
     });
     /*
     items.children('a').children('span.caret').each( function() {
	var $item = $(this).parent();
        $item.click(function(event){
          tbitem = $item.parent();
          if ($item.hasClass('tb-megamenu-clicked')) {
            Drupal.TBMegaMenu.eventStopPropagation(event);
            if(tbitem.hasClass('open')){	
              tbitem.removeClass('open');
              $item.removeClass('tb-megamenu-clicked');
            }
          }
          else {
            Drupal.TBMegaMenu.eventStopPropagation(event);
            $item.addClass('tb-megamenu-clicked');
            if(!tbitem.hasClass('open')){	
              tbitem.addClass('open');
              $item.removeClass('tb-megamenu-clicked');
            }
          }
        });
     });
     */
  }
  
  Drupal.TBMegaMenu.eventStopPropagation = function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    else if (window.event) {
      window.event.cancelBubble = true;
    }
  }  
  Drupal.behaviors.tbMegaMenuTouchAction = {
    attach: function(context) {
      var isTouch = 'ontouchstart' in window && !(/hp-tablet/gi).test(navigator.appVersion);
      if(isTouch){
        $('html').addClass('touch');
        Drupal.TBMegaMenu.createTouchMenu($('.tb-megamenu ul.nav li.mega').has('.dropdown-menu'));
      }
    }
  }
})(jQuery);

;/*})'"*/
;/*})'"*/
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function($){$.fn.unveil=function(threshold,callback){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded;this.one("unveil",function(){var source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source){this.setAttribute("src",source);if(typeof callback==="function")callback.call(this);}});function unveil(){var inview=images.filter(function(){var $e=$(this),wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.scroll(unveil);$w.resize(unveil);unveil();return this;};})(window.jQuery||window.Zepto);

;/*})'"*/
;/*})'"*/
(function ($) {

// Unveil behavior code
Drupal.behaviors.Unveil = {
  attach: function() {
    // Load Unveil, and set the distance to unveil at.
    $('img').unveil(Drupal.settings.Unveil.unveil_distance);
  }
}

}(jQuery));

;/*})'"*/
;/*})'"*/

(function($) {

/**
 * Drupal FieldGroup object.
 */
Drupal.FieldGroup = Drupal.FieldGroup || {};
Drupal.FieldGroup.Effects = Drupal.FieldGroup.Effects || {};
Drupal.FieldGroup.groupWithfocus = null;

Drupal.FieldGroup.setGroupWithfocus = function(element) {
  element.css({display: 'block'});
  Drupal.FieldGroup.groupWithfocus = element;
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processFieldset = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.fieldset', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $('legend span.fieldset-legend', $(this)).eq(0).append(' ').append($('.form-required').eq(0).clone());
        }
        if ($('.error', $(this)).length) {
          $('legend span.fieldset-legend', $(this)).eq(0).addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processAccordion = {
  execute: function (context, settings, type) {
    $('div.field-group-accordion-wrapper', context).once('fieldgroup-effects', function () {
      var wrapper = $(this);

      // Get the index to set active.
      var active_index = false;
      wrapper.find('.accordion-item').each(function(i) {
        if ($(this).hasClass('field-group-accordion-active')) {
          active_index = i;
        }
      });

      wrapper.accordion({
        heightStyle: "content",
        active: active_index,
        collapsible: true,
        changestart: function(event, ui) {
          if ($(this).hasClass('effect-none')) {
            ui.options.animated = false;
          }
          else {
            ui.options.animated = 'slide';
          }
        }
      });

      if (type == 'form') {

        var $firstErrorItem = false;

        // Add required fields mark to any element containing required fields
        wrapper.find('div.field-group-accordion-item').each(function(i) {

          if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
            $('h3.ui-accordion-header a').eq(i).append(' ').append($('.form-required').eq(0).clone());
          }
          if ($('.error', $(this)).length) {
            // Save first error item, for focussing it.
            if (!$firstErrorItem) {
              $firstErrorItem = $(this).parent().accordion("activate" , i);
            }
            $('h3.ui-accordion-header').eq(i).addClass('error');
          }
        });

        // Save first error item, for focussing it.
        if (!$firstErrorItem) {
          $('.ui-accordion-content-active', $firstErrorItem).css({height: 'auto', width: 'auto', display: 'block'});
        }

      }
    });
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processHtabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {
      // Add required fields mark to any element containing required fields
      $('fieldset.horizontal-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('horizontalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('horizontalTab').link.parent().addClass('error');
          Drupal.FieldGroup.setGroupWithfocus($(this));
          $(this).data('horizontalTab').focus();
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 */
Drupal.FieldGroup.Effects.processTabs = {
  execute: function (context, settings, type) {
    if (type == 'form') {

      var errorFocussed = false;

      // Add required fields mark to any fieldsets containing required fields
      $('fieldset.vertical-tabs-pane', context).once('fieldgroup-effects', function(i) {
        if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
          $(this).data('verticalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');
        }
        if ($('.error', $(this)).length) {
          $(this).data('verticalTab').link.parent().addClass('error');
          // Focus the first tab with error.
          if (!errorFocussed) {
            Drupal.FieldGroup.setGroupWithfocus($(this));
            $(this).data('verticalTab').focus();
            errorFocussed = true;
          }
        }
      });
    }
  }
}

/**
 * Implements Drupal.FieldGroup.processHook().
 *
 * TODO clean this up meaning check if this is really
 *      necessary.
 */
Drupal.FieldGroup.Effects.processDiv = {
  execute: function (context, settings, type) {

    $('div.collapsible', context).once('fieldgroup-effects', function() {
      var $wrapper = $(this);

      // Turn the legend into a clickable link, but retain span.field-group-format-toggler
      // for CSS positioning.

      var $toggler = $('span.field-group-format-toggler:first', $wrapper);
      var $link = $('<a class="field-group-format-title" href="#"></a>');
      $link.prepend($toggler.contents());

      // Add required field markers if needed
      if ($(this).is('.required-fields') && $(this).find('.form-required').length > 0) {
        $link.append(' ').append($('.form-required').eq(0).clone());
      }

      $link.appendTo($toggler);

      // .wrapInner() does not retain bound events.
      $link.click(function () {
        var wrapper = $wrapper.get(0);
        // Don't animate multiple times.
        if (!wrapper.animating) {
          wrapper.animating = true;
          var speed = $wrapper.hasClass('speed-fast') ? 300 : 1000;
          if ($wrapper.hasClass('effect-none') && $wrapper.hasClass('speed-none')) {
            $('> .field-group-format-wrapper', wrapper).toggle();
          }
          else if ($wrapper.hasClass('effect-blind')) {
            $('> .field-group-format-wrapper', wrapper).toggle('blind', {}, speed);
          }
          else {
            $('> .field-group-format-wrapper', wrapper).toggle(speed);
          }
          wrapper.animating = false;
        }
        $wrapper.toggleClass('collapsed');
        return false;
      });

    });
  }
};

/**
 * Behaviors.
 */
Drupal.behaviors.fieldGroup = {
  attach: function (context, settings) {
    settings.field_group = settings.field_group || Drupal.settings.field_group;
    if (settings.field_group == undefined) {
      return;
    }

    // Execute all of them.
    $.each(Drupal.FieldGroup.Effects, function (func) {
      // We check for a wrapper function in Drupal.field_group as
      // alternative for dynamic string function calls.
      var type = func.toLowerCase().replace("process", "");
      if (settings.field_group[type] != undefined && $.isFunction(this.execute)) {
        this.execute(context, settings, settings.field_group[type]);
      }
    });

    // Fixes css for fieldgroups under vertical tabs.
    $('.fieldset-wrapper .fieldset > legend').css({display: 'block'});
    $('.vertical-tabs fieldset.fieldset').addClass('default-fallback');

    // Add a new ID to each fieldset.
    $('.group-wrapper .horizontal-tabs-panes > fieldset', context).once('group-wrapper-panes-processed', function() {
      // Tats bad, but we have to keep the actual id to prevent layouts to break.
      var fieldgroupID = 'field_group-' + $(this).attr('id');
      $(this).attr('id', fieldgroupID);
    });
    // Set the hash in url to remember last userselection.
    $('.group-wrapper ul li').once('group-wrapper-ul-processed', function() {
      var fieldGroupNavigationListIndex = $(this).index();
      $(this).children('a').click(function() {
        var fieldset = $('.group-wrapper fieldset').get(fieldGroupNavigationListIndex);
        // Grab the first id, holding the wanted hashurl.
        var hashUrl = $(fieldset).attr('id').replace(/^field_group-/, '').split(' ')[0];
        window.location.hash = hashUrl;
      });
    });

  }
};

})(jQuery);

;/*})'"*/
;/*})'"*/
/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

;/*})'"*/
;/*})'"*/
(function ($) {

Drupal.WeebPal = Drupal.WeebPal || {};
Drupal.WeebPal.onClickResetDefaultSettings = function() {
  var answer = confirm(Drupal.t('Are you sure you want to reset your theme settings to default theme settings?'))
  if (answer){
    $("input:hidden[name = magazine_use_default_settings]").attr("value", 1);
    return true;
  }

  return false;
}

Drupal.behaviors.actionWeebPal = {
  attach: function (context) {
	$(".change-skin-button").click(function() {
	  parts = this.href.split("/");
	  style = parts[parts.length - 1];
   	  $.cookie("magazine_skin", style, {path: '/'});
      window.location.reload();
	  return false;
    });
    $("#change_skin_menu_wrapper").mouseenter(function() {
      $('#change_skin_menu_wrapper').stop(true, false).animate({left: 0}, 1000);	  
    }).mouseleave(function() {
      $('#change_skin_menu_wrapper').stop(true, false).animate({left: -61}, 1000);
    });	
  }
};
})(jQuery);

;/*})'"*/
;/*})'"*/
(function($) {

var version = '@VERSION',
    defaults = {
      exclude: [],
      excludeWithin:[],
      offset: 0,
      direction: 'top', // one of 'top' or 'left'
      scrollElement: null, // jQuery set of elements you wish to scroll (for $.smoothScroll).
                          //  if null (default), $('html, body').firstScrollable() is used.
      scrollTarget: null, // only use if you want to override default behavior
      beforeScroll: function() {},  // fn(opts) function to be called before scrolling occurs. "this" is the element(s) being scrolled
      afterScroll: function() {},   // fn(opts) function to be called after scrolling occurs. "this" is the triggering element
      easing: 'swing',
      speed: 400,
      autoCoefficent: 2 // coefficient for "auto" speed
    },

    getScrollable = function(opts) {
      var scrollable = [],
          scrolled = false,
          dir = opts.dir && opts.dir == 'left' ? 'scrollLeft' : 'scrollTop';

      this.each(function() {

        if (this == document || this == window) { return; }
        var el = $(this);
        if ( el[dir]() > 0 ) {
          scrollable.push(this);
        } else {
          // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
          el[dir](1);
          scrolled = el[dir]() > 0;
          if ( scrolled ) {
            scrollable.push(this);
          }
          // then put it back, of course
          el[dir](0);
        }
      });

      // If no scrollable elements, fall back to <body>,
      // if it's in the jQuery collection
      // (doing this because Safari sets scrollTop async,
      // so can't set it to 1 and immediately get the value.)
      if (!scrollable.length) {
        this.each(function(index) {
          if (this.nodeName === 'BODY') {
            scrollable = [this];
          }
        });
      }

      // Use the first scrollable element if we're calling firstScrollable()
      if ( opts.el === 'first' && scrollable.length > 1 ) {
        scrollable = [ scrollable[0] ];
      }

      return scrollable;
    },
    isTouch = 'ontouchend' in document;

$.fn.extend({
  scrollable: function(dir) {
    var scrl = getScrollable.call(this, {dir: dir});
    return this.pushStack(scrl);
  },
  firstScrollable: function(dir) {
    var scrl = getScrollable.call(this, {el: 'first', dir: dir});
    return this.pushStack(scrl);
  },

  smoothScroll: function(options) {
    options = options || {};
    var opts = $.extend({}, $.fn.smoothScroll.defaults, options),
        locationPath = $.smoothScroll.filterPath(location.pathname);

    this
    .unbind('click.smoothscroll')
    .bind('click.smoothscroll', function(event) {
      var link = this,
          $link = $(this),
          exclude = opts.exclude,
          excludeWithin = opts.excludeWithin,
          elCounter = 0, ewlCounter = 0,
          include = true,
          clickOpts = {},
          hostMatch = ((location.hostname === link.hostname) || !link.hostname),
          pathMatch = opts.scrollTarget || ( $.smoothScroll.filterPath(link.pathname) || locationPath ) === locationPath,
          thisHash = escapeSelector(link.hash);

      if ( !opts.scrollTarget && (!hostMatch || !pathMatch || !thisHash) ) {
        include = false;
      } else {
        while (include && elCounter < exclude.length) {
          if ($link.is(escapeSelector(exclude[elCounter++]))) {
            include = false;
          }
        }
        while ( include && ewlCounter < excludeWithin.length ) {
          if ($link.closest(excludeWithin[ewlCounter++]).length) {
            include = false;
          }
        }
      }

      if ( include ) {
        event.preventDefault();

        $.extend( clickOpts, opts, {
          scrollTarget: opts.scrollTarget || thisHash,
          link: link
        });

        $.smoothScroll( clickOpts );
      }
    });

    return this;
  }
});

$.smoothScroll = function(options, px) {
  var opts, $scroller, scrollTargetOffset, speed,
      scrollerOffset = 0,
      offPos = 'offset',
      scrollDir = 'scrollTop',
      aniProps = {},
      aniOpts = {},
      scrollprops = [];


  if (typeof options === 'number') {
    opts = $.fn.smoothScroll.defaults;
    scrollTargetOffset = options;
  } else {
    opts = $.extend({}, $.fn.smoothScroll.defaults, options || {});
    if (opts.scrollElement) {
      offPos = 'position';
      if (opts.scrollElement.css('position') == 'static') {
        opts.scrollElement.css('position', 'relative');
      }
    }
  }

  opts = $.extend({link: null}, opts);
  scrollDir = opts.direction == 'left' ? 'scrollLeft' : scrollDir;

  if ( opts.scrollElement ) {
    $scroller = opts.scrollElement;
    scrollerOffset = $scroller[scrollDir]();
  } else {
    $scroller = $('html, body').firstScrollable();
  }

  // beforeScroll callback function must fire before calculating offset
  opts.beforeScroll.call($scroller, opts);

  scrollTargetOffset = (typeof options === 'number') ? options :
                        px ||
                        ( $(opts.scrollTarget)[offPos]() &&
                        $(opts.scrollTarget)[offPos]()[opts.direction] ) ||
                        0;

  aniProps[scrollDir] = scrollTargetOffset + scrollerOffset + opts.offset;
  speed = opts.speed;

  // automatically calculate the speed of the scroll based on distance / coefficient
  if (speed === 'auto') {

    // if aniProps[scrollDir] == 0 then we'll use scrollTop() value instead
    speed = aniProps[scrollDir] || $scroller.scrollTop();

    // divide the speed by the coefficient
    speed = speed / opts.autoCoefficent;
  }

  aniOpts = {
    duration: speed,
    easing: opts.easing,
    complete: function() {
      opts.afterScroll.call(opts.link, opts);
    }
  };

  if (opts.step) {
    aniOpts.step = opts.step;
  }

  if ($scroller.length) {
    $scroller.stop().animate(aniProps, aniOpts);
  } else {
    opts.afterScroll.call(opts.link, opts);
  }
};

$.smoothScroll.version = version;
$.smoothScroll.filterPath = function(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
};

// default options
$.fn.smoothScroll.defaults = defaults;

function escapeSelector (str) {
  return str.replace(/(:|\.)/g,'\\$1');
}

})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
Drupal.behaviors.garnetAction = {
  attach: function (context) {
    Drupal.Magazine.setInputPlaceHolder('search_block_form', Drupal.t('Search...'));
    $('.btn-btt').smoothScroll({offset:0, speed: 200});
    
    Drupal.Magazine.initUserMenu();


    $(window).load(function() {
      window.setTimeout(function() {
        // Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-0 .views-field-title') );
        // Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-0 .views-field-body') );

        Drupal.Magazine.equalHeight( $('#quicktabs-container-quicktab .views-field-title') );
        Drupal.Magazine.equalHeight( $('#quicktabs-container-quicktab .view-field-body') );


        // Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-1 .views-field-title') );
        // Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-1 .views-field-body') );
        // Drupal.Magazine.equalHeight( $('#panel-third-wrapper .panel-column .grid-inner') );
      }, 100);
    }).scroll(function() {
      Drupal.Magazine.checkScroll();
    }).resize(function(){
      Drupal.Magazine.checkScroll();
    });

    // Drupal.Magazine.initQuickTab();
  }
}

Drupal.Magazine = Drupal.Magazine || {};
Drupal.Magazine.FIXED_MENU_POSITION = 150;

Drupal.Magazine.setInputPlaceHolder = function(name, text) {
  $('input[name="' + name + '"]').val(Drupal.t(text));
  $('input[name="' + name + '"]').focus(function(){
    if(this.value == Drupal.t(text)) {
      this.value='';
    }
  }).blur(function(){
    if(this.value == '') {
      this.value=Drupal.t(text);
    }
  });
}

Drupal.Magazine.initQuickTab = function() {
  $('#quicktabs-quicktab ul.quicktabs-tabs li a').click(function() {
    var self = $(this);
    if (self.hasClass('processed')) return;
    var id = self.attr('id').substr(-1);
    if (id == 0) return;

    Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-'+id+' .views-field-title') );
    Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-'+id+' .views-field-body') );

    self.addClass('processed');
  })
}

Drupal.Magazine.checkScroll = function() {
  // if (Drupal.settings.garnet.show_fixed_menu == undefined || Drupal.settings.garnet.show_fixed_menu == false) return;
  // var wrapper = $('#main-menu-wrapper');
  // if ($(window).scrollTop() > this.FIXED_MENU_POSITION) {
  //   var $page = $('#page');
  //   wrapper.css({top: $page.position().top});
  //   wrapper.addClass('fixed-menu');
  //   wrapper.find('#fixedLogo').show();
  // } else {
  //   wrapper.css({top: 'auto'});
  //   wrapper.removeClass('fixed-menu');
  //   wrapper.find('#fixedLogo').hide();
  // }
  
  if($(window).scrollTop() > 100) {
    $('.btn-btt').show();
  }
  else {
    $('.btn-btt').hide();
  }
}
  
Drupal.Magazine.equalHeight = function(elements) {
  highest = 0;
  elements.each(function() {
    if($(this).outerHeight() > highest) {
      highest = $(this).outerHeight();
    }
  });
  return elements.each(function() {
    padding = $(this).innerHeight() - $(this).height();
    extra = padding + ($(this).outerHeight() - $(this).innerHeight());
    if(($.browser.msie && $.browser.version == 6.0)) {
      $(this).css({'height': highest - extra, 'overflow': 'hidden'});
    }
    else {
      $(this).css({'min-height': highest - extra});
    }
  });
}

Drupal.Magazine.initUserMenu = function() {
  
  
    $('i.wp-icon-user-login').click(function() {
      $('#wp-user-wrapper').toggle();
    })  
  
}
  
})(jQuery);
;/*})'"*/
;/*})'"*/
(function ($) {
  Drupal.Responsive = Drupal.Responsive || {};
  //Drupal.Responsive.screens = [0.5, 479.5, 768.5, 979.5, 1049.5];
  Drupal.Responsive.mobileMaxWidth = 479.5;
  Drupal.Responsive.IE8 = $.browser.msie && parseInt($.browser.version, 10) === 8;
  Drupal.Responsive.toolbar = false;
  
  Drupal.behaviors.actionResponsive = {
    attach: function (context) {
      $(window).load(function() {
        Drupal.Responsive.toolbar = $('#toolbar').length ? $("#toolbar") : false;
        Drupal.Responsive.initResponsiveMenu();
        Drupal.Responsive.setSlideshowHeight();
        $(window).resize(function(){
          $('body').css({'padding-top': Drupal.Responsive.toolbar ? (Drupal.Responsive.toolbar.height() - (Drupal.Responsive.IE8 ? 10 : 0)) : 0});
          Drupal.Responsive.updateResponsiveMenu();
          Drupal.Responsive.setSlideshowHeight();
        });
        // el = $('body.garnet-popup-iframe #block-system-main .block-inner');
        // if(el.length && !Drupal.Responsive.IE8) {
        //   el.css({height: $(window).height()});
        //   Drupal.Responsive.popupIScroll = new iScroll(el[0], {vScroll: true, hScroll: false, vScrollbar: true, hScrollbar: false, scrollbarClass: 'myScrollbar', useTransform: false});
        // }
      });
    }
  };
  
  Drupal.Responsive.updateResponsiveMenu = function() {
    if($('#main-menu-wrapper .tb-megamenu-button').length == 0) {
        var target = $('.responsive-menu-button');
        if (target.css('display') == 'none') {
          $('#main-menu-wrapper .region-main-menu').show();
        } 
        else {
          $('#main-menu-wrapper .region-main-menu').hide();
        }
    }
    if ($('#sports-menu-wrapper .tb-megamenu-button').length == 0) {
      var target = $('.responsive-sport-menu-button');
      if (target.css('display') == 'none') {
        $('#sports-menu-wrapper .region-sports-menu').show();
      } 
      else {
        $('#sports-menu-wrapper .region-sports-menu').hide();
      }
    }

  }

  Drupal.Responsive.initResponsiveMenu = function() {
    $('.responsive-menu-button').bind('click',function(e){
      var target = $('#main-menu-wrapper .region-main-menu');
      if (target.css('display') == 'none') {
        target.css({display: 'block'});
      }
      else {
        target.css({display: 'none'});
      }
    });
    $('.responsive-sport-menu-button').click(function(e) {
      var target = $('#sports-menu-wrapper .region-sports-menu');
      if (target.css('display') == 'none') {
        target.css('display', 'block');
      }
      else {
        target.css('display', 'none');
      }
    })
    Drupal.Responsive.updateResponsiveMenu();
  }

  Drupal.Responsive.setSlideshowHeight = function() {
    var imgs = $('#block-views-slideshow-block .view .views-field img')
    if (imgs.length) {

      var minImageHeight = imgs.get(0).height;
      imgs.each(function(idx, el) {
        if (minImageHeight > el.height) {
          minImageHeight = el.height;
        }
      })

      $('.views_slideshow_cycle_main .views-slideshow-cycle-main-frame').css('height', minImageHeight);
      $('.views_slideshow_cycle_main .views-slideshow-cycle-main-frame-row').css('height', minImageHeight);
      
      Drupal.viewsSlideshowCycle.load("#views_slideshow_cycle_main_slideshow-block");

    }
  }


})(jQuery);

;/*})'"*/
;/*})'"*/
(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"undefined"!==typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());

;/*})'"*/
;/*})'"*/
