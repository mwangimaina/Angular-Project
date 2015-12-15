'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:EditmovieCtrl
 * @description
 * # EditmovieCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('EditmovieCtrl', function ($scope, $routeParams,MyFactory) {
   
        $scope.movie_id = $routeParams._id;//receive the route parameter

          MyFactory.get({ id: $scope.movie_id}, function(response){
         //here we pass a movie id & get a response - Object
            $scope.movies = response;      
       	});   

        //update button clicked
        $scope.updateMovie= function()  {
            MyFactory.update($scope.movies,function(response)
             {
                 //redirect - dialog
                 alert("Record Updated!!"+response);
             });

         //delete function






        };


  });







