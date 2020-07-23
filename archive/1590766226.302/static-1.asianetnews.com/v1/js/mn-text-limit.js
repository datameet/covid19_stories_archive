$(document).ready(function (){
	$(".m1-wid01-item-txt h4").text(function(index, currentText) {
    if (currentText.length > 60) {
      return currentText.substr(0, 60) + ' ...'; }
    }
  );
	$(".carousel.slide .item h2").text(function(index, currentText) {
    if (currentText.length > 90) {
      return currentText.substr(0, 90) + ' ...'; }
    }
  );
	$(".carousel.slide .item p").text(function(index, currentText) {
    if (currentText.length > 230) {
      return currentText.substr(0, 230) + ' ...'; }
    }
  );
	$(".latest-video-content h3").text(function(index, currentText) {
    if (currentText.length > 110) {
      return currentText.substr(0, 110) + ' ...'; }
    }
  );
	$(".myvideo-post-txt h3").text(function(index, currentText) {
    if (currentText.length > 60) {
      return currentText.substr(0, 60) + ' ...'; }
    }
  );
	$(".m1-wid04-txt h3").text(function(index, currentText) {
    if (currentText.length > 85) {
      return currentText.substr(0, 85) + ' ...'; }
    }
  );
	$(".m1-wid04-txt p").text(function(index, currentText) {
    if (currentText.length > 150) {
      return currentText.substr(0, 150) + ' ...'; }
    }
  );
	$(".m1-wid04-items-txt h3").text(function(index, currentText) {
    if (currentText.length > 60) {
      return currentText.substr(0, 60) + ' ...'; }
    }
  );
	$(".m1-wid06-post h3").text(function(index, currentText) {
    if (currentText.length > 70) {
      return currentText.substr(0, 70) + ' ...'; }
    }
  );
	$(".m1-wid07-txt h2").text(function(index, currentText) {
    if (currentText.length > 60) {
      return currentText.substr(0, 60) + ' ...'; }
    }
  );
	$(".m1-wid07-txt p").text(function(index, currentText) {
    if (currentText.length > 360) {
      return currentText.substr(0, 360) + ' ...'; }
    }
  );
	$(".m1-widget07-post-txt h3").text(function(index, currentText) {
    if (currentText.length > 60) {
      return currentText.substr(0, 60) + ' ...'; }
    }
  );
	$(".m1-wid08-txt h2").text(function(index, currentText) {
    if (currentText.length > 60) {
      return currentText.substr(0, 60) + ' ...'; }
    }
  );
	$(".m1-wid08-related-txt h3").text(function(index, currentText) {
    if (currentText.length > 70) {
      return currentText.substr(0, 70) + ' ...'; }
    }
  );
  $(".title-p p").text(function(index, currentText) {
    if (currentText.length > 120) {
      return currentText.substr(0, 120) + ' ...'; }
    }
  );
  $("#limit-sel .x-title-p span.new-cont p").text(function(index, currentText) {
    if (currentText.length > 260) {
      return currentText.substr(0, 260) + '...'; }
    }
  );
  $(".sr-article-title").text(function(index, currentText) {
    if (currentText.length > 300) {
      return currentText.substr(0, 300) + ' ...'; }
    }
  );
  $(".sr-content p").text(function(index, currentText) {
    if (currentText.length > 150) {
      return currentText.substr(0, 150) + ' ...'; }
    }
  );
  $(".m1-wid06-post p").text(function(index, currentText) {
    if (currentText.length > 160) {
      return currentText.substr(0, 160) + ' ...'; }
    }
  );
  
});


$(document).ready(function (){
  if ($(window).width() < 992 || $(window).height() < 1000) {
    // category-template
    $(".title-p h4").text(function(index, currentText) {
      if (currentText.length > 60) {
        return currentText.substr(0, 60) + ' ...'; }
      }
    );
  };

  if ($(window).width() < 480 || $(window).height() < 480) {

    $("#limit-sel .x-title-p span.new-cont p").text(function(index, currentText) {
      if (currentText.length > 80) {
        return currentText.substr(0, 80) + '...'; }
      }
    );

    $(".sr-article-title").text(function(index, currentText) {
      if (currentText.length > 30) {
        return currentText.substr(0, 85) + ' ...'; }
      }
    );
    $(".sr-content p").text(function(index, currentText) {
      if (currentText.length > 60) {
        return currentText.substr(0, 60) + ' ...'; }
      }
    );

  };
});
