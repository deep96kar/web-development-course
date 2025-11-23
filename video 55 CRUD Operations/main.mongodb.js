//CRUD full from -> Create Read Update Delete

//ei vabe folder create hoi
use("crudDb");
console.log(db);

//ei ta te file create hoi
// db.createCollection("courses");

//ei vabe oi hobe
// db.course.insertOne({ //ei vabe file ar data create hoi
//   name: "Deep karmakar",
//   price: 0,
//   pro: 20,
// });

//ei vabe oi hobe
// db.courses.insertOne({ //ei vabe file ar data create hoi
//   name: "deep karmakar",
//   price: 0,
//   project: 15,
// });



//read

//this is a array from database
// db.students.insertMany([
//   {
//     name: "Deep Kumar",
//     price: 0,
//     project: 17,
//   },
//   {
//     name: "Anita Sharma",
//     price: 5000,
//     project: 12,
//   },
//   {
//     name: "Rahul Das",
//     price: 3000,
//     project: 8,
//   },
//   {
//     name: "Priya Sen",
//     price: 4500,
//     project: 15,
//   },
//   {
//     name: "Sourav Roy",
//     price: 2000,
//     project: 5,
//   },
//   {
//     name: "Meena Verma",
//     price: 0,
//     project: 10,
//   },
//   {
//     name: "Arjun Mehta",
//     price: 2500,
//     project: 7,
//   },
//   {
//     name: "Kiran Pal",
//     price: 6000,
//     project: 13,
//   },
//   {
//     name: "Tania Ghosh",
//     price: 3500,
//     project: 9,
//   },
//   {
//     name: "Vikram Singh",
//     price: 0,
//     project: 6,
//   },
//   {
//     name: "Nisha Paul",
//     price: 1000,
//     project: 11,
//   },
// ]);

let a = db.students.find({ price: 0 });
console.log(a.count());
// console.log(a.toArray());

let b = db.students.findOne({ price: 0 });
// console.log(b);



//update
//first argument ta holo filter er jono mane 0 price er thakle ota 99 hobe.
//eta ekta update kore
db.students.updateOne({price:0},{$set:{price:99}})

//eta sob gulo ke update korbe
db.students.updateMany({price:0},{$set:{price:99}})



//delete
db.students.deleteOne({price:99})
db.students.deleteMany({price:2500})
