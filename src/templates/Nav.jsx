import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../assets/logo.png';

const HeaderNavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 2,
          padding: '1rem'
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div className='d-flex d-md-block align-items-center justify-content-between w-100'>
            <Navbar.Brand href="/" className="d-none d-lg-block">
              <img
                src={profileImage}
                alt="Qunosis Solutions"
                style={{
                  height: '200px',
                  width: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </Navbar.Brand>
            <Button
              variant="link"
              className="d-block d-lg-none"
              onClick={toggleOffcanvas}
              aria-controls="offcanvas-menu">
              <FaBars size={24} color="#000" />
            </Button>
          </div>
          <Nav className="d-none d-lg-flex justify-content-between w-100">
            <Nav.Link href="#about" className='me-4'>About Us</Nav.Link>
            <Nav.Link href="#services" className='me-4'>Services</Nav.Link>
            <Nav.Link href="#why-us" className='me-4'>Why Us?</Nav.Link>
            <Nav.Link href="#team" className='me-4'>Team</Nav.Link>
            <Nav.Link href="#contact-us" className='me-4'>Contact Us</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      {/* Offcanvas for Mobile */}
      <Offcanvas
        show={showOffcanvas}
        onHide={toggleOffcanvas}
        placement="top"
        style={{ height: '100vh' }}
      >
        <Offcanvas.Header closeButton className="mt-4">
          <Offcanvas.Title className="px-3">Qunosis</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#why-us">Why Us?</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderNavBar;
