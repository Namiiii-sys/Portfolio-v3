'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icon3 from '@/public/icon3.webp';
import illust from '@/public/illust.png';
import { FaReact, FaNodeJs, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5 , SiPython, SiCplusplus } from 'react-icons/si';

const About = () => {
  const techStackIcons = [
    { icon: FaReact, name: 'React' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: FaGitAlt, name: 'Git' },
    { icon: SiCplusplus, name: 'C++'},
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiTailwindcss, name: 'Tailwind CSS' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  ];
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-15 bg-gradient-to-br from-[#0f172a] to-[#1e293b] sm:py-15 sm:px-20 sm:flex-row">
      <div className="w-full sm:py-10 md:max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-3 items-stretch">

          <div className="w-full md:w-3/5 flex flex-col gap-4 md:gap-4">
            <div className="flex flex-col sm:flex-row gap-5 md:gap-3">
              <motion.div 
                className="w-full sm:w-1/2 h-60 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-purple-400/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <div className='p-4 h-full flex flex-col'>
                  <Image
                    src={icon3}
                    alt=""
                    width={80}
                    height={80}
                    className='mx-auto bg-gradient-to-r from-[#0f172a] to-[#351355] rounded-lg'/>
                  <div className='flex-grow flex flex-col justify-between pt-4'>
                    <div>
                      <h1 className='text-white font-semibold font-mono text-lg'>
                        {`Hi There, I'm`} 
                        <span className='text-indigo-500'>{` NAMITA.`}</span>
                      </h1>
                    </div>
                    <p className='text-sm text-gray-300 mt-2 line-clamp-3'>
                      Passionate frontend developer creating responsive web experiences with modern technologies. 
                      Specializing in React and UI/UX design.
                    </p>
                  </div>
                </div>
              </motion.div>  
              <motion.div 
                className="w-full sm:w-1/2 h-60 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-purple-400/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <div className='p-4 h-full flex flex-col'>
                  <Image
                    src={illust}
                    alt=""
                    width={120}
                    height={150}
                    className='mx-auto '/>
                  <div className='flex-grow flex flex-col justify-between pt-4'>
                    <div>
                      <h1 className='text-white font-semibold font-mono text-lg'>
                        {`MY`} 
                        <span className='text-indigo-500'>{` SKILLS.`}</span>
                      </h1>
                    </div>
                    <p className='text-sm text-gray-300 mt-2 line-clamp-3'>
                      Passionate full stack developer creating responsive web experiences with modern technologies. 
                      Specializing in React and UI/UX design.
                    </p>
                  </div>
                </div>
              </motion.div>  
            </div>
            
            <motion.div 
              className="h-60 w-full bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-purple-400/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className='p-6 flex h-full'>
                <div className="w-1/2 flex flex-col justify-center pr-4">
                  <h1 className='text-white font-semibold text-xl'>
                    MY PASSION FOR <span className='text-indigo-500'>CODING.</span> 
                  </h1>
                  <p className='text-sm text-gray-300 mt-3'>
                    I have a deep passion for coding and creating beautiful, functional user interfaces. 
                    I love turning ideas into reality through programming.
                  </p>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                  <Image
                    src={illust}
                    alt="Coding passion illustration"
                    width={200}
                    height={200}
                    className='object-contain'
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-2/5 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-purple-400/20 transition-all duration-300 mt-5 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className='p-6 h-full flex flex-col items-center justify-center'>
              <h1 className='text-white font-semibold text-2xl mb-6'>TECH <span className='text-indigo-500'>STACK</span></h1>
              
              <div className="relative h-64 w-64 mb-5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="text-white text-md font-bold bg-indigo-900/30 rounded-full w-24 h-24 flex items-center justify-center backdrop-blur-sm"
                    
                  >
                    MY STACK
                  </div>
                </div>
                
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 18, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {techStackIcons.map((tech, index) => {
                    const angle = (index / techStackIcons.length) * 360;
                    const radius = 90;
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute w-10 h-10 flex items-center justify-center"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)',
                        }}
                       
                      >
                        <tech.icon 
                          className="text-white text-2xl transition-all duration-300 hover:text-indigo-400" 
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
              
              <p className="text-gray-300 text-center text-sm px-4">
                {`I specialize in modern web technologies including React, Next.js, and Tailwind CSS.
                Each icon represents a technology I'm proficient with.`}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;