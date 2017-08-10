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
  },

  // attribution:  https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
  keys = Object.keys(obj), // extracts keys from object to new array 'keys'

  // to return an object with sorted keys use the line below.
  i, len = keys.length;  // declares empty variable 'i' and declares 2nd var 'len' and assigns value of length of 'keys' array.

//choose one:
    // keys.sort().forEach(key => console.log(key));  // ES6 syntax
    keys.sort().forEach(function(key){console.log(key)});
// console.log(keys);
// Display keys from 'obj' in the console
// for(var key in obj){
//   if(obj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }


// for (i = 0; i < len; i++) {
//   k = keys[i];
//   console.log(k + ':' + Obj[k]);
// }

