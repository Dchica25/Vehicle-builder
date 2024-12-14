// Importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js"; // Assuming Wheel is necessary for Motorbike creation

// Define the Cli class
class Cli {
  vehicles: (Car | Truck | Motorbike)[]; // Array that can hold different types of vehicles
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // Static method to generate a vin
  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // Method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "selectedVehicleVin",
          message: "Select a vehicle to perform an action on",
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        this.selectedVehicleVin = answers.selectedVehicleVin;
        this.performActions();
      });
  }

  // Method to create a vehicle (Car, Truck, or Motorbike)
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "vehicleType",
          message: "Select a vehicle type",
          choices: ["Car", "Truck", "Motorbike"], // Update choices array
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === "Car") {
          this.createCar();
        } else if (answers.vehicleType === "Truck") {
          this.createTruck();
        } else if (answers.vehicleType === "Motorbike") {
          this.createMotorbike();
        }
      });
  }

  // Method to create a car
  createCar(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: "Enter Color" },
        { type: "input", name: "make", message: "Enter Make" },
        { type: "input", name: "model", message: "Enter Model" },
        { type: "input", name: "year", message: "Enter Year" },
        { type: "input", name: "weight", message: "Enter Weight" },
        { type: "input", name: "topSpeed", message: "Enter Top Speed" },
      ])
      .then((answers) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;
        this.performActions();
      });
  }

  // Method to create a truck
createTruck(): void {
  inquirer
    .prompt([
      { type: "input", name: "color", message: "Enter Color" },
      { type: "input", name: "make", message: "Enter Make" },
      { type: "input", name: "model", message: "Enter Model" },
      { type: "input", name: "year", message: "Enter Year" },
      { type: "input", name: "weight", message: "Enter Weight" },
      { type: "input", name: "topSpeed", message: "Enter Top Speed" },
      { type: "input", name: "towingCapacity", message: "Enter Towing Capacity" },
    ])
    .then((answers) => {
      const truck = new Truck(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        [], // Correctly passing an empty array for wheels
        parseInt(answers.towingCapacity) // Correctly passing towing capacity as a number
      );
      this.vehicles.push(truck);
      this.selectedVehicleVin = truck.vin;
      this.performActions();
    });
}


  // Method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        { type: "input", name: "color", message: "Enter Color" },
        { type: "input", name: "make", message: "Enter Make" },
        { type: "input", name: "model", message: "Enter Model" },
        { type: "input", name: "year", message: "Enter Year" },
        { type: "input", name: "weight", message: "Enter Weight" },
        { type: "input", name: "topSpeed", message: "Enter Top Speed" },
        { type: "input", name: "frontWheelDiameter", message: "Enter Front Wheel Diameter" },
        { type: "input", name: "rearWheelDiameter", message: "Enter Rear Wheel Diameter" },
      ])
      .then((answers) => {
        const frontWheel = new Wheel(parseFloat(answers.frontWheelDiameter), "BrandA", "TireBrandA");
        const rearWheel = new Wheel(parseFloat(answers.rearWheelDiameter), "BrandB", "TireBrandB");
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [frontWheel, rearWheel]
        );
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
      });
  }

  // Method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "Select an action",
          choices: [
            "Print details",
            "Start vehicle",
            "Accelerate 5 MPH",
            "Decelerate 5 MPH",
            "Stop vehicle",
            "Turn right",
            "Turn left",
            "Reverse",
            "Tow a vehicle", // Added Tow option for trucks
            "Select or create another vehicle",
            "Exit",
          ],
        },
      ])
      .then((answers) => {
        for (let i = 0; i < this.vehicles.length; i++) {
          if (this.vehicles[i].vin === this.selectedVehicleVin) {
            switch (answers.action) {
              case "Print details":
                this.vehicles[i].printDetails();
                break;
              case "Start vehicle":
                this.vehicles[i].start();
                break;
              case "Accelerate 5 MPH":
                this.vehicles[i].accelerate(5);
                break;
              case "Decelerate 5 MPH":
                this.vehicles[i].decelerate(5);
                break;
              case "Stop vehicle":
                this.vehicles[i].stop();
                break;
              case "Turn right":
                this.vehicles[i].turn("right");
                break;
              case "Turn left":
                this.vehicles[i].turn("left");
                break;
              case "Reverse":
                this.vehicles[i].reverse();
                break;
              case "Tow a vehicle":
                if (this.vehicles[i] instanceof Truck) {
                  this.promptTowAction(i);
                } else {
                  console.log("Only trucks can tow vehicles.");
                  this.performActions();
                }
                return;
              case "Select or create another vehicle":
                this.startCli();
                return;
              case "Exit":
                this.exit = true;
                return;
            }
          }
        }
        if (!this.exit) {
          this.performActions();
        }
      });
  }

  // Method to prompt the user to select a vehicle to tow
  promptTowAction(truckIndex: number): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "vehicleToTow",
          message: "Select a vehicle to tow",
          choices: this.vehicles
            .filter((vehicle) => vehicle.vin !== this.vehicles[truckIndex].vin)
            .map((vehicle) => {
              return {
                name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                value: vehicle.vin,
              };
            }),
        },
      ])
      .then((answers) => {
        const vehicleToTow = this.vehicles.find((vehicle) => vehicle.vin === answers.vehicleToTow);
        if (vehicleToTow) {
          const truck = this.vehicles[truckIndex] as Truck;
          truck.tow(vehicleToTow);
          this.performActions();
        }
      });
  }

  // Method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "CreateOrSelect",
          message: "Would you like to create a new vehicle or perform an action on an existing vehicle?",
          choices: ["Create a new vehicle", "Select an existing vehicle"],
        },
      ])
      .then((answers) => {
        if (answers.CreateOrSelect === "Create a new vehicle") {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// Export the Cli class
export default Cli;
