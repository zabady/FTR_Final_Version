function Controller() {
    function editingSMSCodeTxt(e) {
        if (4 == e.source.value.length) {
            $.btn_continue.enabled = true;
            $.btn_continue.backgroundColor = "#2279bc";
            $.btn_continue.color = "white";
        } else {
            $.btn_continue.enabled = false;
            $.btn_continue.backgroundColor = "#D8D8D8";
            $.btn_continue.color = "#C0C0C0";
        }
    }
    function continueBtnPressed() {
        if ($.btn_continue.enabled) if ("4444" == $.txt_SMSCode.value) {
            $.win.fireEvent("click");
            var userMainDetailsWin = Alloy.createController("userMainDetailsWin").getView();
            userMainDetailsWin.open();
        } else {
            alert("Wrong Code !\nPlease try again");
            $.txt_SMSCode.focus();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "smsWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win",
        title: "SMS Confirmation"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId193 = Ti.UI.createView({
        top: "5%",
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId193"
    });
    $.__views.win.add($.__views.__alloyId193);
    $.__views.lbl_gotYourCode = Ti.UI.createLabel({
        font: {
            fontSize: "17dp"
        },
        color: "#2279bc",
        width: "60%",
        top: "8%",
        height: Ti.UI.SIZE,
        textAlign: "center",
        text: "Got your code ?",
        id: "lbl_gotYourCode"
    });
    $.__views.__alloyId193.add($.__views.lbl_gotYourCode);
    $.__views.txt_SMSCode = Ti.UI.createTextField({
        width: "75%",
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        hintText: "Enter your code here",
        bubbleParent: false,
        top: "8%",
        height: Ti.UI.SIZE,
        textAlign: "center",
        id: "txt_SMSCode"
    });
    $.__views.__alloyId193.add($.__views.txt_SMSCode);
    editingSMSCodeTxt ? $.__views.txt_SMSCode.addEventListener("change", editingSMSCodeTxt) : __defers["$.__views.txt_SMSCode!change!editingSMSCodeTxt"] = true;
    $.__views.btn_continue = Ti.UI.createButton({
        top: "8%",
        height: "40dp",
        textAlign: "center",
        borderRadius: 5,
        font: {
            fontSize: "15dp",
            fontWeight: "bold"
        },
        width: "55%",
        backgroundColor: "#D8D8D8",
        color: "#C0C0C0",
        bubbleParent: false,
        id: "btn_continue",
        title: "Continue",
        enabled: "false"
    });
    $.__views.__alloyId193.add($.__views.btn_continue);
    continueBtnPressed ? $.__views.btn_continue.addEventListener("click", continueBtnPressed) : __defers["$.__views.btn_continue!click!continueBtnPressed"] = true;
    $.__views.__alloyId194 = Ti.UI.createLabel({
        font: {
            fontSize: "14dp"
        },
        color: "gray",
        width: "60%",
        top: "8%",
        height: Ti.UI.SIZE,
        textAlign: "center",
        text: "A code was sent to you via SMS.",
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
        font: {
            fontSize: "14dp"
        },
        color: "gray",
        width: "60%",
        top: "8%",
        height: Ti.UI.SIZE,
        textAlign: "center",
        text: "It can take up to a minute, thank you for your patience.",
        id: "__alloyId195"
    });
    $.__views.__alloyId193.add($.__views.__alloyId195);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.addEventListener("click", function() {
        $.txt_SMSCode.blur();
    });
    $.win.addEventListener("androidback", function() {
        $.win.close();
    });
    __defers["$.__views.txt_SMSCode!change!editingSMSCodeTxt"] && $.__views.txt_SMSCode.addEventListener("change", editingSMSCodeTxt);
    __defers["$.__views.btn_continue!click!continueBtnPressed"] && $.__views.btn_continue.addEventListener("click", continueBtnPressed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;