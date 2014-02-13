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
            Alloy.Globals.mainNav.openWindow(userMainDetailsWin);
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
<<<<<<< HEAD
    $.__views.__alloyId189 = Ti.UI.createView({
=======
    $.__views.__alloyId196 = Ti.UI.createView({
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
        top: "5%",
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
<<<<<<< HEAD
        id: "__alloyId189"
    });
    $.__views.win.add($.__views.__alloyId189);
=======
        id: "__alloyId196"
    });
    $.__views.win.add($.__views.__alloyId196);
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
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
<<<<<<< HEAD
    $.__views.__alloyId189.add($.__views.lbl_gotYourCode);
=======
    $.__views.__alloyId196.add($.__views.lbl_gotYourCode);
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
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
<<<<<<< HEAD
    $.__views.__alloyId189.add($.__views.txt_SMSCode);
=======
    $.__views.__alloyId196.add($.__views.txt_SMSCode);
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
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
        width: "50%",
        backgroundColor: "#D8D8D8",
        color: "#C0C0C0",
        bubbleParent: false,
        id: "btn_continue",
        title: "Continue",
        enabled: "false"
    });
<<<<<<< HEAD
    $.__views.__alloyId189.add($.__views.btn_continue);
    continueBtnPressed ? $.__views.btn_continue.addEventListener("click", continueBtnPressed) : __defers["$.__views.btn_continue!click!continueBtnPressed"] = true;
    $.__views.__alloyId190 = Ti.UI.createLabel({
=======
    $.__views.__alloyId196.add($.__views.btn_continue);
    continueBtnPressed ? $.__views.btn_continue.addEventListener("click", continueBtnPressed) : __defers["$.__views.btn_continue!click!continueBtnPressed"] = true;
    $.__views.__alloyId197 = Ti.UI.createLabel({
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
        font: {
            fontSize: "14dp"
        },
        color: "gray",
        width: "60%",
        top: "8%",
        height: Ti.UI.SIZE,
        textAlign: "center",
        text: "A code was sent to you via SMS.",
<<<<<<< HEAD
        id: "__alloyId190"
    });
    $.__views.__alloyId189.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
=======
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
        font: {
            fontSize: "14dp"
        },
        color: "gray",
        width: "60%",
        top: "8%",
        height: Ti.UI.SIZE,
        textAlign: "center",
        text: "It can take up to a minute, thank you for your patience.",
<<<<<<< HEAD
        id: "__alloyId191"
    });
    $.__views.__alloyId189.add($.__views.__alloyId191);
=======
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
    exports.destroy = function() {};
    _.extend($, $.__views);
    var btn_done = Titanium.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.DONE
    });
    btn_done.addEventListener("click", function() {
        $.win.fireEvent("click");
    });
    var flexSpace = Titanium.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    $.txt_SMSCode.keyboardToolbar = [ flexSpace, btn_done ];
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