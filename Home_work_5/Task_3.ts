function trimString(str: string, from: number, to: number) {
  return str.slice(from, to);
}

console.log(trimString("My test string", 1, 7));
