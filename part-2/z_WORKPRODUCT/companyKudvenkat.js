// Source array
// var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const targetCompany = [process.argv[2]]  //search parameter is the 3rd array item
var fs = require('fs');  //requires the node 'fs' library.
const myArray = fs.readFileSync('./clients.json', 'utf8');
// Callback function
function IsEven(value, index, array)
{
    if (value == 'Crooks-Rodriguez')
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Pass the callback function as argument to the filter method
var result = myArray.filter(IsEven);

console.log(result);