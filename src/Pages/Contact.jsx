import React from 'react'
import { Container } from 'react-bootstrap'
import './contact.css'
import { BiLogoGmail } from "react-icons/bi";
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';
import { FaRegCopyright } from "react-icons/fa";
const Contact = ({brightNess}) => {
  return (
    <Container className=' contact' style={{color:brightNess ? "black":'white'}} id='contact'>
            <h1 className='text-center custom-color mb-5'>Contact</h1>
          
            <div className='contact-box'>
                <a href='mailto: Samikshyakharel405@gmail.com' className='text-decoration-none  shadow-lg p-3' style={{color:'inherit'}}><BiLogoGmail size={40} color='#0b66c2' /> SamikshyaKharel405@gmail.com</a>
                <div className='shadow-lg d-flex gap-5 justify-content-center align-items-center p-3'> 
                <a href='https://www.linkedin.com/in/samikshya-kharel-76197a1a0/' target='_blank'>
                  <Linkedin size={40} color="#0b66c2" />
                  </a>
                  <a href='https://github.com/samikshya405' target='_blank'>
                    <Github size={40} color='orange'/>
                  </a></div>
            </div>
            <div className='text-center pt-4 pb-2 '><FaRegCopyright/>Copyright 2024. Made by Samikshya Kharel</div> 
            
    </Container>
  )
}

export default Contact