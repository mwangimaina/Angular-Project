'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('AboutCtrl', function ($scope,MyFactory) {
     $scope.movie=new MyFactory();
    $scope.addMovie=function(){
    console.log($scope.movie);
    };
  });
