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

const add1 = function(a, b) {
    return a * b;
}
console.log(add1(2, 10));

//3  arrow function
// ES6
// no function keyword
// no return keyword
// no curly braces
// no parameter brackets

const add3  = (t1,t2) => t1+t2;

console.log(add3(2, 30));    

// 4. function constructor
// not recommended
// not used in modern JS

const add4 = new Function('a', 'b', 'return a+b');
console.log(add4(2, 40));