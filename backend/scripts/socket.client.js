var socket = io();
socket.on("connection-successful", function(){
   Console.log("Verbindung mit Socket.io erfolgreich!"); 
});