"use strict";

/***
 * @author Eduardo Hattori
 * @date 10/08/16.
 */

module.exports = function(app){

    var client       = (app.modules.infra.elasticSearchInfra).getConnection();
    var config       = require('config');
    var log          = app.modules.infra.logInfra;
    var moment       = require("moment");
    var cryptoHelper = app.modules.helpers.cryptoHelper;

    var tokenDomain = {

        /***
         * Seta um token no cache
         *
         * @param userid
         * @param token
         * @param callback
         */
        setToken : function(userid, token, callback){

            client.create({
                index : config.elasticsearch.index,
                type  : config.elasticsearch.type,
                id : token,
                body : {
                    token : token,
                    user_id : userid,
                    data : moment().format("YYYY-MM-DD HH:mm:ss")
                }
            }, function(err, response){
                if(err){
                    log.error(err);
                    callback(err, null);
                } else {

                    var result = {
                        user_id : userid,
                        token  : token,
                        data   : moment().format("YYYY-MM-DD HH:mm:ss")
                    };

                    callback(null,result);
                }

            });
        },

        /***
         * Busca as informações do Token
         *
         * @param token
         * @param callback
         */
        getInfoToken : function(token,callback){

            client.getSource({
                index : config.elasticsearch.index,
                type  : config.elasticsearch.type,
                id    : token
            }, function(err, response){
                if(err){
                    log.error(err);
                    callback(err, null);
                } else {

                    callback(null, response);
                }
            });
        },

        /**
         * Deleta a informação do token
         *
         * @param token
         * @param callback
         */
        deleteToken : function(token, callback){

            client.delete({
                index : config.elasticsearch.index,
                type  : config.elasticsearch.type,
                id : token
            }, function(err, responde){
                if(err)
                    log.error(err);
                callback(err,responde);
            });
        },

        /***
         * Cria os tokens
         *
         * @param userid
         * @param callback
         */
        createToken : function(user, callback){
            if(user){
                user.data = moment().format("YYYY-MM-DD HH:mm:ss");
                this.setToken(user.user_id, cryptoHelper.encrypt(user), callback);
            } else {
                callback("Invalid User");
            }
        },


        isValid : function(token, callback){
            var _this = this;

            try {

                if(!token)
                    throw "Invalid Token";

                this.getInfoToken(token, function(err, res){

                    if(err){
                        if(err.status == 404){
                            err.displayName = "Token Not found"
                            return callback(err);
                        } else {
                            log.error(err);
                            return callback(err);
                        }
                    }

                    var now  = moment();
                    var then = moment(res.data);
                    var diff = now.diff(then,"seconds") / 60;

                    if(diff >= (config.timeExpireSession ? config.timeExpireSession : 15)){

                        var user = cryptoHelper.decrypt(token);
                        _this.deleteToken(token, function(err){
                            if(err){
                                log.error(err);
                                callback(err);
                            }
                            if(user)
                                _this.createToken(user, function(err, tk){
                                    callback(null, { isValid : true, token : tk });
                                });
                            else
                                callback(null, { isValid : false, displayError : "Invalid User" });
                        });
                    } else {
                        callback(null, { isValid : true });
                    }
                });

            } catch(e){
                log.error(e);
                console.log(e);
                callback(e);
            }
        }
    };

    return tokenDomain;
};
