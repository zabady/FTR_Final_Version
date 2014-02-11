function Controller() {
    function openPhoneNumberWin() {
        var phoneNumberWin = Alloy.createController("phoneNumberWin").getView();
        phoneNumberWin.open({
            activityEnterAnimation: Ti.Android.R.anim.slide_in_left
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "welcomeWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: true,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "50%",
                y: "0%"
            },
            endPoint: {
                x: "50%",
                y: "100%"
            },
            colors: [ {
                color: "#6abede",
                offset: 0
            }, {
                color: "#3592b5",
                offset: .4
            }, {
                color: "#136b8c",
                offset: .8
            } ]
        },
        id: "win",
        title: "Welcome to Bofff Me !"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.viewandroid = Ti.UI.createView({
        id: "viewandroid"
    });
    $.__views.win.add($.__views.viewandroid);
    $.__views.__alloyId205 = Ti.UI.createLabel({
        left: 10,
        top: "5%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: "18"
        },
        text: "WELCOME TO BOFFF ME!",
        id: "__alloyId205"
    });
    $.__views.viewandroid.add($.__views.__alloyId205);
    $.__views.logo = Ti.UI.createImageView({
        image: "/images/bofffme_logo.png",
        width: "200",
        height: "200",
        top: "25%",
        id: "logo"
    });
    $.__views.viewandroid.add($.__views.logo);
    $.__views.__alloyId206 = Ti.UI.createButton({
        bottom: 0,
        font: {
            fontSize: "22",
            fontWeight: "bold"
        },
        height: "10%",
        width: "100%",
        backgroundColor: "transparent",
        color: "white",
        title: "Continue",
        id: "__alloyId206"
    });
    $.__views.viewandroid.add($.__views.__alloyId206);
    openPhoneNumberWin ? $.__views.__alloyId206.addEventListener("click", openPhoneNumberWin) : __defers["$.__views.__alloyId206!click!openPhoneNumberWin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.navBarHidden = true;
    $.win.open();
    __defers["$.__views.__alloyId206!click!openPhoneNumberWin"] && $.__views.__alloyId206.addEventListener("click", openPhoneNumberWin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;