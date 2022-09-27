function fooboo(bol: boolean, foo: any, boo: any) {
  if (bol) {
    foo();
  } else {
    boo();
  }
}

function foo() {
  console.log("Function foo is running");
}

function boo() {
  console.log("Function boo is running");
}

fooboo(true, foo, boo);
