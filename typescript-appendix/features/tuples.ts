const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number]; // Type alias to simplify tuple creation

const pepsi = ['brown', true, 40];      // Infered type (string|boolean|number)[] does not enforce order to match tuple
pepsi[2] = 'brown';                     // Error not caught

const pepsiTuple: [string, boolean, number] = ['brown', true, 40];
pepsiTuple[2] = 'brown';                // Error caught

const spriteTupe: Drink = ['clear', true, 40];