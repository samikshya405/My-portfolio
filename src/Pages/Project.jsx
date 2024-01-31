import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './project.css'
const Project = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <Container className='text-light'>
        <h1 className='text-center custom-color py-3'>My Projects</h1>
        <div
      className={`hover-box ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button className="centered-button">Click me</button>
    </div>
    </Container>
  )
}

export default Project