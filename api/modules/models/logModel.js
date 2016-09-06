"use strict";

/***
 * @author Eduardo Hattori
 * @date 04/09/16.
 */

module.exports = function(app){

    var sequelize = (app.modules.infra.mysqlInfra).getConnection();
    var DataType = require('sequelize');

    var log = sequelize.define('log', {

        log_id : {
            type          : DataType.INTEGER,
            autoIncrement : true,
            primaryKey    : true
        }
    });

    return log;
};
