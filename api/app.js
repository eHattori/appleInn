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

//root@hattori-Vostro-3560:/home/temquarto# export DATABASE=temquartoDB
//root@hattori-Vostro-3560:/home/temquarto# export USERNAME=temquarto
//root@hattori-Vostro-3560:/home/temquarto# export PASSWORD=devtemquarto
//root@hattori-Vostro-3560:/home/temquarto# export HOST=ec2-52-67-46-200.sa-east-1.compute.amazonaws.com
//root@hattori-Vostro-3560:/home/temquarto# export PORT=5432

//Seta Configuração
config.postgres.database = process.env.DATABASE ? process.env.DATABASE : config.postgres.database;
config.postgres.username = process.env.USERNAME ? process.env.USERNAME : config.postgres.username;
config.postgres.password = process.env.PASSWORD ? process.env.PASSWORD : config.postgres.password;
config.postgres.host     = process.env.HOST ? process.env.HOST : config.postgres.host;
config.postgres.port     = process.env.PORT ? process.env.PORT : config.postgres.port;

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