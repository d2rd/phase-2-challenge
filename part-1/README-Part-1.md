Part 1: Write tests and solutions for these functions

For the following exercises, write your functions in a file called part-1/functions.js and your tests in a file called part-1/tests.js.

You can use whichever testing tools you prefer: console.assert() (builtin to Node), Mocha and Chai, Jasmine, etc.

Show a month

Write a function month(date) to find the month for a given Date object, returing the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).

Example:

let date = new Date(2017, 5, 19) // June 19, 2017
month(date) // returns "June"

let christmas = new Date(2017, 11, 25) // Dec 25, 2017
month(christmas) // returns "December"

Requirements

[ ] 10: A test using expected/valid inputs for the month() function is written in tests.js.
[ ] 10: A test using unexpected/invalid inputs for the month() function is written in tests.js.
[ ] 30: Correct implementation of the month() is defined in functions.js.
[ ] 10: Tests for month() are passing.

Reverse a sentence

Write a function reverseSentence(string) that takes a string of words and returns a string with the words in reverse order. If there is only one word in the string return it unchanged. Consider any series of non-space characters a word.

Example:

reverseSentence("The cat jumped over the dog.") // => "dog. the over jumped cat The"
reverseSentence("Hello, world!") // => "world! Hello,"

Requirements

[ ] 10: A test using expected/valid inputs for the reverseSentence() function is written in tests.js.
[ ] 10: A test using unexpected/invalid inputs for the reverseSentence() function is written in tests.js.
[ ] 30: Correct implementation of the reverseSentence() is defined in functions.js.
[ ] 10: Tests for reverseSentence() are passing.

Names of properties

Write a function nameProps(obj) that returns the names of the properties an object has in alphabetical order. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

Example:

let friend = {
name: 'Dominique',
age: 30,
phone: '555-555-5555'
}

nameProps(friend) // => ['age', 'name', 'phone']
nameProps({}) // => []

Requirements

[ ] 10: A test using expected/valid inputs for the nameProps() function is written in tests.js.
[ ] 10: A test using unexpected/invalid inputs for the nameProps() function is written in tests.js.
[ ] 30: Correct implementation of the nameProps() is defined in functions.js.
[ ] 10: Tests for nameProps() are passing.

Filter between

Write a function filterBetween(array, min, max) that takes an array of strings, a min value, and a max value. It returns a new array containing only the elements that come after min alphabetically and before max.

Example:

let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

filterBetween(arr, 'deer', 'giraffe') // => ['dog']
filterBetween(arr, 'chimp', 'lobster') // => ['dog', 'lion', 'cow']
filterBetween(arr, 'chickadee', 'chimpanzee') // => []

Requirements

[ ] 10: A test using expected/valid inputs for the filterBetween() function is written in tests.js.
[ ] 10: A test using unexpected/invalid inputs for the filterBetween() function is written in tests.js.
[ ] 30: Correct implementation of the filterBetween() is defined in functions.js.
[ ] 10: Tests for filterBetween() are passing.