function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "webview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win",
        modal: "true"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview"
    });
    $.__views.win.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var url = arguments[0] || "http://www.bofffme.com";
    $.webview.url = url;
    $.win.addEventListener("androidback", function() {
        $.win.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;