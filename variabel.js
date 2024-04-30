// latihan 1

const length = 5;
const width = 3;
let rectangle = length * width; // result 15
console.log("latihan 1: ", rectangle);

//latihan 2

const length1 = 5;
const width1 = 3;
let rectangle1 = 2 * (length1 + width1); // result 16
console.log("latihan 2:", rectangle1);
// latihan 3

const diameter = 2 * 5;
const circumference = 2 * Math.PI * 5;
const area = Math.PI * 5 * 5;

console.log("The diameter of the circle is: " + diameter);
console.log("The circumference of the circle is: " + circumference);
console.log("The area of the circle is: " + area);

// latihan 4

const res = 180 - 80 - 65;
console.log("🚀 ~ res sudut:", res);

// latihan 5

const today = new Date("2024-12-14");
const today1 = new Date("2024-12-11");

let res1 = today1 - today;
let result = Math.floor(Math.abs(res1 / (1000 * 60 * 60 * 24)));

console.log("🚀 ~ hasil perbedaan hari:", result);

// latihan 6

const day = 400;

const years = Math.floor(day / 365);
const remainingDays = day % 365;
const months = Math.floor(remainingDays / 30);
const days = remainingDays % 30;

console.log(
  "Equivalent duration: " +
    years +
    " years, " +
    months +
    " months, " +
    days +
    " days"
);
