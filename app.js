const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const handleRequest = require("./services/middleware/handleRequest");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

handleRequest(app);
module.exports = app;
