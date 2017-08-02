// searchByCompany.js takes one string argument (let's call it company), finds all the clients from clients.json who have a company that starts with the company string, and prints the id, company and phone of each matching client.
// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".

for(i =0; i < clients.length;i++){ 
        // 'i' is index for iteration. length is a property of the array that indicates the number of objects in the array.'i++' increments the iteration by 1.
          document.write('<h4>' + clients[i].id + '</h4>');
          document.write('<li>' + clients[i].company + '</li>');
          document.write('<li>' + clients[i].phone + '</li>');
       // document.write('<li>' + clients[i].rep_name'</li>';
        } 


module.export = searchByCompany.js;