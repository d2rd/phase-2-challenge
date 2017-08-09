// searchByCompany.js takes one string argument (let's call it company), finds all the clients from clients.json who have a company that starts with the company string, and prints the id, company and phone of each matching client.
// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".

//Pseudo.

// 1. Get required resources
        var fs = require('fs');  //requires the node 'fs' library.
        var targetCompany = [process.argv[2]]  //search parameter is the 3rd array item
// 2.  
        const clients = fs.readFileSync('./clients.json', 'utf8');  //loads the clients.json file into the var 'clients' (using absolute path).

// console.log(clients);  // checks array is stored in clients
// console.log(targetCompany);  // checks if value is stored by process.argv

//helper function
function byCompanyName(client, string){  
    if(client.company == string) {
    return client.rep_name;
    }    
}
 // calls the function with the data wanted.

var clientsFound = clients.filter(byCompanyName) // creates new array containing only array elements that match 'targetCompany'.
console.log(byCompanyName(clients, targetCompany));

// searchByCompany();

// module.exports = searchByCompany.js;
// Return these values
        // clientsFound.id
        // clientsFound.rep_name
        // clientsFound.company
        // clientsFound.city
        // clientsFound.state

// searchByCompany (targetCompany){
//         return clients.company === targetCompany
// }

// filterByMatchingCompany(clients, targetCompany)