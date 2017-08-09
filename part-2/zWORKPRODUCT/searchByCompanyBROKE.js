// searchByCompany.js takes one string argument (let's call it company), finds all the clients from clients.json who have a company that starts with the company string, and prints the id, company and phone of each matching client.
// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".

//Pseudo.

// 1. Get required resources
        var fs = require('fs');  //requires the node 'fs' library.
        const targetCompany = [process.argv[2]]  //search parameter is the 3rd array item
console.log(targetCompany);  // checks if value is stored by process.argv

// 2.  Read in json data to variable
        const clients = fs.readFileSync('./clients.json', 'utf8');  //loads the clients.json file into the var 'clients' (using absolute path).
// THIS WORKS!   console.log(clients);  // checks array is stored in clients

function byCompanyName(targetCompany){
    return clientsFound;
}

const clientsFound = function () {
    clients.filter(byCompanyName) // creates new array containing only array elements that match 'targetCompany'.
}
console.log(clientsFound);

// company();

// module.exports = company.js;