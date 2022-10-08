const mixedNumbers2: number[] = [];

for (let i = 0; i < 6; i++) {
  mixedNumbers2.push(Math.random());
}

const newMixed = [];

for (const num of mixedNumbers2) {
  newMixed.push(Math.pow(num, 3));
}

console.log(mixedNumbers2);
console.log(newMixed);
