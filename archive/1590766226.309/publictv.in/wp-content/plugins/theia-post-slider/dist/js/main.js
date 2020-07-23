var tpsObjects = [];

// Deprecated. Use tpsObjects instead.
var tpsInstance = null;

jQuery(function ($) {
    $(document).ready(function () {
        $('[data-theiaPostSlider-sliderOptions]').each(function () {
            if ($(this).attr('data-theiaPostSlider-loaded')) {
                return;
            }
            $(this).attr('data-theiaPostSlider-loaded', 'true');

            var o = {};

            o.definitionElement = $(this);
            o.sliderOptions = JSON.parse(o.definitionElement.attr('data-theiaPostSlider-sliderOptions'));
            o.onChangeSlide = JSON.parse(o.definitionElement.attr('data-theiaPostSlider-onChangeSlide'));

            $(document).bind('theiaPostSlider.changeSlide', function (event, slideIndex) {
                eval(o.onChangeSlide);
            });

            o.tpsInstance = new tps.createSlideshow(o.sliderOptions);

            if (tpsObjects.length == 0) {
                tpsInstance = o.tpsInstance;
            }

            tpsObjects.push(o);
        });
    });
});