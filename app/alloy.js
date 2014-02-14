// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// Defining the navigation bar for iOS
if(OS_IOS) {
	Alloy.Globals.mainNav = new Object();
}

// Defining the server's api url
Alloy.Globals.apiUrl = 'http://www.bofffme.com/api/index.php/home/';

// Defining a variable for detecting if it's FTR or not
Alloy.Globals.firstTimeRun = false;

// Defining an associative array to save users data
Alloy.Globals.globalUserSignUpData = new Object({
	name: 'temp',
	//name: 'Ahmed Atif', // for testing
	//phone: 'temp',
	phone: '+201009091995',	// for testing
	email: 'temp',
	//email: 'ahmed.atif15@gamil.com', // for testing
	profilePicture: new Object(),
});

//////////////////////////////////////////////////////////////////////// ZeeZ's code for getting location
Titanium.Geolocation.getCurrentPosition( function(e) {
    if (!e.success) {
        alert('Could not retrieve location');
        return;
    }
    //here are users coordinates
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    // try to get address
    Titanium.Geolocation.reverseGeocoder(latitude,longitude, function(evt) {
        //here we will store address information
        var street;
        var city;
        var country;
        if (evt.success) {
            var places = evt.places;
            if (places && places.length) {
                // $.thelabel3.text = places[0].street;
                // $.thelabel2.text = places[0].city;
            	Alloy.Globals.location = places[0].country_code;
            } else {
                address = "No address found";
            }
        }
        //and now we can fill lables 
        //or create a pin on the map view
        //to display where user actually is
    });
});