function Controller() {
    function validate_name() {
        var regexp = /^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/;
        if ($.txt_name.value.match(regexp) && $.txt_name.value.length > 2) {
            Alloy.Globals.globalUserSignUpData.name = $.txt_name.value;
            return true;
        }
        alert("Invalid name, it should be greater than 2 charachters and text only !");
        $.txt_name.focus();
        return false;
    }
    function validate_email() {
        var emailvalid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ($.txt_email.value.match(emailvalid)) {
            Alloy.Globals.globalUserSignUpData.email = $.txt_email.value;
            return true;
        }
        alert("Invalid email !");
        $.txt_email.focus();
        return false;
    }
    function checkGender() {
        if ("temp" == Alloy.Globals.globalUserSignUpData.gender) {
            alert("Please Select Gender");
            return false;
        }
        return true;
    }
    function facebookFinished() {
        $.txt_name.value = Alloy.Globals.globalUserSignUpData.name;
        $.txt_email.value = Alloy.Globals.globalUserSignUpData.email;
        Alloy.Globals.globalUserSignUpData.gender ? $.img_gender_male.fireEvent("click") : $.img_gender_female.fireEvent("click");
        $.img_user.image = Alloy.Globals.globalUserSignUpData.profilePicture.display.read();
        $.img_user.width = Ti.UI.SIZE;
    }
    function facebookImgPressed() {
        Ti.include("/facebookFunctions.js");
        loginWithFacebook(requestWithGraphPath, getNameEmailPicture);
    }
    function imgPressed() {
        $.optionDialog.show();
    }
    function optionDialogClick(e) {
        0 == e.index ? Ti.Media.showCamera({
            success: function(event) {
                event.cropRect;
                var image_cam = event.media;
                Ti.API.debug("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    $.img_user.image = image_cam;
                    Alloy.Globals.globalUserSignUpData.profilePicture = Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, "img_profile_pic.jpg");
                } else alert("got the wrong type back =" + event.mediaType);
            },
            cancel: function() {
                alert("You have cancelled !");
            },
            error: function(error) {
                var alert_dialog = Ti.UI.createAlertDialog({
                    title: "Camera",
                    buttonNames: [ "Ok" ]
                });
                error.code == Ti.Media.NO_CAMERA ? alert_dialog.setMessage("Please run this test on device") : alert_dialog.setMessage("Unexpected error: " + error.code);
                alert_dialog.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        }) : 1 == e.index && Ti.Media.openPhotoGallery({
            success: function(event) {
                event.cropRect;
                var image = event.media;
                $.img_user.image = image;
                Alloy.Globals.globalUserSignUpData.profilePicture = Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, "img_profile_pic.jpg");
            },
            cancel: function() {
                alert("You've Cancelled");
            },
            error: function(error) {
                alert("Unexpected error: " + error.code);
            },
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    function txtNameReturnKeyPressed() {
        $.txt_email.focus();
    }
    function genderSelected(e) {
        if ("img_gender_male" == e.source.id) {
            $.lbl_gender_male.font = {
                fontSize: "20"
            };
            $.lbl_gender_female.font = {
                fontSize: "17"
            };
            $.lbl_gender_male.color = "#2279bc";
            $.lbl_gender_female.color = "gray";
            $.img_gender_male.image = "/images/gender_male.png";
            $.img_gender_female.image = "/images/gender_female[shaded].png";
            Alloy.Globals.globalUserSignUpData.gender = "male";
        } else {
            $.lbl_gender_male.font = {
                fontSize: "17"
            };
            $.lbl_gender_female.font = {
                fontSize: "20"
            };
            $.img_gender_male.image = "/images/gender_male[shaded].png";
            $.img_gender_female.image = "/images/gender_female.png";
            $.lbl_gender_male.color = "gray";
            $.lbl_gender_female.color = "#2279bc";
            Alloy.Globals.globalUserSignUpData.gender = "female";
        }
    }
    function continueBtnPressed() {
        if (validate_name() && validate_email() && checkGender()) {
            $.win.fireEvent("click");
            var editProfileWin = Alloy.createController("editProfileWin1").getView();
            editProfileWin.open({
                activityEnterAnimation: Ti.Android.R.anim.slide_in_left
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "userMainDetailsWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win",
        title: "Enter Your Details"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId193 = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        top: "10dp",
        layout: "vertical",
        scrollingEnabled: "true",
        id: "__alloyId193"
    });
    $.__views.win.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        font: {
            fontSize: "17dp"
        },
        color: "#2279bc",
        width: "75%",
        top: "8dp",
        height: Ti.UI.SIZE,
        textAlign: "center",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        text: "Enter Your Details",
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.img_facebook = Ti.UI.createImageView({
        top: "10dp",
        bottom: "12dp",
        height: "40dp",
        width: "200dp",
        image: "/images/facebook_btn.png",
        id: "img_facebook"
    });
    $.__views.__alloyId193.add($.__views.img_facebook);
    facebookImgPressed ? $.__views.img_facebook.addEventListener("click", facebookImgPressed) : __defers["$.__views.img_facebook!click!facebookImgPressed"] = true;
    $.__views.__alloyId195 = Ti.UI.createLabel({
        font: {
            fontSize: "17dp"
        },
        color: "#2279bc",
        width: "75%",
        top: "8dp",
        height: Ti.UI.SIZE,
        textAlign: "center",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        text: "OR",
        id: "__alloyId195"
    });
    $.__views.__alloyId193.add($.__views.__alloyId195);
    $.__views.img_user = Ti.UI.createImageView({
        top: "12dp",
        height: "100dp",
        width: "100dp",
        image: "/images/contact_photo.png",
        id: "img_user"
    });
    $.__views.__alloyId193.add($.__views.img_user);
    imgPressed ? $.__views.img_user.addEventListener("click", imgPressed) : __defers["$.__views.img_user!click!imgPressed"] = true;
    $.__views.txt_name = Ti.UI.createTextField({
        bubbleParent: false,
        softKeyboardOnFocus: Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS,
        color: "white",
        width: "75%",
        top: "8dp",
        height: Ti.UI.SIZE,
        textAlign: "center",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Your Name",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        id: "txt_name"
    });
    $.__views.__alloyId193.add($.__views.txt_name);
    txtNameReturnKeyPressed ? $.__views.txt_name.addEventListener("return", txtNameReturnKeyPressed) : __defers["$.__views.txt_name!return!txtNameReturnKeyPressed"] = true;
    $.__views.txt_email = Ti.UI.createTextField({
        bubbleParent: false,
        softKeyboardOnFocus: Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS,
        color: "white",
        width: "75%",
        top: "8dp",
        height: Ti.UI.SIZE,
        textAlign: "center",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Your email",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "txt_email"
    });
    $.__views.__alloyId193.add($.__views.txt_email);
    $.__views.__alloyId196 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId196"
    });
    $.__views.__alloyId193.add($.__views.__alloyId196);
    $.__views.lbl_gender_male = Ti.UI.createLabel({
        font: {
            fontSize: "17dp"
        },
        color: "gray",
        width: "75",
        text: "Male",
        id: "lbl_gender_male",
        textAlign: "right"
    });
    $.__views.__alloyId196.add($.__views.lbl_gender_male);
    $.__views.img_gender_male = Ti.UI.createImageView({
        image: "/images/gender_male[shaded].png",
        width: "75",
        height: "75",
        id: "img_gender_male"
    });
    $.__views.__alloyId196.add($.__views.img_gender_male);
    genderSelected ? $.__views.img_gender_male.addEventListener("click", genderSelected) : __defers["$.__views.img_gender_male!click!genderSelected"] = true;
    $.__views.img_gender_female = Ti.UI.createImageView({
        image: "/images/gender_female[shaded].png",
        width: "75",
        height: "75",
        id: "img_gender_female"
    });
    $.__views.__alloyId196.add($.__views.img_gender_female);
    genderSelected ? $.__views.img_gender_female.addEventListener("click", genderSelected) : __defers["$.__views.img_gender_female!click!genderSelected"] = true;
    $.__views.lbl_gender_female = Ti.UI.createLabel({
        font: {
            fontSize: "17dp"
        },
        color: "gray",
        width: "75",
        text: "Female",
        id: "lbl_gender_female",
        textAlign: "left"
    });
    $.__views.__alloyId196.add($.__views.lbl_gender_female);
    $.__views.__alloyId197 = Ti.UI.createButton({
        top: "10dp",
        borderRadius: 5,
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        height: "40dp",
        width: "55%",
        backgroundColor: "#2279bc",
        color: "white",
        bubbleParent: false,
        title: "Continue",
        id: "__alloyId197"
    });
    $.__views.__alloyId193.add($.__views.__alloyId197);
    continueBtnPressed ? $.__views.__alloyId197.addEventListener("click", continueBtnPressed) : __defers["$.__views.__alloyId197!click!continueBtnPressed"] = true;
    var __alloyId199 = [];
    __alloyId199.push("Open Camera");
    __alloyId199.push("Choose from Library");
    __alloyId199.push("Cancel");
    $.__views.optionDialog = Ti.UI.createOptionDialog({
        options: __alloyId199,
        id: "optionDialog",
        cancel: "2"
    });
    optionDialogClick ? $.__views.optionDialog.addEventListener("click", optionDialogClick) : __defers["$.__views.optionDialog!click!optionDialogClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.addEventListener("facebookFinished", facebookFinished);
    $.win.addEventListener("close", function() {
        Ti.App.removeEventListener("facebookFinished", facebookFinished);
    });
    var firstTime = true;
    $.txt_name.addEventListener("focus", function(e) {
        if (firstTime) {
            e.source.blur();
            firstTime = false;
        }
    });
    $.win.addEventListener("click", function() {
        $.txt_name.blur();
        $.txt_email.blur();
    });
    $.win.addEventListener("androidback", function() {
        $.win.close({
            activityExitAnimation: Ti.Android.R.anim.slide_out_right
        });
    });
    __defers["$.__views.img_facebook!click!facebookImgPressed"] && $.__views.img_facebook.addEventListener("click", facebookImgPressed);
    __defers["$.__views.img_user!click!imgPressed"] && $.__views.img_user.addEventListener("click", imgPressed);
    __defers["$.__views.txt_name!return!txtNameReturnKeyPressed"] && $.__views.txt_name.addEventListener("return", txtNameReturnKeyPressed);
    __defers["$.__views.img_gender_male!click!genderSelected"] && $.__views.img_gender_male.addEventListener("click", genderSelected);
    __defers["$.__views.img_gender_female!click!genderSelected"] && $.__views.img_gender_female.addEventListener("click", genderSelected);
    __defers["$.__views.__alloyId197!click!continueBtnPressed"] && $.__views.__alloyId197.addEventListener("click", continueBtnPressed);
    __defers["$.__views.optionDialog!click!optionDialogClick"] && $.__views.optionDialog.addEventListener("click", optionDialogClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;