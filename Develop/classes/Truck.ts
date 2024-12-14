// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declaring properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor that accepts properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Calling the constructor of the parent class (Vehicle)
    super();

    // Initializing properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Ensure the wheels array has 4 elements, creating 4 default Wheel objects if not
    if (wheels.length !== 4) {
      this.wheels = [
        new Wheel(1, 'BrandA', 'TireBrandA'),
        new Wheel(2, 'BrandB', 'TireBrandB'),
        new Wheel(3, 'BrandC', 'TireBrandC'),
        new Wheel(4, 'BrandD', 'TireBrandD'),
      ];
    } else {
      this.wheels = wheels;
    }
  }

  // Implementing the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model of the vehicle being towed
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;

    // Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The truck is towing ${vehicleDetails}`);
    } else {
      console.log(`The ${vehicleDetails} is too heavy to be towed by this truck`);
    }
  }

  // Overriding the printDetails method from the Vehicle class
  override printDetails(): void {
    // Calling the parent class printDetails method
    super.printDetails();

    // Logging the details of the Truck
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(`Wheels:`);
    this.wheels.forEach((wheel, index) => {
      console.log(`  ${index + 1}. Wheel - Diameter: ${wheel.diameter}"`);
    });
  }
}

// Export the Truck class as the default export
export default Truck;
