"use strict";
/***
 * @author Eduardo Hattori
 * @date 14/06/16.
 */

module.exports = function(app){

    var client = (app.modulos.infra.elasticsearchInfra).getConnection();

    var tokenDomain = {

        /***
         * Seta um token no cache
         *
         * @author Eduardo Hattori
         * @date 14/06/16.
         * @param userid
         * @param token
         * @param callback
         */
        setToken : function(userid, token, callback){

            client.create({
                index: 'usertokens',
                type: 'usertype',
                id: token,
                body: {
                    token: token,
                    userid:  userid
                }
            }, function (error, response) {
                if(error)
                    callback(error, null)
                else
                    callback(null, response);
            });
        },

        getToken : function(token, callback){

            client.getSource({
                index: 'usertokens',
                type: 'usertype',
                id: token
            }, function (error, response) {
                if(error)
                    callback(error, null)
                else
                    callback(null, response);
            });
        }

    };

    return tokenDomain;
};
