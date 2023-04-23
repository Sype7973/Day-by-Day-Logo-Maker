// create a shape class that is the parent class for all shapes that creates an SVG string to create the shape - BOILER PLATE atm
class Shape {
  constructor() {

  }
  
  render() {
    return '';
  }
}

// each class will have a render method that will return the SVG string for the shape
class Circle extends Shape {
  constructor() {
    super();
    this.cx = this.cy = this.r = 100;
  }

  render() {
    return `circle cx="${this.cx}" cy="${this.cy}" r="${this.r}"`;
  }
}

// each class will have a render method that will return the SVG string for the shape
class Square extends Shape {
  constructor() {
    super();
    this.cx = this.cy = 0;
    this.cw = this.ch = 200;
  }
  
  render() {
    return `rect x="${this.cx}" y="${this.cy}" width="${this.cw}" height="${this.ch}"`
  }
}

// each class will have a render method that will return the SVG string for the shape
class Triangle extends Shape {
  constructor() {
    super();
  }
  
  render() {
    return 'polygon points="0, 200 200, 200 100, 0"';
  }
}

module.exports = {
   Shape, 
   Circle, 
   Square, 
   Triangle
};