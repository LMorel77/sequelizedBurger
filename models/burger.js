// Sequelized 'Burger' model
module.exports = function (sequelize, DataTypes) {

    var Burger = sequelize.define("Burger", {

        burger_name: 
        {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        devoured: 
        {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });

    return Burger;

};


// ORM for 'Burger' model (Deprecated...now Sequelized up above)
// var orm = require('../config/orm.js');

// var burger = {
//     // Function to show all burgers
//     all: function (callBack) {
//         orm.selectAll("burgers", function (response) {
//             callBack(response);
//         });
//     },
//     // Function to create new burger
//     create: function (newRecord, callBack) {
//         orm.insertOne("burgers", newRecord, function (response) {
//             callBack(response);
//         });
//     },
//     // Function to update burger
//     update: function (condition, callBack) {
//         orm.updateOne("burgers", condition, function (response) {
//             callBack(response);
//         });
//     }
// }
// // Exporting burger model
// module.exports = burger;