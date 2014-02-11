function Controller() {
    function openOrClosePicker() {
        $.txt_country_ios.blur();
        "false" == $.picker.pickerview.visible && ($.picker.pickerview.visible = true);
        if (pickerAlive) {
            animation.fadeOut($.picker.pickerview, 200);
            pickerAlive = false;
        } else {
            animation.popIn($.picker.pickerview);
            pickerAlive = true;
        }
    }
    function changeCountryAndCountryCode() {
        $.txt_country_ios.value = $.picker.picker.getSelectedRow(0).title;
        openOrClosePicker();
        currentCountryCode = $.picker.picker.getSelectedRow(0).id.toLowerCase();
        $.lbl_countryCode.text = "+" + countries[currentCountryCode].phoneCode;
    }
    function continueBtnPressed() {
        var phoneNumberRegex = /^[0-9]{9,15}$/;
        if ($.txt_phoneNumber.value.match(phoneNumberRegex)) {
            $.dialog_confirm.message = "Do do you confirm that this is your number: " + $.lbl_countryCode.text + $.txt_phoneNumber.value + "\nAn SMS with your access code will be sent to this number.";
            $.dialog_confirm.show();
        } else alert("The number you entered is not valid");
    }
    function openWebView(e) {
        var webview = Alloy.createController("webview", e.source.url).getView();
        Alloy.Globals.mainNav.openWindow(webview);
    }
    function dialogConfirmPressed(e) {
        if (0 == e.index) $.txt_phoneNumber.focus(); else {
            Alloy.Globals.globalUserSignUpData.phone = $.lbl_countryCode.text + $.txt_phoneNumber.value;
            var smsWin = Alloy.createController("smsWin").getView();
            Alloy.Globals.mainNav.openWindow(smsWin);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "phoneNumberWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win",
        title: "Your Phone Number"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.view_1 = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        id: "view_1",
        layout: "vertical",
        scrollingEnabled: "false"
    });
    $.__views.win.add($.__views.view_1);
    $.__views.__alloyId172 = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        color: "black",
        top: "2%",
        left: 20,
        width: "75%",
        height: Ti.UI.SIZE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        text: "Choose Your Country",
        id: "__alloyId172"
    });
    $.__views.view_1.add($.__views.__alloyId172);
    $.__views.txt_country_ios = Ti.UI.createTextField({
        font: {
            fontSize: "14dp"
        },
        top: "2%",
        left: 20,
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        id: "txt_country_ios"
    });
    $.__views.view_1.add($.__views.txt_country_ios);
    openOrClosePicker ? $.__views.txt_country_ios.addEventListener("focus", openOrClosePicker) : __defers["$.__views.txt_country_ios!focus!openOrClosePicker"] = true;
    $.__views.lbl_typeYourPhone = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        color: "black",
        top: "2%",
        left: 20,
        width: "75%",
        height: Ti.UI.SIZE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        text: "Type your phone number",
        id: "lbl_typeYourPhone"
    });
    $.__views.view_1.add($.__views.lbl_typeYourPhone);
    $.__views.view_2 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "view_2",
        layout: "horizontal",
        horizontalWrap: "true"
    });
    $.__views.view_1.add($.__views.view_2);
    $.__views.lbl_countryCode = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        color: "black",
        top: "2%",
        left: 20,
        width: "75%",
        height: Ti.UI.SIZE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        text: "+966",
        id: "lbl_countryCode"
    });
    $.__views.view_2.add($.__views.lbl_countryCode);
    $.__views.txt_phoneNumber = Ti.UI.createTextField({
        font: {
            fontSize: "14dp"
        },
        top: "2%",
        left: 20,
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        id: "txt_phoneNumber"
    });
    $.__views.view_2.add($.__views.txt_phoneNumber);
    $.__views.__alloyId173 = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        color: "black",
        top: "2%",
        left: 20,
        width: "75%",
        height: Ti.UI.SIZE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        text: "Why my phone number ?",
        url: "http://www.facebook.com",
        id: "__alloyId173"
    });
    $.__views.view_1.add($.__views.__alloyId173);
    openWebView ? $.__views.__alloyId173.addEventListener("click", openWebView) : __defers["$.__views.__alloyId173!click!openWebView"] = true;
    $.__views.lbl_alreadyRegistered = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        color: "black",
        text: "Already Registered ?",
        id: "lbl_alreadyRegistered",
        url: "http://www.google.com"
    });
    $.__views.view_1.add($.__views.lbl_alreadyRegistered);
    openWebView ? $.__views.lbl_alreadyRegistered.addEventListener("click", openWebView) : __defers["$.__views.lbl_alreadyRegistered!click!openWebView"] = true;
    $.__views.__alloyId174 = Ti.UI.createButton({
        color: "black",
        backgroundColor: "#2279bc",
        borderRadius: 5,
        font: {
            fontSize: "15dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: "75%",
        top: "2%",
        left: 20,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        title: "Continue",
        id: "__alloyId174"
    });
    $.__views.view_1.add($.__views.__alloyId174);
    continueBtnPressed ? $.__views.__alloyId174.addEventListener("click", continueBtnPressed) : __defers["$.__views.__alloyId174!click!continueBtnPressed"] = true;
    $.__views.picker = Alloy.createController("picker", {
        id: "picker",
        top: "10",
        __parentSymbol: $.__views.win
    });
    $.__views.picker.setParent($.__views.win);
    var __alloyId176 = [];
    __alloyId176.push("Edit");
    __alloyId176.push("Confirm");
    $.__views.dialog_confirm = Ti.UI.createAlertDialog({
        buttonNames: __alloyId176,
        id: "dialog_confirm",
        title: "Confirm your number"
    });
    dialogConfirmPressed ? $.__views.dialog_confirm.addEventListener("click", dialogConfirmPressed) : __defers["$.__views.dialog_confirm!click!dialogConfirmPressed"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var currentCountryCode = Alloy.Globals.location;
    currentCountryCode = currentCountryCode.toLowerCase();
    var countries = require("countries");
    var selectedRow, pickerRows = [], counter = 0;
    for (var country in countries) {
        var row = Titanium.UI.createPickerRow({
            title: countries[country].name,
            id: country.toUpperCase()
        });
        countries[currentCountryCode] == countries[country] && (selectedRow = counter);
        counter++;
        pickerRows.push(row);
    }
    $.picker.picker.add(pickerRows);
    $.picker.picker.setSelectedRow(0, selectedRow, true);
    $.lbl_countryCode.text = "+" + countries[currentCountryCode].phoneCode;
    $.txt_country_ios.value = countries[currentCountryCode].name;
    var animation = require("alloy/animation");
    animation.fadeOut($.picker.pickerview, 0);
    var pickerAlive = false;
    $.picker.toolbarBtn_cancel.addEventListener("click", openOrClosePicker);
    $.picker.toolbarBtn_done.addEventListener("click", changeCountryAndCountryCode);
    var btn_done = Titanium.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.DONE
    });
    btn_done.addEventListener("click", function() {
        $.txt_phoneNumber.blur();
    });
    var flexSpace = Titanium.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    $.txt_phoneNumber.keyboardToolbar = [ flexSpace, btn_done ];
    $.win.addEventListener("androidback", function() {
        $.win.close({
            activityExitAnimation: Ti.Android.R.anim.slide_out_right
        });
    });
    __defers["$.__views.txt_country_ios!focus!openOrClosePicker"] && $.__views.txt_country_ios.addEventListener("focus", openOrClosePicker);
    __defers["$.__views.__alloyId173!click!openWebView"] && $.__views.__alloyId173.addEventListener("click", openWebView);
    __defers["$.__views.lbl_alreadyRegistered!click!openWebView"] && $.__views.lbl_alreadyRegistered.addEventListener("click", openWebView);
    __defers["$.__views.__alloyId174!click!continueBtnPressed"] && $.__views.__alloyId174.addEventListener("click", continueBtnPressed);
    __defers["$.__views.dialog_confirm!click!dialogConfirmPressed"] && $.__views.dialog_confirm.addEventListener("click", dialogConfirmPressed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;