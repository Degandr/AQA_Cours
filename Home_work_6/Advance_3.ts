interface param {
  name: string;
  age: number;
}

const cat: param = {
  name: "Енчик",
  age: 3,
};

const cat2: param = JSON.parse(JSON.stringify(cat));
cat2.name = "Кузя";
console.log("Name in first object:", cat.name);
console.log("Name in second object:", cat2.name);

const emptyObject: param = {
  ...cat,
};
emptyObject.name = "Кузя";
console.log("Name in first object:", cat.name);
console.log("Name in second object:", emptyObject.name);
