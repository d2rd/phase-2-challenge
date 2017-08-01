var http = require('http');
var fs = require('fs');
var clients = fs.readFileSync('./part-2/clients.json', 'utf8');  //reads the clients.json file

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);

res.writeHead(200, {'Content-Type': 'application/json'});

res.end(JSON.stringify(clients));
});