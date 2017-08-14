//showMonth
// Write a function month(date) to find the month for a given Date object, returning the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).
function showMonth(date){
let dateInput = new Date(2017, 6, 19) // June 19, 2017
month(date) // returns "June"
}

//reverseSentence
// Write a function reverseSentence(string) that takes a string of words and returns a string with the words in reverse order. If there is only one word in the string return it unchanged. Consider any series of non-space characters a word.

function reverseSentence(string) {
    var inputSentence = process.argv[2] // NOTE: Sentence argument must be in quotes.  
    inputSentenceArray = inputSentence.split(" ");
    console.log(inputSentenceArray);
    reversedSentenceArray = inputSentenceArray.reverse();
    console.log(reversedSentenceArray);
    reversedSentenceResult = reversedSentenceArray.join(" ");
    return console.log(reversedSentenceResult);
  }

reverseSentence();

//nameProps
// Write a function nameProps(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.
function nameProps(obj) {

}

//filterBetween
// Write a function filterBetween(array, min, max) that takes an array of strings, a min value, and a max value. It returns a new array containing only the elements that come after min alphabetically and before max.
function filterBetween(array, min, max) {

}

module.exports = function(){
  return 'test complete';
}