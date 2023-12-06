function Shape (width, height, shapeData){
    this.width = 300;
    this.height = 200;
    this.shapeData = shapeData;
};

const circle = new Shape(300, 200,`circle cx="150" cy="100" r="90"`);
const triangle = new Shape(300, 200,`polygon points="150,10 25,190 275,190"`);
const square = new Shape(300, 200,`rect x="55" y="10" width="180" height="180"`);
console.log(circle, triangle, square)

const generateLogo = ({ shapeColor, fontColor, characters, shapeChoice }) => {

    let shapeData = "";
    switch(shapeChoice){
        case "Circle":
            shapeData = circle.shapeData;
            break;
        case "Triangle":
            shapeData = triangle.shapeData;
            break;
        case "Square":
            shapeData = square.shapeData;
            break;
        default:
            return "Error, shape not found"
    }

return`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <svg version="1.1" width ="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill ="white"/>
        <${shapeData} fill="${shapeColor}"/>
        <text x="50%" y="120" font-size="50" text-anchor="middle" fill="${fontColor}">${characters}</text>
        </svg>
    </body>
</html>`
}

module.exports = generateLogo;