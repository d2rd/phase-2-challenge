var http = require('http');
var fs = require('fs');
var clients = fs.readFileSync('/Users/d2rd/lgProjects/phase-2-challenge/part-1/part-2/clients.json', 'utf8');  //reads the clients.json file

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(clients)); //converts array to string
});

server.listen(3000, '127.0.0.1'); // server is listening on port 3000
console.log('now listening to port 3000');

