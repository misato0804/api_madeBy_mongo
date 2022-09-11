const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const app = require("./app");
const mongoose = require("mongoose");


app.listen(process.env.PORT, () => {
  console.log();
})