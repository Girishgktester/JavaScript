// at the run time it will decide what type of value the variable is holding
// JS is runtime language
// everythig will be decided in the runtime

let x = 30;


console.log(typeof x);


x = 'hello';

x = {
    name: 'John',
}

let flag = true
console.log(typeof flag);
let type = typeof flag;
console.log(type);

const arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
console.log(arr instanceof Array);


function add(a, b) {
    return a + b;
}
console.log(typeof add);


