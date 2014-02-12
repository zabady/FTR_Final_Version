// This is a bad solution to handle keyboard that is displayed over the text field on iOS
// TODO: Find a better solution
// A poor solution is ScrollView, it's very bad on android, and also bad on iOS of fullscreen mode
// TODO: Try this code on iphone 4s
// if(OS_IOS) {
	// $.txt_phoneNumber.addEventListener('focus', function(){
		// $.win.animate({bottom: '30%', duration:500});
	// });
	// $.txt_phoneNumber.addEventListener('blur', function() { 
		// $.win.animate({bottom: 0, duration:500});
	// });
// }


////////////////////////////////////////////////////////////////////////////////////////// PICKER AND TEXTFIELDS
// To get the current country, for testing we will use Locale
// TODO: Get the location from the IP not from the location
var currentCountryCode = Alloy.Globals.location;
//var currentCountryCode = Titanium.Locale.getCurrentCountry();
currentCountryCode = currentCountryCode.toLowerCase();

// Inheriting all countries from from countries.js file in lib directory
var countries = require('countries');

// Initializing the picker data
var pickerRows = [], selectedRow, counter = 0;
for (var country in countries) {
	var row = Titanium.UI.createPickerRow({
		title: countries[country].name,
		id: country.toUpperCase(),
	});
	
	if(countries[currentCountryCode] == countries[country]) {
		selectedRow = counter;
	}
	counter++;
	pickerRows.push(row);
}
$.picker.picker.add(pickerRows);
$.picker.picker.setSelectedRow(0, selectedRow, true);

// Setting the country's code label for the first time
// I should invoke chooseCountryAndCountryCode() method but it always gets an error msg saying
// that the picker is empty while it should not
// TODO: Learn about the dynamic UI !
$.lbl_countryCode.text = "+" + countries[currentCountryCode].phoneCode;


// Handling picker events and text fields for both iOS and android
if(OS_IOS) {

	// Setting the text country's text fields for the first time
	// TODO: Learn about the dynamic UI !
	$.txt_country_ios.value = countries[currentCountryCode].name;
		
	// Requiring animation to animate the iOS picker view
	var animation = require('alloy/animation');
	animation.fadeOut($.picker.pickerview, 0);
	var pickerAlive = false;
	
	// Defining a function to open or close iOS picker
	function openOrClosePicker(e) {
		$.txt_country_ios.blur();
		if($.picker.pickerview.visible == "false") {
			$.picker.pickerview.visible = true;
		}
		
		if(!pickerAlive) {
			animation.popIn($.picker.pickerview);
			pickerAlive = true;
			
		} else {
			animation.fadeOut($.picker.pickerview, 200);
			pickerAlive = false;
		}
	}
	
	// Adding event listener for the picker's toolbar Cancel button for closing the picker
	$.picker.toolbarBtn_cancel.addEventListener("click", openOrClosePicker);
	
	// Adding event listener for the picker's toolbar Done button after choosing the country
	$.picker.toolbarBtn_done.addEventListener("click", changeCountryAndCountryCode);
	
	// Adding a toolbar for the text field's keyboard for iOS
	var btn_done = Titanium.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.DONE,
	});
	btn_done.addEventListener('click',function(e) {
        $.txt_phoneNumber.blur();
    });
	var flexSpace = Titanium.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE,
	});
	$.txt_phoneNumber.keyboardToolbar = [flexSpace, btn_done];
	
} else if(OS_ANDROID) {
	// Applyins some styles on android picker
	$.addClass($.picker.picker, 'allStyles');
	$.addClass($.picker.picker, 'androidPicker');
	
	// Adding event listener for handling the android picker
	$.picker.picker.addEventListener('change', changeCountryAndCountryCode);
}
////////////////////////////////////////////////////////////////////////////////////////// END OF PICKER AND TEXTFIELDS


////////////////////////////////////////////////////////////////////////////////////////// FUNCTIONS FOR BOTH PLATFORMS
// Defining a function that changes the country and country code text fields for both platforms
function changeCountryAndCountryCode(e) {
	if(OS_IOS) {
		$.txt_country_ios.value = $.picker.picker.getSelectedRow(0).title;
		openOrClosePicker();
	}
	currentCountryCode = $.picker.picker.getSelectedRow(0).id.toLowerCase();
	$.lbl_countryCode.text = "+" + countries[currentCountryCode].phoneCode;
}


// Defining a function for Continue button that shows an alert dialog to confirm the user's number
function continueBtnPressed(e) {
	var phoneNumberRegex = /^[0-9]{9,15}$/;
	if ($.txt_phoneNumber.value.match(phoneNumberRegex)) {
		$.dialog_confirm.message = "Do do you confirm that this is your number: " + $.lbl_countryCode.text 
			+ $.txt_phoneNumber.value + "\nAn SMS with your access code will be sent to this number.";
		$.dialog_confirm.show();	
	} else alert("The number you entered is not valid");
}


// Defining a function that opens a webview for Q&A on bofffme.com
function openWebView(e) {
	var webview = Alloy.createController('webview', e.source.url).getView();
	if(OS_IOS) {
		Alloy.Globals.mainNav.openWindow(webview);
	}
	else {
		webview.open();
	}
}


////////////////////////////////////////////////////////////////////////////////////////// Navigate to SMS controller function
// Defining a function for Dialog Confirm to let the user edit or confirm his number
function dialogConfirmPressed(e){
	// Index 0, for Edit button, index 1 for Confirm button
	if(e.index == 0) {
		$.txt_phoneNumber.focus();
	} else {
		// Save the user's phone number in the global data variable
		Alloy.Globals.globalUserSignUpData.phone = $.lbl_countryCode.text + $.txt_phoneNumber.value;
		
		// Navigate to SMS Code confirmation
		var smsWin = Alloy.createController('smsWin').getView();
		if(OS_IOS) {
			Alloy.Globals.mainNav.openWindow(smsWin);
		}
		else {
			smsWin.open();
		}
	}
};
////////////////////////////////////////////////////////////////////////////////////////// END OF PHONE NUMBER CONTROLLER



// Overriding back button in android to close the window not the app
$.win.addEventListener('androidback', function (e) {
    $.win.close({
    	activityExitAnimation: Ti.Android.R.anim.slide_out_right,
    });
});