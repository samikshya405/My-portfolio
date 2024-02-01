import React from 'react'
import { Container } from 'react-bootstrap'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className='text-light shadow-lg'>
        <div className='text-center p-5 '><FaRegCopyright/>Copyright 2024. Made by Samikshya Kharel</div> 
    </Container>
  )
}

export default Footer