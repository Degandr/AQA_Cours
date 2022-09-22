const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

let shouldGoToWork: string;

const strr1 = "you can go to work";
const strr2 = "you can't go to work";

if (key && documents && pen) {
  if (apple && orange) {
    shouldGoToWork = strr1;
  } else if (!apple && orange) {
    shouldGoToWork = strr1;
  } else if (apple && !orange) {
    shouldGoToWork = strr1;
  } else {
    shouldGoToWork = strr2;
  }
} else {
  shouldGoToWork = strr2;
}

console.log(shouldGoToWork);
