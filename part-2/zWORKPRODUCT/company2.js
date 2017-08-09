// 1. Get required resources
        var fs = require('fs');  //requires the node 'fs' library.
        const targetCompany = [process.argv[2]]  //search parameter is the 3rd array item
// console.log(targetCompany);  // checks if value is stored by process.argv

// 2.  Read in json data to variable
        const clients = fs.readFileSync('./clients.json', 'utf8');  //loads the clients.json file into the var 'clients' (using absolute path).

//helper function
function byCompanyName(client, string){  
    if(client.company == string) {
    return client.rep_name;
    }    
}

var clientsFound = function (clients, byCompanyName); // creates new array containing only array elements that match 'targetCompany'.
console.log(byCompanyName(clients, targetCompany));