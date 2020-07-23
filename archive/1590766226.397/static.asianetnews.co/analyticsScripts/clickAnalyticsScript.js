// get the distinct site name for different sites
function getSiteName(url) {
    let returnValue = '-';
    url = url.match(/(\w+\.)?(asianetnews|mynation|localhost)/g);
    if(url[0].includes('asianetnews')) {
      returnValue = url[0].replace('www', 'malayalam').replace('.','_');
    } else {
      returnValue = url[0].replace('www', 'english').replace('.','_');
    }
    return returnValue;
  }

  // redirect  the page on lick event
  function redirectToClickedPage(e, targetElement, eventName="pageLoad") {
    //ignore the header langauge dropdown and search icon
    if ((e.target.className === "a-drop" && e.target.parentElement.className === "dropdown language-list open") || (e.target.className === "fa fa-search" )) {
     return false;
    }
    if(e.target.className.includes("ignr-clickAnalytics")){
       return false;
    }
    if(eventName == "click") {
      $(e.currentTarget).unbind();
      targetElement.click()
    }
  }

  // create the request objetc and make the ajax call to send the data to clickstream api
  function sendClickStreamData(e, userIdForAnalytics = '', eventName='pageLoad') {
    let targetElement = {}
    if(eventName == 'click') {
      e.preventDefault()
      targetElement = e.currentTarget;
    }
    let activity = {
      activityDetail : {
        action:eventName,
        identifier: targetElement.href == undefined? window.location.href:targetElement.href,
        identifierType: "link"
      },
      elementHierarchy : {
        uuid : targetElement.href == undefined? window.location.href:targetElement.href,
        name: targetElement.title
      }
    }
    let deviceDetails = {
      device: navigator.userAgent,
      deviceId : ""
    }
    let userDetails = {
      sessionId : userIdForAnalytics
    }
    let postRequestData  = {
      "versionNum":"1.0",
      "routingKey":getSiteName(window.location.origin),
      "clickStreamInfo":{
        "timestamp" : new Date().getTime(),
        "activity":activity,
        "deviceDetails": deviceDetails,
        "userDetails":userDetails
      }
    }
    $.ajax({
      type: "POST",
      url: "https://clickstream.asianetnews.com/beaconws/rest/beaconsvc/logingestor",
      data: JSON.stringify(postRequestData),
      contentType: "application/json",
      success: (response)=>{
        //redirectToClickedPage(e, targetElement, eventName)
      },
      error:(err)=>{
        console.log(err)
        //redirectToClickedPage(e, targetElement, eventName)
      }
    })

    if(eventName == "click") {
      setTimeout(()=>{
        redirectToClickedPage(e, targetElement, eventName)
      },500)
    }
  }

  $(document).ready(function(){
    let cookieDataId = '';
    ga(function(tracker) {
      cookieDataId = tracker.get('clientId');
    });
    sendClickStreamData(event, cookieDataId)
    document.cookie = "clientId="+cookieDataId+";";
      $("a").click(function(e) {
        sendClickStreamData(e, cookieDataId, "click")
      })
  })
