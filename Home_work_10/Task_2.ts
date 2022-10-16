const person1: object = {
  personName: "Alex",
};

const person2 = {
  personName: "Andrew",
};

function sayName(this: any) {
  console.log(`My name is ${this.personName}`);
}

sayName.call(person1);
sayName.call(person2);
