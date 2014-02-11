$.win.leftNavButton = Ti.UI.createButton();
$.win.rightNavButton = Ti.UI.createButton({
	title: "Edit",
});

function fuckMe(e) {
	alert("FuckMe index: " + e.index);
}


/*
var i = 0;
var buttonPressedOrNot = false;
var type;
function handleClick(e) {
	
	//var rowIndex = $.table.getSections()[0].getRows().indexOf(e.source);
	
	if(buttonPressedOrNot) {
		var row = Titanium.UI.createTableViewRow({
			title: type + i,
		});
		
		$.table.insertRowAfter(e.index, row, { animated: true });
		i++;
		buttonPressedOrNot = false;
	}
	
}

function addBtnClicked(e) {
	buttonPressedOrNot = true;
	type = e.source.type;
}
*/


// Overriding back button in android to close the window not the app
$.win.addEventListener('androidback', function (e) 
{
    $.win.close();
});