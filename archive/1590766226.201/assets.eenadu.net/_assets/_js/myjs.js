//
//var adBlockEnabled = false;
//var testAd = document.createElement('div');
//testAd.innerHTML = '&nbsp;';
//testAd.className = 'adsbox';
//document.body.appendChild(testAd);
//window.setTimeout(function () {
//    if (testAd.offsetHeight === 0) {
//        adBlockEnabled = true;
//    }
//    testAd.remove();
////    console.log('AdBlock Enabled? ', adBlockEnabled);
//    if (adBlockEnabled) {
//        alert("Please disable adblocker");
//	//	loadpopup();
////        window.location=base_url+"adblocker";
////        window.open('', '_self').close();
//    }else{
////        window.location.href=base_url;
//    }
//}, 100);
//
//function loadpopup() {
//                var id = '#dialog';
//
//                var maskHeight = $(document).height();
//                var maskWidth = $(window).width();
//
//                $('#mask').css({'height':maskHeight});
//
//                $('#mask').fadeIn(500);
//                $('#mask').fadeTo("slow",0.9);
//
//                var winH = $(window).height();
//                var winW = $(window).width();
//
//                $(id).css('top',  winH/0-$(id).height()/2);
//                $(id).css('left', winW/0-$(id).width()/2);
//
//                $(id).fadeIn(2000);
//
//
//        $('.window .close').click(function (e) {
//                e.preventDefault();
//
//                $('#mask').hide();
//                $('.window').hide();
//        });
//
//        $('#mask').onclick(function () {
//                $(this).hide();
//                $('.window').hide();
//        });
//}
