import React from 'react'
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../style/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavbarNav = () => {
  return (
    <div>
        <Navbar expand="lg" className='nav-top'>
            <Container fluid>
                <Navbar.Brand href="#home" style={{color: 'whitesmoke'}}>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex gap-3">
                    <Link className='text-decoration-none text-white ' to='/'>Home</Link>
                    <Link to='/' className='text-decoration-none text-white'>Product</Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="secondary" style={{marginRight:'30px'}}>Search</Button>
                    <Button variant='secondary' className='button-nav' style={{marginRight: '10px', backgroundColor: 'none'}}>
                        <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                    </Button>
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarNav