// import all required packages, functions and objects
const inquirer = require('inquirer');
const drawLogo  = require('./library/drawLogo.js');

// create questions for inquirer
const logoQuestions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter 3 characters for logo text',
        validate: function (value) {
            if (value.length === 3) {
                return true;
            }
            return 'Please enter 3 characters';
        }
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Select a text color',
        choices: ['red', 'green', 'blue', 'yellow', 'white', 'black']
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape',
        choices: ['square', 'triangle', 'circle']
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Select a shape color',
        choices: ['red', 'green', 'blue', 'yellow', 'white', 'black']
    }
];

// initiate function to prompt questions
const init = async () => {
    // get answers from inquirer
    const answers = await inquirer.prompt(logoQuestions);
    // pass answers to drawLogo function
    drawLogo(answers);
    // console.log(answers)
}
init();
