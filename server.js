var express = require('express');
var auth = require('basic-auth-connect');
var app = express();
var server = require("http").createServer(app);
var io = require('socket.io').listen(server);
var cors = require('cors');

//CORS Requests aktivieren
app.use(cors());

//Zu Testzwecken wurde die Authentifizerung auskommentiert.
//app.use(auth('eimerreis', '1234'));

app.use(express.static(__dirname + "/backend"));

io.set('origins', 'http://tvr2wei-eimerreis.c9.io');

io.on('connection', function(socket){
  console.Log("user connected");
  socket.on('change-slide', function(slide){
    console.Log("-------------------- Folie geändert: " + slide);
  });
  io.emit("connection-successful");
});

server.listen(process.env.PORT || 3000);

