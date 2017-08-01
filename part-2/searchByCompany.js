// searchByCompany.js takes one string argument (let's call it company), finds all the clients from clients.json who have a company that starts with the company string, and prints the id, company and phone of each matching client.
// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".

var http = require('http');
var fs = require('fs');

// var clients = fs.readFileSync('clients.json', 'utf8');  //reads the clients.json file
// var clients = require('./clients.json');
// var data = clients;

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(myObj));

});
server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
function searchByCompany(data, val) {
var objects
}
console.log(clients);

module.export = searchByCompany.js;