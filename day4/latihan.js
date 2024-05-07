var angka = 1;
var baris = 4;

for (var i = 0; i < baris; i++) {
  var row = "";
  for (var j = 0; j <= i; j++) {
    row += angka + ",";
    angka++;
  }
  console.log(row);
}
// ====================================================
// const fizzBuzz = () => {
//   const num+ = 6;
//   // let arr = [];

// for (let i)
//   console.log("🚀 ~ res ~ res:", res);
// };

// ========================================================
const sparate = (string) => {
  const res = string.split(" ");
  return res;
};

console.log(sparate("Hello World"));
// ===========================================================
const evenOrOdd = (num) => {
  let res = [];
  num.map((item) => {
    if (item % 2 === 0) {
      res.push(item);
    }
  });
  return res;
};

console.log(evenOrOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// =========================================================
const BMI = () => {};
// ==============================================
const triangle = (n) => {
  let t = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 6; j++) {
      t += "*";
    }
    t += "\n";
  }
  return t;
};

console.log(triangle(4));
// =======================================================
const Switch = (n) => {
  let t = "";
  for (let i = n; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      t += "*";
    }
    t += "\n";
  }
  return t;
};

console.log(Switch(6));
