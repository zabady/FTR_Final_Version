function Controller() {
    function openPhoneNumberWin() {
        var phoneNumberWin = Alloy.createController("editProfileWin1").getView();
        phoneNumberWin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "welcomeWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.WindowsBackgroundColor,
        id: "container",
        title: "Welcome to Bofff Me !"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.viewandroid = Ti.UI.createView({
        backgroundColor: Alloy.Globals.WindowsBackgroundColor,
        id: "viewandroid"
    });
    $.__views.container.add($.__views.viewandroid);
    $.__views.textLbl = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        top: "30%",
        textAlign: "center",
        left: 20,
        right: 20,
        text: "We help you keep in touch and always sure that your contacts are always upto data, you're gonna be a great BOFFFER !",
        id: "textLbl"
    });
    $.__views.viewandroid.add($.__views.textLbl);
    $.__views.continueBtn = Ti.UI.createButton({
        top: "90%",
        color: "white",
        backgroundColor: "#2279bc",
        borderRadius: 5,
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        height: "40dp",
        width: "80%",
        title: "Continue",
        id: "continueBtn"
    });
    $.__views.viewandroid.add($.__views.continueBtn);
    openPhoneNumberWin ? $.__views.continueBtn.addEventListener("click", openPhoneNumberWin) : __defers["$.__views.continueBtn!click!openPhoneNumberWin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.container.open();
    __defers["$.__views.continueBtn!click!openPhoneNumberWin"] && $.__views.continueBtn.addEventListener("click", openPhoneNumberWin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;