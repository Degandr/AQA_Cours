import { Car2 } from "./Parent_Class_export";

class Family extends Car2 {
  constructor(protected Name: string, protected Engine: string, private comfortLVL: string, private weight: number) {
    super(Name, Engine);
  }

  getInfo() {
    return `This is ${this.Name}. It has ${this.Engine} engine and level of comfort is ${this.comfortLVL}.`;
  }
  getWeightInfo() {
    if (this.weight < 2400) {
      throw new Error("It isn't a family car!");
    } else {
      return `The weight of this car is ${this.weight} KG`;
    }
  }
}

const car = new Family("Skoda", "v6", "very high", 2860);
console.log(car.getInfo(), car.getWeightInfo());
