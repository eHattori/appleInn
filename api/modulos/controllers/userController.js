/***
 * Controlador para o usuário
 *
 * @author Eduardo Hattori
 * @date 08/06/16
 */
module.exports = function(app){


    var userController = {

        get : function(req, res) {
            res.json({ username: "Eduardo", email: "eduardo.hattori@hotmail.com" });
        }
    };

    return userController;
}
