// TODO: What if the server is down ? This is an issue and it's on github
/////////////////////////////////////////////////////////////////////////// SEND USER ACCESS CODE FROM SERVER
var accessCode = "0000";	// TODO: Used for testing and must be removed on the real app
var xhr = Ti.Network.createHTTPClient({
	onload: function(e) {
		var response = JSON.parse(this.responseText);
		alert(response.rows); // TODO: used for testing and must be removed on the real app
		accessCode = response.rows;
	},
	onerror: function(e) {
		Ti.UI.createAlertDialog({
			title : 'Error',
			message : 'Check your internet connection.',
			cancel : 0,
			buttonNames : ['Ok']
		}).show();
	},
});
xhr.open("POST", Alloy.Globals.apiUrl + "send_code_msg");

// Create the msg parameters that will be sent to the server
var msgParams = {
	mobile: Alloy.Globals.globalUserSignUpData.phone,
};
// Send the request to the server
// xhr.send(msgParams);


/////////////////////////////////////////////////////////////////////////// HANDLING UI AND EVENT LISTENERS FUNCTIONS
// Defining a function for the SMS text field that enables the Button Continue
function onChangeSMSCodeTxtField(e) {
	if(e.source.value.length == 4) {
		$.btn_continue.enabled = true;
		$.btn_continue.backgroundColor = "#2279bc";
		$.btn_continue.color = "white";
	} else {
		$.btn_continue.enabled = false;
		$.btn_continue.backgroundColor = "#D8D8D8"; // Gray
		$.btn_continue.color = "#C0C0C0"; // Dark Gray
	}
}


// Definig a function for Button Continue to navigate to the next window if the code is correct
function continueBtnPressed() {
	if($.btn_continue.enabled) { // Just to make sure that the button is enabled
		if($.txt_SMSCode.value == accessCode) {
			// Navigate to user's main details window
			var userMainDetailsWin = Alloy.createController('userMainDetailsWin').getView();
			if(OS_IOS) {
				Alloy.Globals.mainNav.openWindow(userMainDetailsWin);
			}
			else {
				userMainDetailsWin.open({ activityEnterAnimation: Ti.Android.R.anim.slide_in_left });
			}
		} else {
			alert("Wrong Code !\nPlease try again");
			// Note that focus() doesn't open the keyboard on android, it just put a cursor in the text field
			$.txt_SMSCode.focus();
		}
	}
}


// Adding a click event listener for the window to blur the keyboard
$.win.addEventListener('click', function(){
	$.txt_SMSCode.blur();
});

// Overriding back button in android to close the window not the app
$.win.addEventListener('androidback', function (e) {
    $.win.close({ activityExitAnimation: Ti.Android.R.anim.slide_out_right });
});