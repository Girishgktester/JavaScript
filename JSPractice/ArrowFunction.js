// arrow funtion doesnt have any name
// arrow function doesnt have any return keyword
// arrow function doesnt have any curly braces
// arrow function doesnt have any parameter brackets
// arrow function doesnt have any function keyword
// arrow function is used in ES6
// arrow function is used in modern JS
// arrow function is used in async programming
// arrow function is used in functional programming

const squre = (n) => n * n;  // no prameter 
console.log(squre(4));  // Output: 16

// one parameter 
const mesg = () => 'Hello';  // Output: Hello
console.log(mesg());  // Output: Hello

// multiple parameters
const add = (a, b) => a + b;


console.log(add(2, 3));  // Output: 5

const getName = person => `${person.name} ${person.age}`
const person = {
    name: 'John',
    age: 30,
}
console.log(getName(person));  // Output: John 30

const greet = (username = 'guest', age = 18) => `Hello ${username} ${age}`;

console.log(greet());  // Output: Hello guest 18

// rest parameter ... varArgs    
const sum = (...varArgs) => varArgs.reduce((acc, curr) => acc + curr, 0);  // Output: 15
console.log(sum(1, 2, 3, 4, 5));  // Output: 15

const browserDetails = (browser = "chromoe", ...details) => {
    console.log('browser : ${browser}');
    console.log('details', details);

}

browserDetails();
browserDetails('firefox', 'v89', 'mac', '64-bit');





