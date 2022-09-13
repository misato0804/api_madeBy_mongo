const express = require("express");
const itemRouter = express.Router();
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controller/product_controller")

itemRouter
  .route("/")
  .get(getAllProducts)
  .post(createProduct)

itemRouter
  .route("/:id")
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)


module.exports = itemRouter;