function removeVow(str: string) {
  const strSplit = str.split("");
  for (let i = 0; i < str.length; i++) {
    const toLower = str[i].toLowerCase();
    if (toLower === "a" || toLower === "e" || toLower === "i" || toLower === "o" || toLower === "u") {
      strSplit[i] = "";
    }
  }
  return strSplit.join("");
}

const res333 = removeVow("Hello");
console.log(res333);
