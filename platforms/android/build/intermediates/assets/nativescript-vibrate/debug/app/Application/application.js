var frameModule = require("ui/frame");

// Accelerometer
exports.accelerometer = function() {
   frameModule.topmost().navigate("Application/accelerometer/accelerometer");
};

// Camera
exports.camera = function() {
    frameModule.topmost().navigate("Application/camera/camera");
};

// Bluetooth
exports.bluetooth = function() {
    frameModule.topmost().navigate("Application/bluetooth/bluetooth");
}

// Trilfunctie
exports.vibrate = function() {
    frameModule.topmost().navigate("Application/vibrate/vibrate");
}

// TouchId
exports.touchId = function() {
    // TODO Implement TouchId
}

// GPS
exports.gps = function() {
    // TODO Implement GPS
}