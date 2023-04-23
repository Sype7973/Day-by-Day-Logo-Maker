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
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="red"/>
        <text x="50" y="50" text-anchor="middle" fill="white" font-size="30" font-family="Verdana">My Logo</text>
      </svg>
    `.trim();

    // Run the function
    drawLogo(answers);

    // Check that the file was created
    const filePath = path.join(__dirname, "../examples/logo.svg");
    expect(fs.existsSync(filePath)).toBe(true);

    // Check that the contents of the file match the expected SVG string
    const actualSvgString = fs.readFileSync(filePath, "utf8").trim();
    expect(actualSvgString).toBe(expectedSvgString);
  });
});