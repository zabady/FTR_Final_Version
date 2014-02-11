function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "edit";
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
    var __alloyId3 = [];
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        height: "150",
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        left: "0",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.img_user = Ti.UI.createImageView({
        id: "img_user"
    });
    $.__views.__alloyId5.add($.__views.img_user);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        text: "Privacy",
        bubbleParent: "false",
        width: "80",
        textAlign: "center",
        top: "2",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    openPicker ? $.__views.__alloyId6.addEventListener("click", openPicker) : __defers["$.__views.__alloyId6!click!openPicker"] = true;
    $.__views.__alloyId7 = Ti.UI.createView({
        right: "0",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTextField({
        hintText: "First Name",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTextField({
        hintText: "Last Name",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createTextField({
        hintText: "Job Title",
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        id: "__alloyId11"
    });
    __alloyId3.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "Phone",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    addButtonPressed ? $.__views.__alloyId13.addEventListener("click", addButtonPressed) : __defers["$.__views.__alloyId13!click!addButtonPressed"] = true;
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        id: "__alloyId15"
    });
    __alloyId3.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        text: "Primary",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.lbl_primaryPhone = Ti.UI.createLabel({
        id: "lbl_primaryPhone",
        textAlign: "center",
        type: "phone"
    });
    $.__views.__alloyId15.add($.__views.lbl_primaryPhone);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "Privacy",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    openPicker ? $.__views.__alloyId17.addEventListener("click", openPicker) : __defers["$.__views.__alloyId17!click!openPicker"] = true;
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        id: "__alloyId18"
    });
    __alloyId3.push($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "Email",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createButton({
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    addButtonPressed ? $.__views.__alloyId20.addEventListener("click", addButtonPressed) : __defers["$.__views.__alloyId20!click!addButtonPressed"] = true;
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        id: "__alloyId22"
    });
    __alloyId3.push($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        text: "Primary",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.txt_primaryEmail = Ti.UI.createTextField({
        id: "txt_primaryEmail",
        type: "email"
    });
    $.__views.__alloyId22.add($.__views.txt_primaryEmail);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        text: "Privacy",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    openPicker ? $.__views.__alloyId24.addEventListener("click", openPicker) : __defers["$.__views.__alloyId24!click!openPicker"] = true;
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        editable: "true",
        id: "__alloyId25"
    });
    __alloyId3.push($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        text: "Apple ID",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTextField({
        hintText: "Apple ID email",
        id: "__alloyId27"
    });
    $.__views.__alloyId25.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        text: "Privacy",
        id: "__alloyId28"
    });
    $.__views.__alloyId25.add($.__views.__alloyId28);
    openPicker ? $.__views.__alloyId28.addEventListener("click", openPicker) : __defers["$.__views.__alloyId28!click!openPicker"] = true;
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        id: "__alloyId29"
    });
    __alloyId3.push($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        text: "BBM Pin",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTextField({
        hintText: "Your Pin",
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        text: "Privacy",
        id: "__alloyId32"
    });
    $.__views.__alloyId29.add($.__views.__alloyId32);
    openPicker ? $.__views.__alloyId32.addEventListener("click", openPicker) : __defers["$.__views.__alloyId32!click!openPicker"] = true;
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        id: "__alloyId33"
    });
    __alloyId3.push($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        text: "Interests",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createButton({
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    addButtonPressed ? $.__views.__alloyId35.addEventListener("click", addButtonPressed) : __defers["$.__views.__alloyId35!click!addButtonPressed"] = true;
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        id: "__alloyId37"
    });
    __alloyId3.push($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTextField({
        hintText: "Watching Premier Leauge",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "Privacy",
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
    openPicker ? $.__views.__alloyId39.addEventListener("click", openPicker) : __defers["$.__views.__alloyId39!click!openPicker"] = true;
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId3,
        id: "table",
        backgroundColor: "transparent"
    });
    $.__views.win.add($.__views.table);
    saveClickedRow ? $.__views.table.addEventListener("click", saveClickedRow) : __defers["$.__views.table!click!saveClickedRow"] = true;
    $.__views.__alloyId40 = Ti.UI.createButton({
        title: "Continue",
        id: "__alloyId40"
    });
    $.__views.win.add($.__views.__alloyId40);
    $.__views.pickerView = Alloy.createController("privacyPicker", {
        id: "pickerView",
        __parentSymbol: $.__views.win
    });
    $.__views.pickerView.setParent($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId6!click!openPicker"] && $.__views.__alloyId6.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId13!click!addButtonPressed"] && $.__views.__alloyId13.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId14!click!addButtonPressed"] && $.__views.__alloyId14.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId17!click!openPicker"] && $.__views.__alloyId17.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId20!click!addButtonPressed"] && $.__views.__alloyId20.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId21!click!addButtonPressed"] && $.__views.__alloyId21.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId24!click!openPicker"] && $.__views.__alloyId24.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId28!click!openPicker"] && $.__views.__alloyId28.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId32!click!openPicker"] && $.__views.__alloyId32.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId35!click!addButtonPressed"] && $.__views.__alloyId35.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId36!click!addButtonPressed"] && $.__views.__alloyId36.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId39!click!openPicker"] && $.__views.__alloyId39.addEventListener("click", openPicker);
    __defers["$.__views.table!click!saveClickedRow"] && $.__views.table.addEventListener("click", saveClickedRow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;