//defines the shape class. This creates an empty string for the information user inputs from prompt
class shape {
    constructor() {
        this.color= ""
    }
    setColor(color){
        this.color = (color);
    }
}

//defines the square value that will be generated if shape selected is square. Has extension that includes the shape class. 
class Square extends shape {
    render() {
        return `<rect x="60" y="25" rx="10" ry="10" width="180" height="180" fill="${this.color}"/>`;
    }
}
//defines the Triangle value that will be generated if shape selected is Triangle. Has extension that includes the shape class. 
class Triangle extends shape{
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}
//defines the Circle value that will be generated if shape selected is Circle. Has extension that includes the shape class. 
class Circle extends shape {
    render() {
        return `<circle cx="150" cy="55%" r="100" fill="${this.color}"/>`;
    }
}

//export so it can be used/referenced in other parts
module.exports = {Square, Triangle, Circle}