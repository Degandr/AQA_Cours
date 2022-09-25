const date: Date = new Date();

//first attempt

console.log(
  "текущая дата: ",
  date.getMonth(),
  "/",
  date.getFullYear(),
  "/",
  date.getDate(),
  ". Текущее время ",
  date.getHours(),
  ":",
  date.getMinutes(),
  ":",
  date.getSeconds(),
  ".",
);

//second attempt

console.log("Текущая дата:", date.toLocaleDateString(), ".", "Текущее время", date.toLocaleTimeString());
