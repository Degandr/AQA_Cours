const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

let shouldGoToWork: string;

if (key && documents && pen) {
  if (apple && orange) {
    shouldGoToWork = "you can go to work";
    console.log(shouldGoToWork);
  } else if (!apple && orange) {
    shouldGoToWork = "you can go to work";
    console.log(shouldGoToWork);
  } else if (apple && !orange) {
    shouldGoToWork = "you can go to work";
    console.log(shouldGoToWork);
  } else {
    shouldGoToWork = "you can't go to work";
    console.log(shouldGoToWork);
  }
} else {
  shouldGoToWork = "you can't go to work";
  console.log(shouldGoToWork);
}
