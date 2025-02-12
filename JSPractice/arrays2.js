// every returns true if all elements in the array pass the test
let numbers2 = [1, 2, 3, 4, 5];
let result2 = numbers2.every(function (element) {
    return element > 0;
});
console.log(result2);  // Output: true

// some returns true if at least one element in the array passes the test
let numbers3 = [1, 2, 3, 4, 5];
let result3 = numbers3.some(function (element) {
    return element > 4;
});
console.log(result3);  // Output: true

//find returns the first element that passes the test

let numbers4 = [1, 2, 3, 4, 5];
let result4 = numbers4.find(function (element) {
    return element > 2;
});
console.log(result4);  // Output: 3

// indexOf  returns the index of the first element that passes the test
let numbers5 = [1, 2, 3, 4, 5];
let result5 = numbers5.indexOf(3);
console.log(result5);  // Output: 2

// lastIndexOf returns the index of the last element that passes the test
let numbers6 = [1, 2, 3, 4, 5, 3];
let result6 = numbers6.lastIndexOf(3);
console.log(result6);  // Output: 5

// map returns a new array with the results of the function
let numbers7 = [1, 2, 3, 4, 5];
let result7 = numbers7.map(function (element) {
    return element * 2;
});
console.log(result7);  // Output: [2, 4, 6, 8, 10]

//reverse reverses the array
let numbers8 = [1, 2, 3, 4, 5];
let result8 = numbers8.reverse();
console.log(result8);  // Output: [5, 4, 3, 2, 1]

//filter returns a new array with the elements that pass the test
let numbers9 = [1, 2, 3, 4, 5];
let result9 = numbers9.filter(function (element) {
    return element > 2;
});
console.log(result9);  // Output: [3, 4, 5]

//sorted returns a new array with the elements sorted
let numbers10 = [5, 2, 3, 4, 1];
let result10 = numbers10.sort();
console.log(result10);  // Output: [1, 2, 3, 4, 5]
