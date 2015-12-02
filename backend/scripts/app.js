"use strict";
/* global angular */
(function(){
    var app = angular.module("backend", ['ngRoute', 'app.slides', 'app.players']);
    app.controller("BackendController", function($scope){
        
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