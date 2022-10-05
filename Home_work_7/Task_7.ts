const binary = [0, 0, 0, 0];

//first method

const str12: string = binary.toString();
console.log(str12.split(",").join("1"));

//second method (almost the same)
console.log(binary.join("1"));
