const Products = require('../models/my_product_model')

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    console.log(req.query)
    res.status(200).json({
      status: 'success',
      data: {
        products
      }
    })
  } catch (err) {
    res.status(404).json({
      status: '404 Not Found',
      message: err.message
    })
  }
}