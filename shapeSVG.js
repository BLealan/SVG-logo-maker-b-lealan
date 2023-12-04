class Shape {
    constructor(width, height, backgroundColor, shapeColor){
        this.width = 300;
        this.height = 200;
        this.shapeColor = ""
    }
};

class Circle extends Shape {
    constructor(width, height, shapeColor) {
        Shape.call(this, width, height, shapeColor, shapeData);
        this.shape = `circle cx="25" cy="75" r="75"`;
        ;
    }
};

class Triangle extends Shape {
    constructor(width, height, shapeColor) {
        Shape.call(this, width, height, shapeColor, shapeData);
        this.shape = `polygon points="150, 25 175, 175 25, 175`;
    }
};

class Square extends Shape {
    constructor(width, height, shapeColor) {
        Shape.call(this, width, height, shapeColor, shapeData);
        this.shapeData = `rect x="10" y="10" width="150" height="150"`;
    }
};

const generateLogo = ({ width, height, shapeColor, shapeData, fontColor }) =>
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <svg version="1.1" width ="${Shape.width}" height="${Shape.height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill ="${Shape.shapeColor}"/>
        <${Shape.shapeData}/>
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${Shape.fontColor}">${Shape.characters}</text>
        </svg>
    </body>
</html>`

module.exports = generateLogo;