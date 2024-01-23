import React, { Component } from "react";
import SimpleComponent from "./Components/simpleComponent";
import PureComponent from "./Components/PureComponent";
export default class App extends Component {
  render() {
    return (
      <>
        <SimpleComponent />
        <PureComponent />
      </>
    );
  }
}
