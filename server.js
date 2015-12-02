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

io.on('connection', function(socket){
  console.log("user connected: " + socket.id);
  
  socket.on('change-slide', function(slide){
    console.log("-------------------- Folie geändert: " + slide);
    io.emit('change-slide', slide);
  });
  
  socket.on('chat-message', function(message){
    io.emit('chat-message', message);
  });
  
  io.emit("connection-successful");
});


/* REST API mit MySQL auf AzureServer */
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "us-cdbr-azure-west-c.cloudapp.net", 
  user: "be9b0f898c4d72", 
  password: "64590c3e",
  database: "h2weiSQL"
});

var apiPrefix = "/api";

//GET Players
app.get(apiPrefix + "/players", function(req, res){
  connection.query("SELECT * FROM players", function(err, result){
    res.json(result);
    console.log("Ergebnis aus Datenbankabfrage: " + result);
    //connection.release();
  });
});



server.listen(process.env.PORT || 3000);