/***
 * Dominio do usuario do sistema
 *
 * @author Eduardo Hattori
 * @date 09/06/16.
 */

module.exports = function(app){

    var usuarioModel = app.modulos.models.userModel;

    var userDomain = {

        /**
         * Método resposavel por manter o usuario
         * na base do postgres
         *
         * @author Eduardo Hattori
         * @data 2016-07-14
         * @param obj
         * @param callback
         */
        save : function(obj, callback){
            var promisse = null;

            if(obj.cod_uapp){
                promisse = this._update(obj);
            } else {
                promisse = this._create(obj);
            }

            promisse.then(function(data){
                callback(null,(data.dataValues ? data.dataValues : null ));
            }).catch(function(err){
                callback(err,null);
            });
        },

        /**
         * Método que cria um usuário
         *
         * @param obj
         * @private
         */
        _create : function(obj) {

            return usuarioModel.create(obj).then(function(data){
                return data;
            });
        },

        /**
         * Método que atualiza um usuario
         *
         * @param obj
         * @private
         */
        _update : function(obj){

        },

        /***
         * Método que retorna se um usário é valido
         *
         * @author Eduardo Hattori
         * @date 2016-07-14
         * @param obj
         * @returns {boolean}
         */
        isValid : function(obj){

            var isValido = false;

            try {
                if(obj.username && obj.password && obj.username.trim() != "" && obj.username.trim() != ""){
                    isValido = true;
                }
            } catch(e){
                isValido = false;
            }

            return isValido;
        },

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
