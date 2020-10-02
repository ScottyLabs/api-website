const express = require("express");
const config = require("./config.json");
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');

app.use(cors());

app.get("/api/pages", (req, res) => {
  let msg = {
    development: config.development,
    data: config.pages,
  };
  res.json(msg);
});

app.get("/api/docs", (req, res) => {
  let msg = {
    development: config.development,
    data: config.docs,
  };
  res.json(msg);
});

app.get("/api", (req, res) => {
  res.json("I am the backend!");
});

app.get("/", (req, res) => {
  res.json("I am the backend!");
});

app.listen(PORT, () => {
  console.log(`App backend listening on port ${PORT}`);
});
