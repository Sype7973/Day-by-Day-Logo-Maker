// import test functions
const { Circle, Square, Triangle } = require("./shapes.js");

// creeate test functionalities for shapes.js - BOILER PLATE atm
describe ("Circle", () => {
    it("should return a string", () => {
        expect(typeof Circle()).toBe("string");
    });
});
describe ("Square", () => {
    it("should return a string", () => {
        expect(typeof Square()).toBe("string");
    });
});

describe ("Triangle", () => {
    it("should return a string", () => {
        expect(typeof Triangle()).toBe("string");
    });
});
// describe the test and expect the result to be true