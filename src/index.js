import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/style.css";

const required = false;
const element = <App prec={required} />;

ReactDOM.render(element, document.getElementById("root"));
