const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./inquirerQuestions.js");
const generateLogo = require("./shapeSVG.js");

const writeToFile = (newFile) => 
fs.writeFile("logo.svg", newFile, (err) => 
err ? console.log(err): console.log("Generated logo.svg"))

inquirer.prompt(questions)
.then(data => {
    console.log(data)
    const logo = generateLogo(data)
    console.log(logo);
    writeToFile(logo);
})

function init () {

}

init();