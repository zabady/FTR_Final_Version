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
    function facebookFinished() {
        $.txt_name.value = Alloy.Globals.globalUserSignUpData.name;
        $.txt_email.value = Alloy.Globals.globalUserSignUpData.email;
        $.img_user.visible = false;
        $.img_user.image = Alloy.Globals.globalUserSignUpData.profilePicture.display.read();
        $.img_user.width = Ti.UI.SIZE;
        setTimeout(function() {
            $.img_user.width = $.img_user.rect.width + "dp";
            $.img_user.visible = true;
        }, 500);
    }
    function facebookBtnPressed() {
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
    function openWebView(e) {
        var webview = Alloy.createController("webview", e.source.url).getView();
        Alloy.Globals.mainNav.openWindow(webview);
    }
    function continueBtnPressed() {
        if (validate_name() && validate_email()) {
            $.win.fireEvent("click");
            var editProfileWin = Alloy.createController("editProfileWin1").getView();
            Alloy.Globals.mainNav.openWindow(editProfileWin);
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
    $.__views.__alloyId196 = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        top: "10dp",
        layout: "vertical",
        scrollingEnabled: "false",
        id: "__alloyId196"
    });
    $.__views.win.add($.__views.__alloyId196);
    $.__views.btn_facebook = Ti.UI.createButton({
        top: "20dp",
        borderRadius: 5,
        font: {
            fontSize: "15dp",
            fontWeight: "bold"
        },
        height: "40dp",
        width: "200dp",
        backgroundColor: "#2279bc",
        color: "white",
        bubbleParent: false,
        bottom: "12dp",
        backgroundImage: "/images/import_facebook_300x62.png",
        id: "btn_facebook"
    });
    $.__views.__alloyId196.add($.__views.btn_facebook);
    facebookBtnPressed ? $.__views.btn_facebook.addEventListener("click", facebookBtnPressed) : __defers["$.__views.btn_facebook!click!facebookBtnPressed"] = true;
    $.__views.__alloyId198 = Ti.UI.createLabel({
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
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
    $.__views.img_user = Ti.UI.createImageView({
        top: "12dp",
        height: "100dp",
        width: "100dp",
        image: "/images/contact_photo.png",
        id: "img_user"
    });
    $.__views.__alloyId196.add($.__views.img_user);
    imgPressed ? $.__views.img_user.addEventListener("click", imgPressed) : __defers["$.__views.img_user!click!imgPressed"] = true;
    $.__views.txt_name = Ti.UI.createTextField({
        bubbleParent: false,
        width: "75%",
        top: "8dp",
        height: Ti.UI.SIZE,
        textAlign: "center",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Your Name",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        id: "txt_name"
    });
    $.__views.__alloyId196.add($.__views.txt_name);
    txtNameReturnKeyPressed ? $.__views.txt_name.addEventListener("return", txtNameReturnKeyPressed) : __defers["$.__views.txt_name!return!txtNameReturnKeyPressed"] = true;
    $.__views.txt_email = Ti.UI.createTextField({
        bubbleParent: false,
        width: "75%",
        top: "8dp",
        height: Ti.UI.SIZE,
        textAlign: "center",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Your email",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        returnKeyType: Ti.UI.RETURNKEY_GO,
        id: "txt_email"
    });
    $.__views.__alloyId196.add($.__views.txt_email);
    continueBtnPressed ? $.__views.txt_email.addEventListener("return", continueBtnPressed) : __defers["$.__views.txt_email!return!continueBtnPressed"] = true;
    $.__views.lbl_whyMyEmail = Ti.UI.createLabel({
        font: {
            fontSize: "14dp"
        },
        color: "#2279bc",
        bottom: "10dp",
        text: "Why my email ?",
        id: "lbl_whyMyEmail",
        url: "http://yahoo.com"
    });
    $.__views.__alloyId196.add($.__views.lbl_whyMyEmail);
    openWebView ? $.__views.lbl_whyMyEmail.addEventListener("click", openWebView) : __defers["$.__views.lbl_whyMyEmail!click!openWebView"] = true;
    $.__views.__alloyId199 = Ti.UI.createButton({
        top: "10dp",
        borderRadius: 5,
        font: {
            fontSize: "15dp",
            fontWeight: "bold"
        },
        height: "40dp",
        width: "55%",
        backgroundColor: "#2279bc",
        color: "white",
        bubbleParent: false,
        title: "Continue",
        id: "__alloyId199"
    });
    $.__views.__alloyId196.add($.__views.__alloyId199);
    continueBtnPressed ? $.__views.__alloyId199.addEventListener("click", continueBtnPressed) : __defers["$.__views.__alloyId199!click!continueBtnPressed"] = true;
    var __alloyId201 = [];
    __alloyId201.push("Open Camera");
    __alloyId201.push("Choose from Library");
    __alloyId201.push("Cancel");
    $.__views.optionDialog = Ti.UI.createOptionDialog({
        options: __alloyId201,
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
    $.win.addEventListener("click", function() {
        $.txt_name.blur();
        $.txt_email.blur();
    });
    $.win.addEventListener("androidback", function() {
        $.win.close({
            activityExitAnimation: Ti.Android.R.anim.slide_out_right
        });
    });
    __defers["$.__views.btn_facebook!click!facebookBtnPressed"] && $.__views.btn_facebook.addEventListener("click", facebookBtnPressed);
    __defers["$.__views.img_user!click!imgPressed"] && $.__views.img_user.addEventListener("click", imgPressed);
    __defers["$.__views.txt_name!return!txtNameReturnKeyPressed"] && $.__views.txt_name.addEventListener("return", txtNameReturnKeyPressed);
    __defers["$.__views.txt_email!return!continueBtnPressed"] && $.__views.txt_email.addEventListener("return", continueBtnPressed);
    __defers["$.__views.lbl_whyMyEmail!click!openWebView"] && $.__views.lbl_whyMyEmail.addEventListener("click", openWebView);
    __defers["$.__views.__alloyId199!click!continueBtnPressed"] && $.__views.__alloyId199.addEventListener("click", continueBtnPressed);
    __defers["$.__views.optionDialog!click!optionDialogClick"] && $.__views.optionDialog.addEventListener("click", optionDialogClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;