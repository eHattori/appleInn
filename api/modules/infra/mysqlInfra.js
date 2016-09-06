"use strict";

/***
 * Essa classe gerencia a Infraestrutura
 * da conexão com o mySql
 *
 * @author Eduardo Hattori
 * @date 24/08/16.
 */
module.exports = function(app){

    var config = require('config');
    var Sequelize = require('sequelize');

    var _sequelize;

    var mysqlInfra = {

        /**
         * Método que retorna uma conexão
         * do mysql
         */
        getConnection : function(){

            if(!_sequelize){

                _sequelize = new Sequelize(
                    config.mysql.database,
                    config.mysql.username,
                    config.mysql.password,
                    {
                        host: config.mysql.host,
                        port: config.mysql.port,
                        dialect : 'mysql',
                        logging: false,
                        define : {
                            freezeTableName : true,
                            timestamps      : false
                        },
                        pool : {
                            max : 10,
                            min : 0,
                            idle : 10000
                        }
                    }
                );
            }

            return _sequelize;
        }

    };

    return mysqlInfra;
};
