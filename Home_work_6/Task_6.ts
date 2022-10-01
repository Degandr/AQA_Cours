//registration form:

const usersDataBase: any = {};

const loginInDB = "Check_login";
const passwordInDb = "qwerty123";

usersDataBase["loginInDB"] = loginInDB;
usersDataBase["passwordInDb"] = passwordInDb;

//validation form:

const loginPage: any = {};

const loginOnPage = "Check_login";
const passwordOnPage = "qwerty123";

loginPage["loginOnPage"] = loginOnPage;
loginPage["passwordOnPage"] = passwordOnPage;

const finalObject: any = {
  ...usersDataBase,
  ...loginPage,
};

if (
  finalObject["loginOnPage"] === finalObject["loginInDB"] &&
  finalObject["passwordOnPage"] === finalObject["passwordInDb"]
) {
  console.log("Добро пожалоВать");
} else {
  console.log("Login or Password is wrong. Check it and try again.");
}
