function Controller() {
    function openPhoneNumberWin() {
        var phoneNumberWin = Alloy.createController("phoneNumberWin1").getView();
        Alloy.Globals.mainNav.openWindow(phoneNumberWin);
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
                color: "#58c8f3",
                offset: 0
            }, {
                color: "#41bae8",
                offset: .4
            }, {
                color: "#2585b7",
                offset: .9
            } ]
        },
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
<<<<<<< HEAD
    $.__views.__alloyId201 = Ti.UI.createView({
        id: "__alloyId201"
    });
    $.__views.win.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
=======
    $.__views.__alloyId208 = Ti.UI.createView({
        id: "__alloyId208"
    });
    $.__views.win.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
        left: 10,
        top: "5%",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: "18"
        },
        text: "WELCOME TO BOFFF ME!",
<<<<<<< HEAD
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createImageView({
=======
        id: "__alloyId209"
    });
    $.__views.__alloyId208.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createImageView({
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
        image: "/images/bofffme_logo_512x512.png",
        width: "200",
        height: "200",
        top: "25%",
<<<<<<< HEAD
        id: "__alloyId203"
    });
    $.__views.__alloyId201.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createButton({
=======
        id: "__alloyId210"
    });
    $.__views.__alloyId208.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createButton({
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
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
<<<<<<< HEAD
        id: "__alloyId204"
    });
    $.__views.__alloyId201.add($.__views.__alloyId204);
    openPhoneNumberWin ? $.__views.__alloyId204.addEventListener("click", openPhoneNumberWin) : __defers["$.__views.__alloyId204!click!openPhoneNumberWin"] = true;
=======
        id: "__alloyId211"
    });
    $.__views.__alloyId208.add($.__views.__alloyId211);
    openPhoneNumberWin ? $.__views.__alloyId211.addEventListener("click", openPhoneNumberWin) : __defers["$.__views.__alloyId211!click!openPhoneNumberWin"] = true;
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.navBarHidden = true;
    $.win.open();
<<<<<<< HEAD
    __defers["$.__views.__alloyId204!click!openPhoneNumberWin"] && $.__views.__alloyId204.addEventListener("click", openPhoneNumberWin);
=======
    __defers["$.__views.__alloyId211!click!openPhoneNumberWin"] && $.__views.__alloyId211.addEventListener("click", openPhoneNumberWin);
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;