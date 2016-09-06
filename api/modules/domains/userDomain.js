"use strict";

/***
 * @author Eduardo Hattori
 * @date 04/09/16.
 */

module.exports = function(app){

    var userModel = app.modules.models.userModel;
    var Validator = require('schema-validator');
    var log       = app.modules.infra.logInfra;

    var userDomain = {

        /**
         * Valida se um usuario é um usuário válido
         * @param userObject
         */
        isValid : function(userObject){

            var schema = {

                username : {
                    type: String,
                    required: true,
                    length: {
                        min: 3,
                        max: 16
                    }
                },
                password : {
                    type: String,
                    required: true,
                    length: {
                        min: 32,
                        max: 32
                    },
                    test: /^[a-f0-9]{32}$/
                },
                email : {
                    type: String,
                    required: true,
                    length: {
                        min: 3,
                        max: 32
                    },
                    test: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                },
                type : {
                    type: String,
                    required: true,
                    length: {
                        min: 1,
                        max: 1
                    }
                }
            };

            var validator = new Validator(schema);
            return validator.check(userObject);
        },

        /**
         * Salva ou atualiza um objeto na base de dados
         * @param userObject
         * @param callback
         */
        save : function(userObject, callback){

            try {

                var objValidation = this.isValid(userObject);
                log.info("OBJETO USUARIO SALVO : " + objValidation.toString());

                if(!objValidation._error){
                    var promisse = null;

                    if(userObject.user_id){
                        promisse = this._update(userObject);
                    } else {
                        promisse = this._create(userObject);
                    }

                    var _this = this;
                    promisse.then(function(data){
                        if(userObject.user_id){
                            _this.getById(userObject.user_id, callback);
                        } else {
                            callback(null, (data.dataValues ? data.dataValues : null));
                        }
                    }).catch(function(err){
                       callback(err, null);
                    });

                } else {
                    log.error(objValidation._error);
                    callback(objValidation._error, null);
                }
            } catch(e){
                log.error(e);
                callback(e,null);
            }
        },

        /**
         * Buscar o usuario por user_id
         * @param user_id
         * @param callback
         */
        getById : function(user_id, callback){

            userModel.findAll({where : { user_id : user_id}}).then(function(data){
                if(data[0].dataValues){
                    callback(null, data[0].dataValues);
                } else {
                    callback("Not Found", null);
                }

            }).catch(function(e){
                log.error(e);
                callback(e, null);
            });
        },

        /***
         * Insere um usuario
         * @param userObject
         * @private
         */
        _create : function(userObject) {
            return userModel.create(userObject);
        },

        /**
         * Atualiza um usuario
         * @param userObject
         * @private
         */
        _update : function(userObject){
            return userModel.update(userObject, { where : {user_id : userObject.user_id }});
        }
    };

    return userDomain;
};