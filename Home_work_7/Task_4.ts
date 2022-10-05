const students1 = ["Polina", "Dasha", "Masha"];

//before lecture

const lastElements2 = students1.length - 1;
delete students1[lastElements2];
console.log(students1);

students1[lastElements2] = "Borya";
console.log(students1);

delete students1[0];
console.log(students1);

students1[0] = "Andrey";
console.log(students1);

//after lecture :D

students1.pop();
console.log(students1);

students1.push("Borya");
console.log(students1);

students1.shift();
console.log(students1);

students1.unshift("Andrey");
console.log(students1);
