// searchByCity.js takes one string argument (let's call it the city), finds all the clients from clients.json who have a city that exactly matches the city, and prints the id, rep_name, company, city, and state of each matching client.

// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".

<<<<<<< HEAD
//Pseudo.

// 1. Get required resources
        var fs = require('fs');  //requires the node 'fs' library.
        var clients = fs.readFileSync('./clients.json', 'utf8');  //loads the clients.json file into the var 'clients' (using absolute path).
        var targetCityNameProcess = [process.argv[2]]  //search parameter is the 3rd array item
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
=======
for(i =0; i < clients.length;i++){ 
        // 'i' is index for iteration. length is a property of the array that indicates the number of objects in the array.'i++' increments the iteration by 1.
          document.write('<h4>' + clients[i].id + '</h4>');
          document.write('<li>' + clients[i].rep_name + '</li>');
          document.write('<li>' + clients[i].company + '</li>');
          document.write('<li>' + clients[i].city + '</li>');
          document.write('<li>' + clients[i].state + '</li>');
        } 
        
>>>>>>> cecaf6688ac221c31f77822eb5a977f10d1fc890
