class Shape {
    constructor(width, height, backgroundColor, fillColor){
        this.width = 300;
        this.height = 200;
        this.backgroundColor = "";
        this.fillColor = ""
    }
};

class Circle extends Shape {
    constructor(width, height, backgroundColor, fillColor, shape) {
        Shape.call(this, width, height, backgroundColor, fillColor);
        this.shape = `<circle cx="25" cy="75" r="20"`;
        ;
    }
};

class Triangle extends Shape {
    constructor(width, height, backgroundColor, fillColor, shape) {
        Shape.call(this, width, height, backgroundColor, fillColor);
        this.shape = "Triangle";
    }
};

class Square extends Shape {
    constructor(width, height, backgroundColor, fillColor, shape) {
        Shape.call(this, width, height, backgroundColor, fillColor);
        this.shape = 
    }
};

`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <svg version="1.1" width ="${shape.width}" height="${shape.height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill ="${shape.backgroundColor}/>
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${fontColor}">TEST</text>
        </svg>
    </body>
</html>`