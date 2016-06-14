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


    var user = sequelize.define('tb_cad_usuario_app', {
        cod_uapp : {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username : DataType.STRING,
        password : DataType.STRING
    });

    return user;
};