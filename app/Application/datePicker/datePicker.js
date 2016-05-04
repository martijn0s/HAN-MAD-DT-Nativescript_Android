var datePickerModule = require("ui/date-picker");
var observableModule = require("data/observable");

function pageLoaded(args) {
    var page = args.object;
    var datePicker = new datePickerModule.DatePicker;

    // Set day, mont and year
    datePicker.year = 2015;
    datePicker.month = 5;
    datePicker.day = 9;

    // Set min and max date
    datePicker.minDate = new Date(1970, 1, 1);
    datePicker.maxDate = new Date(2045, 4, 12);

    var data = new observableModule.Observable({datePicker});
    page.bindingContext = data;
}

exports.pageLoaded = pageLoaded;