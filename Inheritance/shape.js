class Shape {
    constructor(){
        this.color = "red";
    }
    
    drawShape = () => {
        console.log(`This is a ${this.color} shape!`);
    }

    calculateArea = () => {
        console.log("Shape not defined");
    }
}

module.exports.Shape = Shape;
