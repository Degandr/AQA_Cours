const student: any = {
  name: "John",
  age: 19,
  isHappy: true,
};

for (const studentKey in student) {
  console.log("Keys are:", studentKey);
}

for (const studentKey in student) {
  console.log("Values are:", student[studentKey]);
}
