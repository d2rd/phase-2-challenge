// searchByCompany.js takes one string argument (targetCompany), finds all the clients from 'clients.json' who have a company that starts with the company string, and prints the id, company and phone of each matching client.

// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".


// 1. Get required resources
var fs = require('fs'); //requires the node 'fs' library.
var clientData = require('./clients')
var targetCompany = process.argv[2] //search parameter is the 3rd array item.
console.log(targetCompany);

// 2. load the clients.json file into the var 'clientData' (using absolute path).
// const clientData = JSON.parse(fs.readFileSync('./clients.json', 'utf8')); 

// 3. Declare helper function 'byCompany' to match search parameter 'targetCompany' to array values.
// Attribution for helper function:  https://www.youtube.com/watch?v=q_MXH_Ponpg
    function byCompany(clientObj, index, clientData) { 
        // console.log(clientObj);   
      if (clientObj.company == targetCompany) {
            return true;
        }
        else {
            return false;
        }
    }

var clientsFound = clientData.filter(byCompany); // NOTE: byCompany IS the callback.  runs filter method against new array 'clientsFound' containing matches output by 'byCompany' helper function.
// console.log(JSON.parse(clientsFound,));  // converts JSON string to object.
// console.log(clientsFound); // print all the values of clientsFound

//Below code daisy chains keys.  Not the best design
// for (i in clientsFound){
//     console.log(i);
//     for (key in clientsFound[i]){
//       if(key !== 'rep_name' && key !== 'no_employees' && key !== 'city' && key !== 'state' && key !== 'created_at') { // filters out unwanted keys.  NOTE: Must use '&&'!  '||' ("OR" operator) does not work in JS 'if'.  This is NOT SQL.
//         console.log( key + ": " + clientsFound[i][key]);
//       }        
//     }
// }
//refactor replace daisy chained keys with array of excluded keys 
    //make an exclude list, i.e. an array of unwanted values ('badKeys')
    //check key against badKeys
    //if badKeys.indexOf(i) == -1 means 'i' is not a value in the array   //returns -1 if not in array.  any other result is in the array (0-n where 'n' = 'array.length -1')

for (i in clientsFound){
    console.log(i);
    for (key in clientsFound[i]){
     var badKeys = [
                    'rep_name',
                    'no_employees', 
                    'city',
                    'state',
                    'created_at'
                    ]
    if (badKeys.indexOf(key) == -1){
        console.log( key + ": " + clientsFound[i][key]);
    }
      }        
    }

// Include these values:
        // clientsFound.id
        // clientsFound.company
        // clientsFound.phone
        
// // Exclude these values on these keys:
//         // clientsFound.
//         'rep_name'
//         'no_employees' 
//         'city'
//         'state'
//         'created_at')
        // clientsFound.city
        // clientsFound.state        