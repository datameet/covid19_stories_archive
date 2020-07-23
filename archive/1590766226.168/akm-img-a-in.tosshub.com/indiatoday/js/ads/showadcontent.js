/*
 * @file showadcontent.js
 */

jQuery(document).ready(function () {
    if (__at__ != 1) {     
        console.log("Ad blocker not detected"); 
      setTimeout(trackEventsForAdBlocker(), 4000);
    } else {
        console.log("Ad blocker detected");      
    }

});


function gup(name) {
    var str = window.location.href;
	var story = str.includes("/story/");
	var gallery = str.includes("/photo/");
	var video = str.includes("/video/");


    if (story == true)
        return "IT-Story-site";

    if (gallery == true)
        return "IT-Photos-site";

    if (video == true)
        return "IT-Videos-site";
}

jQuery(document).ready(function () {
    jQuery('body').on('click', '.tabs ul li', function () {
        var currIndex = jQuery(this).index() + 1;
        jQuery('.tabs ul li').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.show_instruction').hide();
        jQuery('#tab1' + currIndex).fadeIn();
    });
    
    if (__at__ != 1) {
    jQuery('body').on('click', 'a',function () {
        jQuery('html, body').animate({
            scrollTop: jQuery('[name="' + jQuery.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1000);
        return false;
    });
    }
    
    var count_h = 3;
    setInterval(counter_adblock, 1000);
    function counter_adblock() {
        if (count_h == 0) {
            jQuery('.cont_down').removeClass('active_bl');
            jQuery('.cont_to_site').addClass('active_bl');
        } else {
            jQuery('.counter_hh').html(count_h);
        }
        count_h--;
    }
    
});

function trackEventsForAdBlocker() {
    var e = gup("source");
    ga("send", "event", "Adblock", e, "true");
}