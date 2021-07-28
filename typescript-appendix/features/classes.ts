class Shape {
    name: string = 'Shape';

    constructor(public color: string) {}    // JS short hand to initalize class property color inline as string with value of param color provided

    public print(): void {
        console.log(`I am a ${this.color} ${this.name}...`);
    }
}

class Square extends Shape {
    name: string = `Square`;

    constructor(public sides: number, color: string) {  // no 'public' initalization to keep color scoped to parent Shape class
        super(color);
    }

    public print(): void {
        console.log(`I am a ${this.color} ${this.name} with ${this.sides} sides...`);
    }
}

const s1 = new Shape('red');
const s2 = new Square(4, 'blue');

s1.print();
s2.print();