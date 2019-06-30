import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Content styles
import "leaflet/dist/leaflet.css";
import "./index.css";

// Below is necessary to get icons working with webpack. something to do with webpacks css-loader
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
// import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";

ReactDOM.render(<App />, document.getElementById("root"));
