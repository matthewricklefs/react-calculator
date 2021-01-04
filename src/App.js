import React, { Component } from "react";
import * as math from "mathjs";

import Button from "./Button";
import Input from "./Input";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ]
    };
  }

  handleChange = (val) => {
    const input = this.state.input;

    this.setState({
      input: input + val
    });
  };

  handleEqual = () => {
    this.setState({
      input: math.evaluate(this.state.input)
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
        <Input input={this.state.input} />

        {this.renderButtons()}

        <div className="row">
          <Button
            label="clear-btn"
            handleClick={() => this.setState({ input: "" })}
          >
            Clear
          </Button>

          <Button label="equal-btn" handleClick={this.handleEqual}>
            =
          </Button>
        </div>
      </div>
    );
  }
}
