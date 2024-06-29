// A Closure is a function that retains access to its lexical scope even when the function is exected outside that scope. They are an important concept in JavaScript and are used extensively in advanced programming techniques.

function baharwala() {
    let baharwalaVariable = "Mai Baharwala hoo";

    function andarWala() {
        console.log(baharwalaVariable);
    }
    return andarWala;
}

const closure = baharwala();
closure();

// Private Variable
function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        },
    };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());

// Create a function that returns another function which adds a given number to its argument


function makeMultiplier(variable1) {

    function ChildAdd(variable2) {
        console.log(variable1 + variable2);
    }
    return ChildAdd;
}

const adding = makeMultiplier(10)
adding(20)

// Create a function makeMultiplier that returns a function which multiplies its argument by the provided factor. 

function makeMultiplier(variable1) {
    function ChildAdd(variable2) {
        console.log(variable1 * variable2);
    }
    return ChildAdd;
}

const multiply = makeMultiplier(10)
multiply(20)

//Write a function `once` that ensures that a given function can only be called once.
function once(func) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return func(...args);
        }
    };
}

const logOnce = once(console.log);
logOnce("Hello"); //true
logOnce("Hello Again"); //No effect

// Write a function that returns a greeting message for a given name
function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}`;
    };
}
const sayHello = createGreeting("Hello")
console.log(sayHello("Aditya"));

// Write a function that delays the execution of a given function by a specified time
function delay(fn, time) {
    return function (...args) {
        setTimeout(() => fn(...args), time)
    }
}
let delayed = delay(console.log, 5000)
delayed("hello");

// Create a function that can sum multiple parameters using closures. Nested functions, use atleast 3.

function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d;
            };
        };
    }
}
console.log(sum(1)(2)(3)(4));
