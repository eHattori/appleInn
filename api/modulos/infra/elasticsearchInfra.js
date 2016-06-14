"use strict";
/***
 * Classe que realiza a conecao com servidor do Elastic Search
 *
 * @author Eduardo Hattori
 * @date 14/06/16.
 */
module.exports = function(app){

    var config        = require('config3');
    var elasticsearch = require('elasticsearch');

    var elasticInfra = {

        getConnection : function(){

            return new elasticsearch.Client({
                host : config.elasticsearch.host,
                log  : config.elasticsearch.log
            });

        }
    };

    return elasticInfra;

};