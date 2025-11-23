/*
Create a business name generator by combvining list of adjectives and shop name and another word
Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub

*/

let rand = Math.random()
let first, second, third;
// 00..33 0.66 1

//lets generate the first word
if (rand < 0.33) {
    first = "crazy"
}

else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing"
}

else {
    first = "Fire"
}


rand = Math.random();
//lets generate the second word
if (rand < 0.33) {
    second = "Engine"
}

else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods"
}

else {
    second = "Garments"
}


rand = Math.random();
//lets generate the third word
if (rand < 0.33) {
    third = "Bros"
}

else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited"
}

else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)


// let Adj = prompt("Choose one word Crazy, Amazing and Fire");
// let Adj1 = "Crazy";
// let Adj2 = "Amazing";
// let Adj3 = "Fire";

// let shopName1 = "Engine";
// let shopName2 = "Foods";
// let shopName3 = "Garments";

// let anotherWord1 = "Bros";
// let anotherWord2 = "Limited";
// let anotherWord3 = "Hub";

// if (Adj === Adj1) {
//     console.log(Adj1, shopName2, anotherWord2);
// }
// else if (Adj === Adj2) {
//     console.log(Adj2, shopName3, anotherWord3);
// }
// else if (Adj === Adj3) {
//     console.log(Adj3, shopName1, anotherWord1);
// }
// else {
//     console.log("Your name is not difine");
// }

//   Other way

/*
console.log(Adj1.concat(shopName2, anotherWord2));
console.log(Adj2.concat(shopName3, anotherWord3));
console.log(Adj3.concat(shopName1, anotherWord1));
*/



