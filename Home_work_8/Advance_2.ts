const newArray3: any = [];
const newArray4: any = [];

function transformer(str2: string) {
  const strSplit2 = str2.toLowerCase().split("");
  for (let i = 0; i < str2.length; i++) {
    newArray3.push(strSplit2[i].repeat(i + 1));
    newArray4.push(strSplit2[i].toUpperCase() + newArray3[i].slice(1));
  }
  return newArray4.join("-");
}

const res444 = transformer("RqaEzty");
console.log(res444);
