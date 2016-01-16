"use strict";
/* global angular */
(function(){
    var lineup = angular.module("app.lineup", ["draganddrop"]);
    lineup.controller("LineupController", function($scope, Player){
        $scope.players = Player.query();
    });
    
})();