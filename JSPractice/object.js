// 1. Object creation using literials 

const user = {
    name: 'John',
    age: 30,
    email: 'xyz@gmail.com'
}

console.log(user.name)

//2. usinig constructor function
function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Audi', 'A6', 2021);
console.log(car1.name);
console.log(car1.model);
console.log(car1.year);

//3. class style
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('John', 30);
console.log(person1.name);
console.log(person1.age);

//4. Object.create() method
// allowas to create ibject with a prototype

const employeePrototype = {
     printInfo:function(){
        console.log(`Name : ${this.name} Age : ${this.age}`);
     }
    }

    const emp1 = Object.create(employeePrototype);
    emp1.name = 'John';
    emp1.age = 30;
    emp1.printInfo();


    // 5. object creating using the factory function
    // it will retrus an object 

    function createPerson(name, age){
        return {
            name,
            age
        }
    }

    const person2 = createPerson('Jane', 25);
    console.log(person2.name);
    console.log(person2.age);
    

