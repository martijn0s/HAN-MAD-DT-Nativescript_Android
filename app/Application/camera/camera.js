// Camera module
var cameraModule = require("camera");

var myImage;

function pageLoaded(args)
{
    var page = args.object;
    myImage = page.getViewById("myImage");
    myImage.src = "https://placehold.it/150x150";
    page.bindingContext = {};
}

exports.pageLoaded = pageLoaded;

exports.takePicture = function()
{
    cameraModule.takePicture().then(function(picture) {
        myImage.imageSource = picture;
    });
}