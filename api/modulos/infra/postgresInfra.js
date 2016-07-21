"use strict";

/***
 * Gerencia a conexao com o postgre
 *
 * @author Eduardo Hattori
 * @date 09/06/16.
 */

module.exports = function(app){

    var config    = require('config3');
    var Sequelize = require('sequelize');

    var _sequilize;

    var connect = {
        getConnection : function(){

            try {

                if(!_sequilize){

                    _sequilize = new Sequelize(
                        config.postgres.database,
                        config.postgres.username,
                        config.postgres.password,
                        {
                            host   : config.postgres.host,
                            port   : config.postgres.port,
                            ssl    : true,
                            dialect: 'postgres',
                            define : {
                                freezeTableName: true,
                                timestamps: false
                            },
                            pool   : {
                                max : 5,
                                min : 0,
                                idle: 10000
                            }
                        }
                    );
                }

                return _sequilize;

            } catch(e){
                throw e;
            }
        }
    };

    return connect;
}
