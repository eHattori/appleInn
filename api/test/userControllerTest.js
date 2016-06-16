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

    //it('Deveria responder 401 ao tentar logar qualquer usuário', function (done) {
    //
    //    request.post('/api/user/login')
    //        .expect(401)
    //        .send({
    //            username : 'blaqbla',
    //            password : '132'
    //        })
    //        .end(function(err, res){
    //
    //            if(err)
    //                return done(err);
    //
    //            (res.status == 401).should.be.true;
    //            done();
    //     });
    //});
    //
    //it('Deveria responder 200 ao tentar logar com usuario existente', function (done) {
    //
    //    request.post('/api/user/login')
    //        .expect(200)
    //        .send({
    //            username : 'hattori',
    //            password : '123'
    //        })
    //        .end(function(err, res){
    //            if(err)
    //                return done(err);
    //
    //            (res.status == 200).should.be.true;
    //            done();
    //        });
    //});
    //
    //it('Deveria responder 200 e receber um token', function (done) {
    //
    //    request.post('/api/user/login')
    //        .expect(200)
    //        .send({
    //            username : 'hattori',
    //            password : '123'
    //        })
    //        .end(function(err, res){
    //
    //            if(err)
    //                return done(err);
    //
    //            (res.status == 200).should.be.true;
    //            (res.body.token.length == 64).should.be.true;
    //            token = res.body.token;
    //
    //            done();
    //        });
    //});
    //
    //it('Deveria responder 200 e validar o token', function (done) {
    //
    //    request.get('/api/token/valid')
    //        .expect(200)
    //        .set('Authorization', "Bearer " + token)
    //        .end(function(err, res){
    //
    //            if(err)
    //                return done(err);
    //
    //            (res.status == 200).should.be.true;
    //            done();
    //        });
    //});
    //
    //it('Deveria responder 404 e validar o token invalido', function (done) {
    //
    //    request.get('/api/token/valid')
    //        .expect(404)
    //        .set('Authorization', "Bearer 123456")
    //        .end(function(err, res){
    //
    //            if(err)
    //                return done(err);
    //
    //            (res.status == 404).should.be.true;
    //            done();
    //        });
    //});

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