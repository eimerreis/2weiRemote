var express = require('express');
var auth = require('basic-auth-connect');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var cors = require('cors');

app.use(cors);

//Zu Testzwecken wurde die Authentifizerung auskommentiert.
//app.use(auth('eimerreis', '1234'));

app.use(express.static(__dirname + "/backend"));

  io.on('connection', function(socket){
    console.log("User Connected");
  });

server.listen(process.env.PORT || 3000);