//need to create an object with the mocks that you want to test. 
//This object is then exported and required on the testing page.

var mocks = {
    food: ['rice', 'noodles', 'hotpot', 'chips', 'steak'],
    destinations: ['Japan', 'China', 'Georgia', 'Taiwan', 'Uzbekistan'],
}

module.exports = mocks;