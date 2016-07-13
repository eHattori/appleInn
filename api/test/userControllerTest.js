describe('Teste do Controlador de usuário', function() {

    this.timeout(6000);

    var app,
        should,
        request,
        token;

    before(function(){
        app     = require('../app.js');
        should  = require('should');
        request = require('supertest')(app);
    });


    it("Deveria retornar 400 e usuário inválido quando passar", function(done){


        var user  = {
            user : "teste",
            password : "123"
        };

        request.post('/api/user/login')
            .expect(400)
            .end(function(err, res){
                done();

            });

    });


    it('Deveria responder 401 sem token', function (done) {
        request.get('/api/token/valid')
            .expect(401)
            .end(function(err, res){

                if(err)
                    return done(err);

                (res.status == 401).should.be.true;
                done();
            });
    });

});