"use strict";

/***
 * @author Eduardo Hattori
 * @date 13/09/16.
 */
module.exports = function(app){

    var config  = require("config");
    var request = require("request");

    var googleInfra = {

        login : function(param, callback){

            var accessTokenUrl = config.google.tokenUrl;
            var peopleApiUrl = config.google.apiUrl;

            var params = {
                code: param.code,
                client_id: param.clientId,
                client_secret: config.google.secrets,
                redirect_uri: param.redirectUri,
                grant_type: 'authorization_code'
            };

            request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
                var accessToken = token.access_token;
                var headers = {Authorization: 'Bearer ' + accessToken};

                request.get({url: peopleApiUrl, headers: headers, json: true}, function (err, response, profile) {
                    if (profile.error) {
                        callback({message: profile.error.message});
                    } else {
                        profile.id = profile.sub;
                        callback(null, profile);
                    }
                });
            });
        }
    };

    return googleInfra;
};
