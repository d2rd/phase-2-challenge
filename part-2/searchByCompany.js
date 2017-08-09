// 1. Get required resources
var fs = require('fs'); //requires the node 'fs' library.
var clientData = require('./clients')
var targetCompany = process.argv[2] //search parameter is the 3rd array item.
console.log(targetCompany);

<<<<<<< HEAD
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
      if(key !== 'no_employees' && key !== 'phone' && key !== 'created_at') { // filters out unwanted keys.  NOTE: Must use '&&'!  '||' ("OR" operator) does not work in JS 'if'.  This is NOT SQL.
        console.log( key + ": " + clientsFound[i][key]);
      }
       
        
    }
}
=======
for(i =0; i < clients.length;i++){ 
        // 'i' is index for iteration. length is a property of the array that indicates the number of objects in the array.'i++' increments the iteration by 1.
          document.write('<h4>' + clients[i].id + '</h4>');
          document.write('<li>' + clients[i].company + '</li>');
          document.write('<li>' + clients[i].phone + '</li>');
       // document.write('<li>' + clients[i].rep_name'</li>';
        } 
>>>>>>> cecaf6688ac221c31f77822eb5a977f10d1fc890

// Return these values
        // clientsFound.id
        // clientsFound.rep_name
        // clientsFound.company
        // clientsFound.city
        // clientsFound.state

        