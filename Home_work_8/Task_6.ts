const numbersWith = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5, 15];
const numbersWithout = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5, 16];

//function declaration

const firstVal3: boolean = numbersWith.some(function (val: number) {
  return val % 3 === 0 && val % 5 === 0;
});
console.log(firstVal3);

const firstVal4: boolean = numbersWithout.some(function (val: number) {
  return val % 3 === 0 && val % 5 === 0;
});
console.log(firstVal4);

//arrow function

const firstVal5: boolean = numbersWith.some((val: number) => {
  return val % 3 === 0 && val % 5 === 0;
});
console.log(firstVal5);

const firstVal6: boolean = numbersWithout.some((val: number) => {
  return val % 3 === 0 && val % 5 === 0;
});
console.log(firstVal6);
