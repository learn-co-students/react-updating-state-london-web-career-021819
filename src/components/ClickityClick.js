// Code ClickityClick Component Here
import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState(
      {
        hasBeenClicked: true
      },
      // add a callback as 2nd arg
      () => console.log(this.state.hasBeenClicked)
    ); // prints true
  };

  //   handleClick = () => {
  //     this.setState({
  //       hasBeenClicked: true
  //     })
  //     console.log(this.state.hasBeenClicked); // prints false because console.log happened before update was finished
  //   }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
