"use strict";

/***
 * @author Eduardo Hattori
 * @date 10/08/16.
 */

describe("Testas as informações de Infra do Log", function(){

    var app;
    var should;
    var logInfra;
    var env;

    this.timeout(6000);

    before(function(done){

        env = process.env.NODE_ENV;
        process.env.NODE_ENV = "test";

        app    = require('../../app');
        should = require('should');
        logInfra = app.modules.infra.logInfra;

        done();
    });


    it("Deveria inserir logs de diferentes tipos", function(done){

        logInfra.info("info" );
        logInfra.debug("debug" );
        logInfra.error("error" );
        logInfra.warn("warn" );

        done();
    });

    after(function(done){
        process.env.NODE_ENV = env;
        done();
    });


});