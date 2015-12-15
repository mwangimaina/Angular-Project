'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('MainCtrl', function ($scope,MyFactory) {
       //passes a get to your resource
       
       $scope.movies = MyFactory.query();
  });
