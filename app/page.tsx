import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Socials from './components/Socials'

const page = () => {
  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Socials />
    </div>
  )
}

export default page
