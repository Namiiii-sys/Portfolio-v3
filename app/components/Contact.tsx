"use client";
import React from 'react';
import { FiMail, FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">

      {/* Background Glow - Subtle, not pitch black */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20">

        <SectionHeading
          title="Let's Talk"
          subtitle="Have an idea? Let's build it."
          className="mb-16 text-center md:text-left"
        />

        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Grid overlay for texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10">

            {/* Left: Info */}
            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4">CONTACT</h3>
                  <a href="mailto:namitamehra000@gmail.com" className="text-lg md:text-2xl text-white font-medium hover:text-indigo-300 transition-colors block leading-tight">
                    namitamehra000<br />@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4">BASED IN</h3>
                  <p className="text-xl text-white">India</p>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                  <FiArrowUpRight className="text-2xl text-white" />
                </div>
              </div>
            </div>

            {/* Right: The Formatting You Liked (Underlined Inputs) */}
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 tracking-widest uppercase">NAME</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xl text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500 transition-all font-light"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 tracking-widest uppercase">EMAIL</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xl text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500 transition-all font-light"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 tracking-widest uppercase">MESSAGE</label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xl text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500 transition-all resize-none font-light"
                  placeholder="Hello..."
                />
              </div>

              <button
                type="button"
                className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-indigo-400 transition-colors w-max"
              >
                SEND MESSAGE
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
