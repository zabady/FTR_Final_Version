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
    var __alloyId184 = [];
    $.__views.__alloyId185 = Ti.UI.createPickerRow({
        title: "Public",
        id: "__alloyId185"
    });
    __alloyId184.push($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createPickerRow({
        title: "Friends",
        id: "__alloyId186"
    });
    __alloyId184.push($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createPickerRow({
        title: "Favorites",
        id: "__alloyId187"
    });
    __alloyId184.push($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createPickerRow({
        title: "Only Me",
        id: "__alloyId188"
    });
    __alloyId184.push($.__views.__alloyId188);
    $.__views.picker.add(__alloyId184);
    $.__views.picker && $.addTopLevelView($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;