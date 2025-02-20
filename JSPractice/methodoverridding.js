class Car {

    constructor(make, model, year, fuelType) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;

    }

    startEngine() {
        console.log('Engine Started ' + this.make);
    }
}

class Audi extends Car {
    startEngine() {
        console.log('Engine Started for audi');
    }

    autoparking() {
        console.log('Auto Parking Audi');
    }
}


const carT = new Audi('Tata', 'A6', 2021, 'Petrol');
carT.startEngine();
carT.autoparking();


const car1 = new Car('Tesla', 'A6', 2021, 'Petrol');
car1.startEngine();

// Method Overriding allows a subclass to provide a specific implementation of a method already provided by its superclass. 
// When a method in a subclass has the same name, parameters, and return type as a method in its superclass, it overrides the superclass method.

// - Parent can access parent methods and properties
// - Parent can't access child methods or properties
// - Parent can't override child methods or add new methods

// - Child can access parent methods and properties
// - Child can override parent methods
// - Child can add new methods
