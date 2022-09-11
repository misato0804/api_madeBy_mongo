const express = require("express");
const itemRouter = express.Router();

itemRouter
  .route("/")
  .get((req, res) => {
    res.send("HELLO")
  })

itemRouter
  .route("/:id")
  .get()


module.exports = itemRouter;