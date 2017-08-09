// Test using expected/valid inputs for the month() function.
var assert = require('chai').assert; // brings in chai's assertion library.
var showMonth = require('/Users/d2rd/lgProjects/phase-2-challenge/part-1/app.showMonth'); // absolute addressing

describe('app.showMonth', function(){
  it('app.showMonth should return correct month for given date', function(){
    assert.equal(app.showMonth(), 'The correct month was shown.') // invokes the 'equal' method
  });
});

// Test using unexpected/invalid inputs for the month() function.