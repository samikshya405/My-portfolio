import React from 'react'
import { Button } from 'react-bootstrap'
import './banner.css'
import img from '../assets/bg.png'
import img1 from '../assets/photo.jpeg'
import { Download, Linkedin, Github,Envelope } from 'react-bootstrap-icons';
const Banner = () => {
  return (
    <div className='top'>
        <div className='d-flex align-items-center justify-content-center gap-5   banner'>
            <div className='d-flex flex-column gap-3 content'>
                <h3 className='custom-color'>Hello !</h3>
    <h1>I'm a Frontend developer</h1>
                <p>I'm a dedicated frontend developer on a mission to create seamless and visually stunning web experiences.</p>
                <div className=' info '>
                    <button>Download CV <Download/></button>
                    
                    
                </div>
                <div className='d-flex gap-4 mt-4 info'>
                  <a href='https://www.linkedin.com/in/samikshya-kharel-76197a1a0/' target='_blank'>
                  <Linkedin size={40} color="#0b66c2" />
                  </a>
                  <a href='https://github.com/samikshya405' target='_blank'>
                  <Github size={40} color='white'/>
                  </a>
                  <a href='mailto: Samikshyakharel405@gmail.com'>
                    <Envelope size={40} color='#0b66c2'/>
                  </a>
                
                
                </div>
                
            </div>
            <div className='img-container'>
                <img src={img1 }alt='my-image' />
                </div>
            
        </div>




    </div>
  )
}

export default Banner