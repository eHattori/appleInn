"use strict";

/***
 * @author Eduardo Hattori
 * @date 13/09/16.
 */
describe("Deve tertar a Infra de conexão com o facebook", function(){

    var app;
    var should;
    var infra;

    before(function(){

        process.env.NODE_ENV = "test";

        app = require('../../app');
        should  = require("should");
        infra   = app.modules.infra.facebookInfra;
    });
    
    
    it("Deve logar no facebook retornar um usuario valido", function(done) {

        var objFacebook = {
            "code":"AQCCwLzf_6s87UZfJyAq4GW-RqvBv0mk44OEnBN5E1XMeydGzXWtK0Jwdt9IUGsTCO_cIoMfQn0LqQ2r2kqMaXALM-r"+
            "zFNBU8pqT7hn4e2NH4SeoE4fud2zgYEXdYTDzWc9Ytd4w28khC7aval132fDlRex-mhY8a1O1eFxeJeYK3OB9FVdkTRzGCFkuwvB"+
            "uQvfL6yDebTJQaEd3WWiprEq9m_1eoWl-zftiuLI66T0umnSJB7Fyoxrv41-5AgjNgUN9EmuFvFgIbO6pDf_pCw1UI9ed_mmmCIxEV_bAVcAl0PIJwSf6TAl7lB9t1Uw_wHI",
            "clientId":1063601610424833,
            "redirectUri":"http://temquarto.com.br:9001/"
        };

        infra.login(objFacebook,function(err,data){
            if(err)done(err);
            data.first_name.should.be.exactly("Eduardo");
            done();
        })
        
    });

});
