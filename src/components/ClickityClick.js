// Code ClickityClick Component Here
import React, { Component } from "react";

class ClickityClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBeenClicked: false,
      currenttheme: "blue"
    };
  }

  handleClick = () => {
    this.setState({ hasBeenClicked: true, currenttheme:"red" });
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button currenttheme="blue" onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
