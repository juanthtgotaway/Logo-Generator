//This code imports all necessary modules and packages to run application 
const inquirer = require("inquirer");
const fs = require("fs/promises");
//imports the classes 
const {Square, Triangle, Circle} = require("./lib/shapes")
const SVG = require("./lib/svg");

//Questions asked using inquirer prompt that wil be used to later help render the logo based off of user input
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
            //renderedShape is used to store information for the shape
            let renderedShape;

            //creates new shape based on information user input above
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

            //Creates svg file and saves it inside of the examples folder as logo.svg
            const svg = new SVG();
            svg.setText(res.text, res.textColor);
            svg.setShape(renderedShape);
            return fs.writeFile("./examples/logo.svg", svg.render());
        }).then(() => {
            //once all is input then generated logo.svg is logged into terminal to show that shape was rendered successfully 
            console.log("Generated logo.svg!");
        })
       
};
//calls the questions to initiate the whole thing
questions();
