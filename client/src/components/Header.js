import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand style={{ fontSize: 20 }} href="/">Home Seva</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{ fontSize: 20 }} className="button" href="#features">Buyer</Nav.Link>
                        <Nav.Link style={{ fontSize: 20 }} className="button" href="#pricing">Seller</Nav.Link>
                    </Nav>
                    <Nav>

                        <GoogleAuth />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;