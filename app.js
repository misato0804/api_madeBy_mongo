const dotenv = require("dotenv");
dotenv.config({path: "./config.env"})
const express = require("express");
const app = express();
const morgan = require("morgan");
const itemRouter = require("./routes/itemRoutes");

////////////////////////////////////////////
//// MIDDLEWARE
///////////////////////////////////////////
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("./public"));

////////////////////////////////////////////
//// ROOT
///////////////////////////////////////////
app.use("/api/items", itemRouter)

module.exports = app;


