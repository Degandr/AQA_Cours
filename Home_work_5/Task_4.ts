//first attempt

let n: number;
let y2 = 0;
let z2: number;
let summ22: number;

function sumOfNumber(x: number) {
  n = x.toString().length - 1;
  y2 = Math.floor(x / 10 ** n);
  x = x - y2 * 10 ** n;
  for (n; n > 0; ) {
    n -= 1;
    z2 = Math.floor(x / 10 ** n);
    x = x - z2 * 10 ** n;
    y2 += z2;
  }
  summ22 = x + y2;
  return summ22;
}
console.log(sumOfNumber(2021));

//second attempt

let digit: number;

function sumDigits(n: number) {
  let sum = 0;
  while (n) {
    digit = n % 10;
    sum += digit;
    n = (n - digit) / 10;
  }
  return sum;
}

console.log(sumDigits(2021));
