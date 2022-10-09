const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

//function declaration

const sum22 = fibonacci1.reduce(function (accum: number, value: number) {
  accum += value;
  return accum;
}, 0);

console.log(sum22);

//arrow function

const sum3 = fibonacci1.reduce((accum: number, value: number) => {
  accum += value;
  return accum;
}, 0);

console.log(sum3);
