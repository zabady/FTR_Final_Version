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
        width: "95",
        height: "38",
        right: "2%"
    });
    var __alloyId188 = [];
    $.__views.__alloyId189 = Ti.UI.createPickerRow({
        title: "Public",
        id: "__alloyId189"
    });
    __alloyId188.push($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createPickerRow({
        title: "Friends",
        id: "__alloyId190"
    });
    __alloyId188.push($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createPickerRow({
        title: "Favorites",
        id: "__alloyId191"
    });
    __alloyId188.push($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createPickerRow({
        title: "Only Me",
        id: "__alloyId192"
    });
    __alloyId188.push($.__views.__alloyId192);
    $.__views.picker.add(__alloyId188);
    $.__views.picker && $.addTopLevelView($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;