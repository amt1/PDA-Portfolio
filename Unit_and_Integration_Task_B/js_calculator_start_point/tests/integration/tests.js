var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have the running total display updated by the number buttons', function(){
    console.log("hello");
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('should have the running total display updated by arithmetical operations', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('can chain together multiple operations', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')

  })

// range of test data: positive already done in tests above

  it('can correctly output negative numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-6')
  })

  it('can correctly add negative numbers', function(){
    // it can't: testing in the browser, there is no way to input them
  })

  it('can correctly add decimal numbers', function(){
    // it can't: testing in the browser, there is no decimal point so no way to input them
  })

  it('can correctly output decimal numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.5')
  })

  it('can correctly calculate with very large numbers', function(){
    // it can't: testing entering digits in the browser, they are all zeros after 17 digits
  })
  it('can correctly output numbers up to 16 digits', function(){
    running_total = element(by.css('#running_total'))
    for (var i=0; i<15; i++){
      element(by.css('#number9')).click();
    }
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('1000000000000001')
    // expect(running_total.getAttribute('value')).to.eventually.equal('9999999999999999')

  })

  xit('can not correctly output numbers over 16 digits', function(){
    running_total = element(by.css('#running_total'))
    for (var i=0; i<16; i++){
      element(by.css('#number9')).click();
    }
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('10000000000000001')
    // expect(running_total.getAttribute('value')).to.eventually.equal('9999999999999999')

  })

  it('outputs Not a number when dividing by zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not a number')

  })
});
