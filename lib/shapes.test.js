const {Square, Triangle, Circle} = require('./shapes')

describe('Square', () => {
    test("Should pass if a red square is generated", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<rect x="60" y="10" rx="10" ry="10" width="180" height="180" fill="red"/>`);
    });
});

describe('Triangle', () => {
    test("Should pass if a orange triangle is generated", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
    });
});

describe('Circle', () => {
    test("Should pass if a yellow circle is generated", () => {
        const shape = new Circle();
        shape.setColor("FFFF00");
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="100" fill="FFFF00"/>`);
    });
});