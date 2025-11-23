const express = require("express");
const app = express();
const port = 3000;
const fs=require("fs")

app.use(express.static("public"));

//middleware 1
app.use((req, res, next) => {
//   console.log("m1");
// fs.writeFileSync("logs.txt",`${Date.now()} is a ${req.method}/n`)
fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method } `)
  console.log(`${Date.now()} is a ${req.method}`);
  req.deep="i am a deep"
//   res.send("hacked by Middleware 1")
  next();
});

//middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("hello about "+req.deep);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
