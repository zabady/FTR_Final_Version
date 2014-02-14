var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.apiUrl = "http://www.bofffme.com/api/index.php/home/";

Alloy.Globals.firstTimeRun = false;

Alloy.Globals.globalUserSignUpData = new Object({
    name: "temp",
    phone: "+201009091995",
    email: "temp",
    profilePicture: new Object()
});

Titanium.Geolocation.getCurrentPosition(function(e) {
    if (!e.success) {
        alert("Could not retrieve location");
        return;
    }
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    Titanium.Geolocation.reverseGeocoder(latitude, longitude, function(evt) {
        if (evt.success) {
            var places = evt.places;
            places && places.length ? Alloy.Globals.location = places[0].country_code : address = "No address found";
        }
    });
});

Alloy.createController("index");