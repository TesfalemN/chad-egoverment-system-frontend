import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ChadLogo from "../../assets/images/chad_logo.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export const  VisaNavBarComponent : React.FC = () => {
  return (
    <>
      <Navbar bg="shadow" variant="light" sticky="top" className="remove-print">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={ChadLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}&nbsp;&nbsp;
            Online Visa Service
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="me-auto"></div>
          <Nav
            className=""
            style={{ maxHeight: '100px', minHeight:'50px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Get Visa Now</Nav.Link>
            <Nav.Link href="#action2">Check Status</Nav.Link>
            <Nav.Link href="#action3">Infromation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default VisaNavBarComponent;