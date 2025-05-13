import React, { Component } from "react";
import "./Increment/increment.css"

export default class Incremen extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClickIncrement = () => {
    this.setState({ count: this.state.count + 10 });
  };
  handleClickDecrement = () => {
    this.setState({ count: this.state.count - 5 });
  };
  handleClickRestart = () => {
    this.setState({ count: this.state.count= 0 });
  };

  render() {
    return (
      <div className="main">
        <h1>{this.state.count}</h1>
        <button id="btn" onClick={this.handleClickIncrement}>Increment</button>
        <button id="btn" onClick={this.handleClickDecrement} disabled={this.state.count==0}>decrement</button>
        <button id="btn" onClick={this.handleClickRestart}  >Restart</button>
      </div>
    );
  }
}
