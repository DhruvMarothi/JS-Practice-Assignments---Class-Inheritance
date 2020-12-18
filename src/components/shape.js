// declare class
// import React, { Component, useState } from "react";
const React = require("react");
const { Component } = require("react");
const { useState } = require("react");

class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: "blue"
    };

    this.drawShape = this.drawShape.bind(this);
    this.calculateArea = this.calculateArea.bind(this);
  }

  drawShape = () => {
    console.log("circle is drawn!");
  };

  calculateArea = () => {
    console.log("Area is calculated");
  };

  render() {
    return <div></div>;
  }
}

// export class using module.exports
module.exports = Shape;
