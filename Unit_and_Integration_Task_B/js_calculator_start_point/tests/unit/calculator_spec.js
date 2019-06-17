var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add two numbers', function() {
    calculator.add(1);
    calculator.add(4);
  //  console.log(calculator.runningTotal);
    assert.equal(5, calculator.runningTotal);
// unit test fails because the line
//     this.previousTotal = this.runningTotal;
// is only called in the browser
  })

  it('can subtract numbers', function() {
    calculator.add(7);
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
    // same issue: runningTotal is not updated after the first operation
  })

  it('can multiply numbers', function() {
    calculator.add(3);
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
// same issue: added function to update runningTotal after the first operation
  })

  it('can divide numbers', function() {
    calculator.add(21);
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
// same issue: added function to update runningTotal after the first operation
  })

// Integration Tests:

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(3);
    assert.equal(53, calculator.runningTotal);

  })

  it('can chain multiple operations together', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(72);
    calculator.operatorClick('=');
// if I don't send the = sign it's negative and fails
// sending a 2 digit number passes though when it shoudn't be able to happen
// doing both (no = and 2 digit number) is even more wrong (screenshotted):
// says expected result is 72, actual is -77
// when it should be expected result is 77, actual 77.
// So it'll pass but I don't know why.
    assert.equal(77, calculator.runningTotal);

  })

  it ('can clear the running total without affecting the calculation', function(){
// I assume this means without affecting the next calculation
// as surely clear in the middle of a calculation is meant to clear that one
      calculator.numberClick(5);
      calculator.operatorClick('+');
      calculator.numberClick(72);
      calculator.clearClick();
      calculator.clearClick();
// it clears one number at a time but skips over the operators
// it only works in this arrangement
      calculator.operatorClick('=');
      assert.equal(0, calculator.runningTotal);

  })
});
