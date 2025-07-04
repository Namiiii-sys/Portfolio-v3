import React from 'react'
import Image from 'next/image'
import namita from '@/public/Namita.jpg'

const Contact = () => {
  return (
    <section className='bg-white'>
      <div className='bg-blue-800 h-[80%] flex gap-10 items-center justify-center mx-auto p-10 m-10'>
      <div className='illustration'>
        <Image 
        src={namita}
        alt="Contact Illustration"
        width={200}
        height={200}
        className=""/>
      </div>
      <div className='form w-1/2 space-y-5 backdrop-blur-2xl bg-indigo-900/30'>
        <div className='form-container grid md:grid-cols-2 sm:grid-cols-2 gap-2'>
          <div className='flex flex-row gap-2'>
            <input type="text" id="name" className="border p-2 rounded-lg" placeholder='name'/>
            <br />
            <input type="email" id="email" className="border p-2 rounded-lg" placeholder='email'/>
          </div>
          <br/>
          <div className='flex flex-row gap-2'>
            <input type="text" id="name" className="border p-2 rounded-lg" placeholder='name'/>
            <br />
            <input type="email" id="email" className="border p-2 rounded-lg" placeholder='email'/>
          </div>
        </div>
        <div className='form-container grid md:grid-cols-1 sm:grid-cols-1 gap-3 '>
            <div>
                <textarea id="message" className="border p-2 w-4/6 h-40 rounded-lg" placeholder='Type in Your message..'></textarea>
            </div>
        </div>

      </div>
      </div>
      <div className='relative flex justify-center items-center mx-auto w-full h-[20%]'>
        <div className='absolute -top-20 bg-amber-200 rounded-t-4xl rounded-b-md h-40 w-4/5'>

        </div>

      </div>
    </section>
  )
}

export default Contact
