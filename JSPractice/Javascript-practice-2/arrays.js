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