const result = (celcius) => {
  let Farenhait = (celcius * 9) / 5 + 32;
  return Farenhait;
};
console.log("hasil fahrenheit", result(60));

const checkNumber = (params) => {
  if (params % 2 === 0) {
    return "even number";
  } else {
    return "odd number";
  }
};
console.log(checkNumber(7));

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
const number = 13;
if (isPrime(number)) {
  console.log(`${number} adalah angka utama`);
} else {
  console.log(`${number} bukan angka utama`);
}

const findSum = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += i;
    // console.log(i);
  }
  return count;
};
console.log(findSum(5));

const faktorial = (num) => {
  let kali = 1;
  for (let i = 6; i > num; i--) {
    kali *= i;
    // console.log(i);
  }
  return kali;
};
console.log(faktorial(0));

function printFibonacciNumbers(N) {
  let number1 = 0;
  let number2 = 1;

  //   console.log(number1); // Print the first Fibonacci number

  if (N > 1) {
    console.log(number2); // Print the second Fibonacci number

    for (let i = 3; i <= N; i++) {
      const nextNumber = number1 + number2;
      console.log(nextNumber); // Print the next Fibonacci number
      number1 = number2;
      number2 = nextNumber;
    }
  }
}

// Example usage
const N = 15; // Number of Fibonacci numbers to print
console.log(printFibonacciNumbers(N));
