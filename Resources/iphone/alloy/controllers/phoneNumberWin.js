function Controller() {
    function openPicker() {
        false == $.picker.visible && ($.picker.visible = true);
        animation.fadeIn($.picker, 500);
    }
    function changeCountryAndCountryCode() {
        $.lbl_country_ios.text = $.picker.getSelectedRow(0).title;
        currentCountryCode = $.picker.getSelectedRow(0).id.toLowerCase();
    }
    function continueBtnPressed() {
        var phoneNumberRegex = /^[0-9]{9,15}$/;
        if ($.txt_phoneNumber.value.match(phoneNumberRegex)) {
            $.dialog_confirm.message = "Do do you confirm that this is your number: +" + allCountries[currentCountryCode].phoneCode + $.txt_phoneNumber.value + "\nAn SMS with your access code will be sent to this number.";
            $.dialog_confirm.show();
        } else alert("The number you entered is not valid");
    }
    function dialogConfirmPressed(e) {
        if (0 == e.index) $.txt_phoneNumber.focus(); else {
            Alloy.Globals.globalUserSignUpData.phone = allCountries[currentCountryCode].phoneCode + $.txt_phoneNumber.value;
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
        title: "Bofff Me Setup"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId172 = Ti.UI.createScrollView({
        height: Ti.UI.FILL,
        top: 40,
        scrollingEnabled: "false",
        layout: "vertical",
        id: "__alloyId172"
    });
    $.__views.win.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel({
        bottom: 40,
        width: "80%",
        textAlign: "center",
        color: "#2279bc",
        font: {
            fontSize: "17"
        },
        bubbleParent: false,
        text: "Keep your bofff friends in sync with your contact list by registering your phone number.",
        id: "__alloyId173"
    });
    $.__views.__alloyId172.add($.__views.__alloyId173);
    $.__views.lbl_country_ios = Ti.UI.createLabel({
        bottom: 10,
        width: "80%",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        font: {
            fontSize: "14.5"
        },
        color: "black",
        bubbleParent: false,
        id: "lbl_country_ios"
    });
    $.__views.__alloyId172.add($.__views.lbl_country_ios);
    openPicker ? $.__views.lbl_country_ios.addEventListener("click", openPicker) : __defers["$.__views.lbl_country_ios!click!openPicker"] = true;
    $.__views.txt_phoneNumber = Ti.UI.createTextField({
        bottom: 10,
        width: "80%",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        font: {
            fontSize: "14.5"
        },
        color: "black",
        bubbleParent: false,
        id: "txt_phoneNumber",
        hintText: "Phone Number"
    });
    $.__views.__alloyId172.add($.__views.txt_phoneNumber);
    $.__views.__alloyId174 = Ti.UI.createButton({
        top: 20,
        color: "white",
        backgroundColor: "#2279bc",
        borderRadius: 5,
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        height: "40",
        width: "50%",
        title: "Continue",
        id: "__alloyId174"
    });
    $.__views.__alloyId172.add($.__views.__alloyId174);
    continueBtnPressed ? $.__views.__alloyId174.addEventListener("click", continueBtnPressed) : __defers["$.__views.__alloyId174!click!continueBtnPressed"] = true;
    $.__views.picker = Ti.UI.createPicker({
        selectionIndicator: true,
        bottom: 0,
        bubbleParent: false,
        visible: false,
        id: "picker"
    });
    $.__views.win.add($.__views.picker);
    changeCountryAndCountryCode ? $.__views.picker.addEventListener("change", changeCountryAndCountryCode) : __defers["$.__views.picker!change!changeCountryAndCountryCode"] = true;
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
    var allCountries = require("countries");
    var selectedRow, pickerRows = [], counter = 0;
    for (var country in allCountries) {
        var row = Titanium.UI.createPickerRow({
            title: allCountries[country].name + " (+" + allCountries[country].phoneCode + ")",
            id: country.toUpperCase()
        });
        allCountries[currentCountryCode] == allCountries[country] && (selectedRow = counter);
        counter++;
        pickerRows.push(row);
    }
    $.picker.add(pickerRows);
    $.picker.setSelectedRow(0, selectedRow, true);
    $.lbl_country_ios.text = allCountries[currentCountryCode].name + " (+" + allCountries[currentCountryCode].phoneCode + ")";
    var animation = require("alloy/animation");
    animation.fadeOut($.picker, 0);
    $.win.addEventListener("click", function() {
        animation.fadeOut($.picker, 500);
        $.txt_phoneNumber.blur();
        alert("I am executed!");
    });
    $.win.addEventListener("androidback", function() {
        $.win.close({
            activityExitAnimation: Ti.Android.R.anim.slide_out_right
        });
    });
    __defers["$.__views.lbl_country_ios!click!openPicker"] && $.__views.lbl_country_ios.addEventListener("click", openPicker);
    __defers["$.__views.picker!change!changeCountryAndCountryCode"] && $.__views.picker.addEventListener("change", changeCountryAndCountryCode);
    __defers["$.__views.__alloyId174!click!continueBtnPressed"] && $.__views.__alloyId174.addEventListener("click", continueBtnPressed);
    __defers["$.__views.picker!change!changeCountryAndCountryCode"] && $.__views.picker.addEventListener("change", changeCountryAndCountryCode);
    __defers["$.__views.dialog_confirm!click!dialogConfirmPressed"] && $.__views.dialog_confirm.addEventListener("click", dialogConfirmPressed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;