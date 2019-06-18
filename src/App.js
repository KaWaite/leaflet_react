import React, { Component } from "react";
import MainMap from "./components/MainMap";
import Header from "./components/layout/Header";
import { TextField } from "@rmwc/textfield";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <TextField className="sControl" fullwidth label="search address..." />
        <MainMap />
      </React.Fragment>
    );
  }
}

export default App;
