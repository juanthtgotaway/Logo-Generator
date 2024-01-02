class shape {
    constructor() {
        this.color= ""
    }
    setColor(color){
        this.color = (color);
    }
}

class Square extends shape {
    render() {
        return `<rect x="60" y="10" rx="10" ry="10" width="180" height="180" fill="${this.color}"/>`;
    }
}

class Triangle extends shape{
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}

class Circle extends shape {
    render() {
        return `<circle cx="50" cy="50" r="100" fill="${this.color}"/>`;
    }
}

module.exports = {Square, Triangle, Circle}