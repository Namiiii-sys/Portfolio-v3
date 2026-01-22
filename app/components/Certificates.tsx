"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiAward } from "react-icons/fi";
import Image from "next/image";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description?: string;
}

interface TimelineCardProps {
  cert: Certification;
  isLeft: boolean;
  index: number;
}

type Category = "Hackathons" | "Professional";

const certifications: Record<Category, Certification[]> = {
  Hackathons: [
    {
      id: 1,
      title: "Code Kshetra 2.0",
      issuer: "JIMS, Rohini",
      date: "Feb, 2025",
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
    }
  ],
  Professional: [
    {
      id: 1,
      title: "Mastering Python libraries for Data Science",
      issuer: "Coursera / Udemy",
      date: "2024",
      image: "/cert.webp",
    },
    {
      id: 2,
      title: "Machine Learning fundamentals",
      issuer: "Coursera / Udemy",
      date: "2024",
      image: "/cert.webp",
    },
    {
      id: 3,
      title: "AWS cloud computing",
      issuer: "Coursera / Udemy",
      date: "2024",
      image: "/cert.webp",
    }
  ]
};

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<Category>("Hackathons");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-10 px-6 md:px-20 text-white">
      <h1 className="text-4xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-indigo-100 to-indigo-500">
        MY CERTIFICATIONS
      </h1>

      <div className="flex justify-center gap-2 mb-12">
        {(Object.keys(certifications) as Category[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
              : "text-gray-400 hover:text-white hover:bg-white/5 border border-white/5"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto min-h-[400px]">

        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-800 -translate-x-1/2">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-blue-500"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {certifications[activeTab].map((cert, index) => (
              <TimelineCard
                key={cert.id}
                cert={cert}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ cert, isLeft }: TimelineCardProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
      transition={{ type: "spring", damping: 15, stiffness: 100 }}
      className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      <div className="absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center z-10">
        <FiAward className="text-white text-xs" />
      </div>

      <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
        <div className="p-4 flex justify-between items-center gap-6 rounded-xl bg-white/10 backdrop-blur-lg border border-purple-950 backdrop-saturate-150 shadow-xl">
          <div>
            <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
            <p className="text-purple-400 mb-2">
              {cert.issuer} · {cert.date}
            </p>
            {cert.description && (
              <p className="text-gray-300">{cert.description}</p>
            )}
          </div>

          <div className="w-32 h-20 rounded-md overflow-hidden flex-shrink-0">
            <Image
              src={cert.image}
              alt={cert.issuer}
              width={40}
              height={40}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => window.open(cert.image, "_blank")}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
