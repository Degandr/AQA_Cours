function check(word1: string) {
  let flag = true;
  const word2 = word1.split("").reverse().join("");
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      flag = false;
      break;
    }
  }
  return flag;
}
const res111 = check("123321");
console.log(res111);
