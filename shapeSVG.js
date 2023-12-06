function Shape (width, height, shapeData){
    this.width = 300;
    this.height = 200;
    this.shapeData = shapeData;
};

const circle = new Shape(300, 200,`circle cx="25" cy="75" r="75"`);
const triangle = new Shape(300, 200,`polygon points="225,10 100,210 350,210"`);
const square = new Shape(300, 200,`rect x="10" y="10" width="150" height="150"`);
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

    console.log (shapeData)

return`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <svg version="1.1" width ="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill ="white"/>
        <${shapeData} fill=${shapeColor}/>
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${fontColor}">${characters}</text>
        </svg>
    </body>
</html>`
}

module.exports = generateLogo;