// import FS to write file
const path  = require("path");
const fs = require("fs");
const { shape, Circle, Square, Triangle } = require("./shapes.js");
// draw logo function that formats the answers from the logo questions and puts them into an SVG string that is then used by index.js to create the logo



// it also imports the shapes.js file to use the shape class and children classes - NEED TO BUILD TESTS FOR THIS BEFORE PROCEEDING
const drawLogo = (answers) => {
// create a switch statement to check the shape answer and create the shape object
    let shape;
    switch (answers.shape) {
        case "circle":
        shape = new Circle();
            break;
        case "square":
        shape = new Square();
            break;
        case "triangle":
        shape = new Triangle();
        break;
        }
console.log(answers);
console.log(shape);
// check the shapeColour answer and set the colour of the shape object
    shape.setcolour(answers.shapeColor);
// check the logoText answer and set the text of the shape object
    shape.settext(answers.logoText);
// check the textColor answer and set the colour of the text
    answers.color = answers.textColor;
// create a template literal to format the SVG string
    const logoTemplate = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="${answers.shapeColor}"/>
    <text x="50" y="50" text-anchor="middle" fill="${answers.textColor}" font-size="30" font-family="Verdana">${answers.logoText}</text>
    ${shape.render()}
    </svg>
    `;
// write the SVG string to a file called logo.svg
const filePath = path.join(__dirname, "../logo.svg");
fs.writeFileSync(filePath, logoTemplate);
};
// export drawLogo function
module.exports = drawLogo;
