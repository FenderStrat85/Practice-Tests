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

let destinations = ['Japan', 'China', 'Georgia', 'Taiwan', 'Uzbekistan'];
const holiday = function () {

    // let destinations = ['Japan', 'China', 'Georgia', 'Taiwan', 'Uzbekistan'];
    let select = destinations[Math.floor(Math.random() * (destinations.length))];
    console.log(select)
    // console.log(destinations);
    return select;


}

holiday()
module.exports = {
    sayHello,
    addNumbers, 
    holiday,
    destinations,
};
// module.exports = sayHello;
// module.exports = addNumbers;
// module.exports = holiday;