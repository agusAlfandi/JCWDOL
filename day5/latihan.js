const latihan1 = (arr) => {
  let lowest = arr.sort((a, b) => a - b).slice(0, 1);
  let highest = arr.sort((a, b) => b - a).slice(0, 1);
  let totalNilai = arr.reduce((acc, curr) => acc + curr, 0);
  let average = totalNilai / arr.length;

  const result = {
    highest: highest[0],
    lowest: lowest[0],
    average: average.toFixed(2),
  };

  //   console.log("🚀 ~ latihan1 ~ average:", result);
};

latihan1([12, 5, 23, 18, 4, 45, 32]);
// ==========================================================
const separateAndConcat = (arr) => {
  let res = arr.toString().split(" ");
  let result = res.slice(0, arr.length - 2);
  console.log("🚀 ~ separateAndConcat ~ result:", result);
};
separateAndConcat(["apple", "banana", "cherry", "date"]);
