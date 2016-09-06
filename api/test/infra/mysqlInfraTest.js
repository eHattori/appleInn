"use strict";

/***
 * @author Eduardo Hattori
 * @date 24/08/16.
 */

describe("Testa as conexões com o mySql", function(){

    var app;
    var mysqlInfra;

    before(function(done){

        app = require('../../app');

        mysqlInfra = app.modules.infra.mysqlInfra;
        done();
    });

    it("Testa a conexão com o Mysql", function(done){

        mysqlInfra.getConnection().authenticate().then(function(err){
           if(err) done(err);
            done();
        });
    });
});