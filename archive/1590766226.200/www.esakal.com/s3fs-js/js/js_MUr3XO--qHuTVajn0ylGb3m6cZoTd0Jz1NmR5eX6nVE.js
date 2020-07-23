Drupal.locale = { 'strings': {"":{"Tuesday":"\u092e\u0902\u0917\u0933\u0935\u093e\u0930","Thursday":"\u0917\u0941\u0930\u0941\u0935\u093e\u0930","Today":"\u0906\u091c","Sunday":"\u0930\u0935\u093f\u0935\u093e\u0930","Monday":"\u0938\u094b\u092e\u0935\u093e\u0930","Wednesday":"\u092c\u0941\u0927\u0935\u093e\u0930","Friday":"\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930","Saturday":"\u0936\u0928\u093f\u0935\u093e\u0930","January":"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940","February":"\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940","March":"\u092e\u093e\u0930\u094d\u091a","April":"\u090f\u092a\u094d\u0930\u093f\u0932","May":"\u092e\u0947","June":"\u091c\u0942\u0928","July":"\u091c\u0941\u0932\u0948","August":"\u0911\u0917\u0938\u094d\u091f","September":"\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930","October":"\u0911\u0915\u094d\u091f\u094b\u092c\u0930","November":"\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930","December":"\u0921\u093f\u0938\u0947\u0902\u092c\u0930"}} };;
(function ($) {
  Drupal.behaviors.rate = {
    attach: function(context) {
      $('.rate-widget:not(.rate-processed)', context).addClass('rate-processed').each(function () {
        var widget = $(this);
        // as we use drupal_html_id() to generate unique ids
        // we have to truncate the '--<id>'
        var ids = widget.attr('id').split('--');
        ids = ids[0].match(/^rate\-([a-z]+)\-([0-9]+)\-([0-9]+)\-([0-9])$/);
        var data = {
          content_type: ids[1],
          content_id: ids[2],
          widget_id: ids[3],
          widget_mode: ids[4]
        };

        $('a.rate-button', widget).click(function() {
          var token = this.getAttribute('href').match(/rate\=([a-zA-Z0-9\-_]{32,64})/)[1];
          return Drupal.rateVote(widget, data, token);
        });
      });
    }
  };

  Drupal.rateVote = function(widget, data, token) {
    // Invoke JavaScript hook.
    widget.trigger('eventBeforeRate', [data]);

    $(".rate-info", widget).text(Drupal.t('Saving vote...'));

    // Random number to prevent caching, see http://drupal.org/node/1042216#comment-4046618
    var random = Math.floor(Math.random() * 99999);

    var q = (Drupal.settings.rate.basePath.match(/\?/) ? '&' : '?') + 'widget_id=' + data.widget_id + '&content_type=' + data.content_type + '&content_id=' + data.content_id + '&widget_mode=' + data.widget_mode + '&token=' + token + '&destination=' + encodeURIComponent(Drupal.settings.rate.destination) + '&r=' + random;
    if (data.value) {
      q = q + '&value=' + data.value;
    }

    // fetch all widgets with this id as class
    widget = $('.' + widget.attr('id'));

    $.get(Drupal.settings.rate.basePath + q, function(response) {
      if (response.match(/^https?\:\/\/[^\/]+\/(.*)$/)) {
        // We got a redirect.
        document.location = response;
      }
      else {
        // get parent object
        var p = widget.parent();

        // Invoke JavaScript hook.
        widget.trigger('eventAfterRate', [data]);

        widget.before(response);

        // remove widget
        widget.remove();
        widget = undefined;

        Drupal.attachBehaviors(p);
      }
    });

    return false;
  }
})(jQuery);
;
(function ($) {
  Drupal.behaviors.rate_fivestar = {
    attach: function(context) {
      $('.rate-widget-fivestar ul:not(.rate-fivestar-processed)', context).addClass('rate-fivestar-processed').each(function () {
        var $this = $(this);
        // Save the current vote status

        var status = $('li a.rate-fivestar-btn-filled', $this).length;

        $this.children().hover(
            function()
            {
                // Append rate-fivestar-btn-filled class to all the a-elements except the a-elements after the hovered element
                var $this = $(this);
                $this.siblings().children('a').addClass('rate-fivestar-btn-filled').removeClass('rate-fivestar-btn-empty');
                $this.children('a').addClass('rate-fivestar-btn-filled').removeClass('rate-fivestar-btn-empty');
                $this.nextAll().children('a').removeClass('rate-fivestar-btn-filled').addClass('rate-fivestar-btn-empty');
            },
            function()
            {
                // Restore the current vote status
                $(this).parent().children().children('a').removeClass('rate-fivestar-btn-filled').addClass('rate-fivestar-btn-empty');
                $(this).parent().children().slice(0,status).children('a').removeClass('rate-fivestar-btn-empty').addClass('rate-fivestar-btn-filled');
            }
        );
      });
    }
  };
})(jQuery);
;
/* Pop up script for Firebase push notification */
(function ($) {
  Drupal.behaviors.popup = {
    attach: function (context, settings) {
      $('body', context).once('web_push_notification', function () {
        // Set push domain in cookie.
        $.cookie("pushdomain", Drupal.settings.pushdomain, {expires: 730});
        /* Open popup to ask user for eanble notifications. */
        $(window).on('load', function () {
          var currentbrowser = checkBrowser();

          if (($.cookie("firebasednd") != 1 || $.cookie("firebasednd") == 'undefine')
            && (currentbrowser.chrome || currentbrowser.firefox)
            ) {
            $('#web_push').modal('show');
          }
        });
        /* Disable popup for 1 day. if user not interested for notification. */
        $('.webpush-disable').click(function () {
          /* Number of days (1 here) to expair cookie. */
          $.cookie("firebasednd", 1, {expires: 1, path: '/', domain: document.domain});
        });
        /* Redirect to notification enable secure page. */
        $('.webpush-enable').click(function () {
          window.location.href = 'https://' + document.domain + '/subscribe_newsletter/subscribe';
        });

        function checkBrowser() {
          var sBrowsers = {};
          var a = navigator.userAgent.toString().toLowerCase(), tempMatch = '';

          sBrowsers.chrome = /chrome/.test(a) && /webkit/.test(a) && !/edge/.test(a);
          sBrowsers.firefox = /mozilla/.test(a) && /firefox/.test(a);
          sBrowsers.msie = /msie/.test(a) || /trident/.test(a) || /edge/.test(a);
          sBrowsers.safari = /safari/.test(a) && /applewebkit/.test(a) && !/chrome/.test(a);
          sBrowsers.version = '';

          for (b in sBrowsers) {
            if (sBrowsers[b]) {
              tempMatch = a.match(new RegExp("(" + (b === "msie" ? "msie|edge" : b) + ")( |\/)([0-9]+)"));
              if (tempMatch) {
                sBrowsers.version = tempMatch[3];
              } else {
                tempMatch = a.match(new RegExp("rv:([0-9]+)"));
                sBrowsers.version = tempMatch ? tempMatch[1] : "";
              }
              break;
            }
          }
          return sBrowsers;
        }
      });
    }
  };
})(jQuery);
;
jQuery(document).ready(function() {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (isChrome) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
        var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        recognition.grammars = speechRecognitionList;
        recognition.continuous = false;
        recognition.lang = 'mr-IN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 0;

        var diagnostic = document.querySelector('.output');
        var bg = document.querySelector('html');
        var hints = document.querySelector('.hints');


        jQuery(".voice-search").click(function() {

            recognition.start();
            jQuery.colorbox({ width: "300px", height: '310px', html: '<center><img src="https://www.ubermetrics-technologies.com/wp-content/uploads/VOICE.gif" alt="Avatar" style="width:200px"></center><center><h2>बोलून बातमी शोधा</h2></center>' });

        });



        recognition.onresult = function(event) {

            var color = event.results[0][0].transcript;
            jQuery.colorbox({ html: color })
            location.href = "/search?search_api_views_fulltext=" + color;
        }

        recognition.onspeechend = function() {
            recognition.stop();

        }

        recognition.onnomatch = function(event) {
            jQuery.colorbox({ html: "<h1>Please try again<h1>" });
        }

        recognition.onerror = function(event) {
            jQuery.colorbox({ html: event.error });
        }
    } else {
        jQuery(".voice-search").remove();
    }
});;
