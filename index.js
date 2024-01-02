const inquirer = require("inquirer");
const fs = require("fs");
const {Square, Triangle, Circle} = require("./lib/shapes")

const questions = [
    {
        type: "input",
        name: "logoText",
        message: "Enter characters for logo (up to 3 max):",
    },
    {
        type: "input", 
        name: "charColor",
        message: "Enter color or HEX code desired for the text:",
    },
    {
        type: "list",
        name: "shapeSelected",
        Message: "Select a shape for your logo:",
        choices: ["Square", "Triangle", "Circle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the color or HEX code desired for the color of the shape:",
    },
];

function init(){
    inquirer.prompt(questions).then((Responses) => {
        console.log("Generated Logo SVG");
    });
}

init()