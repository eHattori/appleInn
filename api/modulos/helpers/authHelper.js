"use strict";
/***
 *
 * @author Eduardo Hattori
 * @date 08/06/16.
 */
module.exports = function(app){

    var passport = require('passport');
    var Strategy = require('passport-http-bearer').Strategy;


    var auth = {
        authenticate : function(){

            passport.use(new Strategy(
                function(token, cb) {
                    return cb(null, "OK");
             }));

            return passport;
        }

    };

    return auth;
}
