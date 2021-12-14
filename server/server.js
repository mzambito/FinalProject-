const path = require("path");
const express = require("express");

const PORT = 8000;

var app = express();

app.use(express.json());

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
