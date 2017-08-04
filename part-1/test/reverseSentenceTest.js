// Test using expected/valid inputs for the reverseSentence function.
var assert = require('chai').assert; // brings in chai's assertion library.
var reverseSentence = require('/Users/d2rd/lgProjects/phase-2-challenge/part-1/app.reverseSentence');

describe('app.reverseSentence', function(){
  it('app.reverseSentence should return the input string with the words in reverse order.', function(){
    assert.equal(app.reverseSentence(),'The sentence was reversed') // invokes the 'equal' method
  });
});

// Test using unexpected/invalid inputs for the month() function.