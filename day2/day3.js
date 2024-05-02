const { fi } = require("date-fns/locale");

const result = (celcius) => {
  let Farenhait = (celcius * 9) / 5 + 32;
  return Farenhait;
};
console.log("hasil fahrenheit", result(60));
// ================================================
const checkNumber = (params) => {
  if (params % 2 === 0) {
    return "even number";
  } else {
    return "odd number";
  }
};
console.log(checkNumber(7));
// =====================================================
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Contoh penggunaan
const number = 2;
if (isPrime(number)) {
  console.log(`${number} adalah angka utama`);
} else {
  console.log(`${number} bukan angka utama`);
}
// ======================================================
const findSum = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += i;
    // console.log(i);
  }
  return count;
};
console.log(findSum(5));
// ==========================================================
const faktorial = (num) => {
  let kali = 1;
  for (let i = 6; i > num; i--) {
    kali *= i;
    // console.log(i);
  }
  return kali;
};
console.log(faktorial(0));
// ============================================================
const fibonacci = (num) => {
  let fib = [0, 1];
  //          0, 1, 1, 2
  for (let i = 2; i <= num; i++) {
    let fibSum = (fib[i] = fib[i - 2] + fib[i - 1]);
    console.log(fib[i]);
    fib.push(fibSum);
  }
  return fib;
};
console.log("🚀 ~ fibonacci ~ fibonacci:", fibonacci(15));
// ============================================================
// const fib2 = (N) => {
//   let num1 = 0;
//   let num2 = 1;
//   let curr;

//   for (let i = 2; i <= N; i++) {
//     curr = num1 + num2;
//     num1 = num2;
//     num2 = curr;
//   }
//   return num2;
// };
// console.log("🚀 ~ fib2 ~ fib2:", fib2(15));
