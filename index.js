const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Hello ");
});
