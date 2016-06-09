"use strict";
/***
 * Mapeamento de rotas da API
 * @author Eduardo Hattori
 * @date 2016-06-08
 */
module.exports = function(app){

    var auth           = app.modulos.helpers.authHelper;
    var userController = app.modulos.controllers.userController;





    app.get('/', auth.authenticate().authenticate('bearer', { session: false }), userController.get);

}

