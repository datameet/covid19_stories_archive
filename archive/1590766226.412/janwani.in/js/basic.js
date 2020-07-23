/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */


jQuery(function ($) {
	// Load dialog on page load


if(document.getElementById('hiddenusermail').value == "/"){

	//$('#basic-modal-content').modal();
	//$('#login_form').show();
	// Load dialog on click
	$('#basic-modal .basic').click(function (e) {
		$('#basic-modal-content').modal();
		$('#login_form').show();
		return false;
	});
}
else
{  
	$('#basic-modal-content').hide();
	$('#login_form').hide();
	// Load dialog on click
}

	$('#signup1').click(function (e)
	{
		$('#login_form').hide();
		$('#reg_form').show();
		return false;
	}
	);
	$('#basic-modal #subsc').click(function (e) {
		$('#basic-modal-content').modal();
		$('#reg_form').show();
		return false;
	});
	
});
