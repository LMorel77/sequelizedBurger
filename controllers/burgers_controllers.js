// Requiring our models (excluding "../models/index.js")
var db = require("../models");

// Requiring Sequelize for query ordering in 'get' route
var Sequelize = require("sequelize");

// Routes...
module.exports = function (app) {

    // Get Route
    app.get('/', function (request, response) {

        db.Burger.findAll(

            { order: Sequelize.col('burger_name') }

        ).then(function (data) {

            var hbsObject = { burgers: data };
            response.render("index", hbsObject);

        });

    });

    // Post Route
    app.post("/api/burgers", function (request, response) {

        db.Burger.create(

            { burger_name: request.body.name }

        ).then(function (data) {

            response.json({ id: data.insertId });

        });

    });

    // Put Route
    app.put("/api/burgers/:id", function (request, response) {

        db.Burger.update(

            { devoured: true },
            { where: { id: request.params.id } }

        ).then(function (result) {

            if (result.changedRows === 0) return response.status(404).end();
            console.log("\n >> app.put(...) succeeded!\n");
            response.status(200).end();

        });

    });

    // Delete Route
    app.delete("/api/burgers", function (request, response) {

        db.Burger.destroy(

            { where: { devoured: true } }

        ).then(function () {

            response.end();

        });

    });

};