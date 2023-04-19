// import test functions
const { Circle, Square, Triangle } = require("../library/shapes.js");

// creeate test functionalities for shapes.js - BOILER PLATE atm
describe ("Circle render", () => {
    it("should return a string", () => {
        expect(typeof Circle()).toBe("string");
    });
});
describe ("Square render", () => {
    it("should return a string", () => {
        expect(typeof Square()).toBe("string");
    });
});

describe ("Triangle render", () => {
    it("should return a SVG measurement for circle and its fill colour", () => {
        const shape = new Triangle();
        shape.setcolour("blue");
        expect(Triangle()).toBe(`<polygon points="50 15, 100 100, 0 100" fill ="blue"/>`);
    });
});
// run a test to see if 

