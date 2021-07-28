interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    }
};

// Annotated function with full object structure; long and repetitive
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

// Annotated function simplified with Interface
const printVehicleWithInterface = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
}

printVehicle(oldCivic);
printVehicleWithInterface(oldCivic);

// 
// How Interfaces help with reuse
// 
interface Reportable {
    summary(): string
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

// Generic reusable print function that can support both Drinks and Vehicles as long as they are Reportable
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic); // Print Vehicle
printSummary(drink);    // Print Drink