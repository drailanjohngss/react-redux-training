import React, { Component}  from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class NavBar extends Component {
  render(){
    return(
  <div>    
    <Navbar inverse >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">PIXO</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          DASHBOARD
        </NavItem>
        <NavItem eventKey={2} href="#">
          TRADE
        </NavItem>
        <NavItem eventKey={2} href="#">
          WALLET
        </NavItem>
      </Nav>
     </Navbar>
  </div>

    );
   }
}

export default NavBar; 