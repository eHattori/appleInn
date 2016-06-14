"use strict";
/***
 *
 * @author Eduardo Hattori
 * @date 08/06/16.
 */
module.exports = function(app){

    var passport      = require('passport');
    var Strategy      = require('passport-http-bearer').Strategy;
    var tokenDomain   = app.modulos.domains.tokenDomain;

    app.use(passport.initialize());

    var auth = {
        tokenAuthenticate : function(){
            passport.use(new Strategy(
                function(token, cb) {
                    return tokenDomain.getToken(token, cb);
             }));

            return passport;
        }
    };

    return auth;
}
