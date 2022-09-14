const dotenv = require("dotenv");
dotenv.config({path: "./config.env"})
const express = require("express");
const app = express();
const morgan = require("morgan");
const itemRouter = require("./routes/itemRoutes");
const globalErrorHandler = require('./controller/error_controller')
const AppError = require("./util/appError");


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

////////////////////////////////////////////
//// ERROR CATCH
///////////////////////////////////////////
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`));
});

app.use(globalErrorHandler)

module.exports = app;


