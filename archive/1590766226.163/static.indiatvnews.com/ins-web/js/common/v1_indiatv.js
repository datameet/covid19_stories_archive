function slideShow() {
  // '*' to work with any element, not only 'li's
  this.slides = $('#slideshow > *');
  this.count = this.slides.length - 1;
  this.initslide = 0;
  this.auto = null;

  this.selectTitles();
  this.ActivateAuto();
}

slideShow.prototype.selectTitles = function () {
  var that = this;
  // $('#slideshow-wrapper').append('<select></select>');        
};

slideShow.prototype.nextSlide = function () {
  this.initslide = (this.initslide++ >= this.count) ? 0 : this.initslide++;
  this.animateSlide();
  //console.log(this.initslide);
};

slideShow.prototype.animateSlide = function () {
  var currentSlide = this.initslide;
  var nextSlide = ((currentSlide + 1) > this.count) ? 0 : currentSlide + 1;
  var prevSlide = ((currentSlide - 1) < 0) ? this.count - 1 : currentSlide - 1;

  $('#slideshow > *').removeClass().not($('#slideshow > *').filter(function (index) {
    return index === currentSlide || index === nextSlide || index === prevSlide;
  })).addClass('left');
  $('#slideshow > *:eq(' + prevSlide + ')').addClass('left');
  $('#slideshow > *:eq(' + nextSlide + ')').addClass('right');
  $('#slideshow > *:eq(' + currentSlide + ')').addClass('front');

//Animate Dropdown menu
  //$('select option').removeAttr("selected");
  //$('select option:eq('+currentSlide+')').prop('selected',true);
};

slideShow.prototype.ActivateAuto = function () {
  var that = this;
  this.animateSlide();
  this.auto = window.setInterval(function () {
    that.nextSlide();
  }, 5000);
};
$(document).ready(function () {
      $.getJSON("https://getapi.indiatvnews.com/events/coronavirus/covid16-cases-live.json", function (result) {
          if (result.length > 0) {
              var content = '';
              $.each(result, function (i, field) {
                  content += '<li class="right"><h4 class="label">Covid-19</h4><span class="country-name">' + field.country_name + '</span><span class="patient-num">' + field.patient_count + '</span></li>';
              });              
              $('#slideshow').html(content);
               new slideShow();
          }

      });
      $('.close-ad-click').click(function () {
        $('#slideshow-wrapper').hide();
      });
  });