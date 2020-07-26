
function numeric(event)
{

  
var strUserAgent = navigator.userAgent.toLowerCase(); 
	var isIE = strUserAgent.indexOf("msie") > -1; 
	
	if(isIE)
	{
	   // alert(event.keyCode);
		if((event.keyCode>=48 && event.keyCode<=57) ||event.keyCode==0 ||event.keyCode==8 ||event.keyCode==47 ||event.keyCode==46 ||event.keyCode==43 ||event.keyCode==45)
			return true;
		else 
			//alert("Enter Numeric Digits");
			return false;
	}
	else
	{
	//alert(event.which);
		if((event.which>=48 && event.which<=57) ||event.which==0 ||event.which==8 ||event.which==47 ||event.which==46 ||event.which==43 ||event.which==45)
			return true;
		else 
		  //  alert("Enter Numeric Digits");
			return false;
	}	
}


function submitlogin(e)
{
   if(e.keyCode == 13 || e.which == 13)
    {
        if(document.getElementById('ctl00_ContentPlaceHolder1_txtusrname').value=="")
        {
            alert("Please enter user name.");
            document.getElementById('ctl00_ContentPlaceHolder1_txtusrname').focus();
            return false;
        }
        else
        {
            document.getElementById('ctl00_ContentPlaceHolder1_btnlogin').click();
        }
        
    }
   }

