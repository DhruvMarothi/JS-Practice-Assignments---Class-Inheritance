// declare class

import { Component } from "react";

class Shape extends Component {
  constructor(color) {
    super();
    this.color = "red";
  }
  drawShape() {
    console.log("circle is drawn!");
  }
  calculateArea() {
    console.log("Area is calculated");
  }
}

// export class using module.exports
module.exports = Shape;
