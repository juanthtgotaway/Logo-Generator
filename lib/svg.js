//Used to define class name that will be referenced in the index.js file
class Svg {
    constructor() {
        //empty string for information user inputs that will be placed later on 
        this.text = "";
        this.shape = "";
    }

    //Method to render the SVG as a sting once all information is input
    render() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

    //Method used to store input entered for the SVG, it also has error that if length is more than 3 characters long it will shoot out error. if not then it will use the this.text to store the information so it renders it in the SVG class
    setText(textInput, textColor) {
        if(textInput.length > 3) {
            throw err("No more than 3 characters allowed");
        }
        this.text = `<text x="150" y="130" font-size="45" text-anchor="middle" fill="${textColor}">${textInput}</text></svg>`
    }
    //shape user entered for the logo
    setShape(shapeSvg) {
        this.shape = shapeSvg.render();
    }
};

//export so it can be used/referenced in other parts
module.exports = Svg;
