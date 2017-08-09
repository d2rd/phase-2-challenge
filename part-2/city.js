// searchByCity.js takes one string argument (let's call it the city), finds all the clients from clients.json who have a city that exactly matches the city, and prints the id, rep_name, company, city, and state of each matching client.

// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".

//Pseudo.

// 1. Get required resources
        var fs = require('fs');  //requires the node 'fs' library.
        var clients = fs.readFileSync('./clients.json', 'utf8');  //loads, AS A STRING, the clients.json file into the var 'clients' (using absolute path).
        var targetCityNameProcess = process.argv[2]  //search parameter is the 3rd array item
// 2.  
console.log(targetCityNameProcess);  // checks value is stored by process.argv
function byCityName(targetCityName){

  // Setup loop 
          //return an array of values that match on a certain key
              function getValues(clients, key) {
                  var clientsFound = [];
                  for (var i in clients) {
                      if (!clients.hasOwnProperty(i)) continue;
                      if (typeof clients[i] == 'object') {
                          clientsFound = clientsFound.concat(getValues(clients[i], key));
                      } else if (i == key) {
                          clientsFound.push(clients[i]);
                      }
                  }
                  return clientsFound;
              }
}

console.log(byCityName());

module.exports.byCityName = byCityName;