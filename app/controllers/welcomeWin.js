// TODO: Make sure that timeouts used in creating httpClients are good
// TODO: Handle softKeyboardOnFocus for android
// TODO: Take a decision weather using dps or making main unit dp instead of px in TiApp.xml file
// TODO: Handle android windows animation

function openPhoneNumberWin(e) 
{
	var phoneNumberWin = Alloy.createController("phoneNumberWin").getView();
	//var phoneNumberWin = Alloy.createController("editProfileWin1").getView(); // For testing
 	if(OS_IOS) {
		Alloy.Globals.mainNav.openWindow(phoneNumberWin);
	} else {
		phoneNumberWin.open({
			//modal: true,
			activityEnterAnimation: Ti.Android.R.anim.slide_in_left,
	        //activityExitAnimation: Ti.Android.R.anim.slide_out_right
		});
	}
}

$.win.navBarHidden = true;
$.win.open();

// This is for testing commits on github.com