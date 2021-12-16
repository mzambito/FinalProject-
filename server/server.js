const path = require("path");
const express = require("express");
//handlers
const { updateLibrary } = require("./handlers/updateLibrary");
const { addUserInfo } = require("./handlers/addUserInfo");
const { deleteInfo } = require("./handlers/deleteInfo");
const PORT = 8000;

var app = express();

app.use(express.json());

app.post("/library", updateLibrary);
app.post("/users/login", addUserInfo);
app.delete("/delete/:id", deleteInfo);

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
