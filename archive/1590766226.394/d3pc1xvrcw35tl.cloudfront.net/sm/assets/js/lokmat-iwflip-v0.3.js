(function($) {
    $.fn.lokmatflip = function( options ) {
        var settings = $.extend({
            el_box  : $(this).attr("class"),
            $elem   : $(this),
            interval : 30000,
            width   : 800,
            height : 135,
            backgroundcolor:"#f5f5f5",
            transition_time : "1",
            fadefrom : 0.5,
            fadeTo : 0.5,
            position:"BottomRight", /* "BottomRight","BottomLeft","TopLeft","TopRight","none" (default is "BottomRight")*/
            refContainer : "#headerMain .container",
            containerHtml : "",
            jsonUrl:"",
            jsondata:{},
            isMobile:false,
            isrefresh:false,
            refreshTime:10000,
            response_type:"json",
            enableClose:false,
            showRotationSession:true,

        }, options);

        var bodywidth = window.innerWidth;
        if(settings.width > bodywidth){
            var newWd = bodywidth * 80 / 100;
            settings.width = newWd;
        }
        if(bodywidth < 769){
            settings.isMobile = true;
        } 

        var ajaxTmr = null;
        var tm = null;
        var brws = new Array();
            brws["origin"] = new Array("-webkit-transform-origin","-moz-transform-origin","-ms-transform-origin","-o-transform-origin","transform-origin");
            brws["perspective"] = new Array("-webkit-perspective","-moz-perspective","-ms-perspective","-o-perspective","perspective");
            brws["transition"] = new Array("-webkit-transition","-moz-transition","-ms-transition","-o-transition","transition");
            brws["transform"] = new Array(" -webkit-transform","-moz-transform","-ms-transform","-o-transform","transform");
    

        function create_brws_value(arr,cssvalue){
            var rot = "";
            $(brws[arr]).each(function(k,v){
                rot = rot + v +":"+ cssvalue+"; ";
            });
            return rot;
        }
        
        function create_transform(arr,deg,cssvalue){
            var rot = "";
            $(brws[arr]).each(function(k,v){
                rot = rot + v +":  rotateY("+deg+") translate3d("+cssvalue+");";
            });
            return rot;
        }

        function setPosition(){
            var posStyle = "position:fixed; z-index:99999999;";
            switch(settings.position){
                case "BottomRight": 
                                    if(settings.isMobile){
                                        rpos = 2; 
                                        posStyle = posStyle + "bottom:125px; right:"+rpos+"px; left:auto;";
                                    } else {
                                        var rightpos = document.body.querySelector(settings.refContainer).getClientRects();
                                        rpos = $(window).innerWidth() - rightpos[0]["right"]; 
                                        posStyle = posStyle + "bottom:2px; right:"+rpos+"px; left:auto;";
                                    }
                                    
                                    break;
                case "BottomLeft": posStyle = posStyle + "bottom:2px;";
                                   break;
                case "TopLeft": posStyle = posStyle + "top:2px;";
                                break;
                case "TopRight": posStyle = posStyle + "top:2px; right:0px; left:auto;";
                    break;
                case "none": posStyle = posStyle + "position:relative;";
                            break;
                default: posStyle = posStyle + "bottom:2px; right:0px; left:auto;";
                        break;
            }
            return posStyle;
        }

        function createStyle(){
            var boxpos = setPosition();
            var inpos = settings.width / 2;
            var inpos_minus = -Math.abs(inpos);
            var offstyle = " #"+settings.el_box+".off{bottom:"+ -Math.abs(settings.height+10) +"px;  transition: all 0.5s; }";
            if(settings.isMobile){
                offstyle = " #"+settings.el_box+".off{right:"+ -Math.abs(settings.width+10) +"px;  transition: all 0.5s; }";
            } 

            var tblStyle =  ".tblElectResult *{ }"+
                            ".tblElectResult{width:100%; background:#fff;}"+
                            ".tblElectResult thead{background:#ccc;}"+
                            ".tblElectResult thead th{padding:5px 10px; font-family:Arial, Helvetica, sans-serif; border-radius:5px 5px 0px 0px; }"+
                            ".tblElectResult thead td{font-size:13px; border-top:1px solid #ccc;}"+
                            ".tblElectResult td{padding:5px 10px; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height: normal}"+
                            ".tblElectResult tbody td{border-bottom:1px solid #ccc; border-right:1px solid #ccc;}"+
                            ".tblElectResult tbody td:last-of-type{border-right:0px;}"+
                            ".tblElectResult tbody tr:last-of-type td{border-bottom:0px;}";

            var tblStyle_media =  "@media screen and (max-width:768px){"+
                                ".tblElectResult thead th{font-size:12px; padding:5px 2px;}"+
                                ".tblElectResult thead td{font-size:11px; padding:5px 2px 5px 5px;}"+
                                ".tblElectResult tbody td{font-size:11px; padding:5px 2px; word-wrap:break-word}"+
                                ".tblElectResult tbody td:last-of-type{text-align:center}"+
                                ".tblElectResult tbody td:first-of-type{padding-left:5px}"+
                            "}";



            var stl =   " #"+settings.el_box+"{box-sizing: border-box;}"+
                             offstyle+
                            " #"+settings.el_box+" a:hover {color:#000}"+
                            " #"+settings.el_box+" *{box-sizing: border-box;}"+
                            ".turnBoxFace{padding:0px; height:auto; box-shadow:0px 0px 6px #000; background:#fff; border-radius:5px; overflow: hidden;}"+
                            " #"+settings.el_box+" .turnBoxFace{background-color:"+settings.backgroundcolor+";}"+
                            " #"+settings.el_box+"{" + create_brws_value("transition","all 1000ms ease-in-out 0ms")+create_brws_value("perspective","1300px")+
                                "display: block; position: relative; width: "+settings.width+"px; height:"+settings.height+"px; left: 0;" + boxpos+"}"+
                            " #"+settings.el_box+" > .turnBoxFace{"+ create_brws_value("origin","50% 50%")+
                                "position: absolute; width: 100%; height: 100%; top: 0; left: 0; opacity:0; transition: all "+settings.transition_time+"s; }"+
                            " #"+settings.el_box+" > .turnBoxShow { opacity: 1;}"+
                            " #"+settings.el_box+" .in{"+create_transform("transform","90deg", inpos+"px, 0px, "+inpos+"px")+ "z-index: 10; }"+
                            " #"+settings.el_box+" .view{"+create_transform("transform","0deg", "0px, 0px, 0px")+ "z-index: 20; }"+
                            " #"+settings.el_box+" .out{"+ create_transform("transform","-90deg",inpos_minus+"px, 0px, "+inpos+"px")+
                                 "z-index: 10; opacity:"+settings.fadeTo+"; }" 


            

            stl = "<style id='slidereffect'>"+tblStyle+stl+tblStyle_media+"</style>";

            return stl;
        }

        function create_anim(){
            if($(".turnBoxFace.view").is(':last-child')){
                $(".turnBoxFace:first-child").addClass("tempnext");
            } else{
                $(".turnBoxFace.view").next(".turnBoxFace.in").addClass("tempnext");
            }
            $(".turnBoxFace.view").addClass("tempview");
            var $next = $(".turnBoxFace.tempnext");
            var $cur =  $(".turnBoxFace.tempview");
            $cur.removeClass("view").addClass("out").removeClass("turnBoxShow");
            $next.addClass("view").removeClass("in").addClass("turnBoxShow");
            $(".tempview").removeClass("tempview");
            $(".tempnext").removeClass("tempnext");
            
            setTimeout(function(){
                $(".turnBoxFace.out").css("opacity",0);
                setTimeout(function(){
                    $(".turnBoxFace.out").removeClass("out").addClass("in");
                    $(".turnBoxFace.in").removeAttr("style");
                },1000);
                
            },500);
        }

        
        function create_template(elem,jsondata){
            //var html = "<p style='position:absolute; top:-50px; left:0px; width:100%; height:50px; background:#f00; color:#fff; font-weight:bold;'>Hello</p>";
            var html = "";
            // console.log('#########################    jsondata["row_matches"]');
            //  console.log(jsondata);

            if(settings.response_type == "html"){
                html = jsondata;
                if($(".tempRotator").length > 0){
                    $(".tempRotator").remove();
                }
                $("body").append("<div class='tempRotator' style='display:none'>"+html+"</div>")
                // elem.html("");
                // elem.html($(".tempRotator #rotator").html());
                

                elem
                .promise()
                .then(()=>{
                    elem.html("");
                })
                .then(()=>{
                    elem.html($(".tempRotator #rotator").html());
                    settings.$elem.css({
                        "width": settings.width+"px",
                        "height":settings.height+"px",
                    });
                })
                .then(()=>{
                    if(settings.enableClose){
                        elem.append('<span class="closerotator"></span class="closerotator">');
                    }
                })
                .then(()=>{
                    $(document).on("click",".closerotator",function(){
                        sessionStorage.setItem('CloseRotator',true)
                        elem.remove();
                    });
                })
                .catch(e=>console.log(e));

                console.log("loading html")
                

            }else{
                if(typeof(jsondata["row_matches"]) == "undefined"){console.log("result array not found"); return false;}
                if(jsondata["row_matches"].length == 1){
                    jsondata["row_matches"].push(jsondata["row_matches"][0]);
                }
                for(i=0;i < jsondata["row_matches"].length;i++){
                    if(i == 0){
                        html = html + '<div class="turnBoxFace view turnBoxShow">';
                    } else {
                        html = html + '<div class="turnBoxFace in">';
                    }
                    html = html + '<a href="'+jsondata["clickURL"]+'"><table class="tblElectResult" cellspacing="0">'+
                                '<thead>'+
                                    '<tr>'+
                                        '<th colspan="2" class="partyname" style="background:'+jsondata["colors"][i]+'; color:#fff;">'+
                                            jsondata["row_matches"][i][0]+
                                        '</th>'+
                                    '</tr>'+
                                    // '<tr>'+
                                    //     '<td class="status"  colspan="2"  style="background:'+jsondata["colors"][i]+'; color:#fff;">'+
                                    //         jsondata["row_matches"][i][3]+
                                    //     '</td>'+
                                    // '</tr>'+
                                '</thead>'+
                                '<tbody>'+
                                    '<tr>'+
                                        '<td class="status">'+jsondata["row_matches"][i][1][0]+'</td>'+
                                        '<td class="votes">'+jsondata["row_matches"][i][1][1]+'</td>'+
                                    '</tr>'+
                                    // '<tr>'+
                                    //     '<td class="status">'+jsondata["row_matches"][i][2][0]+'</td>'+
                                    //     '<td class="votes">'+jsondata["row_matches"][i][2][1]+'</td>'+
                                    // '</tr>'+
                                '</tbody>'+
                            '</table></a>'+
                        '</div>';
                }
                elem.html("");
                elem.html(html);


            }

                // elem.html("");
                // elem.html(html);



            if(settings.response_type != "html" && settings.jsondata["status"] == 0 ){
                settings.isrefresh = false;
                //console.log("%c \nResult : Ajax Stopped \n ", "background: #f00; padding:10px; font-size:18px; font-weight:bold; color: #bada55");
                        
            } else {
                if(elem.hasClass("off")){
                    setTimeout(function(){
                        elem.removeClass("off");
                    },1000);
                    
                }
            }
            setTimeout(function(){
                elem.show();
                start_timer();
                
                setTimeout(function(){
                    refreshJson();
                },settings.refreshTime)
            },100)
        }

        function start_timer(){
            console.log("start_timer.....");
            clearInterval(tm);
            settings.isrefresh = true;
            tm = setInterval(function(){
                create_anim();
            },settings.interval);
        }
        function refreshJson(){
            if(settings.response_type == "html" && settings.$elem.attr("data-status") == 1){
                 clearInterval(ajaxTmr)
                ajaxTmr = setInterval(function(){
                        fetchJson(settings.jsonUrl,settings.$elem)
                },settings.refreshTime);
            } else if(settings.jsondata["status"] == 1 && settings.response_type != "html"){
                clearInterval(ajaxTmr)
                ajaxTmr = setInterval(function(){
                        fetchJson(settings.jsonUrl,settings.$elem)
                },settings.refreshTime);
            } 
        }
        function fetchJson(url,elem){
            $.ajax({
                url: url,
                 cache: false,
                 beforeSend: function () {
                     clearInterval(tm);
                     clearInterval(ajaxTmr);
                     if(settings.$elem.attr("data-status") == 1 || settings.jsondata["status"] == 1){
                         elem.addClass("off");
                     }
                 },
                 success: function (response) {
                    settings.jsondata = response;

                    // console.log(settings.$elem.attr("data-status"));
                    // console.log("  status is : "+response);
                    if(settings.response_type == "html"){
                        if(settings.$elem.attr("data-status") == 1 && response.length > 0){
                            setTimeout(function(){
                                create_template(elem,response);
                            },500);
                        }
                    } else {
                        if(response.status == 1 && response.row_matches.length > 0){
                            if(settings.isrefresh){
                                setTimeout(function(){
                                    create_template(elem,response);
                                },500);
                            
                            } else {
                                create_template(elem,response);
                            }
                            
                        } else {
                            //create_template(elem,response);
                            console.log("%c Result : live status is set to '0' OR \n\t\t Party list is empty ", "background: #222; padding:10px; font-size:14px; font-weight:bold; color: #bada55");
                        
                        }
                    }
                 },
                 error: function () {
                     console.log('Error fetch data json , file not found');
                 }
             });
            
         
        }
        return this.each( function() {
            var elem = $(this);
            elem.hide();
            if (typeof(Storage) !== "undefined") {
                // console.log("storage available");
                console.log("storage available" , sessionStorage.getItem('CloseRotator'));
                if(sessionStorage.getItem('CloseRotator')){
                    console.log("close rotator");
                    return false;
                    // sessionStorage.setItem('CloseRotator',true)
                    // var local_val = localStorage.getItem("intersetial_count");
                }
            } 
            settings.el_box = (elem.attr("class") == undefined)? elem.attr("id"): elem.attr("class");
            var css_styles = createStyle();
            if($("#slidereffect").length == 0){
                $(css_styles).insertBefore(settings.$elem);
            } else {
                var additionalstyle = "#rotator.off{bottom:-"+settings.height+"px; }"
                $("#slidereffect").append(additionalstyle);
            }
            fetchJson(settings.jsonUrl,elem)
        });

    }
}(jQuery));




