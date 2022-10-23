export {};

import fetch from "node-fetch";

const requests1 = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
  const resp = await fetch(requests1);
  return await resp.json();
}
getTodos().then((data) => console.log(data));

async function printTodos() {
  const resp2 = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result: any = await resp2.json();
  for (let i = 0; i < result.length; i++) {
    delete result[i].userId;
    delete result[i].completed;
  }
  console.log(result);
}
printTodos();
