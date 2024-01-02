const {Square} = require('./shapes')

describe('Square', () => {
    test("Should pass if a red square is generated", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<rect x="60" y="10" rx="10" ry="10" width="180" height="180" fill="red"/>`);
    });
});