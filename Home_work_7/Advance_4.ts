const mixedNumbers2 = [2, 3, 4, 100, -5];

const newMixed = [];

for (const num of mixedNumbers2) {
  newMixed.push(Math.pow(num, 3));
}

console.log(mixedNumbers2);
console.log(newMixed);
