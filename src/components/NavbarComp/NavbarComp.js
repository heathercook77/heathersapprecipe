import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./index.css";

// Router
import { Link } from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Navbar bg="light" expand="lg">
          <>
            <Navbar.Brand href="/">React app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <NavDropdown title="Forms" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Nav.Link>
                      <Link to="/survey-form">Survey Form</Link>
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Nav.Link>
                      <Link to="/#">Dummy</Link>
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </>
        </Navbar>
      </div>
    );
  }
}
