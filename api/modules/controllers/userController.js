"use strict";

/***
 * @author Eduardo Hattori
 * @date 12/09/16.
 */

module.exports = function(app){

    var userDomain     = app.modules.domains.userDomain;
    var tokenDomain    = app.modules.domains.tokenDomain;
    var ResquestHelper = app.modules.helpers.requestHelper;

    var userController  = {

        loginFacebook : function(req, res){
            _baseLogin(req, res , 'facebook');
        },

        loginGoogle : function(req, res){
            _baseLogin(req, res , 'google');
        },

        login : function(req, res){
            _baseLogin(req, res , 'login');
        }
    };

    function _baseLogin(req, res, provider){

        var userparams = req.body;
        var objValid   = userDomain.isValid(userparams, provider);

        ResquestHelper.setResponse(res);

        if(!objValid._error){
            userDomain.login(objValid, provider, function(err, data){
                if(err) ResquestHelper.error(err, 404);

                if(!data)
                    ResquestHelper.error("User not Found", 404);

                tokenDomain.createToken(data, function(err1, user1){
                    if(err) ResquestHelper.error(err1, 404);
                    data.token = user1.token;
                    ResquestHelper.success(data);
                });
            });
        } else {
            ResquestHelper.error("Invalid Object: " + objValid._error);
        }
    }



    return userController;
};
