"use strict";

/***
 * @author Eduardo Hattori
 * @date 04/09/16.
 */

describe("Teste o dominio do usuário",function(){

    var app;
    var should;
    var env;
    var config;
    var userDomain;
    var userModel;
    var mysqlInfra;
    var md5;

    before(function(done){

        //Set variables
        env = process.env.NODE_ENV;
        process.env.NODE_ENV = "test";

        app         = require("../../app");
        should      = require('should');
        config      = require('config');
        md5         = require('md5');
        userDomain  = app.modules.domains.userDomain;
        userModel   = app.modules.models.userModel;
        mysqlInfra  = app.modules.infra.mysqInfra;

        //clean env
        userModel.destroy({truncate : true}).then(function(){
            done();
        }).catch(function(err){
            done(err);
        });
    });

    it("Deveria retornar erro de usuário inválido", function(done){

        var user = {
            user     : "Tiburso",
            asas     : md5('TibursoDoidao'),
            tes      : 'tibursodoidao@gmail.com',
            type     : 'A'
        };

        userDomain.isValid(user)._error.should.be.true();
        done();
    });

    it("deveria passar no test do usuario valido",function(done){

        var user = {
            username : "Tiburso",
            password : md5('TibursoDoidao'),
            email    : 'tibursodoidao@gmail.com',
            type     : 'A'
        };

        (userDomain.isValid(user)._error == undefined).should.be.true();
        done();

    });

    it("Deveria inserir um usuario de acordo com o modelo de dados", function(done){

        var user = {
            username : "Tiburso",
            password : md5('TibursoDoidao'),
            email    : 'tibursodoidao@gmail.com',
            type     : 'A'
        };

        userDomain.save(user, function(err, nUser){
            if(err) done(err);
            nUser.user_id.should.be.ok();
            done();
        });
    });

    it("Deveria retornar um usuario", function(done){

        var user = {
            username : "Tiburso2",
            password : md5('TibursoDoidao'),
            email    : 'tibursodoidao@gmail.com',
            type     : 'A'
        };

        userDomain.save(user, function(err, nUser){
            if(err) done(err);
            userDomain.getById(nUser.user_id, function(err, data){
                (data != undefined).should.be.true();
                done();
            });
        });

    });

    it("Deveria atualizar um usuario",function(done){

        var user = {
            username : "Tiburso3",
            password : md5('TibursoDoidao'),
            email    : 'tibursodoidao@gmail.com',
            type     : 'A'
        };

        userDomain.save(user, function(err, nUser1){
            if(err) {
                done(err);
            }
            nUser1.username = "TibursoALTERADO";
            userDomain.save(nUser1, function(err, nUser2){
                if(err) done(err);
                (nUser2.username == "TibursoALTERADO").should.be.true();
                done();
            });
        });

    });

    after(function(done){
        userModel.destroy({truncate : true}).then(function(){
            process.env.NODE_ENV = env;
            done();
        }).catch(function(err){
            done(err);
        });
    });
});
