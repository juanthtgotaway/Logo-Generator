class Svg {
    constructor() {
        this.text = "";
        this.shape = "";
    }

    render() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

    setText(textInput, textColor) {
        if(textInput.length > 3) {
            throw err("No more than 3 characters allowed");
        }
        this.text = `<text x="150" y="130" font-size="45" text-anchor="middle" fill="${textColor}">${textInput}</text></svg>`
    }

    setShape(shapeSvg) {
        this.shape = shapeSvg.render();
    }
};

module.exports = Svg;
