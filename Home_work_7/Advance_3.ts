const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

const positive = [];
const negative = [];

for (const num of mixedNumbers) {
  if (num > 0) {
    positive.push(num);
  } else {
    negative.push(num);
  }
}

console.log(positive);
console.log(negative);
