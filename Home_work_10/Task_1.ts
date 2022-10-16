class Car {
  constructor(protected carName: string, protected engineType: string) {}
}

class SportCar extends Car {
  constructor(
    protected carName: string,
    protected engineType: string,
    private maxSpeed: string,
    private carCost: number,
  ) {
    super(carName, engineType);
  }
  getInfo() {
    return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`;
  }
}

class LuxuryCar extends Car {
  constructor(
    protected carName: string,
    protected engineType: string,
    private maxSpeed: string,
    private carCost: number,
  ) {
    super(carName, engineType);
  }
  getInfo() {
    return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`;
  }
}

const car1 = new SportCar("BMW", "v12", "380km/h", 1000000);
console.log(car1.getInfo());

const car2 = new LuxuryCar("Lexus", "v8", "260km/h", 100000);
console.log(car2.getInfo());
