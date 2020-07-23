/* Tab Front-END
------------------------------------------ */

jQuery(window).bind('djaxLoad', function(e, params) {
	maha_shortcode_tabs();
	maha_shortcode_toggle();
});

jQuery(document).ready(function(){
	maha_shortcode_tabs();
	maha_shortcode_toggle();
});

function maha_shortcode_tabs(){
		jQuery('.i-tabs > ul > li > a').click(function(e){
			e.preventDefault();
			var current = jQuery(this);
			current.closest('.i-tabs').find(' > .tab-content > div:not(.nav-tab)').removeClass('active');
			jQuery(current.attr('href')).addClass('active');		
			current.closest('.i-tabs').find(' > ul > li').removeClass('active');
			current.parent().addClass('active');		
		});
}

function maha_shortcode_toggle(){
	jQuery('.i-toggle:first-child').toggleClass('active');
	jQuery('.i-toggle:first-child .toggle-content').slideToggle('fast').toggleClass('active');
	jQuery('.i-toggle.active').find('.toggle-nav i').removeClass('icon-plus-squared').addClass('icon-minus-squared');
	jQuery('.i-toggle > .toggle-nav').click(function(e){
		e.preventDefault();
		if (jQuery(this).parents('.i-toggles').hasClass('accordion')) {
			jQuery('.i-toggle').find('.toggle-content').slideUp(350).removeClass('active');
			jQuery('.i-toggle').removeClass('active');
			jQuery('.i-toggle').find('.toggle-nav i').removeClass('icon-minus-squared').addClass('icon-plus-squared');
		}
		if (jQuery(this).parent().find('.toggle-nav i').hasClass('icon-plus-squared')) {
			jQuery(this).parent().find('.toggle-nav i').removeClass('icon-plus-squared').addClass('icon-minus-squared');
		} else {
			jQuery(this).parent().find('.toggle-nav i').removeClass('icon-minus-squared').addClass('icon-plus-squared');
		}

		jQuery(this).parent().find('.toggle-content').slideToggle(350).toggleClass('active');
		jQuery(this).parent().toggleClass('active');
	});
}