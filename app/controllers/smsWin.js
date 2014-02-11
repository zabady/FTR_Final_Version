// TODO: Sending the user an SMS from the server with the code and getting the code here
// TODO: var codeSentFromServer = ....
// TODO: Send the server the user's phone number to send him the confirmation code


/////////////////////////////////////////////////////////////////////////// HANDLING UI AND EVENT LISTENERS FUNCTIONS
// Adding a toolbar for the keyboard for iOS
// TODO: Discussion Point: The toolbar have issues, should we remove it ? YES
//		 1. Sometimes it appears and doesn't disappear with the keyboard
//		 2. Sometimes it doesn't appear
if(OS_IOS) {
	var btn_done = Titanium.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.DONE });
	btn_done.addEventListener('click',function(e) {
		$.win.fireEvent('click'); // To blur keyboard
// TODO: Discussion point: Should this button and the return key button in android fire event Continue clickded or not,
// 		 if yes, should its title be Continue on iOS ? NO
    });
	var flexSpace = Titanium.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE });
	$.txt_SMSCode.keyboardToolbar = [flexSpace, btn_done];
}

 
// Adding a click event listener for the window to blur the keyboard
$.win.addEventListener('click', function(){
	$.txt_SMSCode.blur();
});


// Defining a function for the SMS text field that enables the Button Continue
function editingSMSCodeTxt(e) {
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
		if($.txt_SMSCode.value == "4444") {
			$.win.fireEvent('click'); // To blur keyboard
			
			// Navigate to user's main details window
			var userMainDetailsWin = Alloy.createController('userMainDetailsWin').getView();
			if(OS_IOS) {
				Alloy.Globals.mainNav.openWindow(userMainDetailsWin);
			}
			else {
				userMainDetailsWin.open();
			}
		} else {
			alert("Wrong Code !\nPlease try again");
			// Note that focus() doesn't open the keyboard on android, it just put a cursor in the text field
			$.txt_SMSCode.focus();
		}
	}
}


// Overriding back button in android to close the window not the app
$.win.addEventListener('androidback', function (e) 
{
    $.win.close();
});