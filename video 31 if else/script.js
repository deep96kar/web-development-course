// javascript if and else statement

console.log("javascript conditional")
let age = 1;
// let grace = 2; 

// age += grace
// console.log(age)


// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)


// if ((age + grace) > 18) {
//     console.log("you can drive");
// }
if (age == 18) {
    console.log("you can drive");
}

else if (age == 0) {
    console.log("are you kidding");
}
else if (age == 1) {
    console.log("are you again kidding");
}

else {
    console.log("you cannot drive");
}


let a = 16;
let b = 10;
console.log(c = a > b ? (a - b) : (b - a));

        //   or


if (a > b) {
    let c = a - b;
}
else {
    let c = b - a;
}

console.log(c)
