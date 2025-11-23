import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    // title: 1, // title ta na dile oi todo te defult "hey" kora ache
    desc: "this todo",
    isDone: false,
    days: Math.floor(Math.random() * 45 + 5 * Math.random()),
  });
  todo.save();
  res.send("Hello World!");
});

app.get("/about", async (req, res) => {
  const todo = await Todo.findOne({});
  res.json({ title: todo.title, desc: todo.desc });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
