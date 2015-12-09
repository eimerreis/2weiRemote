"use strict";
/* global angular */
/* global $api */
(function(){
    var players = angular.module("app.players", ['ngResource']);
    angular.module("app.players").controller("PlayerController", function($scope, $resource, Player){
        //Alle Spieler aus der Datenbank werden über $resource geladen
        $scope.players = Player.query();
        
        //Wenn die Checkbox eines Spielers aktiviert/deaktivert wurde, wird diese Methode aufgerufen und der Status des Spielers geändert.
        $scope.playerStateChanged = function(number, state){
            //Die Statusänderung wird zuerst über Socket.IO emittet
            socket.emit("player-state-changed", {"number": number, "state": state});
            //Anschließend wird die Statusänderung in die Datenbank geschrieben
            $scope.selectedPlayer = Player.get({"id": number}, function(){
                $scope.selectedPlayer.active = state;
                $scope.selectedPlayer.$update({"id": number} ,function(){
            });
            });

        }
    });
    
    players.factory("Player", function($resource){
       var endpoint = "http://zwei-app-eimerreis.c9users.io/players";
       return $resource(endpoint + "/:id", { id: '@number' }, {
        update: {
          method: 'PUT' // this method issues a PUT request
        }
      });
    });
})();