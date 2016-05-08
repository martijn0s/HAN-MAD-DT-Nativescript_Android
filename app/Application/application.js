var frameModule = require("ui/frame");
var view = require("ui/core/view");
var accelerometerModule = require("nativescript-accelerometer");
var geolocationModule = require("nativescript-geolocation");
var bluetoothModule = require("nativescript-bluetooth");
var dialogModule = require("ui/dialogs");
var vibrateModule = require("nativescript-vibrate");
var datePickerModule = require("ui/date-picker");
var connectivityModule = require("connectivity");

/**
 * Geolocation
 */
exports.geolocation = function() {
    if (!geolocationModule.isEnabled()) {
        geolocationModule.enableLocationRequest();
    } else {
        var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
        then(function(loc) {
            if (loc) {
                dialogModule.alert(JSON.stringify(loc));
            }
        }, function(exception){
            dialogModule.alert("Error: " + exception.message);
        });
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
    vibrateModule.vibration(2000);
};

/**
 * Bluetooth
 */
exports.bluetooth = function() {
    bluetoothModule.isBluetoothEnabled().then(function(enabled) {
        if(enabled) {
            var message = '';
            bluetoothModule.startScanning({
                serviceUUIDs: [],
                seconds: 4,
                onDiscovered: function (peripheral) {
                    message = "Bluetooth is enabled and device found with UUID: " + peripheral.UUID;
                }
            }).then(function() {
                message += " scanning complete"
            }, function (exception) {
                message += " error while scanning: " + exception;
            });
            alert(message);
        } else {
            alert("Bluetooth is not enabled");
        }
    });
};

/**
 * Camera
 */
exports.camera = function() {
    frameModule.topmost().navigate("Application/camera/camera");
};

/**
 * Connectivity
 */
exports.connectionCheck = function() {
    var connectivityType = connectivityModule.getConnectionType();

    switch(connectivityType) {
        case connectivityModule.connectionType.none:
            alert("Currently no connection");
            break;
        case connectivityModule.connectionType.wifi:
            alert("Currently WiFi connection");
            break;
        case connectivityModule.connectionType.mobile:
            alert("Currently mobile connection");
            break;
    }
}

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
exports.activityIndicator = function() {
    frameModule.topmost().navigate("Application/activityIndicator/activityIndicator");
}

/**
 * Maps
 */
exports.maps = function() {
    frameModule.topmost().navigate("Application/maps/maps");
}

/**
 * Table view
 */
exports.tableView = function() {
    frameModule.topmost().navigate("Application/listView/listView");
}

/**
 * Toolbar
 */
exports.toolbar = function() {
   frameModule.topmost().navigate("Application/toolBar/toolBar");
}

/**
 * Searchbar
 */
exports.searchbar = function() {
   frameModule.topmost().navigate("Application/searchBar/searchBar");
}

/**
 * Date Picker
 */
exports.datePicker = function() {
    frameModule.topmost().navigate("Application/datePicker/datePicker");
}

/**
 * Modal view
 */
exports.modalView = function() {
    var currentPage = frameModule.topmost().currentPage;
    currentPage.showModal("Application/searchBar/searchBar");
}

function pageLoaded(args)
{
    var page = args.object;
    var tabView1 = view.getViewById(page, "tabView1");
    tabView1.selectedIndex = 1;
}
exports.pageLoaded = pageLoaded;