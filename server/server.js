const PORT = 3000;
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');;
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  
  app.use(cookieParser());
  app.use(express.json());


app.listen(PORT, ()=> console.log(`listing on ${PORT}`))
module.exports = app;