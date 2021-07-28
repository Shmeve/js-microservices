const carMakers = ['ford', 'toyota', 'chevy'];  // Infered string[]
const dates = [new Date(), new Date()];         // Infered Date[]
const emtpyArr: string[] = [];                  // Empty arry init should be annotated

const carsByMake = [    // Infered 2D array of strings
    ['f150'],
    ['carolla'],
    ['camaro']
];
const empty2dArr: string[][] = [];

// Helps infere types on values pulled from Arrs
const carMaker = carMakers[0];
const popCarMaker = carMakers.pop();
const aSingleCar = carsByMake[0][0];
const arrOfCars = carsByMake.pop();

// Prevents incompatible values
carMakers.push(100);    // Fails on number insert

// Help with Array.map()
carMakers.map((c: string): string => {
    return c.toUpperCase(); // Applies autocomplete for String type
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()]; // Would be infered as Date[], annotation allows for strings as well
importantDates.push('2030-10-10');                      // Add String
importantDates.push(new Date());                        // Add Date
importantDates.push(100)                                // Fails on number insert