//filterBetween
// Write a function filterBetween(array, min, max) that takes an array of strings, a min value, and a max value. It returns a new array containing only the elements that come after min alphabetically and before max.
// Filter between

// Write a function filterBetween(array, min, max) that takes an array of strings, a min value, and a max value. It returns a new array containing only the elements that come  alphabetically after min and before max.

// Example:

// let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

// filterBetween(arr, 'deer', 'giraffe') // => ['dog']
// filterBetween(arr, 'chimp', 'lobster') // => ['dog', 'lion', 'cow']
// filterBetween(arr, 'chickadee', 'chimpanzee') // => []

// Requirements

// [ ] 10: A test using expected/valid inputs for the filterBetween() function is written in tests.js.
// [ ] 10: A test using unexpected/invalid inputs for the filterBetween() function is written in tests.js.
// [ ] 30: Correct implementation of the filterBetween() is defined in functions.js.
// [ ] 10: Tests for filterBetween() are passing.

var firstSecondWords = process.argv[2]+", "+process.argv[3]; //min/max arguments entered as string ("min, max"), are the 3rd and 4th array items in process.argv. 
console.log(firstSecondWords); // check to confirm arguments passed through.
let wordsArray = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow', 'aardvark','ant','antelope','goat','tiger'];
console.log(wordsArray); // check to confirm array is populated;
function filterBetween(array, firstWord, secondWord) {

}


//Q1.  Does this work with strings and numbers
  //Numbers are problematical watch for gotchas like 2 will not evaluate less than 12 because most significant digit is larger.  ASK Sabrin for link

//strategy
// Approach A. use array.sort
    //  1.  visualize words as a vertical stack.
    //   use 'array.sort' 
    //     example wordsArray.sort(); //mutates to new sorted wordsArray.

    //   2. define newArray ('newArray = [];')

    //   3. iterate through sorted 'wordsArray' and check if > 'min' AND < 'max' push to 'newArray'.

    //   OR 
      
    //   return true using filter 'newArray'.


    //   4. return result ('console.log(newArray);').

// Approach B. use filter()

    //  1. Make callback function to evaluate arguments against array:  
    function byCompany(clientObj, index, clientData) { 
        // console.log(clientObj);   
      if (clientObj.company == targetCompany) {
            return true;
        }
        else {
            return false;
        }
    }
    
    //  visualize words as a vertical stack.
    //   use 'array.sort' 
    //     example wordsArray.sort(); //mutates to new sorted wordsArray.

    var clientsFound = clientData.filter(byCompany); // NOTE: byCompany IS the callback.  runs filter method against new array 'clientsFound' containing matches output by 'byCompany' helper function.
// console.log(JSON.parse(clientsFound,));  // converts JSON string to object.
// console.log(clientsFound); // print all the values of clientsFound