const inquirer = require("inquirer");
const fs = require("fs");
const {Square, Triangle, Circle} = require("./lib/shapes")
const svg = require("./lib/svg")


function questions() {
    inquirer.prompt([
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
};

questions();
