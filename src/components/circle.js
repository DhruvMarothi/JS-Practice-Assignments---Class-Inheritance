// import using require
const Shape = require("./shape");

// declare class
class Circle extends Shape {
  constructor() {
    super();
    this.color = "blue";
  }
  calculateArea() {
    console.log("calculateArea method is overidden!");
  }
}
module.exports = Circle;

// export class using module.exports
