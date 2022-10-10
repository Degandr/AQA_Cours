const isIsogram = "Dermatoglyphics";

const arraySplit4 = new Set(isIsogram.toLowerCase().split(""));

if (isIsogram.length === arraySplit4.size) {
  console.log("It's TRUE");
} else {
  console.log("It's FALSE");
}
