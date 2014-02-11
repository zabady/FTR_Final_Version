// TODO: Handle the web view for andorid for better user experience

var url = arguments[0] || "http://www.bofffme.com";

$.webview.url = url;

// Overriding back button in android to close the window not the app
$.win.addEventListener('androidback', function (e) 
{
    $.win.close();
});