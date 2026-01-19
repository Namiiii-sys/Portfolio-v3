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
        scrub: 1, // Reduced from 1.5 for snappier response
      },
    });

    // 1. Stars: Moves slightly 
    tl.to(starsRef.current, { yPercent: 10, ease: "none" }, 0);

    // 2. Planet: Slow movement to feel massive and distant
    tl.to(planetRef.current, { yPercent: 25, ease: "none" }, 0);

    // 3. Far Ridge: Starts moving immediately
    tl.to(mountainFarRef.current, { yPercent: 40, ease: "none" }, 0);

    // 4. Intro Text
    tl.to(introTextRef.current, { yPercent: 60, opacity: 0, ease: "power1.in" }, 0);

    // 5. Mid Ridge: Clear separation from Far Ridge
    tl.to(mountainMidRef.current, { yPercent: 70, ease: "none" }, 0);

    // 6. Name Text: Moves faster than intro
    tl.to(nameTextRef.current, { yPercent: 90, scale: 1.1, opacity: 0, ease: "power1.in" }, 0);

    // 7. Front Ridge: Moves FASTEST for immediate depth feedback
    tl.to(mountainCloseRef.current, { yPercent: 120, ease: "none" }, 0);

    // 8. Fog: Drifts/Thinking
    tl.to(fogRef.current, { yPercent: -30, opacity: 0, ease: "none" }, 0);

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#02000a] text-white"
    >
      {/* LAYER 1: Deep Space & Stars */}
      <div ref={starsRef} className="absolute inset-0 z-0 bg-gradient-to-b from-[#05030a] via-[#0f0c29] to-[#02000a]">
        <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-20" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'radial-gradient(1.5px 1.5px at 10% 10%, white 100%, transparent), radial-gradient(1px 1px at 20% 40%, white 100%, transparent), radial-gradient(2px 2px at 50% 50%, white 100%, transparent)',
            backgroundSize: '400px 400px',
          }}
        />
      </div>

      {/* LAYER 2: Atmosphere / Fog */}
      <div ref={fogRef} className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-60">
        <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/15 rounded-full blur-[100px]" />
      </div>

      {/* LAYER 3: Volumetric Planet */}
      <div
        ref={planetRef}
        className="absolute top-[10%] right-[8%] w-[20vh] h-[20vh] md:w-[36vh] md:h-[36vh] rounded-full z-20"
        style={{
          // Complex gradient for 3D sphere effect (Light source top-left)
          background: 'radial-gradient(circle at 25% 25%, #a855f7 0%, #3b0764 40%, #000000 85%)',
          // Inner shadow for dark side, Outer shadow for atmospheric glow
          boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.9), 0 0 50px rgba(126, 34, 206, 0.3)'
        }}
      >
        {/* Subtle terminator line texture overlay */}
        <div className="absolute inset-0 rounded-full opacity-30 bg-gradient-to-br from-transparent to-black" />
      </div>

      {/* LAYER 4: Far Mountain Ridge */}
      <div
        ref={mountainFarRef}
        className="absolute bottom-[-2%] left-0 w-full h-[40vh] z-30"
        style={{
          clipPath: 'polygon(0% 100%, 0% 35%, 15% 55%, 30% 25%, 50% 45%, 70% 15%, 85% 35%, 100% 15%, 100% 100%)',
          background: 'linear-gradient(to bottom, #1e1b4b 0%, #0f172a 100%)', // Indigo-950
          opacity: 0.8
        }}
      />

      {/* LAYER 5: Intro Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-35 pointer-events-none pb-[15vh]">
        <h2 ref={introTextRef} className="text-xl md:text-2xl text-purple-200 tracking-[0.4em] font-extralight uppercase mb-8 opacity-90">
          Hello, I am
        </h2>
      </div>

      {/* LAYER 6: Mid Mountain Ridge */}
      <div
        ref={mountainMidRef}
        className="absolute bottom-[-5%] left-0 w-full h-[45vh] z-40"
        style={{
          clipPath: 'polygon(0% 100%, 0% 55%, 20% 35%, 40% 65%, 60% 25%, 80% 55%, 100% 35%, 100% 100%)',
          background: 'linear-gradient(to bottom, #2e1065 0%, #020617 100%)', // Violet-950
        }}
      />


      <div className="absolute inset-0 flex flex-col items-center justify-center z-45 pointer-events-none pt-[5vh]">
        <h1
          ref={nameTextRef}
          className="text-7xl md:text-[8rem] font-serif font-bold tracking-wide text-white drop-shadow-[0_0_60px_rgba(168,85,247,0.5)] leading-none"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-indigo-100 to-indigo-500">
            Namita Mehra
          </span>
        </h1>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-3 md:gap-6 text-indigo-200/80 font-light tracking-[0.15em] text-xs md:text-sm uppercase animate-fade-in-up">
          <span>Full Stack Developer</span>
          <span className="w-1 h-1 rounded-full bg-indigo-500" />
          <span>ML Enthusiast</span>
          <span className="w-1 h-1 rounded-full bg-indigo-500" />
          <span>AI Explorer</span>
          <span className="w-1 h-1 rounded-full bg-indigo-500 hidden md:block" />
          <span className="hidden md:block">Open Source Contributor</span>
        </div>
      </div>

      {/* LAYER 8: Front Mountain Ridge (Foreground) */}
      <div
        ref={mountainCloseRef}
        className="absolute bottom-[-10%] left-0 w-full h-[50vh] z-50"
        style={{
          clipPath: 'polygon(0% 100%, 0% 70%, 15% 40%, 35% 70%, 55% 30%, 75% 60%, 100% 40%, 100% 100%)',
          background: 'linear-gradient(to bottom, #020617 0%, #020617 100%)', // Slate-950 to Black
        }}
      />

      {/* Foreground Dust/Noise Overlay */}
      <div className="absolute inset-0 z-60 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />



    </section>
  );
};

export default Hero;
