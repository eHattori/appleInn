"use strict";

/***
 * @author Eduardo Hattori
 * @date 11/07/16.
 */
describe("Testa conexão com o ambiente", function(){

    var app;
    var should;
    var postInfra;

    before(function(done){

        app       = require('../app');
        should    = require('should');
        postInfra = (app.modulos.infra.postgresInfra).getConnection();
        done();

    });

    it("Deve retonar uma conexão de acordo com o ambiente", function(done){
        postInfra.query(
            'SELECT 1', null,
            { raw: true }, ['active']
            )
            .success(function(projects) {
                console.log(projects)
            });
    });

});
