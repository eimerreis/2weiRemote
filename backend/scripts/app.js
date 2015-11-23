"use strict";
/* global angular */
(function(){
    var app = angular.module("backend", ['ngRoute']);
    app.controller("BackendController", function($scope){
        $scope.slides = [];
    });
    
    app.config(function($routeProvider){
       $routeProvider
       .when("/", {
          templateUrl: "templates/slideSelection.html",
          controller: "SlideController"
       });
    });
    
})();