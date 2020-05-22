import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/style.css";

const page = 1;
const element = <App page={page} />;

ReactDOM.render(element, document.getElementById("root"));
