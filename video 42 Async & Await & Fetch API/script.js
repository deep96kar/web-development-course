// async function getdata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

async function getdata() {
  //simulate getting data from a server
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  console.log(data);
  return data;
}

async function main() {
  console.log("load modules");

  await getdata();

  console.log("Do something else");

  console.log("load data");

  let data = await getdata();

  console.log(data);

  console.log("process data ");

  console.log("task 2");
}

main();
