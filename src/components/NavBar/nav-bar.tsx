import React, { useEffect, useState } from "react";
import { Collapse, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import Img from "../../assets/images/features/image1.jpg";
import ScrollspyNav from "./scrollspy";

const NavBar = ({ ...props }) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [targetIds, setTragetIds] = useState([]);
  const toggle = () => {
    setisOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    let targetId = props.navItems.map((item: any) => {
      return item.idnm;
    });
    setTragetIds(targetId);
  }, []);

  return (
    <>

      <Navbar
        expand="lg"
        fixed="top"
        className={props.navClass + " navbar-custom sticky sticky-dark"}
        id="navbar"
      >
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={Img}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
         
          <Navbar.Toggle onClick={toggle}>
            <i className="mdi mdi-menu"></i>
          </Navbar.Toggle>
          <Collapse className=" navbar-collapse">
            <>
              <ScrollspyNav
                scrollTargetIds={targetIds}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav
                  className="navbar-nav ms-auto navbar-center"
                  id="navbar-navlist"
                >
                  {props.navItems.map((item: any, key: any) => (
                    <Nav.Item
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={"#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </Nav.Item>
                  ))}
                </Nav>
              </ScrollspyNav>
              <ul className="navbar-nav navbar-center">
                <li className="nav-item">
                  <Link to="/Login" className="nav-link">
                    Log In
                  </Link>
                </li>
                <li className="nav-item d-inline-block d-lg-none">
                  <Link to="/SignUp" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </ul>
              <div className="navbar-button d-none d-lg-inline-block">
                <Link
                  to="/SignUp"
                  className="btn btn-sm btn-soft-primary btn-round"
                >
                  Sign Up
                </Link>
              </div>
            </>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
