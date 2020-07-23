(function ($) {
		$(window).scroll(function(){
  var navbar = $('.primary-navigation'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) navbar.addClass('fixed-top');
  else navbar.removeClass('fixed-top');
});
})(jQuery);

! function(n) {
    var i = {
            common: {
                init: function() {},
                finalize: function() {
                    // ! function() {
                        // "use strict";
                        // var i = n(".primary-navigation"),
                            // o = i.offset().top;
                        // n(window).on("scroll", function() {
                            // n(window).scrollTop() >= o ? i.addClass("fixed-top") : i.removeClass("fixed-top")
                        // })
                    // }()
                }
            },
            home: {
                init: function() {},
                finalize: function() {}
            },
            about_us: {
                init: function() {}
            },
            single_post: {
                finalize: function() {
                    ! function(n) {
                        "use strict";
                        n(".mobile-share-button").on("click", function() {
                            n(".sharing-buttons").toggleClass("mobile-share-icons--active")
                        })
                    }(jQuery)
                }
            }
        },
        o = {
            fire: function(n, o, t) {
                var e, c = i;
                o = void 0 === o ? "init" : o, e = "" !== n, e = e && c[n], (e = e && "function" == typeof c[n][o]) && c[n][o](t)
            },
            loadEvents: function() {
                o.fire("common"), n.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(n, i) {
                    o.fire(i), o.fire(i, "finalize")
                }), o.fire("common", "finalize")
            }
        };
    n(document).ready(o.loadEvents)
	
}(jQuery);


