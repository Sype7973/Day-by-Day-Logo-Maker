// import FS to write file
const path  = require("path");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./shapes.js");
// draw logo function that formats the answers from the logo questions and puts them into an SVG string that is then used by index.js to create the logo



// it also imports the shapes.js file to use the shape class and children classes - NEED TO BUILD TESTS FOR THIS BEFORE PROCEEDING
const drawLogo = (answers) => {
// create a switch statement to check the shape answer and create the shape object
    let logoShape;
    switch (answers.shape) {
        case "circle":
        logoShape = new Circle();
            break;
        case "square":
        logoShape = new Square();
            break;
        case "triangle":
        logoShape = new Triangle();
        break;
        }
// console.log(answers);
// console.log(logoShape);
// console.log(logoShape.render());
 const textPosition = logoShape.getTextPosition();

// create a template literal to format the SVG string
  const logoTemplate = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${logoShape.render()} fill="${answers.shapeColor}"/>
      <text x="${textPosition.x}" y="${textPosition.y}" text-anchor="middle" fill="${answers.textColor}" font-size="35" font-family="Verdana">${answers.logoText}</text>
    </svg>
  `;
    console.log(logoTemplate);
// write the SVG string to a file called logo.svg
const filePath = path.join(__dirname, "../examples/logo.svg");
fs.writeFileSync(filePath, logoTemplate);
};
// export drawLogo function
module.exports = drawLogo;
