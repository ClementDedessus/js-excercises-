var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

let corsOptions = {
    origin = "http://localhost:8080/",
};

var indexRouter = require('./routes/index');
var filmsRouter = require('./routes/films');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/films", cors(corsOptions), filmsRouter);
app.use('/films', filmsRouter);

module.exports = app;
