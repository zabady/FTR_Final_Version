function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "privacyPicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        useSpinner: "false",
        selectionIndicator: "true",
        bubbleParent: "false",
        visible: "false",
        bottom: "10%"
    });
<<<<<<< HEAD
    var __alloyId179 = [];
    $.__views.__alloyId180 = Ti.UI.createPickerRow({
        title: "Public",
        id: "__alloyId180"
    });
    __alloyId179.push($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createPickerRow({
        title: "Friends",
        id: "__alloyId181"
    });
    __alloyId179.push($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createPickerRow({
        title: "Favorites",
        id: "__alloyId182"
    });
    __alloyId179.push($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createPickerRow({
        title: "Only Me",
        id: "__alloyId183"
    });
    __alloyId179.push($.__views.__alloyId183);
    $.__views.picker.add(__alloyId179);
=======
    var __alloyId186 = [];
    $.__views.__alloyId187 = Ti.UI.createPickerRow({
        title: "Public",
        id: "__alloyId187"
    });
    __alloyId186.push($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createPickerRow({
        title: "Friends",
        id: "__alloyId188"
    });
    __alloyId186.push($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createPickerRow({
        title: "Favorites",
        id: "__alloyId189"
    });
    __alloyId186.push($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createPickerRow({
        title: "Only Me",
        id: "__alloyId190"
    });
    __alloyId186.push($.__views.__alloyId190);
    $.__views.picker.add(__alloyId186);
>>>>>>> 5daa1a124110b51f9e8352b9a1f44b5650f0c8ac
    $.__views.picker && $.addTopLevelView($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;