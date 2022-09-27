let res12 = 1;

(function factorial(a: number) {
  for (let i = 1; i <= a; i++) {
    res12 *= i;
  }
  console.log(res12);
})(5);
