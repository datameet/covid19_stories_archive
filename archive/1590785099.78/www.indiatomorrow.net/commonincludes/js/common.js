String.prototype.trim = function() {
	return this.replace(/^\s+/,'').replace(/\s+$/,'');
}

function IsOnlyNumbers(str) {
	var nonums = /^[0-9]*$/;
	if (nonums.test(str))
	return true;
	else
	return false;
}

function uniqueArr(a) {
	 temp = new Array();
	 for(i=0;i<a.length;i++){
	  if(!contains(temp, a[i])){
	   temp.length+=1;
	   temp[temp.length-1]=a[i];
	  }
	 }
	 return temp;
	}
	 
	//Will check for the Uniqueness
	function contains(a, e) {
	 for(j=0;j<a.length;j++)if(a[j]==e)return true;
	 return false;
	}

function CheckNumber(inPutStr)
{
	if(IsOnlyNumbers(inPutStr) == false)
	{
		alert('Please enter only Number.');
		return false;
	}
	else if(inPutStr == '0')
	{
		alert('0 is not valid. Please start with 1.');
		return false;	
	}
}
	
function IsOnlyChars(name) 
{
	str = "0123456789";
	for(i=0; i<name.length; i++) {
		if(str.indexOf(name.charAt(i)) != -1) {
			return true;
		}
	}
	return false;
}

function checkFloat(str) {
    reg = /^[0-9]+(\.[0-9]+)?$/;
	if(reg.test(str)){
		return true;
	} else {
		return false;	
	}
}

function ValidateImageExtension(imgName) {
	var ext = '';	
	imgArr = imgName.split('.');
	ext = imgArr[(imgArr.length) - 1];
	ext = ext.toLowerCase();
	if(ext == 'jpg' || ext =='jpeg' || ext =='gif' || ext =='png') {
		return true;
	} else {
		//alert('Only jpg and gif files are allowed');
		return false;		
	}
}

function ValidatePDF(pdfName) {
	var ext = '';	
	pdfArr = pdfName.split('.');
	ext = pdfArr[(pdfArr.length) - 1];
	ext = ext.toLowerCase();

	if(ext == 'pptx' || ext =='ppt' || ext =='doc' || ext =='docx' || ext =='pdf' || ext =='x-pdf' || ext =='x-gzpdf' || ext =='x-bzpdf') {
		return true;
	} else {
		//alert('Only jpg and gif files are allowed');
		return false;		
	}
}

function ValidatePPTF(pptfName) {
	var ext = '';	
	pptfArr = pptfName.split('.');
	ext = pptfArr[(pptfArr.length) - 1];
	ext = ext.toLowerCase();

	if(ext == 'pptx' || ext =='ppsx' || ext =='ppt' || ext =='doc' || ext =='docx' || ext =='pdf' || ext =='x-pdf' || ext =='x-gzpdf' || ext =='x-bzpdf') {
		return true;
	} else {
		//alert('Only jpg and gif files are allowed');
		return false;		
	}
}

function ValidateDOCExtra(pdfName) {
	var ext = '';	
	pdfArr = pdfName.split('.');
	ext = pdfArr[(pdfArr.length) - 1];
	ext = ext.toLowerCase();

	if(ext == 'doc' || ext =='docx') {
		return true;
	} else {
		//alert('Only jpg and gif files are allowed');
		return false;		
	}
}

function ValidateVideoExtension(imgName) 
{
	var ext = '';	
	imgArr = imgName.split('.');
	ext = imgArr[(imgArr.length) - 1];
	ext = ext.toLowerCase();
	
	if(ext == 'flv')
		return true;
	else 
		return false;
}

function ValidateAudioExtension(imgName) 
{
	var ext = '';	
	imgArr = imgName.split('.');
	ext = imgArr[(imgArr.length) - 1];
	ext = ext.toLowerCase();
	
	if(ext == 'mp3')
		return true;
	else 
		return false;
}

function ValidateDocExtension(imgName) {
	var ext = '';	
	imgArr = imgName.split('.');
	ext = imgArr[(imgArr.length) - 1];
	ext = ext.toLowerCase();
	if(ext == 'pdf' || ext =='doc' ) {
		return true;
	} else {
		return false;		
	}
}
		
function displayAlert(msg){
	if(msg) $('msg_div').innerHTML = msg;
	$('alert_div').className = 'alert_show';
}

function containSpecialCharacters(str, exclude) {

	var iChars = "! @#$%^&*()+=-[]\\\';,./{}|\":<>?";
	if(exclude) {
		for (var j=0; j < exclude.length; j++) {
			iChars = iChars.replace(exclude.charAt(j), '');
		}
	}

	for (var i = 0; i < str.length; i++) {
		if (iChars.indexOf(str.charAt(i)) != -1) {
			return true;
		}
	}
	return false;
}


//For Email Validation
function ValidateEMail(objName) { 
	var sobjValue;
	sobjValue = objName.trim(); 
		
	if(sobjValue.match(">")){	
		sobjValue = sobjValue.replace(/>/g,'');				
	}
	
	if(sobjValue.match("<")){	
		sobjValue = sobjValue.replace(/</g,'');			
	}
	
	if(sobjValue.match('"')){		
		sobjValue = sobjValue.replace(/"[^"]*"/g,'');		
	}
	
	sobjValue = sobjValue.trim();	
	var reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	
	if(sobjValue.length > 5 && reEmail.test(sobjValue)) {
		return true;
	} else {
		return false;
	}
}

//For Phone Validation
function ValidatePhone(objName) { 
	//var PhoneReg =  /^[\(|\+|\d]?(\d{1,6})[\)|\s|\-]?[\(|\s|\-]?(\d{1,6})[\)|\s|\-]?([\s|\-]?(\d{1,6}))+$/
	var PhoneReg =  /^[\)|\s|\-]?[\(|\s|\-]?(\d{1,6})[\)|\s|\-]?([\s|\-]?(\d{1,6}))+$/
	if(PhoneReg.test(objName)) { 
		return true;
	} else {
		return false;
	}
}

//For Date Compare
function IsStartBeforeFinish( sDateStart, sDateEnd ) {
	/* previous code --------
	return String2Date(sDateStart) < String2Date(sDateEnd);
	*/
	
	startArr = sDateStart.split('-');
	endArr = sDateEnd.split('-');
	
	var y1 = startArr[2];
	var m1 = startArr[1];
	var d1 = startArr[0];
	
	var y2 = endArr[2];
	var m2 = endArr[1];
	var d2 = endArr[0];
	
	date1 = new Date(y1,m1,d1);
	date2 = new Date(y2,m2,d2);
	//alert(date1);
	//alert(date2);
	
	if (date1.getTime() <= date2.getTime()) {
		return true;
	} else {
		return false;
	}
}

function isURL(argvalue) { 
	urlRegEx = /http[s]?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?/;
	var testVal = argvalue.trim(); 
	if(testVal.length > 9 && urlRegEx.test(testVal)) { 
		return true;
	} else { 
		return false; 
	}
}

//Image Validation
function ValidateImg(objImg)
{
	
	
		var iPos = objImg.lastIndexOf(".")
		var sExt = objImg.substring(iPos);
//		if((sExt.toUpperCase()=='.JPEG') || (sExt.toUpperCase()=='.JPG') || (sExt.toUpperCase()=='.GIF') || (sExt.toUpperCase()=='.BMP') )
		if((sExt.toUpperCase()=='.JPEG') || (sExt.toUpperCase()=='.JPG') || (sExt.toUpperCase()=='.GIF'))
		{
			return true;
		}
		else
		{
			return false;
		}
	
	return true;
}


function MM_openBrWindow(theURL,winName,features) { //v2.0
	var newWin = window.open(theURL,winName,features);
	newWin.focus(); 
}

function changePage(pageNum) { 
	
	var url = $F('pageurl'); 
	var pars = 'page='+ pageNum;
	var myAjax = new Ajax.Request(
	url, 
	{
		method: 'POST',
		parameters: pars,
		onComplete: changePage_resp
	});
}


function changePage_resp(originalRequest) {
	result = originalRequest.responseText;
	result = result.trim(); 
	
	$('main-action-div').innerHTML = result;
	return false;
}

function countChar(fobj, total) {
	//alert(fobj);
	//var total = 10;
	var used = fobj.length;
	if(total >= used) {
		//document.getElementById("dsc_cnt").innerHTML = total - used;
	} else {
		fobj.value = fobj.value.substring(0, total);
	}
}

function URLEncode(plaintext)
{
	// The Javascript escape and unescape functions do not correspond
	// with what browsers actually do...
	var SAFECHARS = "0123456789" +					// Numeric
					"ABCDEFGHIJKLMNOPQRSTUVWXYZ" +	// Alphabetic
					"abcdefghijklmnopqrstuvwxyz" +
					"-_.!~*'()";					// RFC2396 Mark characters
	var HEX = "0123456789ABCDEF";

	//var plaintext = document.URLForm.F1.value;
	var encoded = "";
	for (var i = 0; i < plaintext.length; i++ ) {
		var ch = plaintext.charAt(i);
	    /*if (ch == " ") {
		    encoded += "+";				// x-www-urlencoded, rather than %20
		} else*/ 
		if (SAFECHARS.indexOf(ch) != -1) {
		    encoded += ch;
		} else {
		    var charCode = ch.charCodeAt(0);
			if (charCode > 255) {
			   /* alert( "Unicode Character '" 
                        + ch 
                        + "' cannot be encoded using standard URL encoding.\n" +
				          "(URL encoding only supports 8-bit characters.)\n" +
						  "A space (+) will be substituted." );*/
				encoded += "+";
			} else {
				encoded += "%";
				encoded += HEX.charAt((charCode >> 4) & 0xF);
				encoded += HEX.charAt(charCode & 0xF);
			}
		}
	} // for

	//document.URLForm.F2.value = encoded;
	//alert(encoded);
	return encoded;
};


function createXMLHttpRequest() {
		var ua;
		if(window.XMLHttpRequest) {
			try {
				ua = new XMLHttpRequest();
			} catch(e) {
				ua = false;
			}
		} else if(window.ActiveXObject) {
			try {
				ua = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				ua = false;
			}
		}
		return ua;
	}

function AddToOptionList(OptionList, OptionValue, OptionText) { 
		OptionList[eval(OptionList.length)] = new Option(OptionText, OptionValue);
	}

function ClearOptions(OptionList) { 
		for(x=eval(OptionList.length); x>=0; x--) {
			OptionList[x] = null;
		}
	}
	
function getEditorValue(obj) {
	var browserName = navigator.appName; 
	if (browserName=="Netscape") { 
		return obj.textContent;
	} else { 
		if (browserName=="Microsoft Internet Explorer") {
			return obj.innerText;
		} else  {
			return  obj.innerText;
		}
	}	
}

var dtCh= "-";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function validateDate(fld) {
   	
	var RegExPattern = /^\d{1,2}\-\d{1,2}\-\d{4}$/;
	
	var errorMessage = 'Please enter valid date format.';
    if ((fld.value.match(RegExPattern)) && (fld.value!='')) {
        
		var dtStr = fld.value;
		var daysInMonth = DaysArray(12)
		var pos1=dtStr.indexOf(dtCh)
		var pos2=dtStr.indexOf(dtCh,pos1+1)
				
		var strDay=dtStr.substring(0,pos1)
		var strMonth=dtStr.substring(pos1+1,pos2)
		var strYear=dtStr.substring(pos2+1)
		strYr=strYear
		
		if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
		if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
		for (var i = 1; i <= 3; i++) {
			if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
		}
		month=parseInt(strMonth)
		day=parseInt(strDay)
		year=parseInt(strYr)
		
		if (strMonth.length<1 || month<1 || month>12){
			alert("Please enter a valid month")
			return false
		}
		
		if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
			alert("Please enter a valid day")
			return false
		}
		if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
			alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
			return false
		}
		if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
			alert("Please enter a valid date")
			return false
		}
	
		//alert('Date is OK'); 
		return true;
    } else {
        alert(errorMessage);
       // fld.focus();
		
		return false;
    } 
}


//ABSARUL HAQUE
//Reset FCKEditor Value
function resetEditors() 
{ 
    // If the editor API does not exist, there are no editors 
    if (typeof FCKeditorAPI == "undefined") return; 

    // Loop through all FCK instances, in case there are several editors 
    for (var sEditorName in FCKeditorAPI.__Instances) 
    { 
        // The initial value that was set when the form was created 
        // is stored in a hidden <INPUT> with the same name as the 
        // editor (the editor itself is in an <IFRAME> with ___Frame 
        // appended to the name.  Check whether that INPUT exists 
        if (document.getElementById(sEditorName)) 
        { 
            // Get the initial value 
            var sInitialValue = document.getElementById(sEditorName).value; 
            // Overwrite the editor's current value 
			sInitialValue="";
            FCKeditorAPI.__Instances[sEditorName].SetHTML(sInitialValue); 
        } 
    } 
}

function goBack(action)
{
  document.frm.action = action;
  document.frm.submit();
}
function gKw(key_word)
{
	var url = 'index.php?event=srhk';
	var pars = 'valid=1';	
	
	if($F('srcTxt').trim() != '' && $F('srcTxt').length > 2)
	{
		pars = pars+'&srcTxt='+ $F('srcTxt').trim();
		var myAjax = new Ajax.Request(
			url, 
			{
				method: 'POST',
				parameters: pars,
				onComplete: post_chk_suggest_res
			}
		);	;
	}
}

function post_chk_suggest_res(originalRequest) 
{		
	result = originalRequest.responseText;	
	if(result != '') 
	{
		var wordList = result.split('||');
		var strTable = '';
		
		if(wordList.length > 1)
		{
			for(i=1; i < wordList.length; i++) 
			{ 
				strTable = strTable+"&nbsp;&nbsp;<a href='#' onclick='javascript:InsertDivData("+'"'+wordList[i]+'"'+");'>"+wordList[i]+"</a><br>";
			}
		}
		
		if(strTable != '')
		{	
			strTable = strTable+'<span style="float:right"><a href="#" onclick="javascript:closeDiv(\'sgNm\')";>Close</a></span>';
			$('sgNm').innerHTML = '';
			$('sgNm').innerHTML = strTable;	
			$('sgNm').style.display = 'block';
			//$('sgNm').setStyle('border:1px solid #0099FF;width:280px'); 
		}
	}
	else
	{
		closeDiv('sgNm');
	}
}
function closeDiv(divId)
{
	if($(divId))
		$(divId).style.display = 'none';
}
function InsertDivData(srchWord)
{
	if(srchWord != '')
	{
		$('srcTxt').value = srchWord;
		$('sgNm').innerHTML = '';
		$('srcTxt').focus();
		$('sgNm').style.display = 'none';
	}
}