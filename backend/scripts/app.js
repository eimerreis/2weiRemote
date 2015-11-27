"use strict";
/* global angular */
(function(){
    var app = angular.module("backend", ['ngRoute', 'app.slides']);
    app.controller("BackendController", function($scope){
        
    });
    
    app.config(function($routeProvider){
       $routeProvider
       .when("/", {
          templateUrl: "templates/slideSelection.html"
       });
    });
    
})();