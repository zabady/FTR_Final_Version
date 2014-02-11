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
    var __alloyId183 = [];
    $.__views.__alloyId184 = Ti.UI.createPickerRow({
        title: "Public",
        id: "__alloyId184"
    });
    __alloyId183.push($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createPickerRow({
        title: "Friends",
        id: "__alloyId185"
    });
    __alloyId183.push($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createPickerRow({
        title: "Favorites",
        id: "__alloyId186"
    });
    __alloyId183.push($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createPickerRow({
        title: "Only Me",
        id: "__alloyId187"
    });
    __alloyId183.push($.__views.__alloyId187);
    $.__views.picker.add(__alloyId183);
    $.__views.picker && $.addTopLevelView($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;