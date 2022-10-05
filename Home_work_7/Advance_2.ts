const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
]; // 100.485

let count1 = 0;
let average = 0;

for (let i = 0; i < matrix.length; i++) {
  for (const num of matrix[i]) {
    if (num) {
      count1++;
      average += num;
    }
  }
}
console.log(average / count1);
