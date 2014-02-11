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
    var __alloyId46 = [];
    $.__views.__alloyId47 = Ti.UI.createTableViewRow({
        height: "160dp",
        id: "__alloyId47"
    });
    __alloyId46.push($.__views.__alloyId47);
    $.__views.img_user = Ti.UI.createImageView({
        left: "30",
        top: "20",
        bottom: "20",
        image: "/images/contact_photo.png",
        width: "100",
        heigth: "100",
        id: "img_user"
    });
    $.__views.__alloyId47.add($.__views.img_user);
    $.__views.__alloyId48 = Ti.UI.createView({
        height: "130dp",
        top: "30dp",
        layout: "horizontal",
        width: "50%",
        left: "50%",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createTextField({
        hintText: "First Name",
        height: "35dp",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createTextField({
        hintText: "Last Name",
        top: "10dp",
        height: "35dp",
        id: "__alloyId50"
    });
    $.__views.__alloyId48.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createTextField({
        hintText: "Company",
        top: "10dp",
        height: "35dp",
        id: "__alloyId51"
    });
    $.__views.__alloyId48.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        id: "__alloyId52"
    });
    __alloyId46.push($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Phone",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createButton({
        style: Ti.UI.iPhone.SystemButton.CONTACT_ADD,
        right: "10",
        id: "__alloyId54"
    });
    $.__views.__alloyId52.add($.__views.__alloyId54);
    $.__views.__alloyId56 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId56"
    });
    __alloyId46.push($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
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
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
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
    $.__views.__alloyId56.add($.__views.lbl_primaryPhone);
    $.__views.__alloyId58 = Ti.UI.createTableViewRow({
        id: "__alloyId58"
    });
    __alloyId46.push($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Email",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createButton({
        style: Ti.UI.iPhone.SystemButton.CONTACT_ADD,
        right: "10",
        id: "__alloyId60"
    });
    $.__views.__alloyId58.add($.__views.__alloyId60);
    $.__views.__alloyId62 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId62"
    });
    __alloyId46.push($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
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
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
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
    $.__views.__alloyId62.add($.__views.txt_primaryEmail);
    $.__views.__alloyId64 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId64"
    });
    __alloyId46.push($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
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
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createTextField({
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
        id: "__alloyId66"
    });
    $.__views.__alloyId64.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createImageView({
        image: "/images/remove_icon.png",
        width: "22",
        height: "22",
        right: "10",
        id: "__alloyId67"
    });
    $.__views.__alloyId64.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createTableViewRow({
        id: "__alloyId68"
    });
    __alloyId46.push($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Job Title",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createTextField({
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
        id: "__alloyId70"
    });
    $.__views.__alloyId68.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
        id: "__alloyId71"
    });
    __alloyId46.push($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "BBM Pin",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createTextField({
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
        id: "__alloyId73"
    });
    $.__views.__alloyId71.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createTableViewRow({
        id: "__alloyId74"
    });
    __alloyId46.push($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Residence",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createTextField({
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
        id: "__alloyId76"
    });
    $.__views.__alloyId74.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createTableViewRow({
        id: "__alloyId77"
    });
    __alloyId46.push($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Education",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createTextField({
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
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createTableViewRow({
        id: "__alloyId80"
    });
    __alloyId46.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Interests",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createButton({
        style: Ti.UI.iPhone.SystemButton.CONTACT_ADD,
        right: "10",
        id: "__alloyId82"
    });
    $.__views.__alloyId80.add($.__views.__alloyId82);
    $.__views.__alloyId84 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId84"
    });
    __alloyId46.push($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createTextField({
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
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createTableViewRow({
        id: "__alloyId86"
    });
    __alloyId46.push($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Favorite Places",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createButton({
        style: Ti.UI.iPhone.SystemButton.CONTACT_ADD,
        right: "10",
        id: "__alloyId88"
    });
    $.__views.__alloyId86.add($.__views.__alloyId88);
    $.__views.__alloyId90 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId90"
    });
    __alloyId46.push($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createTextField({
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
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createTableViewRow({
        id: "__alloyId92"
    });
    __alloyId46.push($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        left: "20",
        font: {
            fontSize: "14"
        },
        color: "#2279bc",
        text: "Add a Custom Field",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createButton({
        style: Ti.UI.iPhone.SystemButton.CONTACT_ADD,
        right: "10",
        id: "__alloyId94"
    });
    $.__views.__alloyId92.add($.__views.__alloyId94);
    $.__views.__alloyId96 = Ti.UI.createTableViewRow({
        height: "40",
        id: "__alloyId96"
    });
    __alloyId46.push($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createTextField({
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
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createTextField({
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
        id: "__alloyId98"
    });
    $.__views.__alloyId96.add($.__views.__alloyId98);
    $.__views.__alloyId45 = Ti.UI.createTableView({
        height: "90%",
        top: 0,
        backgroundColor: "white",
        separatorColor: "transparent",
        data: __alloyId46,
        id: "__alloyId45"
    });
    $.__views.win.add($.__views.__alloyId45);
    fuckMe ? $.__views.__alloyId45.addEventListener("swipe", fuckMe) : __defers["$.__views.__alloyId45!swipe!fuckMe"] = true;
    $.__views.__alloyId99 = Ti.UI.createButton({
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
        id: "__alloyId99"
    });
    $.__views.win.add($.__views.__alloyId99);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.leftNavButton = Ti.UI.createButton();
    $.win.rightNavButton = Ti.UI.createButton({
        title: "Edit"
    });
    $.win.addEventListener("androidback", function() {
        $.win.close();
    });
    __defers["$.__views.__alloyId45!swipe!fuckMe"] && $.__views.__alloyId45.addEventListener("swipe", fuckMe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;