const numbers1 = [7, -4, 32, -90, 54, 32, -21];

//function declaration

const positiveArray = numbers1.filter(function (val: number) {
  return val > 0;
});

console.log(positiveArray);

//arrow function

const positiveArray1 = numbers1.filter((val: number) => {
  return val > 0;
});

console.log(positiveArray1);
