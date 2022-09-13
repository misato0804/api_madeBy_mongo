const Products = require('../models/my_product_model')

const errorFunc = (err, res) => {
  res.status(404).json({
    status: '404 Not Found',
    message: err.message
  })
}

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json({
      status: 'success',
      data: {
        products
      }
    })
  } catch (err) {
    errorFunc(err, res)
  }
}

exports.getProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id)
    res.status(200).json({
      status: "success",
      data: {
        product
      }
    })
  } catch (err) {
    errorFunc(err, res)
  }
}

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Products.create(req.body)
    console.log(newProduct)
    res.status(200).json({
      status: 'success',
      data: {
        newProduct
      }
    })
  } catch(err) {
    errorFunc(err, res)
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const updateProduct = await Products.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true})
    res.status(200).json({
      status: 'success',
      data: {
        updateProduct
      }
    })
  } catch (err) {
    errorFunc(err, res)
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        data: null
      }
    })
  } catch (err) {
    errorFunc(err, res)
  }
}