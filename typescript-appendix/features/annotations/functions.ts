const add = (a: number, b: number): number => {
    return a + b;
};

// Always annotate function retrun types
const subtract = (a: number, b :number) => {        // Infered return type of void; no lint error for missing return statement
    a - b;
};

function divide(a:number, b:number): number {
    return a / b;
}

const multiply = function(a:number, b:number): number {
    return a * b;
};

const logger = (message: string): void => {         // Void return type also supports null and undefined return types;
    console.log(message);
}

const throwError = (message: string): never => {    // Never return type indicates the function will never return a value
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

// Function call with annotated Object param
const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

// Function call with ES5 destructured Object params
const es5LogWeather = ({date, weather}: {date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}