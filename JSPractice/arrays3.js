let number  = [1, 2, 3, 4, 5];
let double = number.map(function (element) {
    return element * 2;
});
console.log(double);  // Output: [2, 4, 6, 8, 10]
// map returns a new array with the results of the function

// F -> C conversion
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
let celcius = fahrenheit.map(function (element) {
    return Math.round((element - 32) * 5 / 9);
});
console.log(celcius);  // Output: [-18, 0, 7, 10, 24, 27, 37, 49]

// filter
let numbers = [1, 2, 3, 4, 5];
let odd = numbers.filter(function (element) {
    return element % 2 === 0;
});

console.log(odd);  // Output: [1, 3, 5]

let employees = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 40 }
];
let young = employees.filter(function (element) {
    return element.age < 30;
});
console.log(young);  // Output: [{ name: 'Jane', age: 25 }]
// filter returns a new array with the elements that pass the test


// reduce
let numbers1 = [1, 2, 3, 4, 5];
let sum = numbers1.reduce(function (accumulator, element) {
    return accumulator + element;
});
console.log(sum);  // Output: 15
