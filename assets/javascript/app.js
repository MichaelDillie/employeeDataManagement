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
});