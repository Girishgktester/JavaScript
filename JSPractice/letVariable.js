let m = "hey Tom"; // Declares a block-scoped variable 'm' and assigns it "hey Tom"

let time = 4; // Declares a block-scoped variable 'time' and assigns it 4

if (time > 3) {
  let m1 = "Jerry"; // Declares a block-scoped variable 'm1' *inside* the if block. It's only accessible within this block.
}

console.log(m); // Prints the value of the *global* 'm' (output: hey Tom). 'm1' is not accessible here because it's block-scoped and declared inside the if block.

let len = 50; // Declares a block-scoped variable 'len' and assigns it 50
len = 60; // Reassigns the value of 'len' to 60

console.log(len); // Prints the value of 'len' (output: 60)

// Example with const
const PI = 3.14159; // Declares a constant variable 'PI' and assigns it a value. Constants cannot be reassigned.
// PI = 3.14; // This would cause an error. You cannot reassign a const variable.

let radius = 5;
let area = PI * radius * radius; // Calculates area using the constant PI
console.log(area); // Prints the area (output: 78.53975)

// Another let example

let message = "Hello";
if (true) {
  let message = "Goodbye"; // Declares a *new*, block-scoped variable also named 'message'. This does not affect the outer 'message'.
  console.log(message); // Prints "Goodbye" from *inside* the if block
}
console.log(message); // Prints "Hello" from *outside* the if block. The outer message was not changed.