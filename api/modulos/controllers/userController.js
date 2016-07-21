/***
 * Controlador para o usuário
 *
 * @author Eduardo Hattori
 * @date 08/06/16
 */
module.exports = function(app){

    var userDomain  = app.modulos.domains.userDomain;
    var tokenDomain = app.modulos.domains.tokenDomain;
    var randtoken   = require('rand-token');

    /***
     *
     */
    var _res;

    var userController = {

        login : function(req, res){

            _res = res;

            var username = req.body.username;
            var password = req.body.password;

            try {
                userDomain.getUsuarioPorUsernamePassword(username, password, function(err, data){

                    if(err){
                        callBackError(err);
                    } else {

                        if(data != null){

                            var token = randtoken.generate(64);

                            //salvar no elastic
                            tokenDomain.setToken(data.cod_uapp, token,function(err,response){

                                if(err)
                                    callBackError(err);
                                else
                                    callBackSucesso(data, 200, token);

                            });

                        } else{
                            callBackError(null, "Unauthorized", 401);
                        }
                    }
                })
            } catch(e){
                 callBackError(e,"Erro API", 500);
            }

        },

        /**
         * Este método valida se o usuário é valido e envia
         * para o dominio
         *
         * @author Eduardo Hattori
         * @date 14/07/2016.
         *
         * @param req
         * @param res
         */
        create : function(req, res){

            _res = res;

            var user = req.body;
            if(userDomain.isValid(user)){
                userDomain.save(user, function(data){
                    callBackSucesso(data,201);
                });
            } else {
                callBackError("Invalid Object","Usuário Inválido",400);
            }
        },

        get : function(req, res) {
            res.json({ username: "Eduardo", email: "eduardo.hattori@hotmail.com" });
        }
    };

    /***
     *
     * @author Eduardo Hattori
     *
     * @param ex
     * @param opicional mensagem
     * @param opicional status
     */
    var callBackError = function(ex){

        var status = 500;
        var msg = "";
        if(arguments[1])
            msg =arguments[1];

        if(arguments[2])
            status = arguments[2];

        _res.status(status).send({
            developerError : ex,
            messageUser : msg
        });
    };


    /**
     *
     * @author Eduardo Hattori
     *
     * @param data
     * @param opicional status
     */
    var callBackSucesso = function(data){

        var status = 200;
        var token  = "";

        if(arguments[1])
            status = arguments[1];

        if(arguments[2])
            token = arguments[2];

        _res.status(status).send({
            user : data,
            token : token
        });
    };

    return userController;
}
