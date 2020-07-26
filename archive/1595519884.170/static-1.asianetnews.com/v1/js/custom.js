$(document).ready(function(){
  $( ".details-article-div" ).append( $( "<div class='col-md-12'><button class='show-article' >Show Full Article</button></div>" ) );
  $(".PostBody").addClass("mobile-article").attr("id", "first-article") ;
  $(".show-article").click(function(){
    $("#first-article").css({
      'height': '100%'
    });
    $(".PostBody").removeClass("readmoreOpacity");
  });
  $(".show-article").click(function(){
    $(this).addClass("hidden");
  });

  if(screen.width > 576) {addPromoImg()};
});

$(document).ready(function(){
  $( ".toggle-menu" ).on( 'click', function() {
    $( ".more-menu" ).toggleClass( "show" );
  });
  $( ".search-icon" ).on( 'click', function() {
    $( ".mobile-search" ).toggleClass( "hide" );
  });
});

$(document).ready(function() {

  $('.owl-carousel.videogbg-owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: 10000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      440: {
        items: 2
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  $( ".latest-video-post-slider .owl-prev").html('<img src="https://static.asianetnews.com/v1/images/left-v1-white-arrow.png" class="img-responsive" alt="left arrow icon">');
  $( ".latest-video-post-slider .owl-next").html('<img src="https://static.asianetnews.com/v1/images/right-v1-white-arrow.png" class="img-responsive" alt="right arrow icon">');


  $('.owl-carousel.pvideo-owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: 10000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      440: {
        items: 2
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  $( ".owl-prev").html('<img src="https://static.asianetnews.com/v1/images/left-v1-arrow.png" class="img-responsive" alt="left arrow icon">');
  $( ".owl-next").html('<img src="https://static.asianetnews.com/v1/images/right-v1-arrow.png" class="img-responsive" alt="right arrow icon">');


  $('.owl-carousel.review-owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: 10000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      440: {
        items: 2
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  })
  $( ".owl-prev").html('<img src="https://static.asianetnews.com/v1/images/left-v1-arrow.png" class="img-responsive" alt="left arrow icon">');
  $( ".owl-next").html('<img src="https://static.asianetnews.com/v1/images/right-v1-arrow.png" class="img-responsive" alt="right arrow icon">');


  $('.one-to-six-articles-greybg .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: 10000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      440: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
  $( ".owl-prev").html('<img src="https://static.asianetnews.com/v1/images/left-v1-arrow.png" class="img-responsive" alt="left arrow icon">');
  $( ".owl-next").html('<img src="https://static.asianetnews.com/v1/images/right-v1-arrow.png" class="img-responsive" alt="right arrow icon">');
  $( ".one-to-six-articles-greybg .parent-flex .latest-video-post-slider .owl-prev").html('<img src="https://static.asianetnews.com/v1/images/left-v1-white-arrow.png" class="img-responsive" alt="left arrow icon">');
  $( ".one-to-six-articles-greybg .parent-flex .latest-video-post-slider .owl-next").html('<img src="https://static.asianetnews.com/v1/images/right-v1-white-arrow.png" class="img-responsive" alt="right arrow icon">');



  //Delhi Elections - 2020
  function removeElectionArticlesFromDOM () {
    var parent = $('.article-listby-cateogry-comp');
    var children = parent.find('.owl-stage').children('.owl-item');
    var owlDowts = parent.find('.owl-dots').children();
    if(children.length > 0) {
      for(var i = 0; i < children.length; i++) {
        if(i > 4) {
          children[i].remove()
        }
      }
    }
    if(owlDowts.length > 0) {
      for(var j = 0; j < owlDowts.length; j++) {
        if(j > 4) {
          owlDowts[j].remove()
        }
      }
    }
  }

  //Delhi Elections - 2020
  function removeElectionArticlesFromDOM () {
    var parent = $('.article-listby-cateogry-comp');
    var children = parent.find('.owl-stage').children('.owl-item');
    if(children.length > 0) {
      for(var i = 0; i < children.length / 2; i++) {
        if(i > 4) {
          if('#sliderComp01') {
            $('#sliderComp01').trigger('remove.owl.carousel',i).trigger('refresh.owl.carousel');
          }
        }
      }
    }

  }
  if($(window).width() > 414) {
    removeElectionArticlesFromDOM ();
  }

$('#sliderComp01.owl-carousel').owlCarousel({
    onDragged: sliderCallback
});
function sliderCallback(event) {
  console.log('callback trigerred!')
}


});
/*Covid19-Category Widget*/
function initCategoryWidget(htmlUrl){
  if(htmlUrl !== "" || htmlUrl !== undefined) {
      $.ajax({
        url: htmlUrl,
        type:"get",
        dataType: 'text',
        crossDomain: true,
        success:function(data){
          $('.2-tabs-data').empty().append(data);

        },
        error: function(error){
          console.log("error text:  ", error)
        }
      });
    }
}

function addPromoImg(){
  var dtopUrl = "https://static.asianetnews.com/v1/sales-camp/square-yards/squareyardslogo.png";
  var img = document.createElement('img');
  img.src = dtopUrl;
  img.classList.add("promo-class");

  if(document.querySelector('.main-menu .RealEstate a')) {
    document.querySelector('.main-menu .RealEstate a').appendChild(img);
    document.querySelector('.main-menu .RealEstate a').setAttribute("title", "Square Yards");
  }
}
