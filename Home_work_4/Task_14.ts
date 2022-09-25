const date: Date = new Date();

//first method

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

//second method

console.log("Текущая дата:", date.toLocaleDateString(), ".", "Текущее время", date.toLocaleTimeString());
