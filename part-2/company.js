// searchByCompany.js takes one string argument (let's call it company), finds all the clients from clients.json who have a company that starts with the company string, and prints the id, company and phone of each matching client.
// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".

//Pseudo.

// 1. Get required resources
        var fs = require('fs');  //requires the node 'fs' library.
        var targetCompanyNameProcess = [process.argv[2]]  //search parameter is the 3rd array item
// 2.  
        const clients = fs.readFileSync('./clients.json', 'utf8');  //loads the clients.json file into the var 'clients' (using absolute path).

console.log(clients);  // checks array is stored in clients
console.log(targetCompanyNameProcess);  // checks if value is stored by process.argv

function byCompanyName(targetCompanyName){
    return targetCompanyName;
}

var clientsFound = clients.filter(byCompanyName) // creates new array containing only array elements that match 'targetCompanyName'.

console.log(clientsFound);

// searchByCompany();

// module.exports = searchByCompany.js;

clientsFound.id
clientsFound.rep_name
clientsFound.company
clientsFound.city
clientsFound.state