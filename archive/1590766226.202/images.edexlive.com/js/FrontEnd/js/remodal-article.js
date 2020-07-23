$(function() {
	date_time('current_time');
	if(call_active_menu==1){ // calling Breadcrumb here
	  $('.navbar-nav li').removeClass('active');
		$('.navbar-nav li').removeClass('active');
		if ($('#tab'+Section_id).length) {
		$('#tab'+Section_id).addClass('active');
		}else if ($('#tab'+PSection_id).length) {
		$('#tab'+PSection_id).addClass('active');
		}else{
		$('#tab'+GPSection_id).addClass('active');
		}
	}
    if(call_otherstories==1){ // calling Right Side Other stories here
	$.ajax({
	  url			: base_url+'user/commonwidget/get_rightside_stories',
	  method		: 'post',
	  dataType: 'html',
	  data : {section: Section_id, mode: view_mode, type:2, contentid : content_id},
	  success:function(response){
	  $("#other_stories_right").html(response);
	  }
	  });
	}
	//if(content_from=="live"){
	$(window).scroll(function(){
	/* when reaching the element with id "keywordline" we want to show the slidebox. Let's get the distance from the top to the element */
	var distanceTop = $('#keywordline').offset().top - $(window).height();
	if ($(window).scrollTop() > distanceTop)
	{
	if (document.getElementById('topover').style.display != 'block')
	{	$('#slidebox').animate({'left':'0px'},800);
	}
	else
	{
	document.getElementById('topover').style.visibility = 'visible';
	}
	}	else {
	document.getElementById('topover').style.visibility = 'hidden';
	$('#slidebox').stop(true).animate({'left':'-530px'},700);	}
	});
	$(document).on('click', '#slidebox .slide-close', function()
   {   //$('#slidebox .slide-close').click(function(){
	$('#slidebox').stop(true).animate({'left':'-530px'},10);	document.getElementById('topover').style.display = 'block';
	document.getElementById('topover').style.visibility = 'visible';
	document.getElementById('topover').onclick = function()
	{
	document.getElementById('topover').style.display = 'none';
	$('#slidebox').animate({'left':'0px'},800);
	}
	});
   //}

if(content_type_id==1){	
	 /************************************* Article Type Start *******************************************/
	$('.AticleImg').click(function () {
    $(".AticleImg").toggleClass('open_image');
	if(content_from=="live"){
	hit_page_views();
	}
	});
			
    $('#incfont').click(function() {
        $('.ArticleDetailContent p').css("font-size", function() {
   var curSize = parseInt($(this).css('font-size')) + 1 ;
   if(curSize<=25){
            return curSize;
   }
   else{ return $(this).css('font-size','25px'); }
        });
    });
  $('#decfont').click(function() {
        $('.ArticleDetailContent p').css("font-size", function() {
            var curSize = parseInt($(this).css('font-size')) - 1 ;
   if(curSize>=12){
            return curSize;
   }
   else{ return $(this).css('font-size','12px'); }
        });
    });
 $('#resetMe').click(function(){
  $('.ArticleDetailContent p').css('font-size','16px');
 });
 $('#print_article').click(function(){
 	var sOption="toolbar=yes,location=no,directories=yes,menubar=yes,scrollbars=yes,width=900,height=700,left=100,top=25";
   var sWinHTML = $('.printthis').html(); // onclick="printDiv('.printthis');"
   var winprint=window.open("","",sOption);
       winprint.document.open();
       winprint.document.write('<html><head>');
       winprint.document.write('<link rel="stylesheet" href="'+base_url+'css/FrontEnd/css/bootstrap.min.css" type="text/css" />');
       winprint.document.write('<link rel="stylesheet" href="'+base_url+'css/FrontEnd/css/font-awesome.min.css" type="text/css" />');
       winprint.document.write('<link rel="stylesheet" href="'+base_url+'css/FrontEnd/css/style.css" type="text/css" />');
       winprint.document.write('</head><body onload="window.print();">');
       winprint.document.write(sWinHTML);
       winprint.document.write('</body></html>');
       winprint.document.close();
       winprint.focus();
 });
// $("iframe").width('100%');
// $("table").width('100%');
              /************************************* Article Type End *******************************************/
}
else if(content_type_id==3){
             /***************************************** Gallery Type Start **************************************/
  var gallery_url = content_url.split('.html');
localStorage.setItem("galleryurl", gallery_url[0]);
//localStorage.removeItem("galleryurl");
console.log(localStorage.getItem("galleryurl"));
var parseGalleryurl = localStorage.getItem("galleryurl");
$('.slick-next').click(function(){
var currentSlide = $('.GalleryDetailSlide').slick('slickCurrentSlide');
console.log(currentSlide);
var index = currentSlide+1;
$('#gallery_pagination').twbsPagination("show", currentSlide+1);
if(content_from=="live"){
	window.history.pushState('', '', parseGalleryurl+'--'+index+'.html');
	hit_page_views();
	}
});
$('.slick-prev').click(function(){
var currentSlide = $('.GalleryDetailSlide').slick('slickCurrentSlide');
console.log(currentSlide);
if(currentSlide==0){
$('#gallery_pagination').twbsPagination("show", currentSlide+1);
}else{
$('#gallery_pagination').twbsPagination("show", currentSlide+1);
}
var index = currentSlide+1;
if(content_from=="live"){
window.history.pushState('', '', parseGalleryurl+'--'+index+'.html');
hit_page_views();
}
});
var clicked = false;
$("#auto-play").click(function(){
if (clicked) {
$(this).find('i').attr("title", "Play");
$(this).find('i').toggleClass('fa-play fa-pause');
$('.GalleryDetailSlide').slick('slickPause');
$('.GalleryDetailSlide').unbind('beforeChange');
clicked = false;
}
else {
$(this).find('i').attr("title", "Pause");
$(this).find('i').toggleClass('fa-play fa-pause');
$('.GalleryDetailSlide').slick('slickPlay', true);
$('.GalleryDetailSlide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
console.log(nextSlide+1);
$('#gallery_pagination').twbsPagination("show", nextSlide+1);
var index = nextSlide+1;
if(content_from=="live"){
window.history.pushState('', '', parseGalleryurl+'--'+index+'.html');
hit_page_views();
}
});
clicked = true;
}
});
$('.GalleryDetailSlide').on('swipe', function(event, slick, direction){
console.log(direction);
console.log(slick);
if(direction=='left'){
var currentSlide = $('.GalleryDetailSlide').slick('slickCurrentSlide');
console.log(currentSlide);
$('#gallery_pagination').twbsPagination("show", currentSlide+1); 
}else if(direction=='right'){
var currentSlide = $('.GalleryDetailSlide').slick('slickCurrentSlide');
console.log(currentSlide);
if(currentSlide==0){
$('#gallery_pagination').twbsPagination("show", currentSlide+1);
}else{
$('#gallery_pagination').twbsPagination("show", currentSlide+1);
} 
}
var index = currentSlide+1;
if(content_from=="live"){
window.history.pushState('', '', parseGalleryurl+'--'+index+'.html');
hit_page_views();
}
});	
 var image_Index = (parseInt(currentimageIndex) <= TotalIndex)?  parseInt(currentimageIndex) : 1;
 $('#gallery_pagination').twbsPagination({
        totalPages: TotalIndex,
		startPage: parseInt(currentimageIndex),
        visiblePages: 5,
		initiateStartPageClick: false,
		loop: true,
        onPageClick: function (event, page) {
          $('.GalleryDetailSlide').slick('slickGoTo', page-1);
		  if(content_from=="live"){
				  window.history.pushState('', '', parseGalleryurl+'--'+page+'.html');
			   hit_page_views();
			   self.COMSCORE && COMSCORE.beacon({c1: "2", c2: "16833363"});
				//pageview_candidate
				$.ajax({ url: base_url+'pageview_candidate.php', type: 'GET', cache: false, success: function(pv_candidate) {}, error: function() {} });
             }
        }
    });	
                            /***************************************** Gallery Type End **************************************/
}
							/***************************************** Common Script All content type *************************/
   
  
    setTimeout(function(){ update_hits(); }, 3000); // call recent article after 3 seconds
   
    $("[data-toggle=popover]").popover({
	 html: true, 
	 content: function() {
			  return $('.popover-content').html();
			}
	});
	
	$('#popoverId').popover({
	 html: true, 
	 title: 'Share via Email',
	 content: function() {
			  return $('.popover-content').html();
			}
	});
	$('#popoverId').click(function (e) {
	e.stopPropagation();
	});
	$(document).click(function (e) {
	if (($('.popover').has(e.target).length == 0) || $(e.target).is('.close')) {
	$('#popoverId').popover('hide');
	}
	});
	  $("#search-submit").click(function() {
		 var term = $('#srch-term').val();
		 var re = /^[ A-Za-z0-9_@.,#&+-:;'"/]*$/;
		if (term.trim().length==0) {
		$("#srch-term").addClass("error");
		$("#error_throw").addClass("error").text("Please provide search keyword(s)").show();
		return false;
		}
		else if(!re.test(term))
		{
		$("#srch-term").addClass("error");
		$("#error_throw").addClass("error").text("Please enter alphanumeric search keyword(s)").show();
		return false;
		}
		else {
		if(term.trim().length > 200)
		{
		$("#srch-term").addClass("error");
		$("#error_throw").text("Please do not enter more than 200 characters!").show();
		return false;
		}
			return true; 
		}
    }); 
$("#srch-term").keyup(function() {
        $("#error_throw").text(""), $("#srch-term").removeClass("error")
    });

  $("#mobile_search").click(function() {
	 var term = $('#mobile_srch_term').val();
    // var re = /^[ A-Za-z0-9_@.,#&+-:;'"/]*$/;
	if (term.trim().length==0) {
		$("#mobile_srch_term").addClass("error");
		alert("Please provide search keyword(s)!");
		return false;
		}
		/*else if(!re.test(term))
		{
		$("#srch-term").addClass("error");
		$("#error_throw").addClass("error").text("Please enter alphanumeric search keyword(s)").show();
		return false;
		}*/
		else {
		if(term.trim().length > 200)
		{
		$("#mobile_srch_term").addClass("error");
		alert("Please do not enter more than 200 characters!");
		return false;
		}
			$( "#mobileSearchForm" ).submit();
		}
});

      $(".MobileSearch .SearchHide").click(function(){
	  $(".MobileInput").toggle();
	  $(".SearchHide").toggleClass("SearchFade")
	 });
	 
	   
$('#comment_form').submit(function(event) {
	var error_free=true;
	var name = $('input[name=name]').val();
	var email = $('input[name=email]').val();
	var comment = $('textarea#article_comment').val();
	if(name==''){
	$('input[name=name]').addClass('error');
    $('#comment_validate').text('Please enter your name');
	}else if(email=='')
	{
	$('input[name=email]').addClass('error');
	$('#comment_validate').text('Please enter your email address');
	}
	else if(email!='')
	{
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var is_email=re.test(email);
	if(!is_email){
	$('input[name=email]').addClass('error');
	$('#comment_validate').text('Please enter a valid email address');
	}else if(comment==''){
	$('#article_comment').addClass('error');
	$('#comment_validate').text('Please enter your comments');
	}
	else{
	 var url = base_url+'user/commonwidget/post_comment';
	 var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'comment'           : $('textarea#article_comment').val(),
			'content_id'        : $('input[name=content_id]').val(),
			'section_id'        : $('input[name=section_id]').val(),
			'comment_id'        : $('input[name=comment_id]').val(),
			'content_type_id'   : $('input[name=content_type_id]').val(),
			'article_title'     : $('#content_head').text(),
        };
	     $.ajax({
			url			: url,
			method		: 'post',
			data		: formData,
			beforeSend	: function() {				
				 $('#comment_validate').wrapInner('<img style="width:15px"  src="'+base_url+'images/FrontEnd/images/ajax-loader.gif" >');
			},
			success		: function(result){ 
			console.log(result);
				   $('.CloseReply').hide();
				   $('#comment_validate').css('color', 'green').text('Your Comments added Successfully...Waiting For Approval');
				   $('.comment_head').after($('.CommentForm'));
				   setTimeout(function(){ 
				   $('#comment_validate').text('').css('color', 'red');
				   }, 5000);
				    $('form[name="comment_form"]')[0].reset();							
				   }			
		});
	}
	}
		event.preventDefault();
	 });
	 $("textarea,input").keyup(function(){
        $("input,textarea").removeClass("error");
		$('#comment_validate').text('');
    });

    $("#storyContent p:eq(2)").after($('.RelatedArticle').show());
	
	
    var live_url = window.location.href.split('?')[0];
	var bitly_link = bitly_url;
	$('.csbuttons').cSButtons({total : "#total","url" 	: content_url, "bitly_link" : bitly_link});
	
	
	$('.section-content').append($('.NextArticle'));
	$('.NextArticle').show();
    $('.section-content').append($('.Social_Fonts'));
	$('.Social_Fonts').show();
	
    //$('.remodal .SectionContainer').append('<a href="javascript:;" class="remodal-close Close_Openmodal"></a>');
   
   $('.reply').click(function(){
		//$(this).closest('.ArticlePosts').after($('.CommentForm'));
		$(this).closest('li').after($('.CommentForm'));
		$('.CommentForm').addClass('ReplyForm');
		$('#comment_id').val($(this).attr('data-comment-id'));
		$('.CloseReply').show();
	});
  $('.CloseReply').click(function(){
	   $('.comment_head').after($('.CommentForm'));
	   $('.CommentForm').removeClass('ReplyForm');
	   $('#comment_id').val('');
	   $('.CloseReply').hide();
  });
  $('img[data-src]').lazyLoadXT();
  
  $("#srch-term").keyup(function() {
        $("#error_throw").text(""), $("#srch-term").removeClass("error")
    });
	 $("#submit_newsletter").click(function() {
		 subscribe_newsletter();
	 });
	 $('#newsletter_form').submit(function(e){
		 subscribe_newsletter();
		e.preventDefault(); // Prevent the original submit
	});
	function subscribe_newsletter()
	 {
	  x = document.newsletter_form, email_address = x.email_newsletter.value;
	 if(email_address.trim().length){
	   var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var is_email=re.test(email_address);
	if(is_email){
	  		var formData = {
			'email_newsletter'   : $('[name=email_newsletter]').val(),
        };
		$.ajax({
			url			: base_url+'user/commonwidget/subscribe_newsletter',
			method		: 'post',
			data		: formData,
			beforeSend	: function() {				
			},
			success		: function(result){
			$("#news_error_throw").text(result); $("#news_error_throw").css({"color":"green","float": "left", "width":"233px"});	
			setTimeout(function(){$("#email-newsletter").val('');$("#news_error_throw").text(''); $("#news_error_throw").css("color","");	},2000);
			},
		});
      }else
	  {
		$("#email-newsletter").addClass("error");
		$("#news_error_throw").css("color","red").text("Please provide Valid Email address").show();
	  }
	 }else
	 {
		$("#email-newsletter").addClass("error");
		$("#news_error_throw").css("color","red").text("Please provide Email address").show();
	 }
	 $("#email-newsletter").keyup(function() {
        $("#news_error_throw").text(""); $("#email-newsletter").removeClass("error");
    });
	 }
  
});
function mail_form_validate() {
	var error_free=true;
	var name = $('.popover input[name=sender_name]').val();
	var share_email = $('.popover input[name=share_email]').val();
	var refer_email = $('.popover input[name=refer_email]').val();
	
	if(name==''){
	$('.popover input[name=sender_name]').addClass('error');
	var error_free=false;
	}
	else if(share_email==''){
	$('.popover input[name=share_email]').addClass('error');
	var error_free=false;
	}else if(share_email!=''){
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var is_email=re.test(share_email);
	if(!is_email){
	$('.popover input[name=share_email]').addClass('error');
	var error_free=false;
	}
	else if(refer_email==''){
	$('.popover input[name=refer_email]').addClass('error');
	var error_free=false;
	}else if(refer_email!=''){
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var is_email=re.test(refer_email);
	if(!is_email){
	$('.popover input[name=refer_email]').addClass('error');
	var error_free=false;
	}else{
		var formData = {
			'content_id'        : $('input[name=content_id]').val(),
			'section_id'        : $('input[name=section_id]').val(),
			'content_type_id'   : $('input[name=content_type_id]').val(),
            'name'              : $('.popover input[name=sender_name]').val(),
            'share_email'       : $('.popover input[name=share_email]').val(),
            'refer_email'       : $('.popover input[name=refer_email]').val(),
			'share_content'     : $('#content_head').text(),
			'message'           : $('.popover textarea[name=message]').val(),
			'share_url'         : content_url,
        };
		$.ajax({
			url			: base_url+'user/commonwidget/share_article_via_email',
			method		: 'post',
			data		: formData,
			beforeSend	: function() {				
			$('.popover-title').html('Share Via Email <span><img style="width:15px"  src="'+base_url+'images/FrontEnd/images/ajax-loader.gif" ></span>');
			},
			success		: function(result){
			$('.popover-title').html('Share Via Email');
			$('.popover  #message').after('<span id="share_success" style="color:green;">Mail sent</span>');
            $('form[name="mail_share"]')[0].reset();
			setTimeout(function(){ $('#share_success').hide();$(".popover").removeClass('mail_sharing_open'); }, 5000);
			var mail_share_count= $(".PrintSocial .csbuttons-count:eq(3)").text();
				   if(mail_share_count == ''){
					   var mail_share_count= 0;
				   }else{
				    var mail_share_count = mail_share_count.replace(/[\(\)-]/g, "");
				   }
			$(".PrintSocial .csbuttons-count:eq(3)").text((parseInt(mail_share_count)+1));
			}
			});
		return false;
	}
	}
	}
	
	$("textarea,input").keyup(function(){
        $("input,textarea").removeClass("error");
    });
	   
}
function hit_page_views() {
    try {
        var theUrl = document.location;
        if (typeof(ga) != undefined) {
           // ga('create', 'UA-2311935-30', 'auto');
            ga('send', 'pageview', location.pathname);
        }
    } catch (err) {}
}

function update_hits()
{
	$('.PrintSocial').css('visibility','visible').hide().fadeIn("slow");
	var formData = {
		    'update_emailed_count'        : "article",
			'content_id'        : content_id,
			'section_id'        : $('input[name=section_id]').val(),
			'content_type_id'   : content_type_id,
			'title'             : $('#content_head').text(),
			'share_url'         : content_url,
			'page_param'        : page_param,
			'content_from'      : content_from,
			'article_created'   : $('input[name=article_created_on]').val(),
        };
		$.ajax({
			url			: base_url+'user/commonwidget/update_hits',
			method		: 'post',
			data		: formData,
			dataType    : 'json',
			success		: function(result){
			console.log("hits updated");
			var width = $(window).width();
			if(width >= 320 && width <= 991 || (result.recent_news=="No_News")){
			   $('.recent_news').hide();
			}
			else{
			   $('#topover').after(result.recent_news);
			   //$('.section-content').append($('.recent_news'));
			   $('body').append($('.recent_news'));
			}
			$(".PrintSocial .csbuttons-count:eq(3)").text(parseInt(result.emailed));
			},
		});
}
function date_time(id)
	{
		// Display the time in 24 or 12 hour time?
	    // 0 = 24, 1 = 12
	     var my12_hour = 1;
		date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
		// Set up the hours for either 24 or 12 hour display:
		if (my12_hour) {
			dn = "AM";
			if (h > 12) { dn = "PM"; h = h - 12; }
			if (h == 0) { h = 12; }
		} else {
			dn = "";
		}
		if(d<10)
        {
                d = "0"+d;
        }
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
		result = '';
		result += '<span>'+days[day]+', '+months[month]+', '+d+', '+year+'&nbsp;&nbsp;'+h+':'+m+':'+s+ ' ' +dn+ '</span>';
		if(document.getElementById(id)) {
        document.getElementById(id).innerHTML = result;
		document.getElementById("mobile_date").innerHTML = ''+d+' <span>'+months[month]+'</span> '+year;
		}
        setTimeout('date_time("'+id+'");','1000');
        return true;
	}