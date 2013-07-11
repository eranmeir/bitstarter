var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var filename = 'index.html';
var response = fs.readFileSync(filename, 'utf8');

app.get('/', function(request, response) {
  response.send(response);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
