var frameModule = require("ui/frame");
var view = require("ui/core/view");

var accelerometerModule = require("nativescript-accelerometer");
var geolocationModule = require("nativescript-geolocation");
var bluetoothModule = require("nativescript-bluetooth");
var dialogModule = require("ui/dialogs");

var datePickerModule = require("ui/date-picker");

/**
 * Geolocation
 */
exports.geolocation = function() {
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
var vibrateModule = require("nativescript-vibrate");
    // TODO Testen op fysiek device. In emulator exception (permission denied)
    vibrateModule.vibration(2000);
};

/**
 * Bluetooth
 */
exports.bluetooth = function() {
// TODO Implement method
//    var enabled = bluetoothModule.isEnabled;
//    console.log("Enabled? " + enabled);
};

/**
 * Camera
 */
exports.camera = function() {
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
 * Activity Indicator
 */
exports.activityIndicator = function()
{
    frameModule.topmost().navigate("Application/activityIndicator/activityIndicator");
}

/**
 * Table view
 */
exports.tableView = function()
{
    frameModule.topmost().navigate("Application/listView/listView");
}

/**
 * Toolbar
 */
exports.toolbar = function()
{
   frameModule.topmost().navigate("Application/toolBar/toolBar");
}

/**
 * Searchbar
 */
exports.searchbar = function()
{
   frameModule.topmost().navigate("Application/searchBar/searchBar");
}

/**
 * Date Picker
 */
exports.datePicker = function() {
    frameModule.topmost().navigate("Application/datePicker/datePicker");
}

/**
 * Activity View Controller
 */
exports.activityViewController = function() {
    // TODO Implement method
}

function pageLoaded(args)
{
    var page = args.object;
    var tabView1 = view.getViewById(page, "tabView1");
    tabView1.selectedIndex = 1;
}
exports.pageLoaded = pageLoaded;