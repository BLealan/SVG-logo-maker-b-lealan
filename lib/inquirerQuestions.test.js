const { default: inquirer } = require("inquirer");
const questions = require("./inquirerQuestions.js");

describe("generateLogo", () => {
        inquirer.prompt(questions)
        .then(data => {
            const results = (data)
        }); 
    // it("prompts should record user input in object", () => {
        test("characters should be 'ABC'", () => {
            expect(data.characters).toBe('ABC');
        });
        test("fontColor should be 'blue'", () => {
            expect(data.fontColor).toBe('blue');
        });
        test("shapeChoice should be 'Triangle'", () => {
            expect(data.shapeChoice).toBe('Triangle');
        });
        test("shapeColor should be 'red'", () => {
            expect(data.shapeColor).toBe('red');
        });


        // const result = `{
        //     characters: 'ABC',
        //     fontColor: 'blue',
        //     shapeChoice: 'Triangle',
        //     shapeColor: 'red'
        //   }`
        // const characters = "ABC";
        // const fontColor = "blue";
        // const shapeChoice = `Triangle`;
        // const shapeColor = "red";
        // expect(generateLogo(characters, fontColor, shapeChoice, shapeColor))
});