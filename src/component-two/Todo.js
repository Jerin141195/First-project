import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newText: "",
      editIndex: null,
    };
  }

  txtChange = () => {
    const { items, editIndex, newText } = this.state;
    if (newText != "") {
      if (editIndex != null) {
        items[editIndex] = newText;
        this.setState({
          items: items,
          newText: "",
          editIndex: null,
        });
      } else {
        this.setState({
          items: [...items, newText],
          newText: "",
        });
      }
    }
  };

  editText = (editIndex) => {
    const { items } = this.state;
    this.setState({
      editIndex,
      newText: items[editIndex],
    });
  };

  delText = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <h2>TODO COMPONENT</h2>
        <input
          type="text"
          value={this.state.newText}
          onChange={(event) =>
            this.setState({
              newText: event.target.value,
            })
          }
        />
        <button onClick={() => this.txtChange()}>Add Item</button>
        <ul>
          {this.state.items.map((itm, index) => {
            return (
              <li key={index}>
                {itm}
                <button onClick={() => this.editText(index)}>Edit</button>
                <button onClick={() => this.delText(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
