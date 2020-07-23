(function( window, undefined ) {
  var de = window.DE;
  var document = window.document,
	location = window.location,
	publishDates,
	publishDate,
	publishDatesArray,
	publishDatesOnlyArray,
	selectedDateKey,
	emails = [],
	subscriberdata,
  searchdata;


if(typeof String.prototype.trim !== 'function') { /*support trim functionality in ie*/
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

/*function selectVolumeDates(date){
    var numPad = function (num, digits){
      var numStr = num.toString();
      var pad = digits - numStr.length;
      for(var i=0; i<pad; i+=1){numStr = '0'+numStr}
      return numStr;
    };
      
	  var dtStr = date.getFullYear()+'-'+(numPad(date.getMonth()+1,2))+'-'+
	      numPad(date.getDate(),2);

      if (publishDatesOnlyArray[dtStr]){
        return [true, ''];
      }else{
        return [false, ''];
      }
  }*/
  
  /*function fetchAndShowThumb(volId){
    var thumburl = DEConfig.baseUrl + 'pagemeta/getimage/'+volId+'/1/thumbs';
    $('#de-calendar-box .volthumb').empty();
    $.get(thumburl, function(thumb){
      $('#de-calendar-box .volthumb')
      .append('<a href="'+DEConfig.baseUrl + 'r/'+ publishDates[selectedDateKey]+
      '" title="Open"><img width="150" src="'+thumb+'" alt="volume" /></a>');
    });
  }*/

  
  function checkSubscriber(event,username){
        //get all emails of user and check if any email is subscribed    
        $.getJSON(DEConfig.authBase+'api/getemails?callback=?',
        function(response){
            for (var idx in response){
                if (response.hasOwnProperty(idx)){
                    emails[idx]=response[idx]['email'];
                }
            }
            emails = emails;
            //check if any email is subscribed
            $.getJSON(DEConfig.baseUrl+'subscriber/checksubscribedemail/'+DEConfig.titleId+'/'+emails.join('/'),
            function(response){
                if (response.subscribed){
                    subscriberdata = response;
                    $("#de-navbar .btn.subscribe").unbind('click').click(opensubscribed);
                    $("#de-navbar .btn.subscribe").find('div span').text('Subscribed');
                }else if (DEConfig.needsAuth){
                    //on this stage with needsAuth true mean user is authorised but not subscribed
                    //so subscribed user to get information of new published volumeId
                    var titles = [DEConfig.titleId];
                    $.post(DEConfig.baseUrl + 'subscriber/add',
				      {'name': username,
				      'email': emails[0],
				      'titles': titles.join(',')},
				      function(response){
                        checkSubscriber(username);
				      }
				    );
                }
            });
            
        });
    }
    
    function opensubscribed(){
        //open dialog box to show unsubscribed option
        if (confirm('Do you want to unsubscribed ?')){
            $.get(DEConfig.baseUrl+'subscriber/remove/'+subscriberdata.subscribed+'/'+DEConfig.titleId,function(response){
                alert(response);
                $("#de-navbar .btn.subscribe").unbind('click').click(function(){
                    DE.openSubscribe();
                });
                $("#de-navbar .btn.subscribe").find('div span').text('Subscribe');
            })
        }
    }

 /* function openClipHelp(){
    if($('#de-clip-help').length > 0){
      $('#de-clip-help').remove();
      return;
    }
    
    var btnoffset = $('#de-navbar .btn.clip').offset();
    
    $($('#de-clip-help-tmpl').html())
    .css('top', (btnoffset.top+26) + 'px')
    .css('left', btnoffset.left+'px')
    .appendTo('body');
    
    $('#de-clip-help .btn.ok').click(function(){
      $('#de-clip-help').remove();
    });
    $('#de-clip-help .btn.cancel').click(function(){
      window.DE.cancelClipping();
      $('#de-clip-help').remove();
    });
  }*/
  
  function showPageChooser(){
    if( $('#de-page-chooser').length > 0 && 
        $('#de-page-chooser').css('display') != 'none'){
        
      $('#de-page-chooser').remove();
      return;
    }
    
    var btnoffset = $('#de-navbar .btn.pagenum').offset();
    
    var pageData = DE.pageData();
    
    var numPages = Number(DEConfig.numPages);
    var topOffset = btnoffset.top+26;
    var maxHeight = $(window).height() - 200;
    var reqdHeight = numPages*104;
    
    var leftOffset;
    DEConfig.titleType = DEConfig.pType;
    if (DEConfig.titleType == 'comic'){
        leftOffset = -40;
    }else{
        if(typeof(pageData[1].levels.header) == 'undefined'){
          leftOffset = 10;
        }else{
          leftOffset = -220;
        }
    }
    
    if($('#de-page-chooser').css('display') == 'none'){
      $('#de-page-chooser')
      .show()
      .css('top', topOffset + 'px')
      .css('left', (btnoffset.left+leftOffset)+'px')
      .height((reqdHeight < maxHeight) ? reqdHeight : maxHeight);

      var topScroll1 = $("#de-page-chooser li[data-num="+DE.page+"]").position().top ;
      $('#de-page-chooser').scrollTop(topScroll1);
      
      return;
    }
    
    var pagechooser = $($('#de-page-chooser-tmpl').html())
    .css('top', topOffset + 'px')
    .css('left', (btnoffset.left+leftOffset)+'px')
    .height((reqdHeight < maxHeight) ? reqdHeight : maxHeight)
    .appendTo('body');
    
    
    //fill the page chooser with page headers
    var list = $('#de-page-chooser .list');
    
    if (DEConfig.titleType == 'comic'){
        //show thumbnail in navbar for comic
        pagechooser.css({'width':'210px'});
        list.css({'width':'190px'});
        
        for(var pageidx = 1; pageidx <= numPages; pageidx += 1){
            if (!pageData.hasOwnProperty(pageidx) || typeof(pageData[pageidx].levels) == 'undefined' || typeof(pageData[pageidx].levels.thumbs) == 'undefined'){
          
              list.append('<li data-num="'+pageidx+'" class="'+((pageidx==1) ? 'alpha':'')+'">'+
              '<div class="'+((pageidx % 2 == 0)? 'even':'odd')+'"><span class="num">'+pageidx+
              '</span></div></li>');

            }else{
              list.append('<li data-num="'+pageidx+'" class="'+((pageidx==1) ? 'alpha':'')+'">'+
              '<div class="'+((pageidx % 2 == 0)? 'even':'odd')+'"><span class="num" style="line-height:250px;">'+pageidx+
              '</span><div class="thumb" style="height:'+pageData[pageidx].levels.thumbs.chunks[0].height+'px"><img src="'+
              pageData[pageidx].levels.thumbs.chunks[0].url+'" alt="" /></div></div></li>');
            }
        }
    }else{

        var header = false;
        for(var pageidx = 1; pageidx <= numPages; pageidx += 1){

          if(!pageData.hasOwnProperty(pageidx) || typeof(pageData[pageidx].levels) == 'undefined' || typeof(pageData[pageidx].levels.header) == 'undefined'){

            list.append('<li data-num="'+pageidx+'" class="'+((pageidx==1) ? 'alpha':'')+'">'+
            '<div class="'+((pageidx % 2 == 0)? 'even':'odd')+'"><span class="num">'+pageidx+
            '</span></div></li>');

          }else{

            header = true;
            list.append('<li data-num="'+pageidx+'" class="'+((pageidx==1) ? 'alpha':'')+'">'+
            '<div class="'+((pageidx % 2 == 0)? 'even':'odd')+'"><span class="num" style="line-height:100px;">'+pageidx+
            '</span><div class="header" style="height:60px;"><img width="500" src="'+
            pageData[pageidx].levels.header.chunks[0].url+'" alt="" /></div></div></li>');

          }

          if (!header){
            $('#de-page-chooser').addClass('noheader');
          }
        }
    }
    
    var topScroll1 = $("#de-page-chooser li[data-num="+DE.page+"]").position().top ;
      $('#de-page-chooser').scrollTop(topScroll1);
    
    $('#de-page-chooser .list > li').click(function(){
      //get the page number and switch to that
      var num = $(this).attr('data-num');
      DE.changeHash(DE.section,num);
      $('#de-page-chooser').hide();
    });
  }
  
  function searchContent(content,action, offset){
    searchdata = content;
    $.getJSON(DEConfig.baseUrl+'search/content',
            {
                'content':content,
                'titleid':DEConfig.titleId,
                'from':(offset) ? offset : 0
            },
            function(response){
                if (typeof(action)==undefined)
                    showMoreClicks=0;
                
                showSearch(response);
            }
        );
  }
  
  var showNext=false,
        showPrev=false,
        showMoreClicks=0;
      
  function showSearch(result){
      showNext=false;
      $("#de-search-box").remove();
      var offset = $("#de-navbar input.searchbox").offset();
      
      
      if ((offset.left + 350) > $(window).width()){
          $($("#de-search-box-tmpl").html())
            .css({'top':offset.top+20+'px'})
            .css({'right':'10px'})
            .appendTo('body');
      }else{
          $($("#de-search-box-tmpl").html())
            .css({'top':offset.top+20+'px'})
            .css({'left':offset.left+'px'})
            .appendTo('body');
      }
      
      var list = $("#de-volume-chooser .list").empty();
      var idx=1;
      
      if ($.isEmptyObject(result)){
          list.append('<li class="alpha'+'">'+
            '<div class="odd"><span>No result found'+
            '</span></div></li>');
      }else{
          for (var vol in result){
//        var center = 30;
//        var desc = result[vol].desc;
//        var patt = new RegExp(searchdata, 'i');
//        var strPos = desc.search(patt);
//        var start = strPos-center,
//            length = searchdata.length+center*2;
//        
//        start = (start<0) ? 0 : start;

        list.append('<li class="'+((idx==1) ? 'alpha':'')+'">'+
        '<div class="'+((idx % 2 == 0)? 'even':'odd')+'">'+
        '<div class="title">'+
        //'<span class="num" style="line-height:20px;">'+idx+'</span>'+
        '<div class="name">'+
        '<a href="'+DEConfig.baseUrl+'r/'+result[vol].id+'/1" target="_blank">'+result[vol].name+'</a>'+
        '</div>'+
        '<div class="date">'+result[vol].published+'</div>'+
        '</div>'+
        '<div class="description">'+result[vol].desc+'</div>'+
        '</div></li>');
    
        idx++;
        if (idx>10){
            showNext=true;
            showMoreClicks++;
            break;
        }
      }
      
      
        list.append('<li>'+
        '<div class="'+((idx % 2 == 0)? 'even':'odd')+'">'+
        '<div class="title">'+
        '<div class="name">'+
        '<a href="javascript:;" id="showprev" data-offset="'+(showMoreClicks-2)*10+'" style="'+((((showMoreClicks-2)*10)<0) ? 'display:none;': '')+'">Prev</a>'+
        '</div>'+
        '<div class="date">'+
        '<a href="javascript:;" id="shownext" data-offset="'+showMoreClicks*10+'" style="'+((!showNext) ? 'display:none': '')+'">'+'Next</a>'+
        '</div>'+
        '</div>'+
        '<div class="description">'+'</div>'+
        '</div></li>');
      
      $("#de-volume-chooser #shownext")
            .unbind("click").bind('click',function(){
               searchContent($("#de-navbar input.searchbox").val().trim(),'next', $(this).attr('data-offset')); 
            });
      
      $("#de-volume-chooser #showprev")
            .unbind("click").bind('click',function(){
               showMoreClicks-=2;
               searchContent($("#de-navbar input.searchbox").val().trim(),'next', $(this).attr('data-offset')); 
            });
      }
      
      $("#de-search-box .close").click(function(){
         $("#de-search-box") .remove();
      });
  }
  
  
  function showSearchNext(result){
      var list = $("#de-volume-chooser .list").empty();
      var idx=1;
      
      for (var vol in result){
        var center = 30;
        var desc = result[vol].desc;
        var start = desc.indexOf(searchdata)-center,
            length = desc.length+center*2;
        start = (start<0) ? 0 : start;

        list.append('<li class="'+((idx==1) ? 'alpha':'')+'">'+
        '<div class="'+((idx % 2 == 0)? 'even':'odd')+'">'+
        '<div class="title">'+
        //'<span class="num" style="line-height:20px;">'+idx+'</span>'+
        '<div class="name">'+
        '<a href="'+DEConfig.baseUrl+'r/'+result[vol].id+'/1" target="_blank">'+result[vol].name+'</a>'+
        '</div>'+
        '<div class="date">'+result[vol].published+'</div>'+
        '</div>'+
        //'<div class="description">'+result[vol].desc.substr(result[vol].desc.indexOf(searchContent)-15, result[vol].desc.indexOf(searchContent).length+30)+'</div>'+
        '<div class="description">'+desc.substr(start,length).replace(searchdata,'<b>'+searchdata+'</b>')+'</div>'+
        '</div></li>');
        idx++;
        if (idx>10){
            showNext=true;
            showMoreClicks++;
            break;
        }
      }
      
      
        list.append('<li>'+
        '<div class="'+((idx % 2 == 0)? 'even':'odd')+'">'+
        '<div class="title">'+
        '<div class="name">'+
        '<a href="javascript:;" id="showprev" data-offset="'+(showMoreClicks-2)*10+'">Prev</a>'+
        '</div>'+
        '<div class="date">'+
        '<a href="javascript:;" id="shownext" data-offset="'+showMoreClicks*10+'">'+'Next</a>'+
        '</div>'+
        '</div>'+
        '<div class="description">'+'</div>'+
        '</div></li>');
      
      $("#de-volume-chooser #shownext")
            .unbind("click").bind('click',function(){
               searchContent($("#de-navbar input.searchbox").val().trim(),'next', $(this).attr('data-offset')); 
            });
      
      $("#de-volume-chooser #showprev")
            .unbind("click").bind('click',function(){
               showMoreClicks=-2;
               searchContent($("#de-navbar input.searchbox").val().trim(),'next', $(this).attr('data-offset')); 
            });
  }
  
  function showSettings(){
      if ($("#de-settings-options").length>0){
          $("#de-settings-options").remove();
          return;
      }
      
      var offset = $("#de-navbar .btn.settings").offset();
      
      $("#de-settings-options").remove();
      $($("#de-settings-options-tmpl").html())
        .css({'top':offset.top+25+'px'})
        .css({'left':offset.left+'px'})
        .appendTo('body');
        
      
      $("#de-settings-options input:checkbox[name='scroll']").prop('checked',DEConfig.isautoScroll);
      $("#de-settings-options input:radio[value='"+DE.mode+"']").prop('checked',true);
        
      $("#de-settings-options input:radio[name='mode']").click(function(){
          DEConfig.showDual = ($(this).val()=='page') ? false : true;
          DE.changeHash($(this).val(),DE.page,DE.zoom);
          setTimeout(function(){$("#de-settings-options").remove();},500);
      });
      
      $("#de-settings-options input:checkbox[name='scroll']").click(function(){
          if ($(this).is(':checked')){
              DEConfig.isautoScroll=true;
              $(window).trigger('autoScrollEvent');
          }else{
              DEConfig.isautoScroll=false;
              $("#de-page-container").unbind('mousemove');
          }
          setTimeout(function(){$("#de-settings-options").remove();},500);
      })
  }

    function unregisterKeyShortcuts(){
        $(document).unbind('keyup');
        $(document).unbind('keypress');
    }
    
    
    function registerKeyShortcuts(){
        $(document).unbind('keyup');

        $(document).keyup(function(evt){
                if (DE.zoom >1){return;}
                var key = evt.keyCode;
                switch(key){
                case 37:
                        prevPage();
                        break;
                case 39:
                        nextPage();
                        break;
                }
        });

        $(document).unbind('keypress').keypress(function(evt){
                var key = evt.keyCode;
                switch(key){
                case 13:
                        if(DE.zoom > 1){
                                zoomOut();
                        }else{
                                zoomIn();
                        }
                break;
                }
        });
    }

  function firstPage() {
    DE.changeHash(DE.section, 1);
    //DE.manual_mode = false;
    $('.nextpage').removeClass('disablebtn'); 
    $('.lastpage').removeClass('disablebtn'); 
    $('.firstpage').addClass('disablebtn'); 
    $('.prevpage').addClass('disablebtn'); 
    $('.firstpage').trigger('blur');
  }

  function lastPage() {
    var lastpage;
    //DE.manual_mode = false;
    if(DEConfig.sections.hasOwnProperty(DE.section)){
      lastpage = DEConfig.sections[DE.section].pages.length;
    }else{
      lastpage = DEConfig.numPages;
    }

    DE.changeHash(DE.section,lastpage);
    $('.nextpage').addClass('disablebtn'); 
    $('.lastpage').addClass('disablebtn'); 
    $('.firstpage').removeClass('disablebtn'); 
    $('.prevpage').removeClass('disablebtn'); 
    $('.lastpage').trigger('blur');
  }
    
    function prevPage(){
      var mode = DE.last_mode || DE.mode;
      //DE.manual_mode = false;

      if (mode=='page'){
        var prevP = Number(DE.sectionPage) - 1;
      }else{
        var prevP = Number(DE.sectionPage) - 2;
      }

      // If navigating in all pages
      var section = DE.section
      // If navigating in section pages
      var section_names = Object.keys( DEConfig.sections );
      var index;
      if(DEConfig.sections.hasOwnProperty(DE.section)){
        if(prevP < 1) {
          index = ($.inArray(DE.section, section_names) - 1 + section_names.length) % section_names.length;
          if(index != (section_names.length - 1)) {
            section = section_names[index];
            DE.visualizeSectionChange(DEConfig.sections[section].name);   
          }
          
        }
      }

      if(prevP < 1) {
        prevP = 1;
        if(DEConfig.mode == 'sample'){
          DE.showSigninPage();
          return;
        }
        $('.prevpage').addClass('disablebtn');  
        $('.firstpage').addClass('disablebtn');  
      }
      
      $('.nextpage').removeClass('disablebtn');
      $('.lastpage').removeClass('disablebtn');   
      // switch to dual mode if page is in double spread else switch to original mode
      if( !DE.manual_mode && ($.inArray(parseInt(prevP), DEConfig.doublespread_pages) != -1 ) ) {
        if(DE.last_mode == null) {
          DE.last_mode = section;  
        
        }
        section = 'dual';
        DE.setNavPropWithMode('dual');
        DE.showHideSideBars('hide'); 
      } else {
        if(DE.last_mode == 'dual') {
            section = 'dual';
            DE.setNavPropWithMode('dual');
            DE.showHideSideBars('hide'); 
          } else if(DE.last_mode == 'page') {
            section = 'page';
            DE.setNavPropWithMode('page');
            DE.showHideSideBars('show');
          }
      } 

      DE.changeHash(section,prevP);
      DE.highlightSection(prevP);

      $('.prevpage').trigger('blur');
    }
    
    function nextPage(){
        var mode = DE.mode;
        //DE.manual_mode = false;

        if (mode=='page'){
            var nextP = Number(DE.sectionPage) + 1;
        }else{
            if (DE.page==1){
                var nextP = Number(DE.sectionPage) + 1;
            }else{
                var nextP = Number(DE.sectionPage) + 2;
            }
        }

        // If navigating in all pages
        var section = DE.section
        var numPages = DEConfig.numPages;

        // If navigating in section pages
        var section_names = Object.keys( DEConfig.sections );
        var index;
        if(DEConfig.sections.hasOwnProperty(DE.section)){
          numPages = DEConfig.sections[DE.section].pages.length;
          if(nextP > numPages) {
            index = ($.inArray(DE.section, section_names) + 1) % section_names.length;
            if(index != 0) {
              nextP = 1;
              section = section_names[index];
              DE.visualizeSectionChange(DEConfig.sections[section].name);   
            }
          }
        }
        
        if(nextP > numPages) {
          if(DEConfig.mode == 'sample'){
              DE.showSigninPage();
              return;
          }
          nextP = DE.sectionPage;
          //nextP = (nextP > numPages) ? numPages : nextP;
          $('.nextpage').addClass('disablebtn'); 
          $('.lastpage').addClass('disablebtn');           
        }
        
        $('.prevpage').removeClass('disablebtn');
        $('.firstpage').removeClass('disablebtn'); 
        
        // switch to dual mode if page is in double spread
        if( !DE.manual_mode && ($.inArray(parseInt(nextP), DEConfig.doublespread_pages) != -1 )) {
          if(DE.last_mode == null) {
            DE.last_mode = section;
          }
          
            section = 'dual';
            DE.setNavPropWithMode('dual');
            DE.showHideSideBars('hide'); 
        }  else {
          //section = DE.last_mode;
          if(DE.last_mode == 'dual') {
            section = 'dual';
            DE.setNavPropWithMode('dual');
            DE.showHideSideBars('hide'); 
          } else if(DE.last_mode == 'page') {
            section = 'page';
            DE.setNavPropWithMode('page');
            DE.showHideSideBars('show');
          }
        } 

        DE.changeHash(section,nextP);
        DE.highlightSection(nextP);

        
        
        $('.nextpage').trigger('blur');
    }
    
    function zoomIn(){
        if(Number(DE.zoom) < Number(DE.zooms)){
            DE.scrollPos = ( $(window).scrollTop() - $(window).height() ) / $("#de-page-container").height();
            DE.zoom = Number(DE.zoom)+1;

            DE.changeHashWithZoom(DE.section,DE.sectionPage,DE.zoom);
            $('.btn_prev').addClass('zoom_arrow_fixed');
            $('.btn_next').addClass('zoom_arrow_fixed');
            setZoomProp();
            $(window).trigger(DE.events.pageChange);
        }
    }
    
    function zoomOut(){
        if(Number(DE.zoom) > 1){
            DE.scrollPos = ( $(window).scrollTop() - $(window).height() ) / $("#de-page-container").height();
            DE.zoom = 1;
            DE.changeHashWithZoom(DE.section,DE.sectionPage,DE.zoom);
            $('.btn_prev').removeClass('zoom_arrow_fixed');
            $('.btn_next').removeClass('zoom_arrow_fixed');
            setZoomProp();
            $(window).trigger(DE.events.pageChange);
        }
    }

    function setZoomProp() {
      switch(DE.zoom) {
        case 1 :  
                  $(".zoom_indicator").hide(); 
                  $(".zoomout").addClass('disablebtn');
                  $(".zoomin").removeClass('disablebtn');
                  $(".zoom_indicator_v4_1").removeClass('zoom_indicator_highlight');
                  $(".zoom_indicator_v4_2").removeClass('zoom_indicator_highlight');
                  break;
        case 2 :  
                  var zoom_html = '<span class="zoom_level_span"> +1 </span> ';
                  $('.zoom_indicator').html(zoom_html);
                  $(".zoom_indicator").fadeIn(700).delay(500).fadeOut(700);
                  
                  $(".zoomout").removeClass('disablebtn');
                  $(".zoom_indicator_v4_1").addClass('zoom_indicator_highlight');
                  if(de.zooms==2) {
                    $(".zoomin").addClass('disablebtn');  
                    $(".zoom_indicator_v4_2").addClass('zoom_indicator_highlight');
                  } else {
                    $(".zoomin").removeClass('disablebtn');
                  }              
                  break;
        case 3 : 
                  if ( (DE.zoom - 1) != DE.zooms) {   
                    var zoom_html = '<span class="zoom_level_span"> +2 </span> ';
                    $('.zoom_indicator').html(zoom_html);
                    $(".zoom_indicator").fadeIn(700).delay(500).fadeOut(700);           
                  }

                  $(".zoomout").removeClass('disablebtn');
                  $(".zoomin").addClass('disablebtn');
                  $(".zoom_indicator_v4_2").addClass('zoom_indicator_highlight');
                  break;
      }
    }
    
    function showHeader(){
        
            var img = new Image();
            img.src = DEConfig.header;
            img.alt = DEConfig.headerAlt;
            img.onload = function(){
                if (DEConfig.showTitles){
                    var imgHeight = img.height;
                    var imgWidth = img.width;
                    var btnLeft = (imgWidth>260) ? 260 : imgWidth+$(img).position().left;
                    var btnTop = $(img).position().top-2;
                    var btnHeight = (imgHeight>96) ? 96 : imgHeight;

                    var btn = '<div class="show-titles-btn"><div class="icon"></div></div>';
                    $(btn)
                        .css({'left':+btnLeft+'px'})
                        .css({'height':btnHeight+'px'})
                        .appendTo("#de-header .logo");

                    $("#de-header .logo .show-titles-btn")
                        .css({'top':btnTop+'px'})
                        .click(showTitles)
                        .find(".icon")
                        .css({'top':btnHeight/2-5+'px'});
                }
            };
            if (DEConfig.header!=""){
                $("#de-header .logo a").append(img);
            }
            $("#de-header .logo")
                        .mouseenter(showTitles)
                        .mouseleave(showTitles);
    }
    
    function showTitles(){
        if (!DEConfig.showTitles){return;}
        if ($("#de-title-chooser").length > 0){
            $("#de-title-chooser").remove();
            return;
        }
        
        var top = ($("#de-header .logo .show-titles-btn").height()) ? 
                        $("#de-header .logo .show-titles-btn").height()+$("#de-header .logo .show-titles-btn").position().top : 96;
        var maxHeight = $(window).height()-200;
        var reqdHeight = DEConfig.showTitles * 32;
            
        $($("#de-title-chooser-tmpl").html())
            .css({'top':top+'px'})
            .css({'height':((reqdHeight < maxHeight) ? reqdHeight : maxHeight)+'px'})
            .appendTo('#de-header .logo');
        
        $("#de-title-chooser .list li").click(function(){
           var t_id = $(this).attr('data-title');
           window.location.href = DEConfig.baseUrl + 't/' +t_id + '/latest'; 
        });
    }

  (function(){
	    $('#de-navbar .btn.subscribe').click(function(){
	        DE.openSubscribe();
	    });
	    $('.btn.nextpage').click(function(){
                nextPage();
	    });
	    $('.btn.prevpage').click(function(){
                prevPage();
	    });

      $(".btn_next").click(nextPage);
      $(".btn_prev").click(prevPage);
	    
	    $('#de-navbar .btn.pagenum').click(showPageChooser);
	    
	    $('.btn.zoomout').click(function(){
                zoomOut();
	    });
	    $('.btn.zoomin').click(function(){
                zoomIn();
	    });

      $('.btn.firstpage').click(function(){
        firstPage();
      });

      $('.btn.lastpage').click(function(){
        lastPage();
      });
	    
      $("#de-navbar input.searchbox").bind('keyup',function(evt){
          if (evt.keyCode==13) {
              $("#de-navbar .searchcontainer .search").trigger('click');
          }
      });
            
      $("#de-navbar .btn.settings").bind('click',function(){
        showSettings();
      });
      registerKeyShortcuts();            
      
      $("input").bind('focus',unregisterKeyShortcuts)
        .bind('blur',registerKeyShortcuts);
 
      $(window).bind('loginCheckedEvent',checkSubscriber);
            
  })();
  
  de.setZoomProp = setZoomProp;
  de.zoomOut = zoomOut;
  de.zoomIn = zoomIn;
  de.registerKeyShortcuts = registerKeyShortcuts;
  de.unregisterKeyShortcuts = unregisterKeyShortcuts;
  window.DE = de;
	
})(window);