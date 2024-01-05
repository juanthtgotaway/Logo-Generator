//imports shape classes
const {Square, Triangle, Circle} = require('./shapes')

//test for square with red background. 
describe('Square', () => {
    test("Should pass if a red square is generated", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<rect x="60" y="25" rx="10" ry="10" width="180" height="180" fill="red"/>`);
    });
});

//test for triangle with blue background
describe('Triangle', () => {
    test("Should pass if a orange triangle is generated", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
    });
});


//tests for circle with hex code of fff00
describe('Circle', () => {
    test("Should pass if a yellow circle is generated", () => {
        const shape = new Circle();
        shape.setColor("FFFF00");
        expect(shape.render()).toEqual(`<circle cx="150" cy="55%" r="100" fill="FFFF00"/>`);
    });
});