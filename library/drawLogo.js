// import FS to write file
const fs = require("fs");
const { shape, Circle, Square, Triangle } = require("./shapes.js");
// draw logo function that formats the answers from the logo questions and puts them into an SVG string that is then used by index.js to create the logo



// it also imports the shapes.js file to use the shape class and children classes - NEED TO BUILD TESTS FOR THIS BEFORE PROCEEDING
const drawLogo = (answers) => {
// checks to see what shape is chosen and then creates a new shape object
if (answers.shape === "circle") {
  shape = new Circle();
} else if (answers.shape === "square") {
  shape = new Square();
} else if (answers.shape === "triangle") {
  shape = new Triangle();
}
// checks to see what color is chosen and then changes the color of the shape
if (answers.color === "red") {
    answers.color = "red";
} else if (answers.color === "green") {
    answers.color = "green";
} else if (answers.color === "blue") {
    answers.color = "blue";
}
console.log(answers);
console.log(shape);
// creates the SVG string that is used by index.js to create the logo, with text, shape and color
const logoTemplate = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <text x="50" y="50" text-anchor="middle" fill="${answers.color}" font-size="30" font-family="Verdana">${answers.logoText}</text>
    ${shape.render()}
</svg>
`;
// returns the logo string
fs.writeFileSync("logo.svg", logoTemplate);
};
// export drawLogo function
module.exports = drawLogo();
