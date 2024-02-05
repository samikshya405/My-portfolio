import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './header.css'
const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar expand="lg" variant='dark' className='sticky-top nav-menu'  expanded={expanded}  >
      <Container>
        <Navbar.Brand href="#home" className='custom-color'>&lt;Samikshya/&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto " >
            <Nav.Link href="#home" className='menu' aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} >Home</Nav.Link>
            <Nav.Link href="#skill" className='menu' onClick={handleNavbarToggle}>Skills</Nav.Link>
            <Nav.Link href="#project" className='menu' onClick={handleNavbarToggle}>Project</Nav.Link>
            
            <Nav.Link href="#about" className='menu' onClick={handleNavbarToggle}>About</Nav.Link>
            <Nav.Link href="#contact" className='menu' onClick={handleNavbarToggle}>Contact</Nav.Link>
            
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header