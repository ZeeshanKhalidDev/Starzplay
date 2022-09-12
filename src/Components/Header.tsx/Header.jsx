import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styleClasses from "./Header.module.scss";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <Navbar
      variant="dark"
      bg="dark"
      expand="lg"
      fixed
      className={styleClasses.navbar_wrapper}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className={styleClasses.site_logo}>
          <img src={logo} className="img-fluid" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav.Link href="#home" className={styleClasses.nav_link}>
            Movies
          </Nav.Link>
          <Nav.Link href="#home" className={styleClasses.nav_link}>
            Tv Shows
          </Nav.Link>
          <Nav.Link href="#home" className={styleClasses.nav_link}>
            ARABIC
          </Nav.Link>
          <Nav.Link href="#home" className={styleClasses.nav_link}>
            Kids
          </Nav.Link>
          <Nav className="me-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="CHANNELS"
              menuVariant="dark"
              className={styleClasses.nav_dropdown}
            >
              <NavDropdown.Item href="#action/3.1">CHANNELS 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CHANNELS 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className={styleClasses.auth_btn_wrap}>
            <Nav.Link href="#deets">Log in</Nav.Link>
            <Nav.Link href="#memes">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
