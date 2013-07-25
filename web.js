var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var filename = 'index.html';
var responseBuffer = fs.readFileSync(filename);
var responseStr = responseBuffer.toString();

app.get('/', function(request, response) {
  response.send(responseStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
