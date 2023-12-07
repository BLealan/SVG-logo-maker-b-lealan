# SVG Logo Maker

## Description

In order for quick, simple logos to be designed, I wrote an application to generate a simple graphic based on users' input. 

Using the "inquirer" package, a series of questions are asked to the user in their terminal after entering "node index.js". Their responses are then entered into a pre-made skeleton .svg file, changing the text, shape and colours.

I wrote a conditional function to enure that the user's character input matched the Acceptance Criteria (i.e. it was not 0 or greater than 3). I would have liked to include a similar function to check the input colours were valid keywords or hex-codes, but was not able to include in time.

## Table of Contents
- [Installation](#installation)  
- [Usage](#usage)  
- [Tests](#tests)   

## Installation

Please ensure you have downloaded and installed the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Navigate to the folder you have downloaded this repo, then run `node index.js` and follow the prompts. A file entitled 'logo.svg' will be generated within this folder for you to use.

[Jest](https://www.npmjs.com/package/jest) should also be installed in order to run `npm test` to test the functionality of the generateShape function.

## Usage

![demonstration of generating README](./assets/images/demo-video.gif)

## Sources
- https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
- https://en.m.wikipedia.org/wiki/File:SVG_Recognized_color_keyword_names.svg
- https://www.w3.org/TR/SVG11/types.html#ColorKeywords
- https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
- https://stackoverflow.com/questions/5546346/how-to-place-and-center-text-in-an-svg-rectangle