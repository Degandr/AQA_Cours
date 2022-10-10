const myObj111: any = {
  name: "Петр",
  surname: "Петров",
  age: "20 лет",
};

const name1 = myObj111.name ?? "Аноном";
const surname = myObj111.surname ?? "Анонимович";
const age = myObj111.age ?? "? лет";

console.log("name1 ===", `${name1}`, "surname ===", `${surname}`, "age ===", `${age}`);

const myObj222: { name: string; surname: string; age: string } = {
  name: "",
  surname: "",
  age: "",
};

myObj222.name = myObj111.name ?? "Аноном";
myObj222.surname = myObj111.surname ?? "Анонимович";
myObj222.age = myObj111.age ?? "? лет";

console.log(myObj222);
