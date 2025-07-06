import React from 'react'
import ProjectSection from './components/projects'
import Achievements from './components/Achievements'
import Navbar from './components/Navbar'
import About1 from './components/About1'
// import Contact from './components/Contact'
import About from './components/About'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ProjectSection />
      <Achievements/> 
      {/* <Contact/>  */}
      <About1/>
      <About/>
    </div>
  )
}

export default page
