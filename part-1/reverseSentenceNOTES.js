//reverseSentence
//Requirements
  // Write a function reverseSentence(string) that takes a string of words and returns a string with the words in reverse order. If there is only one word in the string return it unchanged. Consider any series of non-space characters a word.



//problem
    //words in reverse order
    //if more than one non-space character = word

//spec (skeleton)
  //
  // checklist
    //process.argv[]
    //function
    //string
      //string of words
    //Variables
        //inputSentence[]
    //Arrays:

      //inputSentenceArray[]
      //reversedSentenceArray[]
      //


//psuedo (behavior in plain english)
   // function 'reverseSentence()' takes one parameter 'inputSentence'.  parameter type is string
  // 1. split words into array called 'inputSentenceArray'.  Use space as the delimiter to identify individual words.
  // 2. store array in variable named 'reversedSentenceArray'.
  // 3. .reverse method on the var (which is the array) NOTE: may require new array
  // 4. .join on array (which is reversed) reversedArrayName.join(" ")  // adding space as argument indicates its a separator.  Any character can be a separator.




var inputSentence = process.argv[2] //NOTE Sentence must be in quotes.  
// NOTE: alternately, you could concatenate argument into a string by looping through words using process.argv.forEach process.argvMap or process.argvReduce 
// console.log(inputSentence); // check to confirm arguments passed through.

// 1. split words into array called 'inputSentenceArray'.  Use space as the delimiter to identify individual words.
  // 2. store array in variable named 'reversedSentenceArray'.


  function reverseSentence(string) {
    inputSentenceArray = inputSentence.split(" ");
    console.log(inputSentenceArray);
    reversedSentenceArray = inputSentenceArray.reverse();
    console.log(reversedSentenceArray);
    reversedSentenceResult = reversedSentenceArray.join(" ");
    return console.log(reversedSentenceResult);
  }

reverseSentence();