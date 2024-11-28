class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge() {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - this.year;
        // console.log(currentYear, carAge);
        return carAge;
    }
}

const car = new Car("Honda", "Civic", 2018);
const getAge: number = car.getCarAge();
console.log(getAge);
