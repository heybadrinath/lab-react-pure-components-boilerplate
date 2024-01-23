import React, { PureComponent } from "react";

export default class pureComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: false,
    };
  }

  toggling = () => {
    this.setState((bool) => ({ toggle: !bool.toggle }));
  };

  incrementCount = () => {
    if (!this.state.toggle) {
      this.setState((prev) => ({ count: prev.count}));
    } else {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }
  };
  render() {
    let { count, toggle } = this.state;
    console.log("Pure Component Render");
    return (
      <>
        <h1>Pure Component</h1>
        <h3>count: {count}</h3>
        <button
          onClick={this.toggling}
          style={
            this.state.toggle
              ? { backgroundColor: "green", color: "white" }
              : { backgroundColor: "red" }
          }
        >
          Set Toggle
        </button>
        <button onClick={this.incrementCount}>Counter</button>
      </>
    );
  }
}
