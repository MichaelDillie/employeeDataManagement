$(document).ready(function () {
    // Testing if JS and jQuery are linked
    console.log("linked");

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


    $("#buttonInput").on("click", function (e) {
        e.preventDefault();

        employeeNameInput = $("#employeeNameInput").val().trim();
        roleInput = $("#roleInput").val().trim();
        startDateInput = $("#startDateInput").val().trim();
        monthlyRateInput = $("#monthlyRateInput").val().trim();

        console.log(employeeNameInput);
        console.log(roleInput);
        console.log(startDateInput);
        console.log(monthlyRateInput);
        // Adds to DB
        database.ref().push({
            employeeName: employeeNameInput,
            role: roleInput,
            startDate: startDateInput,
            monthlyRate: monthlyRateInput
        });
        // Clears input fields
        $("#employeeNameInput").val("");
        $("#roleInput").val("");
        $("#startDateInput").val("");
        $("#monthlyRateInput").val("");

    });
});