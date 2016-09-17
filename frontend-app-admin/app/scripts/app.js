'use strict';

/**
 * @ngdoc overview
 * @name urbanApp
 * @description
 * # urbanApp
 *
 * Main module of the application.
 */
angular
  .module('temQuartoApp', [
    'angular-md5',
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'oc.lazyLoad',
    'ngStorage',
    'ngSanitize',
    'ui.utils',
    'ngTouch',
    'satellizer'
  ]).config(function($authProvider) {

      $authProvider.httpInterceptor = function() { return true; },
      $authProvider.withCredentials = false;
      $authProvider.tokenRoot       = null;
      $authProvider.name            = 'login';
      $authProvider.baseUrl         = '/';
      $authProvider.loginUrl        = 'http://localhost:3000/api/auth/login';
      $authProvider.signupUrl       = '/api/auth/signup';
      $authProvider.unlinkUrl       = '/api/auth/unlink/';
      $authProvider.tokenName       = 'token';
      $authProvider.tokenPrefix     = 'satellizer';
      $authProvider.tokenHeader     = 'Authorization';
      $authProvider.tokenType       = 'Bearer';
      $authProvider.storageType     = 'localStorage';

      // Facebook
      $authProvider.facebook({
        name: 'facebook',
        url: 'http://localhost:3000/api/auth/facebook',
        authorizationEndpoint: 'https://www.facebook.com/v2.7/dialog/oauth',
        clientId : '<CLIENT_ID_FACEBOOK>',
        redirectUri: window.location.origin + '/',
        requiredUrlParams: ['display', 'scope'],
        scope: ['email'],
        scopeDelimiter: ',',
        display: 'popup',
        oauthType: '2.0',
        popupOptions: { width: 580, height: 400 }
      });

      // Google
      $authProvider.google({
        name: 'google',
        url: 'http://localhost:3000/api/auth/google',
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
        clientId : 'CLIENT_ID_GOOGLE><',
        redirectUri: window.location.origin + '/',
        requiredUrlParams: ['scope'],
        optionalUrlParams: ['display'],
        scope: ['profile', 'email'],
        scopePrefix: 'openid',
        scopeDelimiter: ' ',
        display: 'popup',
        oauthType: '2.0',
        popupOptions: { width: 452, height: 633 }
      });
    })
  .constant('COLORS', {
    'default': '#e2e2e2',
    primary: '#09c',
    success: '#2ECC71',
    warning: '#ffc65d',
    danger: '#d96557',
    info: '#4cc3d9',
    white: 'white',
    dark: '#4C5064',
    border: '#e4e4e4',
    bodyBg: '#e0e8f2',
    textColor: '#6B6B6B',
  });