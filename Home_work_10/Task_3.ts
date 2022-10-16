export {};

const car1: object = {
  numberOfDoors: 4,
  driveCar: "left-hand",
};

const car2 = {
  numberOfDoors: 2,
  driveCar: "right-hand",
};

function getCar(this: any) {
  console.log(`This car has ${this.numberOfDoors} doors and this is ${this.driveCar} drive car`);
}

getCar.call(car1);
getCar.call(car2);
