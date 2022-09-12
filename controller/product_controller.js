const Products = require('../models/my_product_model')

exports.getAllProducts = async (req, res) => {
  try {
    console.log(Products.find())
    res.send("HELLO")

  } catch (err) {
    res.status(404).json({
      status: '404 Not Found',
      message: err.message
    })
  }
}