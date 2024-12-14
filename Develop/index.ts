// Import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles = [];

// TODO: Uncomment once trucks are implemented
// Create truck instance
const truck1 = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

// Will use default wheels for the car
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  [] // default wheels will be created by the constructor
);

// TODO: Uncomment once motorbikes are implemented
// Create motorbike wheels
const motorbike1Wheels = [new Wheel(17, "Michelin", "Pilot Road 4"), new Wheel(17, "Michelin", "Pilot Road 4")];
// Create motorbike instance
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// Push vehicles to the array
// TODO: Uncomment once trucks are implemented
vehicles.push(truck1);
vehicles.push(car1);
// TODO: Uncomment once motorbikes are implemented
vehicles.push(motorbike1);

// Create a new instance of the Cli class
const cli = new Cli(vehicles);

// Start the CLI
cli.startCli();
