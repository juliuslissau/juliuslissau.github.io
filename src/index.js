import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";

ReactDOM.render(
  <React.StrictMode>
    <div className="outer">
      <div className="outerContainer">
        <Home />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
