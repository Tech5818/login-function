//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

app.use("/", home)

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

module.exports = app;