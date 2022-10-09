export {};

const numbersWith1 = [8];

//function declaration

const sum2 = numbersWith1
  .map(function (val: number) {
    return val ** 2;
  })
  .map(function (val: number) {
    return val
      .toString()
      .split("")
      .map(Number)
      .reduce(function (a: number, b: number) {
        return a + b;
      }, 0);
  })
  .every(function (val: number) {
    return val % 2 === 0;
  });

console.log(sum2);

//arrow function

const sum3 = numbersWith1
  .map((val: number) => {
    return val ** 2;
  })
  .map((val: number) => {
    return val
      .toString()
      .split("")
      .map(Number)
      .reduce((a: number, b: number) => {
        return a + b;
      }, 0);
  })
  .every((val: number) => {
    return val % 2 === 0;
  });

console.log(sum3);
