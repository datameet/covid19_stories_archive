jQuery(document).ready(function() {
    var nav = jQuery("header.main-menu");
    var pos = nav.position();
    jQuery(window).scroll(function() {
        var windowpos = jQuery(window).scrollTop();
        if (windowpos >=250) {
            nav.addClass("stick");
            jQuery('.responsive-menu-button').addClass("fixed");
        } else {
            nav.removeClass("stick"); 
            jQuery('.responsive-menu-button').removeClass("fixed");
        }
    });
});
jQuery('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = jQuery(jQuery(this).attr('href'));
    if( target.length ) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: target.offset().top + -150
        }, 500);
    }
});

jQuery(document).ready(function(){
    var slider = jQuery('.bxslider-1').bxSlider({
        auto: true,
        controls: false,
        pager: false,
    });
    jQuery('.nspNext').click(function(){
        slider.goToNextSlide();
        return false;
    });
    jQuery('.nspPrev').click(function(){
        slider.goToPrevSlide();
        return false;
    });
});

jQuery(document).ready(function(){
    var slider2 = jQuery('.bxslider-2').bxSlider({
      mode:'fade',
      auto: false,
      controls: false,
      pager: false,
    });
    jQuery('.nspNext').click(function(){
        slider2.goToNextSlide();
        return false;
    });
    jQuery('.nspPrev').click(function(){
        slider2.goToPrevSlide();
        return false;
    });
});

jQuery(document).ready(function(){
    jQuery('.bxslider-3').bxSlider({
        auto: true,
        controls: true,
        pager: false,
        adaptiveHeight:true,
    });
});