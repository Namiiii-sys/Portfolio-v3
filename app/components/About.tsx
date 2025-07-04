'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icon3 from '@/public/icon3.webp'

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-15 bg-gradient-to-br from-[#0f172a] to-[#1e293b] sm:py-15 sm:px-20 sm:flex-row">
      <div className="w-full sm:py-10 md:max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-3 items-stretch">

          <div className="w-full md:w-3/5 flex flex-col gap-4 md:gap-4">
            {/* Two Boxes Row */}
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
                    src={icon3}
                    alt=""
                    width={80}
                    height={80}
                    className='mx-auto bg-gradient-to-r from-[#0f172a] to-[#351355] rounded-lg'/>
                  <div className='flex-grow flex flex-col justify-between pt-4'>
                    <div>
                      <h1 className='text-white font-semibold font-mono text-lg'>
                        {`MY`} 
                        <span className='text-indigo-500'>{` SKILLS.`}</span>
                      </h1>
                    </div>
                    <p className='text-sm text-gray-300 mt-2 line-clamp-3'>
                      Passionate frontend developer creating responsive web experiences with modern technologies. 
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
                 <Image
                    src={icon3}
                    alt=""
                    width={120}
                    height={120}
                    className='mx-auto bg-gradient-to-r from-[#0f172a] to-[#351355] rounded-lg'/>
                <div>
                <h1 className='text-white font-semibold text-xl'>
                  MY PASSION FOR <span className='text-indigo-500'>CODING.</span> 
                </h1>
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
              <h1 className='text-white font-semibold text-2xl mb-6'>TECH STACK</h1>
              <div className='grid grid-cols-3 gap-4 w-full max-w-xs'>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className='bg-indigo-900/30 rounded-lg p-3 flex items-center justify-center'>
                    <div className='bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12' />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;