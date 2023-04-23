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

describe("Triangle render", () => {
  it("should return a SVG measurement for triangle and its fill colour", () => {
    const triangle = new Triangle();
    expect(triangle.render()).toBe(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
    );
  });
});

