var frameModule = require("ui/frame");
var view = require("ui/core/view");
var vibrateModule = require("nativescript-vibrate");
var accelerometerModule = require("nativescript-accelerometer");
var geolocationModule = require("nativescript-geolocation");
var bluetoothModule = require("nativescript-bluetooth");
var dialogModule = require("ui/dialogs");


/**
 * Geolocation
 */
exports.geolocation = function()
{
    // TODO Checkt nu alleen of geolocation aanstaat, zo niet dan gaat ie naar de betreffende instelling toe
    if (!geolocationModule.isEnabled()) {
        geolocationModule.enableLocationRequest();
    }
};

/**
 * Accelerometer
 */
var accelerometerIsStart = false;
exports.accelerometer = function() {
    if(!accelerometerIsStart) {
        accelerometerIsStart = true;
        accelerometerModule.startAccelerometerUpdates(function(data) {
            console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
        });
    } else {
        accelerometerIsStart = false;
        accelerometerModule.stopAccelerometerUpdates();
    }
};

/**
 * TouchId
 */
exports.touchId = function() {
    frameModule.topmost().navigate("Application/touchId/touchId");
};

/**
 * Vibrate
 */
exports.vibrate = function()
{
    // TODO Testen op fysiek device. In emulator exception (permission denied)
//    vibrateModule.vibration(2000);
};

/**
 * Bluetooth
 */
exports.bluetooth = function()
{
    var enabled = bluetoothModule.isEnabled;
    console.log("Enabled? " + enabled);
};

/**
 * Camera
 */
exports.camera = function()
{
    frameModule.topmost().navigate("Application/camera/camera");
};

/**
 * Alert
 */
exports.alert = function()
{
    dialogModule.alert({
        title: "Nativescript alert",
        message: "Hello world!",
        okButtonText: "OK",
    }).then(
        function (result) {
    });
}

/**
 * List view
 */
exports.listView = function()
{
    frameModule.topmost().navigate("Application/listView/listView");
}

/**
 * Text view
 */
exports.textView = function()
{

}

/**
 * Html view
 */
exports.htmlView = function()
{

}

/**
 * Web view
 */
exports.webView = function()
{

}

function pageLoaded(args)
{
    var page = args.object;
    var tabView1 = view.getViewById(page, "tabView1");
    tabView1.selectedIndex = 1;
}
exports.pageLoaded = pageLoaded;