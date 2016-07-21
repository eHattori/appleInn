"use strict";

/***
 * @author Eduardo Hattori
 * @date 11/07/16.
 */
describe("Testa conexão com o ambiente", function(){

    var app;
    var should;
    var sequelize;

    before(function(done){

        app       = require('../app');
        should    = require('should');
        sequelize = (app.modulos.infra.postgresInfra).getConnection();
        done();

    });

    it("Deve retonar uma conexão de acordo com o ambiente", function(done){
        sequelize.query("SELECT 1", [])
            .then(function(data) {
                done();
            }).catch(function(err){
                done(err);
            });
    });

});
