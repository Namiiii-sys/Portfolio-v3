import React from 'react'
import Achievements from './components/Achievements'
import Navbar from './components/Navbar'
// import Contact from './components/Contact'
import About from './components/About'
import ProjectsPage from './components/Project1'
// import Project from './components/projects'

const page = () => {
  return (
    <div>
      <Navbar/>
      <About/>  
      <ProjectsPage/>
      {/* <Project/> */}
      <Achievements/> 
      {/* <Contact/> */}
      
      
    </div>
  )
}

export default page
