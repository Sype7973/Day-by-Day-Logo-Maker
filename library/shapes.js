// import packages and functions
const fs = require('fs');


// create a shape class that is the parent class for all shapes that creates an SVG string to create the shape - BOILER PLATE atm
class Shape {
    constructor() {

    }
    render() {
        return this.svg;
    }
}

class circle extends Shape {
    constructor() {
        super();
    }
    render() {
        return this.svg;
    }
}

class square extends Shape {
    constructor() {
        super();
    }
    render()    {
        return this.svg;
    }
}
