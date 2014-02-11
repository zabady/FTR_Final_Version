function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "privacyPicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId86 = Ti.UI.createTableViewRow({
        title: "Public",
        id: "__alloyId86"
    });
    var __alloyId87 = [];
    __alloyId87.push($.__views.__alloyId86);
    $.__views.__alloyId88 = Ti.UI.createTableViewRow({
        title: "Friends",
        id: "__alloyId88"
    });
    __alloyId87.push($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createTableViewRow({
        title: "Favorites",
        id: "__alloyId89"
    });
    __alloyId87.push($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createTableViewRow({
        title: "Only Me",
        id: "__alloyId90"
    });
    __alloyId87.push($.__views.__alloyId90);
    $.__views.picker = Ti.UI.createTableView({
        data: __alloyId87,
        id: "picker",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        visible: "false",
        bubbleParent: "false"
    });
    $.__views.picker && $.addTopLevelView($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;