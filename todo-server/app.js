const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const todos = [
  {
    title: "React Hooks 익히기",
    id: 1,
    status: "",
  },
  {
    title: "GraphQL 익히기",
    id: 2,
    status: ""
  },
  {
    title: "Apollo 익히기",
    id: 3,
    status: ""
  }
];

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/todos", (req, res) => res.json(todos));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));