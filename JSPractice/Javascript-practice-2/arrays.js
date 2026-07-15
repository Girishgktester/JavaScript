let arr = [1, 2, 3, 4, 5];

console.log(arr);
arr.push(6);
console.log( arr);

arr.pop();
console.log( arr);

let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

let first = fruits.shift();
console.log(first);

console.log(fruits); 

let country = ['India', 'USA', 'UK', 'Australia'];
country.unshift('Canada');
console.log(country);   

console.log(country.length);   

let animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
console.log(animals);
animals.splice(2, 1, 'giraffe');
console.log(animals);  // Output: ['cat', 'dog', 'giraffe', 'tiger', 'lion']


let slicespop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sliced = slicespop.slice(2, 5);
console.log(sliced);  // Output: [3, 4, 5]

// slice method does not modify the original array, it returns a new array containing the selected elements.
// what slice does is it takes two arguments, the start index and the end index 
// (not included) and returns a new array containing the elements from the start index to the end index (not included).


let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let arr3 = arr1.concat(arr2);
console.log(arr3);  // Output: ['a', 'b', 'c', 'd', 'e', 'f']

let numbers = [1, 2, 3, 4, 5];
let index = numbers.indexOf(3);
console.log('index',index);  // Output: 2

// what indexOf does is it takes an element as an argument and returns the index of the first occurrence of that element in the array. If the element is not found, it returns -1.


let imcdluesnumner =    [1, 2, 3, 4, 5];
let result = imcdluesnumner.includes(3);
console.log(result);  // Output: true


let stringloop = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
stringloop.forEach((e) => {
  console.log(e);
});

//filter 
let numbersfilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbersfilter.filter((num) => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4, 6, 8, 10]

// filter works by taking a callback function as an argument and returns a new array containing all the elements that pass the test implemented by the provided function. In this case, we are checking if the number is even by using the modulus operator (%). If the number is even, it will be included in the new array.

// write simple example of filter

let ages = [12, 17, 20, 25, 30];
let adults = ages.filter((age) => age >= 18);
console.log(adults);  // Output: [20, 25, 30]

// explain above example of filter
// In the above example, we have an array of ages. We use the filter method to create a new array called 'adults'
//  that contains only the ages that are 18 or older. The callback function checks if each age is greater than or equal to 18, 
// and if it is, that age is included in the new 'adults' array. The result is an array of adult ages: [20, 25, 30].

// sort
let numberssort = [5, 2, 9, 1, 5, 6];
numberssort.sort((a, b) => a - b);
console.log(numberssort);  // Output: [1, 2, 5, 5, 6, 9]

// explain above example of sort
// In the above example, we have an array of numbers called 'numberssort'. 
// We use the sort method to sort the array in ascending order.
// The sort method takes a compare function as an argument, which defines the sort order.
// The compare function takes two arguments (a and b) and returns a negative value if a should come before b, 
// a positive value if a should come after b, or 0 if they are equal.
//  In this case, we subtract b from a to sort the numbers in ascending order. 
// The result is a sorted array: [1, 2, 5, 5, 6, 9].