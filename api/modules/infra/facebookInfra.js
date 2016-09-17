"use strict";

/***
 * @author Eduardo Hattori
 * @date 13/09/16.
 */
module.exports = function(app){

    var config  = require("config");
    var request = require("request");

    var facebookInfra = {

        login : function(param, callback){

            var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name'];
            var accessTokenUrl = config.facebook.accessTokenUrl;
            var graphApiUrl = config.facebook.graphApiUrl + fields.join(',');
            var params = {
                code: param.code,
                client_id: param.clientId,
                client_secret: config.facebook.secrets,
                redirect_uri: param.redirectUri
            };

            request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
                if (response.statusCode !== 200) {
                    callback({ message: accessToken.error.message });
                }

                request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
                    if (response.statusCode !== 200) {
                        callback({ message: accessToken.error.message });
                    } else {
                        callback(null, profile);
                    }
                });
            });
        }
    };

    return facebookInfra;
};
