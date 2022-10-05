function check(word1: string) {
  const word2 = word1.split("").reverse().join("");
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) {
      return true;
    } else console.log(false);
  }
}

const res111 = check("123321");
console.log(res111);
