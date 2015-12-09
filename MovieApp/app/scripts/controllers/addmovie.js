'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:AddmovieCtrl
 * @description
 * # AddmovieCtrl
 * Controller of the movieappApp
 */
angular.module('movieappApp')
  .controller('AddmovieCtrl', function ($scope,MyFactory,$location) {
       $scope.movies = new MyFactory();
  	     $scope.saveMovie = function() {
  	          //create a new resource using your 'movie' Object
           
         console.log($scope.movies);
              //this will pass a post to you api
          MyFactory.save($scope.movies,function(data)
           {
                console.log(data);
                //$location.path( "/" );
           },function(err){
               console.log("OK");
           });

          };
  });




