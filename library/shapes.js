// create a shape class that is the parent class for all shapes that creates an SVG string to create the shape
class Shape {
  constructor() {}
  
  render() {
    return '';
  }

  getTextPosition() {
    return { x: 0, y: 0 };
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

  getTextPosition() {
    return { x: this.cx, y: this.cy };
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

  getTextPosition() {
    return { x: this.cx + this.cw / 2, y: this.cy + this.ch / 2 };
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

  getTextPosition() {
    return { x: 100, y: 125 };
  }
}

module.exports = {
   Shape, 
   Circle, 
   Square, 
   Triangle
};