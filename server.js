var express = require('express');
var app = express();

app.use(express.static(__dirname + "/backend"));
app.listen(process.env.PORT || 3000);
console.log("Server läuft auf Port 80");