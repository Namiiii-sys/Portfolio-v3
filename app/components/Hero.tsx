"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for all layers
  const starsRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const mountainFarRef = useRef<HTMLDivElement>(null);
  const mountainMidRef = useRef<HTMLDivElement>(null);
  const mountainCloseRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLHeadingElement>(null);
  const nameTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1, 
      },
    });

    // Stars
    tl.to(starsRef.current, { yPercent: 10, ease: "none" }, 0);

    // Planet
    tl.to(planetRef.current, { yPercent: 25, ease: "none" }, 0);

    // Far Ridge
    tl.to(mountainFarRef.current, { yPercent: 40, ease: "none" }, 0);

    // Intro Text
    tl.to(introTextRef.current, { yPercent: 60, opacity: 0, ease: "power1.in" }, 0);

    // Mid Ridge
    tl.to(mountainMidRef.current, { yPercent: 70, ease: "none" }, 0);

    // Name Text
    tl.to(nameTextRef.current, { yPercent: 90, scale: 1.1, opacity: 0, ease: "power1.in" }, 0);

    // Front Ridge
    tl.to(mountainCloseRef.current, { yPercent: 120, ease: "none" }, 0);

    // Fog
    tl.to(fogRef.current, { yPercent: -30, opacity: 0, ease: "none" }, 0);

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-transparent text-white"
    >
      {/* LAYER 3: Volumetric Planet */}
      <div
        ref={planetRef}
        className="absolute top-[12%] right-[5%] md:top-[10%] md:right-[8%] w-[18vh] h-[18vh] md:w-[36vh] md:h-[36vh] rounded-full z-20"
        style={{
          background: 'radial-gradient(circle at 25% 25%, #a855f7 0%, #3b0764 40%, #000000 85%)',
          boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.9), 0 0 50px rgba(126, 34, 206, 0.3)'
        }}
      >
        <div className="absolute inset-0 rounded-full opacity-30 bg-gradient-to-br from-transparent to-black" />
      </div>

      {/* Far Mountain Ridge */}
      <div
        ref={mountainFarRef}
        className="absolute bottom-[-2%] left-0 w-full h-[40vh] z-30"
        style={{
          clipPath: 'polygon(0% 100%, 0% 35%, 15% 55%, 30% 25%, 50% 45%, 70% 15%, 85% 35%, 100% 15%, 100% 100%)',
          background: 'linear-gradient(to bottom, #1e1b4b 0%, #0f172a 100%)', // Indigo-950
          opacity: 0.8
        }}
      />

      {/* Intro Text */}
      <div className="absolute top-[32%] w-full flex flex-col items-center justify-center z-35 pointer-events-none">
        <h2 ref={introTextRef} className="text-lg sm:text-xl md:text-2xl text-purple-200 tracking-[0.4em] font-extralight uppercase mb-4 md:mb-8 opacity-90">
          Hello, I am
        </h2>
      </div>

      {/* Mid Mountain Ridge */}
      <div
        ref={mountainMidRef}
        className="absolute bottom-[-5%] left-0 w-full h-[45vh] z-40"
        style={{
          clipPath: 'polygon(0% 100%, 0% 55%, 20% 35%, 40% 65%, 60% 25%, 80% 55%, 100% 35%, 100% 100%)',
          background: 'linear-gradient(to bottom, #2e1065 0%, #020617 100%)', // Violet-950
        }}
      />


      <div className="absolute top-[38%] w-full flex flex-col items-center justify-center z-45 pointer-events-none">
        <h1
          ref={nameTextRef}
          className="text-5xl sm:text-7xl md:text-[8rem] font-serif font-bold tracking-wide text-white drop-shadow-[0_0_60px_rgba(168,85,247,0.5)] leading-none text-center px-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-indigo-100 to-indigo-500">
            Namita Mehra
          </span>
        </h1>

        <div className="mt-4 md:mt-6 flex flex-wrap justify-center items-center gap-2 md:gap-6 text-indigo-200/80 font-light tracking-[0.1em] text-[10px] md:text-sm uppercase animate-fade-in-up px-6 md:px-0 leading-relaxed">
          <span>Full Stack Developer</span>
          <span className="w-1 h-1 rounded-full bg-indigo-500 hidden md:block" />
          <span className="w-0.5 h-0.5 rounded-full bg-indigo-500 md:hidden" />
          <span>ML Enthusiast</span>
          <span className="w-1 h-1 rounded-full bg-indigo-500 hidden md:block" />
          <span className="w-0.5 h-0.5 rounded-full bg-indigo-500 md:hidden" />
          <span>AI Explorer</span>
          <span className="w-1 h-1 rounded-full bg-indigo-500 hidden md:block" />
          <span className="hidden md:block">Open Source Contributor</span>
        </div>
      </div>

      {/* Front Mountain Ridge (Foreground) */}
      <div
        ref={mountainCloseRef}
        className="absolute bottom-[-10%] left-0 w-full h-[50vh] z-50"
        style={{
          clipPath: 'polygon(0% 100%, 0% 70%, 15% 40%, 35% 70%, 55% 30%, 75% 60%, 100% 40%, 100% 100%)',
          background: 'linear-gradient(to bottom, #020617 0%, #020617 100%)', // Slate-950 to Black
        }}
      />

      <div className="absolute inset-0 z-60 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />



    </section>
  );
};

export default Hero;
