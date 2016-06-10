"use strict";
/***
 *
 * @author Eduardo Hattori
 * @date 08/06/16.
 */
module.exports = function(app){

    var config    = config('config3');
    var passport  = require('passport');
    var Strategy  = require('passport-http-bearer').Strategy;
    var randtoken = require('rand-token');
    var User      = app.modulos.infra.userinfra



    var auth = {
        tokenAuthenticate : function(){
            passport.use(new Strategy(
                function(token, cb) {
                    return cb(null, "OK");
             }));

            return passport;
        },
        getToken : function(){

            var token = randtoken.generate(16);

            passport.use(new LocalStrategy(
                function(username, password, done) {


                    User.findOne({ username: username }, function (err, user) {
                        if (err) { return done(err); }
                        if (!user) { return done(null, false); }
                        if (!user.verifyPassword(password)) { return done(null, false); }
                        return done(null, user);
                    });
                }
            ));

        }
    };

    return auth;
}
