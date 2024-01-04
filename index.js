const inquirer = require("inquirer");
const fs = require("fs/promises");
const {Square, Triangle, Circle} = require("./lib/shapes")
const SVG = require("./lib/svg");


const questions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "Enter characters for logo (up to 3 max):",
            },
            {
                type: "input", 
                name: "textColor",
                message: "Enter color or HEX code desired for the text:",
            },
            {
                type: "list",
                name: "shape",
                Message: "Select a shape for your logo:",
                choices: ["Square", "Triangle", "Circle"],
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Enter the color or HEX code desired for the color of the shape:",
            },
        ])
        .then((res) => {
            let renderedShape;

            if (res.shape === "Square") {
                renderedShape = new Square();
            }
            if (res.shape === "Triangle") {
                renderedShape = new Triangle();
            }
            if (res.shape === "Circle") {
                renderedShape = new Circle();
            }
            renderedShape.setColor(res.shapeColor)

            const svg = new SVG();
            svg.setText(res.text, res.textColor);
            svg.setShape(renderedShape);
            return fs.writeFile("./examples/logo.svg", svg.render());
        }).then(() => {
            console.log("Generated logo.svg!");
        })
       
};

questions();
