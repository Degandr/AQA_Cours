let res = 0;

function getSum1(a: number) {
  for (let i = 0; i <= a; i++) {
    res += i;
  }
  return res;
}

console.log(getSum1(100));
