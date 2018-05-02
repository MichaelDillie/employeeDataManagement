$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAHdms5PrS2NC0ef9MKWQS-myXDbbWVsLw",
        authDomain: "employeedatamanagement-cd379.firebaseapp.com",
        databaseURL: "https://employeedatamanagement-cd379.firebaseio.com",
        projectId: "employeedatamanagement-cd379",
        storageBucket: "",
        messagingSenderId: "506190186188"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var employeeNameInput;
    var roleInput;
    var startDateInput;
    var monthlyRateInput;
    var workedMonths;

    var table = $("#tableID");
    var empty = $(".empty");

    function generateToTable() {
        database.ref().on("child_added", function (snapshot) {
            var snap = snapshot.val();
            console.log(workedMonths);
            calcMonthsWorked(snap.startDate);
            table.append("<tr class='empty'><td>" + snap.employeeName + "</td><td>" + snap.role + "</td><td>" + snap.startDate + "</td><td>" + "$" + snap.monthlyRate + "</td><td>" + snap.monthsWorked + "</td><td>" + "$" + snap.totalBill + "</td></tr>")
        });
    }
    generateToTable();

    function calcMonthsWorked(inputDate) {
        // start date is mm/dd/yy
        // split date by -
        var splitDate = inputDate.split("-", 3);
        // console.log(splitDate);

        // moment uses YEAR / month/ day
        var monthsWorkedFunc = moment([splitDate[0], splitDate[1], splitDate[2]]).diff(moment(), 'months', true);

        workedMonths = Math.floor(Math.abs(monthsWorkedFunc));
    }


    $("#buttonInput").on("click", function (e) {
        e.preventDefault();

        employeeNameInput = $("#employeeNameInput").val().trim();
        roleInput = $("#roleInput").val().trim();
        startDateInput = $("#startDateInput").val().trim();
        monthlyRateInput = $("#monthlyRateInput").val().trim();

        calcMonthsWorked(startDateInput);

        console.log(workedMonths);

        console.log(employeeNameInput);
        console.log(roleInput);
        console.log(startDateInput);
        console.log(monthlyRateInput);
        // Adds to DB
        database.ref().push({
            employeeName: employeeNameInput,
            role: roleInput,
            startDate: startDateInput,
            monthlyRate: monthlyRateInput,
            monthsWorked: workedMonths,
            totalBill: 123456789,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        // Clears input fields
        $("#employeeNameInput").val("");
        $("#roleInput").val("");
        $("#startDateInput").val("");
        $("#monthlyRateInput").val("");
        table.empty();
        generateToTable();
    });
});