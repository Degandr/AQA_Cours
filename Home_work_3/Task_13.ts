const qwst = "wostok";

if (qwst == "ug" || qwst == "sever" || qwst == "thapad" || qwst == "wostok") {
  console.log(`You chose ${qwst} - great!`);
} else {
  console.log("Once again pls");
}

switch (qwst) {
  case "ug":
    console.log("на юг пойдешь счастье найдешь");
    break;
  case "sever":
    console.log("на север пойдешь много денег найдешь");
    break;
  case "thapad":
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case "wostok":
    console.log(" на восток пойдешь разработчиком станешь");
    break;
}
