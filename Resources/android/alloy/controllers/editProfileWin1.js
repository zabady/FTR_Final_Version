function Controller() {
    function openPicker(e) {
        $.pickerView.picker.visible = true;
        clickedPrivacyLabel = e.source;
    }
    function saveClickedRow(e) {
        clickedRow = e.row;
        clickedRow.index = e.index;
        if (addButtonClicked.pressed) {
            addButtonClicked.pressed = false;
            var nextRow = $.table.data[0].rows[e.index + 1];
            var children = nextRow.children;
            var newRow = Ti.UI.createTableViewRow({
                height: nextRow.height,
                editable: true,
                selectedBackgroundColor: "white"
            });
            if (3 == children.length) {
                var label = "custom" == children[1].type ? "createTextField" : "createLabel";
                label = Ti.UI[label]({
                    text: "New Field",
                    hintText: "Field",
                    height: children[0].heigth,
                    font: children[0].font
                });
                $.addClass(label, "fieldsDescriptionLabels");
                newRow.add(label);
                var textField = Ti.UI.createTextField({
                    type: children[1].type,
                    hintText: "New Field",
                    height: children[1].heigth,
                    font: children[1].font
                });
                "phone" == children[1].type ? $.addClass(textField, "numberFieldsTextFields") : "email" == children[1].type ? $.addClass(textField, "emailFieldsTextFields") : $.addClass(textField, "fieldsTextFields");
                newRow.add(textField);
                var picker = Alloy.createController("privacyPicker").getView();
                newRow.add(picker);
            } else if (2 == children.length) {
                var textField = Ti.UI.createTextField({
                    hintText: "New Field",
                    height: children[0].heigth,
                    font: children[0].font
                });
                $.addClass(textField, "fieldsTextFieldsNoDescription");
                newRow.add(textField);
                var picker = Alloy.createController("privacyPicker").getView();
                newRow.add(picker);
            }
            $.table.insertRowAfter(e.index, newRow);
        }
    }
    function addButtonPressed() {
        addButtonClicked.pressed = true;
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
    $.__views.__alloyId100 = Ti.UI.createView({
        height: "10%",
        top: "0",
        backgroundColor: "brown",
        id: "__alloyId100"
    });
    $.__views.win.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createButton({
        title: "Edit",
        left: "10",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.lbl_completeProfile = Ti.UI.createLabel({
        color: "black",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "center",
        height: "32",
        font: {
            fontSize: "20"
        },
        top: "20",
        text: "Complete Your Profile",
        id: "lbl_completeProfile"
    });
    $.__views.__alloyId100.add($.__views.lbl_completeProfile);
    $.__views.__alloyId102 = Ti.UI.createButton({
        title: "Skip",
        right: "10",
        id: "__alloyId102"
    });
    $.__views.__alloyId100.add($.__views.__alloyId102);
    var __alloyId103 = [];
    $.__views.__alloyId104 = Ti.UI.createTableViewRow({
        height: "150",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId104"
    });
    __alloyId103.push($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createView({
        width: "50%",
        layout: "vertical",
        left: "0",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.img_user = Ti.UI.createImageView({
        top: "10",
        image: "/images/contact_photo.png",
        width: "100",
        heigth: "100",
        id: "img_user"
    });
    $.__views.__alloyId105.add($.__views.img_user);
    $.__views.picker_img = Alloy.createController("privacyPicker", {
        id: "picker_img",
        __parentSymbol: $.__views.__alloyId105
    });
    $.__views.picker_img.setParent($.__views.__alloyId105);
    $.__views.__alloyId107 = Ti.UI.createView({
        width: "50%",
        layout: "vertical",
        right: "0",
        id: "__alloyId107"
    });
    $.__views.__alloyId104.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "70%",
        top: "10",
        hintText: "First Name",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "70%",
        top: "10",
        hintText: "Last Name",
        id: "__alloyId109"
    });
    $.__views.__alloyId107.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "70%",
        top: "10",
        hintText: "Job Title",
        id: "__alloyId110"
    });
    $.__views.__alloyId107.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId111"
    });
    __alloyId103.push($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "Phone",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId114 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId114"
    });
    $.__views.__alloyId111.add($.__views.__alloyId114);
    addButtonPressed ? $.__views.__alloyId114.addEventListener("click", addButtonPressed) : __defers["$.__views.__alloyId114!click!addButtonPressed"] = true;
    $.__views.__alloyId115 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId115"
    });
    __alloyId103.push($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "center",
        height: "32",
        font: {
            fontSize: "16"
        },
        top: "2",
        width: "23%",
        left: "2%",
        text: "Primary",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.lbl_primaryPhone = Ti.UI.createLabel({
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "center",
        height: "32",
        font: {
            fontSize: "16"
        },
        top: "2",
        width: "46%",
        left: "26%",
        keyboardType: Ti.UI.KEYBOARD_PHONE_PAD,
        text: Alloy.Globals.globalUserSignUpData.phone,
        id: "lbl_primaryPhone",
        type: "phone"
    });
    $.__views.__alloyId115.add($.__views.lbl_primaryPhone);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId115
    });
    $.__views.picker.setParent($.__views.__alloyId115);
    $.__views.__alloyId118 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId118"
    });
    __alloyId103.push($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "Email",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId121 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId121"
    });
    $.__views.__alloyId118.add($.__views.__alloyId121);
    addButtonPressed ? $.__views.__alloyId121.addEventListener("click", addButtonPressed) : __defers["$.__views.__alloyId121!click!addButtonPressed"] = true;
    $.__views.__alloyId122 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId122"
    });
    __alloyId103.push($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "center",
        height: "32",
        font: {
            fontSize: "16"
        },
        top: "2",
        width: "23%",
        left: "2%",
        text: "Primary",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.txt_primaryEmail = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "46%",
        left: "26%",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        value: Alloy.Globals.globalUserSignUpData.email,
        id: "txt_primaryEmail",
        type: "email"
    });
    $.__views.__alloyId122.add($.__views.txt_primaryEmail);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId122
    });
    $.__views.picker.setParent($.__views.__alloyId122);
    $.__views.__alloyId125 = Ti.UI.createTableViewRow({
        height: "40",
        editable: "true",
        selectedBackgroundColor: "white",
        id: "__alloyId125"
    });
    __alloyId103.push($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "center",
        height: "32",
        font: {
            fontSize: "16"
        },
        top: "2",
        width: "23%",
        left: "2%",
        text: "Apple ID",
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "46%",
        left: "26%",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        hintText: "Apple ID email",
        id: "__alloyId127"
    });
    $.__views.__alloyId125.add($.__views.__alloyId127);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId125
    });
    $.__views.picker.setParent($.__views.__alloyId125);
    $.__views.__alloyId129 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId129"
    });
    __alloyId103.push($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "Company",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "46%",
        left: "26%",
        hintText: "Your Pin",
        id: "__alloyId131"
    });
    $.__views.__alloyId129.add($.__views.__alloyId131);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId129
    });
    $.__views.picker.setParent($.__views.__alloyId129);
    $.__views.__alloyId133 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId133"
    });
    __alloyId103.push($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "BBM Pin",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "46%",
        left: "26%",
        hintText: "Your Company",
        id: "__alloyId135"
    });
    $.__views.__alloyId133.add($.__views.__alloyId135);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId133
    });
    $.__views.picker.setParent($.__views.__alloyId133);
    $.__views.__alloyId137 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId137"
    });
    __alloyId103.push($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "Skype",
        id: "__alloyId138"
    });
    $.__views.__alloyId137.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "46%",
        left: "26%",
        hintText: "Skype Name",
        id: "__alloyId139"
    });
    $.__views.__alloyId137.add($.__views.__alloyId139);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId137
    });
    $.__views.picker.setParent($.__views.__alloyId137);
    $.__views.__alloyId141 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId141"
    });
    __alloyId103.push($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "Residence",
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "46%",
        left: "26%",
        hintText: "Could be your city",
        id: "__alloyId143"
    });
    $.__views.__alloyId141.add($.__views.__alloyId143);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId141
    });
    $.__views.picker.setParent($.__views.__alloyId141);
    $.__views.__alloyId145 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId145"
    });
    __alloyId103.push($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "Education",
        id: "__alloyId146"
    });
    $.__views.__alloyId145.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "46%",
        left: "26%",
        hintText: "High School",
        id: "__alloyId147"
    });
    $.__views.__alloyId145.add($.__views.__alloyId147);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId145
    });
    $.__views.picker.setParent($.__views.__alloyId145);
    $.__views.__alloyId149 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId149"
    });
    __alloyId103.push($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "Interests",
        id: "__alloyId150"
    });
    $.__views.__alloyId149.add($.__views.__alloyId150);
    $.__views.__alloyId152 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId152"
    });
    $.__views.__alloyId149.add($.__views.__alloyId152);
    addButtonPressed ? $.__views.__alloyId152.addEventListener("click", addButtonPressed) : __defers["$.__views.__alloyId152!click!addButtonPressed"] = true;
    $.__views.__alloyId153 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId153"
    });
    __alloyId103.push($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "69%",
        left: "2%",
        hintText: "Watching Premier Leauge",
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId153
    });
    $.__views.picker.setParent($.__views.__alloyId153);
    $.__views.__alloyId156 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId156"
    });
    __alloyId103.push($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "Favorite Places",
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
    $.__views.__alloyId159 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId159"
    });
    $.__views.__alloyId156.add($.__views.__alloyId159);
    addButtonPressed ? $.__views.__alloyId159.addEventListener("click", addButtonPressed) : __defers["$.__views.__alloyId159!click!addButtonPressed"] = true;
    $.__views.__alloyId160 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId160"
    });
    __alloyId103.push($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "69%",
        left: "2%",
        hintText: "Spectra Resturant",
        id: "__alloyId161"
    });
    $.__views.__alloyId160.add($.__views.__alloyId161);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId160
    });
    $.__views.picker.setParent($.__views.__alloyId160);
    $.__views.__alloyId163 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId163"
    });
    __alloyId103.push($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
        color: "#2279bc",
        borderColor: "transparent",
        borderRadius: "4",
        borderWidth: "1",
        textAlign: "left",
        height: "32",
        font: {
            fontWeight: "bold"
        },
        top: "2",
        left: "10",
        text: "Custom Field",
        id: "__alloyId164"
    });
    $.__views.__alloyId163.add($.__views.__alloyId164);
    $.__views.__alloyId166 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId166"
    });
    $.__views.__alloyId163.add($.__views.__alloyId166);
    addButtonPressed ? $.__views.__alloyId166.addEventListener("click", addButtonPressed) : __defers["$.__views.__alloyId166!click!addButtonPressed"] = true;
    $.__views.__alloyId167 = Ti.UI.createTableViewRow({
        height: "40",
        editable: false,
        selectedBackgroundColor: "white",
        id: "__alloyId167"
    });
    __alloyId103.push($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "23%",
        left: "2%",
        hintText: "Field",
        id: "__alloyId168"
    });
    $.__views.__alloyId167.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createTextField({
        textAlign: "center",
        color: "black",
        height: "38",
        font: {
            fontSize: "16"
        },
        width: "46%",
        left: "26%",
        hintText: "Field Text or Value",
        type: "custom",
        id: "__alloyId169"
    });
    $.__views.__alloyId167.add($.__views.__alloyId169);
    $.__views.picker = Alloy.createController("privacyPicker", {
        id: "picker",
        __parentSymbol: $.__views.__alloyId167
    });
    $.__views.picker.setParent($.__views.__alloyId167);
    $.__views.table = Ti.UI.createTableView({
        height: "80%",
        top: "10%",
        data: __alloyId103,
        id: "table",
        backgroundColor: "transparent"
    });
    $.__views.win.add($.__views.table);
    saveClickedRow ? $.__views.table.addEventListener("click", saveClickedRow) : __defers["$.__views.table!click!saveClickedRow"] = true;
    $.__views.__alloyId171 = Ti.UI.createButton({
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
        id: "__alloyId171"
    });
    $.__views.win.add($.__views.__alloyId171);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var clickedPrivacyLabel;
    $.picker_img.picker.width = "100", $.picker_img.picker.top = "2";
    $.picker_img.picker.right = $.img_user.right;
    $.win.addEventListener("click", function() {});
    var clickedRow, addButtonClicked = new Object();
    addButtonClicked.pressed = false;
    __defers["$.__views.__alloyId106!click!openPicker"] && $.__views.__alloyId106.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId113!click!addButtonPressed"] && $.__views.__alloyId113.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId114!click!addButtonPressed"] && $.__views.__alloyId114.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId117!click!openPicker"] && $.__views.__alloyId117.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId120!click!addButtonPressed"] && $.__views.__alloyId120.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId121!click!addButtonPressed"] && $.__views.__alloyId121.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId124!click!openPicker"] && $.__views.__alloyId124.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId128!click!openPicker"] && $.__views.__alloyId128.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId132!click!openPicker"] && $.__views.__alloyId132.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId136!click!openPicker"] && $.__views.__alloyId136.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId140!click!openPicker"] && $.__views.__alloyId140.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId144!click!openPicker"] && $.__views.__alloyId144.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId148!click!openPicker"] && $.__views.__alloyId148.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId151!click!addButtonPressed"] && $.__views.__alloyId151.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId152!click!addButtonPressed"] && $.__views.__alloyId152.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId155!click!openPicker"] && $.__views.__alloyId155.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId158!click!addButtonPressed"] && $.__views.__alloyId158.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId159!click!addButtonPressed"] && $.__views.__alloyId159.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId162!click!openPicker"] && $.__views.__alloyId162.addEventListener("click", openPicker);
    __defers["$.__views.__alloyId165!click!addButtonPressed"] && $.__views.__alloyId165.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId166!click!addButtonPressed"] && $.__views.__alloyId166.addEventListener("click", addButtonPressed);
    __defers["$.__views.__alloyId170!click!openPicker"] && $.__views.__alloyId170.addEventListener("click", openPicker);
    __defers["$.__views.table!click!saveClickedRow"] && $.__views.table.addEventListener("click", saveClickedRow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;