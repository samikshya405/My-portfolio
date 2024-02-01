import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './project.css'
const Project = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <Container className='text-light project' id='project'>
        <h1 className='text-center custom-color py-5 my-5'>My Latest Projects</h1>
        {/* <div
      className={`hover-box ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button className="centered-button" >Click me</button>
    </div> */}
    <div className='projects-card  ' >
      {/* <div  className={`hover-box ${isHovered ? 'hovered' : ''} shadow-lg rounded`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)} >
        <button className="centered-button" >Click me</button>
        1
      </div> */}
      
      <div className=' d-flex justify-content-center align-items-center shadow-lg  rounded'>
        Coming Soon... 
      </div>
      <div className='d-flex justify-content-center align-items-center shadow-lg  rounded'>
        Coming Soon... 
      </div>
      <div className='d-flex justify-content-center align-items-center shadow-lg rounded'>
        Coming Soon... 
      </div>
      <div className='d-flex justify-content-center align-items-center shadow-lg rounded'>
        Coming Soon... 
      </div>

    </div>
    </Container>
  )
}

export default Project