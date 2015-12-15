'use strict';

/**
 * @ngdoc service
 * @name movieappApp.myFactory
 * @description
 * # myFactory
 * Factory in the movieappApp.
 */
  angular.module('movieappApp')
  .factory('MyFactory', function ($resource) 
  {
    //here we set our resource
    return $resource("http://127.0.0.1:8081/movies/:id",{id:'@_id'},
         {
          update : 
          {
            method : 'PUT'
    	    }});
  });









