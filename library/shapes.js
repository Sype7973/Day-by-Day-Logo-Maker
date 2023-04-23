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
      this.cx = 300;
      this.cy = 300;
      this.r = 50;
    }
  
    render() {
      return `circle cx="${this.cx}" cy="${this.cy}" r="${this.r}"`;
    }
  }
  
  // each class will have a render method that will return the SVG string for the shape
  class Square extends Shape {
    constructor() {
      super();
      this.cx = 300;
      this.cy - 300;
    }
    
    render() {
      return `rect x="${this.cx}" y="${this.cy}"`
    }
  }
  
  // each class will have a render method that will return the SVG string for the shape
  class Triangle extends Shape {
    constructor() {
      super();
    }
    
    render() {
      return 'polygon points="150, 18 244, 182 56, 182" fill="blue"/>';
    }
  }

module.exports = {
     Shape, 
     Circle, 
     Square, 
     Triangle
 };