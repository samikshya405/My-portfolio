import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './header.css'
const Header = ({brightNess}) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar expand="lg" variant='dark' className='sticky-top nav-menu' style={{background: brightNess ? 'white':"var(--primary-color)"}}  expanded={expanded}  >
      <Container>
        <Navbar.Brand href="#home"  className={`menu ${brightNess ? 'lightMode' : 'darkMode'}`} >Samikshya</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto " >
            <Nav.Link href="#home" className={`menu ${brightNess ? 'lightMode' : 'darkMode'}`}  aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} >Home</Nav.Link>
            <Nav.Link href="#skill" className={`menu ${brightNess ? 'lightMode' : 'darkMode'}`}  onClick={handleNavbarToggle}>Skills</Nav.Link>
            <Nav.Link href="#project" className={`menu ${brightNess ? 'lightMode' : 'darkMode'}`}  onClick={handleNavbarToggle}>Project</Nav.Link>
            
            <Nav.Link href="#about" className={`menu ${brightNess ? 'lightMode' : 'darkMode'}`}  onClick={handleNavbarToggle}>About</Nav.Link>
            <Nav.Link href="#contact" className={`menu ${brightNess ? 'lightMode' : 'darkMode'}`} onClick={handleNavbarToggle}>Contact</Nav.Link>
            
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header