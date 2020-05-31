import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

const CustomNavBar = () => {
    return (
        <Navbar variant="dark" className="CustomNavBar-navbar" expand="lg">
            <Navbar.Brand className="CustomNavBar-navbar-brand">
                Movy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="CustomNavBar-navbar-toggle"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="CustomNavBar-link">Movie</Link>
                    <Link to="/tv" className="CustomNavBar-link">Tv Shows</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavBar;