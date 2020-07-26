
  var list = $('.slider_city');
  var menuWidth = list.parent().width();
  var listWidth = list.width()
 
$('#testimonials-r').on('click', function(){

  var marginLeftString = list.css('margin-left');
  marginLeftString = marginLeftString.replace('px', '').replace('-', '');
console.log(marginLeftString);
  var marginLeft = parseInt(marginLeftString);
  if ((marginLeft + (menuWidth * 2)) < listWidth) {
    marginLeft = marginLeft + menuWidth;
  } else {
    marginLeft = listWidth - menuWidth;
  }


  list.css({'margin-left': -marginLeft});
});


$('#testimonials-l').on('click', function(){

  var marginLeftString = list.css('margin-left');
  marginLeftString = marginLeftString.replace('px', '');

  var marginLeft = parseInt(marginLeftString);
  if ((marginLeft - menuWidth) > 0) {
    marginLeft = marginLeft - menuWidth;
  }
   else {
    marginLeft = 0;
  }

  list.css({'margin-left': marginLeft});
});


$(document).ready(function () { $('.navbar-brand').click(function () { $('#nav-icon4').toggleClass('open'); $('.navbar-brand').toggleClass('active'); $('.mega-menu').slideToggle(); }); $('.userlike li:first-child a .fa').click(function () { $(this).toggleClass('fa-heart-o'); $(this).toggleClass('fa-heart'); }); }); $(document).mouseup(function (e) { var container = $(".mega-menu,.navbar-brand"); if (!container.is(e.target) && container.has(e.target).length === 0) { container.hide(); $('#nav-icon4').removeClass('open'); $('.navbar-brand').removeClass('active'); } }); jQuery(document).ready(function ($) { $('#myCarousel').carousel({ interval: 5000 }); $('#carousel-text').html($('#slide-content-0').html()); $('[id^=carousel-selector-]').click(function () { var id = this.id.substr(this.id.lastIndexOf("-") + 1); var id = parseInt(id); $('#myCarousel').carousel(id); }); $('#myCarousel').on('slid.bs.carousel', function (e) { var id = $('.item.active').data('slide-number'); $('#carousel-text').html($('#slide-content-' + id).html()); }); }); $('#myCarousel2').carousel({ interval: false }); jQuery(document).ready(function ($) { $('#videocarousel').carousel({ interval: 5000 }); $('#carousel-text').html($('#slide-content-0').html()); $('[id^=carousel-selectors-]').click(function () { var id = this.id.substr(this.id.lastIndexOf("-") + 1); var id = parseInt(id); $('#videocarousel').carousel(id); }); $('#videocarousel').on('slid.bs.carousel', function (e) { var id = $('.item.active').data('slide-number'); $('#carousel-text').html($('#slide-content-' + id).html()); }); }); jQuery(document).ready(function ($) { $('#vid_carousel').carousel({ interval: false }); $('#carousel-text').html($('#slide-content-0').html()); $('[id^=carousel-select-]').click(function () { var id = this.id.substr(this.id.lastIndexOf("-") + 1); var id = parseInt(id); $('#vid_carousel').carousel(id); }); $('#vid_carousel').on('slid.bs.carousel', function (e) { var id = $('.item.active').data('slide-number'); $('#carousel-text').html($('#slide-content-' + id).html()); }); }); jQuery(document).ready(function () { jQuery('.scrollbar-rail').scrollbar(); }); $('.video_thumbnail .right').click(function () { $('.video_thumbnail .carousel-control.left').show(); $('.video_thumbnail .item:nth-last-child(2).active').parent().addClass('des'); $('.video_thumbnail .item:nth-last-child(2).active').parent().removeClass('sed'); $('.des').siblings('.right').addClass('hidden'); $('.sed').siblings('.left').removeClass('hidden'); })
$('.video_thumbnail .left').click(function () { $('.video_thumbnail .carousel-control.right').show(); $('.video_thumbnail .item:nth-child(2).active').parent().addClass('sed'); $('.video_thumbnail .item:nth-child(2).active').parent().removeClass('des'); $('.des').siblings('.right').removeClass('hidden'); $('.sed').siblings('.left').addClass('hidden'); })
$('.slidethumb li').click(function () { $('.slidethumb li').removeClass('active'); $(this).addClass('active') })
$('#myCarousel2 .video_wrap').click(function () { $('#myCarousel2 .video_wrap').removeClass('active'); $(this).addClass('active') })
$(window).load(function () { $('#carousel6').flexslider({ animation: "slide", controlNav: false, animationLoop: false, slideshow: false, itemWidth: 100, itemMargin: 5, asNavFor: '#slider6' }); $('#slider6').flexslider({ animation: "slide", controlNav: false, animationLoop: false, slideshow: false, sync: "#carousel6", start: function (slider) { $('body').removeClass('loading'); } }); });


(function () {
    $('#eventCarousel .item').each(function () {
        var itemToClone = $(this);

        for (var i = 1; i < 6; i++) {
            itemToClone = itemToClone.next();
            // wrap around if at end of item collection
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }
            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone()
              .addClass("cloneditem-" + (i))
              .appendTo($(this));
        }
    });
}());


jQuery(document).ready(function ($) {
    var visible = false;
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (!visible && scrollTop > 100) {
            $(".scrollToTop").fadeIn();
            visible = true;
        } else if (visible && scrollTop <= 100) {
            $(".scrollToTop").fadeOut();
            visible = false;
        }
var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 38){
          var bottom = 34- scrollBottom;
          $('.scrollToTop').css({'bottom': bottom + 'px'});
        }else{
          $('.scrollToTop').css({'bottom':'0'});

        }
    });

    $(".subz").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});


// image show in modal
$(document).ready(function () {
    loadGallery(true, 'a.thumbnail');
    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
        $('#show-previous-image, #show-next-image').show();
        if (counter_max == counter_current) {
            $('#show-next-image').hide();
        } else if (counter_current == 1) {
            $('#show-previous-image').hide();
        }
    }

    function loadGallery(setIDs, setClickAttr) {
        var current_image,
        selector,
        counter = 0;

        $('#show-next-image, #show-previous-image').click(function () {
            if ($(this).attr('id') == 'show-previous-image') {
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            $('#divimage_oftheday').css('display', 'block');
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption-commenting').attr('data-href', $sel.data('image'));
            FB.XFBML.parse(document.getElementById('image-gallery-caption'));
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
            FB.Event.subscribe('xfbml.render', function (response) {
                $('#divimage_oftheday').css('display', 'none');
            });
        }

        if (setIDs == true) {
            $('[data-image-id]').each(function () {
                counter++;
                $(this).attr('data-image-id', counter);
            });
        }
        $(setClickAttr).on('click', function () {
            updateGallery($(this));
        });
    }
});

$('body').on('mouseenter mouseleave', '.sharelink', function () {
    $(this).find('.shareli').stop().slideToggle();
})

/*05-02-19 $('.lazy').Lazy({
             
            effect: 'fadeIn',
            visibleOnly: true,
            effectTime: 2000

        });*/
// image show in modal

var myVar = setInterval(myTimerz, 500);

function myTimerz() {
var totalItems = $('#photosection .item').length;
var currentIndex = $('#photosection div.active').index() -1;
$('.carous-li-n').html(''+currentIndex+'/'+totalItems+'');
}
myTimerz()





//$(document).on('click', 'a[href^="#"]', function (event) {
//    event.preventDefault();

//    $('html, body').animate({
//        scrollTop: $($.attr(this, 'href')).offset().top
//    }, 500);
//});


//$("#img_comment").click(function () {
//    $('html, body').animate({
//        scrollTop: $("#dvcmnt_story").offset().top
//    }, 500);
//});

//var jump = function (e) {
//    if (e) {
//        e.preventDefault();
//        var target = $(this).attr("href");
//    } else {
//        var target = location.hash;
//    }

//    $('html,body').animate(
//    {
//        scrollTop: $(target).offset().top
//    }, 2000, function () {
//        location.hash = target;
//    });

//}


//$(document).ready(function () {
//    $('a[href^=#]').bind("click", jump);

//    if (location.hash) {
//        setTimeout(function () {
//            $('html, body').scrollTop(0).animate(4000);
//            jump();
//        }, 0);
//    } else {
//        $('html, body').show();
//    }
//});







