// Test using expected/valid inputs for the month() function.
var assert = require('chai').assert; // brings in chai's assertion library.
var nameProps = require('/Users/d2rd/lgProjects/phase-2-challenge/part-1/app.nameProps');  // absolute addressing

describe('app.nameProps', function(){
  it('app.nameProps should return the names of the properties of an object in alphabetical order. ', function(){
    assert.equal(app.nameProps(),'Object properties were listed.') // invokes the 'equal' method
  });
});

// Test using unexpected/invalid inputs for the month() function.