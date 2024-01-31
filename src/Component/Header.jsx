import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './header.css'
const Header = () => {
  return (
    <Navbar expand="lg" variant='dark' className='sticky-top nav-menu'  >
      <Container>
        <Navbar.Brand href="#home" className='custom-color'>Samikshya</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto " >
            <Nav.Link href="#home" className='menu'>Home</Nav.Link>
            <Nav.Link href="#project" className='menu'>Project</Nav.Link>
            <Nav.Link href="#skill" className='menu'>Skills</Nav.Link>
            <Nav.Link href="#about" className='menu'>About</Nav.Link>
            <Nav.Link href="#contact" className='menu'>Contact</Nav.Link>
            
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header