const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

const word = "member";

//function declaration

const res123 = users.map(function (eachValue: string, index: number) {
  return word + ` ${index + 1}` + ": " + eachValue;
});
console.log(res123);

//arrow function
const res1234 = users.map((eachValue: string, index: number) => {
  return word + ` ${index + 1}` + ": " + eachValue;
});
console.log(res1234);
