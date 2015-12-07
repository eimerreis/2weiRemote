"use strict";
/* global angular */
/* global $api */
(function(){
    var players = angular.module("app.players", ['ngResource']);
    players.controller("PlayerController", function($scope, $playerApi){
        $scope.players = $playerApi.getPlayers();
        console.log("$scope.players = " + $scope.players)
        
        //Wenn die Checkbox eines Spielers aktiviert/deaktivert wurde, wird diese Methode aufgerufen und der Status des Spielers geändert.
        $scope.playerStateChanged = function(number, state){
            //Die Statusänderung wird zuerst über Socket.IO emittet
            socket.emit("player-state-changed", {"number": number, "state": state});
            console.log(number, state);
            //Anschließend wird die Statusänderung in die Datenbank geschrieben
            
        }
    });
    
    players.provider("$playerApi", function(){
       var endpoint = "http://zwei-app-eimerreis.c9users.io/players";
       this.$get = function($resource){
            return $resource(
                    endpoint + "/:player_id",
                    {
                        player_id: "@id"
                    },
                    {
                        'getPlayers': {method: "GET", isArray: true, cache: true},
                        'getPlayer': {method: "GET", isArray: false, cache: true}
                    }
                );
       };
    });
})();