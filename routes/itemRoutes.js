const express = require("express");
const itemRouter = express.Router();
const { getAllProducts } = require("../controller/product_controller")

itemRouter
  .route("/")
  .get(getAllProducts)

itemRouter
  .route("/:id")
  .get()


module.exports = itemRouter;