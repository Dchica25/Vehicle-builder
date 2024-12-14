// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // Declaring properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor that accepts properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Calling the constructor of the parent class (Vehicle)
    super();

    // Initializing properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Ensure the wheels array has 2 elements, creating default Wheel objects if not
    if (wheels.length !== 2) {
      this.wheels = [
        new Wheel(1, 'defaultBrand', 'defaultTireBrand'),
        new Wheel(2, 'defaultBrand', 'defaultTireBrand'),
      ];
    } else {
      this.wheels = wheels;
    }
  }

  // Implementing the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Overriding the printDetails method from the Vehicle class
  override printDetails(): void {
    // Calling the parent class printDetails method
    super.printDetails();

    // Logging the details of the Motorbike
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Wheels:`);
    this.wheels.forEach((wheel, index) => {
      console.log(`  ${index + 1}. Wheel - Brand: ${wheel.brand}, Diameter: ${wheel.diameter}"`);
    });
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
