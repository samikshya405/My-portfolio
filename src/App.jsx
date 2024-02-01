import React from 'react'
import Landingpage from './Pages/Landingpage'
import About from './Pages/About'
import Header from './Component/Header'
import Project from './Pages/Project'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className='webpage'>
      <Header/>

      <Landingpage/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App