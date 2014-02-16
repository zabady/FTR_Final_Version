// TODO: Resize the captured image from gallery or camera to three different resolutions
// TODO: Discussion about how many pictures for one user should we save ?
// TODO: Handling image rotation
// TODO: Discussion point, should the app goes to edit your profile in a navigation window ? NO
// TODO: Handle Loading
// TODO: Handle coming back from camera, it loads the app from the begining

/////////////////////////////////////////////////////////////////////////// LOGIC FUNCTIONS
// Name valicator funtcion ---- > text only 
function validate_name()
{
	var regexp =/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/;
    if($.txt_name.value.match(regexp) && $.txt_name.value.length > 2) {
    	// If it's correct, save it
    	Alloy.Globals.globalUserSignUpData.name = $.txt_name.value;
    	return true;
    } else {
    	alert("Invalid name, it should be greater than 2 charachters and text only !");
		$.txt_name.focus();
		return false;
    }
}

//  Email validation ------ > email format
function validate_email()
{
	var emailvalid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if ($.txt_email.value.match(emailvalid)) {
		// If it's correct, save it
    	Alloy.Globals.globalUserSignUpData.email = $.txt_email.value;
		return true;
	} else {
		alert("Invalid email !");
		$.txt_email.focus();
		return false;
	}
}

// Check if a gender is selected or not
function checkGender()
{
	if(Alloy.Globals.globalUserSignUpData.gender == "temp") {
		alert("Please Select Gender");
		return false;
	} else return true;
}

// Defining a function to be executed when facebook finish
function facebookFinished() {
	// Set user name, email, gender and photo
	$.txt_name.value = Alloy.Globals.globalUserSignUpData.name;
	$.txt_email.value = Alloy.Globals.globalUserSignUpData.email;
	Alloy.Globals.globalUserSignUpData.gender ? $.img_gender_male.fireEvent('click') : $.img_gender_female.fireEvent('click');
	$.img_user.image = Alloy.Globals.globalUserSignUpData.profilePicture.display.read();
	$.img_user.width = Ti.UI.SIZE;
}

// Adding facebookFinished function to be global function to get fired by facebook.js
Ti.App.addEventListener('facebookFinished', facebookFinished);

// Removing facebookFinished event listener when the window is closed to save memory
$.win.addEventListener('close', function(){
	Ti.App.removeEventListener('facebookFinished', facebookFinished);
});
/////////////////////////////////////////////////////////////////////////// END OF LOGIC FUNCTIONS


/////////////////////////////////////////////////////////////////////////// HANDLING UI AND EVENT LISTENERS
// Android Workarounds: Remove keyboard autofocus and for the camera layout
if(OS_ANDROID) {
	var firstTime = true;
	$.txt_name.addEventListener('focus', function(e) {
		if(firstTime) {
			e.source.blur();
			firstTime = false;
		}
	});
	
	// Defining a function for capturing a photo for android layout
	var photoOrientation;
	function capturePhotoPressed() {
		photoOrientation = $.win.orientation;
		Ti.Media.takePicture();
	}
}

// Adding a click event listener for the window to blur the keyboard
$.win.addEventListener('click', function(){
	$.txt_name.blur();
	$.txt_email.blur();
});

// Defining a function for pressing on Import from facebook
function facebookImgPressed() {
	
	// Including FacebookFunctions.js to call loginWithFacebook
	Ti.include("/facebookFunctions.js");
	// Send login with facebook the two functions that will be executed after login
	loginWithFacebook(requestWithGraphPath, getNameEmailPicture);
}

// Defining a function for pressing on the image
function imgPressed(e) {
	$.optionDialog.show();
}

// Defining a function for the option dialog to open the camera or choose a photo from library 
function optionDialogClick(e)
{
	// index "0" equals camera selection as a source
	if (e.index == 0) 
	{
		// if (osname == "android") {
			// $.win.orientationModes = [Titanium.UI.PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT, Titanium.UI.UPSIDE_PORTRAIT];
// 
			// Ti.Media.showCamera({
				// success : function(event) {
					// $.win.orientationModes = [Titanium.UI.PORTRAIT];
					// var image_cam = event.media;
// 
					// // check if image is captured in portrait mode
					// if (photoOrientation == 1) {
						// alert("portrait");
						// // check if image is forced to landscape (e.g : samsung)
						// var image_flipped = event.media.width > event.media.height;
						// if (image_flipped) {
							// var rotation = Ti.UI.create2DMatrix({
								// rotate : -270
							// });
// 
							// $.img_user.image = image_cam;
							// $.img_user.transform = rotation;
// 
						// } else {
							// $.img_user.image = image_cam;
						// }
// 
					// } else {
						// alert("Landscape");
						// $.img_user.image = image_cam;
					// }
				// },
				// cancel : function() {
					// alert("You have cancelled !");
// 
				// },
				// error : function(error) {
					// // create alert
					// var alert_dialog = Ti.UI.createAlertDialog({
						// title : 'Camera',
						// buttonNames : ['Ok']
					// });
// 
					// // set message
					// if (error.code == Ti.Media.NO_CAMERA) {
						// alert_dialog.setMessage('Please run this test on device');
					// } else {
						// alert_dialog.setMessage('Unexpected error: ' + error.code);
					// }
// 
					// alert_dialog.show();
				// },
// 
				// saveToPhotoGallery : false,
				// allowEditing : true,
				// mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
				// showControls : false,
// 
				// overlay : $.view_camera_android // That's the point
			// });
// 
		// } else {
			// alert("iphone");
			// Ti.Media.showCamera({
// 
				// success : function(event) {
// 
					// var image_cam = event.media;
// 
					// $.img_usr.image = image_cam;
				// },
				// cancel : function() {
					// alert("You have cancelled !");
// 
				// },
				// error : function(error) {
					// // create alert
					// var alert_dialog = Ti.UI.createAlertDialog({
						// title : 'Camera',
						// buttonNames : ['Ok']
					// });
// 
					// // set message
					// if (error.code == Ti.Media.NO_CAMERA) {
						// alert_dialog.setMessage('Please run this test on device');
					// } else {
						// alert_dialog.setMessage('Unexpected error: ' + error.code);
					// }
// 
					// alert_dialog.show();
				// },
// 
				// saveToPhotoGallery : false,
				// allowEditing : true,
				// mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
// 
			// });
		// }

		
		
		
		
		Ti.Media.showCamera({
			success : function(event) {
				var cropRect = event.cropRect;
				var image_cam = event.media;
				Ti.API.debug('Our type was: ' + event.mediaType);
				if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {	// No use for this if statement
// TODO: Allow rotation once more
					//var rotation = Ti.UI.create2DMatrix({ rotate : -270 });  
					$.img_user.image = image_cam;
					//$.img_user.transform = rotation;
// TODO: Resize photo to small and icon and large
					Alloy.Globals.globalUserSignUpData.profilePicture = 
						Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, "img_profile_pic.jpg");
				}
				else {
					alert("got the wrong type back =" + event.mediaType);
				}
			},
			cancel : function() {
				alert("You have cancelled !");
			},
			error : function(error) {
				// create alert
				var  alert_dialog = Ti.UI.createAlertDialog({
					title : 'Camera',
					buttonNames : ['Ok']
				});
				// set message
				if (error.code == Ti.Media.NO_CAMERA) {
					alert_dialog.setMessage('Please run this test on device');
				} else {
					alert_dialog.setMessage('Unexpected error: ' + error.code);
				}
				alert_dialog.show();
			},
			saveToPhotoGallery: false,
			allowEditing: true,
			mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
			//showControls: 'false',			// For Android
			//overlay: $.view_camera_android,	// For Android
		});
	}
	
	// Index "1" equals gallery images as a source
	else if (e.index == 1)
	{
		Ti.Media.openPhotoGallery({
			success : function(event) {
				var cropRect = event.cropRect;
				var image = event.media;
				// set image view
				$.img_user.image = image;
// TODO: Check if it's a photo or not
// TODO: Resize photo to small and icon and large
				Alloy.Globals.globalUserSignUpData.profilePicture = 
					Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, "img_profile_pic.jpg");
			},
			cancel : function() {
				alert("You've Cancelled");
			},
			error : function(error) {
				alert('Unexpected error: ' + error.code);
			},
			allowEditing : true,
			mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
		});
	}
}

// Defining a function to give focus to email text field when return is pressed
function txtNameReturnKeyPressed() {
	$.txt_email.focus();
}

// Defining a function for gender selection
function genderSelected(e) {
	if(e.source.id == "img_gender_male") {
		$.lbl_gender_male.font = { fontSize: "20" };
		$.lbl_gender_female.font = { fontSize: "17" };;
		$.lbl_gender_male.color = "#2279bc";
		$.lbl_gender_female.color = "gray";
		$.img_gender_male.image = "/images/gender_male.png";
		$.img_gender_female.image = "/images/gender_female[shaded].png";
		Alloy.Globals.globalUserSignUpData.gender = "male";
	} else {
		$.lbl_gender_male.font = { fontSize: "17" };
		$.lbl_gender_female.font = { fontSize: "20" };;
		$.img_gender_male.image = "/images/gender_male[shaded].png";
		$.img_gender_female.image = "/images/gender_female.png";
		$.lbl_gender_male.color = "gray";
		$.lbl_gender_female.color = "#2279bc";
		Alloy.Globals.globalUserSignUpData.gender = "female";
	}
}

// Defining a function for pressing on Continue button
function continueBtnPressed() {
	
	if(validate_name() && validate_email() && checkGender()) {
		
		$.win.fireEvent('click');	// To blur keyboard
		
		// Go to the next window, complete your profile
		var editProfileWin = Alloy.createController("editProfileWin1").getView();
	 	if(OS_IOS) {
			Alloy.Globals.mainNav.openWindow(editProfileWin);
		} else {
			editProfileWin.open({ activityEnterAnimation: Ti.Android.R.anim.slide_in_left });
		}
	}
}

// Overriding back button in android to close the window not the app
$.win.addEventListener('androidback', function (e) {
    $.win.close({ activityExitAnimation: Ti.Android.R.anim.slide_out_right });
});