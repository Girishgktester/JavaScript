// 1. const with primitive types (strings, numbers, booleans)
const name = "Alice";
// name = "Bob"; // This will cause an error: Assignment to constant variable.
console.log(name);

// 2. const with arrays - you can't reassign the array, but you CAN modify its contents
const numbers = [1, 2, 3];
// numbers = [4, 5, 6]; // This will cause an error: Assignment to constant variable.
numbers.push(4); // This is allowed - modifying the array's contents
console.log(numbers); // Output: [1, 2, 3, 4]

// 3. const with objects - you can't reassign the object, but you CAN modify its properties
const person = {
  firstName: "John",
  lastName: "Doe"
};
// person = { firstName: "Jane", lastName: "Smith" }; // This will cause an error: Assignment to constant variable.
person.firstName = "Jane"; // This is allowed - modifying the object's properties
console.log(person); // Output: {firstName: "Jane", lastName: "Doe"}

// 4. const in a loop (common mistake)
// const i = 0;
// for (const i = 0; i < 10; i++) {  //Error will happen here because we can't change the value of i so the loop can not increment
//   console.log(i);
// }

// 5. Block scope example
const x = 10;

if (true) {
  const x = 20; // Allowed, because this 'x' is in a different block scope
  console.log(x); // Output: 20
}

console.log(x); // Output: 10 (the original x is unchanged)

//6. const with function

const myFunction = function() {
  console.log("This is a function declared as a constant.");
};

myFunction(); // Output: This is a function declared as a constant.
// myFunction = function() { //This will produce error
//   console.log("Trying to reassign");
// };
