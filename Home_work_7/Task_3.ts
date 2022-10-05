const numbers = [5, 43, 63, 23, 90];

// //first method:

for (let i = 0; i < numbers.length; i++) {
  delete numbers[i];
}
console.log(numbers);

//second method:
for (const num in numbers) {
  delete numbers[num];
}
console.log(numbers);
