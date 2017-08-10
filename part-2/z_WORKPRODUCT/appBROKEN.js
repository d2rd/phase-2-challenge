var http = require('http');
var fs = require('fs');
var clients = fs.readFileSync('./part-2/clients.json', 'utf8');  //reads the clients.json file
// app.locals.clientsData = require('./clients.json');  //converts clients.json to local variable

var server = http.createServer(function(req, res){  //instantiates node's http server
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(clients)); //converts array to string and outputs it 
});

// var filtered=clients.filter(function(item){
//     return item.company=="c";         
// });
// console.log(filtered);

// app.get('index', function(req,res){
//   res.sendFile(__dirname + '/index.html');
// })

server.listen(3000, '127.0.0.1'); // server is listening on port 3000
console.log('now listening to port 3000');
