const path = require("path");
const express = require("express");
//handlers
const { updateLibrary } = require("./handlers/updateLibrary");

const PORT = 8000;

var app = express();

app.use(express.json());

app.get("/library", updateLibrary);

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
