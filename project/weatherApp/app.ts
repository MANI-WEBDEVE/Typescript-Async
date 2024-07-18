//* 70295d2b7a4a1829bc3cf74ca69acb79


const dateElement = document.getElementsByClassName("date") as HTMLCollectionOf<HTMLParagraphElement>;
const city = document.getElementsByClassName("city");
const temp = document.getElementsByClassName("temperature");
const tempImage = document.getElementsByClassName("tempImage");
const description = document.getElementsByClassName("description");
const tempMax = document.getElementsByClassName("tempMax");
const tempMin = document.getElementsByClassName("tempMin");

const months: string[] = [
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

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() + 1;
let year = dateObj.getUTCFullYear();

dateElement[0].innerHTML = `${month} ${day}, ${year}`;
