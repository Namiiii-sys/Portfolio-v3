"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiAward } from "react-icons/fi";

const certifications = [
  {
    id: 1,
    title: "Code Kshetra 2.0",
    issuer: "JIMS, Rohini",
    date: "feb,2025",
    image: "/cert.webp",
  },
  {
    id: 2,
    title: "BrainWave",
    issuer: "DTU, Delhi",
    date: "2024",
    image: "/cert.webp",
  },
  {
    id: 3,
    title: "BVP Hex",
    issuer: "Bharati Vidyapeeth, Delhi",
    date: "2024",
    image: "/cert.webp",
  },
  {
    id: 3,
    title: "BVP Hex",
    issuer: "Bharati Vidyapeeth, Delhi",
    date: "2024",
    image: "/cert.webp",
  }
 
];

export default function Certifications() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 px-6 md:px-12 bg-[#0f0f0f] text-white">
      <h1 className="text-4xl font-bold mb-20 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        My Certifications
      </h1>

      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-800 -translate-x-1/2">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-blue-500"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-20">
          {certifications.map((cert, index) => (
            <TimelineCard
              key={cert.id}
              cert={cert}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ cert, isLeft, index }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
      transition={{ type: "spring", damping: 15, stiffness: 100 }}
      className={`relative flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center z-10">
        <FiAward className="text-white text-xs" />
      </div>

      <div
        className={`w-full md:w-1/2 ${isLeft ? "md:pr-16" : "md:pl-16"}`}
      >
      <div className="p-6 flex justify-between items-center gap-10 rounded-xl bg-white/10 backdrop-blur-lg border-1 border-purple-950 backdrop-saturate-150 shadow-xl">

         <div>
          <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
          <p className="text-purple-400 mb-3">{cert.issuer} · {cert.date}</p>
          <p className="text-gray-300">{cert.description}</p>
          </div>
         <div className="w-30 rounded-md overflow-hidden mr-6">
            <img
                onClick={() => window.open(cert.image, "_blank")}
                src={cert.image}
                alt={cert.issuer}
                className="w-full h-full object-cover"
            />      
         </div>
        </div>
      </div>
    </motion.div>
  );
}