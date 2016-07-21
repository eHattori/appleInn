"use strict";

/***
 * @author Eduardo Hattori
 * @date 14/07/16
 */

describe("Testa as funcionalidades do Log", function(){

    var app;
    var should;
    var env;
    var log;
    var sequelize;

    before(function(done){

        env = process.env.NODE_ENV;
        process.env.NODE_ENV = "test";

        app = require('../app');
        should = require('should');
        log = app.modulos.helpers.logHelper;
        sequelize = (app.modulos.infra.postgresInfra).getConnection();

        done();
    });


    it("Deve inserir um log", function(done){

        var msg =  "TESTE DE INSERT DE LOG";
        log.info(msg);
        done();
    });
});
