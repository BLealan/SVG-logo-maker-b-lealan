const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./inquirerQuestions.js");

inquirer.prompt(questions)

.then(data => {
    console.log(data)
    // const logo = generateLogo(data)
})

function init () {

}

init();