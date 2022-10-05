const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const finalArray = oddNumbers.concat(evenNumbers);

console.log(finalArray);

for (const num in finalArray) {
  if (finalArray[num] === 8) {
    console.log(num);
  }
}
