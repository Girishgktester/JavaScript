// 9 ways of creating functions in JavaScript

// function deceleration
// methods

function add(a, b) {
    return a + b;
}
console.log(add(2, 3));


function print() {
    console.log('Hello');
}

print();

// 2. function expression
// anonymous function
// no name but we are giving variable name

const add1 = function (a, b) {
    return a * b;
}
console.log(add1(2, 10));

//3  arrow function
// ES6
// no function keyword
// no return keyword
// no curly braces
// no parameter brackets

const add3 = (t1, t2) => t1 + t2;

console.log(add3(2, 30));

// 4. function constructor
// not recommended
// not used in modern JS

const add4 = new Function('a', 'b', 'return a+b');
console.log(add4(2, 40));

// 5 IIFE
// Immediately Invoked Function Expression
// run as soon as defined
// no need to call the function
// no name
// used to print something on the console

(function () {
    console.log('Hello');
})();

//6. Generator function
// function* keyword
// yield keyword
// return multiple values
// pause and resume function
// used in async programming
// used in redux-saga
// used in redux-thunk
//
function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 7. annonymous function
// no name
// used in event handlers
// used in callback functions
// used in IIFE
// used in array methods
// used in object methods
// used in closures
// used in async programming
// used in promises

const numbers = [1, 2, 3, 4, 5];
const double = numbers.map(function (number) {
    return number * 2;
}
);
console.log(double);

// 8. recursive function
// function calls itself
// used in tree data structures
// used in algorithms
// used in functional programming
// used in async programming
// used in promises
// used in callbacks
// used in closures
// used in event handlers
// used in array methods
// used in object methods
// used in IIFE
// used in generators
// used in redux-saga
// used in redux-thunk
// used in async await

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// 9. higher order function
// function that takes another function as an argument
// function that returns another function
// used in functional programming
// used in async programming
// used in promises
// used in callbacks
// used in closures
// used in event handlers
// used in array methods
// used in object methods
// used in IIFE
// used in generators
// used in redux-saga
// used in redux-thunk
// used in async await


function greet() {
    return function () {
        console.log('Hello');
    }
}
const greeting = greet();
greeting();
