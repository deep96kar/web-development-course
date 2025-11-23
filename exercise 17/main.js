//Generate a dummy data in this format in a collection called employes in a db called company.

// {
//     name:"deep",
//     salary:450000,
//     language:"java",
//     city:"rampurhat",
//     isManager:true
// }

//Generate 10 sush records when a button called generate data is clicked!
//Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection.

const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Company");
const Employee = require("./models/Employee");
const app = express();
const port = 3000;
app.set("view engine", "ejs");

const getrandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  //generate random data
  await Employee.deleteMany({});
  let randonNames = ["Deep", "Abhi", "Koushik", "Rahul"];
  let randonLang = ["Python", "Java", "C++", "Javascipt"];
  let randonCity = ["Rampurhat", "Bolpur", "Suri", "Durgapur"];
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getrandom(randonNames),
      salary: Math.floor(Math.random() * 22000),
      language: getrandom(randonLang),
      city: getrandom(randonCity),
      isManager: Math.random() > 0.5 ? true : false,
    });
    console.log(e);
  }
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
