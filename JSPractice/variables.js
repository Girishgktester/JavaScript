var x = 10; // declared globally - 'x' is accessible from anywhere in the script

function test() {
  var y = 20; // declared locally - 'y' is only accessible inside the 'test' function
  console.log(x); // Accessing the global variable 'x' (output: 10)
}

console.log(x); // Accessing the global variable 'x' (output: 10)

var top = "hey JS"; // Declares a global variable 'top' and assigns it "hey JS"

function test1() {
  var pop = "Hello JS"; // Declares a local variable 'pop' inside 'test1'
  console.log(pop); // Prints the value of 'pop' (output: Hello JS)
}

test1(); // Calls the 'test1' function
console.log(top); // Prints the value of the global variable 'top' (output: hey JS)

var browser = "Chrome"; // Declares a global variable 'browser' and assigns it "Chrome"
var browser = "Firefox"; // Redeclares the *same* global variable 'browser' and assigns it "Firefox".  The previous value ("Chrome") is overwritten.

console.log(browser); // Prints the current value of 'browser' (output: Firefox)

browser = "Safari"; // Reassigns the value of the existing global variable 'browser' to "Safari"

console.log(browser); // Prints the new value of 'browser' (output: Safari)

var g;  // default value of g is undefined - Variables declared with var are hoisted and initialized with undefined

console.log(g); // Prints the default value of 'g' (output: undefined)

// issue with Var

var flag = "Tom"; // Declares a global variable 'flag' and assigns it "Tom"

var t1 = 4; // Declares a variable 't1' and assigns it 4
if (t1 > 3) {
  var flag = "Jerry"; // Redeclares 'flag' *within the same scope* due to hoisting and assigns it "Jerry". This overwrites the outer 'flag' variable. This is a common source of bugs.
}

console.log(flag); // Prints the value of 'flag' (output: Jerry) because the 'if' statement's redeclaration of 'flag' overwrites the outer one.


