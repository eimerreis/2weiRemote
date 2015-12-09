"use strict";
/* global angular */
(function(){
    var app = angular.module("backend", ['ngRoute', 'ngResource', 'app.slides', 'app.players']);
    app.controller("BackendController", function($scope){
        
    });
    
    app.controller("MenuController", function($scope, $location){
       $scope.isActive = function(location){
           return location == $location.path();
       } 
    });
    

    
    app.config(function($routeProvider){
       $routeProvider
       .when("/", {
          templateUrl: "templates/slideSelection.html"
       })
       .when("/players", {
          templateUrl: "templates/player-template.html" 
       });
    });
    
})();