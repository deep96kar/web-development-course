async function sleep() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(Math.floor(Math.random() * 10));
    }, 1000);
  });
}

//ei vabe oo await kora jay

// async function run() {
//   let a = await sleep();
//   console.log(a);
//   let b = await sleep();
//   console.log(b);
// }
// run()

//ar ei function ta IIFE->"Immediately Invoked Function Expression" sudhu ekbar run hobe
//sleep pe jemon async lagate hobe tobei ekta async function er vitore await kora jabe kintu
//ei ta te sleep ta function thakbe sudhu main function er async add hobe ar ota tei await hobe
//ei tai holo IIFE function
// (async function main() {
//   let a = await sleep();
//   console.log(a);
//   let b = await sleep();
//   console.log(b);

//   let [x, y, ...rest] = [1, 2, 3, 4, 5, 6, 7];
//   console.log(x, y, rest);

//   let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//   };

//   let { a, b } = obj;
//   console.log(a, b);
// })();

function sum(a, b, c) {
  return a + b + c;
}

let arr = [1, 4, 5];
//same
console.log(arr[0] + arr[1] + arr[2]);
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr));
