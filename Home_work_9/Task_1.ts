class Animal {
  static animalType = "Amfibia";

  name: string;

  constructor(name: string) {
    this.name = name;
  }
  greetings() {
    return `This is a ${Animal.animalType}. It's name is ${this.name}`;
  }
}

const first = new Animal("Kvaaa");
console.log(first.greetings());
