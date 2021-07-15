/*
Using module.exports as an object which exports all of these as a group

module.exports = {
    
    sayHello: function() {
    return 'hello'
    },

    addNumbers: function(val1, val2) {
        return val1+val2
    },
    holiday: function() {
        let destinations = ['Japan', 'China', 'Georgia', 'Taiwan', 'Uzbekistan'];
        let select = destinations[Math.floor(Math.random()*(destinations.length))];
        return select;
    },
    
}

*/

const sayHello = function () {
    return 'hello';
}

const addNumbers = function (a=0, b=0) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
    } else {
    return a + b;
    }
}

const holiday = function (input) {
    let select = input[Math.floor(Math.random() * (input.length))];
    return select;
}

const whatsForDinner = function (input) {
    let filtered = input.filter(item => item.length > 6);
    let x = Math.floor(Math.random()*filtered.length);
    return filtered[x];
}

//if you try to call a function on this page that is using parameters from mocks
//will come back as undefined as the parameter does not exist. 
// holiday();

module.exports = {
    sayHello,
    addNumbers, 
    holiday,
    //destinations,
    whatsForDinner,
};
// module.exports = sayHello;
// module.exports = addNumbers;
// module.exports = holiday;