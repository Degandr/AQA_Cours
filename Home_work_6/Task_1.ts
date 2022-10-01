interface obj {
  city?: string;
  hobby?: string;
}

const aboutMySelf: obj = {
  city: "Minsk",
  hobby: "sleeping",
};

delete aboutMySelf.hobby;
delete aboutMySelf["city"];

console.log(aboutMySelf);
