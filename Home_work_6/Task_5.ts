const salaries: any = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey2: 664,
  alexandra: 199,
};

let numberOfProperties = 0;
let fullSalaries = 0;

for (const keys in salaries) {
  numberOfProperties++;
  fullSalaries += salaries[keys];
}

const averageSalaries: number = fullSalaries / numberOfProperties;

console.log("Average salaries for all employees :", averageSalaries);
