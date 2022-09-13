const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({path: "../config.env"});
const mongoose = require("mongoose")
const Products = require("../models/my_product_model");



////////////////////////////////////////////
//// ADD MY LIST TO MONGO
///////////////////////////////////////////
const DATA_BASE = process.env.DATA_BASE_URL?.replace("<password>", process.env.DATA_BASE_PASSWORD);
console.log(DATA_BASE)

mongoose
  .connect(DATA_BASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(connection => {
    console.log("Connected")
  })
  .catch(err => {
    console.log(err.message)
  })

const my_products = JSON.parse(fs.readFileSync("my-list-sample.json", "utf-8"));

const importData = async () => {
  try{
    await Products.create(my_products)
    console.log("Data added successfully")
  } catch (err) {
    console.log(err)
  }
}

if(process.argv[2] === "--import") {
  importData();
}

