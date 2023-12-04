const checkCharacters = async (input) => {
    if (!input) {
        return "Please enter more characters (up to three)";
    } else if (input.length > 3) {
        return "Please enter fewer characters (up to three)";
    } else {
        return true;
    }
};

// const checkColor = async (input) => {
//     const hexCodeRegex = /^#[0-9A-F]{6}$/;
//     if (!hexCodeRegex.test(input)) {
//         return "Please enter a valid hex number"
//     };
// }

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Please enter up to three characters",
        validate: checkCharacters
    },
    {   type: "input",
        name: "fontColor",
        message: "Please type the font color you would like (keyword or hex no.)",
        // validate: checkColor
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please type the shape color you would like (keyword or hex no.)",
        // validate: checkColor
    }
];

module.exports = questions;