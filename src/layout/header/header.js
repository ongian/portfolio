import React, {useState, useEffect} from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [show, setShow] = useState(false);

    const toggleCanvas = () => setShow(!show);
    const closeCanvass = () => setShow(false);
    const closeOnLinkClick = () => {
        setTimeout(() => {
            setShow(false)
        }, 500)
    }
    useEffect(() => {
        if(window.location.hash){
            const scrollSection = document.querySelector(window.location.hash);
            scrollSection && setTimeout(window.scrollTo({top: scrollSection.offsetTop, left: 0, behavior: 'smooth' }), 1500)
        }
        
    }, [window.location.hash])
    
    return ( 
    <Navbar expand="lg" className="mb-3" fixed="top" collapseOnSelect>
        <Container>
            <Navbar.Brand href="#">Christian Ong</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" bsPrefix="nav-toggle" onClick={toggleCanvas}>
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>
            <Navbar.Offcanvas
                id="offcanvasNavbar-expand-lg"
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
                placement="end"
                show={show ? true : undefined}
                onHide={closeCanvass}
                data-bs-scroll="true">
                <Offcanvas.Header className="justify-content-end">
                    <FontAwesomeIcon icon={faXmark} onClick={toggleCanvas} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/#skills" onClick={closeOnLinkClick}>Skills</Nav.Link>
                        <Nav.Link href="/#projects" onClick={closeOnLinkClick}>Projects</Nav.Link>
                        <Nav.Link href="/#contact" onClick={closeOnLinkClick}>Contact</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>);
}
 
export default Header;