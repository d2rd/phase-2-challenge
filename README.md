# phase-2-challenge
LG Phase 2 Interview Challenge
This is the challenge for getting into phase 2.

To get started, create a new repository called phase-2-challenge. Do all of your work in this repo and submit it as your solution.

Skills covered:

Programming
Programming in JS
Testing
Node.js
HTML & CSS
Terminal, Bash, & UNIX

Each requirement has a point value. A fully complete requirement gets full points; partially complete requirements get partial points; incomplete requirements get no points. Completeness is determined by calculating points earned divided by total points available.

General Requirements

[ ] 10: Solution is in a public GitHub repository called phase-2-challenge.
[ ] 10: Solution repository has 4 folders: part-1, part-2, and part-3, and part-4.
[ ] 20: Git history shows frequent commits.

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

Part 2: Extract data from JSON file

Write a Node.js script to search for data from a JSON file.

Use the clients.json file provided representing a database of company contacts. Download the file to your part-2/ folder.

Then write two scripts that can be run using the node command.

searchByCompany.js takes one string argument (let's call it company), finds all the clients from clients.json who have a company that starts with the company string, and prints the id, company and phone of each matching client.
searchByCity.js takes one string argument (let's call it the city), finds all the clients from clients.json who have a city that exactly matches the city, and prints the id, rep_name, company, city, and state of each matching client.

Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".

Example: searchByCompany.js

$ node searchByCompany.js Ab
Finding companies with name "Ab"...

[
{
"id": 3,
"company": "Abbott-Bins",
"phone": "1-(617)668-9817"
},
{
"id": 13,
"company": "Abernathy-Schuster",
"phone": "1-(562)758-3202"
}
]

Example: searchByCity.js

$ node searchByCity.js Boston
Finding clients in City "Boston"...

[
{
"id": 3,
"rep_name": "Ronnie Benasik",
"company": "Abbott-Bins",
"city": "Boston",
"state": "Massachusetts"
},
{
"id": 24,
"rep_name": "Etan Chastang",
"company": "Herman Inc",
"city": "Boston",
"state": "Massachusetts"
},
{
"id": 92,
"rep_name": "Jeromy Upston",
"company": "Maggio, Monahan and Feest",
"city": "Boston",
"state": "Massachusetts"
},
{
"id": 100,
"rep_name": "Andria Kain",
"company": "O'Connell, Langworth and Wisoky",
"city": "Boston",
"state": "Massachusetts"
}
]

Requirements

[ ] 40: searchByCompany.js script prints the client  id, phone, and company for all clients whose company starts with the provided company argument.
[ ] 40: searchByCity.js script prints the client id, rep_name, company, city, and state that for all clients whose city matches the provided city argument.

Part 3: HTML layout for Filmtube

Write the HTML & CSS to layout a page for an online movie streaming site.

You only need to write HTML & CSS. No JavaScript or web server is required.

Design a layout to match the following wireframe:

https://user-images.githubusercontent.com/16725399/27921410-b7cda878-6245-11e7-9485-dda7f0e5ed04.png


Requirements

[ ] 10: All files are stored under the part-3/ folder
[ ] 20: No third party CSS libraries are used (all code must be written from scratch)
[ ] 10: HTML and CSS are separated into their own files.
[ ] 20: Page has a full-width header with the site title "Filmtube" and a button "Logout"
[ ] 10: Site title "Filmtube" is aligned to the left side of the header
[ ] 10: "Logout" button is aligned to the right side of the header
[ ] 20: Page has a "Categories" sidebar with all categories for movies
[ ] 10: Page has a main content area showing each of the movies
[ ] 20: Main content lists all movies name, duration, and a "Play" button
[ ] 20: Clicking on a category in the "Categories" sidebar will jump to that category
[ ] 10: Main content organizes all movies by section

Part 4: Quiz time!

Copy the questions below into a file part-4/quiz.md. Then, write your answer to each question directly below it.

The quiz is worth 50 points in total.

Reminder: you can use the internet to help you answer these questions :)

When you run a command in the terminal, where does BASH look for that command?
On a UNIX computer, how do you stop a running process?
What packages do you have installed via homebrew?
On a UNIX computer, how do you find the process id of a running process?
In a terminal, what does control-c do?
What would be the result of typing the following commands?
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd

How do you set an environment variable in your shell?
What keyboard shortcut do you use to split the screen in your editor?
How do you create an alias in your shell?
When a terminal command completes, how can you tell if it was successful or not?
What does your ~/.gitconfig have in it? (paste the whole file here)
What is the difference between a relative and absolute path?
Lets say you have the following file structure

~
└── Projects
├── pinterest-for-dogs
│   └── package.json
└── linkedin-for-dancers
├── README.md
└── package.json

And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?

What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
What files or folders do you want all git repositories to ignore?
What is the main difference between Array.map and Array.forEach in JavaScript?
