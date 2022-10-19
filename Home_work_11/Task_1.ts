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

// setTimeout(() => {
//   requests[0].then((response) => response.json()).then((data) => console.log(data));
// }, 1000);
//
// setTimeout(() => {
//   requests[1].then((response) => response.json()).then((data) => console.log(data));
// }, 2000);
//
// setTimeout(() => {
//   requests[2].then((response) => response.json()).then((data) => console.log(data));
// }, 3000);
//
// setTimeout(() => {
//   requests[3].then((response) => response.json()).then((data) => console.log(data));
// }, 4000);

// const p = new Promise((resolve) =>
//   setTimeout(() => {
//     requests[0].then((response) => response.json());
//     resolve(requests[0]);
//   }, 1000),
// );
//
// p.then((res) => console.log(res));

// requests[0]
//   .then((response) => response.json())
//   .then(
//     () =>
//       new Promise((resolve) =>
//         setTimeout(() => {
//           resolve(requests[0]);
//         }, 1000),
//       ),
//   );
// requests[0].then((res) => console.log(res));

// requests[0] = new Promise((resolve) =>
//     setTimeout(() => {
//         resolve(requests[0]);
//     }, 1000),
// );
//
// requests[0].then((res) => console.log(res));

// for (const iter in requests) {
//   fetch(iter).then(
//     () =>
//       new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(requests[iter]);
//         }, 1000);
//       }),
//   );
// }

// async function f1() {
//   const response = await fetch(URL);
//   return await response.json();
// }
// f1().then((res) => console.log(res));
