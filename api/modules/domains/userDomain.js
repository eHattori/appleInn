"use strict";

/***
 * @author Eduardo Hattori
 * @date 04/09/16.
 */

module.exports = function(app){

    var userModel = app.modules.models.userModel;
    var Validator = require('schema-validator');
    var log       = app.modules.infra.logInfra;
    var infra;

    var userDomain = {

        login : function(user, provider, callback){

            var clausura  = null;
            var converter = null;

            switch(provider){
                case 'facebook':
                    clausura  = function(id) { return {where : { facebook_id : id }}};
                    converter = function(user, authuser){
                        user.facebook_id = authuser.id;
                        user.first_name  = authuser.first_name;
                        user.last_name   = authuser.last_name;
                        user.link        = authuser.link;
                        user.email       = authuser.email;
                        user.avatar      = 'https://graph.facebook.com/' + user.facebook_id + '/picture?type=large';
                        user.name        = authuser.name;

                        return user;
                    };
                    infra     = app.modules.infra.facebookInfra;
                    break;
                case 'google' :
                    clausura  = function(id) { return {where : { google_id : id }}};
                    converter = function(user, authuser){
                        user.google_id   = authuser.sub;
                        user.first_name  = authuser.given_name;
                        user.last_name   = authuser.family_name;
                        user.link        = authuser.profile;
                        user.email       = authuser.email;
                        user.avatar      = authuser.picture;
                        user.name        = authuser.name;

                        return user;
                    };
                    infra     = app.modules.infra.googleInfra;
                    break;
                case 'login' :
                    infra   = {
                        login : function(us, callback){
                            userModel.findAll({where : { email : us.email, password : us.password}}).then(function(data){

                                if(data.length > 0 && data[0].dataValues){
                                    delete data[0].dataValues.password;
                                    callback(null, data[0].dataValues);
                                } else {
                                    callback({ error : "User Not Found"});
                                }

                            }).catch(function(err){
                                callback(err);
                            });
                        }
                    }
                    break;
            }

            var self = this;

            infra.login(user, function(err,authuser){

                if(err || authuser == undefined || provider == 'login') { callback(err, authuser); return; }

                self._getBy(clausura(authuser.id), function(err, user){
                    if(err) callback(err);

                    user = converter((user == null ? {type : "U" } : user), authuser);

                    if(!user.user_id){
                        self._create(user).then(function(data){
                            delete data.dataValues.password;
                            callback(null, data.dataValues);
                        });
                    } else {
                        self._update(user).then(function(data){
                            delete user.password;
                            callback(null, user);
                        });
                    }
                });
            });

        },

        /**
         * Valida se um usuario é um usuário válido
         * @param userObject
         */
        isValid : function(userObject, provider){

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

            if(provider) {
                switch (provider) {
                    case 'facebook'  :
                        schema = {
                            clientId: {
                                type: Number,
                                required: true
                            },
                            code: {
                                type: String,
                                required: true
                            },
                            redirectUri: {
                                type: String,
                                required: true
                            }
                        };
                        break;
                    case 'google' :
                        schema = {
                            clientId: {
                                type: String,
                                required: true
                            },
                            code: {
                                type: String,
                                required: true
                            },
                            redirectUri: {
                                type: String,
                                required: true
                            }
                        };
                        break;
                    case 'login' :
                        schema = {
                            email: {
                                type: String,
                                required: true,
                                length: {
                                    min: 3,
                                    max: 32
                                },
                                test: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                            },
                            password: {
                                type: String,
                                required: true,
                                length: {
                                    min: 32,
                                    max: 32
                                },
                                test: /^[a-f0-9]{32}$/
                            }
                        };
                        break;
                }
            }

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

        /**
         * Buscar o usuario por user_id
         * @param clausure
         * @param callback
         */
        _getBy : function(clausure, callback){

            userModel.findAll(clausure).then(function(data){
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