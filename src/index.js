import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/style.css";

const required = 1;
const element = <App page={required} />;

ReactDOM.render(element, document.getElementById("root"));
