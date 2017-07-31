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