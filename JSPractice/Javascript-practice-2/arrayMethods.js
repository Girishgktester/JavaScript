let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 101];

number.map((e1) => {

    console.log(e1 + 1)
})

number.map((e) => {
    console.log(e * 2);
});

let employee = [
    { name: 'John', age: 25, department: 'IT' },
    { name: 'Jane', age: 30, department: 'HR' },
    { name: 'Bob', age: 35, department: 'IT' }
];

let itEmployees = employee.filter((emp) => emp.department === 'IT');


let itEmp = employee.filter((abc) => abc.department === 'IT');
console.log(itEmp);

let itempAge = employee.filter((empage) => empage.age >= 35);
console.log(itempAge);



//reduce 
let numb = [1, , 2, 3, 4, 5]


// acc will hold the result afdter each n every iteratrion
//inital value wqe have to pass


console.log(numb.reduce((acc, num) => acc + num, 0))

let topArray = [1, 3, 4, 5, 6, 90]

const topnumnber = topArray.reduce((acc1, num2) => {

    if (acc1 < num2) {
        return num2;
    } else {
        return acc1
    }
}, topArray[0])

console.log(topnumnber)


let cartitesm = [

    { iteamName: 'Jeans', price: 250, category: 'Mens' },
    { itemsName: 'Shirt', price: 347, category: 'Mens' },
    { itemsName: 'T-Shirt', price: 500, category: 'Mens' },
]

let cartCount = cartitesm.reduce((total , item) => total + item.price,0) 

console.log(cartCount)
let cartCategory = cartitesm.reduce((total , item) =>{

    if(total === "Jeans"){
        return total;
    }else{
        return item;
    }

}, cartitesm[0])

console.log(cartCategory)






