/***
 * Dominio do usuario do sistema
 *
 * @author Eduardo Hattori
 * @date 09/06/16.
 */

module.exports = function(app){

    var usuarioModel = app.modulos.models.userModel;

    var userDomain = {

        /***
         * Método que retorna um usuário que tenha o
         * username e o password e que chama um callback
         * passando o err caso tenha algum problema ou o
         * data com o usuário encontrado
         *
         * @author Eduardo Hattori
         * @date 2016-06-12
         * @param username
         * @param password
         * @param callback(err, data)
         */
        getUsuarioPorUsernamePassword : function(username, password, callback){

            try {
                usuarioModel.findAll({
                    where : {
                        username : username,
                        password : password
                    }
                }).then(function(data){

                    if(data && data.length > 0)
                        callback(null, data[0].dataValues);
                    else
                        callback(null, null);
                }).catch(function(err){
                    callback(err, null);
                });

            } catch(e){
                callback(e, null);
            }
        }
    };

    return userDomain;
    
};
