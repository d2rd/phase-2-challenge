//nameProps
// Write a function nameProps(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

var obj = {
    "id": 1,
    "rep_name": "Xymenes Dewer",
    "email": "xymenes.dewer@somewhere.com",
    "company": "Beahan, Swift and Hoppe",
    "no_employees": 742,
    "phone": "1-(863)994-6147",
    "fax": "1-(555)123-4567",
    "city": "Lakeland",
    "state": "Florida",
    "created_at": "11/4/2003"
  }

// Display keys from 'obj' in the console
for(var key in obj){
  if(obj.hasOwnProperty(key)) {
    console.log(key);
  }
}

// // Display keys from 'obj' in the console
// var sortedKeys = function sortKeys(obj){for(var key in obj){
//   if(obj.hasOwnProperty(key)) {
//     // console.log(key);
//   }
// }
// }

// console.log(sortedKeys);

