let a = prompt("enter first number");

let b = prompt("enter second numnber");

let x = 9;

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("sorry this is not allowed"); //new error dichi
}
let sum = parseInt(a) + eval(b); //'parseInt' ar 'eval tu toy string theke int convert kore

// try {
//   console.log("The sum is", sum * x);
// } catch (error) {
//   console.log("error chole eelo");
// }

function main() {
  try {
    console.log("The sum is", sum * x);
    return true;
  } catch (error) {
    console.log("error chole eelo");
    return false;
  } 
//   finally { 
    console.log("files are being closed");
//   }
}

let c = main();



// video 79 tutorial