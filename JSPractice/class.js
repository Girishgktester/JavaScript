class Car{

    constructor(name, price, model){
        this.name = name;
        this.price = price;
        this.model = model;
    }


    refuel(){
        console.log(this.name + ' Refueling');
    }
}


const car1 = new Car('Audi', 50000, 'A6');
console.log(car1.name);
console.log(car1.price);
console.log(car1.model);
car1.refuel();

const  c2 = new car('BMW', 60000, 'X5');
console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
c2.refuel();


