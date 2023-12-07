const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/inquirerQuestions.js");
const generateLogo = require("./lib/shapeSVG.js");

const writeToFile = (newFile) => 
fs.writeFile("logo.svg", newFile, (err) => 
err ? console.log(err): console.log("Generated logo.svg"))

inquirer.prompt(questions)
.then(data => {
    const logo = generateLogo(data)
    return writeToFile(logo)
});