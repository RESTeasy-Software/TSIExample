import express from "express";
import bodyParser from "body-parser";

// Express setup
const app = express();
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

/**
 * DB Connection
 */
import mongoose from "mongoose";
import { AddTodoItem, GetAllTodos } from "./Api/TodoController";
import { ITodoItem } from "./Model/TodoItem";
mongoose.connect("mongodb://localhost/tsexample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * Routes
 */
app.get("/", async (req, res) => {
  try {
    let result = await GetAllTodos();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  const newItem = req.body as ITodoItem;
  const result = await AddTodoItem(
    newItem.Title,
    newItem.Description,
    newItem.Priority
  );

  res.json(result);
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
