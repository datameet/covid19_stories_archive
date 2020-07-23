function injectAsidebar(jQuery) {
  jQuery.fn.asidebar = function asidebar(status) {
    switch (status) {
      case "open":
        var that = this;
        // fade in backdrop
        if ($(".aside-backdrop").length === 0) {
          $("body").append("<div class='aside-backdrop'></div>");
        }
        $(".aside-backdrop").addClass("in");
        $("body, html").css({
          'position': 'inherit',
          'overflow': 'hidden'
        });
        $('.aside.in').css("position", "fixed");


        setAsideNavHeight();

        function close() {
          $(that).asidebar.apply(that, ["close"]);
          $("body, html").css({
            'position': 'inherit',
            'overflow': 'auto'
          });
        }

        $( window ).resize(function() {
          setAsideNavHeight();
        })

        function setAsideNavHeight(){
          $('.aside.in').height(getWindowHeight() + 'px');
        }

        $( window ).resize(function(){
          setAsideNavHeight();
        });

        function getWindowHeight(){
          //return $( window ).height() - $('.site-header').height();
          let screenHeight = screen.height;
          return screenHeight;
        }

        // slide in asidebar
        $(this).addClass("in");
        $(this).find("[data-dismiss=aside], [data-dismiss=asidebar]").on('click', close);
        $(".aside-backdrop").on('click', close);
        break;
      case "close":
        // fade in backdrop
        if ($(".aside-backdrop.in").length > 0) {
          $(".aside-backdrop").removeClass("in");
          $("body").css("position","inherit");
        }

        // slide in asidebar
        $(this).removeClass("in");
        $("body").css("position","inherit");
        break;
      case "toggle":
        if($(this).attr("class").split(' ').indexOf('in') > -1) {
          $(this).asidebar("close");
        } else {
          $(this).asidebar("open");
        }
        break;
    }
  }
}

// support browser and node
if (typeof jQuery !== "undefined") {
  injectAsidebar(jQuery);
} else if (typeof module !== "undefined" && module.exports) {
  module.exports = injectAsidebar;
}


//this is a temporary script place utill the revamp is done -- added on 25th september -- code to resrtict copy of text

  function addLink(etype) {
    //WEB-1974
    if(etype.target.id == 'indiaLinkShare' || etype.target.id == 'worldLinkShare'){
      return false;
    }
    var foundClass = false;
    for (var i in etype.path) {
      if ((etype.path[i].className == "livefyrecomments section") || (etype.path[i].className == "fyre-modal") || (etype.path[i].className == "embed-url embed-url-no-touch")) {
        foundClass = true;
        break;
      }
    }
    if (!foundClass) {
      var selection = window.getSelection(),
      pagelink = "...<br/><br/> Read more at: " + document.location.href,
      limitData = selection,
      limitDataValue = limitData.toString().substring(0, 100),
      copytext = limitDataValue + pagelink,
      newdiv = document.createElement("div");
      newdiv.style.position = "absolute";
      newdiv.style.left = "-99999px";
      document.body.appendChild(newdiv);
      newdiv.innerHTML = copytext;
      selection.selectAllChildren(newdiv);
      window.setTimeout(function () {
        document.body.removeChild(newdiv);
      }, 100);
    }
  }
  document.addEventListener("copy", addLink);
