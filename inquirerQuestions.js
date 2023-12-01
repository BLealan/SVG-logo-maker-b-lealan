const questions = [
    {
        type: "input",
        name: "characters",
        message: "Please enter three characters."
    },
    {
        type: "input",
        name: "color-font",
        message: "Please type the font color you would like (keyword or hex no.)."
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape.",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "color-shape",
        message: "Please type the shape color you would like (keyword or hex no.)."
    }
];

module.exports = questions;