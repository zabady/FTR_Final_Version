var welcomeWin = Alloy.createController("welcomeWin").getView();

if(OS_IOS) {
	Alloy.Globals.mainNav = Titanium.UI.iOS.createNavigationWindow({
	   window: welcomeWin,
	   backgroundColor: '#ade3f8',
	});
	
	Alloy.Globals.mainNav.open();
} else {
	welcomeWin.open();
}