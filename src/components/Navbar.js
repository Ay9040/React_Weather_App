import React from 'react';
import ReactDOM from "react-dom"
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import App from "../App"
import "../styles/style.css"


class NavBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  renderPrecautions() {
    const required = true
    //const required1 = false
    const element = <App prec={required}/>
    ReactDOM.render(element, document.getElementById("root"))
  }

  renderHome() {
    const required = false
    //const required1 = false
    const element = <App prec={required} />
    ReactDOM.render(element, document.getElementById("root"))
  }

  renderContactUs(){
    //const required1 = true
    const required = false
    const element = <App prec={required}/>
    ReactDOM.render(element, document.getElementById("root"))
  }

  render() {
    const bgPink = {backgroundColor: '#e91e63'}
    const container = {height: 1300}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar style = {{opacity : 0.8, backgroundColor: '#000'}} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong>Weather</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <MDBNavLink to="" onClick={this.renderHome}>Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="" onClick={this.renderPrecautions}>Precautions</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="" onClick={this.renderContactUs}>Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default NavBar;
