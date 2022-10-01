const matchScore: any = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const matchResult = "2:5";

let a9 = 0;

for (a9; a9 < 10; a9++) {
  if (matchResult.startsWith(a9.toString())) {
    console.log(a9);
    break;
  }
}

let b9 = 0;

for (b9; b9 < 10; b9++) {
  if (matchResult.endsWith(b9.toString())) {
    console.log(b9);
    break;
  }
}

let firstWord = "";
let secondWord = "";

for (const key in matchScore) {
  if (key === a9.toString()) {
    firstWord = matchScore[key];
  } else if (key === b9.toString()) {
    secondWord = matchScore[key];
  }
}

console.log(firstWord, ":", secondWord);
