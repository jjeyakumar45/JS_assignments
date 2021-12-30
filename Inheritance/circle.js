let Shape = require('./shape');

class Circle extends Shape {

    constructor(){
        super();
        this.radius = 10;
        //this.color = "red";
    }

    drawShape = () => {
        console.log(`This is a ${this.color} circle having radius = ${this.radius}`);
    }

    calculateArea = (radius) => {
        console.log(3.14 * radius * radius);
    }

}

module.exports.Circle = Circle;