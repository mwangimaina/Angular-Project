'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:ViewmovieCtrl
 * @description
 * # ViewmovieCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('ViewmovieCtrl', function ($scope,$routeParams,MyFactory) {
       $scope.movie_id = $routeParams._id;//receive the route parameter
       MyFactory.get({ _id: $scope.movie_id}, function(response){
         //here we pass a movie id & get a response - Object
            $scope.moviedetails = response;      
       	});  
       
  });



