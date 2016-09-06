"use strict";

/***
 * @author Eduardo Hattori
 * @date 04/09/16.
 */


module.exports = function(app){

    var bunyan      = require('bunyan');
    var MySqlStream = require('bunyan-mysql');
    var config      = require('config');

    var msqlStream = new MySqlStream({
        host     : config.mysql.host,
        user     : config.mysql.username,
        password : config.mysql.password,
        database : config.mysql.database,
        port     : config.mysql.port
    });
    msqlStream.on('error', function (err) {
        console.log('MySQL Stream Error:', err.stack);
    });


    var log = bunyan.createLogger({
        name: "Multiverse",
        streams: [
            { stream: msqlStream , level : 'trace'}
        ]
    });

    var LogHelper = {

        info: function(descricao)
        {
            log.info(JSON.stringify(descricao));
        },
        debug: function(descricao)
        {
            log.debug(JSON.stringify(descricao));
        },
        error: function(descricao,erro)
        {
            log.error(descricao);
        },
        warn: function(descricao,erro)
        {
            log.warn(JSON.stringify(descricao));
        }
    };

    return LogHelper;






};

