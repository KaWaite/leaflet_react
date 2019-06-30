import React, { Component } from "react";
import MainMap from "./components/MainMap";
import Header from "./components/layout/Header";
import { TextField } from "@rmwc/textfield";

import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <TextField
          className="sControl"
          fullwidth
          trailingIcon="close"
          label="search address..."
        />
        <MainMap />
      </React.Fragment>
    );
  }
}

export default App;
