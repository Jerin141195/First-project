import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };
  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>COUNTER COMPONENT</h2>
        <h2>{this.state.counter}</h2>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}
export default Counter;
