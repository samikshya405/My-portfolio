import React from 'react'
import { Container } from 'react-bootstrap'
import './contact.css'
import { BiLogoGmail } from "react-icons/bi";
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <Container className='text-light contact' id='contact'>
            <h1 className='text-center custom-color py-5 my-5'>Contact</h1>
          
            <div className='contact-box'>
                <a href='mailto: Samikshyakharel405@gmail.com' className='text-decoration-none text-light shadow-lg p-3'><BiLogoGmail size={40} color='#0b66c2' /> SamikshyaKharel405@gmail.com</a>
                <div className='shadow-lg d-flex gap-5 justify-content-center align-items-center p-3'> 
                <a href='https://www.linkedin.com/in/samikshya-kharel-76197a1a0/' target='_blank'>
                  <Linkedin size={40} color="#0b66c2" />
                  </a>
                  <a href='https://github.com/samikshya405' target='_blank'>
                    <Github size={40} color='orange'/>
                  </a></div>
            </div>
            
    </Container>
  )
}

export default Contact