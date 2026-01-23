"use client";
import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 w-full">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20">

        <SectionHeading
          title="Let's Talk"
          subtitle="Have an idea? Let's build it."
          className="mb-16 text-center md:text-left"
        />

        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10">

            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4">CONTACT</h3>
                  <a href="mailto:namitamehra000@gmail.com" className="text-xs md:text-lg text-white font-medium hover:text-indigo-300 transition-colors">
                    namitamehra000@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4">BASED IN</h3>
                  <p className="text-lg text-white">India</p>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                  <FiArrowUpRight className="text-2xl text-white" />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 tracking-widest uppercase">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-md text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500 transition-all font-light"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 tracking-widest uppercase">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-md text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500 transition-all font-light"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 tracking-widest uppercase">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-md text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500 transition-all resize-none font-light"
                  placeholder="Hello..."
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all w-max ${status === 'success' ? 'bg-green-500 text-white' :
                      status === 'error' ? 'bg-red-500 text-white' :
                        'bg-white text-black hover:bg-indigo-400'
                    }`}
                >
                  {status === 'sending' ? 'SENDING...' :
                    status === 'success' ? 'MESSAGE SENT!' :
                      status === 'error' ? 'FAILED - RETRY?' :
                        'SEND MESSAGE'}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
