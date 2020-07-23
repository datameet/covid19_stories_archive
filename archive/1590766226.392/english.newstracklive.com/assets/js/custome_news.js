$(function(){

var host="https://"+document.location.hostname+'/';

	$("#login").click(function(e){

    e.preventDefault();

    var error="false"; 

    var mobile =$("#mobile").val();
    var password =$("#password").val();

    if(mobile==""){

    	error="true";

    }

    if(password==""){

    	error="true";

    }

    //var login="login";



   

    if(error!="true"){

    	$.ajax({

    		url :host+'ajax/ajax.php',

    		type: "POST",

    		data : {mobile:mobile,password:password,login:"login"},

    		success:function(data){

    			if(data==0){
                    
                    $("#login_result").html("<p class='text-success'>successfully login</p>");

    				setTimeout(function(){ window.location.reload(); },3000);
    				

    			}else{

    			$("#login_result").html("<p class='text-warning'>plese check mobile and password</p>");

    			}

    		}





    	})

    }

   

  });


 $("#register").click(function(e){

        e.preventDefault();

        var error=false;

        var fname=$("#fname").val();

        var contact=$("#contact").val();

        var password=$("#passwords").val();

           if(contact==""){
            error=true
        }else if(!contact.match(/^\d+/) && contact.length!=10){
        	 $("#regiserform #result").html('<p class="text-warning">contact number only numeric and 10 digit</p>');

            error=true
        }
        if(fname==""){
            error=true
        }
        if(passwords==""){
            error=true
        }

        

         if($("#captcha").val()!=""){

            var captcha=$("#captcha").val();

            $.ajax({

                url :host+'ajax/ajax.php',

                type: "POST",

                data : {captcha:captcha,captcha_check:"captcha"},

                success:function(data){

                    item=JSON.parse(data);

                    if(item.error){

                        $("#error_captcha").html('<p class="text-warning">'+item.msg+'</p>');

                        error=true;

                    }else{

                        $("#error_captcha").html('');

                    }

                }    

            });    

        }else{
            error=true;

        }

        

        

        if(!error){

            $.ajax({

                url :host+'ajax/ajax.php',

                type: "POST",

                data : {fname:fname,contact:contact,password:password,register:"register"},

                success:function(data){

                    item=JSON.parse(data);

                    /*console.log(item.error);*/

                    console.log(data);



                    if(item.error==true){

                        $("#regiserform #result").html('<p class="text-warning">'+item.msg+'</p>');

                    }else{

                        $("#regiserform #result").html('<p class="text-success">'+item.msg+'</p>');



                        setTimeout(function(){$("#myModal3").modal();$("#myModal2").modal('hide');},3000);

                        

                    }

                   

                }





            })

        }else{
            $("#regiserform #result").html('<p class="text-warning">All field Required </p>');
        }    

        

    });
   



    $("#getregister").click(function(e){

        e.preventDefault();

        var error=false;

        var otp=$("#otp").val();

        if(otp==""){

            $("#otp").css("border","5px solid red");

            error=true;



        }else{

            $("#otp").css("border","");

        }





        if(!error){

           $.ajax({

                url :host+'ajax/ajax.php',

                type: "POST",

                data : {otp:otp, getregister:"getregister"},

                success:function(data){

                    item=JSON.parse(data);

                  //  console.log(item.error);





                    if(item.error==true){

                        $("#myModal3 #result").html('<p class="text-warning">'+item.msg+'</p>');

                    }else{

                        $("#regiserform #result").html('<p class="text-success">'+item.msg+'</p>');



                        setTimeout(function(){ window.location.href=host;},2000);

                        

                    }

                   

                }





            }) 

        }



    });



	$(".mr_updateprofile").on("change" , "#state", function(){ 

		



		var state=$(this).val();

		$.ajax({

    		url :host+'ajax/ajax.php',

    		type: "POST",

    		data : {state:state,search_city:"city"},

    		success:function(data){

    			

    			$("#city").html(data);

    		}





    	})

	}); 

/*	$("#state").change(function(){

		console.log("dfa"); 

	});*/



	$("#image_update").on("change",function(event){

		//console.log("asdf");

		event.preventDefault();
		
		$.ajax({
    		url :host+'ajax/ajax.php',
			type: "POST",
            data: new FormData(this),
			contentType: false,
			cache: false,
			processData: false,
			success:function(data){
				$("#profile_img").attr("src",data); 
			}
            })

	})

	

	$(".mr_updateprofile").on("change","#showrow", function(){

		var url="http://"+document.location.host+document.location.pathname;

		

		var val=$(this).val();

		window.location.href=url+"?row="+val

	})



    $(".newsupload").on("submit",function(event){

        event.preventDefault(); 

        console.log($(this).serialize());

    })

      $("#state_category").on("change","#state_news",function(){
        var stateid=$(this).val();
        console.log(stateid);
       $.ajax({
            url :host+'/ajax/ajax.php',
            type: "POST",
            data : {stateid:stateid,getnews:"getnews"},
            success:function(data){
                 item=JSON.parse(data);
                 console.log(item);
                $("#get_state_news").html(item.getdata); 
                $('.owl-carousel').owlCarousel({
                     autoPlay: false, //Set AutoPlay to 3 seconds
                     navigation: true,
                     pagination: false,
                     items: 3,
                     itemsDesktop: [1199,
                         3
                     ],
                     itemsDesktopSmall: [
                         979, 2
                     ],
                     itemsTablet: [768, 2],
                     itemsMobile: [479, 1],
                 });                
                $("#city_news").html(item.city);
            }


        })

      
    })

    $("#state_category").on("change","#city_news",function(){
        var stateid=$("#state_news").val();
        var cityid=$(this).val();
        console.log(stateid+cityid);
       $.ajax({
            url :host+'/ajax/ajax.php',
            type: "POST",
            data : { cityid:cityid,stateid:stateid,getnews:"getnews"},
            success:function(data){
                 item=JSON.parse(data);
                 console.log(item);
                $("#get_state_news").html(item.getdata); 
                $('.owl-carousel').owlCarousel({
                     autoPlay: false, //Set AutoPlay to 3 seconds
                     navigation: true,
                     pagination: false,
                     items: 3,
                     itemsDesktop: [1199,
                         3
                     ],
                     itemsDesktopSmall: [
                         979, 2
                     ],
                     itemsTablet: [768, 2],
                     itemsMobile: [479, 1],
                 });   
                $("#city_news").html(item.city);
            }


        })

      
    })

    $("#forgot").click(function(event){
         event.preventDefault();
         var error=false;
         var mobile=$("#usermobile").val();
            if(mobile==""){     
                $("#usermobile").css("border","2px solid red");
                error =true;
            }
            if(error!=true){
                $.ajax({
                        url :host+'/ajax/ajax.php',
                        type: "POST",
                        data : { mobile:mobile,forgot:"forgot"},
                        success:function(data){
                             item=JSON.parse(data);
                             if(item.error){
                                $("#forgot_msg").html("<p class='text-warning'>"+item.msg+"<p>");
                             }else{
                                $("#forgot_msg").html("<p class='text-success'>"+item.msg+"<p>");
                             }

                        }


                })
            }
    });
	
	$("#subscribe").submit(function(event){
         event.preventDefault();
         var error=false;
         var email=$("#subemail").val();
		 
            if(email==""){     
                $("#subemail").css("border","2px solid red");
                error =true;
            }else{
              $("#subemail").css("border","1px solid ");
            }
			
           if(error!=true){
                $.ajax({
                        url :host+'/ajax/ajax.php',
                        type: "POST",
                        data : { email:email,subscribe:"subscribe"},
                        success:function(data){
                          console.log(data);
                            item=JSON.parse(data);
                            $(".subcribe_msg").show();
                            if(item.error){
                              console.log(item);
                                $(".subcribe_msg").html("<p class='text-warning'>"+item.msg+"<p>");
                            }else{
                              console.log(item);
                                $(".subcribe_msg").html("<p class='text-success'>"+item.msg+"<p>");
                            }

                            setTimeout(function(){$(".subcribe_msg").hide()},4000);
                        }


                })
            }
    });

    $(".search_by").click(function(){
        var search_by=$(this).val();
            if(search_by=="Category"){
                $("#catdis").css("display","block");
                $("#catdis select").attr("required","");
                $("#tagdis").css("display","none");
                $("#tagdis input").removeAttr("required");
            }else if(search_by=="Tag"){
                $("#catdis").css("display","none");
                $("#catdis select").removeAttr("required");
                $("#tagdis").css("display","block");
                $("#tagdis input").attr("required","");
            }else{
                $("#catdis").css("display","block");
                $("#catdis select").attr("required","");
                $("#tagdis").css("display","block");
                $("#tagdis input").attr("required","");
            }
     })

    $(".nt-video-black").on("click",".YTvideo",function(event){
        event.preventDefault();
        var link = $(this).attr("data-url");
        $("iframe#iframe").attr("src",link);
        console.log(link);
        
    });
})	

