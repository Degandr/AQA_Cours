const numm3 = 15;

if (numm3 % 5 === 0 && numm3 % 3 !== 0) {
  console.log("Fiz");
} else if (numm3 % 3 === 0 && numm3 % 5 !== 0) {
  console.log("Buz");
} else if (numm3 % 3 === 0 && numm3 % 5 === 0) {
  console.log("FizBuz");
} else {
  console.log("bad number");
}
