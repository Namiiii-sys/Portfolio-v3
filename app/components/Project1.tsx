"use client";

import React, { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Project = {
  id: number;
  title: string;
  video: string;
  desc: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "RentoAI - AI-Powered Rental Platform",
    video: "/rento.mp4",
    desc: "A platform that leverages AI to simplify property rental searches, integrating recommendation systems and smart filtering.",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "Clerk"],
  },
  {
    id: 2,
    title: "Swiftpass - Event QR Check-in System",
    video: "/rento.mp4",
    desc: "A streamlined QR-based check-in solution for event organizers with CSV upload, email automation, and scanning features.",
    techStack: ["React", "Firebase", "Tailwind", "QRCode"],
  },
  {
    id: 3,
    title: "Quickfix - Local Service Finder",
    video: "/rento.mp4",
    desc: "An all-in-one platform connecting users with nearby repair and maintenance professionals in real-time.",
    techStack: ["Next.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    id: 4,
    title: "QuirkyCart - E-commerce Platform",
    video: "/quirkycart.mp4",
    desc: "A creative e-commerce web app with user-friendly UI, smooth checkout, and Django-powered backend.",
    techStack: ["Django", "PostgreSQL", "Bootstrap"],
  },
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  total: number;
  containerProgress: MotionValue<number>;
}> = ({ project, index, total, containerProgress }) => {

  const cardsBelow = total - index - 1;
  
  
  const startScale = 1;
  const endScale = 1 - (cardsBelow * 0.07); 
  
  const scale = useTransform(
    containerProgress,
    [index / total, 1],
    [startScale, endScale]
  );

  // Top position is fixed for stacking effect
  const topPosition = `calc(8% + ${index * 40}px)`;

  return (
    <motion.section
      className="sticky flex flex-col justify-center items-center h-screen"
      style={{
        top: topPosition,
        scale,
        zIndex: index + 1,
      }}
    >
      <article className="w-5/6 max-w-3xl bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-xl border border-indigo-700/50 rounded-3xl p-8 flex flex-col items-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
        {/* Video */}
        <div className="relative w-4/5 rounded-xl overflow-hidden mb-6 shadow-lg">
          <motion.video
            src={project.video}
            loop
            muted
            autoPlay
            playsInline
            className="w-full rounded-xl object-cover aspect-video"
          />
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-indigo-950/70 backdrop-blur-sm border border-indigo-600/50 text-indigo-100 text-xs px-3 py-1 rounded-full font-medium shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
          {project.title.split(" ").map((word, i) =>
            i === 2 || i === 3 ? (
              <span
                key={i}
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                {word}{" "}
              </span>
            ) : (
              <span key={i} className="text-white">{word} </span>
            )
          )}
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base text-center mb-6 leading-relaxed max-w-xl">
          {project.desc}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a className="px-5 py-2.5 flex items-center gap-2 rounded-lg border-2 border-purple-500/50 text-white hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 cursor-pointer font-medium">
            <FiExternalLink className="text-lg" /> Github
          </a>
          <a className="px-5 py-2.5 flex items-center gap-2 rounded-lg bg-purple-600/80 border-2 border-purple-500 text-white hover:bg-purple-600 hover:scale-105 transition-all duration-300 cursor-pointer font-medium shadow-lg">
            <FiExternalLink className="text-lg" /> Demo
          </a>
        </div>
      </article>
    </motion.section>
  );
};

const ProjectsPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="min-h-screen bg-transparent text-white flex flex-col">
      <h1 className="text-5xl font-bold text-center pt-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        MY PROJECTS
      </h1>

      <div ref={containerRef} className="relative" style={{ height: `${(projects.length + 1) * 100}vh` }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>
      
      <div className="h-32" />
    </main>
  );
};

export default ProjectsPage;