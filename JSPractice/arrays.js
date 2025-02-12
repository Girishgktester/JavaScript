let myArray = []
let number = [1, 2, 3, 4, 5]
let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

let lang = ['C', 'C++', 'Java', 'Python', 'JavaScript']
//push method  

lang.push('Ruby');  // add an element to the end of the array
console.log(lang);

lang.push('PHP', 'Go');
console.log(lang);

number.pop();  // remove the last element
console.log(number);

//shift method 
let firstFruit = fruits.shift();  // remove the first element from the array
console.log(firstFruit);

// unshift method
fruits.unshift('grape');  // add an element to the beginning of the array
console.log(fruits);

//splice method
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 1, 'Feb');  // insert 'Feb' at index 1
console.log(months);
// remove the index 1 and remove 1 element from the array and in the index 1 insert 'Feb'

months.splice(1, 2, 'Feb');  // insert 'Feb' at index 1
console.log(months);
// remove the index 1 and remove 2 element from the array and in the index 1 insert 'Feb'

// slice

let pop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sliced = pop.slice(2, 5);  // slice from index 2 to 5 (5 not included)
console.log(sliced);  // Output: [3, 4, 5]

// concat
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let arr3 = arr1.concat(arr2);
console.log(arr3);  // Output: ['a', 'b', 'c', 'd', 'e', 'f']

//indexOf
let fruits1 = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
let index = fruits1.indexOf('mango');
console.log(index);  // Output: 2
// if the value is not present it will return -1

//lastIndexOf
let fruits2 = ['apple', 'banana', 'mango', 'orange', 'strawberry', 'banana'];
let index1 = fruits2.lastIndexOf('banana');
console.log(index1);  // Output: 5

// includes
let testarray = ["admin", "user", "editor"];
let result = testarray.includes("admin");
let result1 = testarray.includes("admin2");
console.log(result1);  // Output: false
console.log(result);  // Output: true

// forEach
let numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(function (element) {
    console.log(element);
});


