//Packages
var express = require('express');
var morgan = require('morgan');
var bodyParser = require("body-parser");
var ejs = require('ejs');

var app = express();

//Midllewares
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//View Engine
app.set("view engine", "ejs");

//Routes
var mainRoutes = require('./routes/main');
app.use(mainRoutes);

app.get("/", function(req, res){
  res.render('index');
});

app.listen(3000, (err) => {
  if(err){
    return next(err);
  }
  else{
    console.log("App is running");
  }
});
