'use strict';

/**
 * @ngdoc overview
 * @name movieappApp
 * @description
 * # movieappApp
 *
 * Main module of the application.
 */
angular
  .module('movieappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      
      })
      .when('/about/:_id', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      
      .when('/viewMovie/:_id', {
        templateUrl: 'views/viewmovie.html',
        controller: 'ViewmovieCtrl',
        controllerAs: 'viewMovie'
      })
      .when('/addMovie', {
        templateUrl: 'views/addmovie.html',
        controller: 'AddmovieCtrl',
        controllerAs: 'addMovie'
      })
      .when('/editMovie/:_id', {
        templateUrl: 'views/editmovie.html',
        controller: 'EditmovieCtrl',
        controllerAs: 'editMovie'
      })
      // .when('/userLogin', {
      //   templateUrl: 'views/userlogin.html',
      //   controller: 'UserloginCtrl',
      //   controllerAs: 'userLogin'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
