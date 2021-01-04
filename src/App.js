import React, { Component } from "react";

import Button from "./Button";
import Input from "./Input";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      buttonInput: "",
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ]
    };
  }

  handleChange = (val) => {
    const input = this.state.buttonInput;

    this.setState({
      buttonInput: input + val
    });
  };

  renderButtons = () => {
    return this.state.ops.map((row) => {
      return (
        <div className="row">
          {row.map((digit) => {
            return <Button handleClick={this.handleChange}>{digit}</Button>;
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="app">
        <Input input={this.state.buttonInput} />
        {/* Row of Buttons */}
        {this.renderButtons()}

        {/* Clear and Equal Buttons*/}
      </div>
    );
  }
}
