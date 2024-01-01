class Square {
    render() {
        return `<rect x="60" y="10" rx="10" ry="10" width="180" height="180"/>`;
    }
}

class Triangle {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182"/>`;
    }
}

class Circle {
    render() {
        return `<circle cx="50" cy="50" r="100"/>`;
    }
}

module.exports = {Triangle, Square, Circle}