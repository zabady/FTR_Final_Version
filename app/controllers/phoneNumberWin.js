////////////////////////////////////////////////////////////////////////////////////////// PICKER AND TEXTFIELDS
// To get the current country, for testing we will use Locale
// TODO: Get the location from the IP not from the location
//var currentCountryCode = Alloy.Globals.location;
var currentCountryCode = Titanium.Locale.getCurrentCountry();
currentCountryCode = currentCountryCode.toLowerCase();

// Inheriting all countries from from countries.js file in lib directory
var allCountries = require('countries');

// Initializing the picker data
var pickerRows = [], selectedRow, counter = 0;
for (var country in allCountries) {
	var row = Titanium.UI.createPickerRow({
		title: allCountries[country].name + " (+" + allCountries[country].phoneCode + ")",
		id: country.toUpperCase(),
	});
	
	if(allCountries[currentCountryCode] == allCountries[country]) {
		selectedRow = counter;
	}
	counter++;
	pickerRows.push(row);
}
$.picker.add(pickerRows);
$.picker.setSelectedRow(0, selectedRow, true);


// Handling picker events and text fields for both iOS and android
if(OS_IOS) {

	// Setting the text country's text fields for the first time
	$.lbl_country_ios.text = allCountries[currentCountryCode].name + " (+" + allCountries[currentCountryCode].phoneCode + ")";
		
// TODO: Handle that picker shit on iOS
	// Requiring animation to animate the iOS picker view
	var animation = require('alloy/animation');
	//animation.fadeOut($.picker, 0);
	//animation.popIn($.picker);
	
	// Defining a function to open or close iOS picker
	function openPicker() {
		//if($.picker.visible == false) $.picker.visible = true;
		//animation.fadeIn($.picker, 500);
		//$.pickerView.height = Ti.UI.SIZE;
		$.picker.top = 100;
		animation.popIn($.picker, function(e){
			alert("WTF");
		});
	}
}
////////////////////////////////////////////////////////////////////////////////////////// END OF PICKER AND TEXTFIELDS


////////////////////////////////////////////////////////////////////////////////////////// FUNCTIONS FOR BOTH PLATFORMS
// Defining a function that changes the country and country code text fields for both platforms
function changeCountryAndCountryCode() {
	if(OS_IOS) $.lbl_country_ios.text = $.picker.getSelectedRow(0).title;
	currentCountryCode = $.picker.getSelectedRow(0).id.toLowerCase();
}

// Defining a function for Continue button that shows an alert dialog to confirm the user's number
function continueBtnPressed(e) {
	var phoneNumberRegex = /^[0-9]{9,15}$/;
	if ($.txt_phoneNumber.value.match(phoneNumberRegex)) {
		$.dialog_confirm.message = "Do do you confirm that this is your number: +" + allCountries[currentCountryCode].phoneCode 
			+ parseInt($.txt_phoneNumber.value, 10) + "\nAn SMS with your access code will be sent to this number.";
		$.dialog_confirm.show();	
	} else alert("The number you entered is not valid");
}



////////////////////////////////////////////////////////////////////////////////////////// Navigate to SMS controller function
// Defining a function for Dialog Confirm to let the user edit or confirm his number
function dialogConfirmPressed(e){
	// Index 0, for Edit button, index 1 for Confirm button
	if(e.index == 0) {
		$.txt_phoneNumber.focus();
	} else {
		// Save the user's phone number in the global data variable
		Alloy.Globals.globalUserSignUpData.phone = "+" + allCountries[currentCountryCode].phoneCode 
			+ parseInt($.txt_phoneNumber.value, 10);
		
		// Navigate to SMS Code confirmation
		var smsWin = Alloy.createController('smsWin').getView();
		if(OS_IOS) {
			Alloy.Globals.mainNav.openWindow(smsWin);
		}
		else {
			smsWin.open();
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////// END OF PHONE NUMBER CONTROLLER



////////////////////////////////////////////////////////////////////////////////////////// Window Event Listeners
// Adding event listener on the window to blur the keyboard and close ios picker on click
$.win.addEventListener('click', function(e){
	//if(OS_IOS) animation.fadeOut($.picker, 500);
	$.txt_phoneNumber.blur();
	alert('I am executed!');
});

// Overriding back button in android to close the window not the app
$.win.addEventListener('androidback', function (e) {
    $.win.close({
    	activityExitAnimation: Ti.Android.R.anim.slide_out_right,
    });
});