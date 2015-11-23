var express = require('express');
var auth = require('basic-auth-connect');
var app = express();


//Zu Testzwecken wurde die Authentifizerung auskommentiert.
//app.use(auth('eimerreis', '1234'));

app.use(express.static(__dirname + "/backend"));
app.listen(process.env.PORT || 3000);
console.log("Server läuft auf Port 80");