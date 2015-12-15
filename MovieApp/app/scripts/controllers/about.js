'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
<<<<<<< HEAD
  .controller('AboutCtrl', function ($scope,$routeParams,MyFactory) {
 
     $scope.movies = $routeParams._id;//receive the route parameter
      MyFactory.get({ _id: $scope.movies}, function(response){
         //here we pass a movie id & get a response - Object
            $scope.moviedetails = response;      
       	}); 

=======
  .controller('AboutCtrl', function ($scope,MyFactory) {
     $scope.movie=new MyFactory();
    $scope.addMovie=function(){
    console.log($scope.movie);
    };
>>>>>>> 0ccd1fdaa6b4dab69207339d90dbfca8f047cd66
  });
