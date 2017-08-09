// Source array
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Callback function
function IsEven(value, index, array)
{
    if (value % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Pass the callback function as argument to the filter method
var result = myArray.filter(IsEven);

console.log(result);