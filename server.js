// Importing 'body-parser' and 'express' node packages
var bodyParser = require('body-parser');
var express = require('express');

var app = express();
var db = require("./models");

// Serving 'public' directory
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded; application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up Handlebars
var expHbs = require('express-handlebars');
app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing express server routes
var routes = require("./controllers/burgers_controllers.js");
app.use('/', routes);

// Starting up express server
var PORT = process.env.PORT || 8080;

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening at localhost:" + PORT);
    });
});