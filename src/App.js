import React from "react";
import MainContent from "./components/MainContent";
import Precautions from "./components/Precautions";
import NavBar from "./components/Navbar";

function App(props) {
  const required = !props.prec;
  console.log(required);

  if (required) {
    return (
      <div>
        <NavBar />
        <MainContent />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <div align="center">
          <Precautions />
        </div>
      </div>
    );
  }
}

export default App;
