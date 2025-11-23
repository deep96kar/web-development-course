const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
app.use(express.static("public"));

//app.get or post or put or delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World2");
});
app.get("/about", (req, res) => {
  res.send("About us");
});
app.get("/contact", (req, res) => {
  res.send("Contact me");
});

app.get("/blog", (req, res) => {
  res.send("hello blog");
});

app.get("/blog/:slug/:second/", (req, res) => {
  //easy way
  //logic to fetch {slug} from the db
  console.log(req.params);
  res.send(`hello ${req.params.slug} and ${req.params.second}`);
});

app.listen(port, () => {
  // console.log(`Example app listening on port http://${hostname}:${port}/`)
  console.log(`Example app listening on port ${port}`);
});
