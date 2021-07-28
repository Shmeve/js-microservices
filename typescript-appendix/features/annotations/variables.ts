const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNums: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use Annotations
// 1 - Function returning 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json); // Function infered as 'any'; JSON String could be '5' -> number, 'false' -> boolean, etc
console.log(coordinates);

// 2 - Variable declaration without initalization
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // Uninitialized variable infered as 'any'

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;   // Variable initalized
    }
}

// 3 - Variable whose type cannot be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i =  0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]; // Variable inferred as only boolean from initalization as false;
    }
}