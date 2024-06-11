import React from 'react'
import { Container } from 'react-bootstrap'
import './skill.css'
import { FaHtml5,FaCss3Alt, FaReact, FaBootstrap ,FaSass, FaGitAlt  } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase, IoBug  } from "react-icons/io5";
// import { SiRedux, SiTailwindcss, SiTestinglibrary, SiTypescript } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { SiExpress, SiNextdotjs, SiRedux, SiTailwindcss, SiTestinglibrary, SiTypescript } from "react-icons/si";
import { DiMongodb, DiNodejs } from "react-icons/di";
const Skill = ({brightNess}) => {
  return (
    <Container className='skills ' style={{color:brightNess ? "black":'white'}} id='skill'>
        <h1 className='custom-color text-center  py-5 mb-5'>My Top Skills</h1>
        <div className='skill-box '>
          <div>
          <div className=' text-center py-4 shadow-lg box'>
          <FaHtml5 size={60} color="#d45d3d"/>

          </div>
          <p className='text-center py-2'>HTML</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <FaCss3Alt size={60} color="#2d53e5"/>

          </div>
          <p className='text-center py-2'>CSS</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <IoLogoJavascript size={60} color="yellow"/>

          </div>
          <p className='text-center py-2'>Javascript</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <FaReact size={60} color="blue"/>

          </div>
          <p className='text-center py-2'>React</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <SiRedux size={60} color='purple'/>

          </div>
          <p className='text-center py-2'>Redux</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <IoLogoFirebase size={60} color='yellow'/>

          </div>
          <p className='text-center py-2'>Firebase</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <FaBootstrap size={60} color='blueviolet'/>

          </div>
          <p className='text-center py-2'>Bootstrap</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <FaSass size={60} color='#cf6499'/>

          </div>
          <p className='text-center py-2'>Sass</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <FaGitAlt size={60} color='#f05233'/>

          </div>
          <p className='text-center py-2'>Git</p>

          </div>
          
          <div>
          <div className=' py-4 shadow-lg box'>
          <SiTypescript size={60} color='#387cc8'/>

          </div>
          <p className='text-center py-2'>TypeScript</p>

          </div>
          <div>
          <div  className=' py-4 shadow-lg box'>
          <IoBug size={60} color='blue'/>

          </div>
          <p className='text-center py-2'>Debugging</p>

          </div>
          <div>
          <div  className=' py-4 shadow-lg  box'>
          <TbSeo size={60} color='#2dbbdc'/>

          </div>
          <p className='text-center py-2'>SEO</p>

          </div>
          <div>
          <div  className=' py-4 shadow-lg  box'>
          <SiTailwindcss size={60} color='#41bff8'/>

          </div>
          <p className='text-center py-2'>Tailwind CSS</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <DiNodejs size={60} color='green'/>

          </div>
          <p className='text-center py-2'>Node js</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <SiExpress size={60} color='black'/>

          </div>
          <p className='text-center py-2'>Express</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <DiMongodb size={60} color='darkgreen'/>

          </div>
          <p className='text-center py-2'>Mongo DB</p>

          </div>
          <div>
          <div className=' py-4 shadow-lg box'>
          <SiNextdotjs size={60} color='black'/>

          </div>
          <p className='text-center py-2'>Next JS</p>

          </div>

          
          

         
        </div>
    </Container>
  )
}

export default Skill