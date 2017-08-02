// Test using expected/valid inputs for the filterBetween() function.
var assert = require('chai').assert; // brings in chai's assertion library.
var filterBetween = require('../app.filterBetween');

describe('app.filterBetween', function(){
  it('app.filterBetween should return correct strings between the min and max inputs', function(){
    assert.equal(app.filterBetween(),'The correct string was returned') // invokes the 'equal' method
  });
});

// Test using unexpected/invalid inputs for the month() function.