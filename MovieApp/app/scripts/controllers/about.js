'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('AboutCtrl', function ($scope,$routeParams,MyFactory) {
 
     $scope.movies = $routeParams._id;//receive the route parameter
      MyFactory.get({ _id: $scope.movies}, function(response){
         //here we pass a movie id & get a response - Object
            $scope.moviedetails = response;      
       	}); 

  });
