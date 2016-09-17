"use strict";

/***
 * @author Eduardo Hattori
 * @date 16/09/16.
 */

describe("Testa o helper de criptografia", function(){

    var app ;
    var should;
    var helper;

    before(function(done){

        process.env.NODE_ENV = "test";

        app     = require('../../app');
        should  = require('should');
        helper  = app.modules.helpers.cryptoHelper;
        done();
    });


    it("Deveria retornar uma messagem criptografada",function(done){

        var text = "Vai na fé";
        helper.encrypt(text).should.be.String();
        done();
    });

    it("Deveria descriptografar uma mensagem", function(done){

        var text  = "Vai na fé";
        var frase = helper.encrypt(text);
        (helper.decrypt(frase) == text).should.be.true();
        done();

    });

});
