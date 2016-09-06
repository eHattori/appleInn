"use strict";

/***
 * Gerencia a manutenção do
 * client de conexão com o
 * ElasticSearch
 *
 * @author Eduardo Hattori
 * @date 10/08/16.
 */

module.exports = function(app){


    var config        = require("config");
    var elasticsearch = require("elasticsearch");

    var elasticinfra = {

        /***
         * Retorna um client de conexão
         *
         * @returns {*}
         */
        getConnection : function(){
            return new elasticsearch.Client({
                host : config.elasticsearch.host,
                log  : config.elasticsearch.log,
                deadTimeout: 100000,
                maxRetries: 6
            });
        }
    };

    return elasticinfra;
};
