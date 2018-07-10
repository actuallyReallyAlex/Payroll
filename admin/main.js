// Log Rocket Store User Information
var userInformation = {};

// Variable to hold form data after DOM load
var formData = [];

var staffData = [];

// Tag displays when the CampMinder report was generated
var reportTime = document.getElementById('reportTime');

// Arrays to hold entry objects by site
var swData = [];
var stanData = [];
var ucfData = [];
var villaData = [];
var siteDataArrays = [swData, stanData, ucfData, villaData];

// Tables (by State)
// CA
var table1CAHourly = document.getElementById('table-payPeriod1-CA-hourly');
var table1CASalary = document.getElementById('table-payPeriod1-CA-salary');
// TX
var table1TXHourly = document.getElementById('table-payPeriod1-TX-hourly');
var table1TXSalary = document.getElementById('table-payPeriod1-TX-salary');

// Table Bodies (by State)
// CA
var body1CAHourly = document.getElementById('body-payPeriod1-CA-hourly');
var body1CASalary = document.getElementById('body-payPeriod1-CA-salary');
// TX
var body1TXHourly = document.getElementById('body-payPeriod1-TX-hourly');
var body1TXSalary = document.getElementById('body-payPeriod1-TX-salary');


// Get data from Google spreadsheet when the DOM loads
window.addEventListener('DOMContentLoaded', init);

// Write the time of the CampMinder report
var file = "reportInfo.JSON";
var date = "";


$.get(file, function (info) {
    date = info.creationTime;
    reportTime.innerHTML = info.creationTime;
});


// CampMinder Report - All 2018 Staff Members
var report = "2018staff.csv";
var reportArray = [];
$.get(report, function (data) {
    var csvdata = Papa.parse(data, {
        header: true
    });
    reportArray = csvdata;

    // Each staff member gets their own pay period array
    reportArray.data.forEach(function (staffMember) {
        let payPeriod1 = [
            [{
                    'Day': 'June 18',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 19',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 20',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 21',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 22',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 23',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 24',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'June 25',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 26',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 27',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 28',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 29',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'June 30',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 1',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 1,
                'site': ""
            }]
        ];
        let payPeriod2 = [
            [{
                    'Day': 'July 2',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 3',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 4',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 5',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 6',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 7',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 8',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'July 9',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 10',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 11',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 12',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 13',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 14',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 15',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 2,
                'site': ""
            }]
        ];
        let payPeriod3 = [
            [{
                    'Day': 'July 16',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 17',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 18',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 19',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 20',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 21',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 22',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'July 23',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 24',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 25',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 26',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 27',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 28',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 29',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 3,
                'site': ""
            }]
        ];
        let payPeriod4 = [
            [{
                    'Day': 'July 30',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'July 31',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 1',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 2',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 3',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 4',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 5',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'August 6',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 7',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 8',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 9',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 10',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 11',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 12',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 4,
                'site': ""
            }]
        ];
        let payPeriod5 = [
            [{
                    'Day': 'August 13',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 14',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 15',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 16',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 17',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 18',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 19',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week1',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                    'Day': 'August 20',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 21',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 22',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 23',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 24',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 25',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'Day': 'August 26',
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                },
                {
                    'id': 'week2',
                    'totalHours': 0,
                    'regHours': 0,
                    'otHours': 0,
                    'dtHours': 0,
                    'sickHours': 0,
                    'consecutiveDayCount': 0
                }
            ],
            [{
                'id': 'payPeriodInfo',
                'totalHours': 0,
                'regHours': 0,
                'otHours': 0,
                'dtHours': 0,
                'sickHours': 0,
                'payPeriodNumber': 5,
                'site': ""
            }]
        ];

        staffMember.payPeriod1 = payPeriod1;
        staffMember.payPeriod2 = payPeriod2;
        staffMember.payPeriod3 = payPeriod3;
        staffMember.payPeriod4 = payPeriod4;
        staffMember.payPeriod5 = payPeriod5;

        // Create Full Name for each person
        let fullName = staffMember["First Name"].concat(" ", staffMember["Last Name"]);
        staffMember.fullName = fullName;
    });
});












// Use Tabletop to pull data from Google spreadsheet
function init() {
    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1SbGhrkqAb8Ej4mFn9HxcfbVlK6B0zhA_2eQLB7UfnU8/edit?usp=sharing';

    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
    });
}

// Store the info for the Google spreadsheet in a variable
function showInfo(data, tabletop) {
    formData = data;

    // Go through formData Array and separate entries based on site
    separateFormData();


    // Display formData in page tables when the DOM loads
    displayData();
}

function separateFormData() {
    formData.forEach(function (entry) {
        let site = entry.site;

        if (site === "sw") {
            swData.push(entry);
        } else if (site === "stan") {
            stanData.push(entry);
        } else if (site === "ucf") {
            ucfData.push(entry);
        } else {
            villaData.push(entry);
        }
    });

    // Go through each data Array, then each entry object, creating a new property dateValue
    siteDataArrays.forEach(function (dataArray) {
        dataArray.forEach(function (entry) {
            // Concat the month and day together to form a value in which to sort the formData Array
            // ! logic for single digit dayDates
            let dateValue = "";
            if (Number(entry.day) < 10) {
                dateValue = Number(entry.month.concat("0", entry.day));
            } else {
                dateValue = Number(entry.month.concat(entry.day));
            }
            entry.dateValue = dateValue;
        });

        // Sort each data Array by dateValue
        dataArray.sort(function (a, b) {
            return a.dateValue - b.dateValue;
        });
    });
}

// Print the window
function printThis() {
    window.print();
}

function displayData() {
    // Manipulate incoming data to "count the hours"
    siteDataArrays.forEach(function (dataArray) {
        // Each entry from SA's (Each Day of Camp)
        dataArray.forEach(function (entry) {
            // Site
            let site = entry.site;

            // Find the corresponding date in the payPeriod array
            let entryMonthNumber = entry.month;
            let entryMonth = "";
            let entryDay = entry.day;
            let payPeriod = "";
            if (entryMonthNumber === "6") {
                entryMonth = "June";
                payPeriod = "payPeriod1";
            } else if (entryMonthNumber === "7") {
                entryMonth = "July";
                if (entryDay === "1") {
                    payPeriod = "payPeriod1";
                } else if (Number(entryDay) < 16) {
                    payPeriod = "payPeriod2";
                } else if (Number(entryDay) < 30) {
                    payPeriod = "payPeriod3";
                } else if (entryDay === "30" || entryDay === "31") {
                    payPeriod = "payPeriod4";
                }
            } else {
                entryMonth = "August";
                if (Number(entryDay) < 13) {
                    payPeriod = "payPeriod4";
                } else {
                    payPeriod = "payPeriod5";
                }
            }
            let entryDate = entryMonth.concat(" ", entryDay);

            // Regular Hours
            var hoursTLReg = Number(entry.hoursTLReg);
            var hoursLCWPReg = Number(entry.hoursLCWPReg);
            var hoursOCReg = Number(entry.hoursOCReg);

            // Regular Team Leaders
            let workingTLPapaObject = Papa.parse(entry["workingTLs (Reg)"]);
            let regTLArray = workingTLPapaObject.data[0];

            // Exception Team Leaders
            let exceptionTLPapaObject = Papa.parse(entry.exceptionTLsInfo, {
                header: true
            });
            let exceptionTLArray = exceptionTLPapaObject.data;

            // Sick Team Leaders
            let sickTLPapaObject = Papa.parse(entry.sickTLsInfo, {
                header: true
            });
            let sickTLArray = sickTLPapaObject.data;

            // Regular Logistics Coordinators
            let workingLCPapaObject = Papa.parse(entry["workingLCs (Reg)"]);
            let regLCArray = workingLCPapaObject.data[0];

            // Regular Wellness Person(s)
            let workingWPPapaObject = Papa.parse(entry["workingWPs (Reg)"]);
            let regWPArray = workingWPPapaObject.data[0];

            // Exception Logistics Coordinators / Wellness Person(s)
            let exceptionLCWPPapaObject = Papa.parse(entry.exceptionLCWPsInfo, {
                header: true
            });
            let exceptionLCWPArray = exceptionLCWPPapaObject.data;

            // Sick Logistics Coordinators / Wellness Person(s)
            let sickLCWPPapaObject = Papa.parse(entry.sickLCWPsInfo, {
                header: true
            });
            let sickLCWPArray = sickLCWPPapaObject.data;

            // Regular Office Coordinators
            let workingOCPapaObject = Papa.parse(entry["workingOCs (Reg)"]);
            let regOCArray = workingOCPapaObject.data[0];

            // Exception Office Coordinators
            let exceptionOCPapaObject = Papa.parse(entry.exceptionOCsInfo, {
                header: true
            });
            let exceptionOCArray = exceptionOCPapaObject.data;

            // Sick Office Coordinators
            let sickOCPapaObject = Papa.parse(entry.sickOCsInfo, {
                header: true
            });
            let sickOCArray = sickOCPapaObject.data;

            countHours(regTLArray, "TL");
            countHours(regLCArray, "LCWP");
            countHours(regWPArray, "LCWP");
            countHours(regOCArray, "OC");

            countExceptionHours(exceptionTLArray);
            countExceptionHours(exceptionLCWPArray);
            countExceptionHours(exceptionOCArray);

            countSickHours(sickTLArray);
            countSickHours(sickLCWPArray);
            countSickHours(sickOCArray);

            // * This is to count the regular folks' hours
            function countHours(positionArray, positionType) {
                if (positionArray !== undefined) {
                    let hoursType = "";

                    if (positionType === "TL") {
                        hoursType = hoursTLReg;
                    } else if (positionType === "LCWP") {
                        hoursType = hoursLCWPReg;
                    } else {
                        hoursType = hoursOCReg;
                    }

                    positionArray.forEach(function (person) {
                        // Todo: I think this personData object is needed outside of this. Not sure it's needed here.
                        let personData = {
                            firstName: "",
                            lastName: "",
                            regHours: "",
                            otHours: "",
                            sickHours: "",
                            deduction: "",
                            stipend: "",
                            location: ""
                        };

                        let nameArray = person.split(" ");
                        let firstName = nameArray[0];
                        let lastName = nameArray[1];
                        personData.firstName = firstName;
                        personData.lastName = lastName;
                        let fullName = firstName.concat(" ", lastName);
                        personData.fullName = fullName;

                        var correspondingPersonObject = reportArray.data.find(function (object) {
                            return object.fullName === fullName;
                        });
                        var correspondingPayPeriodArray = correspondingPersonObject[`${payPeriod}`];
                        var week1Array = correspondingPayPeriodArray[0];
                        var week2Array = correspondingPayPeriodArray[1];

                        // Info objects
                        var correspondingPayPeriodInfoObject = correspondingPayPeriodArray[2][0];
                        var week1InfoObject = week1Array.find(function (object) {
                            return object.id === "week1";
                        });
                        var week2InfoObject = week2Array.find(function (object) {
                            return object.id === "week2";
                        });

                        // Logic to see which week the date falls under
                        var dateObjectLocation = "";
                        var inWeek1 = false;
                        var inWeek2 = false;
                        var correspondingDateObject = "";
                        var weekInfoObject = "";
                        var hoursObject = "";
                        var totalHoursThisWeek = "";

                        if (week1Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek1 = true;
                        } else if (week2Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek2 = true;
                        }

                        if (inWeek1 === true) {
                            correspondingDateObject = week1Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week1Array.find(function (object) {
                                return object.id === "week1";
                            });
                            // Add how many hours already worked this week
                            // ? I think it should just be regular hours though, not "total" hours
                            // totalHoursThisWeek = weekInfoObject.totalHours;
                            totalHoursThisWeek = weekInfoObject.regHours;

                            // Day Count
                            let daysInARow = weekInfoObject.consecutiveDayCount;

                            if (hoursType > 0) {
                                daysInARow++;
                                hoursObject = splitHours(site, hoursType, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = daysInARow;
                            } else {
                                daysInARow = 0;
                                hoursObject = splitHours(site, hoursType, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = 0;
                            }
                        } else {
                            correspondingDateObject = week2Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week2Array.find(function (object) {
                                return object.id === "week2";
                            });
                            // Add how many hours already worked this week
                            // ? I think it should just be regular hours though, not "total" hours
                            // totalHoursThisWeek = weekInfoObject.totalHours;
                            totalHoursThisWeek = weekInfoObject.regHours;
                            // Day Count
                            let daysInARow = weekInfoObject.consecutiveDayCount;

                            if (hoursType > 0) {
                                daysInARow++;
                                hoursObject = splitHours(site, hoursType, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = daysInARow;
                            } else {
                                daysInARow = 0;
                                hoursObject = splitHours(site, hoursType, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = 0;
                            }
                        }

                        // Assign the split hours to the corresponding date object
                        correspondingDateObject.regHours = hoursObject.regHours;
                        correspondingDateObject.otHours = hoursObject.otHours;
                        correspondingDateObject.dtHours = hoursObject.dtHours;

                        // Add today's hours to the weekly total
                        weekInfoObject.totalHours += hoursType;
                        weekInfoObject.regHours += hoursObject.regHours;
                        weekInfoObject.otHours += hoursObject.otHours;
                        weekInfoObject.dtHours += hoursObject.dtHours;
                        weekInfoObject.sickHours += hoursObject.sickHours;

                        // Add hours to the payperiod info object
                        correspondingPayPeriodInfoObject.totalHours = week1InfoObject.totalHours + week2InfoObject.totalHours;
                        correspondingPayPeriodInfoObject.regHours = week1InfoObject.regHours + week2InfoObject.regHours;
                        correspondingPayPeriodInfoObject.otHours = week1InfoObject.otHours + week2InfoObject.otHours;
                        correspondingPayPeriodInfoObject.dtHours = week1InfoObject.dtHours + week2InfoObject.dtHours;
                        correspondingPayPeriodInfoObject.sickHours = week1InfoObject.sickHours + week2InfoObject.sickHours;

                        // ? Is this actually working?
                        // Add location info to the payperiod info object
                        // This will allow you to display the data by site from reportArray (hopefully)
                        correspondingPayPeriodInfoObject.site = site;

                        staffData.push(personData);
                    });
                }
            }

            // * This is to count the hours of people who worked time outside of the normal hours
            function countExceptionHours(positionArray) {
                if (positionArray.length > 0) {
                    // There are actually exceptions in this array

                    // Go through each object in this array
                    positionArray.forEach(function (person) {
                        // "person" is an object containing:
                        // full name, hours, and minutes
                        let name = person.name;
                        let hours = Number(person.hours);
                        let minutes = Number(person.minutes);
                        let timeWorked = mergeTime(hours, minutes);

                        let correspondingPersonObject = reportArray.data.find(function (object) {
                            return object.fullName === name;
                        });
                        let correspondingPayPeriodArray = correspondingPersonObject[`${payPeriod}`];
                        let week1Array = correspondingPayPeriodArray[0];
                        let week2Array = correspondingPayPeriodArray[1];

                        // Info objects
                        let correspondingPayPeriodInfoObject = correspondingPayPeriodArray[2][0];
                        let week1InfoObject = week1Array.find(function (object) {
                            return object.id === "week1";
                        });
                        let week2InfoObject = week2Array.find(function (object) {
                            return object.id === "week2";
                        });

                        // Logic to see which week the date falls under
                        let dateObjectLocation = "";
                        let inWeek1 = false;
                        let inWeek2 = false;
                        let correspondingDateObject = "";
                        let weekInfoObject = "";
                        let hoursObject = "";
                        let totalHoursThisWeek = "";
                        let consecutiveDayCount = "";

                        if (week1Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek1 = true;
                        } else if (week2Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek2 = true;
                        }

                        if (inWeek1 === true) {
                            correspondingDateObject = week1Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week1Array.find(function (object) {
                                return object.id === "week1";
                            });
                            // Add how many hours already worked this week
                            // ? I think it should just be regular hours though, not "total" hours
                            // totalHoursThisWeek = weekInfoObject.totalHours;
                            totalHoursThisWeek = weekInfoObject.regHours;
                            // Day Count
                            let daysInARow = weekInfoObject.consecutiveDayCount;

                            if (timeWorked > 0) {
                                daysInARow++;
                                hoursObject = splitHours(site, timeWorked, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = daysInARow;
                            } else {
                                daysInARow = 0;
                                hoursObject = splitHours(site, timeWorked, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = 0;
                            }
                        } else {
                            correspondingDateObject = week2Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week2Array.find(function (object) {
                                return object.id === "week2";
                            });
                            // Add how many hours already worked this week
                            // ? I think it should just be regular hours though, not "total" hours
                            // totalHoursThisWeek = weekInfoObject.totalHours;
                            totalHoursThisWeek = weekInfoObject.regHours;
                            // Day Count
                            let daysInARow = weekInfoObject.consecutiveDayCount;

                            if (timeWorked > 0) {
                                daysInARow++;
                                hoursObject = splitHours(site, timeWorked, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = daysInARow;
                            } else {
                                daysInARow = 0;
                                hoursObject = splitHours(site, timeWorked, totalHoursThisWeek, daysInARow, correspondingPersonObject, correspondingDateObject);
                                weekInfoObject.consecutiveDayCount = 0;
                            }
                        }

                        // Assign the split hours to the corresponding date object
                        correspondingDateObject.regHours = hoursObject.regHours;
                        correspondingDateObject.otHours = hoursObject.otHours;
                        correspondingDateObject.dtHours = hoursObject.dtHours;

                        // Add today's hours to the weekly total
                        weekInfoObject.totalHours += timeWorked;
                        weekInfoObject.regHours += hoursObject.regHours;
                        weekInfoObject.otHours += hoursObject.otHours;
                        weekInfoObject.dtHours += hoursObject.dtHours;
                        weekInfoObject.sickHours += hoursObject.sickHours;

                        // Add hours to the payperiod info object
                        correspondingPayPeriodInfoObject.totalHours = week1InfoObject.totalHours + week2InfoObject.totalHours;
                        correspondingPayPeriodInfoObject.regHours = week1InfoObject.regHours + week2InfoObject.regHours;
                        correspondingPayPeriodInfoObject.otHours = week1InfoObject.otHours + week2InfoObject.otHours;
                        correspondingPayPeriodInfoObject.dtHours = week1InfoObject.dtHours + week2InfoObject.dtHours;
                        correspondingPayPeriodInfoObject.sickHours = week1InfoObject.sickHours + week2InfoObject.sickHours;

                        // Add location info to the payperiod info object
                        // This will allow you to display the data by site from reportArray (hopefully)
                        correspondingPayPeriodInfoObject.site = site;
                    });
                }
            }

            // * This is to count the hours of people who were sick
            function countSickHours(positionArray) {
                if (positionArray.length > 0) {
                    // There are actually exceptions in this array

                    // Go through each object in this array
                    positionArray.forEach(function (person) {
                        // "person" is an object containing:
                        // full name, hours, and minutes
                        let name = person.name;
                        let hours = Number(person.hours);
                        let minutes = Number(person.minutes);
                        let timeSick = mergeTime(hours, minutes);

                        let correspondingPersonObject = reportArray.data.find(function (object) {
                            return object.fullName === name;
                        });
                        let correspondingPayPeriodArray = correspondingPersonObject[`${payPeriod}`];
                        let week1Array = correspondingPayPeriodArray[0];
                        let week2Array = correspondingPayPeriodArray[1];

                        // Info objects
                        let correspondingPayPeriodInfoObject = correspondingPayPeriodArray[2][0];
                        let week1InfoObject = week1Array.find(function (object) {
                            return object.id === "week1";
                        });
                        let week2InfoObject = week2Array.find(function (object) {
                            return object.id === "week2";
                        });

                        // Logic to see which week the date falls under
                        let dateObjectLocation = "";
                        let inWeek1 = false;
                        let inWeek2 = false;
                        let correspondingDateObject = "";
                        let weekInfoObject = "";
                        // ? Do you actually need to calculate the hoursObject and totalHoursThisWeek if you are sick?
                        //let hoursObject = "";
                        //let totalHoursThisWeek = "";

                        if (week1Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek1 = true;
                        } else if (week2Array.find(function (object) {
                                return object.Day === entryDate;
                            }) !== undefined) {
                            inWeek2 = true;
                        }

                        if (inWeek1 === true) {
                            correspondingDateObject = week1Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week1Array.find(function (object) {
                                return object.id === "week1";
                            });
                            // Add how many hours already worked this week
                            // ? Getting rid of these for now...
                            //totalHoursThisWeek = weekInfoObject.totalHours;
                            //hoursObject = splitHours(site, timeSick, totalHoursThisWeek);
                        } else {
                            correspondingDateObject = week2Array.find(function (object) {
                                return object.Day === entryDate;
                            });
                            weekInfoObject = week2Array.find(function (object) {
                                return object.id === "week2";
                            });
                            // Add how many hours already worked this week
                            // ? Getting rid of these for now...
                            //totalHoursThisWeek = weekInfoObject.totalHours;
                            //hoursObject = splitHours(site, timeSick, totalHoursThisWeek);
                        }

                        // Assign the split hours to the corresponding date object
                        correspondingDateObject.sickHours = timeSick;

                        // Add today's hours to the weekly total
                        weekInfoObject.sickHours += timeSick;

                        // Add hours to the payperiod info object
                        correspondingPayPeriodInfoObject.sickHours = week1InfoObject.sickHours + week2InfoObject.sickHours;

                        // Add location info to the payperiod info object
                        // This will allow you to display the data by site from reportArray (hopefully)
                        correspondingPayPeriodInfoObject.site = site;
                    });
                }
            }
        });
    });

    // * Assign data to table cells
    // For each object (person) in the reportArray.data
    // Look at each payPeriod
    // Look at the 3rd array in that array (this is the info object)
    // Look at the "site" property
    // Depending on the site, assign the info from that object to a table value

    reportArray.data.forEach(function (person) {
        let payPeriods = [person.payPeriod1, person.payPeriod2, person.payPeriod3, person.payPeriod4, person.payPeriod5];
        let deductionDayFields = [person.PayPeriod1DeductionDays, person.PayPeriod2DeductionDays, person.PayPeriod3DeductionDays, person.PayPeriod4DeductionDays, person.PayPeriod5DeductionDays];
        let deductionWeekFields = [person.PayPeriod1DeductionWeeks, person.PayPeriod2DeductionWeeks, person.PayPeriod3DeductionWeeks, person.PayPeriod4DeductionWeeks, person.PayPeriod5DeductionWeeks];
        let checkLocationFields = [person.PayPeriod1Location, person.PayPeriod2Location, person.PayPeriod3Location, person.PayPeriod4Location, person.PayPeriod5Location];
        let salaryDayFields = [person.PayPeriod1SalaryDays, person.PayPeriod2SalaryDays, person.PayPeriod3SalaryDays, person.PayPeriod4SalaryDays, person.PayPeriod5SalaryDays];
        let salaryWeekFields = [person.PayPeriod1SalaryWeeks, person.PayPeriod2SalaryWeeks, person.PayPeriod3SalaryWeeks, person.PayPeriod4SalaryWeeks, person.PayPeriod5SalaryWeeks];
        let isSalaryFields = [person.PayPeriod1isSalary, person.PayPeriod2isSalary, person.PayPeriod3isSalary, person.PayPeriod4isSalary, person.PayPeriod5isSalary];

        payPeriods.forEach(function (payPeriod) {
            let firstName = person["First Name"];
            let lastName = person["Last Name"];

            // TODO: Assign the actual payperiod into the payperiod table tabs
            let payPeriodInfoObject = payPeriod[2][0];
            let site = payPeriodInfoObject.site;
            let table = "";
            let payPeriodNumber = payPeriodInfoObject.payPeriodNumber;
            let regHours = payPeriodInfoObject.regHours;
            let otHours = payPeriodInfoObject.otHours;
            let dtHours = payPeriodInfoObject.dtHours;
            let sickHours = payPeriodInfoObject.sickHours;
            // ! totalHours does not include sick hours
            // ? Don't know if that should be changed...
            let totalHours = payPeriodInfoObject.totalHours;
            // Deductions
            let deductionDayRate = 0;
            let deductionWeekRate = 0;
            let thisIndex = payPeriods.indexOf(payPeriod);
            let deductionDays = Number(deductionDayFields[thisIndex]);
            let deductionWeeks = Number(deductionWeekFields[thisIndex]);
            let checkLocation = checkLocationFields[thisIndex];
            // Assign deduction rates based on site
            if (site === "ucf") {
                deductionDayRate = 12.57;
                deductionWeekRate = 120;
            } else if (site === "sw") {
                deductionDayRate = 11.06;
                deductionWeekRate = 105.00;
            } else if (site === "stan") {
                deductionDayRate = 16.76;
                deductionWeekRate = 160.00;
            } else if (site === "villa") {
                deductionDayRate = 11.06;
                deductionWeekRate = 105.00;
            }
            // Assign a string for the deduction
            let deductionTotal = moneyString((deductionDayRate * deductionDays) + (deductionWeekRate * deductionWeeks));

            // Salary Staff Only
            let isSalaryEmployee = isSalaryFields[thisIndex];

            if (isSalaryEmployee === "Yes") {
                let weeklyPayRate = Number(person.WeeklyPay.replace(/[^0-9\.-]+/g, ""));
                let dailyPayRateUnRounded = weeklyPayRate / 6;
                let dailyPayRate = Math.ceil(dailyPayRateUnRounded * 100) / 100;
                let salaryDays = Number(salaryDayFields[thisIndex]);
                let salaryWeeks = Number(salaryWeekFields[thisIndex]);
                let salaryDayPay = salaryDays * dailyPayRate;
                let salaryWeekPay = salaryWeeks * weeklyPayRate;
                let salaryPayTotal = moneyString(salaryDayPay + salaryWeekPay);
                let state = person.PayPeriod1State;
                table = assignTable(site, payPeriodNumber, isSalaryEmployee, state);
                createTableEntrySalary(table, firstName, lastName, salaryPayTotal, checkLocation);
            } else {
                table = assignTable(site, payPeriodNumber, isSalaryEmployee);
                createTableEntryHourly(table, firstName, lastName, regHours, otHours, dtHours, sickHours, totalHours, deductionTotal, checkLocation);
            }
        });
    });
    constructTables();

    // Get GeoLocation and Assign User Info
    // assignUserInfo();

    // Close the loading screen
    window.loading_screen.finish();

}

function splitHours(site, hoursWorked, totalHoursThisWeek, consecutiveDayCount, correspondingPersonObject, correspondingDateObject) {
    if (site === "stan") {
        // Todo: CA 7th day laws logic
        // Weird California laws
        let overtimeThreshold = 8;
        let doubletimeThreshold = 12;
        let weekThreshold = 40;

        let dayCount = consecutiveDayCount;

        let regHours = 0;
        let otHours = 0;
        let dtHours = 0;
        let sickHours = 0;

        // * One and one-half times the employee's regular rate of pay for all hours worked in excess of eight hours up to and including 12 hours in any workday, and for the first eight hours worked on the seventh consecutive day of work in a workweek; and
        // * Double the employee's regular rate of pay for all hours worked in excess of 12 hours in any workday and for all hours worked in excess of eight on the seventh consecutive day of work in a workweek.

        // ! 1. OT for any hours over 8 and up to and less than 12 in a day
        // ! 2. OT for the 1st 8 hours if the day is the 7th consecutive day
        // ! 3. DT for any hours over 12 in a workday
        // ! 4. DT for any hours greater than 8 on the 7th day of a workweek

        if (dayCount === 7) {
            if (hoursWorked < 8) {
                regHours = 0;
                otHours = hoursWorked;
                dtHours = 0;
                sickHours = 0;
                // * Check if it is between 8 and 12 hours OR if it is greater than 12 hours
                // ! Here, just an else works because on the 7th day, dt hours for anything over 8 regardless
            } else {
                regHours = 0;
                otHours = 8;
                dtHours = hoursWorked - 8;
                sickHours = 0;
            }
        } else {
            // * Check totalHoursThisWeek
            // * Check if it is already over 40 hours this week
            if (totalHoursThisWeek >= 40) {
                if (hoursWorked > 8 && hoursWorked <= 12) {
                    regHours = 0;
                    otHours = hoursWorked;
                    dtHours = 0;
                    sickHours = 0;
                } else if (hoursWorked > 12) {
                    regHours = 0;
                    otHours = 12;
                    dtHours = hoursWorked - 12;
                    sickHours = 0;
                } else if (hoursWorked <= 8) {
                    regHours = 0;
                    otHours = hoursWorked;
                    dtHours = 0;
                    sickHours = 0;
                }
            } else if (totalHoursThisWeek + hoursWorked > 40) {
                if (hoursWorked > 8 && hoursWorked <= 12) {
                    regHours = 8;
                    otHours = hoursWorked - 8;
                    dtHours = 0;
                    sickHours = 0;
                } else if (hoursWorked > 12) {
                    regHours = 8;
                    otHours = 4;
                    dtHours = hoursWorked - 12;
                    sickHours = 0;
                } else if (hoursWorked <= 8) {
                    regHours = hoursWorked;
                    otHours = 0;
                    dtHours = 0;
                    sickHours = 0;
                }
            } else if (totalHoursThisWeek + hoursWorked < 40) {
                if (hoursWorked > 8 && hoursWorked <= 12) {
                    regHours = 8;
                    otHours = hoursWorked - 8;
                    dtHours = 0;
                    sickHours = 0;
                } else if (hoursWorked > 12) {
                    regHours = 8;
                    otHours = 4;
                    dtHours = hoursWorked - 12;
                    sickHours = 0;
                } else if (hoursWorked <= 8) {
                    regHours = hoursWorked;
                    otHours = 0;
                    dtHours = 0;
                    sickHours = 0;
                }
            }
        }

        return {
            regHours: regHours,
            otHours: otHours,
            dtHours: dtHours,
            sickHours: sickHours
        };
    } else {
        // Regular federal laws for Florida, Pennsylvania, and Texas
        let overtimeThreshold = 40;

        let regHours = 0;
        let otHours = 0;
        let dtHours = 0;
        let sickHours = 0;

        if (totalHoursThisWeek >= overtimeThreshold) {
            // Now OT starts kicking in
            otHours = hoursWorked;
        } else {
            // Not enough hours in the pay period worked
            // to start acruing overtime
            // Check if today's hous would put you over threshold
            if (totalHoursThisWeek + hoursWorked > overtimeThreshold) {
                // Today's hours are going to have to be split up
                regHours = overtimeThreshold - totalHoursThisWeek;
                otHours = (totalHoursThisWeek + hoursWorked) - overtimeThreshold;
            } else {
                // Today's hours won't put you over the threshold
                regHours = hoursWorked;
            }
        }

        return {
            regHours: regHours,
            otHours: otHours,
            dtHours: dtHours,
            sickHours: sickHours
        };
    }
}

function mergeTime(hours, minutes) {
    let finalTime = "";

    if (minutes !== 0) {
        finalTime = hours + (minutes / 60);
    } else {
        finalTime = hours;
    }

    return finalTime;
}

function createTableEntryHourly(table, firstName, lastName, regHours, otHours, dtHours, sickHours, totalHours, deductionTotal, checkLocation) {
    let tableBody = "";

    tableBody = assignTableBody(table);

    let row = document.createElement("tr");
    row.name = firstName.concat(" ", lastName);
    if (tableBody !== undefined) {
        tableBody.appendChild(row);
    }

    let firstNameCell = document.createElement("td");
    firstNameCell.innerHTML = firstName;
    row.appendChild(firstNameCell);

    let lastNameCell = document.createElement("td");
    lastNameCell.innerHTML = lastName;
    row.appendChild(lastNameCell);

    let regHoursCell = document.createElement("td");
    regHoursCell.align = "right";
    regHoursCell.innerHTML = regHours;
    row.appendChild(regHoursCell);

    let otHoursCell = document.createElement("td");
    otHoursCell.align = "right";
    otHoursCell.innerHTML = otHours;
    row.appendChild(otHoursCell);

    let dtHoursCell = document.createElement("td");
    dtHoursCell.align = "right";
    dtHoursCell.innerHTML = dtHours;
    row.appendChild(dtHoursCell);

    let sickHoursCell = document.createElement("td");
    sickHoursCell.align = "right";
    sickHoursCell.innerHTML = sickHours;
    row.appendChild(sickHoursCell);

    let totalHoursCell = document.createElement("td");
    totalHoursCell.align = "right";
    totalHoursCell.innerHTML = totalHours;
    row.appendChild(totalHoursCell);

    let deductionCell = document.createElement("td");
    deductionCell.align = "center";
    deductionCell.innerHTML = deductionTotal;
    row.appendChild(deductionCell);

    // TODO: Create cell for travel stipend
    let stipendCell = document.createElement("td");
    stipendCell.align = "center";
    stipendCell.innerHTML = "-";
    row.appendChild(stipendCell);

    let locationCell = document.createElement("td");
    locationCell.align = "center";
    locationCell.innerHTML = checkLocation;
    row.appendChild(locationCell);



}

function createTableEntrySalary(table, firstName, lastName, salaryPayTotal, checkLocation) {
    let tableBody = "";

    tableBody = assignTableBody(table);

    let row = document.createElement("tr");
    row.name = firstName.concat(" ", lastName);
    tableBody.appendChild(row);

    let firstNameCell = document.createElement("td");
    firstNameCell.innerHTML = firstName;
    row.appendChild(firstNameCell);

    let lastNameCell = document.createElement("td");
    lastNameCell.innerHTML = lastName;
    row.appendChild(lastNameCell);

    let totalPayCell = document.createElement("td");
    totalPayCell.innerHTML = salaryPayTotal;
    row.appendChild(totalPayCell);

    // TODO: Create cell for travel stipend
    let stipendCell = document.createElement("td");
    stipendCell.align = "center";
    if (lastName === "Borbolla") {
        stipendCell.innerHTML = "$50.00";
    } else {
        stipendCell.innerHTML = "-";
    }
    row.appendChild(stipendCell);

    let locationCell = document.createElement("td");
    locationCell.align = "center";
    locationCell.innerHTML = checkLocation;
    row.appendChild(locationCell);



}

function constructTables() {
    $('#table-payPeriod1-CA-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod1-CA-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod1-TX-hourly').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
    $('#table-payPeriod1-TX-salary').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'excel', 'pdf'
        ]
    });
}

function assignTable(site, payPeriodNumber, isSalaryEmployee, state) {
    let table = "";

    if (site === "stan") {
        if (payPeriodNumber === 1) {
            if (isSalaryEmployee === "No") {
                table = table1CAHourly;
            } else {
                table = table1CASalary;
            }
        } else {
            // TODO: Write other 4 Pay Periods
        }
    } else if (site === "sw") {
        if (payPeriodNumber === 1) {
            if (isSalaryEmployee === "No") {
                table = table1TXHourly;
            } else {
                table = table1TXSalary;
            }
        } else {
            // TODO: Write other 4 Pay Periods
        }
    } else if (site === "") {
        if (state === "California") {
            table = table1CASalary;
        } else if (state === "Florida") {
            // TODO: Create Florida Salary Table
        } else if (state === "Pennsylvania") {
            // TODO: Create Pennsylvania Salary Table
        } else if (state === "Texas") {
            table = table1TXSalary;
        }
    }

    return table;
}

function assignTableBody(table) {
    let tableBody = "";

    let tableArray = [table1CAHourly, table1CASalary, table1TXHourly, table1TXSalary];
    let bodyArray = [body1CAHourly, body1CASalary, body1TXHourly, body1TXSalary];

    let thisIndex = tableArray.indexOf(table);
    tableBody = bodyArray[thisIndex];

    return tableBody;
}

function moneyString(value) {
    let initialString = value.toLocaleString("us-US", {
        style: "currency",
        currency: "USD"
    });
    let numberString = initialString.slice(1, initialString.length);
    let finalString = "$" + " " + numberString;

    return finalString;
}

function assignUserInfo() {
    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);


    /*
    userInformation.firstName = firstName.value;
    userInformation.lastName = lastName.value;
    userInformation.site = chosenSite;
    userInformation.userName = firstName.value.concat(" ", lastName.value);

    LogRocket.identify(userInformation.userName, {
        userName: userInformation.userName,
        firstName: userInformation.firstName,
        lastName: userInformation.lastName,
        site: userInformation.site
    });
    */
}