// Handling UI for iOS and android
if (OS_IOS) {
	
	// Handling Navigation bar buttons, edit and skip
	var button = Ti.UI.createButton({title: "Edit"});
	button.addEventListener('click', setTableToEditingMode);
	$.win.leftNavButton = button;
	button = Ti.UI.createButton({title: "Skip"});
	button.addEventListener('click', function(){
		alert("Skip pressed");
	});
	$.win.rightNavButton = button;
	
	// Handling iOS picker and privacy lables
	var clickedPrivacyLabel;
	$.pickerView.picker.addEventListener('change', function(e) {
		clickedPrivacyLabel.text = $.pickerView.picker.getSelectedRow(0).title;
	});
	
	function openPicker(e) {
		$.pickerView.picker.visible = true;
		clickedPrivacyLabel = e.source;
	}
} else if (OS_ANDROID) {
	$.picker_img.picker.width = "100",
	$.picker_img.picker.top = "2";
	$.picker_img.picker.right = $.img_user.right;
}

// Handling blur for the window
$.win.addEventListener('click', function(e) {
	if (OS_IOS) $.pickerView.picker.visible = false;
	//if (OS_IOS) $.pickerView.picker.setSelectedRow(0, 0, true);
});

// Defining a function for deleting rows
function setTableToEditingMode() {
	if (OS_IOS) {
		$.table.editing = !$.table.editing;
	}
}


// Some Code for handling zeby
var clickedRow, addButtonClicked = new Object();
addButtonClicked.pressed = false;
function saveClickedRow(e) {
	clickedRow = e.row;
	clickedRow.index = e.index;
	
	//alert($.table.data[0].rows[e.index + 1].children);
	
	if (addButtonClicked.pressed) {
		addButtonClicked.pressed = false;
		
		var nextRow = $.table.data[0].rows[e.index + 1];
		var children = nextRow.children;
		var newRow = Ti.UI.createTableViewRow({ 
			height: nextRow.height, 
			editable: true,
			selectedBackgroundColor: 'white',
		});
		
		if(children.length == 3) {
			
			var label = children[1].type == 'custom' ? 'createTextField' : 'createLabel';
			label = Ti.UI[label]({
				text: "New Field",
				hintText: "Field",
				height: children[0].heigth,
				font: children[0].font,
			});
			$.addClass(label, 'fieldsDescriptionLabels');
			newRow.add(label);
			
			var textField = Ti.UI.createTextField({
				type: children[1].type,
				hintText: "New Field",
				height: children[1].heigth,
				font: children[1].font,
			});
			if (children[1].type == "phone") $.addClass(textField, 'numberFieldsTextFields');
			else if (children[1].type == "email") $.addClass(textField, 'emailFieldsTextFields');
			else $.addClass(textField, 'fieldsTextFields');
			newRow.add(textField);
			
			if (OS_IOS) {
				label = Ti.UI.createLabel({
					text: "Privacy",
					height: children[2].heigth,
					font: children[2].font,
				});
				label.addEventListener('click', openPicker);
				$.addClass(label, 'fieldsPrivacylabels');
				
				newRow.add(label);
			} else if (OS_ANDROID) {
				var picker = Alloy.createController('privacyPicker').getView();
				newRow.add(picker);
			}
			
		} else if(children.length == 2) {
			var textField = Ti.UI.createTextField({
				hintText: "New Field",
				height: children[0].heigth,
				font: children[0].font,
			});
			$.addClass(textField, 'fieldsTextFieldsNoDescription');
			newRow.add(textField);
			
			if (OS_IOS) {
				label = Ti.UI.createLabel({
					text: "Privacy",
					height: children[1].heigth,
					font: children[1].font,
				});
				label.addEventListener('click', openPicker);
				$.addClass(label, 'fieldsPrivacylabels');
				
				newRow.add(label);
			} else if (OS_ANDROID) {
				var picker = Alloy.createController('privacyPicker').getView();
				newRow.add(picker);
			}
		}
		
		$.table.insertRowAfter(e.index, newRow);
		
	}
}

function addButtonPressed(e) {
	addButtonClicked.pressed = true;
}
