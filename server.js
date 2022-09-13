const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const app = require("./app");

////////////////////////////////////////////
//// CONNECT MONGOOSE
///////////////////////////////////////////
const DATA_BASE = process.env.DATA_BASE_URL.replace("<password>", process.env.DATA_BASE_PASSWORD);

mongoose.connect(DATA_BASE, {
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

app.listen(process.env.PORT, () => {
  console.log("working");
})