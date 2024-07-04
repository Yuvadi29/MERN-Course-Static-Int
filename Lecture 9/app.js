// const math = require('./math.js');

// console.log(math.add(5, 3));
// console.log(math.subtract(5, 3));

// Create a module that exports area and perimeter of reactangle, square, circle and triangle

const area = require('./area.js')

area.reactangle(3, 4);
area.triangle(3, 4, 5);
area.square(3);
area.circle(3);

// Create a module that exports an array fruits containing sveral fruit names. Import and log this array in another file
const array = require("./array.js")
console.log(array.arrayOfFruits())

// Create a module that exports square and cube of any number

const call = require('./SquareCube.js')
call.SquareCube(2)

// Create a module that fetches data from the url and log the data on the console in another file

const fetchingcall = require('./FetchModule.js')
fetchingcall.fetching()


// Create a module which generates a random number using Math.random() and call it in another file in the following order:
/*
First Time should be called at 3 seconds
Second Time at 5 seconds
Third Time at 10 seconds
 */
const a = require('./random.js')
function b(delay) {
    setTimeout(() => {
        console.log(a.f());
    }, delay);
}
b(3000)
b(5000)
b(1000)

const exp = require('./exp.js');
exp();