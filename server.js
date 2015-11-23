var express = require('express');
var app = express();

app.use(express.static(__dirname + "/backend"));
app.listen(process.env.PORT);
console.log("Server läuft auf Port 80");