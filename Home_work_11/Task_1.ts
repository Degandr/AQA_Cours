import fetch from "node-fetch";

const ids = ["15", "23", "7", "3"];

const requests = ids.map((id) => fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`));

//Promise chaining

for (const iter in requests) {
  setTimeout(() => {
    requests[iter].then((response) => response.json()).then((data) => console.log(data));
  }, 1000);
}

//Async / await

async function f1() {
  const resp = await requests[0];
  return await resp.json();
}
setTimeout(() => {
  f1().then((data) => console.log(data));
}, 1000);

async function f2() {
  const resp = await requests[1];
  return await resp.json();
}
setTimeout(() => {
  f2().then((data) => console.log(data));
}, 2000);

async function f3() {
  const resp = await requests[2];
  return await resp.json();
}
setTimeout(() => {
  f3().then((data) => console.log(data));
}, 3000);

async function f4() {
  const resp = await requests[3];
  return await resp.json();
}
setTimeout(() => {
  f4().then((data) => console.log(data));
}, 4000);
