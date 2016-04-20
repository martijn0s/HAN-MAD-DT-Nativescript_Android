var touchid = require("nativescript-touchid");
var observableModule = require("data/observable");

function pageLoaded(args) {
    var page = args.object;
    var data = new observableModule.Observable({authenticated: false});
    touchid.available().then(function(avail) {
        if(avail) {
            touchid.verifyFingerprint({
                message: "Scan with your finger",
                fallbackTitle: "Enter PIN"
            }).then(function() {
                data.authenticated = true;
            }, function(error) {
                console.log("Fingerprint NOT OK" + (error.code ? ". Code: " + error.code : ""));
            });
        }
    });
    page.bindingContext = data;
}

exports.pageLoaded = pageLoaded;