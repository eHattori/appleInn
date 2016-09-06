"use strict";

/***
 * @author Eduardo Hattori
 * @date 10/08/16.
 */

module.exports = function(app){

    var client    = (app.modules.infra.elasticSearchInfra).getConnection();
    var config    = require('config');
    var log       = app.modules.infra.logInfra;
    var moment    = require("moment");
    var randtoken = require('rand-token');


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
                    userid : userid,
                    data : moment().format("YYYY-MM-DD HH:mm:ss")
                }
            }, function(err, response){
                if(err){
                    log.error(err);
                    callback(err, null);
                } else {
                    callback(null,response);
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
                id : token
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
        createToken : function(userid, callback){
            this.setToken(userid, randtoken.generate(32), callback);
        },


        isValid : function(token, callback){
            var _this = this;

            try {
                this.getInfoToken(token, function(err, res){

                    if(err){
                        if(err.status)
                            callback(null, { isValid : false});
                        else{
                            log.error(err);
                            callback(err);
                        }
                    }

                    var now  = moment();
                    var then = moment(res.data);
                    var diff = now.diff(then,"seconds") / 60;

                    if(diff >= 15){
                        _this.deleteToken(token, function(err, data){
                            if(err){
                                log.error(err);
                                callback(err);
                            }
                            callback(null, { isValid : false });
                        });
                    } else {
                        callback(null, { isValid : true });
                    }
                });

            } catch(e){
                log.error(err);
                callback(e);
            }
        }
    };


    return tokenDomain;
};
