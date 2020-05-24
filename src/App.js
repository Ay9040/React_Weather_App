import React from "react";
import MainContent from "./components/MainContent";
import Precautions from "./components/Precautions";
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
function App(props) {
  const required = props.page;
  console.log(required);

  if (required === 1) {
    document.body.style.overflow = 'visible'
    return (
      <div>
        <NavBar />
        <MainContent />
      </div>
    );
  } else if(required === 2) {
    document.body.style.overflow = 'hidden'
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
    document.body.style.overflow = 'hidden'
    document.getElementById('root').setAttribute('background', './styles/images/back.png')
    return (<div>
      <NavBar />
      <div align="center">
        <Contact />      
      </div>
    </div>)
  }
  else if (required === 4){
    document.body.style.overflow = 'visible'
    document.getElementById('root')
    return(<div>
      <NavBar />
      <div align="center">
        <About />
      </div>
    </div>)
  }
}

export default App;
