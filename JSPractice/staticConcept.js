class Car {

    static 'Wheels' = 4;

    constructor(make, model, year, fuelType) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;

    }

    static stopEngine() {
        console.log('Engine Stopped');
    }

    driver() {
        console.log('Driving' + this.model);
    }
}
const car = new Car('Audi', 'A6', 2021, 'Petrol');


console.log(Car.stopEngine());
// call static function using class name
// non static function can be called using object of the class
// static property can be accessed using class name
//
