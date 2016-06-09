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

consign()
    .then('modulos/domains')
    .then('modulos/helpers')
    .then('modulos/infra')
    .then('modulos/models')
    .then('modulos/controllers')
    .then('routes')
    .into(app);

app.listen(config.port, function(){
    console.log("API Apple-Inn working in port: " + config.port);
});

module.exports = app;





