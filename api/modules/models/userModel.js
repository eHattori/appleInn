"use strict";

/***
 * @author Eduardo Hattori
 * @date 04/09/16.
 */

module.exports = function(app){

    var sequelize = (app.modules.infra.mysqlInfra).getConnection();
    var DataType  = require('sequelize');

    var user = sequelize.define('user', {

        user_id : {
            type          : DataType.INTEGER,
            autoIncrement : true,
            primaryKey    : true
        },
        username : DataType.STRING(16),
        password : DataType.STRING(32),
        email    : DataType.STRING(256),
        type     : DataType.STRING(1)
    });

    return user;
};
