import React from 'react'
import './about.css'
import { Container } from 'react-bootstrap'
const About = () => {
  return (
    <Container>
    <div className="container-sec text-light" id="about">
    <div className="about  d-flex justify-content-between align-items-center  gap-5 px-5 my-3" >
        <div className="about-img">
            <img src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""/>
           
        </div>
        <div className="about-content ">
            <h2>about me</h2>
            <h4>A dedicated Front-end Developer</h4>
            <p> I'm Samikshya, a frontend developer currently pursuing a Bachelor's degree in Information Technology, set to graduate in 2025. </p>
            <p>Passionate about crafting engaging and user-centric digital experiences, my journey has been a dynamic blend of creativity and technology. </p>
        </div>
    </div>
</div>
</Container>
  )
}

export default About