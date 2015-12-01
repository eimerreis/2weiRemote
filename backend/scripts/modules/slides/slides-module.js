"use strict";
/* global angular */
/* global socket */
(function(){
    var slides = angular.module("app.slides", []);
    slides.controller("SlideController", function($scope){
        $scope.activeSlide = "";
        $scope.slides = {
            aufstellung: 1, 
            "tabelle": 3,
            "spielerEinzeln": 4,
            "teambild": 5, 
            "chat": 7,
            "chatErklaerung": 8
        };
        $scope.changeSlide = function(slide){
            console.log("Übergebener Wert: " + slide);
            console.log("Wert im Array: " + $scope.slides[slide])
            $scope.activeSlide = slide
            socket.emit("change-slide", $scope.slides[slide]);
        };
    });
})();