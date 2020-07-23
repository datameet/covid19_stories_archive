$(document).ready(function (){
	// latest-stories
  $(".widget-post-content h1").text(function(index, currentText) {
    if (currentText.length > 120) {
      return currentText.substr(0, 120) + ' ...'; }
    }
  );
  $(".widget-post-content p").text(function(index, currentText) {
    if (currentText.length > 300) {
      return currentText.substr(0, 300) + ' ...'; }
    }
  );
  $(".t-small-txt h2").text(function(index, currentText) {
    if (currentText.length > 40) {
      return currentText.substr(0, 40) + ' ...'; }
    }
  );
  $(".widget0_1-three-txt h3").text(function(index, currentText) {
    if (currentText.length > 100) {
      return currentText.substr(0, 100) + ' ...'; }
    }
  );

  // six-horizontal-articles
  $(".w02-post p").text(function(index, currentText) {
    if (currentText.length > 115) {
      return currentText.substr(0, 115) + ' ...'; }
    }
  );

  // six-articles-with-ad
  $(".widget05-txt h2").text(function(index, currentText) {
    if (currentText.length > 70) {
      return currentText.substr(0, 70) + ' ...'; }
    }
  );
  $(".widget05-txt p").text(function(index, currentText) {
    if (currentText.length > 95) {
      return currentText.substr(0, 95) + ' ...'; }
    }
  );
  $(".related-post-txt h3").text(function(index, currentText) {
    if (currentText.length > 90) {
      return currentText.substr(0, 90) + ' ...'; }
    }
  );

  // six-articles
  $(".widget04-txt h2").text(function(index, currentText) {
    if (currentText.length > 90) {
      return currentText.substr(0, 90) + ' ...'; }
    }
  );
  $(".wid04-r-post-txt h2").text(function(index, currentText) {
    if (currentText.length > 50) {
      return currentText.substr(0, 50) + ' ...'; }
    }
  );
  $(".wid04-r-post-txt p").text(function(index, currentText) {
    if (currentText.length > 45) {
      return currentText.substr(0, 45) + ' ...'; }
    }
  );
  $(".widget04-txt p").text(function(index, currentText) {
    if (currentText.length > 120) {
      return currentText.substr(0, 120) + ' ...'; }
    }
  );
  $(".related-post-txt h3").text(function(index, currentText) {
    if (currentText.length > 200) {
      return currentText.substr(0, 200) + ' ...'; }
    }
  );

  // category-video-sliders
  $(".v-widget-item-txt h2").text(function(index, currentText) {
    if (currentText.length > 110) {
      return currentText.substr(0, 110) + ' ...'; }
    }
  );
  $(".video-item-txt h3").text(function(index, currentText) {
    if (currentText.length > 60) {
      return currentText.substr(0, 60) + ' ...'; }
    }
  );
  $(".slid-item-txt h3").text(function(index, currentText) {
    if (currentText.length > 75) {
      return currentText.substr(0, 75) + ' ...'; }
    }
  );
  $(".wid07-post-txt h2").text(function(index, currentText) {
    if (currentText.length > 75) {
      return currentText.substr(0, 75) + ' ...'; }
    }
  );

  // four-articles
  $(".wid11-content-area h2").text(function(index, currentText) {
    if (currentText.length > 80) {
      return currentText.substr(0, 80) + ' ...'; }
    }
  );
  $(".wid11-content-area p").text(function(index, currentText) {
    if (currentText.length > 150) {
      return currentText.substr(0, 150) + ' ...'; }
    }
  );
  $(".sports-rel-post-txt h2").text(function(index, currentText) {
    if (currentText.length > 80) {
      return currentText.substr(0, 80) + ' ...'; }
    }
  );

  // article-template
  $("p.line-limit").text(function(index, currentText) {
    if (currentText.length > 65) {
      return currentText.substr(0, 65) + ' ...'; }
    }
  );

  // category-template
  $(".title-p h4").text(function(index, currentText) {
    if (currentText.length > 1100) {
      return currentText.substr(0, 110) + ' ...'; }
    }
  );

  // category-template
  // $(".category-txt-content h4").text(function(index, currentText) {
  //   if (currentText.length > 60) {
  //     return currentText.substr(0, 60) + ' ...'; }
  //   }
  // );

  // category-template
  $(".category-txt-content p").text(function(index, currentText) {
    if (currentText.length > 200) {
      return currentText.substr(0, 200) + ' ...'; }
    }
  );

  // photo-gallery-title
  $(".photo-info a h2").text(function(index, currentText) {
    if (currentText.length > 30) {
      return currentText.substr(0, 30) + ' ...'; }
    }
  );

  // big-photo-gallery-title
  $(".big-frame a h2").text(function(index, currentText) {
    if (currentText.length > 100) {
      return currentText.substr(0, 100) + ' ...'; }
    }
  );

  // else-post-limit
  $(".else-post-title a h2").text(function(index, currentText) {
    if (currentText.length > 50) {
      return currentText.substr(0, 50) + ' ...'; }
    }
  );


  $(".wid06-rel-txt h2").text(function(index, currentText) {
    if (currentText.length > 60) {
      return currentText.substr(0, 60) + ' ...'; }
    }
  );
  
  $(".wid06-rel-txt h4").text(function(index, currentText) {
    if (currentText.length > 60) {
      return currentText.substr(0, 60) + ' ...'; }
    }
  );

  $(".widget01-three-txt h3").text(function(index, currentText) {
    if (currentText.length > 50) {
      return currentText.substr(0, 50) + ' ...'; }
    }
  );
  
  $(".wid12-post-txt h2").text(function(index, currentText) {
    if (currentText.length > 75) {
      return currentText.substr(0, 75) + ' ...'; }
    }
  );

  $(".last-sec-title h4").text(function(index, currentText) {
    if (currentText.length > 25) {
      return currentText.substr(0, 25) + ' ...'; }
    }
  );

});

$(document).ready(function (){
  if ($(window).width() < 480 || $(window).height() < 600) {
    $(".wid04-r-post-txt h2").text(function(index, currentText) {
      if (currentText.length > 20) {
        return currentText.substr(0, 20) + ' ...'; }
      }
    );
    $(".wid04-r-post-txt p").text(function(index, currentText) {
      if (currentText.length > 20) {
        return currentText.substr(0, 20) + ' ...'; }
      }
    );
  };
});

$(".five-veritcal-articles-row .related-post-txt h3").text(function(index, currentText) {
  if (currentText.length > 65) {
     return currentText.substr(0, 65) + '...'; }
  }
);
$(".one-to-six-large-card .content-div p").text(function(index, currentText) {
   if (currentText.length > 80) {
     return currentText.substr(0, 80) + ' ...'; }
   }
 );

// $(document).ready(function(){
//   $("ul.nav li a").click(function() {
//     $('html, body').animate({
//       scrollTop: $("#tab-element").offset().top - 45
//     }, 500);
//   });
// });
