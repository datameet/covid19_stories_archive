
jQuery(document).ready(function() {

  jQuery("#smpush_notification_temp label").click(function(){
    jQuery("#smpush_notification_temp label").each(function(index) {
      jQuery(this).removeClass("smpush_checked");
      jQuery(this).find("input").prop("checked", false);
    });
    jQuery(this).addClass("smpush_checked");
    jQuery(this).find("input").prop("checked", true);
    jQuery("#smpush_temp_screen").html("("+jQuery(this).find("input").val()+"&#176;)");
  });

  jQuery("#smpush_woo_waiting_button").click(function(){
    if (! smpush_browser || typeof smpush_browser === "undefined"){
      return;
    }
    if(smpush_getCookie("smpush_device_token") == ""){
      smpushIntializePopupBox();
      return;
    }
    var btn = jQuery(this);
    var oldtext = btn.html();
    jQuery(this).html(smpush_jslang.saving_text);
    jQuery.get(smpush_jslang.siteurl+"/?smpushcontrol=woo_waiting_list", { "noheader":1, "productid": btn.val(), "device_type": smpush_browser() }
      ,function(data){
        btn.html(oldtext);
        if(data["respond"] == 0){
          alert(data["message"]);
        }
      });
  });

  if(! document.getElementsByTagName("html")[0].hasAttribute("amp")){
    jQuery("amp-web-push").remove();
    jQuery("amp-web-push-widget").remove();
  }

});