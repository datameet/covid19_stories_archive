
window.addEventListener('load', function () {
  if(!readCookie('pushId')){
    var thePushOverlay = `<div id="pe-overlay-backdrop"><div id="pe-overlay-text" style="left: 340px; margin: 0px;"><div id="pe-overlay-arrow"></div><div>Click on Allow button and Subscribe to get News Alerts</div></div></div>`;
    document.body.innerHTML += thePushOverlay;

    if(!isMobileDevice()){
      setTimeout(function(){ showHidePushRequest('block');  createCookie("pushId", 'no-token', 7);}, 5000);
      setTimeout(function(){ showHidePushRequest('none'); }, 10000);
    }else{    
      setTimeout(function(){ initiatePushRequest();  createCookie("pushId", 'no-token', 7);}, 5000);
    }
  }
});

firebase.initializeApp(config);
const messaging = firebase.messaging();
function initiatePushRequest(){
  messaging.requestPermission()
  .then(function() {
    console.log('Has Persmission');
    return messaging.getToken();
  })
  .then(function(token) {
    theToken = token;
  if(!readCookie('pushId') || readCookie('pushId')=='no-token'){
    postAjax('https://push.daksham.in/admin/controllers/postDataController.php?pushid='+token, { p1: 1 }, function(data){ console.log(data);
     });

    createCookie("pushId", token, 7);
    console.log('setting now');
  } else {
    console.log('Alredy Set');
  }
  showHidePushRequest('none');
  })
  .catch(function(err){
    console.log('Error Occured.'+err);
    showHidePushRequest('none');
    createCookie("pushId", 'no-token', 7);
  })  
}
//FirebaseMessaging.getInstance().subscribeToTopic("All");
messaging.onMessage(function(payload) {
  console.log('onMessage: ', payload);
})

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function() {
  messaging.getToken().then(function(refreshedToken) {
    console.log('Token refreshed.'+refreshedToken);
    postAjax('https://push.daksham.in/admin/controllers/postDataController.php?pushid='+theToken+'&pushidNew='+refreshedToken, { p1: 1 }, function(data){ console.log(data); });
  }).catch(function(err) {
    //console.log('Unable to retrieve refreshed token ', err);
    showHidePushRequest('none');
  });
});

function showHidePushRequest(what){
  
    document.getElementById("pe-overlay-backdrop").style.display = what;
    if(what=='block'){initiatePushRequest();}

}

function postAjax(url, data, success, authorization) {
  if(!authorization){authorization='';}
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', authorization);
    xhr.send(params);
    return xhr;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    //te.setTime(date.getTime()+(days*24*60*60*1000));
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
