// Test using expected/valid inputs for the month() function.
var assert = require('chai').assert; // brings in chai's assertion library.
var showMonth = require('./showMonth');

describe('showMonth', function(){
  it('showMonth should return correct month for given date', function(){
    assert.equal(app.showMonth()) // invokes the 'equal' method
  });
});

// Test using unexpected/invalid inputs for the month() function.