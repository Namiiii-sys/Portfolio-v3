import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Socials from './components/Socials'
import ProjectSection from './components/projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

const page = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProjectSection />
      <Skills />
      <Certificates />
      <Contact />
      <Socials />
    </div>
  )
}

export default page
