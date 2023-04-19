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
    }
    
    render() {
      return '';
    }
  }
  
  // each class will have a render method that will return the SVG string for the shape
  class Square extends Shape {
    constructor() {
      super();
    }
    
    render() {
      return '';
    }
  }
  
  // each class will have a render method that will return the SVG string for the shape
  class Triangle extends Shape {
    constructor() {
      super();
    }
    
    render() {
      return '';
    }
  }

module.exports = {
     Shape, 
     Circle, 
     Square, 
     Triangle
 };