var db = require("../models");

// Routes...
module.exports = function (app) {

    // Get Route
    app.get('/', function (request, response) {

        db.Burger.findAll({}).then(function (data) {

            var hbsObject = { burgers: data };
            response.render("index", hbsObject);

        });

    });

    // Post Route
    app.post("/api/burgers", function (request, response) {

        db.Burger.create({ burger_name: request.body.name }).then(function (data) {

            response.json({ id: data.insertId });

        });

    });

    // Put Route
    app.put("/api/burgers/:id", function (request, response) {

        db.Burger.update(
            {
                devoured: true
            },
            {
                where: { id: request.params.id }
            }
        ).then(function (result) {

            if (result.changedRows === 0) return response.status(404).end();
            console.log("\n >> app.put(...) succeeded!\n");
            response.status(200).end();

        });

    });

};

// Express Router (Deprecated...Sequelized up above)
// var burger = require('../models/burger.js');
// var express = require('express');

// // Creating server router
// var router = express.Router();

// // Get Route
// router.get('/', function (request, response) {
//     burger.all(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log("\n >> router.get(...) 'data':\n\n", data);
//         response.render("index", hbsObject);
//     });
// });
// // Post Route
// router.post('/api/burgers', function (request, response) {
//     burger.create({ burger_name: request.body.name }, function (result) {
//         // Send back ID of new burger
//         console.log("\n >> router.post(...) succeeded!\n");
//         response.json({ id: result.insertId });
//     });
// });

// // Put Route
// router.put('/api/burgers/:id', function (request, response) {
//     burger.update(
//         { id: request.params.id }, function (result) {
//             if (result.changedRows === 0) return response.status(404).end();
//             console.log("\n >> router.put(...) succeeded!\n");
//             response.status(200).end();
//         });
// });
// // Exporting routes
// module.exports = router;