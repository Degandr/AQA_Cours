const student1: any = {
  name: "Polina",
  age: 27,
};

const student2: any = {
  name: "Polina",
  age: 27,
};

//first method:
const students: any = {
  ...student1,
  ...student2,
};

console.log(students.student1 === students.student2);

//second method (to be honest I'm not sure about the correctness of this method):

for (const key1 in student1) {
  for (const key2 in student2) {
    if (key1 === key2 && student1[key1] === student2[key2]) {
      console.log(true);
    }
  }
}

//third method:

let finalKey1 = "";
let finelValue1 = "";
let finalKey2 = "";
let finelValue2 = "";

for (const key1 in student1) {
  finalKey1 += key1;
  finelValue1 += student1[key1];
}

for (const key2 in student2) {
  finalKey2 += key2;
  finelValue2 += student1[key2];
}

if (finalKey1 === finalKey2 && finelValue1 === finelValue2) {
  console.log(true);
} else {
  console.log(false);
}
