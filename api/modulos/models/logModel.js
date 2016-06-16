'use strict';
/**
 * [exports description]
 * @author Eduardo Hattori
 * @date   2016-06-12
 * @param  {[type]}   app [description]
 * @return {[type]}       [description]
 */
module.exports = function(app){

    var sequelize = (app.modulos.infra.postgresInfra).getConnection();
    var DataType  = require('sequelize');


    var log = sequelize.define('tb_cad_log_app', {
        name : DataType.STRING,
        hostname : DataType.STRING,
        pid : DataType.INTEGER,
        level : DataType.INTEGER,
        msg : DataType.STRING,
        time : DataType.DATE,
        v : DataType.INTEGER
    });

    return log;
};