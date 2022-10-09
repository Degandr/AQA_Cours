const numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

//function declaration

const firstVal: number | undefined = numbers3.find(function (val: number) {
  return val % 2 === 0;
});
console.log(firstVal);

//arrow function

const firstVal1: number | undefined = numbers3.find((val: number) => {
  return val % 2 === 0;
});
console.log(firstVal1);
