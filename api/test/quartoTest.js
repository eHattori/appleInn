"use strict";

/***
 * @author Eduardo Hattori
 * @date 11/07/16.
 */

describe("Testa os quartos", function(){


    var app;
    var should;
    var env;

    before(function(done){

        env = process.env.NODE_ENV;
        process.env.NODE_ENV = "test";

        app    = require('../app');
        should = require('should');
    });

    after(function(done){
        process.env.NODE_ENV = env;
    });

});
