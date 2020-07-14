import "./App.css";
import React, { Component } from "react";
import Counter from "./component/Counter";
import Todo from "./component-two/Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
        <Todo></Todo>
      </div>
    );
  }
}

export default App;
