import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header () {
    return(
      <header>
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">About Us</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
    );
  
}
export default Header;