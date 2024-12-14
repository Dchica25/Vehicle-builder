# Vehicle Management CLI Application (TypeScript)

This is a command-line interface (CLI) application written in **TypeScript** that allows users to create and manage vehicles. The application supports multiple vehicle types (Car, Truck, and Motorbike) and lets users perform actions such as starting, driving, and inspecting vehicles. It is designed to be extensible and provides a user-friendly CLI experience.

## Features

- **Create a New Vehicle**: Users can create a new vehicle by selecting the type (Car, Truck, Motorbike) and entering relevant details.
- **Select an Existing Vehicle**: Users can select a previously created vehicle from a list.
- **Perform Actions on Vehicles**: Once a vehicle is created or selected, users can perform actions such as:
  - Start the vehicle
  - Drive the vehicle
  - Stop the vehicle
  - Inspect the vehicle details
- **Command-Line Interaction**: The application is designed to run in a command-line interface for quick interaction.

## Vehicle Types

The application supports three types of vehicles:

- **Car**: Includes details like make, model, year, and number of doors.
- **Truck**: Includes details like make, model, year, and capacity.
- **Motorbike**: Includes details like make, model, year, and engine size.

## Requirements


## Setup Instructions

### Clone the Repository:

```bash
git clone <repository-url>
cd <repository-folder>
Install Dependencies:
First, install the necessary dependencies:

bash
Copy code
npm install
Compile TypeScript:
The application is written in TypeScript, so you’ll need to compile it before running:

bash
Copy code
npm run build
Run the Application:
To start the CLI application:

bash
Copy code
npm start
This will start the application, and you'll be prompted to create a new vehicle or select an existing vehicle.

Usage
Step 1: Choose Vehicle Creation or Selection
When prompted with:


Would you like to:
1. Create a new vehicle
2. Select an existing vehicle
Type 1 to create a new vehicle, or 2 to select an existing vehicle.
Step 2: Choose Vehicle Type
If you choose to create a new vehicle, the following options will appear:


Please choose a vehicle type:
1. Car
2. Truck
3. Motorbike
Select the vehicle type by entering 1, 2, or 3.
Step 3: Enter Vehicle Details
Once a vehicle type is chosen, you'll be prompted to enter the vehicle details. Depending on the type of vehicle, the details will vary:

For Car: Make, Model, Year, Number of Doors
For Truck: Make, Model, Year, Capacity
For Motorbike: Make, Model, Year, Engine Size
Step 4: Perform Actions with the Vehicle
Once a vehicle is created or selected, you can perform the following actions:

What would you like to do with the [vehicle make] [vehicle model]?
1. Start the vehicle
2. Drive the vehicle
3. Stop the vehicle
4. Inspect vehicle details
Type 1 to start the vehicle.
Type 2 to drive the vehicle (you’ll see an action message like "Driving [vehicle make] [vehicle model].").
Type 3 to stop the vehicle.
Type 4 to view the vehicle’s details.
Step 5: Repeat or Exit
After performing an action, you can choose to:

Perform another action or
Exit the application.
Example Run
bash
Copy code
1. Create a new vehicle
2. Select an existing vehicle
Choose an option: 1
Choose a vehicle type:
1. Car
2. Truck
3. Motorbike
Enter vehicle type: 1
Enter make: Toyota
Enter model: Corolla
Enter year: 2020
Enter number of doors: 4
Car created successfully!

What would you like to do with the Toyota Corolla?
1. Start the vehicle
2. Drive the vehicle
3. Stop the vehicle
4. Inspect vehicle details
Choose an action: 2
Driving Toyota Corolla.

Do you want to perform another action? (y/n): y

What would you like to do with the Toyota Corolla?
1. Start the vehicle
2. Drive the vehicle
3. Stop the vehicle
4. Inspect vehicle details
Choose an action: 4
Make: Toyota, Model: Corolla, Year: 2020

Do you want to perform another action? (y/n): n
Do you want to exit? (y/n): y
Exiting...
Contributing


License
This project is licensed under the MIT License
