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
<<<<<<< HEAD
       MyFactory.get({ id: $scope.movie_id}, function(response){
         //here we pass a movie id & get a response - Object
            $scope.moviedetails = response;      
       	}); 

=======
       MyFactory.get({ _id: $scope.movie_id}, function(response){
         //here we pass a movie id & get a response - Object
            $scope.moviedetails = response;      
       	});  
       
>>>>>>> 0ccd1fdaa6b4dab69207339d90dbfca8f047cd66
  });



<<<<<<< HEAD


=======
>>>>>>> 0ccd1fdaa6b4dab69207339d90dbfca8f047cd66
