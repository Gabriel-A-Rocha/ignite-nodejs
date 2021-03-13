const { json } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

const port = 3333;
app.listen(port, () => console.log(`Server running at port ${port}`));

app.get("/courses", (req, res) =>
  res.json(["course 1", "course 2", "course 3"])
);

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  const { token } = req.query;

  return res.json({ id, token });
});

app.post("/courses", (req, res) => {
  const obj = req.body;
  console.log("🚀 ~ file: index.js ~ line 21 ~ app.post ~ obj", obj);

  return res.json(obj);
});
