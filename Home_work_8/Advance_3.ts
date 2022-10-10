const highAndLow = "1 9 3 4 -5";
const arraySplit3 = highAndLow
  .split(" ")
  .filter((value) => {
    if (Number.parseInt(value)) {
      return value;
    }
  })
  .map((value) => {
    return +value;
  });

function getMaxOfArray(numArray: number[]) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray: number[]) {
  return Math.min.apply(null, numArray);
}
const res555 = getMaxOfArray(arraySplit3);
const res666 = getMinOfArray(arraySplit3);

console.log("return", '"' + `${res555}`, `${res666}` + '"');
