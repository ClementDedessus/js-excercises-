var express = require("express");
var logger = require("morgan");

var filmRouter = require("./routes/films");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmRouter);

module.exports = app;
