"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//place handlers here
const { getGame } = require("./handlers/getGame");
const { getEmail } = require("./handlers/getEmail");
// const {} = require("./handlers")

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // rest endpoints
  .get("/games", getGame)
  .get("/users?email=Email", getEmail)

  // this is a catch for all endpoints
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
