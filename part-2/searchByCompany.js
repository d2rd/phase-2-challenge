// 1. Get required resources
var fs = require('fs'); //requires the node 'fs' library.
var clientData = require('./clients')
var targetCompany = process.argv[2] //search parameter is the 3rd array item.
console.log(targetCompany);

// 2. load the clients.json file into the var 'clientData' (using absolute path).
// const clientData = JSON.parse(fs.readFileSync('./clients.json', 'utf8')); //

function byCompany(clientObj, index, clientData) { 
    // console.log(clientObj);   
  if (clientObj.company == targetCompany) {
        return true;
    }
    else {
         return false;
     }}

var clientsFound = clientData.filter(byCompany);
// console.log(JSON.parse(clientsFound,));
console.log(clientsFound); // print all the values of clientsFound

for (i in clientsFound){
    console.log(i);
    for (key in clientsFound[i]){
      if(key !== 'no_employees' && key !== 'phone' && key !== 'created_at') {
        console.log( key + ": " + clientsFound[i][key]);
      }
       
        
    }
}

// Return these values
        // clientsFound.id
        // clientsFound.rep_name
        // clientsFound.company
        // clientsFound.city
        // clientsFound.state

        