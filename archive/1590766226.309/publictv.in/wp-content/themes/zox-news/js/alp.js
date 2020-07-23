//jQuery(document).ready(function($) {
jQuery(window).on('load', function() {
	var $ = jQuery;
	var nextPostFlag = false;

	if(!$('body').hasClass('single-post'))
		return;

	if($('article').eq(0).length)
		$('article').eq(0).addClass('first');

	createStickyWidgetArea();

	var $nextPost = $('.alp-related-post').eq(1);
	if($nextPost.length)
		$nextPost.addClass('load-next');

	createLastArticleWaypoint();

	$(window).on('scroll', findCurrentArticle);
	$(window).on('resize', findCurrentArticle);
	$(window).trigger('resize');
	
	function mvpGalleryInit() {
  $('.post-gallery-bot').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    itemWidth: 80,
    itemMargin: 10,
    asNavFor: '.post-gallery-top'
  });

  $('.post-gallery-top').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    	  prevText: "&lt;",
          nextText: "&gt;",
    sync: ".post-gallery-bot"
  });

}

	function loadRelatedPosts()
	{
		if(nextPostFlag)
			return;

		$nextPost = $('.alp-related-posts .alp-related-post.load-next');
		if(!$nextPost.length)
			return;

		//get next article
		nextPostFlag = true;
		$.get($nextPost.find('.post-title').attr('href'), {}, function(data) {
			var postTitle=$(data).filter('title').text();
			$nextPost.attr('data-document-title', postTitle);
			var $newArticle = $(data).find('article');
			if(!$newArticle.length)
				return;

			if($('article#' + $newArticle.attr('id')).length)
				return;

			$('article:last-of-type').after($newArticle);

			Waypoint.destroyAll();
			$('.alp-related-post').removeClass('load-next');

			if($nextPost.next().length)
				$nextPost.next().addClass('load-next');

			$('article img').load(function() {
				createLastArticleWaypoint();
				$(window).trigger('resize');
				nextPostFlag = false;
			});
		}, 'html');
	}

	function createStickyWidgetArea()
	{
		if(!$('.widget_alp-related-posts').length)
			return;
		$('.widget_alp-related-posts').stick_in_parent({
			offset_top: 100,
			recalc_every: 1,
			bottoming: true
		});
	}

	function findCurrentArticle()
	{
		var windowTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var windowBottom = windowTop+windowHeight;
		var post_title_selector = '.mvp-post-title';

		var $article,
			articleTop,
			articleHeight,
			articleBottom,
			articleTitle,
			$widgetPost,
			advertHtml,
			offset = 300;

		$('article').each(function() {
			$article = $(this);
			articleTop = $article.offset().top;
			articleHeight = $article.height();
			articleBottom = articleTop+articleHeight;
			articleTitle = $article.find( post_title_selector ).text();

			if(articleTop-offset<windowTop && articleBottom-offset>windowTop &&
				('post-'+$('.alp-related-post.current').attr('data-id'))!=$article.attr('id'))
			{
				$('.alp-related-post').removeClass('current');
				$widgetPost = $('.alp-related-post.' + $article.attr('id'));
				$widgetPost.addClass('current');

				advertHtml = $('.alp-related-posts .alp-advert')[0].outerHTML;
				$('.alp-related-posts .alp-advert').remove();
				$widgetPost.after(advertHtml);
				
				window.document.title = articleTitle;
				history.pushState(null, $widgetPost.attr('data-document-title'), $widgetPost.find('.post-title').attr('href'));
				if($article.attr('pageview')!='1' &&
					!$article.hasClass('first'))
				{
					var pageViewData={
						hitType: 'pageview',
						title: document.title,
						page: location.pathname
					};
					window['GoogleAnalyticsObject'] = 'ga';
  						window['ga'] = window['ga'] || function() {
    					(window['ga'].q = window['ga'].q || []).push(arguments)
  					};
					//console.log('pageview');
					//console.log(pageViewData);
					ga('send', pageViewData);
					$article.attr('pageview', 1)
				}

				//$('.alp-related-post.' + $article.attr('id')).addClass('current');

				$('.alp-related-post').show();
				$('.alp-related-post').each(function() {
					if($(this).hasClass('current'))
						return false;
					$(this).hide();
				});
				return false;
			}
		});
	}

	function createLastArticleWaypoint()
	{
		var $lastArticle = $('article:last-of-type')[0];
		var waypoint = new Waypoint({
			element: $lastArticle,
			handler: function(direction) {
				loadRelatedPosts();
			},
			//offset: 'bottom-in-view'
			offset: function() {
				//taken from waypoit.js 'bottom-in-view' function
				return this.context.innerHeight() - this.adapter.outerHeight()+1500;
			}
			//offset: '80%'
		})
	}

});

