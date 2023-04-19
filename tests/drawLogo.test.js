// import drawlogo function to test
const drawLogo = require("../library/drawLogo.js");

// create test functionalities for drawLogo.js
describe("drawLogo", () => {
    it("should return a string", () => {
        expect(typeof drawLogo()).toBe("string");
    });
});