import React from 'react'
import Landingpage from './Pages/Landingpage'
import About from './Pages/About'
import Header from './Component/Header'
import Project from './Pages/Project'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import AcademicBackground from './Pages/AcademicBackground'

const App = () => {
  return (
    <div className='webpage'>
      <Header/>

      <Landingpage/>
      
      <Skill/>
      <Project/>
      <AcademicBackground/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App