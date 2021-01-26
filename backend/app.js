const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:p@ssw0rd@cluster0.axtok.mongodb.net/todolist?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected mongodb");
  })
  .catch(error => {
    console.error(error);
  });

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`server listen port .... ${port}`);
});
