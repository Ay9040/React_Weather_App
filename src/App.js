import React from "react";
import MainContent from "./components/MainContent";
import Precautions from "./components/Precautions";
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";

function App(props) {
  const required = props.page;
  console.log(required);

  if (required === 1) {
    return (
      <div>
        <NavBar />
        <MainContent />
      </div>
    );
  } else if(required === 2) {
    return (
      <div>
        <NavBar />
        <div align="center">
          <Precautions />
        </div>
      </div>
    );
  }
  else if (required === 3) {
    return (<div>
      <NavBar />
      <div align="center">
        <Contact />      
      </div>
    </div>)
  }
}

export default App;
