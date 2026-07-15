const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Mike", age: 28 }
];

users.map((n1) => {
    console.log(n1.name)
})


const names = users.map(user =>user.name)

let text = names.toString();

console.log(text.toUpperCase());


const age = users.map(ages =>ages.age)

console.log(age)


const agefilter = users.map(ages =>ages.age >5)

console.log(agefilter)

const result = users.map(
  user => `${user.name} is ${user.age} years old`
);
console.log(result)


const products = [
  { name: "Jeans", price: 250 },
  { name: "Shirt", price: 700 },
  { name: "T-Shirt", price: 500 },
  { name: "Shoes", price: 1500 }
];


//Find the product named "Jeans".


const pname = products.filter((e1 ) => e1.name === "Jeans")
console.log(pname)




const pp = products.filter((e1 ) => e1.price === 1500)
console.log(pp)

const pp1 = products.filter((e1 ) => e1.price >= 500)
console.log(pp1)

const pp2 = products.filter((e1 ) => e1.name.startsWith('T'))
console.log(pp2)

const pp3 = products.filter((e1 ) => e1.name.length > 5)
console.log(pp3)