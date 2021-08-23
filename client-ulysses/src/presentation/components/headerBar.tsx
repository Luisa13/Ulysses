import React, { useState } from 'react';
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap';
import { AuthContext } from '../../domain/components/authContext';
import AboutModal from './AboutModal';

const Header: React.FC = () => {
    //const [logged, setLoged] = useState<boolean>(false);
    const{ userLoged } = React.useContext(AuthContext);
    const[showModal, setShowModal] = useState<boolean>(false);

    const handleShowModalAbout = () =>{
        setShowModal(true);
    }
    /*useEffect(()=>{
        const token = localStorage.getItem("token");
        console.log(token);
        if(token !== undefined || token !== null)
            setLoged(true);
            console.log("User: " + userLoged);
    }, [])*/
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">ULYSSES</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>
                <Nav>
                {!userLoged ? <Nav.Link  href="/register">Sing up</Nav.Link> : null}
                <Nav.Link href="#" onClick = {handleShowModalAbout}>About</Nav.Link>
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

        <AboutModal
            show = {showModal}
            hide = {() => setShowModal(false)}
        />
        </div>
    );
}

export default Header;