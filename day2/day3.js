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
// console.log(faktorial(0));
// // ============================================================
// function fibonacci(n) {
//   const fibSeq = [0, 1]; // Inisialisasi urutan dengan dua angka pertama

//   for (let i = 2; i < n; i++) {
//     const nextNum = fibSeq[i - 1] + fibSeq[i - 2];
//     fibSeq.push(nextNum);
//   }

//   return fibSeq[n - 1]; // Mengembalikan angka ke-N dalam urutan Fibonacci
// }

// // Menampilkan angka pertama N dalam urutan Fibonacci dengan N = 15
// const n = 15;
// const fibonacciNumber = fibonacci(n);
// console.log(
//   `Angka pertama ${n} dalam urutan Fibonacci adalah: ${fibonacciNumber}`
// );

function fibonacciSequence(n) {
  const fibSeq = [0, 1]; // Initialize sequence with first two numbers

  for (let i = 2; i < n; i++) {
    const nextNum = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq.push(nextNum);
  }

  return fibSeq.slice(0, n).join(", "); // Return the first N Fibonacci numbers
}

const n = 15;
const fibonacciNumbers = fibonacciSequence(n);
console.log(`The first ${n} Fibonacci numbers are: ${fibonacciNumbers}`);
