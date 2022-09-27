let result = 0;

function getSum(a: number, b: number) {
  if (a < b) {
    for (a; a < b; a++) {
      result += a;
    }
    return result + b;
  } else if (a === b) {
    return `a === ${a}, b === ${b}`;
  } else if (a > b) {
    return `${a} > ${b}`;
  }
}

console.log(getSum(-5, 3));
