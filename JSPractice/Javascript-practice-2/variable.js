let x = 'abc';

function myFunction() {
    let y = 'def';
    console.log(x + y);
}   

console.log(x);  // Output: 'abc'


var browser = 'chrome';
var browser = 'firefox';  // This will not throw an error, but it will overwrite the previous value of 'browser'

console.log(browser);  // Output: 'firefox'

browser = 'safari';  // This will also overwrite the previous value of 'browser'
console.log(browser);  // Output: 'safari'

var g;

console.log(g);  // Output: undefined

g='Girish';
console.log(g);  // Output: 'Girish' 

  

////////========let and const========////////



let name = 'John';

let time = 4;

if(time >3){
    let msg = 'hey';
    console.log(msg);  // Output: 'hey'
}

// console.log(msg);  // Output: ReferenceError: msg is not defined

const pi = 3.14;
// pi = 3.14159;  // This will throw an error because 'pi' is a constant and cannot be reassigned
 