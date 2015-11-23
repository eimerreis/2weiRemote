var express = require('express');
var auth = require('basic-auth-connect');
var app = express();
var io = require('socket.io');
var cors = require('cors');

//app.use(cors);

//Zu Testzwecken wurde die Authentifizerung auskommentiert.
//app.use(auth('eimerreis', '1234'));

app.use(express.static(__dirname + "/backend"));


var server = app.listen(process.env.PORT || 3000);
var socket = io.listen(server);