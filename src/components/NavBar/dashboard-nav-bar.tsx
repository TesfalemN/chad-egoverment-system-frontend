import React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import image from "assets/images/bg-3.jpg";
const DashBoardNavBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={" navbar-custom sticky sticky-dark shadow-sm nav-sticky p-2"}
      id="navbar"
    >
      <Container>
        <Nav className="navbar-nav ms-auto navbar-center" id="navbar-navlist">
          <Nav.Item>
            <div className="d-flex align-items-center">
              <span className="me-4">User Name</span>
              <Image
                src={image}
                alt="profile"
                width={40}
                height={40}
                roundedCircle
              />
            </div>
          </Nav.Item>
          <Nav.Item>
            <div className="d-flex align-items-center h-100 ms-3">
              <Button size="sm" variant="light">
                Logout
              </Button>
            </div>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DashBoardNavBar;
