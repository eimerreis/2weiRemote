var socket = io();

socket.on("connect", function(){
   Console.log("Verbindung mit Socket.IO erfolgreich!"); 
});

socket.on("connection-successful", function(){
    Console.log("Verbindung erfolgreich!");
})