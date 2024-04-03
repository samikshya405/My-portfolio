import React from 'react'
import Header from '../Component/Header'
import './landingpage.css'
import { Container } from 'react-bootstrap'
import Banner from '../Component/Banner'

const Landingpage = ({ brightNess }) => {
  return (
    <div className='landing ' style={{color: brightNess ? 'black':'white' }} id='home' >
        
        
        <Container  >
            <Banner/>
        </Container>
    </div>
  )
}

export default Landingpage