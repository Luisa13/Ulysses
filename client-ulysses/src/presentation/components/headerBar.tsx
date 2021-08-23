import React, {useState, useEffect } from 'react';
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap';
import { AuthContext } from '../../domain/components/authContext';

const Header: React.FC = () => {
    const [logged, setLoged] = useState<boolean>(false);
    const{ userLoged } = React.useContext(AuthContext);
    useEffect(()=>{
        /*const token = localStorage.getItem("token");
        console.log(token);
        if(token !== undefined || token !== null)
            setLoged(true);*/
            console.log("User: " + userLoged);
    }, [])
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">ULYSSES</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>
                <Nav>
                {!userLoged ? <Nav.Link  href="/register">Sing up</Nav.Link> : null}
                <Nav.Link href="#">About</Nav.Link>
                {userLoged 
                ? 
                <NavDropdown title="Account" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                
                </NavDropdown>
                 : null}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;