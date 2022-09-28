function constructor(a6: number, b5: number, c5: number) {
  if (Number.isInteger(a6) && Number.isInteger(b5) && Number.isInteger(c5)) {
    return a6 + b5 > c5 && b5 + c5 > a6 && a6 + c5 > b5;
  } else return false;
}

console.log(constructor(5, 4, 20));
