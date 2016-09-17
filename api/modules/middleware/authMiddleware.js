"use strict";

/***
 * @author Eduardo Hattori
 * @date 16/09/16.
 */
module.exports = function(app){

    var tokenDomain = app.modules.domains.tokenDomain;

    var auth =  {
        isLogged : function(req, res ,next){

            var bearerHeader = req.headers['authorization'];

            if(bearerHeader !== undefined){
                var bearer      = bearerHeader.split(" ");
                var bearerToken = bearer[1];
                tokenDomain.isValid(bearerToken, function(err, tk){

                    if(err || (tk && tk.isValid == false))
                        res.status(403).send({
                            errors : [(err || tk.displayError)]
                        });
                    else {
                        if(tk.token)
                            res.data = {token : tk.token }
                        next();
                    }

                });

            } else {
                res.status(403).send({
                    errors : ["Action not Authorizate"]
                });
            }
        }
    };


    return auth;



};
