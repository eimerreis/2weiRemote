"use strict";

(function(){
    var slides = angular.module("app.slides", []);
    
    slides.controller("SlideController", function($scope){
        $scope.activeSlide == "aufstellung";
    });
    
    
})();