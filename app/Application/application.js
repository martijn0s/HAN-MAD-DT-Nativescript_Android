//var frameModule = require("ui/frame");
//
//// Accelerometer
//exports.accelerometer = function() {
//   frameModule.topmost().navigate("Application/accelerometer/accelerometer");
//};
//
//// Camera
//exports.camera = function() {
//    frameModule.topmost().navigate("Application/camera/camera");
//};
//
//// Bluetooth
//exports.bluetooth = function() {
//    frameModule.topmost().navigate("Application/bluetooth/bluetooth");
//}
//
//// Trilfunctie
//exports.vibrate = function() {
//    frameModule.topmost().navigate("Application/vibrate/vibrate");
//}
//
//// TouchId
//exports.touchId = function() {
//    // TODO Implement TouchId
//}
//
//// GPS
//exports.gps = function() {
//    // TODO Implement GPS
//}


var frameModule = require("ui/frame");
var view = require("ui/core/view");

// Camera
exports.camera = function() {
    frameModule.topmost().navigate("Application/camera/camera");
};

function pageLoaded(args) {
    var page = args.object;
    var tabView1 = view.getViewById(page, "tabView1");
    tabView1.selectedIndex = 1;
}
exports.pageLoaded = pageLoaded;

