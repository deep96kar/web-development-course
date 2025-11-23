const express = require("express");
const blog = require("./routes/blog"); //5
const shop = require("./routes/shop"); //5
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog); //5
app.use("/shop", shop); //5

app.get("/", (req, res) => {
  console.log("hey this is a get request");
  res.send("Hello World!");
});

//1. this is Handling post & other requests
// app.post("/", (req, res) => {
//   console.log("hey this is a post request");
//   res.send("Hello World post!");
// });
// app.put("/", (req, res) => {
//   console.log("hey this is a put request");
//   res.send("Hello World put!");
// });
// app.delete("/", (req, res) => {
//   console.log("hey this is a delete request");
//   res.send("Hello World delete!");
// });

//2. this is Chaining of request
app
  .post("/", (req, res) => {
    console.log("hey this is a post request");
    res.send("Hello World post!");
  })
  .put("/", (req, res) => {
    console.log("hey this is a put request");
    res.send("Hello World put!");
  })
  .delete("/", (req, res) => {
    console.log("hey this is a delete request");
    res.send("Hello World delete!");
  });

//3. Serving HTML files
app.get("/index", (req, res) => {
  console.log("hey it's index");
  // res.send("hello world index!");
  res.sendFile("template/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["deep", "karmakar"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
