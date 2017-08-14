// Write a function month(date) to find the month for a given Date object, returning the name of the month as a string ('January', 'February', 'March', 'April', 'May', ... etc).

var calendar = [
  {
    "monthNumber": "1",
    "monthName"  : "January",
    "monthNumber": "2",
    "monthName"  : "February",
    "monthNumber": "3",
    "monthName"  : "March",
    "monthNumber": "4",
    "monthName"  : "April",
    "monthNumber": "5",
    "monthName"  : "May",
    "monthNumber": "8",
    "monthName"  : "June",
    "monthNumber": "7",
    "monthName"  : "July",
    "monthNumber": "8",
    "monthName"  : "August",
    "monthNumber": "9",
    "monthName"  : "September",
    "monthNumber": "10",
    "monthName"  : "October",
    "monthNumber": "11",
    "monthName"  : "November",
    "monthNumber": "12",
    "monthName"  : "December"
  }
  ]


function month(dateInput){
  var dateInput = prompt("Please enter a date","mm/dd/yyyy");
  console.log(dateInput);

  //extract month digits from date/Input.
  //hint use regular expression.

  //match dateInput to monthNumber.
  function byCompany(clientObj, index, clientData) { 
    // console.log(clientObj);   
  if (clientObj.company == targetCompany) {
        return true;
    }
    else {
        return false;
    }}
  // for (i in calendar){
  //     console.log(i);
  //     for (key in calendar[i]){
  //       if(key !== 'company' && key !== 'no_employees' && key !== 'phone' && key !== 'created_at') { // filters out unwanted keys.  NOTE: Must use '&&'!  '||' ("OR" operator) does not work in JS 'if'.  This is NOT SQL.
  //       //Prints the id, rep_name, city, and state of each matching client.
  //         console.log( key + ": " + calendar[i][key]);
  //       }
  //     }
  // }

}

month();
// let dateInput = new Date(2017, 6, 19) // June 19, 2017
// month(dateInput) // returns "June"

