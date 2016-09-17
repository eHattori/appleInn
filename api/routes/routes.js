"use strict";

/***
 * Mapeamento das rotas
 * @author Eduardo Hattori
 * @date 09/08/16.
 */
module.exports = function(app) {

    var userController = app.modules.controllers.userController;
    var auth           = app.modules.middleware.authMiddleware;

    //AUTH ROUTES
    app.post('/api/auth/facebook',userController.loginFacebook);
    app.post('/api/auth/google',userController.loginGoogle);
    app.post('/api/auth/login',userController.login);

    app.get('/api/',auth.isLogged,   function(req, res){

        console.log(res.data);
        res.send("OK");
    });

};
