import React from 'react';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

const HeaderNavBar = () => {
    return (
        <>
            <Navbar
                expand="lg"
                style={{
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 2,
                    padding: '1rem'
                }} >
                <div className='container'>
                    <Navbar.Brand href="#home">Qunosis</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="d-flex align-items-center justify-content-between">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#home">Services</Nav.Link>
                        <Nav.Link href="#home">Why Us?</Nav.Link>
                        <Nav.Link href="#home">Story</Nav.Link>
                        <Nav.Link href="#home">Contact Us?</Nav.Link>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
};

export default HeaderNavBar;
