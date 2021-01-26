const express = require("express");
const mongoose = require("mongo`");

const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log(`server listen port .... ${port}`);
});
