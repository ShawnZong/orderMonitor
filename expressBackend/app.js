var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var compression = require("compression");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var requestRouter = require("./routes/requests");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
// app.use(helmet());
app.use(express.static(path.join(__dirname, "build")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/requests", requestRouter);

module.exports = app;
