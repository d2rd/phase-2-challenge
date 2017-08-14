//reverseSentence
//Requirements
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