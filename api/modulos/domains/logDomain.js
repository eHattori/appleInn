/***
 * Dominio do Log do sistema
 *
 * @author Eduardo Hattori
 * @date 09/06/16.
 */

module.exports = function(app){

    var logModel = app.modulos.models.logModel;

    var logDomain = {

        /***
         *
         * @param log
         * @param callback
         */
        insereLog : function(log, callback){

            logModel.create(log)
                .then(function(data) {
                    callback(null, data);
                })
                .catch(function(err){
                    callback(null, err);
                });
        }
    };

    return logDomain;

};
