// Test using expected/valid inputs for the reverseSentence function.
var assert = require('chai').assert; // loads chai assertion library.
var reverseSentence = require('/Users/d2rd/lgProjects/phase-2-challenge/part-1/reverseSentence.js');

describe('reverseSentence', function(){
  it('reverseSentence should return the input string with the words in reverse order.',       function() {
   var results = reversedSentenceResult();
  });
});
// ,
//     // assert.equal(reverseSentence(),'The sentence was reversed') // invokes the 'equal' method


// Test using unexpected/invalid inputs for the month() function.


// Conditions to pass
    // 1. first word in 'inputSentenceArray' == last word reversedSentenceArray (end of array) 

//psuedo (behavior in plain english)
   // function 'reverseSentence()' takes one parameter 'inputSentence'.  parameter type is string
  // 1. split words into array called 'inputSentenceArray'.  Use space as the delimiter to identify individual words.
  // 2. store array in variable.
  // 3. .reverse method on the var (which is the array) NOTE: may require new array
  // 4. .join on array (which is reversed) reversedArrayName.join(" ")  // adding space as argument indicates its a separator.  Any character can be a separator.

