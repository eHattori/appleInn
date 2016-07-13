"use strict";
/***
 * Classe principal da aplicação
 *
 * @author Eduardo Hattori
 * @date 2016-06-08
 */

var express     = require('express'),
    consign     = require('consign'),
    config      = require('config3'),
    bodyParser  = require('body-parser'),
    compression = require('compression'),
    cors        = require('cors'),
    app         = express();

app.use(compression());
app.use(cors({credentials : true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Seta Configuração
config.postgres.database = process.env.DATABASE;
config.postgres.username = process.env.USERNAME;
config.postgres.password = process.env.PASSWORD;
config.postgres.host     = process.env.HOST;
config.postgres.port     = process.env.PORT;


consign()
    .then('modulos/infra')
    .then('modulos/models')
    .then('modulos/domains')
    .then('modulos/helpers')
    .then('modulos/controllers')
    .then('routes')
    .into(app);

app.listen(config.port, function(){
    console.log("API Apple-Inn working in port: " + config.port);
});

module.exports = app;