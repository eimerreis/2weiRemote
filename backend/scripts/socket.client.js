var socket = io();
socket.on("connection-successful", function(){
   console.log("Verbindung mit Socket.io erfolgreich!"); 
});