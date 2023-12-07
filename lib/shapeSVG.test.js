const generateLogo = require("./shapeSVG.js");

describe("generateLogo", () => {
    it("should populate skeleton .svg with user input", () => {
        //Example of sample code for SVG file
        const result = `<!DOCTYPE html>
        <html>
            <body>
                <svg version="1.1" width ="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill ="white"/>
                <circle cx="150" cy="100" r="90" fill="black"/>
                <text x="50%" y="120" font-size="50" text-anchor="middle" fill="white">ABC</text>
                </svg>
            </body>
        </html>`
        // Variables to use in function match example SVG code
        const shapeColor = "black";
        const fontColor = "white";
        const characters = "ABC";
        const shapeData = `circle cx="150" cy="100" r="90"`;
        expect(generateLogo(shapeColor, fontColor, characters, shapeData))
    })
})