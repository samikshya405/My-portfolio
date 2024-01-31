import React from 'react'
import Header from '../Component/Header'
import './landingpage.css'
import { Container } from 'react-bootstrap'
import Banner from '../Component/Banner'

const Landingpage = () => {
  return (
    <div className='landing text-light' id='home' >
        
        
        <Container  >
            <Banner/>
        </Container>
    </div>
  )
}

export default Landingpage