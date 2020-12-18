// import using require
const React = require("react");
const { Component } = require("react");
const Shape = require("./shape.js");

// declare class
class circle extends React.Component {
  calculateArea = () => {
    console.log("calculateArea method is overidden!");
  };

  render() {
    return (
      <div>
        <Shape />
      </div>
    );
  }
}

module.exports = circle;

// export class using module.exports
