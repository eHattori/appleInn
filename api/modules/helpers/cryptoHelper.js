"use strict";

/***
 * @author Eduardo Hattori
 * @date 16/09/16.
 */
module.exports = function(app){

    var crypto  = require('crypto');
    var config  = require('config');
    var jwt     = require('jsonwebtoken');

    var cryptoHelper = {

        encrypt : function(user){
            return jwt.sign(user, config.crypt.secret);
        },

        decrypt : function(token){
            return jwt.verify(token, config.crypt.secret);
        }
    };

    return cryptoHelper;
};
