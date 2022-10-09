const randomArray: string[] = ["NOT_USE", "12313", "wfewf"];

let elem2 = "bbb";
let elem3 = "eee";

//function declaration

function justDoIt() {
  for (const val of randomArray)
    if (val === randomArray[1]) {
      elem2 = randomArray[1];
    } else if (val === randomArray[2]) {
      elem3 = randomArray[2];
    }
}

justDoIt();

console.log(elem2);
console.log(elem3);

//arrow function

const fun = () => {
  for (const val of randomArray)
    if (val === randomArray[1]) {
      elem2 = randomArray[1];
    } else if (val === randomArray[2]) {
      elem3 = randomArray[2];
    }
};

console.log(elem2);
console.log(elem3);
