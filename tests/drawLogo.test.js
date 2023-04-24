// import the drawLogo function
// import drawLogo from "../library/drawLogo.js";
// import FS to write file
// import path from "path";
const fs = require("fs");
const path = require("path");
const drawLogo = require("../library/drawLogo");

describe("drawLogo", () => {
  it("writes the correct SVG file to disk", () => {
    // test the user's answers to the logo questions
    const answers = {
      shape: "circle",
      shapeColor: "red",
      textColor: "white",
      logoText: "My Logo",
    };

    // Generate the expected SVG string
    const expectedSvgString = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="red"/>
        <text x="100" y="100" text-anchor="middle" fill="white" font-size="35" font-family="Verdana">My Logo</text>
      </svg>
    `.replace(/\s+/g, ' ').trim();

    // Run the function
    drawLogo(answers);

    // Check that the file was created
    const filePath = path.join(__dirname, "../examples/logo.svg");
    expect(fs.existsSync(filePath)).toBe(true);

    // Check that the contents of the file match the expected SVG string
    const actualSvgString = fs.readFileSync(filePath, "utf8").replace(/\s+/g, ' ').trim();
    expect(actualSvgString).toBe(expectedSvgString);
  });
});