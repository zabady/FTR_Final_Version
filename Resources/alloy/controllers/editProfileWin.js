function Controller() {
    function fuckMe(e) {
        alert("FuckMe index: " + e.index);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "editProfileWin";
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
    $.__views.__alloyId0 = Ti.UI.createView({
        backgroundColor: "brown",
        id: "__alloyId0"
    });
    $.__views.win.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Edit",
        left: "10",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        font: {
            fontSize: "25"
        },
        color: "#2279bc",
        height: "50",
        text: "Complete Your Profile",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Skip",
        right: "10",
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        height: "160dp",
        id: "__alloyId5"
    });
    var __alloyId6 = [];
    __alloyId6.push($.__views.__alloyId5);
    $.__views.img_user = Ti.UI.createImageView({
        left: "30",
        top: "20",
        bottom: "20",
        image: "/images/contact_photo.png",
        width: "100",
        heigth: "100",
        id: "img_user"
    });
    $.__views.__alloyId5.add($.__views.img_user);
    $.__views.__alloyId7 = Ti.UI.createView({
        height: "130dp",
        top: "30dp",
        layout: "horizontal",
        width: "50%",
        left: "50%",
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTextField({
        hintText: "First Name",
        height: "35dp",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTextField({
        hintText: "Last Name",
        top: "10dp",
        height: "35dp",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createTextField({
        hintText: "Company",
        top: "10dp",
        height: "35dp",
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        id: "__alloyId11"
    });
    __alloyId6.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Phone",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId14 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId14"
    });
    $.__views.__alloyId11.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId15"
    });
    __alloyId6.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "30%",
        height: "30",
        left: "5%",
        top: "1",
        text: "  Primary",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.lbl_primaryPhone = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "50%",
        height: "30",
        left: "37%",
        top: "1",
        text: Alloy.Globals.globalUserSignUpData.phone,
        id: "lbl_primaryPhone"
    });
    $.__views.__alloyId15.add($.__views.lbl_primaryPhone);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        id: "__alloyId17"
    });
    __alloyId6.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Email",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId20"
    });
    $.__views.__alloyId17.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId21"
    });
    __alloyId6.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "30%",
        height: "30",
        left: "5%",
        top: "1",
        text: "  Primary",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.txt_primaryEmail = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "50%",
        height: "30",
        left: "37%",
        top: "1",
        value: Alloy.Globals.globalUserSignUpData.email,
        id: "txt_primaryEmail"
    });
    $.__views.__alloyId21.add($.__views.txt_primaryEmail);
    $.__views.__alloyId23 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId23"
    });
    __alloyId6.push($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "30%",
        height: "30",
        left: "5%",
        top: "1",
        text: "  Apple ID",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "50%",
        height: "30",
        left: "37%",
        top: "1",
        hintText: "Apple ID email",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createImageView({
        image: "/images/remove_icon.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId26"
    });
    $.__views.__alloyId23.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        id: "__alloyId27"
    });
    __alloyId6.push($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Job Title",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "50%",
        height: "30",
        left: "37%",
        top: "1",
        hintText: "Your Job",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        id: "__alloyId30"
    });
    __alloyId6.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "BBM Pin",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "50%",
        height: "30",
        left: "37%",
        top: "1",
        hintText: "Your Pin",
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        id: "__alloyId33"
    });
    __alloyId6.push($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Residence",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "50%",
        height: "30",
        left: "37%",
        top: "1",
        hintText: "Could be your city",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        id: "__alloyId36"
    });
    __alloyId6.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Education",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "50%",
        height: "30",
        left: "37%",
        top: "1",
        hintText: "High School",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        id: "__alloyId39"
    });
    __alloyId6.push($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Interests",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId42 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId43"
    });
    __alloyId6.push($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "90%",
        height: "30",
        left: "5%",
        top: "1",
        hintText: "Watching Premier Leauge",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createTableViewRow({
        id: "__alloyId45"
    });
    __alloyId6.push($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Favorite Places",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId48 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId48"
    });
    $.__views.__alloyId45.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId49"
    });
    __alloyId6.push($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "90%",
        height: "30",
        left: "5%",
        top: "1",
        hintText: "Spectra Resturant",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createTableViewRow({
        id: "__alloyId51"
    });
    __alloyId6.push($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Add a Custom Field",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId54 = Ti.UI.createImageView({
        image: "/images/plus_icon_android.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId54"
    });
    $.__views.__alloyId51.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId55"
    });
    __alloyId6.push($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "30%",
        height: "30",
        left: "5%",
        top: "1",
        hintText: " Field Name",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createTextField({
        font: {
            fontSize: "14"
        },
        textAlign: "center",
        color: "black",
        borderColor: "#2279bc",
        borderRadius: "4",
        width: "50%",
        height: "30",
        left: "37%",
        top: "1",
        hintText: "Field Text or Value",
        id: "__alloyId57"
    });
    $.__views.__alloyId55.add($.__views.__alloyId57);
    $.__views.__alloyId4 = Ti.UI.createTableView({
        height: "90%",
        top: 0,
        backgroundColor: "white",
        separatorColor: "transparent",
        data: __alloyId6,
        id: "__alloyId4"
    });
    $.__views.win.add($.__views.__alloyId4);
    fuckMe ? $.__views.__alloyId4.addEventListener("swipe", fuckMe) : __defers["$.__views.__alloyId4!swipe!fuckMe"] = true;
    $.__views.__alloyId58 = Ti.UI.createButton({
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
        id: "__alloyId58"
    });
    $.__views.win.add($.__views.__alloyId58);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.leftNavButton = Ti.UI.createButton();
    $.win.rightNavButton = Ti.UI.createButton({
        title: "Edit Kosom el table"
    });
    $.win.addEventListener("androidback", function() {
        $.win.close();
    });
    __defers["$.__views.__alloyId4!swipe!fuckMe"] && $.__views.__alloyId4.addEventListener("swipe", fuckMe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;