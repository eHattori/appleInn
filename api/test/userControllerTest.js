describe('Teste do Controlador de usuário', function() {

    this.timeout(6000);

    var app,
        should,
        request,
        token,
        md5,
        env;

    before(function(){
        app     = require('../app.js');
        should  = require('should');
        request = require('supertest')(app);
        md5     = require('md5');
    });


    it("Deve cadastrar um user errado pelo site", function(done){

        var user = {
            user     : "TESTE CADASTRO USUARIO"
        };

        request.post('/api/user')
            .expect(400)
            .send(user)
            .end(function(err, res){
                if(err){
                    done(err);
                } else {
                    done();
                }
            });
    });

    it("Deve cadastrar um user pelo site", function(done){

        var user = {
            username : "TESTE CADASTRO USUARIO",
            password : md5("123")
        };

        request.post('/api/user')
            .expect(201)
            .send(user)
            .end(function(err, res){
                if(err){
                    done(err);
                } else {
                    done();
                }
            });
    });

    //it("Deve retornar se o usuario ja existe quando cadastra um mesmo usuário", function(done){
    //
    //});
    //
    //
    //
    //it("Deveria retornar 400 e usuário inválido quando passar", function(done){
    //
    //
    //    var user  = {
    //        user : "teste",
    //        password : "123"
    //    };
    //
    //    request.post('/api/user/login')
    //        .expect(400)
    //        .send(user)
    //        .end(function(err, res){
    //            done();
    //        });
    //
    //});
    //
    //
    //it('Deveria responder 401 sem token', function (done) {
    //    request.get('/api/token/valid')
    //        .expect(401)
    //        .end(function(err, res){
    //
    //            if(err)
    //                return done(err);
    //
    //            (res.status == 401).should.be.true;
    //            done();
    //        });
    //});

    after(function(done){
        process.env.NODE_ENV = env;
        done();
    });

});