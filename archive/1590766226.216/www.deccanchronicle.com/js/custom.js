/* Promotion Code */
var promotionON = true;
var gotPromo = false;
$(function() {
    $('a').on('reached', function() {
        if( $(this).attr('id') == 'end-of'){
            if(promotionON && $('a.callout-container p').html()==''){
            getPromotion();}else{$(".callout").show();}
        }
    });
    $('a').on('reachedNo', function() {
        if( $(this).attr('id') == 'end-of' ){
            $(".callout").hide();
        }
    });
    $(document).on('scroll', function() {
        $('a').each(function() {
            var wt = $(window).scrollTop();
            var at = $(this).position().top;
            var dt = at - wt;
			var maxIs=400;//bottom
			var minIs=300;//top
			//console.log('isMobile'+isMobile);
			if(isMobile==1){maxIs=800;minIs=600;}
            if(promotionON && dt >= -maxIs && dt < window.innerHeight-minIs){
			//console.log(dt);
                $(this).trigger('reached');     
                }else{
                $(this).trigger('reachedNo');   
                }
        });
    });
})

function getPromotion() {
  var flickerAPI = "/dis_static/promotionStoryJson.php";
  if(!gotPromo){
  $.getJSON(flickerAPI)
    .done(function( data ) {
    randomValue = Math.floor((Math.random() * data.length) + 0);
        $('a.callout-container' ).attr( "href", "/"+data[randomValue].link+"?utm_source=slidePromotion&utm_medium=slide&utm_campaign=slides" );
        $('a.callout-container img' ).attr( "src", ""+data[randomValue].image );
        $('a.callout-container p').html(data[randomValue].title.substring(0,100));
        $(".callout").show();
		gotPromo=true;
    });
  }
}
/* Promotion Code <*/
