"use strict";

/***
 * @author Eduardo Hattori
 * @date 12/09/16.
 */

describe("Testa o controlador de usuário", function(){

    var app;
    var should;
    var request;

    before(function(){

        process.env.NODE_ENV = "test";

        app = require('../../app');
        should = require('should');
        request = require('supertest')(app);
    });


    //it("Deve testar request caso mande um objeto inválido para o facebook", function(done){
    //
    //    var objFacebook = {
    //        prs : "nada a ve"
    //    };
    //
    //    request.post('/api/auth/facebook')
    //        .send(objFacebook)
    //        .expect(500)
    //        .end(function(err, res){
    //            if(err) done(err);
    //            res.status.should.be.exactly(500);
    //            done();
    //    });
    //});

    it("Deve testar uma conexão com o facebook", function(done){

        var objFacebook = {
            "code":"AQBcXQIAYXEYNeyYSYsNbXFvuIxnaHt1Uyf0CAvL383M31A8XEz9X2YbSOGd-G4q0O5YKsvsvaVWTbi29neEg41cvyW            eb2RBLu6c0v6_iKl2DC--IAoKQQ5TaBDCrznCg19ZzGszdvxlzAKX0x25_M6m8Rb6Tn1pGRP8MnzIewT7vFs36iSNyMlygQCGZA0            cQeXlU62LHDyLHAqoth9-BBuJgnYQ5qpXQuVjfTx1Q3lB2YT66ZYwefBrkLcMMdG4WOqEU4pMhSriK8MYAONiv87Fmt2FSre3dxqF13--pi-xrs3BsaMyOoLeOxNZIFdLnRc",
            "clientId":1063601610424833,
            "redirectUri":"http://temquarto.com.br:9001/"
        };

        request.post('/api/auth/facebook')
            .send(objFacebook)
            .expect(200)
            .end(function(err, res){
            if(err) done(err);
            else  done();
        });
    });

});
