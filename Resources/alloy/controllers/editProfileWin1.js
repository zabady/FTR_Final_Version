function Controller() {
    function openPicker(e) {
        $.pickerView.picker.visible = true;
        clickedPrivacyLabel = e.source;
    }
    function fuckME() {
        $.lbl.text = $.txt.value;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "editProfileWin1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win",
        title: "Complete Your Profile"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId59 = Ti.UI.createView({
        height: "10%",
        top: "0",
        backgroundColor: "brown",
        id: "__alloyId59"
    });
    $.__views.win.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createButton({
        title: "Edit",
        left: "10",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.lbl_completeProfile = Ti.UI.createLabel({
        height: "35",
        font: {
            fontSize: "14"
        },
        text: "Complete Your Profile",
        id: "lbl_completeProfile"
    });
    $.__views.__alloyId59.add($.__views.lbl_completeProfile);
    $.__views.__alloyId61 = Ti.UI.createButton({
        title: "Skip",
        right: "10",
        id: "__alloyId61"
    });
    $.__views.__alloyId59.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId62"
    });
    var __alloyId63 = [];
    __alloyId63.push($.__views.__alloyId62);
    $.__views.__alloyId64 = Ti.UI.createView({
        width: "50%",
        layout: "vertical",
        left: "0",
        id: "__alloyId64"
    });
    $.__views.__alloyId62.add($.__views.__alloyId64);
    $.__views.img_user = Ti.UI.createImageView({
        top: "20",
        image: "/images/contact_photo.png",
        width: "80",
        heigth: "80",
        id: "img_user"
    });
    $.__views.__alloyId64.add($.__views.img_user);
    $.__views.lbl = Ti.UI.createLabel({
        height: "35",
        font: {
            fontSize: "14"
        },
        text: "Privacy",
        id: "lbl",
        bubbleParent: "true"
    });
    $.__views.__alloyId64.add($.__views.lbl);
    openPicker ? $.__views.lbl.addEventListener("click", openPicker) : __defers["$.__views.lbl!click!openPicker"] = true;
    $.__views.__alloyId65 = Ti.UI.createView({
        width: "50%",
        layout: "vertical",
        right: "0",
        backgroundColor: "brown",
        id: "__alloyId65"
    });
    $.__views.__alloyId62.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createTextField({
        height: "35",
        font: {
            fontSize: "14"
        },
        hintText: "KOSOM TITANIUM",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    fuckME ? $.__views.__alloyId66.addEventListener("change", fuckME) : __defers["$.__views.__alloyId66!change!fuckME"] = true;
    $.__views.table = Ti.UI.createTableView({
        height: Ti.UI.SIZE,
        top: "10%",
        data: __alloyId63,
        id: "table"
    });
    $.__views.win.add($.__views.table);
    $.__views.txt = Ti.UI.createTextField({
        height: "35",
        font: {
            fontSize: "14"
        },
        id: "txt",
        hintText: "titanium da bdan"
    });
    $.__views.win.add($.__views.txt);
    fuckME ? $.__views.txt.addEventListener("change", fuckME) : __defers["$.__views.txt!change!fuckME"] = true;
    $.__views.__alloyId67 = Ti.UI.createButton({
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        height: "10%",
        width: "100%",
        backgroundColor: "#2279bc",
        color: "white",
        bottom: 0,
        title: "Continue",
        id: "__alloyId67"
    });
    $.__views.win.add($.__views.__alloyId67);
    $.__views.pickerView = Alloy.createController("privacyPicker", {
        id: "pickerView",
        __parentSymbol: $.__views.win
    });
    $.__views.pickerView.setParent($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.leftNavButton = Ti.UI.createButton({
        title: "Edit"
    });
    $.win.rightNavButton = Ti.UI.createButton({
        title: "Skip"
    });
    var clickedPrivacyLabel, clickedRow;
    $.pickerView.picker.addEventListener("click", function(e) {
        clickedPrivacyLabel.text = e.row.title;
        $.table.$.pickerView.picker.visible = false;
    });
    $.table.addEventListener("click", function(e) {
        e.cancelBubble = true;
        clickedRow = e.row;
    });
    $.win.addEventListener("click", function() {
        alert("zeby");
        $.pickerView.picker.visible = false;
    });
    __defers["$.__views.lbl!click!openPicker"] && $.__views.lbl.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId66!change!fuckME"] && $.__views.__alloyId66.addEventListener("change", fuckME);
    __defers["$.__views.txt!change!fuckME"] && $.__views.txt.addEventListener("change", fuckME);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;