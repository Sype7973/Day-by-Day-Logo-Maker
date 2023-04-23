// import { Circle, Square, Triangle } from "../library/shapes.js";
const { Circle, Square, Triangle } = require("../library/shapes.js");

describe("Circle render", () => {
  it("should return a string", () => {
    const circle = new Circle();
    expect(typeof circle.render()).toBe("string");
  });
});

describe("Square render", () => {
  it("should return a string", () => {
    const square = new Square();
    expect(typeof square.render()).toBe("string");
  });
});

describe("Triangle render polygon points", () => {
  it("should return a SVG measurement for the triangle class", () => {
    const triangle = new Triangle();
    expect(triangle.render()).toBe(
      `polygon points="0, 200 200, 200 100, 0"`
    );
  });
});

describe ("Circle render", () => {
    it("should return a SVG measurement for the circle class", () => {
        const circle = new Circle();
        expect(circle.render()).toBe(`circle cx="100" cy="100" r="100"`);
    });
    }
);

describe ("Square render", () => {
    it("should return a SVG measurement for the square class", () => {
        const square = new Square();
        expect(square.render()).toBe(`rect x="0" y="0" width="200" height="200"`);
    });
    }
);
