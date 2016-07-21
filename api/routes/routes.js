"use strict";
/***
 * Mapeamento de rotas da API
 * @author Eduardo Hattori
 * @date 2016-06-08
 */
module.exports = function(app){

    var auth           = app.modulos.helpers.authHelper;
    var userController = app.modulos.controllers.userController;

    var log = app.modulos.helpers.logHelper;

    app.all('/');


    //ROUTES USER
    app.post('/api/user', userController.create);
    app.post('/api/user/login', userController.login);
    app.get('/api/token/valid', auth.tokenAuthenticate().authenticate('bearer', { session: false }), userController.get);

    //app.all('/', auth.authenticate().authenticate('bearer', { session: false }), userController.get);
    //
    //app.get('/teste', auth.authenticate().authenticate('bearer', { session: false }), userController.teste);
    //
    //app.post('/api/login', userController.login);




}

