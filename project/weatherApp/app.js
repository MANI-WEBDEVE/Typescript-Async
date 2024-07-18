//* 70295d2b7a4a1829bc3cf74ca69acb79
var dateElement = document.getElementsByClassName("date");
var city = document.getElementsByClassName("city");
var temp = document.getElementsByClassName("temperature");
var tempImage = document.getElementsByClassName("tempImage");
var description = document.getElementsByClassName("description");
var tempMax = document.getElementsByClassName("tempMax");
var tempMin = document.getElementsByClassName("tempMin");
var months = [
    "January",
    "Februray",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var dateObj = new Date();
var month = months[dateObj.getUTCMonth()];
var day = dateObj.getUTCDate() + 1;
var year = dateObj.getUTCFullYear();
dateElement[0].innerHTML = "".concat(month, " ").concat(day, ", ").concat(year);
