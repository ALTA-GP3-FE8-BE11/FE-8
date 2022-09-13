import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const NavbarNav = () => {

  return (
    <div>
      <Navbar expand="lg" className="nav-top ">
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: "whitesmoke" }}>
            <img src={logo} alt="horse" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex gap-3">
              <Link
                className="text-decoration-none text-white  "
                style={{ marginLeft: "10vw", fontSize: "2vw" }}
                to="/"
              >
                Home
              </Link>
              <Link
                to="/Product"
                className="text-decoration-none text-white"
                style={{ fontSize: "2vw" }}
              >
                Product
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary" style={{ marginRight: "30px" }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
              <Button
                variant="secondary"
                className="button-nav"
                style={{ marginRight: "10px", backgroundColor: "none" }}
              >
                <Link to='/login'><FontAwesomeIcon icon={faUserCircle} style={{ color: 'white' }}></FontAwesomeIcon></Link>
              </Button>
              <Button variant="secondary">
                <Link to='/mycart'><FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }}></FontAwesomeIcon></Link>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarNav;
