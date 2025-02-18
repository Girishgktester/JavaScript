class Vechile {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `Make : ${this.make} Model : ${this.model} Year : ${this.year}`;
    }

    startEngine() {
        console.log('Engine Started ' + this.make);
    }

    stopEngine() {
        console.log('Engine Stopped');
    }

}

// child sub clsss

class CarT extends Vechile {
    constructor(make, model, year, fuelType) {
        super(make, model, year);
        this.fuelType = fuelType;
    }

    driveCar() {
        console.log('Driving' + this.model);
    }
}

class Truck extends Vechile {
    constructor(make, model, year, capacity) {
        super(make, model, year);
        this.capacity = capacity;
    }

    driverTruck() {
        console.log('Loading ' + this.capacity);
    }

}

// Creating object of Car class

const car = new CarT('Audi', 'A6', 2021, 'Petrol');
const truck = new Truck('Volvo', 'V8', 2021, '1000kg');

car.startEngine();

console.log(car.getInfo());

truck.startEngine();

console.log(truck.getInfo());

truck.driverTruck();

