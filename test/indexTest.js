const assert = require('chai').assert;
const { expect } = require('chai');
const sayHello = require('../index.js').sayHello;
const addNumbers = require('../index.js').addNumbers;
const holiday = require('../index.js').holiday;
//to access the data set contained within destinations it needs to be exported in the module.exports object
//now destinations can be access within this file. BUT destinations, must be declared in the global scope
//in the file the data is exported from. 
const destinations = require('../index.js').destinations
// const app = require('../index.js');

describe('sayHello function', function() {
    it('app should return hello', function () {
        let result = sayHello();
        assert.equal(result, 'hello');
    });
    it('app should be a string', function () {
        let result = sayHello();
        assert.typeOf(result, 'string')
    });
});

describe('addNumbers function', function(){
    it('number should be greater than 5', function () {
        let result = addNumbers(5,5);
        assert.isAbove(result, 5);
    });
    it('value passed into function should be a string', function () {
        let result = addNumbers(5,5);
        assert.typeOf(result, 'number')
    })
    it('function should be able to handle single parameter', function () {
        let result = addNumbers(2);
        expect(result).to.be.eq(2);
    });
    it('function should be able to handle zero parameters', function (){
        let result = addNumbers();
        expect(result).to.be.eq(0)
    });
    it('function should be able to handle NaN as a parameter', function (){
        let result = addNumbers(2, 'test');
        expect(result).to.be.eq(0);
    })
});

describe('holiday function', function () {
    it('destination should be a string', function () {
        let result = holiday();
        assert.typeOf(result, 'string');
    })
    it('check final destination exists in list', function() {
        let result = holiday();
        //if desinations array is NOT declared in the global scope i.e. declared inside
        //the holiday function you will need to check that the result equals an item contained within
        //an array as below.
        // assert.oneOf(result, ['Japan', 'China', 'Georgia', 'Taiwan', 'Uzbekistan']);
        assert.oneOf(result, destinations)
    })
    it('check length of destination - should be greater than 5', function() {
        let result = holiday();
        expect(result.length).to.be.greaterThanOrEqual(5)
    })
});