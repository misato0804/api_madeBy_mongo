const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [ true , "A product name must be provided"],
    unique: true,
    trim: true
  },
  price: {
    type: Number,
    required: [ true , "A product price must be provided"],
  },
  image: {
    type: String,
    required: [ true , "A product image must be provided"],
  },
  url: {
    type: String,
    required: [ true , "A product image must be provided"],
  }
})

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;