import React from 'react';
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap';

const Header: React.FC = () => {
    
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">ULYSSES</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>
                <Nav>
                <Nav.Link href="/register">Sing up</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <NavDropdown title="Account" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;