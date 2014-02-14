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
    var __alloyId180 = [];
    $.__views.__alloyId181 = Ti.UI.createPickerRow({
        title: "Public",
        id: "__alloyId181"
    });
    __alloyId180.push($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createPickerRow({
        title: "Friends",
        id: "__alloyId182"
    });
    __alloyId180.push($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createPickerRow({
        title: "Favorites",
        id: "__alloyId183"
    });
    __alloyId180.push($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createPickerRow({
        title: "Only Me",
        id: "__alloyId184"
    });
    __alloyId180.push($.__views.__alloyId184);
    $.__views.picker.add(__alloyId180);
    $.__views.picker && $.addTopLevelView($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;