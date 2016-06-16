'use strict';
/**
 * [Responsavel pela geração de log da aplicação]
 * @author Eduardo Hattori
 * @data 2016-06-15
 */

module.exports = function(app) {

    var bunyan   = require('bunyan');

    var logDomain = app.modulos.domains.logDomain;

    var LogEntryStream = {
        write : function(rec){
            logDomain.insereLog(rec, function(err, data){
                console.log(err, data);
            });
        }
    };


    var log = bunyan.createLogger({
        name: 'log-carreteiro',
        streams: [
            {
                stream: LogEntryStream
            }
        ]
    });

    var LogHelper = {

        info: function(descricao)
        {
            log.info(descricao);
        },
        debug: function(descricao)
        {
            log.debug(descricao);
        },
        error: function(descricao,erro)
        {
            log.error(descricao, erro);
        },
        warn: function(descricao,erro)
        {
            log.warn(descricao, erro);
        }
    };

    return LogHelper;
};