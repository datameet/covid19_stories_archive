


var ClientId = "undefined";
var pageUrl = "undefined";
var pgtype = "";
function checkCookie() {
    var _uniqId = getCookiez("_ga");
    if (_uniqId != "") {
        ClientId = _uniqId; 
       
        pageUrl = window.location;        
    }
}

function getCookiez(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function logoMainclk() {pgtype = document.getElementById("txtcom").value; dataLayer.push({ 'event': 'header', 'eventCategory': 'logo section', 'eventAction': 'logo', 'Page Type': '' + pgtype.toLowerCase() + ''});}


function logoMainksriTv() {pgtype = document.getElementById("txtcom").value; dataLayer.push({ 'event': 'header', 'eventCategory': 'logo section', 'eventAction': 'Kesari TV', 'Page Type': '' + pgtype.toLowerCase() + '' }); }


function logoMainEppr() {pgtype = document.getElementById("txtcom").value; dataLayer.push({ 'event': 'header', 'eventCategory': 'logo section', 'eventAction': 'E-paper', 'Page Type': '' + pgtype.toLowerCase() + '' }); }


function logoMainTxt() {pgtype = document.getElementById("txtcom").value; dataLayer.push({ 'event': 'header', 'eventCategory': 'logo section', 'eventAction': 'Hindi News', 'Page Type': '' + pgtype.toLowerCase() + '' }); }



function logoRytSideNews(pos, headline) {pgtype = document.getElementById("txtcom").value; dataLayer.push({ 'event': 'header', 'eventCategory': 'Listing Top National News', 'eventAction': '' + pos + '', 'eventLabel': '' + headline + '', 'Article Name':''+ headline +'', 'Page Type': '' + pgtype.toLowerCase() + '' }); }



function TopddMenuBold(type, catName, subcatname) {
    pgtype = document.getElementById("txtcom").value;
    if (type == "bold") { dataLayer.push({ 'event': 'header', 'eventCategory': 'Top Hamburger Menu', 'eventAction': '' + catName.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''}); }
    else if (type == "unbold")
        dataLayer.push({ 'event': 'header', 'eventCategory': 'Top Hamburger Menu', 'eventAction': '' + catName.replace("-", " ").toLowerCase() + '', 'eventLabel': '' + subcatname.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + '' });
}




function appsIcon(appName) { pgtype = document.getElementById("txtcom").value; dataLayer.push({ 'event': 'header', 'eventCategory': 'Top Hamburger Menu', 'eventAction': 'App Download', 'eventLabel': '' + appName + '', 'Page Type': '' + pgtype.toLowerCase() + ''}); }





function navigationpush(position, maincat, subcat) {
    pgtype = document.getElementById("txtcom").value;
    if (position == "top") {
        if (subcat != "") {
            dataLayer.push({
                'event': 'header',
                'eventCategory' : 'Top Navigation Menu',
                'eventAction' :'' + maincat.replace("-", " ").toLowerCase() + '',
                'eventLabel' : '' + subcat.replace("-", " ").toLowerCase() + ''
	    , 'Page Type': '' + pgtype.toLowerCase() + ''});

          
        } else {  
            dataLayer.push({
                'event': 'header',
                'eventCategory' : 'Top Navigation Menu',
                'eventAction' : '' + maincat.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + '' });
        }
    }
    else if (position == "bottom") {
        dataLayer.push({
            'event': 'footer',
            'eventCategory': 'footer',
            'eventAction': 'Footer Menu',
            'eventLabel': '' + maincat.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''
        });        
    }
}

function searchclk(txt) {pgtype = document.getElementById("txtcom").value; dataLayer.push({'event': 'header','eventCategory': 'Top Navigation Menu','eventAction': 'Search','eventLabel': '' + txt.toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''});}

function khaskhabrein() {
    pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'middle_section',
        'eventCategory': 'Khas Khabre',
        'eventAction': 'Khas Khabre - Button Click', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}

function khaskhabar_slider(pos, headline,eng_title) {
    pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'middle_section',
        'eventCategory': 'Khas Khabre',
        'eventAction': '' + pos + '',
        'eventLabel': '' + eng_title + '', 'Page Type': '' + pgtype.toLowerCase() + '', 'Article Name':''+eng_title+''
    });

}


function socialshare(cmnt, site)
{
    pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'middle section' ,
        'eventCategory' : 'Social Share',
        'eventAction' :''+site+'',
        'Page Type': '' + pgtype.toLowerCase() + ''
    });
}

function eknzrBtn() {
    pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'middle_section',
        'eventCategory': 'Ek Nazar',
        'eventAction': 'Ek Nazar - Button click', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}

function eknzrSlider(pos, headline,eng_title) {
    pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'middle_section',
        'eventCategory': 'Ek Nazar',
        'eventAction': '' + pos + '',
        'eventLabel': '' + eng_title + '', 'Article Name':''+eng_title  +'', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}


function belowTopSlider(catName, subCat) {
    pgtype = document.getElementById("txtcom").value;

    if (subCat!= "") {
        dataLayer.push({
            'event': 'middle_section',
            'eventCategory': 'Mid page stories listing',
            'eventAction': '' + catName.replace("-", " ").toLowerCase() + '',
            'eventLabel': '' + subCat.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''
        });
    }
    else {
        dataLayer.push({
            'event': 'middle_section',
            'eventCategory': 'Mid page stories listing',
            'eventAction': '' + catName.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''
        });


    }

}


function midPageStorys(pos, catNames,headline,eng_title) {
    pgtype = document.getElementById("txtcom").value;

    dataLayer.push({
        'event': 'middle_section',
        'eventCategory': 'Mid page story click',
        'eventAction': '' + catNames.replace("-", " ").toLowerCase() + '',
        'eventLabel': '' + pos + '',
        'Article Name': '' + eng_title + '', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}

function cityName(stateName, cityName) {pgtype = document.getElementById("txtcom").value;

    dataLayer.push({
        'event': 'middle_section',
        'eventCategory': 'City wise News Listing',
        'eventAction': '' + stateName.replace("-", " ").toLowerCase() + '',
        'eventLabel': '' + cityName.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}

function videoListing(pos,headline, eng_title) {pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'middle_section' ,
        'eventCategory' : 'News with videos Listing',
        'eventAction' : ''+pos+'',
        'eventLabel': '' + headline + '', 'Page Type': '' + pgtype.toLowerCase() + '', 'Article Name':''+ headline +''
    });
}

function horoscope(horoscopeName) {pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'middle_section',
        'eventCategory': 'Daily Horoscope',
        'eventAction': 'Read More',
        'eventLabel': '' + horoscopeName + '', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}


function videoCarousel(pos, headline)
{pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'middle_section' ,
        'eventCategory' : 'Videos-Carousel',
        'eventAction' : ''+pos+'',
        'eventLabel': '' + headline + '', 'Page Type': '' + pgtype.toLowerCase() + '', 'Article Name':''+ headline +''});

}

function picslider(btn, pos, headline) {
    pgtype = document.getElementById("txtcom").value;
    if (btn=="true") {
        dataLayer.push({
            'event': 'middle_section',
            'eventCategory': 'Photos(Carousel)',
            'eventAction': 'Photos - Button Click', 'Page Type': '' + pgtype.toLowerCase() + ''
        });
    }
    else {
        dataLayer.push({
            'event': 'middle_section',
            'eventCategory': 'Photos(Carousel)',
            'eventAction': '' + pos + '',
            'eventLabel': '' + headline + '', 'Page Type': '' + pgtype.toLowerCase() + '', 'Article Name':''+ headline +''
        });
    }
}
 
function ldmorepush(onclicks) {pgtype = document.getElementById("txtcom").value;
    if (onclicks == "loadmore") {
        dataLayer.push({
            'event': 'middle_section',
            'eventCategory': 'Load More Updates',
            'eventAction': 'Load More Updates - Button Click', 'Page Type': '' + pgtype.toLowerCase() + ''
        });
    }
    else if (onclicks == "subscribebtn") {
        dataLayer.push({
            'event': 'social_subscribe',
            'eventCategory': 'Subscribe Clicks',
            'eventAction': 'Subscribe Now', 'Page Type': '' + pgtype.toLowerCase() + ''
        });
    }
    else if (onclicks == "subscribe") {
        dataLayer.push({
            'event': 'social_subscribe',
            'eventCategory': 'Subscribe Clicks',
            'eventAction': 'Subscribe', 'Page Type': '' + pgtype.toLowerCase() + ''
        });
    }
}

 

function socialIcon(menuType, iconName) {pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'social_subscribe',
        'eventCategory': 'social media',
        'eventAction': '' + menuType + '', 'eventLabel': '' + iconName.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''
    });

}
function footerLogo() {pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'footer',
        'eventCategory': 'footer',
        'eventAction': 'footer logo_click', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}
 

function otherProps(txt)
{pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'footer' ,
        'eventCategory' : 'Footer',
        'eventAction' : 'Other Businesses',
        'eventLabel': '' + txt + '', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}

function offCity(txt)
{pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'footer' ,
        'eventCategory' : 'Footer',
        'eventAction' : 'Offices',
        'eventLabel': '' + txt + '', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}

function footLinks(txt)
{pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'footer' ,
        'eventCategory' : 'Footer',
        'eventAction' : 'Bottom most page listing',
        'eventLabel': '' + txt + '', 'Page Type': '' + pgtype.toLowerCase() + ''
    });
}

  

function subcategory(subdomain,cityName){pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'subdomain_home' ,
        'eventCategory' : 'Subdomain Based Location Listing',
        'eventAction': '' + subdomain.replace("-", " ").toLowerCase() + '',
        'eventLabel': '' + cityName.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''
       
    });
}


function midPageStory_subdomain(pos, catNames, headline, eng_title) {pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'subdomain_home',
        'eventCategory': 'Subdomain page story click',
        'eventAction': 'top stories|all',
        'eventLabel': '' + pos + '', 'Page Type': '' + pgtype.toLowerCase() + '',
        'Article Name': '' + eng_title + ''
    });
    //dataLayer.push({
    //    'event': 'middle_section',
    //    'eventCategory': 'Mid page story click',
    //    'eventAction': '' + pos + '',
    //    'eventLabel': '' + eng_title + '', 'Page Type': '' + pgtype.toLowerCase() + ''
    //});
}



function subcatt(subdomain,cityName){
    pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'subdomain_home' ,
        'eventCategory' : 'Subdomain Based Location Listing',
        'eventAction': '' + subdomain.replace("-", " ").toLowerCase() + '',
        'eventLabel': '' + cityName.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''
       
    });
}
function strytag(tagname, datearticle, artCat, stryid, newsUrl, contentType, doA, hoA, tags, auhtorr, subcat, authid, readtime, wordCount, headline)
{
    dataLayer.push({
        'event': 'article_page',
        'eventCategory': 'article content tracking',
        'eventAction': 'article tag click',
        'eventLabel': '' + tagname + '',
        'Page Type': 'story',       
        'Article Author': '' + auhtorr.toLowerCase() + '',
        'Ad blocker': 'no',
        'Article Category': '' + artCat.replace("-", " ").toLowerCase() + '',
        'Date of Article': '' + datearticle + '',
        'Day of Article': '' + doA + '',
        'Hour of Article': '' + hoA + '',
        'Story ID': '' + stryid + '',
        'GTM Deployed Version': "undefined",
        'Word Bucket': '' + wordCount + '',
        'Tags': '' + tags + '',
        'Content Type': '' + contentType + '',
        'Author ID': '' + authid + '',
        'Estimated reading time': '' + readtime + '',
        'Article subcategory': '' + artCat.replace("-", " ").toLowerCase() + ''
    });
}

function stryNext(headline) { pgtype = document.getElementById("txtcom").value; dataLayer.push({ 'event': 'article_page', 'eventCategory': 'article content tracking', 'eventAction': 'Next story click', 'eventLabel': '' + headline + '', 'Page Type': '' + pgtype.toLowerCase() + '', 'Article Name': '' + headline + '' }); }
function cmnt(btnclick, headline) { pgtype = document.getElementById("txtcom").value; dataLayer.push({ 'event': 'article_page', 'eventCategory': 'Article Content Tracking', 'eventAction': '' + btnclick + '', 'eventLabel': '' + headline + '', 'Page Type': '' + pgtype.toLowerCase() + '' }); }

function clickOnSocialShare(socialType, datearticle, artCat, stryid, newsUrl, contentType, doA, hoA, tags, auhtorr, subcat, authid, readtime, wordCount, headline) {
    pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'Article Social Share',
        'eventCategory': 'Social Share',
        'eventAction': '' + socialType + '',
        'Page Type': 'story',
        'Article Name': '' + headline + '',
        'Article Author': '' + auhtorr.toLowerCase() + '',
        'Ad blocker': 'no',        
        'Article Category': ''+artCat.replace("-", " ").toLowerCase()+'',
        'Date of Article': ''+datearticle+'',
        'Day of Article': ''+doA+'',
        'Hour of Article': ''+hoA+'',
        'Story ID': '' + stryid + '',
        'GTM Deployed Version': "undefined",
        'Word Bucket': '' + wordCount + '',
        'Tags': '' + tags + '',        
        'Content Type': '' + contentType + '',
        'Author ID': '' + authid + '',
        'Estimated reading time': '' + readtime + '',
        'Article subcategory': ''+ artCat.replace("-", " ").toLowerCase() +''
    });
}


function contacts() {pgtype = document.getElementById("txtcom").value;
    dataLayer.push(
        {
            'event': 'contact_us_page' ,
            'eventCategory' : 'Contact us form submit',
            'eventAction': 'Submit Form', 'Page Type': '' + pgtype.toLowerCase() + ''
        });
}



function dhrmCat(subcat) {pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'dharm' ,
        'eventCategory' : 'Dharm Subcategory Click',
        'eventAction': '' + subcat.replace("-", " ").toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''
    }); 
}



function zodiacSign(zsign,wmy)
{pgtype = document.getElementById("txtcom").value;
    if (wmy == "") {
        dataLayer.push({
            'event': 'dharm_horoscope',
            'eventCategory': 'Horoscope',
            'eventAction': '' + zsign.toLowerCase() + '', 'Page Type': '' + pgtype.toLowerCase() + ''
        });
    }
    else {
        dataLayer.push({
            'event': 'dharm_horoscope',
            'eventCategory': 'Horoscope',
            'eventAction': '' + zsign.replace("-", " ").toLowerCase() + '',
            'eventLabel': '' + wmy + '', 'Page Type': '' + pgtype.toLowerCase() + ''
        });
    }
}


function pksec(maincat,subcat)
{
    pgtype = document.getElementById("txtcom").value;
    dataLayer.push({
        'event': 'Internal Category_home' ,
        'eventCategory' : 'Category Based Location Listing',
        'eventAction' : ''+maincat+'',
        'eventLabel' : ''+subcat+''
       , 'Page Type': '' + pgtype.toLowerCase() + ''
});
}

function pksecNews(cat, pos, headline)
{
    pgtype = document.getElementById("txtcom").value;
dataLayer.push({
    'event': 'Internal Category_home',
    'eventCategory' : 'Internal category page story click',
    'eventAction' :''+cat+'',
    'eventLabel' : ''+pos+'',
    'Page Type': '' + pgtype.toLowerCase() + '','Article Name':''+headline+''
});
}

function dhrmm(evtCat, evtAct, headline)
{
    pgtype = document.getElementById("txtcom").value;
dataLayer.push({
    'event': 'dharm' ,
    'eventCategory' : ''+evtCat+'',
    'eventAction' : ''+evtAct+'',
    'eventLabel': '' + headline + '',
 'Page Type': '' + pgtype.toLowerCase() + '','Article Name':''+headline+''});
}